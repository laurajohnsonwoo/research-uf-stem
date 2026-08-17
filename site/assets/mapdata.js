/* ===========================================================================
   MAP DATA — every location-aware fact already established elsewhere on this
   site, given coordinates.

   The `kind` on each tie is the load-bearing field. It encodes HOW WELL KNOWN
   the connection is, not just what sort it is, because these facts have very
   different evidence behind them:

     partner   documented institutional relationship, a named consortium, a
               joint hub, a shared centre. Verified.
     fellow    an elite fellowship's destination institution.
     grads     where graduates plausibly go. INFERRED — no placement data
               exists for any UF programme. Carries the `outcomes` flag.
     absent    UF has no tie at all. The absence IS the finding.
     compete   a competition UF's teams travelled to and placed in.
     uf        UF's own site.

   Coordinates are city/campus level and approximate to within a few km. They
   are for orientation, not navigation.
   =========================================================================== */

const UF_HUB = { name: "University of Florida", place: "Gainesville, FL", lat: 29.6436, lon: -82.3549 };

const MAP_US = [
  /* ---- UF's own Florida sites ---------------------------------------- */
  {id:"whitney", name:"Whitney Laboratory", place:"St. Augustine, FL", lat:29.665, lon:-81.216, role:"uf",
   links:[{t:"program", w:"UF marine bioscience lab · 1.5 hr", d:"Tier 1 for neural evolution and regeneration. The strongest formal undergraduate pipeline at UF, the REU has run continuously since 1987, with housing covered."},
          {t:"person", who:"Veronica Hinman", w:"Director since mid-2024", d:"Recruited from Carnegie Mellon to lead the lab."},
          {t:"person", who:"Leonid Moroz", w:"Distinguished Professor", d:"Led the 2014 <i>Nature</i> ctenophore genome paper establishing that comb jellies evolved nervous systems independently."}]},
  {id:"scripps", name:"Wertheim UF Scripps", place:"Jupiter, FL", lat:26.887, lon:-80.117, role:"uf",
   links:[{t:"program", w:"UF drug-discovery institute · 5 hr", d:"One in five PIs holds an NIH R35. Five hours from Gainesville with a national applicant pool, a competitive summer REU that happens to share your university's name."},
          {t:"person", who:"Matthew Disney", w:"Institute Professor, Chair of Chemistry", d:"PhD Rochester; postdoctoral training at MIT and ETH Zürich. Pioneer of small-molecule RNA-targeted drugs."}]},
  {id:"gcrec", name:"Gulf Coast REC", place:"Balm, FL", lat:27.760, lon:-82.226, role:"uf",
   links:[{t:"program", w:"Center for Applied AI in Agriculture · ~3 hr", d:"Broke ground 7 Nov 2025, state-legislature funded."}]},
  {id:"fmel", name:"Florida Medical Entomology Lab", place:"Vero Beach, FL", lat:27.585, lon:-80.416, role:"uf",
   links:[{t:"program", w:"UF/IFAS vector biology · ~3 hr", d:"Close ties to the Emerging Pathogens Institute's mosquito-borne disease work."}]},
  {id:"sidmartin", name:"Sid Martin Biotech", place:"Alachua, FL", lat:29.784, lon:-82.484, role:"uf",
   links:[{t:"program", w:"UF Innovate incubator · 20 min", d:"Operating since 1995. 25 wet labs, 13 active biotech companies."}]},
  {id:"montbrook", name:"Montbrook Fossil Dig", place:"Levy County, FL", lat:29.352, lon:-82.647, role:"uf",
   links:[{t:"program", w:"Florida Museum public dig · ~40 min", d:"Takes volunteers year-round with no experience. The lowest-friction door into a Tier 1 domain anywhere at UF."}]},
  {id:"rosemary", name:"Rosemary Hill Observatory", place:"Bronson, FL", lat:29.401, lon:-82.586, role:"uf",
   links:[{t:"program", w:"UF Astronomy · 30-inch · ~45 min", d:"UF's own telescope, plus a Campus Teaching Observatory in Gainesville."}]},

  /* ---- elite institutions, keyed by what actually connects them to UF -- */
  {id:"mit", name:"MIT", place:"Cambridge, MA", lat:42.360, lon:-71.092, role:"elite",
   links:[{t:"person", who:"Christine Schmidt", w:"NIH postdoctoral fellow at MIT", d:"Now J. Crayton Pruitt Family Professor at UF and the college's clearest current National Academy signal — elected to <b>both</b> the NAE and the National Academy of Medicine in 2024. Her lab accepts undergraduate applications on a rolling basis."},
          {t:"person", who:"Matthew Disney", w:"Postdoctoral training at MIT", d:"Now Institute Professor at Wertheim UF Scripps, running a globally recognised RNA-targeted drug discovery programme."},
          {t:"person", who:"Edwin Pedrozo-Peñafiel", w:"Recruited from MIT's Vuletić group, 2024", d:"Entanglement-enhanced optical atomic clocks, published in <i>Nature</i>. Part of UF Physics' deliberate quantum hiring cohort."},
          {t:"dest", w:"CSAIL — robotics and autonomy", d:"Named in the robotics lineage for SubjuGator and Machine Intelligence Lab students.", flag:"outcomes"}]},
  {id:"harvard", name:"Harvard University", place:"Cambridge, MA", lat:42.377, lon:-71.117, role:"elite",
   links:[{t:"person", who:"John G. Thompson", w:"Assistant at Harvard, 1961–62", d:"The first step of a path that ran through Chicago and Cambridge before reaching UF."}, {t:"person", who:"Robert D. Holt", w:"PhD Harvard 1979", d:"Physics at Princeton first, then a biology doctorate here. Now Eminent Scholar and Arthur R. Marshall Jr. Chair in Ecology at UF, and one of three sitting NAS members in a single department.", flag:"holt-yr"}, {t:"person", who:"Sarah Ballard", w:"PhD Harvard; former NASA Sagan Fellow", d:"Now at UF Astronomy. Her 2023 Cottrell Scholar award of $100,000 <b>explicitly funds an undergraduate research programme</b>, a rare, named, funded commitment."},
          {t:"program", w:"Directs the Amgen Scholars programme", d:"Harvard provides direction and technical assistance to Amgen Scholars, whose European and Asian sites — ETH Zürich, Cambridge, Karolinska, Institut Pasteur, LMU Munich, Kyoto, NUS, Tsinghua, Tokyo — are the most prestigious research-abroad hosts open to UF undergraduates."},
          {t:"dest", w:"Organismic & Evolutionary Biology", d:"Three sitting NAS members in one UF department is the strongest letter-writing bench on this map, and NAS members sit on the review panels these committees defer to.", flag:"outcomes"}]},
  {id:"caltech", name:"Caltech", place:"Pasadena, CA", lat:34.138, lon:-118.125, role:"elite",
   links:[{t:"person", who:"Clifford M. Will", w:"PhD Caltech 1971, under Kip Thorne", d:"Thorne shared the 2017 Nobel Prize for LIGO. Will's thesis produced the Parametrized Post-Newtonian formalism — still the standard framework for testing general relativity. Now a UF Distinguished Professor and NAS member, working on science return from LIGO, Virgo, KAGRA and LISA."}, {t:"person", who:"David Reitze", w:"UF faculty; Executive Director of the LIGO Laboratory", d:"The LIGO Lab is Caltech-based. The distinction that matters: many universities analyse LIGO data — UF <i>builds</i> LIGO, and its input-optics programme is a physical subsystem of the detector. Reitze shared the 2016 Special Breakthrough Prize with the LIGO team.", flag:"reitze"}]},
  {id:"cmu", name:"Carnegie Mellon", place:"Pittsburgh, PA", lat:40.443, lon:-79.944, role:"elite",
   links:[{t:"person", who:"Brent Sumerlin", w:"Postdoc under Krzysztof Matyjaszewski", d:"Now George B. Butler Professor of Polymer Chemistry at UF, and the mentor whose lab produced UF's 10th Gates Cambridge Scholar."}, {t:"person", who:"Veronica Hinman", w:"Recruited from CMU to direct the Whitney Lab, 2024", d:"Developmental biologist working on evolution, development and regeneration in echinoderms."},
          {t:"dest", w:"Robotics Institute", d:"The destination for SubjuGator students. RoboSub technical design reports are public and citable, which is what makes that route work.", flag:"outcomes"},
          {t:"absence", w:"Where you would go for ML theory instead", d:"Research.com places UF CS at #75 nationally / #128 world, and UF leads none of the ~25–30 national NSF AI Institutes."}]},
  {id:"stanford", name:"Stanford University", place:"Stanford, CA", lat:37.428, lon:-122.169, role:"elite",
   links:[{t:"person", who:"Arthur F. Hebard", w:"PhD Stanford 1971, under William Fairbank", d:"Then AT&T Bell Labs, where he led the 1991 discovery of superconductivity in Buckminsterfullerene. APS Oliver E. Buckley Prize 2015; NAS 2017. Now works on graphene and 2D quantum materials at UF."}, {t:"absence", w:"Where you would go for ML theory instead", d:"One of the four names — CMU, Stanford, Berkeley, UIUC — that the research map says would carry you where UF's core CS bench will not. Come to UF for the compute and a domain problem, not for the theory bench."}]},
  {id:"berkeley", name:"UC Berkeley", place:"Berkeley, CA", lat:37.872, lon:-122.259, role:"elite",
   links:[{t:"person", who:"Daniel Ferris", w:"PhD in human biodynamics, UC Berkeley 1998", d:"Now Robert W. Adenbaum Professor at UF. Mobile brain imaging, robotic lower-limb exoskeletons and bionic prostheses."}, {t:"dest", w:"Integrative Biology", d:"A standard destination out of the Florida Museum evolutionary cluster.", flag:"outcomes"},
          {t:"absence", w:"Where you would go for ML theory instead", d:"Third of the four."}]},
  {id:"uiuc", name:"UIUC", place:"Urbana, IL", lat:40.102, lon:-88.227, role:"elite",
   links:[{t:"person", who:"Christine Schmidt", w:"PhD in Chemical Engineering, UIUC 1995", d:"The provenance behind UF BME's dual-academy member. BS from UT Austin, PhD here, postdoc at MIT."},
          {t:"absence", w:"Where you would go for ML theory instead", d:"The fourth of the four."}]},
  {id:"columbia", name:"Columbia University", place:"New York, NY", lat:40.808, lon:-73.962, role:"elite",
   links:[{t:"person", who:"Brij Moudgil", w:"PhD in mineral engineering, Columbia", d:"He later built UF's Particle Engineering Research Center — which now runs as an NSF I/UCRC <b>jointly with Columbia</b>. His doctorate and his centre's partner are the same institution. NAE 2002."}, {t:"program", w:"Particle Engineering Research Center, jointly with UF", d:"UF's PERC operates with Columbia as an NSF I/UCRC. $50M+ invested, 800+ students educated, partnerships with 100+ companies. Directed at UF by Brij Moudgil, NAE 2002."}]},
  {id:"yale", name:"Yale University", place:"New Haven, CT", lat:41.316, lon:-72.922, role:"elite",
   links:[{t:"person", who:"Pierre Sikivie", w:"PhD Yale 1975, under Feza Gürsey", d:"Invented the axion haloscope and helioscope. His theory underlies the ADMX experiment and CERN's CAST. Elected to NAS in 2026, the 16th UF faculty member ever — though emeritus, so not running a lab you can join."}, {t:"program", w:"CTSI external advisory committee", d:"UF's Clinical and Translational Science Institute draws its external advisory committee from Yale, Duke, Michigan and Vanderbilt."},
          {t:"dest", w:"Ecology & Evolutionary Biology", d:"Named in the evolutionary-biology lineage.", flag:"outcomes"}]},
  {id:"duke", name:"Duke University", place:"Durham, NC", lat:36.001, lon:-78.939, role:"elite",
   links:[{t:"program", w:"CTSI external advisory committee", d:"One of four institutions on the external advisory committee of UF's joint UF–FSU CTSA hub."}]},
  {id:"vanderbilt", name:"Vanderbilt University", place:"Nashville, TN", lat:36.145, lon:-86.803, role:"elite",
   links:[{t:"program", w:"CTSI external advisory committee", d:"One of four institutions on the external advisory committee of UF's CTSA hub."}]},
  {id:"michigan", name:"University of Michigan", place:"Ann Arbor, MI", lat:42.278, lon:-83.738, role:"elite",
   links:[{t:"person", who:"Jonathan I. Bloch", w:"PhD University of Michigan", d:"Now Chair and Curator of Vertebrate Paleontology at the Florida Museum, working the K-Pg boundary through the Eocene mammal radiation. Fieldwork in Wyoming, Montana and northern Colombia."}, {t:"program", w:"CTSI external advisory committee", d:"One of four institutions advising UF's CTSA hub."},
          {t:"event", w:"Formula SAE Electric, each spring", d:"Gator Motorsports competes here against roughly 120 teams worldwide. UF switched from combustion to electric in 2022."},
          {t:"dest", w:"Ecology & Evolutionary Biology · robotics", d:"Appears in two separate lineages.", flag:"outcomes"}]},
  {id:"uchicago", name:"University of Chicago", place:"Chicago, IL", lat:41.789, lon:-87.599, role:"elite",
   links:[{t:"person", who:"John G. Thompson", w:"Professor from 1962", d:"Where he did the work on finite simple groups that led to the Fields Medal."}, {t:"dest", w:"Evolutionary biology", d:"Named in the evolutionary-biology lineage.", flag:"outcomes"}]},
  {id:"gatech", name:"Georgia Tech", place:"Atlanta, GA", lat:33.775, lon:-84.396, role:"elite",
   links:[{t:"person", who:"Cherie Stabler", w:"PhD in Biomedical Engineering, Georgia Tech & Emory, 2004", d:"Now BME Department Chair and Preeminence Professor at UF. Biomaterials and controlled release for cell-transplant treatment of Type 1 diabetes."}, {t:"dest", w:"Robotics · aerospace propulsion", d:"The nearest elite engineering graduate destination to Gainesville, named in two lineages.", flag:"outcomes"},
          {t:"absence", w:"Astronaut Scholarship partner — UF is not", d:"Georgia Tech is among the Foundation's ~60 partner universities. UF is not, so there is no institutional nomination pathway for UF students."}]},
  {id:"colorado", name:"CU Boulder", place:"Boulder, CO", lat:40.008, lon:-105.266, role:"elite",
   links:[{t:"dest", w:"Aerospace propulsion", d:"Named in the rocketry lineage alongside Purdue, Georgia Tech and Michigan.", flag:"outcomes"}]},

  /* ---- consortium partners ------------------------------------------- */
  {id:"penn", name:"University of Pennsylvania", place:"Philadelphia, PA", lat:39.952, lon:-75.193, role:"partner",
   links:[{t:"program", w:"IoT4Ag consortium", d:"One of five universities in the $26M NSF Engineering Research Center for the Internet of Things for Precision Agriculture, launched 2020. UF co-leads, and ABE is UF's best-ranked department at #6 nationally."}]},
  {id:"purdue", name:"Purdue University", place:"West Lafayette, IN", lat:40.424, lon:-86.921, role:"partner",
   links:[{t:"person", who:"Swarup Bhunia", w:"PhD Purdue 2005", d:"Now Semmoto Endowed Professor of IoT and Director of UF's Warren B. Nelms Institute for the Connected World — part of the FICS hardware-security cluster that is UF engineering's clearest national #1-tier niche."}, {t:"program", w:"IoT4Ag consortium", d:"Co-member of the $26M NSF ERC with UF, Penn, UC Merced and ASU."},
          {t:"dest", w:"Aerospace propulsion PhD", d:"A standard destination for rocketry-team students.", flag:"outcomes"},
          {t:"absence", w:"Astronaut Scholarship partner — UF is not", d:"Purdue holds a partnership UF lacks."}]},
  {id:"ucmerced", name:"UC Merced", place:"Merced, CA", lat:37.366, lon:-120.424, role:"partner",
   links:[{t:"program", w:"IoT4Ag consortium", d:"Co-member of the $26M NSF Engineering Research Center."}]},
  {id:"asu", name:"Arizona State University", place:"Tempe, AZ", lat:33.424, lon:-111.928, role:"partner",
   links:[{t:"program", w:"IoT4Ag consortium", d:"Co-member of the $26M NSF Engineering Research Center."}]},
  {id:"delaware", name:"University of Delaware", place:"Newark, DE", lat:39.678, lon:-75.751, role:"partner",
   links:[{t:"program", w:"Leads the NSF AI Institute UF only partners in", d:"Delaware leads the $21.5M NSF AI Institute for Human-AI Cooperation, announced July 2026. UF contributes five named PIs — Principe, Meyn, Harley, Fu, Bu — but does not lead it."}]},
  {id:"fsu", name:"Florida State University", place:"Tallahassee, FL", lat:30.442, lon:-84.298, role:"partner",
   links:[{t:"program", w:"Joint UF–FSU CTSA hub", d:"The Clinical and Translational Science Institute is a joint NIH UM1 hub, co-directed by Mitchell and Shenkman at UF with Naar at FSU."},
          {t:"absence", w:"The MagLab's magnets are here, not at UF", d:"The National High Magnetic Field Laboratory's headquarters and highest-field magnets are at FSU. UF's AMRIS node is the MR imaging and spectroscopy arm — real, but secondary."}]},
  {id:"hanford", name:"LIGO Hanford", place:"Richland, WA", lat:46.455, lon:-119.408, role:"partner",
   links:[{t:"program", w:"One of the two detectors UF helped build", d:"UF's cWB pipeline, developed by Sergey Klimenko, helped identify GW150914, the first gravitational-wave detection in history."}]},
  {id:"livingston", name:"LIGO Livingston", place:"Livingston, LA", lat:30.563, lon:-90.774, role:"partner",
   links:[{t:"program", w:"The nearer of the two detectors", d:"Instrumentation and optics work is unusually undergrad-tractable — hands-on hardware with well-defined subprojects."}]},

  /* ---- provenance: where UF's people came from ------------------------ */
  {id:"rochester", name:"University of Rochester", place:"Rochester, NY", lat:43.128, lon:-77.628, role:"origin",
   links:[{t:"person", who:"Matthew Disney", w:"PhD in biophysical chemistry", d:"Before Scripps, and before the RNA-targeted drug programme that anchors UF's Tier 1 drug discovery entry."}]},
  {id:"indiana", name:"Indiana University", place:"Bloomington, IN", lat:39.168, lon:-86.523, role:"origin",
   links:[{t:"person", who:"George Christou", w:"Earl Blough Professor before UF", d:"Now University Distinguished Professor and Drago Chair at UF. World leader in single-molecule magnets; winner of the 2026 Herty Medal, one of chemistry's oldest honours."}, {t:"person", who:"Douglas E. Soltis", w:"PhD 1980", d:"Now a UF Distinguished Professor and NAS member — one of three sitting NAS members in a single UF department, the strongest verifiable claim on this whole site.", flag:"soltis-yr"}]},
  {id:"kansas", name:"University of Kansas", place:"Lawrence, KS", lat:38.958, lon:-95.248, role:"origin",
   links:[{t:"person", who:"Pamela S. Soltis", w:"PhD", d:"Now Distinguished Professor and Director of the UF Biodiversity Institute; NAS 2016. Co-leads the Soltis Lab, among the most-cited plant-evolution labs globally."}]},
  {id:"utaustin", name:"UT Austin", place:"Austin, TX", lat:30.286, lon:-97.739, role:"origin",
   links:[{t:"person", who:"Christine Schmidt", w:"BS in Chemical Engineering, 1988", d:"The first step of the path to a dual National Academy membership at UF."}]},
  {id:"utdallas", name:"UT Dallas", place:"Richardson, TX", lat:32.986, lon:-96.750, role:"origin",
   links:[{t:"person", who:"Mark Tehranipoor", w:"PhD in Electrical & Computer Engineering", d:"Completed in two years and eight months. Founded UF's Florida Institute for Cybersecurity Research and became Dean of the Herbert Wertheim College of Engineering in July 2026 — institutional confirmation of where the college's national reputation lives."}]},
  {id:"uga", name:"University of Georgia", place:"Athens, GA", lat:33.948, lon:-83.377, role:"origin",
   links:[{t:"person", who:"Changying “Charlie” Li", w:"Founded the UGA Phenomics and Plant Robotics Center", d:"Recruited to UF as Professor of Agricultural AI and Automation. A significant recent hire and a strong target for robotics-inclined students — note that stale UGA pages still surface in search."}]},
  {id:"pennstate", name:"Penn State", place:"University Park, PA", lat:40.798, lon:-77.860, role:"origin",
   links:[{t:"absence", w:"Susan Sinnott is here, not at UF", d:"She appears in older search indexes associated with UF Materials Science, but is at Penn State. Excluded from this map's faculty listings, a reminder that stale indexes are a real hazard when researching labs."}]},
  {id:"vatech", name:"Virginia Tech", place:"Blacksburg, VA", lat:37.229, lon:-80.424, role:"origin",
   links:[{t:"absence", w:"Where Warren Dixon went", d:"A loss, not a tie. MAE's most nationally visible figure — Distinguished Professor of nonlinear controls and robotics, former chair and interim dean — left UF in 2026 to become Dean of Engineering here. The Nonlinear Controls and Robotics lab's successor leadership was not determinable."},
          {t:"event", w:"Runner-up to UF, 2025 Concrete Canoe", d:"The team UF narrowly beat for the national title."}]},


  /* ---- more provenance, added after a second research pass ------------- */
  {id:"princeton", name:"Princeton University", place:"Princeton, NJ", lat:40.344, lon:-74.652, role:"elite",
   links:[{t:"person", who:"Robert D. Holt", w:"BA in physics, 1973", d:"He took upper-level biology each semester for fun, which let him move to a Harvard biology doctorate. Now an NAS member and one of the three that make UF's evolutionary biology its single most verifiable elite claim."}]},
  {id:"jhu", name:"Johns Hopkins University", place:"Baltimore, MD", lat:39.329, lon:-76.620, role:"elite",
   links:[{t:"person", who:"Rodney J. Bartlett", w:"Postdoctoral research associate, 1972–74", d:"Before returning to UF in 1981. Inventor of much of modern coupled-cluster quantum chemistry; Schrödinger Medal, h-index 109."}]},
  {id:"minnesota", name:"University of Minnesota", place:"Minneapolis, MN", lat:44.974, lon:-93.228, role:"elite",
   links:[{t:"person", who:"Ira Longini", w:"PhD in Biometry & Biomathematics, 1977", d:"Internationally known outbreak modeller — COVID-19, vaccine trial design, and co-director of the Center for Statistical and Quantitative Infectious Diseases at UF's Emerging Pathogens Institute. The best target at UF for a mathematically inclined student who wants real-world consequence."}, {t:"person", who:"Panos M. Pardalos", w:"PhD in Computer & Information Sciences", d:"Now Distinguished Professor and Director of UF's Center for Applied Optimization — UF's top-cited computer-science-adjacent scholar at h-index 123 and roughly 67,000 citations, hiding inside a mid-ranked department.", flag:"pardalos"}]},
  {id:"belllabs", name:"AT&T Bell Laboratories", place:"Murray Hill, NJ", lat:40.684, lon:-74.401, role:"origin",
   links:[{t:"person", who:"Arthur F. Hebard", w:"Member of technical staff", d:"Where the 1991 C60 superconductivity discovery happened, before he brought that line of work to UF."}]},
  {id:"cincinnati", name:"University of Cincinnati", place:"Cincinnati, OH", lat:39.132, lon:-84.516, role:"origin",
   links:[{t:"person", who:"Juan E. Gilbert", w:"PhD in Computer Science, 2000", d:"Now Banks Family Preeminence Endowed Professor at UF and an IEEE, ACM, AAAS and NAI Fellow. His 2012 Presidential Award for mentoring makes him the most reliable single point of entry into CISE for an undergraduate."}]},
  {id:"usm", name:"University of Southern Mississippi", place:"Hattiesburg, MS", lat:31.330, lon:-89.335, role:"origin",
   links:[{t:"person", who:"Brent Sumerlin", w:"PhD in Polymer Science, under Charles McCormick", d:"The start of the chain that ends at Cambridge: Sumerlin's UF lab produced Maddie Ross, UF's 10th Gates Cambridge Scholar."}]},
  {id:"uf-itself", name:"University of Florida", place:"Gainesville, FL — homegrown", lat:29.6436, lon:-82.3549, role:"uf",
   links:[{t:"person", who:"Alina Zare", w:"PhD in CISE at UF, 2008", d:"Stayed and rose: now Director of the AI & Informatics Research Institute, head of the Machine Learning and Sensing Lab, co-PI on IoT4Ag, and holder of an NVIDIA/Malachowsky-funded endowed professorship. UF trained the person now running its AI institute."}, {t:"person", who:"Rodney J. Bartlett", w:"PhD in Quantum Chemistry, UF 1971", d:"Left for Aarhus and Johns Hopkins, then came back in 1981 and was named Graduate Research Professor in 1987. UF trained its own most-decorated theorist."},
          {t:"person", who:"Jose C. Principe", w:"MS and PhD at UF", d:"Bachelor's from the University of Porto, then both graduate degrees here, and roughly 40 years on the faculty before retiring in April 2026. h-index 92, ~43,000 citations."}]},

  /* ---- second research tranche ---------------------------------------- */
  {id:"maryland", name:"University of Maryland", place:"College Park, MD", lat:38.987, lon:-76.943, role:"elite",
   links:[{t:"person", who:"Akito Kawahara", w:"PhD University of Maryland", d:"Now Director of the McGuire Center for Lepidoptera and Biodiversity, which holds 10+ million specimens. Large-scale Lepidoptera genome sequencing — including work on how moths use ultrasound to evade bats."}]},
  {id:"ucirvine", name:"UC Irvine", place:"Irvine, CA", lat:33.646, lon:-117.843, role:"elite",
   links:[{t:"person", who:"Prabhat Mishra", w:"PhD in computer science, UC Irvine 2004", d:"Now Director of UF's Embedded Systems Lab and an AAAS Fellow (2023). System-on-chip security within the FICS cluster."}]},
  {id:"ucdavis", name:"UC Davis", place:"Davis, CA", lat:38.538, lon:-121.760, role:"elite",
   links:[{t:"person", who:"Amy J. Williams", w:"PhD in Geology, UC Davis 2014", d:"Science team member on NASA's Curiosity rover since 2009 and Participating Scientist on Perseverance, the only clearly nationally distinctive asset in UF's Geological Sciences department."}]},
  {id:"arizona", name:"University of Arizona", place:"Tucson, AZ", lat:32.232, lon:-110.950, role:"elite",
   links:[{t:"person", who:"Desika Narayanan", w:"PhD University of Arizona, 2007", d:"Galaxy-formation hydrodynamic simulations and dust radiative transfer; developer of the widely used Powderday code. A natural HiPerGator pairing, and one of the clearest routes to running work at a compute scale almost no undergraduate anywhere can access."}]},
  {id:"emory", name:"Emory University", place:"Atlanta, GA", lat:33.797, lon:-84.324, role:"elite",
   links:[{t:"person", who:"Cherie Stabler", w:"Joint Georgia Tech–Emory PhD programme", d:"The joint biomedical engineering doctorate that produced UF BME's department chair."}]},
  /* ---- competitions and contrasts ------------------------------------ */
  {id:"ucf", name:"UCF", place:"Orlando, FL", lat:28.602, lon:-81.200, role:"origin",
   links:[{t:"absence", w:"#1 in North America at ICPC — UF has no team", d:"UCF's programming team placed 1st in North America and 10th worldwide. No UF ICPC team surfaced at all. An absence of evidence rather than confirmed absence, but the asymmetry with a school 110 miles away is informative. UCF is also an Astronaut Scholarship partner."}]},
  {id:"calpoly", name:"Cal Poly SLO", place:"San Luis Obispo, CA", lat:35.300, lon:-120.663, role:"origin",
   links:[{t:"event", w:"2025 Concrete Canoe nationals — UF won", d:"UF took first overall at the 38th ASCE competition here, narrowly beating Virginia Tech. UF's fifth national title, four of them in the last six years, and the Eckhoff Steel Bridge Team's fifth consecutive title came weeks earlier."}]},
  {id:"sandiego", name:"RoboSub · San Diego", place:"San Diego, CA", lat:32.716, lon:-117.161, role:"origin",
   links:[{t:"event", w:"UF has competed every year since 1998", d:"SubjuGator, built by Machine Intelligence Lab students from ECE, MAE and CISE, has entered every RoboSub since the competition began — winning in 2005, 2006 and 2007."}]}
];

/* Cities for the secondary world map. Exchange destinations are joined to these
   by name at render time; anything without a coordinate is simply not plotted
   and is reported in the count, rather than being silently dropped. */
const WORLD_CITIES = {
  "KAIST":[36.374,127.365],"POSTECH":[36.013,129.322],"KU Leuven":[50.878,4.704],
  "Technical University of Denmark (DTU)":[55.786,12.523],"Politecnico di Milano":[45.478,9.227],
  "ISAE-SUPAERO":[43.566,1.478],"Technion":[32.777,35.023],"Nanyang Technological University":[1.348,103.683],
  "RWTH Aachen University":[50.778,6.078],"Chalmers University of Technology":[57.689,11.979],
  "Lund University":[55.712,13.196],"Tohoku University":[38.254,140.874],"University of Twente":[52.239,6.856],
  "University College London":[51.525,-0.134],"University of Melbourne":[-37.797,144.961],
  "University of New South Wales":[-33.917,151.231],"University of Sydney":[-33.889,151.187],
  "Monash University":[-37.911,145.134],"University of Manchester":[53.467,-2.234],
  "University of Leeds":[53.807,-1.555],"University of Sheffield":[53.381,-1.488],
  "University of Glasgow":[55.872,-4.288],"University of Bristol":[51.458,-2.602],
  "Newcastle University":[54.980,-1.615],"Royal Holloway, University of London":[51.425,-0.564],
  "University of Aberdeen":[57.164,-2.102],"Cardiff University":[51.487,-3.179],
  "Universidad Carlos III de Madrid":[40.332,-3.766],"Universidad Politécnica de Madrid":[40.441,-3.727],
  "Universidad Pontificia Comillas":[40.434,-3.696],"Universidad del País Vasco — Bilbao":[43.263,-2.935],
  "KAIST-adjacent: Hanyang University":[37.557,127.045],"Yonsei University":[37.566,126.939],
  "Sungkyunkwan University (SKKU)":[37.588,126.993],"Waseda University":[35.709,139.720],
  "University of Bern":[46.951,7.438],"INSA Lyon":[45.783,4.879],"ENSEA":[49.037,2.072],
  "Université de Technologie de Troyes":[48.271,4.066],"LUT University":[61.065,28.093],
  "Sapienza University of Rome":[41.903,12.514],"Koç University":[41.205,29.061],
  "Khalifa University":[24.443,54.615],"Hebrew University of Jerusalem":[31.794,35.242],
  "Tecnológico de Monterrey":[25.651,-100.290],"Universidad de los Andes":[4.602,-74.065],
  "Universidad del Norte":[11.019,-74.851],"Instituto Tecnológico de Buenos Aires":[-34.628,-58.369],
  "American University of Cairo":[30.019,31.500],"Universiti Teknologi Petronas":[4.385,100.972],
  "Institut Teknologi Bandung":[-6.891,107.610],"University of Graz":[47.078,15.449],
  "Hamburg University of Applied Sciences":[53.557,10.023],"Munich University of Applied Sciences":[48.154,11.556],
  "Zurich University of Applied Sciences (ZHAW)":[47.496,8.729]
};

/* Research placements and fellowship destinations for the world map. */
const WORLD_EXTRA = [
  {kind:"research", n:"RWTH Aachen", lat:50.778, lon:6.078, d:"UF in Aachen — 10 weeks, 6 UF credits, €2,000 RWTH scholarship. Germany's leading technical university."},
  {kind:"research", n:"Seoul National University", lat:37.460, lon:126.952, d:"NSF IRSC — smart-city engineering. Six US students per cycle."},
  {kind:"research", n:"Newcastle University", lat:54.980, lon:-1.615, d:"Six-week supervised research internship, extendable through the exchange partnership."},
  {kind:"research", n:"Sorbonne · Paris", lat:48.847, lon:2.357, d:"UF Chemistry REU in France — $6,000 + $1,000 travel + housing. Also Toulouse, Strasbourg and Reims."},
  {kind:"research", n:"ETH Zürich", lat:47.376, lon:8.548, d:"Amgen Scholars host — ~10 scholars per European site."},
  {kind:"research", n:"Karolinska Institutet", lat:59.349, lon:18.023, d:"Amgen Scholars host, Stockholm."},
  {kind:"research", n:"Institut Pasteur", lat:48.840, lon:2.311, d:"Amgen Scholars host, Paris."},
  {kind:"research", n:"LMU Munich", lat:48.151, lon:11.581, d:"Amgen Scholars host."},
  {kind:"research", n:"Kyoto University", lat:35.026, lon:135.781, d:"Amgen Scholars host, Asia programme."},
  {kind:"research", n:"University of Tokyo", lat:35.713, lon:139.762, d:"Amgen Scholars host, Asia programme."},
  {kind:"fellow", l:"Churchill · Gates Cambridge", n:"University of Cambridge", lat:52.205, lon:0.119, d:"Churchill Scholarship, a fully funded STEM master's, UF may endorse only two candidates a year. Also Gates Cambridge, where UF's 10th scholar, Maddie Ross, went from Brent Sumerlin's polymer lab to a chemistry PhD."},
  {kind:"fellow", l:"Rhodes Scholarship", n:"University of Oxford", lat:51.754, lon:-1.254, d:"Rhodes Scholarship. UF campus endorsement deadline is in mid-August — before senior year technically begins."},
  {kind:"fellow", l:"Schwarzman Scholars", n:"Tsinghua University", lat:40.000, lon:116.326, d:"Schwarzman Scholars, a one-year Master's in Global Affairs. Also an Amgen Scholars host."},
  {kind:"fellow", l:"McCall MacBain", n:"McGill University", lat:45.505, lon:-73.577, d:"McCall MacBain Scholarship, a fully funded master's or professional degree."},
  {kind:"origin", l:"Leonid Moroz — PhD", n:"Russian Academy of Sciences", lat:55.751, lon:37.618, d:"Moroz earned his doctorate at the Institute of Developmental Biology in Moscow under D.A. Sakharov, before the ctenophore work at UF's Whitney Lab that rewrote the textbook account of how nervous systems began."},
  {kind:"origin", l:"George Christou — PhD", n:"University of Exeter", lat:50.737, lon:-3.535, d:"PhD in chemistry, then a postdoc at Manchester, then Indiana, then UF's Drago Chair and the 2026 Herty Medal."},
  {kind:"origin", l:"Rodney Bartlett — NSF postdoc", n:"Aarhus University", lat:56.168, lon:10.203, d:"NSF Postdoctoral Fellow, 1971–72, between his UF doctorate and Johns Hopkins."},
  {kind:"origin", l:"Jose Principe — BS", n:"University of Porto", lat:41.178, lon:-8.596, d:"Bachelor's in electrical engineering, before the UF master's and doctorate and four decades on the UF faculty."},
  {kind:"person", l:"John G. Thompson — 23 years", n:"University of Cambridge (Thompson)", lat:52.205, lon:0.119, d:"Fellowship at University College in 1968, then the University of Cambridge from 1970 to 1993 — he won the Fields Medal in 1970 and the Abel Prize in 2008 — before joining UF. Cambridge runs both ways on this map: Thompson came from there, and UF's 10th Gates Cambridge Scholar went to it."},
  {kind:"origin", l:"Azra Bihorac — MD", n:"University of Sarajevo", lat:43.856, lon:18.413, d:"Medical degree in Bosnia and Herzegovina, then an internal medicine residency split between Marmara University in Istanbul and UF, then critical care and nephrology fellowships and a UF master's. Now Senior Associate Dean for Research in UF's College of Medicine and Director of the Intelligent Clinical Care Center."},
  {kind:"origin", l:"Azra Bihorac — residency", n:"Marmara University", lat:40.988, lon:29.061, d:"Internal medicine residency in Istanbul before completing training at UF. She is board-certified in five specialties, including clinical informatics — which is why UF's clinical-AI centre is led by a nephrologist."},
  {kind:"uf",       n:"EPI satellite lab", lat:18.548, lon:-72.049, d:"The Emerging Pathogens Institute runs a satellite BSL-2 facility in Fond Parisien, Haiti."},
  {kind:"partner",n:"Gran Telescopio Canarias", lat:28.756, lon:-17.892, d:"UF is a formal partner in the 10.4m GTC on La Palma, the largest single-aperture optical telescope in the world at commissioning, and built and tested infrared camera instrumentation for it."}
];
