/* Build stamp — check this in the console to confirm which version is deployed.
   Bump it (and the ?v= query on the asset tags) whenever you publish. */
window.__build = "2026-08-17";

/* The browser default restores your previous scroll position on reload, which on
   a page this long lands you deep in the middle with no explanation. Scroll
   position here is controlled explicitly: no hash means top, #d-<id> means that
   dossier. Take manual control so the two do not fight. */
if ("scrollRestoration" in history) history.scrollRestoration = "manual";


/* ============================================================================
   HELPERS
   ============================================================================ */
const $  = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const byId = id => DOMAINS.find(d => d.id === id);
const cssVar = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
let flagSeq = 0;

/* A flagged claim: wraps html in a button that reveals the flag note below. */
function claim(html, key) {
  if (!key || !FLAGS[key]) return html;
  const id = "cl" + (++flagSeq);
  return `<button class="claim" type="button" data-flag="${key}" aria-expanded="false" aria-controls="${id}"
            title="Unverified — ${esc(FLAGS[key].t)}. Click for detail.">${html}<sup>?</sup></button>`
       + `<span class="claim-note" id="${id}"><b>${esc(FLAGS[key].t)}</b>${FLAGS[key].b}</span>`;
}

/* ---------------------------------------------------------------------------
   LINKIFY — turn every named program, lab, facility and code into a real link
   wherever it is mentioned in body copy. Runs on rendered DOM text nodes only,
   never inside an existing link, button or flagged claim.
   --------------------------------------------------------------------------- */
const LINKS = {
  "University Scholars Program":"https://cur.aa.ufl.edu/programs-university-scholars-program/",
  "Emerging Scholars Program":"https://cur.aa.ufl.edu/emerging-scholars-program/",
  "AI Scholars Program":"https://ai.research.ufl.edu/for-students/student-research-opportunity-listings/",
  "AI Scholars":"https://ai.research.ufl.edu/for-students/student-research-opportunity-listings/",
  "Whitney Lab REU":"http://reu.whitney.ufl.edu/",
  "Whitney REU":"http://reu.whitney.ufl.edu/",
  "Astronomy REU":"https://www.astro.ufl.edu/reu",
  "Chemistry REU in France":"https://reu.chem.ufl.edu/the-program",
  "Chemistry REU":"https://reu.chem.ufl.edu/the-program",
  "International REU in Gravitational Physics":"https://ireu.phys.ufl.edu/",
  "Physics IREU":"https://ireu.phys.ufl.edu/",
  "IoT4Ag REU":"https://iot4ag.us/reu-program/",
  "IoT4Ag":"https://iot4ag.us/",
  "USDA REEU":"https://www.eng.ufl.edu/surf/research-projects/",
  "Assured Autonomy & Networking REU":"https://www.eng.ufl.edu/surf/research-projects/",
  "SURF umbrella":"https://www.eng.ufl.edu/graduate/surf-application/",
  "Engineering SURF":"https://www.eng.ufl.edu/graduate/surf-application/",
  "SURF":"https://www.eng.ufl.edu/graduate/surf-application/",
  "Schmidt Lab":"https://faculty.eng.ufl.edu/schmidt/people/lab-opportunities/",
  "BME Undergraduate Research Guidebook":"https://www.bme.ufl.edu/wp-content/uploads/2023/08/2023-2024-Edition-UF-BME-Undergraduate-Research-Guidebook.pdf",
  "Undergraduate Research Guidebook":"https://www.bme.ufl.edu/wp-content/uploads/2023/08/2023-2024-Edition-UF-BME-Undergraduate-Research-Guidebook.pdf",
  "EGN4912":"https://www.eng.ufl.edu/undergraduate/programs-and-partnerships/center-for-experiential-learning/join-a-research-lab/",
  "IDH 4912":"https://www.honors.ufl.edu/academics/research/",
  "Florida Museum":"https://www.floridamuseum.ufl.edu/",
  "McGuire Center":"https://www.floridamuseum.ufl.edu/mcguire/",
  "Montbrook":"https://www.wuft.org/education/2025-12-15/theyre-really-digging-it-volunteers-revel-in-the-dirt-at-the-florida-museum-of-natural-historys-fossil-site",
  "Sea Turtle Hospital":"https://www.whitney.ufl.edu/conservation--sea-turtle-hospital/about-the-sea-turtle-hospital/",
  "Powell Family Structures and Materials Laboratory":"https://essie.ufl.edu/research-centers/facilities/powell-family-structures-materials-laboratory/",
  "Center for Coastal Solutions":"https://ccs.eng.ufl.edu/about-ccs/",
  "Nanoscale Research Facility":"https://nrf.aux.eng.ufl.edu/about.asp",
  "Particle Engineering Research Center":"https://erc-assoc.org/content/particle-engineering-research-center",
  "Machine Learning and Sensing Lab":"https://faculty.eng.ufl.edu/machine-learning/",
  "ML & Sensing Lab":"https://faculty.eng.ufl.edu/machine-learning/",
  "Quantum Theory Project":"https://qtp.ufl.edu/about/",
  "Center for Applied Optimization":"https://www.ise.ufl.edu/",
  "Sid Martin Biotech":"https://innovate.research.ufl.edu/accelerate/sid-martin-biotech/",
  "Goldwater":"https://studentsuccess.ufl.edu/success-stories/2025/ufs-2025-goldwater-scholars",
  "NSF GRFP":"https://news.ufl.edu/2026/07/2026-grfp/",
  "NSF REU Site Finder":"https://careerhub.ufl.edu/resources/nsf-reu-site-finder/",
  "Fall Expo":"https://cur.aa.ufl.edu/events-expo/",
  "Spring Symposium":"https://cur.aa.ufl.edu/events-expo/",
  "csrankings.org":"https://csrankings.org/",
  "nasonline.org":"https://www.nasonline.org/",
  "HiPerGator":"https://it.ufl.edu/rc/get-started/request-hipergator-account/",
  "CTSI":"https://www.ctsi.ufl.edu/",
  "FICS":"https://fics.institute.ufl.edu/",
  "AMRIS":"https://amris.mbi.ufl.edu/amris/",
  "UF Innovate":"https://innovate.research.ufl.edu/",
  /* Chinese institutions — every URL checked to resolve before being added */
  "Tsinghua University":"https://www.tsinghua.edu.cn/en/",
  "Tsinghua":"https://www.tsinghua.edu.cn/en/",
  "Peking University":"https://english.pku.edu.cn/",
  "Peking":"https://english.pku.edu.cn/",
  "USTC":"https://en.ustc.edu.cn/",
  "Shanghai Jiao Tong":"https://en.sjtu.edu.cn/",
  "Zhejiang University":"https://www.zju.edu.cn/english/",
  "Zhejiang":"https://www.zju.edu.cn/english/",
  "Fudan University":"https://www.fudan.edu.cn/en/",
  "Nanjing University":"https://www.nju.edu.cn/en/",
  "Nanjing":"https://www.nju.edu.cn/en/",
  "Harbin Institute of Technology":"http://en.hit.edu.cn/",
  "Harbin Institute of Tech.":"http://en.hit.edu.cn/",
  "Xi'an Jiaotong":"http://en.xjtu.edu.cn/",
  "Chinese Academy of Sciences":"https://english.cas.cn/",
  "CAS institutes":"https://english.cas.cn/",
  "IIIS":"https://iiis.tsinghua.edu.cn/en/",
  "Yao Class":"https://iiis.tsinghua.edu.cn/en/Yao_Class/About_Yao_Class.htm",
  "CSRankings":"https://csrankings.org/",
  "csrankings.org":"https://csrankings.org/",
  "Nature Index":"https://www.nature.com/nature-index/research-leaders/2025/institution/academic/all/global",
  "Schwarzman":"https://www.schwarzmanscholars.org/",
  "Yenching Academy":"https://yenchingacademy.pku.edu.cn/",
  "Chinese Government Scholarship":"https://www.campuschina.org/",
  "Wertheim Scripps":"https://wertheim.scripps.ufl.edu/",
  "Amgen Scholars":"https://amgenscholars.com/",
  "Section 117":"https://natlawreview.com/article/how-universities-can-prepare-new-higher-education-act-section-117-investigations"
};
const LINK_KEYS = Object.keys(LINKS).sort((a, b) => b.length - a.length);
const LINK_RE = new RegExp("(" + LINK_KEYS.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|") + ")", "g");

function linkify(root) {
  const seen = new Set();
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(n) {
      if (!n.nodeValue || !LINK_RE.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
      if (n.parentElement.closest("a, button, code, .claim-note, .srcs, .railitem, h1, h2, h3")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const targets = [];
  while (walker.nextNode()) targets.push(walker.currentNode);

  targets.forEach(node => {
    LINK_RE.lastIndex = 0;
    const txt = node.nodeValue;
    let m, last = 0, frag = null;
    while ((m = LINK_RE.exec(txt))) {
      if (seen.has(m[1])) continue;
      seen.add(m[1]);
      frag = frag || document.createDocumentFragment();
      frag.appendChild(document.createTextNode(txt.slice(last, m.index)));
      const a = document.createElement("a");
      a.href = LINKS[m[1]]; a.target = "_blank"; a.rel = "noopener";
      a.className = "autolink"; a.textContent = m[1];
      frag.appendChild(a);
      last = m.index + m[1].length;
    }
    if (frag) { frag.appendChild(document.createTextNode(txt.slice(last))); node.parentNode.replaceChild(frag, node); }
  });
}

/* ============================================================================
   HERO — contour field + stats
   ============================================================================ */
function drawContours() {
  const cv = $("#contours");
  if (!cv) return;
  const host = cv.parentElement;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const W = host.offsetWidth, H = host.offsetHeight;
  if (!W || !H) return;
  cv.width = W * dpr; cv.height = H * dpr;
  const g = cv.getContext("2d");
  g.scale(dpr, dpr);
  g.clearRect(0, 0, W, H);
  g.lineWidth = 1;

  // two contour systems, like a bathymetric chart — a peak and a basin
  const systems = [
    {cx: W * 0.80, cy: H * 0.30, base: 26, step: 24, rings: 15, k1: 3, k2: 5, a1: 0.22, a2: 0.10},
    {cx: W * 0.32, cy: H * 1.06, base: 34, step: 30, rings: 13, k1: 4, k2: 7, a1: 0.18, a2: 0.08}
  ];
  const stroke = cssVar("--accent") || "#008B9C";
  systems.forEach(s => {
    for (let r = 0; r < s.rings; r++) {
      const rad = s.base + r * s.step;
      const ph = r * 0.55;
      g.beginPath();
      for (let t = 0; t <= 360; t += 3) {
        const th = t * Math.PI / 180;
        const rr = rad * (1 + s.a1 * Math.sin(s.k1 * th + ph) + s.a2 * Math.sin(s.k2 * th - ph * 1.4));
        const x = s.cx + rr * Math.cos(th), y = s.cy + rr * Math.sin(th) * 0.82;
        t ? g.lineTo(x, y) : g.moveTo(x, y);
      }
      g.closePath();
      g.globalAlpha = 0.30 - r * 0.014;
      g.strokeStyle = stroke;
      g.stroke();
    }
  });
  g.globalAlpha = 1;
}


/* ============================================================================
   THE GAP FIGURE — one rank axis, three positions
   ============================================================================ */
function drawGap() {
  const marks = [
    {r: 3,  lbl: "Soltis Lab · LIGO instrumentation", sub: "top 3 in the world", key: true},
    {r: 30, lbl: "UF overall", sub: "#30 national · #7 public"},
    {r: 60, lbl: "Generic ML research at UF", sub: "roughly top 60"}
  ];
  const W = 1000, H = 210, L = 24, R = 24, TOP = 62, AX = 132;
  const pos = r => L + (Math.log10(r) / Math.log10(100)) * (W - L - R);
  const t1 = "var(--t1)", t3 = "var(--t3)";

  let ticks = "";
  [1, 3, 10, 30, 100].forEach(v => {
    const x = pos(v);
    ticks += `<line x1="${x}" y1="${AX - 6}" x2="${x}" y2="${AX + 6}" stroke="var(--rule)" stroke-width="1"/>
              <text x="${x}" y="${AX + 22}" class="axlabel" text-anchor="middle">#${v}</text>`;
  });

  let pts = "", i = 0;
  marks.forEach(m => {
    const x = pos(m.r), c = m.key ? t1 : (m.r > 40 ? t3 : "var(--ink-3)");
    const up = i !== 1;
    const ty = up ? TOP - 8 : AX + 52;
    const anchor = i === 0 ? "start" : (i === 2 ? "end" : "middle");
    const dx = i === 0 ? 0 : (i === 2 ? 0 : 0);
    pts += `<line x1="${x}" y1="${up ? ty + 6 : AX + 8}" x2="${x}" y2="${up ? AX - 8 : ty - 30}" stroke="${c}" stroke-width="1.5" stroke-dasharray="3 3" opacity=".7"/>
      <circle cx="${x}" cy="${AX}" r="7" fill="${c}" stroke="var(--surface)" stroke-width="2"/>
      <text x="${x + dx}" y="${ty}" text-anchor="${anchor}" fill="var(--ink)" font-family="var(--body)" font-size="15" font-weight="650">${esc(m.lbl)}</text>
      <text x="${x + dx}" y="${ty + 18}" text-anchor="${anchor}" fill="${c}" font-family="var(--mono)" font-size="11.5" letter-spacing=".05em">${esc(m.sub)}</text>`;
    i++;
  });

  const xa = pos(3), xb = pos(60), xc = pos(30);
  const bracket = `
    <g opacity=".95">
      <line x1="${xa}" y1="26" x2="${xb}" y2="26" stroke="var(--signal)" stroke-width="1.5"/>
      <line x1="${xa}" y1="26" x2="${xa}" y2="34" stroke="var(--signal)" stroke-width="1.5"/>
      <line x1="${xb}" y1="26" x2="${xb}" y2="34" stroke="var(--signal)" stroke-width="1.5"/>
      <text x="${(xa + xb) / 2}" y="18" text-anchor="middle" class="axlabel" fill="var(--signal)">The gap inside UF</text>
    </g>`;

  $("#gapfig").innerHTML = `
    <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="A logarithmic rank axis from #1 to #100. Soltis Lab and LIGO instrumentation sit at roughly rank 3. UF overall sits at rank 30. Generic machine-learning research at UF sits at roughly rank 60. The distance between the two internal positions is far larger than the distance between UF overall and the top of the axis.">
      <line x1="${L}" y1="${AX}" x2="${W - R}" y2="${AX}" stroke="var(--rule)" stroke-width="1.5"/>
      ${ticks}${bracket}${pts}
      <text x="${W - R}" y="${AX + 40}" text-anchor="end" class="axlabel">Approximate standing of the training environment →</text>
    </svg>`;
}

/* ============================================================================
   FILTER STATE
   ============================================================================ */
const FKEY = "uf-map-filters-v1";
let _saved = [];
try { _saved = JSON.parse(localStorage.getItem(FKEY) || "[]"); } catch (e) {}
const state = { tags: new Set(_saved), sel: null };

function matches(d) {
  return state.tags.size === 0 || d.tags.some(t => state.tags.has(t));
}

function buildTagbar(host, withClear) {
  host.innerHTML =
    `<span class="eyebrow" style="margin-right:.4rem">Filter by interest</span>` +
    TAGS.map(([id, label]) =>
      `<button class="chip" data-tag="${id}" aria-pressed="false">${esc(label)}</button>`).join("") +
    (withClear ? `<button class="chip clearer" data-tag="__clear">Clear</button>` : "");
  host.addEventListener("click", e => {
    const b = e.target.closest("[data-tag]"); if (!b) return;
    const t = b.dataset.tag;
    if (t === "__clear") state.tags.clear();
    else state.tags.has(t) ? state.tags.delete(t) : state.tags.add(t);
    syncFilters();
  });
}

function syncFilters() {
  try { localStorage.setItem(FKEY, JSON.stringify([...state.tags])); } catch (e) {}
  $$("[data-tag]").forEach(b => {
    if (b.dataset.tag === "__clear") return;
    b.setAttribute("aria-pressed", state.tags.has(b.dataset.tag) ? "true" : "false");
  });
  if (!document.querySelector("#mapcount")) { /* not the research page */ }
  $$(".node").forEach(n => n.classList.toggle("dim", !matches(byId(n.dataset.id))));
  $$("#dossrail .railitem").forEach(b => b.classList.toggle("hidden", !matches(byId(b.dataset.id))));
  // hide a tier heading whose whole group is filtered out
  $$("#dossrail .railhead").forEach(h => {
    let n = h.nextElementSibling, any = false;
    while (n && n.classList.contains("railitem")) { if (!n.classList.contains("hidden")) any = true; n = n.nextElementSibling; }
    h.classList.toggle("hidden", !any);
  });
  $$("[data-dom]").forEach(el => el.classList.toggle("hidden", !matches(byId(el.dataset.dom))));
  $$("[data-ctags]").forEach(el => {
    const t = el.dataset.ctags.split(" ");
    el.classList.toggle("hidden", state.tags.size > 0 && !t.some(x => state.tags.has(x)));
  });
  const visible = ORDER.filter(matches);
  if ($("#dossrail") && visible.length && state.sel && !matches(byId(state.sel))) selectDomain(visible[0].id, false);
  const n = DOMAINS.filter(matches).length;
  if ($("#mapcount")) $("#mapcount").textContent = `${n} of ${DOMAINS.length} domains shown`;
  $$(".railcount").forEach(el => el.textContent = `${n} of ${DOMAINS.length}`);
  if ($("#maptable")) renderTable();
  renderPeople();
}

/* ============================================================================
   THE MAP
   ============================================================================ */
const MAPLBL = {
  evo:     {dx:  16, dy:   4, a:"start"},
  ag:      {dx:  16, dy:  -7, a:"start"},
  wind:    {dx:  16, dy:   4, a:"start"},
  fics:    {dx: -14, dy: -12, a:"end"},
  gw:      {dx:  16, dy:  -8, a:"start"},
  whitney: {dx:   0, dy:  22, a:"middle"},
  hpg:     {dx:   0, dy: -16, a:"middle"},
  scripps: {dx: -14, dy:  16, a:"end"}
};

function drawMap() {
  const W = 1000, H = 640, PL = 78, PR = 26, PT = 30, PB = 74;
  const X = v => PL + (v / 100) * (W - PL - PR);
  const Y = v => (H - PB) - (v / 100) * (H - PT - PB);

  let g = "";

  // tier bands
  const bands = [
    {from: 76, to: 100, tier: 1},
    {from: 42, to: 76,  tier: 2},
    {from: 0,  to: 42,  tier: 3}
  ];
  bands.forEach(b => {
    const c = TIERS[b.tier].css;
    g += `<rect x="${PL}" y="${Y(b.to)}" width="${W - PL - PR}" height="${Y(b.from) - Y(b.to)}"
            fill="${c}" opacity=".028"/>`;
    if (b.from > 0) g += `<line x1="${PL}" y1="${Y(b.from)}" x2="${W - PR}" y2="${Y(b.from)}" stroke="var(--rule)" stroke-width="1" stroke-dasharray="4 5"/>`;
    g += `<text x="${PL + 8}" y="${Y(b.to) + 15}" class="tierband" fill="${c}" opacity=".9">Tier ${b.tier}</text>`;
  });

  // vertical hairlines
  [25, 50, 75].forEach(v => {
    g += `<line x1="${X(v)}" y1="${PT}" x2="${X(v)}" y2="${H - PB}" stroke="var(--hair)" stroke-width="1"/>`;
  });

  // frame
  g += `<rect x="${PL}" y="${PT}" width="${W - PL - PR}" height="${H - PT - PB}" fill="none" stroke="var(--rule)" stroke-width="1"/>`;

  // quadrant annotations
  g += `<text x="${X(2)}" y="${Y(96) + 34}" class="quad">easiest doors, best science</text>`;
  g += `<text x="${W - PR - 10}" y="${Y(76) - 12}" class="quad" text-anchor="end">worth the trip — if you plan a year ahead</text>`;
  g += `<text x="${W - PR - 10}" y="${H - PB - 14}" class="quad" text-anchor="end">loud, thin, and far away</text>`;

  // axis labels
  g += `<text x="${PL}" y="${H - PB + 34}" class="axlabel">← walk in</text>`;
  g += `<text x="${(PL + W - PR) / 2}" y="${H - PB + 34}" class="axlabel" text-anchor="middle">Access friction for an undergraduate</text>`;
  g += `<text x="${W - PR}" y="${H - PB + 34}" class="axlabel" text-anchor="end">compete nationally, relocate →</text>`;
  g += `<text transform="translate(20,${(PT + H - PB) / 2}) rotate(-90)" class="axlabel" text-anchor="middle">Research standing →</text>`;

  // nodes
  DOMAINS.forEach(d => {
    const x = X(d.x), y = Y(d.y), c = TIERS[d.tier].css;
    const L = MAPLBL[d.id];
    g += `<g class="node" data-id="${d.id}" tabindex="0" role="button" aria-label="${esc(d.name)} — Tier ${d.tier}">
      <title>${esc(d.name)} · Tier ${d.tier} · ${esc(FRICTION[d.friction - 1])}</title>
      <circle class="dot" cx="${x}" cy="${y}" r="8" fill="${c}" stroke="var(--plot)" stroke-width="2"/>
      <circle class="dot-hit" cx="${x}" cy="${y}" r="19" fill="transparent"/>
      ${L ? `<text class="maplabel" x="${x + L.dx}" y="${y + L.dy}" text-anchor="${L.a}">${esc(d.short)}</text>` : ""}
    </g>`;
  });

  // hover label layer (for unlabelled points)
  g += `<text id="hoverlbl" class="maplabel" x="0" y="0" opacity="0" text-anchor="middle"></text>`;

  $("#mapstage").innerHTML =
    `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Scatter plot of 21 UF research domains. The horizontal axis is access friction for an undergraduate; the vertical axis is research standing. A table version is available below the chart.">${g}</svg>`;

  // legend
  $("#legend").innerHTML = [1, 2, 3].map(t =>
    `<div class="legend-row"><span class="sw" style="background:${TIERS[t].css}"></span>
      <span><span class="lbl">${esc(TIERS[t].name)}</span><br><span class="sub">${esc(TIERS[t].sub)}</span></span></div>`
  ).join("");

  // interactions
  const stage = $("#mapstage");
  const hover = $("#hoverlbl");
  const showNode = el => {
    const d = byId(el.dataset.id);
    el.querySelector(".dot").setAttribute("r", 11);
    if (!MAPLBL[d.id]) {
      const c = el.querySelector(".dot");
      hover.setAttribute("x", c.getAttribute("cx"));
      hover.setAttribute("y", +c.getAttribute("cy") - 20);
      hover.textContent = d.short;
      hover.setAttribute("opacity", "1");
    }
    $("#readout").innerHTML =
      `<div class="ro-name">${esc(d.name)}</div>
       <div class="ro-meta">Tier ${d.tier} · ${esc(FRICTION[d.friction - 1])} · §${esc(d.sec)}</div>
       <div class="ro-why">${d.why}</div>
       <button class="chip ro-go" data-open="${d.id}">Open full dossier →</button>`;
  };
  const hideNode = el => {
    el.querySelector(".dot").setAttribute("r", 8);
    hover.setAttribute("opacity", "0");
  };
  $$(".node", stage).forEach(el => {
    el.addEventListener("mouseenter", () => showNode(el));
    el.addEventListener("focus", () => showNode(el));
    el.addEventListener("mouseleave", () => hideNode(el));
    el.addEventListener("blur", () => hideNode(el));
    const open = () => selectDomain(el.dataset.id, true);
    el.addEventListener("click", open);
    el.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
  });
}

function renderTable() {
  const rows = DOMAINS.filter(matches)
    .slice().sort((a, b) => a.tier - b.tier || b.y - a.y)
    .map(d => `<tr>
      <td><button class="linkish" data-open="${d.id}">${esc(d.name)}</button></td>
      <td class="n" style="color:${TIERS[d.tier].css}">Tier ${d.tier}</td>
      <td>${esc(FRICTION[d.friction - 1])}</td>
      <td>${esc(d.home)}</td></tr>`).join("");
  $("#maptable").innerHTML =
    `<table class="data"><thead><tr><th>Domain</th><th>Standing</th><th>Access</th><th>Home base</th></tr></thead><tbody>${rows}</tbody></table>`;
}

/* ============================================================================
   DOSSIERS
   ============================================================================ */
function personHTML(p) {
  const hon = (p.h || []).map(h => {
    const gone = /Emeritus|Retired|Departed|Interim/i.test(h);
    const top  = /^(NAS|NAE|NAM|Fields|Abel)/.test(h);
    return `<span class="hon ${gone ? "gone" : top ? "top" : ""}">${esc(h)}</span>`;
  }).join("");
  const nm = p.u ? `<a class="pn" href="${p.u}" target="_blank" rel="noopener">${esc(p.n)}</a>` : `<span class="pn">${esc(p.n)}</span>`;
  return `<div class="person">${nm}${hon}${p.d ? ` <span class="pd">— ${claim(p.d, p.hflag)}</span>` : ""}</div>`;
}

function frictionHTML(d) {
  const segs = [1,2,3,4,5].map(i => `<span class="fseg ${i <= d.friction ? "on" : ""}"></span>`).join("");
  return `<div class="friction">
    <div class="fmeter" role="img" aria-label="Access friction ${d.friction} of 5: ${esc(FRICTION[d.friction-1])}">${segs}</div>
    <span class="flabel">${d.friction}/5 · ${esc(FRICTION[d.friction - 1])}</span>
  </div>`;
}

/* ordered once — the rail, the reader's prev/next, and the map all share it */
const ORDER = DOMAINS.slice().sort((a, b) => a.tier - b.tier || b.y - a.y);

function drawRail() {
  let html = "", lastTier = 0;
  ORDER.forEach(d => {
    if (d.tier !== lastTier) {
      lastTier = d.tier;
      html += `<div class="railhead" style="--tc:${TIERS[d.tier].css}">${esc(TIERS[d.tier].name)}</div>`;
    }
    html += `<button class="railitem" data-id="${d.id}" style="--tc:${TIERS[d.tier].css}" aria-current="false">
      <span class="raildot"></span>
      <span><span class="railname">${esc(d.name)}</span>
      <span class="railmeta">${esc(FRICTION[d.friction - 1])} · §${esc(d.sec)}</span></span>
    </button>`;
  });
  $("#dossrail").innerHTML = html;
  $("#dossrail").addEventListener("click", e => {
    const b = e.target.closest("[data-id]"); if (!b) return;
    selectDomain(b.dataset.id, true);
  });
}

function renderReader(id) {
  const d = byId(id);
  const i = ORDER.indexOf(d);
  const prev = ORDER[i - 1], next = ORDER[i + 1];

  $("#reader").style.setProperty("--tc", TIERS[d.tier].css);
  $("#reader").innerHTML = `
    <div class="rd-head">
      <div class="rd-top">
        <span class="rd-tier">Tier ${d.tier} — ${esc(TIERS[d.tier].name.split("— ")[1])}</span>
        <span class="rd-sec">§${esc(d.sec)}</span>
        <span class="rd-nav">
          ${prev ? `<button class="chip" data-step="${prev.id}" title="${esc(prev.name)}">← ${esc(prev.short)}</button>` : ""}
          ${next ? `<button class="chip" data-step="${next.id}" title="${esc(next.name)}">${esc(next.short)} →</button>` : ""}
        </span>
      </div>
      <h3 class="rd-h">${esc(d.name)}</h3>
      <div class="rd-home">${esc(d.home)}</div>
    </div>

    <p class="rd-lede">${d.why}</p>

    <div class="rd-cols">
      <div class="dblock"><div class="h">The read</div><p>${claim(d.detail, d.detailFlag)}</p></div>
      <div class="dblock"><div class="h">Infrastructure</div><p>${claim(d.infra, d.infraFlag)}</p></div>
    </div>

    <div class="rd-rule"></div>

    <div class="dblock">
      <div class="h">Undergraduate access</div>
      ${frictionHTML(d)}
      <p>${claim(d.access, d.accessFlag)}</p>
      <ul class="doors">${d.doors.map(x => `<li>${x}</li>`).join("")}</ul>
    </div>

    <div class="verdict"><span class="vl">Focus verdict</span>${d.verdict}</div>

    ${OUTCOMES[d.id] ? `<div class="rd-rule"></div>
    <div class="dblock">
      <div class="h">Where this leads ${claim("— inferred, not sourced", "outcomes")}</div>
      <p class="out-mech" style="margin:0 0 1rem;font-size:.9rem">${OUTCOMES[d.id].mech}</p>
      <div class="rd-cols">
        <div class="out-col">
          <div class="h">Graduate leverage</div><p>${OUTCOMES[d.id].grad}</p>
          <div class="tags">${OUTCOMES[d.id].prog.map(x => `<span class="tag prog">${esc(x)}</span>`).join("")}</div>
        </div>
        <div class="out-col">
          <div class="h">Professional destinations</div><p>${OUTCOMES[d.id].ind}</p>
          <div class="tags">${OUTCOMES[d.id].emp.map(x => `<span class="tag">${esc(x)}</span>`).join("")}</div>
        </div>
      </div>
    </div>` : ""}

    ${d.people.length ? `<div class="rd-rule"></div>
    <div class="dblock">
      <div class="h">People — ${d.people.length} named</div>
      <div class="people">${d.people.map(personHTML).join("")}</div>
    </div>` : ""}

    <div class="srcs">${d.srcs.map(([t, u]) => `<a href="${u}" target="_blank" rel="noopener">${esc(t)} ↗</a>`).join("")}</div>`;

  linkify($("#reader"));
  $$("#dossrail .railitem").forEach(b => b.setAttribute("aria-current", b.dataset.id === id ? "true" : "false"));
  $("#reader").querySelectorAll("[data-step]").forEach(b =>
    b.addEventListener("click", () => selectDomain(b.dataset.step, true)));
}

function selectDomain(id, scroll, updateHash) {
  if (!byId(id)) return;
  state.sel = id;
  renderReader(id);
  /* Keep the selected row visible inside the rail WITHOUT moving the document.
     scrollIntoView scrolls every scrollable ancestor, the page included, so at
     boot this dragged the whole page down to the rail — the site opened ~2000px
     scrolled. Adjust the rail's own overflow instead. */
  const row = $(`#dossrail .railitem[data-id="${id}"]`);
  const rail = $("#dossrail");
  if (row && rail) {
    const rr = rail.getBoundingClientRect(), br = row.getBoundingClientRect();
    if (br.top < rr.top)          rail.scrollTop += br.top - rr.top - 8;
    else if (br.bottom > rr.bottom) rail.scrollTop += br.bottom - rr.bottom + 8;
  }
  if (scroll) {
    $("#reader").scrollIntoView({behavior: "smooth", block: "start"});
    $("#reader").focus({preventScroll: true});
  }
  if ((updateHash ?? scroll) && history.replaceState) history.replaceState(null, "", "#d-" + id);
}

/* ============================================================================
   CALENDAR
   ============================================================================ */
const TODAY_M = 11; // August sits in slot 11 of a Sept→Aug academic year

const trackState = new Set();
function drawCalendar() {
  const bar = $("#trackbar");
  if (bar && !bar.dataset.built) {
    bar.dataset.built = "1";
    bar.innerHTML = `<span class="eyebrow" style="margin-right:.4rem">Filter by track</span>` +
      [["research","Research &amp; labs"],["clubs","Clubs &amp; teams"],["abroad","Study abroad"]]
        .map(([k,l]) => `<button class="chip" data-track="${k}" aria-pressed="false">${l}</button>`).join("") +
      `<button class="chip clearer" data-track="__all">All</button>`;
    bar.addEventListener("click", e => {
      const b = e.target.closest("[data-track]"); if (!b) return;
      const k = b.dataset.track;
      if (k === "__all") trackState.clear();
      else trackState.has(k) ? trackState.delete(k) : trackState.add(k);
      $$("#trackbar [data-track]").forEach(x => x.dataset.track !== "__all" &&
        x.setAttribute("aria-pressed", trackState.has(x.dataset.track) ? "true" : "false"));
      drawCalendar();
    });
  }
  const inTrack = c => trackState.size === 0 || trackState.has(c.tr || "research");
  const counts = MONTHS.map((_, i) => CAL.filter(c => c.m === i && inTrack(c)));

  $("#yearstrip").innerHTML = MONTHS.map((m, i) => {
    const items = counts[i];
    const bars = items.map(c =>
      `<span class="ys-bar ${c.kind === "evt" ? "soft" : ""}" style="height:${c.kind === "evt" ? 11 : c.kind === "dl" ? 24 : 18}px"></span>`
    ).join("");
    return `<button class="ys-cell ${i === TODAY_M ? "now" : ""}" data-m="${i}">
      <span class="ys-m">${m}</span>
      <span class="ys-bars">${items.length ? bars : ""}</span>
      <span class="ys-n">${items.length || "·"}</span>
    </button>`;
  }).join("");

  $("#yearstrip").addEventListener("click", e => {
    const b = e.target.closest("[data-m]"); if (!b) return;
    $("#m-" + b.dataset.m).scrollIntoView({behavior: "smooth", block: "start"});
  });

  const kindName = {cur: "CUR program", reu: "REU", evt: "Event", dl: "Deadline"};
  const trName = {research: "Research", clubs: "Clubs", abroad: "Abroad"};
  let html = MONTHS.map((m, i) => {
    const items = CAL.filter(c => c.m === i && inTrack(c));
    if (!items.length) return "";
    return `<div class="month ${i === TODAY_M ? "now" : ""}" id="m-${i}">
      <div class="mrail">
        <span class="mname">${MONTH_FULL[i]}</span>
        <span class="myear">${MONTH_YEAR[i]}</span>
        ${i === TODAY_M ? `<span class="mnow">◂ you are here</span>` : ""}
      </div>
      <div class="entries">${items.map(c => `
        <div class="entry">
          <span class="e-when ${c.est ? "est" : ""}">${c.est ? claim(esc(c.when), "extrapolated") : esc(c.when)}</span>
          <span>
            <span class="e-name"><span class="e-kind k-tr-${c.tr || "research"}">${trName[c.tr || "research"]}</span><span class="e-kind k-${c.kind}">${kindName[c.kind]}</span>${c.u ? `<a href="${c.u}" target="_blank" rel="noopener">${esc(c.name)} ↗</a>` : esc(c.name)}</span>
            <span class="e-desc">${esc(c.desc)}</span>
          </span>
          <span class="e-money ${c.money ? "" : "none"}">${c.money ? esc(c.money) : "—"}</span>
        </div>`).join("")}</div>
    </div>`;
  }).join("");

  html += `<div class="month" id="m-undated">
    <div class="mrail"><span class="mname">No date</span><span class="myear">published</span></div>
    <div class="entries">
      <p style="font-size:.88rem;color:var(--ink-2);margin:0 0 .4rem">
        These are real programs whose deadlines are not on any public page. Email the program directly — that email
        is itself a useful first contact.</p>
      ${UNDATED.map(u => `<div class="entry" style="grid-template-columns:1fr">
        <span><span class="e-name">${u.u ? `<a href="${u.u}" target="_blank" rel="noopener">${esc(u.name)} ↗</a>` : esc(u.name)}</span><span class="e-desc">${esc(u.desc)}</span></span>
      </div>`).join("")}
    </div></div>`;
  $("#months").innerHTML = html;

  const next = CAL.find(c => c.m === 0);
  linkify($("#months"));
  $("#nextup").innerHTML = `<div class="callout" style="margin-bottom:1.6rem">
    <span class="eyebrow">As of 16 August 2026 · next up</span>
    <b>${esc(next.name)}</b>, ${esc(next.when)} — about three weeks away. After that the year is quiet until the
    <b>Emerging Scholars deadline in late November</b>, and then everything happens at once:
    <b>nine deadlines land between 12 January and 15 February</b>. Dashed dates are extrapolated from the last
    published cycle.</div>`;
}

/* ============================================================================
   LADDER + EMAIL
   ============================================================================ */
const LKEY = "uf-map-ladder-v1";
function drawLadder() {
  let saved = [];
  try { saved = JSON.parse(localStorage.getItem(LKEY) || "[]"); } catch (e) {}
  $("#ladderList").innerHTML = LADDER.map((r, i) => `
    <div class="rung ${saved.includes(i) ? "done" : ""}" data-i="${i}">
      <input type="checkbox" class="rung-check" id="rung${i}" ${saved.includes(i) ? "checked" : ""} aria-label="${esc(r.h)}">
      <div class="rung-body">
        <div class="rung-when">${esc(r.when)}</div>
        <h4>${r.u ? `<a href="${r.u}" target="_blank" rel="noopener">${esc(r.h)} ↗</a>` : esc(r.h)}</h4>
        <p>${esc(r.p)}</p>
      </div>
    </div>`).join("");

  const persist = () => {
    const on = $$(".rung-check").map((c, i) => c.checked ? i : -1).filter(i => i >= 0);
    try { localStorage.setItem(LKEY, JSON.stringify(on)); } catch (e) {}
    $$(".rung").forEach((r, i) => r.classList.toggle("done", on.includes(i)));
  };
  linkify($("#ladderList"));
  $("#fellows").innerHTML = FELLOWSHIPS.map(f => `<div class="fellow">
      <span class="fn">${f.u ? `<a href="${f.u}" target="_blank" rel="noopener">${esc(f.n)} ↗</a>` : esc(f.n)}</span>
      <span class="fm ${/Not available|None found/.test(f.m) ? "none" : ""}">${esc(f.m)}</span>
      <span class="fd">${claim(f.d, f.flag)}</span>
    </div>`).join("");
  $("#ladderList").addEventListener("change", persist);
  $("#resetLadder").addEventListener("click", () => {
    $$(".rung-check").forEach(c => c.checked = false); persist();
  });
}

function drawEmail() {
  const body = EMAIL.lines.map(l => {
    if (l.t === "") return "<br>";
    const inner = l.slot ? `<span class="slot">${esc(l.t)}</span>` : esc(l.t);
    if (l.a == null) return inner;
    return `<button class="ann" type="button" data-ann="${l.a}" aria-expanded="false">${inner}<span class="ann-tag">${l.a}</span></button>`;
  }).join("");

  $("#emailcard").innerHTML = `
    <div class="emailhead"><span class="eyebrow">Draft · outreach</span></div>
    <div class="emailbody">
      <div class="fieldline">To: <b>${esc(EMAIL.to)}</b></div>
      <div class="fieldline">Subject: <b>${esc(EMAIL.subj)}</b></div>
      <hr style="border:0;border-top:1px solid var(--hair);margin:.7rem 0">
      ${body}
    </div>
    <div class="annlist">${EMAIL.notes.map(n =>
      `<div class="annitem" data-note="${n.n}"><span class="n">${n.n}</span><span>${n.t}</span></div>`).join("")}</div>`;

  $("#emailcard").addEventListener("click", e => {
    const b = e.target.closest(".ann"); if (!b) return;
    const on = b.getAttribute("aria-expanded") === "true";
    $$(".ann").forEach(a => a.setAttribute("aria-expanded", "false"));
    $$(".annitem").forEach(a => a.classList.remove("hl"));
    if (!on) {
      b.setAttribute("aria-expanded", "true");
      const note = $(`.annitem[data-note="${b.dataset.ann}"]`);
      if (note) { note.classList.add("hl"); note.scrollIntoView({behavior: "smooth", block: "nearest"}); }
    }
  });
}

/* ============================================================================
   STRATEGIES · EVIDENCE · PEOPLE · SOURCES
   ============================================================================ */
function drawClubs() {
  $("#clubgrid").innerHTML = CLUBS.map((c, i) => `
    <div class="club" data-ctags="${c.tags.join(" ")}" style="--tc:${TIERS[c.tier].css}">
      <div class="club-top">
        <span class="club-tier">${c.tier === 1 ? "Nationally dominant" : c.tier === 2 ? "Strong &amp; real" : "Be skeptical"}</span>
        ${c.u ? `<span class="club-src"><a href="${c.u}" target="_blank" rel="noopener">source ↗</a></span>` : ""}
      </div>
      <div>
        <div class="club-n">${esc(c.n)}</div>
        <div class="club-home">${esc(c.home)}</div>
      </div>
      <p>${claim(c.rec, c.flag)}</p>
      ${c.why ? `<p class="block"><span class="lab">Why it matters</span>${c.why}</p>` : ""}
      ${c.people ? `<p class="block"><span class="lab">People &amp; context</span>${c.people}</p>` : ""}
      <p class="block"><span class="lab">Getting in</span>${c.acc}</p>
      ${c.grad ? `<p class="block"><span class="lab">Graduate leverage</span>${c.grad}</p>` : ""}
      ${c.dest ? `<div class="${c.grad ? "" : "block"}"><div class="tags">${c.dest.map(x => `<span class="tag">${esc(x)}</span>`).join("")}</div></div>` : ""}
    </div>`).join("");
  linkify($("#clubgrid"));

  $("#fairnote").innerHTML = `<span class="eyebrow">The one date that matters right now</span>
    The <b>UF Fall 2026 Student Organization Fair</b> is
    <a href="https://www.oconnellcenter.ufl.edu/events/uf-fall-2026-student-organization-fair/" target="_blank" rel="noopener">27 August 2026, 4:00pm, at the O'Connell Center</a>
    — <b>eleven days from this page's survey date</b>, and the highest-leverage two hours available to a new student.
    Pick six targets from below before you go; the fair rewards the organisations with the best table displays, which is
    not the same set as the ones with the best outcomes. Ask every table the same three questions —
    <b>when do you recruit, what does a first-year actually do, how many hours a week</b> — because the answers separate
    real teams from mailing lists faster than anything else. Competition teams recruit on the
    <b>semester boundary</b>, not continuously: miss the window and you generally wait a full term.
    ${claim("Reading this after August? Most technical teams still take members through the first few weeks, and all of them recruit again in January — email rather than waiting.", "clubfair")}`;
}

function drawOutcomes() {
  $("#lineage").innerHTML = PEDIGREE.map(l => {
    const d = byId(l.d);
    return `<button class="lin" data-open="${l.d}" data-dom="${l.d}" style="--tc:${TIERS[d.tier].css}">
      <span class="lp">${esc(l.p)}</span>
      <span class="lf">${esc(l.from)}</span>
      <span class="lw">${esc(l.w)}</span>
    </button>`;
  }).join("");

  $("#outrows").innerHTML = ORDER.filter(d => OUTCOMES[d.id]).map(d => {
    const o = OUTCOMES[d.id];
    return `<div class="outrow" data-dom="${d.id}" style="--tc:${TIERS[d.tier].css}">
      <div class="out-id">
        <span class="out-tier">Tier ${d.tier} · ${esc(FRICTION[d.friction - 1])}</span>
        <button class="out-name" data-open="${d.id}">${esc(d.name)}</button>
        <p class="out-mech">${o.mech}</p>
      </div>
      <div class="out-col">
        <div class="h">Graduate leverage</div><p>${o.grad}</p>
        <div class="tags">${o.prog.map(x => `<span class="tag prog">${esc(x)}</span>`).join("")}</div>
      </div>
      <div class="out-col">
        <div class="h">Professional destinations</div><p>${o.ind}</p>
        <div class="tags">${o.emp.map(x => `<span class="tag">${esc(x)}</span>`).join("")}</div>
      </div>
    </div>`;
  }).join("");
  linkify($("#outrows"));
}

function drawStrats() {
  $("#strats").innerHTML = STRATS.map(s => `
    <div class="strat">
      <span class="letter">${s.L}</span>
      <h3>${esc(s.h)}</h3>
      <p>${s.p}</p>
      <div class="picks">${s.picks.map(id => {
        const d = byId(id);
        return `<button class="pick" data-goto="${id}">${esc(d.short)}</button>`;
      }).join("")}</div>
    </div>`).join("") + `
    <div class="strat" style="border-style:dashed">
      <span class="letter" style="color:var(--signal)">+</span>
      <h3>Cutting across all three</h3>
      <p>Apply to <b>two REUs your first eligible winter</b> — one at UF and one elsewhere. UF's own advisors recommend
      the external one; it diversifies your letters and shows you a second research culture before PhD applications.
      The Chemistry REU in France and the Physics IREU in Europe and Australasia are unusual, under-applied-to
      opportunities that most UF students never hear about.</p>
      <div class="picks"><button class="pick" data-goto="chem">Chemistry REU · France</button><button class="pick" data-goto="gw">Physics IREU</button></div>
    </div>`;

  $("#strats").addEventListener("click", e => {
    const b = e.target.closest("[data-goto]"); if (!b) return;
    selectDomain(b.dataset.goto, true);
  });
}

function drawEvidence() {
  $("#evgrid").innerHTML = ["confirmed", "refuted", "open"].map(k => {
    const e = EVIDENCE[k];
    return `<div class="evcol ${e.cls}">
      <h4><span class="evicon">${e.icon}</span>${esc(e.label)}<span class="cnt">${e.items.length}</span></h4>
      <p style="font-size:.84rem;color:var(--ink-3);margin:.3rem 0 0;line-height:1.45">${esc(e.note)}</p>
      <ul class="evlist">${e.items.map(i => `<li>${i}</li>`).join("")}</ul>
    </div>`;
  }).join("");
}

let renderPeople = () => {};
function drawPeople() {
  const all = [];
  DOMAINS.forEach(d => d.people.forEach(p => all.push({...p, dom: d.short, did: d.id, tier: d.tier})));
  all.sort((a, b) => (a.n.split(" ").pop()).localeCompare(b.n.split(" ").pop()));

  const render = () => {
    const q = $("#psearch") ? $("#psearch").value : "";
    const t = q.trim().toLowerCase();
    const hit = all.filter(p => matches(byId(p.did))).filter(p => !t ||
      (p.n + " " + (p.h || []).join(" ") + " " + (p.d || "") + " " + p.dom).toLowerCase().includes(t));
    $("#pindex").innerHTML = hit.length ? hit.map(p => `
      <div class="prow">
        <span class="pnm">${p.u ? `<a href="${p.u}" target="_blank" rel="noopener">${esc(p.n)}</a>` : esc(p.n)}
          ${(p.h || []).slice(0, 2).map(h => `<span class="hon ${/Emeritus|Retired|Departed|Interim/i.test(h) ? "gone" : /^(NAS|NAE|NAM|Fields|Abel)/.test(h) ? "top" : ""}">${esc(h)}</span>`).join("")}</span>
        <span class="pnt">${esc((p.d || "").replace(/<[^>]+>/g, ""))}</span>
        <span class="pdm"><span class="pdot" style="background:${TIERS[p.tier].css}"></span><button class="linkish" data-open="${p.did}">${esc(p.dom)} →</button></span>
      </div>`).join("")
      : `<div class="prow"><span class="pnt">No researcher matches ${t ? `“${esc(q)}”` : "the selected interests"}${t && state.tags.size ? " within the selected interests" : ""}.</span></div>`;
    $("#pcount").textContent = `${hit.length} of ${all.length}`;
  };
  renderPeople = render;
  render();
  $("#psearch").addEventListener("input", render);
}


/* ============================================================================
   GLOBAL BEHAVIOURS
   ============================================================================ */
document.addEventListener("click", e => {
  const b = e.target.closest(".claim");
  if (!b) return;
  const note = document.getElementById(b.getAttribute("aria-controls"));
  const open = b.getAttribute("aria-expanded") === "true";
  b.setAttribute("aria-expanded", String(!open));
  if (note) note.classList.toggle("open", !open);
});

if ($("#skepticBtn")) $("#skepticBtn").addEventListener("click", () => {
  const on = document.body.classList.toggle("skeptic-on");
  $("#skepticBtn").setAttribute("aria-pressed", String(on));
  try { localStorage.setItem("uf-map-skeptic", on ? "1" : "0"); } catch (e) {}
  if (!on) {
    $$(".claim-note.open").forEach(n => n.classList.remove("open"));
    $$(".claim[aria-expanded='true']").forEach(c => c.setAttribute("aria-expanded", "false"));
  }
});

if ($("#tableToggle")) $("#tableToggle").addEventListener("click", () => {
  const t = $("#maptable"), on = t.hidden;
  t.hidden = !on;
  $("#tableToggle").setAttribute("aria-pressed", String(on));
  $("#tableToggle").textContent = on ? "Hide table" : "Show as table";
});

/* any control anywhere can open a dossier */
document.addEventListener("click", e => {
  const b = e.target.closest("[data-open]");
  if (b) selectDomain(b.dataset.open, true);
});

/* ============================================================================
   ABROAD RENDERERS
   ============================================================================ */
function drawFellowships() {
  const host = $("#fellowgrid"); if (!host) return;
  host.innerHTML = FELLOWS_ABROAD.map(f => `
    <div class="club" style="--tc:${f.t === 1 ? "var(--t1)" : "var(--t2)"}">
      <div class="club-top">
        <span class="club-tier">${f.t === 1 ? "Elite" : "Major"}</span>
        <span class="club-src dl dl-${f.dlKey}">${esc(f.dl)}</span>
      </div>
      <div>
        <div class="club-n">${f.u ? `<a href="${f.u}" target="_blank" rel="noopener">${esc(f.n)}</a>` : esc(f.n)}</div>
        <div class="club-home">${esc(f.dest)}</div>
      </div>
      <p>${claim(f.what, f.flag)}</p>
      <p class="block"><span class="lab">Eligibility</span>${f.elig}</p>
      <p class="block"><span class="lab">The odds</span>${f.quota}</p>
    </div>`).join("");
  linkify(host);
}

function drawResearchAbroad() {
  const host = $("#raGrid"); if (!host) return;
  host.innerHTML = RESEARCH_ABROAD.map(r => `
    <div class="club" style="--tc:${r.t === 1 ? "var(--t1)" : "var(--t2)"}">
      <div class="club-top">
        <span class="club-tier">${r.t === 1 ? "Tier 1" : "Strong"}</span>
        <span class="club-src dl">${esc(r.dl)}</span>
      </div>
      <div>
        <div class="club-n">${r.u ? `<a href="${r.u}" target="_blank" rel="noopener">${esc(r.n)}</a>` : esc(r.n)}</div>
        <div class="club-home">${esc(r.host)}</div>
      </div>
      <p>${claim(r.what, r.flag)}</p>
      <p class="block"><span class="lab">Money</span>${esc(r.money)}</p>
      <p class="block"><span class="lab">Eligibility</span>${r.elig}</p>
      <p class="block"><span class="lab">Why it counts</span>${r.why}</p>
    </div>`).join("");
  linkify(host);
}

let renderExchange = () => {};
function drawExchange() {
  const host = $("#exTable"); if (!host) return;
  const COL = {E:"Engineering", C:"CLAS", EC:"Both"};
  const render = () => {
    const q = ($("#exSearch").value || "").trim().toLowerCase();
    const t1only = $("#exT1").getAttribute("aria-pressed") === "true";
    const rows = EXCHANGE
      .filter(x => !t1only || x.t === 1)
      .filter(x => !q || (x.n + " " + x.c + " " + x.d + " " + x.w).toLowerCase().includes(q))
      .sort((a, b) => a.t - b.t || a.n.localeCompare(b.n));
    host.innerHTML = `<table class="data"><thead><tr>
        <th>Institution</th><th>Country</th><th>Standing</th><th>Terms</th><th>Recommended for</th><th>Via</th>
      </tr></thead><tbody>${rows.map(x => `<tr>
        <td><b>${esc(x.n)}</b><br><span style="color:var(--ink-3);font-size:.92em">${x.w}</span></td>
        <td>${esc(x.c)}</td>
        <td class="n" style="color:${TIERS[x.t].css};white-space:nowrap">${x.t === 1 ? "Elite" : x.t === 2 ? "Strong" : "Applied sci."}</td>
        <td style="white-space:nowrap">${esc(x.term)}</td>
        <td>${esc(x.d)}</td>
        <td class="n">${COL[x.col]}</td>
      </tr>`).join("")}</tbody></table>`;
    $("#exCount").textContent = `${rows.length} of ${EXCHANGE.length}`;
  };
  renderExchange = render;
  render();
  $("#exSearch").addEventListener("input", render);
  $("#exT1").addEventListener("click", e => {
    const on = e.currentTarget.getAttribute("aria-pressed") === "true";
    e.currentTarget.setAttribute("aria-pressed", String(!on));
    e.currentTarget.textContent = !on ? "Showing elite only" : "Elite destinations only";
    render();
  });
}

function drawAbroadMoney() {
  const host = $("#abroadMoney"); if (!host) return;
  host.innerHTML = ABROAD_MONEY.map(m => `<div class="fellow">
      <span class="fn"><a href="${m.u}" target="_blank" rel="noopener">${esc(m.n)} ↗</a></span>
      <span class="fm">${esc(m.m)}</span>
      <span class="fd">${m.d}</span>
    </div>`).join("");
  linkify(host);
}

function drawFacultyLed() {
  const host = $("#facultyLed"); if (!host) return;
  host.innerHTML = FACULTY_LED.map(n => `<span class="tag">${esc(n)}</span>`).join("");
}

/* ============================================================================
   BOOT — every renderer is guarded, so each page runs only what it contains
   ============================================================================ */
const has = sel => !!document.querySelector(sel);

if (has("#gapfig"))      drawGap();
if (has("#statstrip"))   $("#statstrip").innerHTML = STATS.map(x =>
  `<div class="stat"><span class="v">${esc(x.v)}</span><span class="k">${claim(esc(x.k), x.flag)}</span></div>`).join("");
if (has("#tagbar"))      buildTagbar($("#tagbar"), true);
if (has("#mapstage"))    drawMap();
if (has("#dossrail"))    drawRail();
if (has("#dosscontrols")) {
  buildTagbar($("#dosscontrols"), true);
  $("#dosscontrols").insertAdjacentHTML("beforeend", `<span class="pcount railcount" style="margin-left:auto"></span>`);
}
if (has("#clubgrid"))    { drawClubs(); buildTagbar($("#clubcontrols"), true); }
if (has("#outrows"))     { drawOutcomes(); buildTagbar($("#outcontrols"), true); }
if (has("#fellowgrid"))  drawFellowships();
if (has("#raGrid"))      drawResearchAbroad();
if (has("#exTable"))     drawExchange();
if (has("#abroadMoney")) drawAbroadMoney();
if (has("#facultyLed"))  drawFacultyLed();
if (has("#months"))      drawCalendar();
if (has("#ladderList"))  drawLadder();
if (has("#emailcard"))   drawEmail();
if (has("#strats"))      drawStrats();
if (has("#evgrid"))      drawEvidence();
if (has("#pindex"))      { drawPeople(); buildTagbar($("#peoplecontrols"), true); }
if (has("#srcline")) $("#srcline").innerHTML = SOURCES.map(([t, u]) =>
  `<a href="${u}" target="_blank" rel="noopener">${esc(t)}</a>`).join("");

syncFilters();
if (has("#contours")) requestAnimationFrame(() => requestAnimationFrame(drawContours));

let rt;
addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(drawContours, 160); });
matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => setTimeout(drawContours, 60));

/* deep links: #d-<id> selects that dossier (research page only) */
if (has("#dossrail")) {
  const fromHash = () => (location.hash.startsWith("#d-") ? location.hash.slice(3) : null);
  addEventListener("hashchange", () => { const id = fromHash(); if (id && id !== state.sel) selectDomain(id, true); });
  /* Arriving with #d-<id> is a deep link and should land you on the dossier;
     arriving with no hash should leave you at the top of the page. Passing
     `false` unconditionally meant a shared link selected the right entry and
     then left the reader off-screen. */
  const initial = fromHash();
  selectDomain(initial || ORDER[0].id, !!initial, false);
}

/* mark the current page in the masthead */
{
  const here = location.pathname.split("/").pop() || "index.html";
  $$(".tracklink").forEach(a => {
    const target = a.getAttribute("href");
    a.setAttribute("aria-current", target === here || (here === "" && target === "index.html") ? "page" : "false");
  });
}


/* ============================================================================
   THE GATOR — three shapes on the water, swimming down the page.

   What you actually see of an alligator floating in a Florida river is not an
   alligator. It is three disconnected shapes breaking the surface: the snout,
   the arch of the back, and the tail. Everything between is underwater.

   Pure line art — three closed outlines and nothing else. No markings, no
   detail inside the shapes. Each outline is drawn as one continuous smooth
   curve so the silhouette flows rather than facets.

   Scroll drives it down and across the page in repeating passes; each pass
   alternates direction. The undulation runs on its own clock, and because it
   grows toward the tail, the three pieces shift against each other the way a
   real swimming gator's do. It sits at z-index 0, so any panel with a
   background occludes it — it genuinely passes under the content.
   ============================================================================ */
window.__gator = (function gator() {
  // Reduced motion is a hard, permanent opt-out. The width gate is not — it has
  // to be re-checked on resize, or widening the window past the threshold would
  // leave him permanently absent (and narrowing it would leave him stranded).
  const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const wantsGator = () => !REDUCED && innerWidth >= 1000;

  const cv = document.createElement("canvas");
  cv.id = "gator";
  cv.setAttribute("aria-hidden", "true");
  let g = cv.getContext("2d");

  let W = 0, H = 0, dpr = 1;
  function resize() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    W = innerWidth; H = innerHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();

  /* The three shapes that break the surface. s runs 0 (snout tip) to 1 (tail
     tip) along the whole animal; each piece lists its span and its half-width
     profile in fractions of body length. The gaps between them are submerged. */
  const PIECES = [
    // Head. The bulge at t≈0.72 is the orbital ridge — the eyes are part of the
    // silhouette rather than a mark drawn inside it, which keeps this pure outline.
    { s0: 0.000, s1: 0.155, w: [[0, 0.004], [0.20, 0.021], [0.44, 0.029], [0.60, 0.030], [0.72, 0.039], [0.84, 0.033], [1, 0.023]] },
    // Back — one clean arch.
    { s0: 0.250, s1: 0.545, w: [[0, 0.022], [0.30, 0.049], [0.65, 0.046], [1, 0.024]] },
    // Tail — a long, unhurried taper to a point.
    { s0: 0.645, s1: 0.935, w: [[0, 0.019], [0.30, 0.014], [0.62, 0.009], [0.85, 0.005], [1, 0.0015]] }
  ];

  function lerpW(prof, t) {
    for (let i = 1; i < prof.length; i++) {
      if (t <= prof[i][0]) {
        const [t0, w0] = prof[i - 1], [t1, w1] = prof[i];
        const k = (t - t0) / (t1 - t0);
        return w0 + (w1 - w0) * (k * k * (3 - 2 * k));
      }
    }
    return prof[prof.length - 1][1];
  }

  /* spine point at s, in gator-local space, with the swimming undulation */
  function spineAt(s, L, phase) {
    // A longer wavelength reads as a slower, more graceful swim; squaring the
    // ramp keeps the head steady while the tail does most of the moving.
    const ramp = Math.max(0, (s - 0.16) / 0.84);
    const amp = L * 0.055 * ramp * ramp;
    return [-s * L, Math.sin(s * 4.2 - phase) * amp];
  }
  function tangentAt(s, L, phase) {
    const d = 0.004;
    const a = spineAt(Math.max(0, s - d), L, phase), b = spineAt(Math.min(1, s + d), L, phase);
    const dx = b[0] - a[0], dy = b[1] - a[1];
    const m = Math.hypot(dx, dy) || 1;
    return [dx / m, dy / m];
  }

  /* Draw a closed polygon as one continuous smooth curve. Each vertex becomes
     the control point of a quadratic whose endpoints are the midpoints of the
     adjoining edges — so the whole outline flows with no visible facets. */
  function smoothClosed(P) {
    const n = P.length;
    const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    const m0 = mid(P[n - 1], P[0]);
    g.moveTo(m0[0], m0[1]);
    for (let i = 0; i < n; i++) {
      const cur = P[i], m = mid(cur, P[(i + 1) % n]);
      g.quadraticCurveTo(cur[0], cur[1], m[0], m[1]);
    }
    g.closePath();
  }

  function drawGator(cx, cy, L, phase, heading, alpha) {
    g.save();
    g.translate(cx, cy);
    g.rotate(heading);
    g.strokeStyle = cssVar("--accent") || "#008B9C";
    g.globalAlpha = alpha;
    g.lineWidth = 1.05;
    g.lineJoin = "round";
    g.lineCap = "round";

    PIECES.forEach(piece => {
      const STEPS = 36;
      const fwd = [], back = [];
      for (let i = 0; i <= STEPS; i++) {
        const t = i / STEPS;
        const s = piece.s0 + (piece.s1 - piece.s0) * t;
        const [px, py] = spineAt(s, L, phase);
        const [tx, ty] = tangentAt(s, L, phase);
        const w = lerpW(piece.w, t) * L;
        fwd.push([px - ty * w, py + tx * w]);
        back.push([px + ty * w, py - tx * w]);
      }
      g.beginPath();
      smoothClosed(fwd.concat(back.reverse()));
      g.stroke();
    });

    g.restore();
  }

  /* ---- the pass it swims -------------------------------------------------
     One "pass" = LOOP px of scrolling. In each pass it enters above the
     viewport, descends past the bottom, and crosses laterally; consecutive
     passes alternate direction, and the switch happens off-screen. */
  const LOOP = 4200;

  /* Lateral reach. On a wide page the content column is capped, so there is real
     margin either side and he can weave out into it. On a narrow page there is no
     margin to weave into — so the second term grows as the viewport shrinks and
     carries him clear off the edge and back into view instead. */
  function reach() {
    return W * 0.46 + Math.max(0, 520 - W * 0.22);
  }

  function place(scroll) {
    const raw = scroll / LOOP;
    const idx = Math.floor(raw);
    const u = raw - idx;
    const dir = idx % 2 === 0 ? 1 : -1;

    // `cross` carries him from one side to the other over the pass, eased at both
    // ends so he lingers out near the margins rather than racing through them.
    // `weave` is a small ripple on top — deliberately at a frequency that does not
    // sit in antiphase with the crossing, or the two cancel and pin him mid-page.
    const cross = Math.sin((u - 0.5) * Math.PI);
    const weave = Math.sin(u * Math.PI * 4) * 0.16;

    return {
      x: W * 0.5 + (cross + weave) * dir * reach(),
      y: -H * 0.30 + u * H * 1.60
    };
  }

  /* He does not teleport to wherever the scroll says he should be. He *chases*
     that point, with a separate speed ceiling on each axis — and the vertical
     ceiling is the tighter of the two. That single asymmetry produces the
     behaviour we want without any special-casing: scroll slowly and he tracks
     the target, drifting down at the natural diagonal; scroll fast and his
     vertical speed saturates while the horizontal keeps up, so his real motion
     flattens toward horizontal, as though he were being swept by the current.
     Because heading is taken from his actual velocity rather than the target's,
     he is always pointing exactly where he is going. */
  // These are set so that unhurried reading stays *below* both ceilings — he
  // tracks the target and drifts down at his natural diagonal. A brisk scroll
  // crosses the vertical ceiling first and only later the horizontal one, so the
  // flattening comes on as a gradient rather than a switch.
  const MAX_VX = 800;    // px/sec across
  const MAX_VY = 260;    // px/sec down — the tighter ceiling is what flattens him
  const CHASE  = 1.9;    // how hard he pulls toward the scroll-derived target

  let phase = 0, last = performance.now(), raf = 0, mounted = false;
  let px = null, py = null, hdg = 0;

  function frame(now) {
    const ms = Math.min(64, now - last); last = now;
    const dt = ms / 1000;
    phase += ms * 0.0012;                       // undulation on its own clock

    const t = place(scrollY);
    if (px === null) { px = t.x; py = t.y; hdg = Math.PI / 2; }

    // exponential approach, then clamp the step on each axis independently
    const k = 1 - Math.exp(-dt * CHASE);
    let dx = (t.x - px) * k;
    let dy = (t.y - py) * k;
    const cx = MAX_VX * dt, cy = MAX_VY * dt;
    dx = Math.max(-cx, Math.min(cx, dx));
    dy = Math.max(-cy, Math.min(cy, dy));
    px += dx; py += dy;

    // heading follows where he is actually moving, eased so it never snaps
    if (Math.hypot(dx, dy) > 0.12) {
      let turn = Math.atan2(dy, dx) - hdg;
      while (turn >  Math.PI) turn -= 2 * Math.PI;
      while (turn < -Math.PI) turn += 2 * Math.PI;
      hdg += turn * (1 - Math.exp(-dt * 3.4));
    }

    const L = Math.min(280, W * 0.16);
    g.clearRect(0, 0, W, H);
    if (py > -H * 0.6 && py < H * 1.6) drawGator(px, py, L, phase, hdg, 0.32);

    raf = requestAnimationFrame(frame);
  }

  function start() {
    if (mounted) return;
    document.body.prepend(cv);
    mounted = true;
    resize();
    px = py = null;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  }
  function stop() {
    if (!mounted) return;
    cancelAnimationFrame(raf); raf = 0;
    cv.remove();
    mounted = false;
  }
  function sync() { wantsGator() ? start() : stop(); }

  sync();
  addEventListener("resize", () => { if (mounted) resize(); sync(); });

  // Some embedding contexts lay the page out after the script runs, reporting a
  // width of 0 at load. Watching the element itself catches that, where a resize
  // event alone would not.
  if (window.ResizeObserver) new ResizeObserver(() => { if (mounted) resize(); sync(); }).observe(document.documentElement);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) { if (raf) { cancelAnimationFrame(raf); raf = 0; } }
    else if (mounted && !raf) { last = performance.now(); raf = requestAnimationFrame(frame); }
  });

  return { pos: () => ({ x: px, y: py, heading: hdg }),
           drawInto(ctx, cx, cy, L, ph, hd, al) { const s0 = g; g = ctx; drawGator(cx, cy, L, ph, hd, al); g = s0; } };
})();

/* ============================================================================
   SECTION NAV — tabs for the current page, built from its own
   <section data-nav> labels, with scroll-spy. Pages with a single
   section get nothing, since tabs to one place are just noise.
   ============================================================================ */
(function sectionNav() {
  const host = document.getElementById("sectionnav");
  if (!host) return;
  const secs = [...document.querySelectorAll("section[data-nav]")];
  if (secs.length < 2) { host.hidden = true; return; }

  host.innerHTML = `<div class="sectionnav-in">` + secs.map(sec =>
    `<a class="seclink" href="#${sec.id}" data-for="${sec.id}" aria-current="false">${esc(sec.dataset.nav)}</a>`
  ).join("") + `</div>`;

  const links = new Map([...host.querySelectorAll(".seclink")].map(a => [a.dataset.for, a]));
  const bar = host.querySelector(".sectionnav-in");

  function mark(id) {
    links.forEach((a, key) => a.setAttribute("aria-current", key === id ? "true" : "false"));
    const a = links.get(id);
    // keep the active tab in view when the bar scrolls horizontally
    if (a && bar.scrollWidth > bar.clientWidth) {
      const l = a.offsetLeft, r = l + a.offsetWidth;
      if (l < bar.scrollLeft) bar.scrollTo({ left: l - 12, behavior: "smooth" });
      else if (r > bar.scrollLeft + bar.clientWidth) bar.scrollTo({ left: r - bar.clientWidth + 12, behavior: "smooth" });
    }
  }

  /* Spy on the band just under the two sticky bars: whichever section owns that
     line is the one the reader is actually looking at. Driven off scroll rather
     than IntersectionObserver because sections here are taller than the viewport,
     so "is it intersecting" is true for several at once and tells us nothing. */
  const barsH = () => {
    const cs = getComputedStyle(document.documentElement);
    return (parseInt(cs.getPropertyValue("--mast-h")) || 54) + (parseInt(cs.getPropertyValue("--nav-h")) || 40);
  };
  let ticking = false;
  function spy() {
    ticking = false;
    const line = barsH() + 12;
    let current = secs[0].id;
    for (const sec of secs) if (sec.getBoundingClientRect().top <= line) current = sec.id;
    // at the very bottom the last section may never cross the line — claim it
    if (innerHeight + scrollY >= document.body.scrollHeight - 4) current = secs[secs.length - 1].id;
    mark(current);
  }
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(spy); } }, { passive: true });
  addEventListener("resize", spy);
  spy();
})();

/* ============================================================================
   TARGET A SCHOOL — derived live from the map data rather than duplicated, so
   it can never drift out of step with it. The ranking is by person-ties first,
   because a person who trained somewhere is a warm introduction and a
   consortium agreement is only a form.
   ============================================================================ */
const ROUTE = {
  person:  {k:"Warm route",       c:"var(--t1)",     r:1},
  program: {k:"Structural route", c:"var(--accent)", r:2},
  dest:    {k:"No route yet",     c:"var(--t2)",     r:3},
  event:   {k:"You already go",   c:"var(--ok)",     r:4},
  absence: {k:"No route at all",  c:"var(--ink-3)",  r:5}
};

function drawTargets() {
  const host = document.getElementById("targetlist");
  if (!host) return;

  const nodes = [
    ...MAP_US.filter(n => n.role !== "uf"),
    ...WORLD_EXTRA.filter(e => e.kind === "fellow" || e.kind === "origin" || e.kind === "person")
      .map((e, i) => ({ id: "wt" + i, name: e.n, place: "abroad", role: "origin",
        links: [{ t: (e.kind === "origin" || e.kind === "person") ? "person" : "program",
                  who: (e.l || "").split(" — ")[0] || null, w: e.l || "", d: e.d }] }))
  ].map(n => {
    const by = t => n.links.filter(l => l.t === t);
    return { ...n, people: by("person"), progs: by("program"), dests: by("dest"),
             events: by("event"), absent: by("absence") };
  }).sort((a, b) => b.people.length - a.people.length || b.links.length - a.links.length
                    || a.name.localeCompare(b.name));

  const move = n => {
    if (n.people.length) {
      const names = n.people.map(p => p.who).filter(Boolean);
      return `<b>${names.length ? names.join(", ") : "A UF faculty member"}</b> trained or worked there.
        They know the department and, usually, people still inside it. The ask is not
        “will you write me a letter.” It is <b>“who should I be talking to there, and may I use your name?”</b>
        An introduction from a former student outranks any application essay.`;
    }
    if (n.progs.length) {
      return `UF is formally tied to this institution through <b>${esc(n.progs[0].w)}</b>. Consortium and
        joint-centre agreements routinely carry student mobility, shared seminars or summer placements that are
        never advertised to undergraduates. Ask the UF-side lead what exists before assuming it doesn't.`;
    }
    if (n.dests.length) {
      return `This appears as a plausible graduate destination in the lineage data, which is
        <b>inference, not a documented pipeline</b>. Nobody here can hand you an introduction. Build the case on
        your own record and treat the application as cold.`;
    }
    if (n.events.length) {
      return `UF teams already travel here to compete. That is a real, recurring point of contact —
        go with the team, and meet people while you are in the building.`;
    }
    return `UF has <b>no documented tie</b> here. That is the finding rather than a gap in the research.
      You would be applying entirely cold, so weight the rest of your application accordingly — and read the
      absence itself, since several of these are places that hold something UF does not.`;
  };

  const card = n => {
    const kind = n.people.length ? "person" : n.progs.length ? "program"
               : n.dests.length ? "dest" : n.events.length ? "event" : "absence";
    const R = ROUTE[kind];
    return `<div class="target" data-name="${esc(n.name.toLowerCase())}" style="--tc:${R.c}">
      <div class="t-head">
        <span class="t-route">${esc(R.k)}</span>
        <span class="t-count">${n.links.length} tie${n.links.length > 1 ? "s" : ""}</span>
      </div>
      <div class="t-name">${esc(n.name)}</div>
      ${n.people.length ? `<div class="t-who">${n.people.map(p =>
        `<span class="t-person">${p.who ? personChip(p.who) : ""}<i>${esc(p.w)}</i></span>`).join("")}</div>` : ""}
      <p class="t-move">${move(n)}</p>
    </div>`;
  };

  const render = q => {
    const t = q.trim().toLowerCase();
    const hit = nodes.filter(n => !t || n.name.toLowerCase().includes(t)
      || n.people.some(p => (p.who || "").toLowerCase().includes(t)));
    host.innerHTML = hit.length ? hit.map(card).join("")
      : `<p class="ro-hint">No institution on this map matches “${esc(q)}”.</p>`;
    $("#targetcount").textContent = `${hit.length} of ${nodes.length}`;
    linkify(host);
  };
  render("");
  $("#targetsearch").addEventListener("input", e => render(e.target.value));
}

/* a person chip that links out and through to their dossier, as on the map */
function personChip(who) {
  const hit = (typeof PERSON_INDEX !== "undefined") ? PERSON_INDEX.get(nameKey(who)) : null;
  if (!hit) return `<b>${esc(who)}</b>`;
  const nm = hit.url ? `<a href="${hit.url}" target="_blank" rel="noopener"><b>${esc(who)}</b></a>` : `<b>${esc(who)}</b>`;
  return `${nm} <a class="dosslink" href="index.html#d-${hit.dom}">${esc(hit.domName)} →</a>`;
}

/* ============================================================================
   CHINA — education first, then opportunity, then cost. The share chart is the
   one genuine part-to-whole comparison in the set, so it gets an actual bar
   rather than another number in a table.
   ============================================================================ */
function drawChina() {
  if (!document.getElementById("chinaC9")) return;

  /* linkify() deliberately links a term only once per container to avoid noise.
     The recommendation column is a list, so every institution in it has to be
     reachable — link these explicitly instead. */
  const instLink = name => {
    const t = name.trim();
    const key = Object.keys(LINKS).filter(k => t === k || t.startsWith(k))
                      .sort((a, b) => b.length - a.length)[0];
    return key ? `<a href="${LINKS[key]}" target="_blank" rel="noopener">${esc(t)}</a>` : esc(t);
  };
  const instList = str => str.split(",").map(instLink).join(", ");

  $("#chinaStats").innerHTML = CHINA_STATS.map(x =>
    `<div class="stat"><span class="v">${esc(x.v)}</span><span class="k">${claim(esc(x.k), x.flag)}</span></div>`).join("");

  $("#chinaC9").innerHTML = `<table class="data"><thead><tr>
      <th>University</th><th>City</th><th>You'd recognise it as</th><th>Known for</th></tr></thead><tbody>
    ${CHINA_C9.map(u => `<tr${u.star ? ' class="c9-key"' : ""}>
      <td><b>${instLink(u.n)}</b></td><td>${esc(u.c)}</td>
      <td class="c9-us">${esc(u.us)}</td><td>${esc(u.f)}</td></tr>`).join("")}
  </tbody></table>`;

  /* Global chemistry output, Nature Index 2025. One stacked bar: the comparison
     is the whole point, and three numbers in a row would bury it. */
  const parts = [["China", 53, "var(--t1)"], ["United States", 15, "var(--t2)"], ["Everyone else", 32, "var(--ink-3)"]];
  let x = 0;
  $("#chinaBar").innerHTML = `
    <div class="lab">Share of global chemistry output · Nature Index 2025</div>
    <svg viewBox="0 0 100 9" preserveAspectRatio="none" class="sharebar" role="img"
         aria-label="China 53 percent, United States 15 percent, everyone else 32 percent of global chemistry output.">
      ${parts.map(([n, v, c]) => { const r = `<rect x="${x}" y="0" width="${v - 0.4}" height="9" fill="${c}" rx="0.4"/>`; x += v; return r; }).join("")}
    </svg>
    <div class="sharekey">${parts.map(([n, v, c]) =>
      `<span><i style="background:${c}"></i>${esc(n)} <b>${v}%</b></span>`).join("")}</div>`;

  $("#chinaRoutes").innerHTML = CHINA_ROUTES.map(r => `
    <div class="club" style="--tc:${r.t === 1 ? "var(--t1)" : "var(--t2)"}">
      <div class="club-top">
        <span class="club-tier">${r.t === 1 ? "Fully funded" : "Entry route"}</span>
        ${r.u ? `<span class="club-src"><a href="${r.u}" target="_blank" rel="noopener">apply \u2197</a></span>` : ""}
      </div>
      <div><div class="club-n">${esc(r.n)}</div><div class="club-home">${esc(r.w)}</div></div>
      <p>${claim(r.d, r.flag)}</p>
      <p class="block"><span class="lab">What you get</span><b>${esc(r.money)}</b></p>
      <p class="block"><span class="lab">Odds</span>${esc(r.sel)}</p>
      ${r.dl ? `<p class="block"><span class="lab">Timing</span>${esc(r.dl)}</p>` : ""}
    </div>`).join("");
  linkify($("#chinaRoutes"));

  $("#chinaFields").innerHTML = `
    <div class="fieldcol yes">
      <h4>Where it is a clear step up</h4>
      ${CHINA_FIELDS.yes.map(([f, e, w]) => `<div class="fieldrow">
        <div class="fn">${esc(f)}</div><div class="fe">${esc(e)}</div>
        <div class="fw">${instList(w)}</div></div>`).join("")}
    </div>
    <div class="fieldcol no">
      <h4>Where it is not</h4>
      ${CHINA_FIELDS.no.map(([f, e]) => `<div class="fieldrow">
        <div class="fn">${esc(f)}</div><div class="fe">${esc(e)}</div></div>`).join("")}
    </div>`;
  linkify($("#chinaFields"));

  $("#chinaRisks").innerHTML = CHINA_RISKS.map((r, i) => `
    <div class="riskrow"><span class="rn">${String(i + 1).padStart(2, "0")}</span>
      <div><h4>${esc(r.h)}</h4><p>${r.d}</p></div></div>`).join("");
  linkify($("#chinaRisks"));
  linkify($("#chinaStats"));
}

/* ============================================================================
   MAPS — the same projections the outlines were built with, so plotted points
   land exactly on the coastlines rather than approximately near them.
   ============================================================================ */
const R = Math.PI / 180;
function projUS(lon, lat) {
  const p1 = 29.5 * R, p2 = 45.5 * R, lat0 = 37.5 * R, lon0 = -96;
  const n = 0.5 * (Math.sin(p1) + Math.sin(p2));
  const C = Math.cos(p1) ** 2 + 2 * n * Math.sin(p1);
  const rho0 = Math.sqrt(C - 2 * n * Math.sin(lat0)) / n;
  const rho = Math.sqrt(C - 2 * n * Math.sin(lat * R)) / n;
  const th = n * (lon - lon0) * R;
  const t = GEO_US.t;
  return [rho * Math.sin(th) * t.scale + t.ox, -(rho0 - rho * Math.cos(th)) * t.scale + t.oy];
}
function projWorld(lon, lat) {
  const A1 = 1.340264, A2 = -0.081106, A3 = 0.000893, A4 = 0.003796;
  const lam = ((((lon + 180) % 360) + 360) % 360 - 180) * R, phi = lat * R;
  const th = Math.asin(Math.sqrt(3) / 2 * Math.sin(phi));
  const t2 = th * th, t6 = t2 ** 3;
  const x = 2 * Math.sqrt(3) * lam * Math.cos(th) / (3 * (A1 + 3 * A2 * t2 + t6 * (7 * A3 + 9 * A4 * t2)));
  const y = th * (A1 + A2 * t2 + t6 * (A3 + A4 * t2));
  const t = GEO_WORLD.t;
  return [x * t.scale + t.ox, -y * t.scale + t.oy];
}

/* The map is institution-centric: each node is a place, and clicking it lists
   every documented connection UF has to it — people, programmes, events, and
   absences. No arcs: with 16 person-level links converging on a dozen coastal
   universities, the lines crossed the country in a tangle that hid the very
   thing they were meant to show. The node's own styling carries its role. */
const ROLE = {
  uf:      {c:"var(--t1)",     label:"UF's own site",        blurb:"A facility UF operates. Distance from Gainesville is the access story."},
  elite:   {c:"var(--t2)",     label:"Elite institution",    blurb:"Where UF's people trained, where its graduates go, or where an advisory board sits."},
  partner: {c:"var(--accent)", label:"Consortium partner",   blurb:"A documented institutional relationship — a named centre, joint hub or shared instrument."},
  origin:  {c:"var(--signal)", label:"Provenance & contrast",blurb:"Where a UF figure came from or went, or where something UF lacks actually is."}
};
const LINKT = {
  person:  {label:"Person",   c:"var(--t2)"},
  program: {label:"Programme",c:"var(--accent)"},
  dest:    {label:"Graduates go here", c:"var(--t2)"},
  event:   {label:"Event",    c:"var(--ok)"},
  absence: {label:"Absence",  c:"var(--ink-3)"}
};

const mapState = { types: new Set(Object.keys(LINKT)), sel: null, pinned: null };

/* Every person named on the map is already described somewhere in the research
   data, often with a source URL. Join the two so a name on the map is a way in
   rather than a dead end. Matching is on first+last name so that "Brent Sumerlin"
   finds "Brent S. Sumerlin" and "Warren Dixon" finds "Warren E. Dixon". */
const nameKey = n => {
  const parts = String(n)
    .replace(/[\u201c\u201d\u2018\u2019"']/g, "")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\b[a-z]\.\s*/g, " ")
    .replace(/[^a-z\s-]/g, " ")
    .trim().split(/\s+/).filter(Boolean);
  return parts.length ? parts[0] + " " + parts[parts.length - 1] : "";
};
const PERSON_INDEX = (() => {
  const m = new Map();
  if (typeof DOMAINS === "undefined") return m;
  DOMAINS.forEach(d => (d.people || []).forEach(pp => {
    const k = nameKey(pp.n);
    if (k && !m.has(k)) m.set(k, { url: pp.u || null, dom: d.id, domName: d.short });
  }));
  return m;
})();

function drawMaps() {
  if (!document.getElementById("usmap")) return;

  function visible(nd) { return nd.links.filter(l => mapState.types.has(l.t)); }

  function render(hostId, geo, proj, nodes, hub) {
    const host = document.getElementById(hostId), t = geo.t;
    const dots = nodes.map(nd => {
      const vis = visible(nd);
      if (!vis.length) return "";
      const st = ROLE[nd.role] || ROLE.partner;
      const [x, y] = proj(nd.lon, nd.lat);
      const hollow = vis.every(l => l.t === "absence");
      const n = vis.length;
      return `<g class="mnode" data-id="${nd.id}" tabindex="0" role="button"
                aria-label="${esc(nd.name)} — ${n} connection${n > 1 ? "s" : ""}">
        <title>${esc(nd.name)} · ${n} connection${n > 1 ? "s" : ""}</title>
        <circle class="mhit" cx="${x}" cy="${y}" r="17"/>
        <circle class="mdot" cx="${x}" cy="${y}" r="${5 + Math.min(n, 4) * 1.1}"
          fill="${hollow ? "none" : st.c}" stroke="${st.c}" stroke-width="${hollow ? 1.6 : 1.4}"
          stroke-dasharray="${hollow ? "2.5 2" : ""}"/>
      </g>`;
    }).join("");

    const H = hub ? proj(hub.lon, hub.lat) : null;
    host.innerHTML = `<svg viewBox="0 0 ${t.w} ${t.h}" role="img"
        aria-label="Map showing institutions UF is connected to. Point size reflects how many documented connections each has. Click any point for the list.">
      <g class="land">${geo.paths.map(d => `<path d="${d}"/>`).join("")}</g>
      ${H ? `<g class="hub"><circle cx="${H[0]}" cy="${H[1]}" r="10"/><circle cx="${H[0]}" cy="${H[1]}" r="3.4"/>
             <text x="${H[0]}" y="${H[1] - 17}" text-anchor="middle">UF</text></g>` : ""}
      <g class="dots">${dots}</g>
    </svg>`;

    /* Click pins a place and hover stops overriding it — otherwise reading a
       long entry is impossible, because the pointer crossing any other node on
       the way to the panel would swap the content out. Hover still previews
       freely while nothing is pinned. Clicking a pinned node again unpins it. */
    $$(".mnode", host).forEach(el => {
      const nd = nodes.find(n => n.id === el.dataset.id);
      const preview = () => { if (!mapState.pinned) showNode(nd); };
      const toggle = () => {
        mapState.pinned = mapState.pinned === nd.id ? null : nd.id;
        showNode(nd);
      };
      el.addEventListener("click", toggle);
      el.addEventListener("mouseenter", preview);
      el.addEventListener("focus", preview);
      el.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
    });
  }

  /* A person's name becomes a link to their source page where we have one, and
     always carries a link through to the dossier that describes their work. */
  function personLink(who) {
    const hit = PERSON_INDEX.get(nameKey(who));
    if (!hit) return `<b>${esc(who)}</b>`;
    const name = hit.url
      ? `<a href="${hit.url}" target="_blank" rel="noopener"><b>${esc(who)}</b> \u2197</a>`
      : `<b>${esc(who)}</b>`;
    return `${name} <a class="dosslink" href="index.html#d-${hit.dom}" title="Open the ${esc(hit.domName)} dossier">${esc(hit.domName)} \u2192</a>`;
  }

  function showNode(nd) {
    if (!nd) return;
    mapState.sel = nd.id;
    const vis = visible(nd);
    const pinned = mapState.pinned === nd.id;
    $("#mapreadout").innerHTML = `
      <div class="ro-name">${esc(nd.name)}</div>
      <div class="ro-meta">${esc(nd.place)} · ${vis.length} connection${vis.length > 1 ? "s" : ""}</div>
      <button class="pinstate" type="button" aria-pressed="${pinned}">${pinned
        ? "Pinned — click the point again, or here, to release"
        : "Click a point to pin it while you read"}</button>
      ${vis.map(l => `
        <div class="tierow" style="--tc:${LINKT[l.t].c}">
          <div class="tiekind">${esc(LINKT[l.t].label)}</div>
          <div class="tielabel">${l.who ? personLink(l.who) + " — " : ""}${esc(l.w)}</div>
          <div class="tiedetail">${claim(l.d, l.flag)}</div>
        </div>`).join("")}`;
    linkify($("#mapreadout"));
    const ps = $(".pinstate", $("#mapreadout"));
    if (ps) ps.addEventListener("click", () => {
      mapState.pinned = mapState.pinned ? null : nd.id;
      showNode(nd);
    });
    $$(".mnode").forEach(e => {
      e.classList.toggle("sel", e.dataset.id === nd.id);
      e.classList.toggle("pinned", mapState.pinned === e.dataset.id);
    });
  }

  function renderAll() {
    render("usmap", GEO_US, projUS, MAP_US, UF_HUB);
    const n = MAP_US.filter(nd => visible(nd).length).length;
    const links = MAP_US.reduce((a, nd) => a + visible(nd).length, 0);
    $("#mapcount2").textContent = `${n} US institutions · ${links} documented connections`;
  }

  $("#maplayers").innerHTML = Object.entries(LINKT).map(([k, v]) =>
    `<button class="chip maplayer" data-kind="${k}" aria-pressed="true">
       <span class="swatch" style="background:${v.c};border-color:${v.c}"></span>${esc(v.label)}</button>`).join("");
  $("#maplayers").addEventListener("click", e => {
    const b = e.target.closest("[data-kind]"); if (!b) return;
    const k = b.dataset.kind;
    mapState.types.has(k) ? mapState.types.delete(k) : mapState.types.add(k);
    b.setAttribute("aria-pressed", String(mapState.types.has(k)));
    renderAll();
  });
  $("#maplegend").innerHTML = Object.entries(ROLE).map(([k, v]) =>
    `<div class="legend-row"><span class="sw" style="background:${v.c}"></span>
      <span><span class="lbl">${esc(v.label)}</span><br><span class="sub">${esc(v.blurb)}</span></span></div>`).join("")
    + `<div class="legend-row"><span class="sw" style="background:transparent;box-shadow:0 0 0 1.5px var(--ink-3)"></span>
        <span><span class="lbl">Hollow</span><br><span class="sub">Every connection here is an absence — something UF does not have.</span></span></div>`;

  renderAll();
  showNode(MAP_US.find(n => n.id === "mit"));
}


/* ============================================================================
   THE WORLD MAP — regional, layered, labelled.

   Three problems with showing all 78 destinations on one world view: 32 of the
   55 exchange partners sit in Europe, which occupies roughly 120px of a 1000px
   world, so they overlap into mush; there is no room to label anything; and the
   flat rendering discarded the two facts the abroad page works hardest to
   establish — which destinations are elite, and which are Spring-only and so
   need a year of lead time.

   The fix is a viewBox crop per region. The coastlines are already in projected
   space, so zooming costs nothing and needs no re-projection — and at regional
   scale there is finally room to write the names on the map.
   ============================================================================ */
/* China's nine C9 universities made the old single Asia box unreadable — 92
   degrees of latitude in one frame. Split into East Asia and Oceania/SE Asia. */
const WORLD_REGION = {
  europe: {name:"Europe", countries:["United Kingdom","Spain","France","Germany","Switzerland","Sweden","Italy","Denmark","Finland","Netherlands","Belgium","Austria"], box:[-11,34,32,63]},
  easia:  {name:"East Asia", countries:["South Korea","Japan","China"], box:[103,20,146,50]},
  seasia: {name:"Oceania & SE Asia", countries:["Australia","Singapore","Malaysia","Indonesia"], box:[95,-42,156,14]},
  mea:    {name:"Middle East & Africa", countries:["Israel","Turkey","UAE","Egypt"], box:[24,20,58,45]},
  amer:   {name:"Americas", countries:["Colombia","Mexico","Argentina","Canada"], box:[-128,-38,-52,54]}
};
const WTYPE = {
  exchange: {n:"Exchange semester", c:"var(--t1)",     d:"You pay UF tuition; the partner's is waived."},
  research: {n:"Research placement", c:"var(--t2)",    d:"A funded summer in someone's lab, not a classroom."},
  fellow:   {n:"Fellowship", c:"var(--signal)",        d:"Where an elite award would send you."},
  origin:   {n:"Where UF's people came from", c:"var(--ink-3)", d:"Provenance of the faculty on this map."},
  noroute:  {n:"No UF route", c:"var(--bad)", d:"Strong destinations UF has no agreement with. You would apply direct."}
};

/* Long formal names are what collide. Strip the boilerplate for the on-map
   label; the readout still shows the full name. */
function shortName(n) {
  const acro = n.match(/\(([A-Z][A-Za-z]{1,5})\)/);
  if (acro) return acro[1];
  return n
    .replace(/ \(.*?\)/g, "")
    .replace(/^University of /, "")
    .replace(/^Universi(dad|tat|te|ty) (of |de |Politecnica de )?/i, "")
    .replace(/ University of Technology$/, "")
    .replace(/ Institute of Technology$/, "")
    .replace(/ University$/, "")
    .replace(/^Institut /, "")
    .replace(/^Technical University of /, "")
    .replace(/, University of London$/, "")
    .replace(/ of Applied Sciences$/, " UAS")
    .trim();
}

/* Which STEM fields a destination is recommended for, coloured by the same
   families the rest of the site filters on. */
const DISC_FAMILY = [
  [/aero|space/i,            "eng",      "Aerospace"],
  [/mechanic/i,              "eng",      "Mechanical"],
  [/civil/i,                 "eng",      "Civil"],
  [/industrial|systems/i,    "eng",      "Industrial"],
  [/material/i,              "physical", "Materials"],
  [/electric/i,              "comp",     "Electrical"],
  [/computer engineering/i,  "comp",     "Computer Eng."],
  [/computer science|\bCS\b/i,"comp",    "Computer Science"],
  [/biomedical/i,            "health",   "Biomedical"],
  [/chemistry|chemical/i,    "physical", "Chemistry"],
  [/physics|quantum/i,       "physical", "Physics"],
  [/environment|climate/i,   "earth",    "Environment"],
  [/math|statistic/i,        "math",     "Mathematics"]
];
const FAMILY_COLOR = { eng:"var(--t1)", comp:"var(--t2)", health:"var(--signal)",
  physical:"var(--accent)", earth:"var(--ok)", math:"var(--t2)" };

function discChips(str) {
  if (!str || str === "—") return "";
  if (/most majors/i.test(str))    return `<span class="dchip" style="--dc:var(--ink-3)">Open to most majors</span>`;
  if (/most graduate/i.test(str))  return `<span class="dchip" style="--dc:var(--ink-3)">Mostly graduate-level</span>`;
  const seen = new Set(), out = [];
  str.split(/,|\band\b/).forEach(part => {
    const hit = DISC_FAMILY.find(([re]) => re.test(part));
    if (hit && !seen.has(hit[2])) { seen.add(hit[2]);
      out.push(`<span class="dchip" style="--dc:${FAMILY_COLOR[hit[1]]}">${esc(hit[2])}</span>`); }
  });
  return out.length ? out.join("") : `<span class="dchip" style="--dc:var(--ink-3)">${esc(str)}</span>`;
}

const worldState = { region:"europe", types:new Set(Object.keys(WTYPE)), eliteOnly:false, springOnly:false, labels:false, sel:null };

function buildWorldNodes() {
  const out = [];
  EXCHANGE.forEach(x => {
    const c = WORLD_CITIES[x.n]; if (!c) return;
    const reg = Object.keys(WORLD_REGION).find(k => WORLD_REGION[k].countries.includes(x.c));
    out.push({ id:"x-"+x.n.replace(/\W+/g,""), name:x.n, place:x.c, lat:c[0], lon:c[1],
      type:"exchange", tier:x.t, region:reg, term:x.term, disc:x.d, college:x.col, why:x.w,
      spring: /Spring/.test(x.term) && !/Fall|Year/.test(x.term) });
  });
  /* Newcastle is both an exchange partner and a six-week research placement, so
     it plotted twice. Merging is the more useful answer anyway: the placement is
     extendable through the exchange, which is only legible when they are one
     entry rather than two dots on the same city. */
  WORLD_EXTRA.forEach((e,i) => {
    const dupe = out.find(o => o.name === e.n);
    if (dupe) {
      dupe.also = e.kind === "research" ? "Also a research placement site"
                : e.kind === "fellow" ? "Also a fellowship destination" : "";
      dupe.alsoWhy = e.d;
      return;
    }
    const t = e.kind === "research" ? "research" : e.kind === "fellow" ? "fellow" : "origin";
    const [lo,la] = [e.lon, e.lat];
    const reg = Object.keys(WORLD_REGION).find(k => {
      const [x0,y0,x1,y1] = WORLD_REGION[k].box; return lo>=x0 && lo<=x1 && la>=y0 && la<=y1;
    });
    out.push({ id:"w"+i, name:e.n, place:"", lat:la, lon:lo, type:t, tier:1, region:reg,
      term:"", disc:"", why:e.d, label:e.l || "" });
  });
  /* Tsinghua is both a C9 university and a Schwarzman destination, so it would
     otherwise plot twice. Where a name already exists, merge the context into it
     and keep the entry that has a real route — a route that exists is the more
     useful fact than the absence of an exchange agreement. */
  WORLD_NOROUTE.forEach((x,i) => {
    const dupe = out.find(o => o.name === x.n);
    if (dupe) { dupe.why = `${x.w} ${dupe.why}`; dupe.c9 = !!x.c9; return; }
    out.push({ id:"nr"+i, name:x.n, place:x.c, lat:x.lat, lon:x.lon, type:"noroute",
      tier:x.c9 ? 1 : 2, region:x.reg, term:"", disc:"", why:x.w, how:x.how, c9:!!x.c9 });
  });
  return out;
}

function drawWorld() {
  const host = document.getElementById("worldmap");
  if (!host) return;
  const NODES = buildWorldNodes();

  const shown = () => NODES.filter(n =>
    n.region === worldState.region &&
    worldState.types.has(n.type) &&
    (!worldState.eliteOnly || n.tier === 1) &&
    (!worldState.springOnly || n.spring));

  function render() {
    const R = WORLD_REGION[worldState.region];
    const list = shown();
    // viewBox from the region's geographic box, in the projection's own space
    const c1 = projWorld(R.box[0], R.box[3]), c2 = projWorld(R.box[2], R.box[1]);
    const pad = 14;
    const vx = Math.min(c1[0],c2[0]) - pad, vy = Math.min(c1[1],c2[1]) - pad;
    const vw = Math.abs(c2[0]-c1[0]) + pad*2, vh = Math.abs(c2[1]-c1[1]) + pad*2;

    /* Font size has to be derived from the ACTUAL rendered width, not an assumed
       1000px, or the labels come out roughly 60% of the intended size. */
    const cssW = host.clientWidth || 900;
    const px = v => v * (vw / cssW);          // desired screen px -> user units
    const FS = px(12.5);

    /* Greedy label placement. Sort by importance, try four positions per label,
       and drop any that still collides. A missing label is recoverable — you can
       hover the dot — but two labels written over each other are not. */
    const order = list.slice().sort((p, q) =>
      (q.type !== "exchange") - (p.type !== "exchange") || p.tier - q.tier || p.name.localeCompare(q.name));

    const geom = new Map();
    order.forEach(n => {
      const [x, y] = projWorld(n.lon, n.lat);
      const r = (n.type === "exchange" ? (n.tier === 1 ? 5.2 : n.tier === 2 ? 4 : 3.2) : 5) * px(1) * 1.15;
      geom.set(n.id, { x, y, r, txt: shortName(n.name) });
    });

    const dots = list.map(n => {
      const g = geom.get(n.id), T = WTYPE[n.type];
      return `<g class="wnode" data-id="${n.id}" tabindex="0" role="button" aria-label="${esc(n.name)}">
        <title>${esc(n.name)} · ${esc(T.n)}</title>
        <circle class="whit" cx="${g.x}" cy="${g.y}" r="${px(15)}"/>
        ${n.spring ? `<circle cx="${g.x}" cy="${g.y}" r="${g.r * 1.95}" fill="none" stroke="${T.c}"
           stroke-width="${px(1.2)}" stroke-dasharray="${px(2.4)} ${px(2.4)}" opacity=".85"/>` : ""}
        <circle class="wring" cx="${g.x}" cy="${g.y}" r="${g.r * 2.1}" fill="none"
          stroke="var(--accent)" stroke-width="${px(1.6)}"/>
        <circle class="wdot" cx="${g.x}" cy="${g.y}" r="${g.r}" fill="${T.c}"
          stroke="var(--plot)" stroke-width="${px(1.5)}"/>
        <text class="wlabel" data-lab="${n.id}" x="${g.x + g.r + px(4)}" y="${g.y + FS * 0.34}" text-anchor="start"
          style="font-size:${FS}px;stroke-width:${px(3.2)}px;visibility:hidden">${esc(g.txt)}</text>
      </g>`;
    }).join("");

    host.innerHTML = `<svg viewBox="${vx} ${vy} ${vw} ${vh}" role="img"
      aria-label="${esc(R.name)} — ${list.length} destinations. A full table is on the study abroad page.">
      <g class="land" style="stroke-width:${px(0.8)}px">${GEO_WORLD.paths.map(d=>`<path d="${d}"/>`).join("")}</g>
      <g class="dots">${dots}</g></svg>`;

    /* Measure the glyphs that were actually rendered rather than estimating from
       character count — the estimate ran ~15% short and let labels overlap. Then
       place greedily: four candidate positions each, and drop any that still
       collides. A dropped label is recoverable by hovering the dot; two labels
       written over each other are not. */
    const placed = [];
    const hits = (a, b) => !(a.x2 < b.x1 || a.x1 > b.x2 || a.y2 < b.y1 || a.y1 > b.y2);
    if (worldState.labels) order.forEach(n => {
      const g = geom.get(n.id);
      const el = host.querySelector(`[data-lab="${n.id}"]`);
      if (!el) return;
      const halo = px(4);                       // paint-order stroke bleeds outward
      const w = el.getComputedTextLength() + halo, h = FS * 1.45;
      const gap = g.r + px(4);
      const cands = [
        {x: g.x + gap, y: g.y + h * 0.32, a: "start"},
        {x: g.x - gap, y: g.y + h * 0.32, a: "end"},
        {x: g.x, y: g.y - gap - px(2), a: "middle"},
        {x: g.x, y: g.y + gap + h * 0.8, a: "middle"}
      ];
      for (const c of cands) {
        const x1 = c.a === "start" ? c.x : c.a === "end" ? c.x - w : c.x - w / 2;
        const box = {x1, x2: x1 + w, y1: c.y - h * 0.8, y2: c.y + h * 0.25};
        /* A label that leaves the frame is clipped by the SVG edge and reads as
           truncated text running into the detail panel. Reject those outright. */
        const inFrame = box.x1 >= vx + px(2) && box.x2 <= vx + vw - px(2)
                     && box.y1 >= vy + px(2) && box.y2 <= vy + vh - px(2);
        if (inFrame && !placed.some(pb => hits(box, pb))) {
          placed.push(box);
          el.setAttribute("x", c.x); el.setAttribute("y", c.y);
          el.setAttribute("text-anchor", c.a);
          el.style.visibility = "visible";
          break;
        }
      }
    });

    $$(".wnode", host).forEach(el => {
      const n = list.find(x => x.id === el.dataset.id);
      const show = () => showWorld(n);
      el.addEventListener("mouseenter", show);
      el.addEventListener("focus", show);
      el.addEventListener("click", show);
      el.addEventListener("keydown", e => { if (e.key==="Enter"||e.key===" ") { e.preventDefault(); show(); } });
    });
    $("#worldcount").textContent = `${list.length} in ${R.name}`;
    if (list.length) showWorld(list.find(n => n.tier === 1) || list[0]);
  }

  function showWorld(n) {
    if (!n) return;
    worldState.sel = n.id;
    const T = WTYPE[n.type];
    const tierName = n.type !== "exchange" ? T.n
      : n.tier === 1 ? "Elite exchange destination"
      : n.tier === 2 ? "Strong exchange" : "Applied-sciences institution";
    const stars = n.type === "exchange" ? "●".repeat(4 - n.tier) + "○".repeat(n.tier - 1) : "";
    $("#worldreadout").innerHTML = `
      <div class="ro-name">${esc(n.name)}</div>
      <div class="ro-meta" style="color:${T.c}">${stars ? stars + " " : ""}${esc(tierName)}${n.place ? " · " + esc(n.place) : ""}</div>
      <p class="ro-why">${n.why}</p>
      ${n.disc ? `<div class="w-fact"><span>Recommended for</span><div class="dchips">${discChips(n.disc)}</div></div>` : ""}
      ${n.term ? `<div class="w-fact"><span>Terms available</span><b>${esc(n.term)}</b>${n.spring
        ? `<em>Spring-only. Decide roughly a year ahead and sequence your major requirements around a semester you will not be on campus.</em>` : ""}</div>` : ""}
      ${n.college ? `<div class="w-fact"><span>You apply through</span><b>${
        n.college === "E" ? "Herbert Wertheim College of Engineering"
        : n.college === "C" ? "CLAS — Beyond120" : "Engineering or CLAS"}</b></div>` : ""}
      ${n.also ? `<div class="w-fact"><span>${esc(n.also)}</span>${n.alsoWhy}</div>` : ""}
      ${n.how ? `<div class="w-fact"><span>How you would get there</span><b>${esc(n.how)}</b></div>` : ""}
      ${n.label ? `<div class="w-fact"><span>Award</span><b>${esc(n.label)}</b></div>` : ""}
      ${n.type === "exchange" ? `<div class="w-fact"><span>Cost model</span><b>You pay UF tuition</b>
        <em style="color:var(--ink-3)">The partner's tuition is waived and your aid still applies.</em></div>` : ""}`;
    linkify($("#worldreadout"));
    $$(".wnode").forEach(e => e.classList.toggle("sel", e.dataset.id === n.id));
    /* SVG paints in document order, so the active node is moved last to keep its
       revealed name on top of any neighbour it happens to sit under. */
    const el = document.querySelector(`.wnode[data-id="${n.id}"]`);
    if (el && el.parentNode) el.parentNode.appendChild(el);
  }

  $("#worldtabs").innerHTML = Object.entries(WORLD_REGION).map(([k,v]) => {
    const c = NODES.filter(n => n.region === k).length;
    return `<button class="chip wtab" data-region="${k}" aria-pressed="${k===worldState.region}">${esc(v.name)} <b>${c}</b></button>`;
  }).join("");
  $("#worldtabs").addEventListener("click", e => {
    const b = e.target.closest("[data-region]"); if (!b) return;
    worldState.region = b.dataset.region;
    $$(".wtab").forEach(x => x.setAttribute("aria-pressed", String(x.dataset.region === worldState.region)));
    render();
  });

  $("#worldfilters").innerHTML =
    Object.entries(WTYPE).map(([k,v]) =>
      `<button class="chip wfilter" data-type="${k}" aria-pressed="true">
         <span class="swatch" style="background:${v.c};border-color:${v.c}"></span>${esc(v.n)}</button>`).join("")
    + `<button class="chip" data-flagtoggle="eliteOnly" aria-pressed="false">Elite only</button>`
    + `<button class="chip" data-flagtoggle="springOnly" aria-pressed="false">Spring-only</button>`
    + `<button class="chip" data-flagtoggle="labels" aria-pressed="false">Show all names</button>`;
  $("#worldfilters").addEventListener("click", e => {
    const t = e.target.closest("[data-type]"), f = e.target.closest("[data-flagtoggle]");
    if (t) { const k=t.dataset.type;
      worldState.types.has(k) ? worldState.types.delete(k) : worldState.types.add(k);
      t.setAttribute("aria-pressed", String(worldState.types.has(k))); }
    if (f) { const k=f.dataset.flagtoggle;
      worldState[k] = !worldState[k];
      f.setAttribute("aria-pressed", String(worldState[k])); }
    if (t || f) render();
  });

  render();
}

/* ---------------------------------------------------------------------------
   These renderers read module-level `const` tables (TIE, ROUTE, WORLD_REGION,
   worldState). Function declarations hoist; const declarations do not, so
   calling them inline throws a temporal-dead-zone ReferenceError if the call
   happens to sit above the table it needs — which it did, three times.
   queueMicrotask defers until this whole script has finished evaluating, so
   every top-level binding exists no matter where the call is written.
   --------------------------------------------------------------------------- */
queueMicrotask(() => {
  const run = (sel, fn) => { if (document.querySelector(sel)) fn(); };
  run("#usmap",      drawMaps);
  run("#worldmap",   drawWorld);
  run("#chinaC9",    drawChina);
  run("#targetlist", drawTargets);
});
