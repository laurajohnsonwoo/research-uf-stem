#!/usr/bin/env python3
"""
build-geo.py — TopoJSON to projected SVG paths.

    cd tools
    curl -O https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json
    curl -O https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json
    python3 build-geo.py .
    cp geo.js ../site/assets/geo.js

Emits the projection constants alongside the paths. app.js reimplements the same
two projections and reads those constants, which is what makes plotted points land
exactly on the coastlines. Change a projection here and change it there too.

Both projections negate Y: the standard formulations return Y increasing north,
SVG needs it increasing down.
"""
import json, math, os, sys
SP = sys.argv[1] if len(sys.argv) > 1 else os.path.dirname(os.path.abspath(__file__))

# ---------- TopoJSON decode ----------
def decode(topo):
    tr = topo.get('transform')
    sx, sy = (tr['scale'] if tr else (1,1)); tx, ty = (tr['translate'] if tr else (0,0))
    arcs = []
    for arc in topo['arcs']:
        x = y = 0; out = []
        for dx, dy in arc:
            x += dx; y += dy
            out.append((x*sx+tx, y*sy+ty) if tr else (x, y))
        arcs.append(out)
    return arcs

def ring(arcs, idxs):
    pts = []
    for i in idxs:
        a = arcs[~i][::-1] if i < 0 else arcs[i]
        pts.extend(a[1:] if pts else a)
    return pts

def polys(geom, arcs):
    t = geom.get('type')
    if t == 'Polygon':  return [ring(arcs, r) for r in geom['arcs']]
    if t == 'MultiPolygon': return [ring(arcs, r) for p in geom['arcs'] for r in p]
    return []

# ---------- projections ----------
def albers(lon, lat, lon0=-96, lat0=37.5, p1=29.5, p2=45.5):
    r = math.radians
    n = 0.5*(math.sin(r(p1))+math.sin(r(p2)))
    C = math.cos(r(p1))**2 + 2*n*math.sin(r(p1))
    rho0 = math.sqrt(C - 2*n*math.sin(r(lat0)))/n
    rho = math.sqrt(C - 2*n*math.sin(r(lat)))/n
    th = n*r(lon-lon0)
    return rho*math.sin(th), -(rho0 - rho*math.cos(th))   # negate: SVG y grows downward

A1,A2,A3,A4 = 1.340264, -0.081106, 0.000893, 0.003796
def equalearth(lon, lat, lon0=0):
    lam = math.radians(((lon-lon0+180) % 360)-180); phi = math.radians(lat)
    th = math.asin(math.sqrt(3)/2*math.sin(phi))
    t2 = th*th; t6 = t2**3
    x = 2*math.sqrt(3)*lam*math.cos(th)/(3*(A1 + 3*A2*t2 + t6*(7*A3 + 9*A4*t2)))
    y = th*(A1 + A2*t2 + t6*(A3 + A4*t2))
    return x, -y                                          # negate: SVG y grows downward

# ---------- Douglas-Peucker ----------
def dp(pts, tol):
    if len(pts) < 3: return pts
    def seg(p, a, b):
        (x,y),(x1,y1),(x2,y2)=p,a,b
        dx,dy=x2-x1,y2-y1
        if dx==0 and dy==0: return math.hypot(x-x1,y-y1)
        t=max(0,min(1,((x-x1)*dx+(y-y1)*dy)/(dx*dx+dy*dy)))
        return math.hypot(x-(x1+t*dx), y-(y1+t*dy))
    keep=[0,len(pts)-1]; stack=[(0,len(pts)-1)]
    while stack:
        i,j=stack.pop()
        if j-i<2: continue
        dmax,idx=0,i
        for k in range(i+1,j):
            d=seg(pts[k],pts[i],pts[j])
            if d>dmax: dmax,idx=d,k
        if dmax>tol:
            keep.append(idx); stack.append((i,idx)); stack.append((idx,j))
    return [pts[i] for i in sorted(set(keep))]

# ---------- build ----------
def build(fname, objkey, proj, W, H, skip_ids=(), minarea=0.0, latclip=None, tol=0.7, prec=1):
    topo = json.load(open(os.path.join(SP, fname)))
    arcs = decode(topo)
    rings = []
    for g in topo['objects'][objkey]['geometries']:
        if str(g.get('id')) in skip_ids: continue
        for r in polys(g, arcs):
            if latclip: r = [(x,y) for x,y in r if latclip[0] <= y <= latclip[1]]
            if len(r) < 4: continue
            xs=[p[0] for p in r]; ys=[p[1] for p in r]
            if (max(xs)-min(xs))*(max(ys)-min(ys)) < minarea: continue
            rings.append([proj(x,y) for x,y in r])
    xs=[p[0] for r in rings for p in r]; ys=[p[1] for r in rings for p in r]
    x0,x1,y0,y1 = min(xs),max(xs),min(ys),max(ys)
    s = min(W/(x1-x0), H/(y1-y0))*0.98
    ox = (W - (x1-x0)*s)/2 - x0*s
    oy = (H - (y1-y0)*s)/2 - y0*s
    paths=[]
    for r in rings:
        r = dp([(x*s+ox, y*s+oy) for x,y in r], tol)
        if len(r) < 4: continue
        d=[]; last=None
        for x,y in r:
            px=round(x,prec); py=round(y,prec)
            if (px,py)==last: continue
            d.append(f"{'M' if not d else 'L'}{px} {py}"); last=(px,py)
        if len(d)>3: paths.append(''.join(d)+'Z')
    return paths, dict(scale=round(s,5), ox=round(ox,3), oy=round(oy,3), w=W, h=H)

TERR = {'02','15','60','66','69','72','78'}   # AK, HI and territories — no nodes there
us_paths, us_t = build('states-10m.json','states', albers, 980, 600, skip_ids=TERR, minarea=0.0012, tol=0.8, prec=1)
w_paths,  w_t  = build('countries-110m.json','countries', equalearth, 1000, 520, minarea=0.9, latclip=(-58,84), tol=1.0, prec=0)

out = f"""/* Geography — decoded from public-domain Natural Earth derivatives
   (us-atlas states-10m, world-atlas countries-110m) at build time and inlined,
   so the page makes no external requests. US uses Albers conic (the standard
   projection for the lower 48); the world uses Equal Earth. The projection
   constants below are the same ones the outlines were built with, so plotted
   points land exactly on the coastlines. */
const GEO_US    = {{ paths: {json.dumps(us_paths)}, t: {json.dumps(us_t)} }};
const GEO_WORLD = {{ paths: {json.dumps(w_paths)}, t: {json.dumps(w_t)} }};
"""
open(os.path.join(SP,'geo.js'),'w').write(out)
print(f"US: {len(us_paths)} rings   World: {len(w_paths)} rings   size: {len(out)/1024:.0f} KB")
print("US transform:", us_t)
print("World transform:", w_t)
