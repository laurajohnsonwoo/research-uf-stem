/* ============================================================================
   DATA
   ============================================================================ */
const TAGS = [
  ["life",   "Life & Evolution"],
  ["health", "Health & Medicine"],
  ["physical","Physical Sciences"],
  ["eng",    "Engineering & Making"],
  ["comp",   "Computing & AI"],
  ["math",   "Math & Modeling"],
  ["earth",  "Earth, Ocean & Climate"]
];

const TIERS = {
  1: { name: "Tier 1 — world-class",  css: "var(--t1)", sub: "Verifiable by academy membership, unique facilities, or a lead role on a national program." },
  2: { name: "Tier 2 — strong",       css: "var(--t2)", sub: "Well-funded and nationally respectable — but you would have peers at fifty other universities." },
  3: { name: "Tier 3 — be skeptical", css: "var(--t3)", sub: "Real money and real press releases sitting on thinner underlying research standing." }
};

const FRICTION = ["Walk in", "Ask a PI", "Apply on campus", "Compete", "Compete nationally + relocate"];

const DOMAINS = [
{
  id:"evo", tier:1, x:8, y:96, sec:"3.1", tags:["life","earth"],
  name:"Evolutionary Biology, Systematics & Biodiversity",
  short:"Evolutionary Biology",
  home:"Department of Biology + Florida Museum of Natural History · Gainesville campus",
  why:"Three sitting National Academy of Sciences members in one department, sitting on top of 40+ million specimens and the largest butterfly and moth research collection in the world.",
  detail:"This is the strongest claim in the entire survey, and it rests on the hardest evidence available: NAS-membership density inside a single department. Phylogenomics and biodiversity informatics are also the substrate for climate-response modelling, crop wild-relative discovery, and pandemic-origin tracing. This is not a museum backwater.",
  infra:"The Florida Museum holds <b>40+ million specimens</b>, including a 2022-opened $13M, 23,000-sq-ft Special Collections Building for wet collections. The McGuire Center holds <b>10+ million Lepidoptera specimens</b>. UF describes it as the largest collections-based butterfly and moth research center in the world; independent sources hedge to “one of the largest, rivalling the Natural History Museum in London.”",
  infraFlag:"mcguire",
  friction:1,
  access:"The best undergraduate access at the university, and it is not close. The Museum runs active volunteer and junior-volunteer collections programs and public fossil dig sites, the Montbrook site draws volunteer diggers year-round. On the Gainesville campus, year-round, and low-friction: nearly unique among the Tier 1 domains, which are otherwise summer-only or off-campus.",
  doors:["Florida Museum volunteer & collections programs — rolling, year-round","Montbrook public fossil dig site","University Scholars Program with a Soltis or Kawahara Lab mentor","Genomics CURE courses / iGEM team as a stepping stone"],
  verdict:"If your interests are anywhere near evolution, ecology, genomics, systematics, or paleontology, this is where UF beats schools ranked far above it, and it is the easiest elite door to walk through. Highest excellence-to-access ratio at the university.",
  people:[
    {n:"Douglas E. Soltis", h:["NAS 2017"], hflag:"soltis-yr", d:"Distinguished Professor. World authority on angiosperm phylogeny and polyploidy — whole-genome duplication in plant evolution.", u:"https://www.floridamuseum.ufl.edu/science/plant-biologist-doug-soltis-elected-to-national-academy-of-sciences/"},
    {n:"Pamela S. Soltis", h:["NAS 2016","AAAS"], d:"Distinguished Professor, Director of the UF Biodiversity Institute. Co-leads the Soltis Lab, among the most-cited plant-evolution labs globally.", u:"https://www.floridamuseum.ufl.edu/soltis-lab/doug-soltis/"},
    {n:"Robert D. Holt", h:["NAS 2022"], hflag:"holt-yr", d:"Eminent Scholar, Arthur R. Marshall Jr. Chair in Ecology. Foundational theoretical ecology — niche theory, source-sink dynamics.", u:"https://news.ufl.edu/2022/05/robert-holt/"},
    {n:"Akito Kawahara", h:[], d:"Director, McGuire Center for Lepidoptera and Biodiversity. Large-scale Lepidoptera genome sequencing and phylogenomics.", u:"https://www.floridamuseum.ufl.edu/science/akito-kawahara-named-director-of-mcguire-center-for-lepidoptera-and-biodiversity/"},
    {n:"Jonathan I. Bloch", h:[], d:"Chair & Curator of Vertebrate Paleontology. The K-Pg boundary through the Eocene mammal radiation. Fieldwork in Wyoming, Montana and northern Colombia; recent finds include a 20-foot sebecid crocodyliform “built like a greyhound.”", u:"https://www.floridamuseum.ufl.edu/people/jonathan-bloch/"},
    {n:"David Blackburn", h:[], d:"Department chair; amphibian evolution."},
    {n:"Nico Cellinese", h:[], d:"Plant systematics and the herbarium."},
    {n:"Rob Guralnick", h:[], d:"Biodiversity informatics, the data layer under all of it."},
    {n:"Keith Willmott", h:[], d:"Neotropical butterfly systematics."},
    {n:"Francis “Jack” Putz", h:["Distinguished Prof."], d:"Tropical forestry and fire ecology."},
    {n:"Charles Baer", h:[], d:"Experimental evolution, mutation accumulation."},
    {n:"Edward Braun", h:[], d:"Phylogenomics, avian genome evolution."},
    {n:"Rebecca Kimball", h:[], d:"Molecular systematics and avian evolution."},
    {n:"Marta Wayne", h:[], d:"Evolutionary genetics of host–pathogen interaction."}
  ],
  srcs:[["Florida Museum faculty","https://www.floridamuseum.ufl.edu/nhdept/faculty/"],["McGuire Center","https://www.floridamuseum.ufl.edu/mcguire/"],["Montbrook dig — WUFT","https://www.wuft.org/education/2025-12-15/theyre-really-digging-it-volunteers-revel-in-the-dirt-at-the-florida-museum-of-natural-historys-fossil-site"]]
},
{
  id:"gw", tier:1, x:42, y:93, sec:"3.2", tags:["physical","math"],
  name:"Gravitational-Wave Physics & Astrophysics",
  short:"Gravitational Waves",
  home:"Department of Physics · Institute for High Energy Physics & Astrophysics (IHEPA) · Gainesville",
  why:"Many universities analyse LIGO data. UF <em>builds</em> LIGO. It is a founding instrumentation institution, and LIGO's Executive Director is UF faculty.",
  detail:"UF's input-optics program built a physical subsystem of the detector, and its cWB pipeline helped identify GW150914, the first gravitational-wave detection in history. A 2026 open tenure-track search in “Experimental Optics for Gravitational Wave Detection” confirms this is continued investment, not a legacy program coasting.",
  infra:"The instrumentation and optics work extends to the space-based <b>LISA</b> mission. The adjacent particle-physics portfolio spans ADMX and ALPS (axions), SuperCDMS, IceCube, DUNE, CCM, SBND (neutrinos), and Belle II. Note honestly: UF's connection to the National High Magnetic Field Laboratory is real but secondary — NHMFL's main campus and most senior magnet faculty are at <b>FSU in Tallahassee</b>.",
  friction:3,
  access:"UF Physics runs a domestic REU (“Experimental and Computational Methods for Materials Discovery,” director Amlan Biswas) and an <b>International REU in Gravitational Physics</b> that places students at European and Australasian partner institutions, a genuinely unusual, under-applied-to opportunity. Instrumentation and optics work is also unusually undergrad-tractable: hands-on, hardware, well-defined subprojects.",
  doors:["International REU in Gravitational Physics — deadline ~Jan 12","Physics REU, Materials Discovery — confirm 2026 status","Direct email to the instrumentation group (Mueller, Fulda)"],
  verdict:"The single most prestigious research problem accessible at UF. Honest caveat: UF Physics is elite in these niches, not a top-15 physics department overall.",
  people:[
    {n:"David Reitze", h:["LIGO Exec. Director"], d:"UF Physics faculty and current Executive Director of the LIGO Laboratory. Shared the 2016 Special Breakthrough Prize in Fundamental Physics; 2017 NAS Award for Scientific Discovery. Led UF's input-optics program 1996–2011.", hflag:"reitze", u:"https://phys.ufl.edu/people/faculty/david-reitze/"},
    {n:"Clifford M. Will", h:["NAS"], d:"Distinguished Professor. World-leading theorist on tests of general relativity, the PPN formalism, and science return from LIGO/Virgo/KAGRA and LISA.", u:"https://www.nasonline.org/directory-entry/clifford-m-will-ftdtgv/"},
    {n:"Pierre Sikivie", h:["NAS 2026","Emeritus"], d:"His axion dark-matter theory underlies the ADMX experiment and CERN's CAST. APS J.J. Sakurai Prize 2020, Galileo Galilei Medal 2025. The 16th UF faculty member ever elected to NAS — but emeritus, so not running a lab you can join.", u:"https://news.ufl.edu/2026/05/nas-sikivie/"},
    {n:"Arthur F. Hebard", h:["NAS 2017"], d:"Led the 1991 discovery of superconductivity in Buckminsterfullerene (C60). APS Oliver E. Buckley Prize 2015. Now works on graphene and 2D quantum materials.", u:"https://en.wikipedia.org/wiki/Arthur_F._Hebard"},
    {n:"Guido Mueller", h:[], d:"Designed the interferometer's input optics. Precision laser interferometry for ground-based LIGO and the space-based LISA mission.", u:"https://news.clas.ufl.edu/ligo-gators/"},
    {n:"Sergey Klimenko", h:[], d:"Develops coherent WaveBurst (cWB), the unmodelled-signal pipeline used in identifying GW150914. Multimessenger astrophysics and real-time pipelines."},
    {n:"Guenakh Mitselmakher", h:["APS Fellow"], d:"Distinguished Professor, IHEPA. CMS collaborator since the mid-1990s; his cWB work links UF's particle-physics and gravitational-wave programs.", u:"https://en.wikipedia.org/wiki/Guenakh_Mitselmakher"},
    {n:"Paul Fulda", h:[], d:"Interferometer instrumentation, noise-source mitigation, Advanced LIGO detector commissioning. The most undergrad-tractable bench in the group."},
    {n:"Imre Bartos", h:[], d:"Multimessenger astrophysics — electromagnetic counterparts to gravitational-wave events."},
    {n:"Edwin Pedrozo-Peñafiel", h:["New 2024"], d:"From MIT's Vuletić group. Entanglement-enhanced optical atomic clocks, published in Nature."},
    {n:"Jiabin Yu", h:["New 2024"], d:"Topological and moiré condensed-matter theory."},
    {n:"Konstantin Matchev", h:[], d:"IHEPA — collider phenomenology and machine learning for high-energy physics."},
    {n:"Paul Avery", h:[], d:"IHEPA — CMS/LHC, grid computing."},
    {n:"Andrey Korytov", h:[], d:"IHEPA — CMS/LHC experimental particle physics."},
    {n:"Jacobo Konigsberg", h:[], d:"IHEPA — collider experiment."},
    {n:"Richard Field", h:[], d:"IHEPA — QCD phenomenology and underlying-event modelling."},
    {n:"Philip Chang", h:[], d:"IHEPA — CMS, searches for new physics."},
    {n:"Yuta Takahashi", h:["New 2024"], d:"Tau-lepton experimental high-energy physics."},
    {n:"Gabriel Birzu", h:["New 2024"], d:"Statistical physics of microbial evolution."},
    {n:"Sangyun Lee", h:["New 2024"], d:"Extreme-condition condensed matter."}
  ],
  srcs:[["IHEPA research","https://ihepa.phys.ufl.edu/research/"],["LIGO Gators","https://news.clas.ufl.edu/ligo-gators/"],["Physics IREU","https://ireu.phys.ufl.edu/"],["2026 faculty search","https://explore.jobs.ufl.edu/cw/en-us/job/529043/tenure-track-assistant-professor-experimental-optics-for-gravitational-wave-detection"]]
},
{
  id:"fics", tier:1, x:40, y:89, sec:"3.3", tags:["eng","comp"],
  name:"Hardware & Microelectronics Security",
  short:"Hardware Security",
  home:"ECE + CISE · Florida Institute for Cybersecurity Research (FICS) + Florida Semiconductor Institute",
  why:"UF's hardware-security researcher was promoted to run the entire College of Engineering in July 2026. That is institutional confirmation of where the college's national reputation actually lives.",
  detail:"Counterfeit and Trojan-compromised integrated circuits are an active national-security problem with direct DOD funding attached. This is a field where a small number of academic groups genuinely set the agenda, and UF is one of them. Career optionality is good — security-clearance pathways and the semiconductor industry both open from here.",
  infra:"FICS spans <b>40+ faculty across departments</b> with a <b>$7M+ SCAN Lab</b> equipment base. The Florida Semiconductor Institute adds a CHIPS Act “Microelectronics Commons” hub, the Florida Semiconductor Engine (ICAMR/BRIDG), an NSF-funded microelectronics workforce network, a 4,000-sq-ft FSI Lab, and a 9,000-sq-ft Interdisciplinary Microsystems Group.",
  friction:3,
  access:"FICS maintains a students page and a certificate program suggesting structured undergraduate involvement, though the specific pipeline mechanics were not fully confirmable. The <b>Assured Autonomy & Networking REU</b> — 8 students, under the Engineering SURF umbrella — is the cleanest formal door.",
  accessFlag:"fics-pipeline",
  doors:["Assured Autonomy & Networking REU (8 students, SURF umbrella)","FICS undergraduate certificate program","Excel in an ECE/CISE systems course, then approach that professor"],
  verdict:"Best combination of national leadership, defense-funding stability, and career optionality in UF engineering. If you like low-level systems, this is the place.",
  people:[
    {n:"Mark Tehranipoor", h:["Eng. Dean 2026"], d:"Distinguished Professor; founder of FICS; named Dean of the Herbert Wertheim College of Engineering, effective July 2026. Hardware security, IC counterfeit detection, semiconductor supply-chain protection.", u:"https://www.eng.ufl.edu/news/stories/ece-chair-mark-tehranipoor-selected-as-college-of-engineering-dean/"},
    {n:"Kevin R.B. Butler", h:["CISE Chair 2026"], d:"Named CISE Department Chair June 2026 after four years as FICS director. NSF CAREER 2013; senior member IEEE/ACM.", u:"https://cise.ufl.edu/2026/06/a-tremendous-impact-butler-named-cise-chair/"},
    {n:"Farimah Farahmandi", h:["NSF CAREER 2024"], d:"FICS Research Director. AI-assisted SoC security verification; UF 40-Under-40 (2026); national-defense Young Investigator Award.", u:"https://fics.institute.ufl.edu/index.php/about/faculty/"},
    {n:"Prabhat Mishra", h:["AAAS Fellow 2023","ACM Dist."], d:"Director, Embedded Systems Lab. System-on-chip security and low-power embedded design.", u:"https://cise.ufl.edu/2023/02/mishra-named-aaas-fellow/"},
    {n:"Domenic Forte", h:[], d:"Hardware Trojans and integrated-circuit reverse engineering."},
    {n:"Swarup Bhunia", h:[], d:"Director, Warren B. Nelms Institute for the Connected World — IoT security."},
    {n:"Patrick Traynor", h:[], d:"CISE security; served as interim department chair. Mobile and telephony security."}
  ],
  srcs:[["FICS faculty","https://fics.institute.ufl.edu/index.php/about/faculty/"],["FSI initiatives","https://fsi.institute.ufl.edu/research-initiatives/"],["FICS students","https://fics.institute.ufl.edu/about/students/"],["Engineering SURF","https://www.eng.ufl.edu/surf/research-projects/"]]
},
{
  id:"scripps", tier:1, x:93, y:91, sec:"3.5", tags:["health","life"],
  name:"RNA-Targeted Drug Discovery & Natural Products",
  short:"Wertheim UF Scripps",
  home:"Wertheim UF Scripps Institute · Jupiter, FL — roughly 5 hours from Gainesville",
  why:"One in five principal investigators holds an NIH R35 Outstanding Investigator Award, and average funding runs $1.5M per PI. That is an extraordinary density for an institute of ~40 PIs.",
  detail:"UF acquired the former Scripps Florida campus outright on 1 April 2022, then renamed it in 2023 after a <b>$100M gift from the Wertheim Family Foundation, the largest individual gift in UF history</b> — paired with a planned 10-year, $1B public-private research partnership. Roughly 500 people work here.",
  infra:"Cryo-EM center, high-throughput molecular screening center, and 12 shared core services. The <b>Natural Products Discovery Center</b> holds one of the world's largest microbial-strain compound libraries.",
  friction:5,
  access:"A paid <b>10-week Summer Undergraduate Research Fellows (SURF/REU)</b> program across five departments, deadline early February. But it draws a national applicant pool — Carleton and other schools advertise it to their own students, and Jupiter is five hours from Gainesville. <b>There is no realistic semester-time pathway for a Gainesville-based undergraduate.</b>",
  doors:["Wertheim UF Scripps SURF — 10 weeks, paid, ~early February deadline","Chemistry · Immunology & Microbiology · Molecular Medicine · Neuroscience · Structural & Computational Biology"],
  verdict:"Best pure drug-discovery training available under the UF name, and the most impressive per-PI funding density in the whole university. But treat it as a competitive national summer REU that happens to share your university's name, not as a local resource. Plan a full year ahead.",
  people:[
    {n:"Matthew Disney", h:["Institute Prof."], d:"Chair of Chemistry. Pioneer of small-molecule RNA-targeted drugs — ALS, myotonic dystrophy, triple-negative breast cancer, glioblastoma, Parkinson's. Founded Ribonaut Therapeutics for Huntington's disease.", u:"https://stetnews.org/2026/03/09/gatorpitch-university-florida-scripps-ribonaut-therapeutics/"},
    {n:"Ben Shen", h:[], d:"Director, Natural Products Discovery Center. Antibiotic and anticancer discovery from one of the world's largest microbial-strain libraries."},
    {n:"Patrick Griffin", h:[], d:"Scientific Director of the institute."},
    {n:"Courtney Miller", h:["NIH U01"], d:"Director of Academic Affairs. Co-leads a $9M NIH U01 (through 2029) developing a drug candidate for SYNGAP1 developmental disorder."},
    {n:"Gavin Rumbaugh", h:["NIH U01"], d:"Co-PI on the SYNGAP1 program. Synaptic dysfunction in neurodevelopmental disorders."},
    {n:"Susana Valente", h:[], d:"Chair, Immunology and Microbiology. HIV latency and “block-and-lock” functional cure strategies."},
    {n:"Joe G.N. “Skip” Garcia", h:[], d:"Herbert A. Wertheim Professor of Inflammation Science; UF Associate VP for Research. P01 grant on eNAMPT-driven inflammation."},
    {n:"Ronald Davis", h:[], d:"Genetics of “active forgetting”; developing mitotherapeutics for neurodegeneration."},
    {n:"Thomas Kodadek", h:[], d:"DNA-barcode chemical-probe discovery; ubiquitin-proteasome biology."},
    {n:"Donna Zhang", h:[], d:"NRF2 pathway small-molecule inhibitors."},
    {n:"James Burke", h:[], d:"RNase L and innate antiviral defense."}
  ],
  srcs:[["Faculty productivity","https://wertheim.scripps.ufl.edu/2025/06/25/stand-out-faculty-productivity-at-wertheim-uf-scripps-draws-accolades/"],["SURF / education","https://wertheim.scripps.ufl.edu/education/"],["Integration announcement","https://wertheim.scripps.ufl.edu/2022/04/01/uf-scripps-florida-complete-integration-to-create-science-research-powerhouse/"]]
},
{
  id:"whitney", tier:1, x:52, y:87, sec:"3.6", tags:["life","earth"],
  name:"Marine Bioscience, Regeneration & the Evolution of Nervous Systems",
  short:"Whitney Lab",
  home:"Whitney Laboratory for Marine Bioscience · St. Augustine — roughly 1.5 hours from Gainesville",
  why:"Leonid Moroz's ctenophore work materially rewrote the textbook account of the origin of nervous systems — paired with a brand-new $41.2M facility and a 39-year-old undergraduate pipeline.",
  detail:"Moroz led “The ctenophore genome and the evolutionary origins of neural systems,” published in <i>Nature</i> in 2014, which established that ctenophores — comb jellies — evolved nervous systems independently and convergently from all other animals.",
  detailFlag:"moroz",
  infra:"The <b>Whitney Marine Research Center</b> opened 14 April 2026 — $41.2M, 38,000 sq ft, LEED Gold, more than doubling prior lab space: 12 new faculty labs, dedicated microscopy, aquaculture facilities, a makerspace with 3D printers and laser cutters, and an expanded <b>Sea Turtle Hospital</b>. Since opening in Oct 2015 the hospital has rehabilitated and released 78 turtles and rescued 1,524 “washback” hatchlings; 2024 alone saw 199 intakes.",
  friction:3,
  access:"The strongest formal program at UF. The <b>Whitney REU has run continuously since 1987</b> — one of the longest-running in the country. Ten weeks, paid, NSF Site Award, <b>fully covered on-site housing plus stipend and travel assistance</b>; requires US citizenship or permanent residency. Weekly seminars, an REU symposium, field trips. St. Augustine is far more tractable than Jupiter.",
  doors:["Whitney Lab REU — 10 weeks, paid, housing covered, ~early-mid February","Sea Turtle Hospital internships and volunteer program","Direct email to individual PIs (13 total, a small, legible faculty list)"],
  verdict:"Elite science plus a 39-year-old, well-oiled undergraduate pipeline plus a brand-new building. If evo-devo, regeneration, marine biology, or comparative neuroscience appeals to you at all, this is arguably the highest-leverage single application you can make at UF.",
  people:[
    {n:"Leonid Moroz", h:["Distinguished Prof."], d:"Neuroscience, Genetics, Biology and Chemistry. Led the 2014 Nature ctenophore genome paper establishing the independent, convergent origin of nervous systems in comb jellies.", u:"https://www.nature.com/articles/nature13400"},
    {n:"Veronica Hinman", h:["Director 2024"], d:"Recruited from Carnegie Mellon, appointed Director mid-2024. Evolution, development and regeneration in echinoderms.", u:"https://news.ufl.edu/2024/07/whitney-lab-director/"},
    {n:"Mark Q. Martindale", h:["Former Director"], d:"Evolutionary development; Nematostella (sea anemone) regeneration and wound healing."},
    {n:"David Duffy", h:[], d:"Wildlife Genomic Medicine / One Health. Showed sea turtle fibropapillomatosis tumors share genomic drivers and therapeutic vulnerabilities with human cancers, and that human chemotherapeutics treat turtle tumors.", u:"https://www.nature.com/articles/s42003-018-0059-x"},
    {n:"Elaine Seaver", h:[], d:"Invertebrate development and regeneration in annelids."},
    {n:"Joseph Ryan", h:[], d:"Comparative genomics and bioinformatics of early-branching animals."},
    {n:"Christine Schnitzler", h:[], d:"Functional genomics of regeneration in cnidarians."},
    {n:"James C. Liao", h:[], d:"Fish neurobiology and the physiology of swimming in flow."},
    {n:"James Strother", h:[], d:"Sensory neuroscience and behaviour in larval fish."},
    {n:"Sandra Loesgen", h:[], d:"Natural-products chemistry from marine microorganisms."},
    {n:"Todd Osborne", h:[], d:"Wetland and coastal biogeochemistry."},
    {n:"Leonardo Ibarra-Castro", h:[], d:"Aquaculture and marine finfish production."}
  ],
  srcs:[["Whitney REU","http://reu.whitney.ufl.edu/"],["New research center","https://news.ufl.edu/2026/04/whitney-lab-ribbon-cutting/"],["Sea Turtle Hospital","https://www.whitney.ufl.edu/conservation--sea-turtle-hospital/about-the-sea-turtle-hospital/"]]
},
{
  id:"ag", tier:1, x:20, y:86, sec:"3.8", tags:["eng","life","comp"],
  name:"Precision Agriculture & Agricultural IoT",
  short:"Precision Agriculture",
  home:"Agricultural & Biological Engineering · IFAS · ECE · Gainesville + Balm, FL",
  why:"UF/IFAS Agricultural & Biological Engineering ranks <b>#6 nationally</b>, the strongest departmental ranking anywhere at UF, better than any UF engineering department. And students skip it to chase “AI.”",
  detail:"Food systems, climate adaptation, robotics and sensing converge here, with the funding stability of an NSF Engineering Research Center behind them. It is underrated and undersubscribed, which is exactly what makes it a good bet for an undergraduate.",
  infra:"<b>IoT4Ag</b>, a $26M NSF Engineering Research Center, five-university consortium (UF, Penn, Purdue, UC Merced, ASU) launched in 2020, using IoT and sensor technology to cut water and energy use. The <b>Center for Applied Artificial Intelligence in Agriculture</b> broke ground 7 Nov 2025 at the Gulf Coast Research and Education Center in Balm, FL — state-legislature funded, AI-driven robotics and drones for crop management.",
  friction:2,
  access:"IoT4Ag runs a <b>formal NSF REU explicitly open to undergraduates</b>, plus a USDA REEU on the circular economy and the water–energy–food nexus (8–12 students, under the SURF umbrella). Because the field is undersubscribed relative to its quality, direct email to ABE faculty has an good hit rate.",
  doors:["IoT4Ag REU — formal NSF program, open to undergraduates","USDA REEU — circular economy & water-energy-food nexus (8–12 students)","Direct email to ABE faculty, an undersubscribed department"],
  verdict:"Underrated and undersubscribed. Students chase “AI” and skip this — which is exactly why it's a good bet.",
  people:[
    {n:"Changying “Charlie” Li", h:["Recent hire"], d:"Professor of Agricultural AI and Automation, recruited from the University of Georgia where he founded the UGA Phenomics and Plant Robotics Center. Robotic harvesting and plant phenomics. A strong target for robotics-inclined students.", u:"https://abe.ufl.edu/people/"},
    {n:"Alina Zare", h:["AIIRI Director"], d:"Co-PI on IoT4Ag; Machine Learning and Sensing Lab. Hyperspectral and ground-penetrating-radar sensing for agriculture. Funded by NSF/USDA/DOE/ONR/DARPA.", u:"https://faculty.eng.ufl.edu/machine-learning/"},
    {n:"Yiannis Ampatzidis", h:[], d:"Precision agriculture, AI and robotics for crop monitoring; developer of the “Agroview” AI platform.", hflag:"agroview"},
    {n:"Gregory A. Kiker", h:["ABE Chair"], d:"Department chair. Ecological and agricultural systems modelling."},
    {n:"Scott Angle", h:["IFAS Sr. VP"], d:"Leads the Center for Applied Artificial Intelligence in Agriculture."},
    {n:"Bill Eisenstadt", h:[], d:"ECE — sensor electronics and RF circuits for IoT4Ag."},
    {n:"Ian Small", h:[], d:"Plant Pathology — IoT4Ag co-investigator."},
    {n:"Diane Rowland", h:[], d:"Agronomy — crop physiology, IoT4Ag co-investigator."}
  ],
  srcs:[["ABE #6 ranking","https://blogs.ifas.ufl.edu/news/2026/04/07/uf-ifas-department-of-agricultural-and-biological-engineering-graduate-program-ranks-no-6-in-u-s-news-world-report/"],["IoT4Ag REU","https://iot4ag.us/reu-program/"],["IoT4Ag ERC","https://iot4ag.us/penn-purdue-uc-merced-and-uf-partner-on-new-26m-nsf-engineering-research-center-for-the-internet-of-things-for-precision-agriculture/"]]
},
{
  id:"wind", tier:1, x:30, y:82, sec:"3.7", tags:["eng","earth"],
  name:"Wind, Hurricane & Coastal Engineering",
  short:"Hurricane Engineering",
  home:"Civil & Coastal Engineering · ESSIE · Powell Family Structures and Materials Laboratory",
  why:"The Florida Coastal Monitoring Program collects real hurricane field data that feeds <b>directly into building codes</b>. Geography gives UF a permanent structural advantage here, and the university has built on it properly.",
  detail:"This is physical, testable, high-consequence engineering with an immediate policy pathway — your data changes what houses are legally allowed to be built. It is also unusually <em>legible</em> work for an undergraduate: instrumenting a house before a hurricane is a job a motivated sophomore can do well.",
  infra:"<b>Powell Family Structures and Materials Laboratory</b>: 13,000+ sq ft, a 6-degree-of-freedom shake table for seismic simulation, an 80-ft strong floor with 200-kip anchor capacity, a 2,800-hp boundary-layer wind tunnel under development, and high-speed cameras up to <b>148,000 fps</b>. UF (with FIU) was designated an NSF national hub for hurricane-mitigation research in 2015.",
  friction:2,
  access:"No single formal undergraduate gateway — but the work is physical and modular, the group is small enough to email directly, and field-deployment seasons create real labour demand. The Center for Coastal Solutions adds a computational route via its “Digital Twin” of the Florida coast.",
  doors:["Direct email to Gurley or Prevatt — field instrumentation before storm season","Center for Coastal Solutions — Digital Twin / computational coastal modelling","EGN4912 departmental research credit"],
  verdict:"Physical, consequential, hands-on engineering with an immediate policy pathway. Best fit if you learn by doing rather than by reading.",
  people:[
    {n:"Kurtis Gurley", h:["Interim ESSIE Dir."], d:"Wind engineering and stochastic modelling of extreme winds. Runs the Florida Coastal Monitoring Program side."},
    {n:"David O. Prevatt", h:[], d:"Kisinger Campo & Associates Term Professor. Post-disaster forensic wind-damage engineering and residential structural resilience."},
    {n:"Theodor Krauthammer", h:[], d:"Theodore R. Crom Professor. Blast and impact structural engineering — protective structures, a globally recognised niche specialty."},
    {n:"Ageliki “Lily” Elefteriadou", h:["ASEMFL 2026"], d:"Barbara Goldsby Professor, Director of the UF Transportation Institute. Highway capacity and connected/autonomous-vehicle traffic coordination.", u:"https://www.eng.ufl.edu/news/honors-awards/academy-of-science-engineering-and-medicine-of-florida-inducts-four-uf-engineering-professors/"},
    {n:"Timothy G. Townsend", h:["EPA SAB 2026","Distinguished Prof."], d:"Jones Edmunds Professorship. Solid and hazardous waste, landfill design, PFAS in waste streams. Executive Director of Florida's Hinkley Center; appointed to the EPA Scientific Advisory Board in 2026.", u:"https://en.wikipedia.org/wiki/Timothy_G._Townsend"},
    {n:"Kirk Hatfield", h:[], d:"ESSIE Director; Director, Florida Water Resources Research Center."},
    {n:"Kyle Riding", h:["Dept. Head"], d:"Concrete durability and early-age behaviour."},
    {n:"Xilei Zhao", h:["NSF CAREER 2024"], d:"Trustworthy AI for modelling human behaviour during climate disasters."},
    {n:"Alberto Canestrelli", h:["NSF CAREER 2025"], d:"Ribbed mussels and the protection of salt marshes."},
    {n:"Gaby Ou", h:["NSF CAREER 2025"], d:"Transmission-tower collapse in extreme storms."}
  ],
  srcs:[["Powell Family Lab","https://essie.ufl.edu/research-centers/facilities/powell-family-structures-materials-laboratory/"],["NSF hurricane hub","https://news.fiu.edu/2015/09/new-federal-research-funding-makes-florida-universities-national-hub-for-hurricane-mitigation-research/92570"],["Center for Coastal Solutions","https://ccs.eng.ufl.edu/about-ccs/"]]
},
{
  id:"hpg", tier:1, x:68, y:90, sec:"3.4", tags:["comp","math"],
  name:"HiPerGator & Academic Supercomputing",
  short:"HiPerGator",
  home:"UF Research Computing · Malachowsky Hall for Data Science & IT",
  why:"#1 among US <em>university-owned</em> systems on TOP500, IO500 and HPCG, and the only academic institution in the world entered in MLPerf Training. Over 60% of UF's $1.33B research budget depends on it.",
  detail:"HiPerGator 4th Generation: 63 NVIDIA DGX B200 nodes, ~504 Blackwell GPUs, ~$24M. UF was reportedly the first university in the world to receive DGX SuperPOD Blackwell technology — early access June 2025, full production September 2025. Nearly 7,000 users and 33M annual research requests.",
  infra:"<b>Read the ranking carefully.</b> #77 globally on TOP500 in June 2025; the December 2025 release puts it <b>106th fastest globally overall</b>. So: genuinely #1 among university-owned systems, and comfortably outside the world's top 100 overall. Both statements are true; only one gets into headlines. The 2020 origin was a $70M partnership — Chris Malachowsky (UF alumnus, NVIDIA co-founder) gave $25M personally, NVIDIA contributed $25M in kind, UF invested $20M.",
  friction:4,
  access:"<b>HiPerGator is not self-service.</b> Every research account requires a faculty sponsor with an existing Research Computing investment. There is no documented free undergraduate research tier. The path is: join a funded lab, then the PI adds you to their allocation. The AI² Center's free <em>instructional</em> access for coursework is a different and lesser thing.",
  doors:["AI Scholars Program via AIIRI — $1,750 over two semesters, February deadline, requires a faculty mentor first","Join a funded lab, then get added to the PI's allocation","AI² Center instructional access (coursework only, not research compute)"],
  verdict:"Do not come to UF to be trained by world-leading ML theorists. Come to use world-leading compute on a domain problem. A student who pairs a Tier 1 domain with HiPerGator-scale computation is in an strong and genuinely differentiated position.",
  people:[
    {n:"Sanjay Ranka", h:["Distinguished Prof."], d:"UF Distinguished Professor (2021), UF Research Foundation Professor (2023). High-performance and data-intensive computing.", u:"https://cise.ufl.edu/2021/10/ranka-named-uf-distinguished-professor"},
    {n:"David L. Reed", h:["Assoc. Provost"], d:"Directs the AI² Center, the “AI Across the Curriculum” Quality Enhancement Plan (2024–2029)."},
    {n:"Kati Migliaccio", h:[], d:"IFAS — co-director, AI Across the Curriculum."},
    {n:"Jane Southworth", h:[], d:"CLAS — co-director, AI Across the Curriculum."}
  ],
  srcs:[["HPCwire benchmarks","https://www.hpcwire.com/off-the-wire/university-of-florida-hipergator-tops-us-university-systems-across-major-hpc-benchmarks/"],["HiPerGator 4th gen","https://news.ufl.edu/2025/05/the-fourth-generation-model-of-ufs-hipergator/"],["Account request","https://it.ufl.edu/rc/get-started/request-hipergator-account/"],["AI Scholars","https://ai.research.ufl.edu/for-students/student-research-opportunity-listings/"]]
},
{
  id:"bme", tier:2, x:12, y:70, sec:"3.9", tags:["eng","health"],
  name:"Biomedical Engineering & Neuroengineering",
  short:"Biomedical Engineering",
  home:"J. Crayton Pruitt Family Department of Biomedical Engineering · Gainesville",
  why:"A rare case where a National-Academy-level PI runs an explicitly open undergraduate application process, and the department publishes the single most useful tactical document at UF.",
  detail:"BME is UF Engineering's best-ranked traditional department (<b>#12</b>, up from #17) and has the college's clearest current National Academy signal. The Fixel Institute connection gives it an strong clinical-research bridge.",
  infra:"Research credit runs through <b>EGN4912</b>. BME publishes a full <b>Undergraduate Research Guidebook</b> — regardless of your major, it is worth reading; it is the most useful tactical document any UF department has produced.",
  friction:1,
  access:"The <b>Schmidt Lab explicitly and continuously accepts undergraduate applications</b> — freshman through junior, multi-semester preferred, apply with a cover letter, resume and transcript to the lab coordinator. If you want to be able to say “I work in a National Academy member's lab,” this is the most direct route at UF.",
  doors:["Schmidt Lab — open rolling undergraduate applications","BME Undergraduate Research Guidebook (read it whatever your major)","EGN4912 research credit","AHA Cardiovascular REU (5–6 students, SURF umbrella)"],
  verdict:"Tier 2 by department rank, Tier 1 by access. The clearest current active-faculty National Academy of Engineering membership in the college sits behind an open application form.",
  people:[
    {n:"Christine Schmidt", h:["NAE 2024","NAM 2024"], d:"Distinguished Professor, J. Crayton Pruitt Family Endowed Chair. Neural tissue engineering and wound-healing biomaterials. A dual-academy member — elected to both the National Academy of Engineering and the National Academy of Medicine in 2024.", u:"https://faculty.eng.ufl.edu/schmidt/people/lab-opportunities/"},
    {n:"Cherie Stabler", h:["Dept. Chair","ASEMFL 2026"], d:"Preeminence Professor. Biomaterials and controlled release for cell-transplant treatment of Type 1 diabetes."},
    {n:"Aysegul Gunduz", h:[], d:"Fixel Brain Mapping Professor. Human brain mapping, neuromodulation, deep-brain-stimulation interfaces — tied to the Fixel Institute for Neurological Diseases."},
    {n:"Daniel Ferris", h:[], d:"Robert W. Adenbaum Professorship. Biomechanics, neural control of locomotion, wearable and exoskeleton robotics."},
    {n:"Mingzhou Ding", h:[], d:"J. Crayton Pruitt Family Professor. Cognitive neuroscience, neural imaging, signal processing."},
    {n:"Wesley Bolch", h:["UF Term Prof."], d:"Computational dosimetry and medical physics. Developed the widely cited pediatric phantom models for radiation dose assessment."},
    {n:"Parisa Rashidi", h:[], d:"Directs the Intelligent Health Lab (i-Heal). Co-PI on the $23.5M NIH Bridge2AI CHoRUS grant."},
    {n:"Anna Porras", h:["NSF CAREER 2024"], d:"Regenerative biomaterials."}
  ],
  srcs:[["Schmidt Lab openings","https://faculty.eng.ufl.edu/schmidt/people/lab-opportunities/"],["BME Undergrad Research Guidebook","https://www.bme.ufl.edu/wp-content/uploads/2023/08/2023-2024-Edition-UF-BME-Undergraduate-Research-Guidebook.pdf"],["NAE membership list","https://aa.ufl.edu/awards/highly-prestigious-external-awards/national-academy-of-engineering-membership/"]]
},
{
  id:"clinai", tier:2, x:44, y:68, sec:"3.4", tags:["comp","health"],
  name:"Clinical & Applied Artificial Intelligence",
  short:"Clinical & Applied AI",
  home:"Intelligent Clinical Care Center (IC3) · i-Heal · AI & Informatics Research Institute (AIIRI)",
  why:"This is where UF's AI money actually converts into research standing — applied and clinical AI with large external funding, not machine-learning theory.",
  detail:"The distinction matters enormously for choosing a lab. UF's core CS/ML bench is mid-pack; its applied AI bench is strong and well funded. The strongest bets are the applied labs: IC3 for clinical AI, Zare's ML & Sensing Lab for remote sensing, the Machine Intelligence Lab for robotics and autonomy, the Bioinformatics Lab, and FICS for security plus AI.",
  infra:"<b>NIH Bridge2AI CHoRUS grant: $23.5M</b>, a multi-site critical-care AI data infrastructure covering 100,000+ patients. <b>CTSI launched a $6.6M AI-in-health pilot award program in August 2026</b> — live, current funding. The <b>NSF AI Institute for Human-AI Cooperation (HAIC)</b>, $21.5M over 5 years announced July 2026, includes five UF PIs — but is <b>led by the University of Delaware. UF leads none of the ~25–30 national NSF AI Institutes.</b>",
  friction:3,
  access:"No single formal gateway; the route is the AI Scholars Program plus direct contact with a specific applied lab. Zare's and Bihorac's groups both carry enough external funding to absorb undergraduate labour.",
  doors:["AI Scholars Program via AIIRI — $1,750, February deadline","Direct email to IC3, i-Heal, or the ML & Sensing Lab","Pair with a domain dossier — clinical AI needs clinical questions"],
  verdict:"The honest version of UF's AI story. Come here for the applied problem and the compute, not for the theory bench.",
  people:[
    {n:"Azra Bihorac, M.D.", h:["IC3 Director"], d:"Senior Associate Dean for Research, College of Medicine; R. Glenn Davis Distinguished Professor. Trustworthy and reproducible AI in medicine, nephrology, critical care.", u:"https://ic3.center.ufl.edu/about/who-are-we/"},
    {n:"Alina Zare", h:["AIIRI Director"], d:"Director of AIIRI since Oct 2024; Machine Learning and Sensing Lab; NVIDIA/Malachowsky-funded endowed professorship (2026). Hyperspectral and ground-penetrating-radar sensing, landmine detection, underwater sonar.", u:"https://www.news.ufl.edu/2024/10/alina-zare"},
    {n:"Parisa Rashidi", h:[], d:"Associate Professor, BME. Directs the Intelligent Health Lab (i-Heal). Co-PI, NIH Bridge2AI CHoRUS.", u:"https://www.bme.ufl.edu/uf-to-use-23-5-million-grant-to-build-ai-infrastructure-to-improve-critical-care/"},
    {n:"Jose C. Principe", h:["Retired 2026"], d:"Distinguished Professor of ECE & BME, BellSouth Professor. h-index 92, ~43,000 citations; foundational in information-theoretic learning, kernel adaptive filtering, and brain–machine interfaces. Retired April 2026 after ~40 years, but remains a named PI on the NSF HAIC institute — no longer taking students in the usual way.", u:"https://ece.ufl.edu/2026/04/20/its-been-a-great-journey-ece-icon-jose-principe-retires-after-nearly-40-years/"},
    {n:"Yulia Levites Strekalova", h:[], d:"Co-PI, NIH Bridge2AI CHoRUS. Health communication and data-science workforce."},
    {n:"Sean Meyn", h:[], d:"UF PI on the NSF HAIC institute. Control theory and reinforcement learning."},
    {n:"Joel Harley", h:[], d:"UF PI on NSF HAIC. Signal processing and structural health monitoring."},
    {n:"Jie Fu", h:[], d:"UF PI on NSF HAIC. Formal methods and control for autonomy."},
    {n:"Yuheng Bu", h:[], d:"UF PI on NSF HAIC. Information theory and machine learning."},
    {n:"Mattia Prosperi", h:[], d:"Associate Dean for AI and Innovation; Chief Research Information Officer at EPI. Causal inference and health informatics."}
  ],
  srcs:[["IC3","https://ic3.center.ufl.edu/about/who-are-we/"],["NSF HAIC institute","https://news.ufl.edu/2026/07/nsf-funded-ai-institute/"],["CTSI $6.6M pilots","https://www.ctsi.ufl.edu/2026/08/10/institute-launches-6-6m-ai-in-health-pilot-awards/"]]
}
];

DOMAINS.push(
{
  id:"chem", tier:2, x:49, y:66, sec:"3.11", tags:["physical","comp"],
  name:"Chemistry, Polymers & Theoretical Chemistry",
  short:"Chemistry & QTP",
  home:"Department of Chemistry · Quantum Theory Project (joint with Physics)",
  why:"Two world-class sub-niches inside a Tier 2 department: computational and theoretical chemistry, and polymer chemistry.",
  detail:"The <b>Quantum Theory Project</b> — founded by Per-Olov Löwdin, host of the long-running Sanibel Symposium — has historically been one of the most prestigious quantum-chemistry centers in the US. The computational side pairs beautifully with HiPerGator. <b>Honest caveat: no current UF chemist was confirmed as a sitting NAS member</b>, a meaningful gap versus genuine top-10 chemistry departments.",
  infra:"QTP, plus a chemical-biology division of 17 faculty. The <b>Center for Heterocyclic Compounds</b> may now be historical rather than active, the Katritzky Term Professorship endures either way.",
  infraFlag:"heterocyclic",
  friction:3,
  access:"The <b>UF Chemistry REU is unusually international</b> — based in France via a Sorbonne partnership across Toulouse, Strasbourg, Paris and Reims/AgroParisTech: $6,000 living, $1,000 travel, free housing, and up to $1,000 in ACS meeting reimbursement. Deadline 15 January. Chemistry also runs its own honors thesis pathway.",
  doors:["Chemistry REU in France — $6,000 + travel + housing, deadline Jan 15","Chemistry honors thesis pathway","Direct email to a QTP theory group — computational work scales well with undergrad labour"],
  verdict:"Target the sub-niche, not the department. Bartlett, Roitberg and QTP for theory; Sumerlin for polymers. Both are world-class inside a department that is not.",
  people:[
    {n:"Rodney J. Bartlett", h:["Schrödinger Medal","APS/ACS Fellow"], d:"Graduate Research Professor, joint Chemistry/Physics, Quantum Theory Project. Inventor of much of modern coupled-cluster quantum chemistry. ACS Award in Theoretical Chemistry 2007; h-index 109.", u:"https://people.clas.ufl.edu/rodbartl/files/CV-April.pdf"},
    {n:"George Christou", h:["Herty Medal 2026"], d:"University Distinguished Professor & Drago Chair. World leader in single-molecule magnets and molecular magnetism. ACS Award in Inorganic Chemistry 2019.", u:"https://cen.acs.org/acs-news/george-christou-wins-2026-herty-medal/104/web/2026/07"},
    {n:"Brent S. Sumerlin", h:["ACS Fellow"], d:"George B. Butler Professor of Polymer Chemistry. Stimuli-responsive and self-healing materials, drug-delivery macromolecules. Macro Group UK Medal.", u:"https://news.clas.ufl.edu/brent-sumerlin-acs-fellow"},
    {n:"Adrian E. Roitberg", h:[], d:"Frank Harris Professor of Theoretical and Computational Chemistry. Major contributor to the AMBER molecular dynamics force field, used worldwide in biomolecular simulation. UF AI Research Excellence Award.", u:"https://roitberg.chem.ufl.edu/wp-content/uploads/sites/263/Adrian_CV_July2025.pdf"},
    {n:"Ramón Alain Miranda Quintana", h:["NSF CAREER"], d:"Computational chemistry of organometallic and rare-earth systems — HiPerGator-based.", u:"https://news.clas.ufl.edu/clas-faculty-earn-career-awards-from-nsf/"},
    {n:"Jeffrey Rudolf", h:["NSF CAREER"], d:"Cytochrome P450 enzymology for natural-product discovery."},
    {n:"Ronald K. Castellano", h:["Dept. Chair"], d:"Supramolecular and organic materials chemistry."},
    {n:"Lisa McElwee-White", h:[], d:"Organometallic chemistry and precursor design."},
    {n:"Zhongwu Guo", h:[], d:"Glycochemistry and carbohydrate vaccines."},
    {n:"Boone M. Prentice", h:[], d:"Mass spectrometry and ion mobility imaging."},
    {n:"Daniel Seidel", h:["Katritzky Term Prof."], d:"Heterocyclic chemistry and organocatalysis."},
    {n:"Steven D. Bruner", h:["Division Head"], d:"Chemical biology — enzyme structure and natural-product biosynthesis."},
    {n:"Rebecca A. Butcher", h:[], d:"Chemical signalling in nematodes."},
    {n:"Alberto Perez", h:[], d:"Computational biophysics and protein structure prediction."},
    {n:"Matthew Eddy", h:[], d:"NMR of membrane proteins and GPCRs."},
    {n:"Yong Zeng", h:[], d:"Microfluidics and single-cell analysis."},
    {n:"Fan Hong", h:[], d:"DNA nanotechnology."},
    {n:"Jon Stewart", h:[], d:"Biocatalysis and enzyme engineering."}
  ],
  srcs:[["Chemistry REU in France","https://reu.chem.ufl.edu/the-program"],["Quantum Theory Project","https://qtp.ufl.edu/about/"]]
},
{
  id:"epi", tier:2, x:46, y:62, sec:"3.15", tags:["life","math","health"],
  name:"Emerging Pathogens, Epidemiology & One Health",
  short:"Emerging Pathogens",
  home:"Emerging Pathogens Institute · Gainesville campus",
  why:"An exceptionally strong quantitative modelling subgroup hiding inside a large institute, the best target at UF for a mathematically inclined student who wants real-world consequence.",
  detail:"EPI was founded in 2006 with a $60M Florida legislative grant. <b>300+ faculty across 13 UF colleges</b>, 5,000+ published papers since 2011, research in 50+ countries. It joined the Global Virus Network in July 2025 and has close ties to IFAS's Florida Medical Entomology Laboratory in Vero Beach.",
  infra:"A 90,000-sq-ft green-certified building with <b>23,000 sq ft of combined biosafety and animal-care lab space spanning ACL1, BSL2/ACL2 and BSL3/ACL3</b>, a 4,500-sq-ft aquatic pathobiology lab, 150+ student and postdoc carrels, and a satellite BSL-2 facility in Fond Parisien, Haiti.",
  friction:3,
  access:"No formal undergraduate gateway, the route is cold-emailing individual PIs. The modelling group is the exception worth pushing on: it is computational, so undergraduate labour scales, and the group is smaller and more legible than the 300-faculty institute headline suggests.",
  doors:["Direct email to the Infectious Disease Dynamics group (Longini, Cummings, Hitchings)","University Scholars Program with an EPI mentor","Pair with statistics or mathematical-biology coursework first"],
  verdict:"Tier 2 institute, Tier 1 subgroup. For a mathematically inclined student who wants real-world consequence, infectious-disease dynamics is an excellent and underappreciated target.",
  people:[
    {n:"Ira Longini", h:[], d:"Internationally known outbreak modeller — COVID-19, vaccine trial design. Center for Statistics & Quantitative Infectious Diseases.", u:"https://iddynamics.biology.ufl.edu/faculty-2"},
    {n:"Derek Cummings", h:[], d:"Spatial and temporal dynamics of dengue, influenza, measles and chikungunya."},
    {n:"Matt Hitchings", h:[], d:"Vaccine-effectiveness trial design; Associate Director for Biostatistics at EPI."},
    {n:"Bernardo Garcia Carreras", h:[], d:"Spatial and evolutionary dynamics of dengue and SARS-CoV-2."},
    {n:"Marco Salemi", h:["Interim Director"], d:"Interim EPI Director since October 2024. Viral molecular epidemiology and phylodynamics.", hflag:"salemi", u:"https://epi.ufl.edu/about/leadership"},
    {n:"J. Glenn Morris", h:[], d:"Associate Director for Research Initiatives; former EPI director. Foodborne and waterborne pathogens."},
    {n:"Jason K. Blackburn", h:[], d:"Associate Director for Research Resources. Spatial epidemiology of anthrax and zoonoses."},
    {n:"Carla N. Mavian", h:[], d:"Associate Director for International Surveillance. Viral genomics."},
    {n:"Daniel R. Swale", h:[], d:"Associate Director for Training. Vector physiology and insecticide targets."},
    {n:"Michael Lauzardo", h:[], d:"Associate Director for Clinical Research. Tuberculosis."},
    {n:"Kuttichantran Subramaniam", h:[], d:"Aquatic Pathobiology and the Sequencing Core."}
  ],
  srcs:[["EPI about","https://epi.ufl.edu/about/"],["EPI facilities","https://epi.ufl.edu/about/facilities"],["ID Dynamics faculty","https://iddynamics.biology.ufl.edu/faculty-2"]]
},
{
  id:"mbi", tier:2, x:37, y:64, sec:"3.10", tags:["health","life"],
  name:"Neuroscience & Neuromedicine",
  short:"McKnight Brain Institute",
  home:"Evelyn F. and William L. McKnight Brain Institute · Gainesville campus",
  why:"Genuinely large and well-funded — 300+ affiliated faculty, $115M+ in NIH funding — with an unusual magnetic-resonance facility attached. But no single undergraduate gateway.",
  detail:"MBI claims a <b>No. 2 US ranking in neuroscience and neuromedicine research</b>. This is MBI's own claim on its own site; the methodology is unverified and should be treated skeptically until independently sourced. Research pillars: Acquired Neural Injury; Cognition, Behavior & Sensation; Neurological Diseases.",
  detailFlag:"mbi-rank",
  infra:"<b>AMRIS</b>, the Advanced Magnetic Resonance Imaging and Spectroscopy Facility — sits inside MBI and is the UF-based node of the NSF-funded National High Magnetic Field Laboratory. Ten spectrometer systems including 800 MHz and 750 MHz NMR, an 11T/40cm-bore animal imaging magnet, and two 3T human MRI systems. Open to external users through the NHMFL Users Program. <i>NHMFL's headquarters and highest-field magnets are at FSU; UF's node is the MR imaging and spectroscopy arm.</i>",
  friction:3,
  access:"300+ faculty and no formal undergraduate gateway — you must identify and cold-email an individual PI. The upside: it is on the Gainesville campus, so once you are in, the logistics are trivial.",
  doors:["Cold-email an individual PI. There is no central intake","University Scholars Program with an MBI mentor","AMRIS as a technique-driven entry point if you have imaging or signal-processing skills"],
  verdict:"Tier 2 by evidence, Tier 1 by convenience. Large, well-funded, on-campus — but you will have to do all the navigation yourself.",
  people:[
    {n:"Jennifer Bizon", h:["Director 2023"], d:"Named MBI Director in early 2023. Cognitive ageing and prefrontal circuits.", u:"https://ufhealth.org/news/2023/jennifer-bizon-phd-named-director-uf-s-mcknight-brain-institute"},
    {n:"Malú Gámez Tansey", h:["Parkinson's CoE"], d:"Neuroinflammation in Parkinson's disease; PI of a Parkinson's Foundation Research Center of Excellence award.", u:"https://mbi.ufl.edu/2019/07/30/uf-health-named-parkinsons-foundation-research-center-of-excellence/"},
    {n:"Ramon Sun", h:[], d:"Metabolism in Alzheimer's disease."},
    {n:"Melissa Armstrong", h:[], d:"Dementia diagnosis and clinician–patient communication."},
    {n:"Tracy Centanni Rosen", h:[], d:"Neural basis of dyslexia."},
    {n:"Kimberly Alonge", h:[], d:"Brain extracellular matrix and metabolic disease."}
  ],
  srcs:[["McKnight Brain Institute","https://mbi.ufl.edu/"],["AMRIS facility","https://amris.mbi.ufl.edu/amris/"]]
},
{
  id:"mse", tier:2, x:33, y:60, sec:"3.12", tags:["eng","physical"],
  name:"Materials, Nuclear & Semiconductor Engineering",
  short:"Materials & Nuclear",
  home:"Materials Science & Engineering · Nuclear Engineering · Nanoscale Research Facility",
  why:"Nuclear engineering ranks #13, semiconductor materials is sharp, and UF operates its own research reactor, which almost no undergraduate anywhere gets to touch.",
  detail:"The <b>UF Training Reactor</b> is one of a small number of operating university research reactors in the United States. That is a genuine rarity and an strong line on a resume. Pair this domain with hardware security and the Florida Semiconductor Institute for a semiconductor-focused path.",
  infra:"The <b>Nanoscale Research Facility</b> — 20,000+ sq ft with a Class 100/1000 cleanroom — plus the Nuclear Fuels and Materials Characterization Facility and the UF Training Reactor. The <b>Particle Engineering Research Center</b>, NSF-launched in 1994, has taken $50M+ of investment, educated 800+ students, transferred 10+ technologies and partnered with 100+ companies.",
  infraFlag:"nrf",
  friction:2,
  access:"No single formal gateway, but MSE and Nuclear are small enough departments that direct email works, and the reactor and cleanroom both need trained hands. Complete EHS and safety training <em>before</em> you apply — for facilities like these it is the single most persuasive thing on an undergraduate application.",
  doors:["Direct email to MSE or Nuclear faculty","UF Training Reactor — operator training pathway","Nanoscale Research Facility (nrfinfo@mail.ufl.edu, 352-846-2626)"],
  verdict:"The sharpest points here are nuclear (#13) and semiconductor materials. The operating research reactor is a genuine rarity — extremely few undergraduates anywhere have hands-on reactor access.",
  people:[
    {n:"Brij Moudgil", h:["NAE 2002"], d:"Distinguished Professor; Director, Particle Engineering Research Center. Particle science, surface chemistry and mineral processing.", u:"https://erc-assoc.org/content/particle-engineering-research-center"},
    {n:"Fan Ren", h:["NAI Fellow 2024","ASEMFL 2026"], d:"Chemical Engineering — Distinguished Professor, Fred and Bonnie Edie Professor. Wide-bandgap semiconductor devices and health biosensors.", u:"https://en.wikipedia.org/wiki/Fan_Ren"},
    {n:"Kevin S. Jones", h:["Distinguished Prof."], d:"Frederick N. Rhines Professor. Semiconductor ion implantation and electron microscopy; UF Teacher/Scholar of the Year.", u:"https://aa.ufl.edu/awards/uf-internal-awards/teacher--scholar-of-the-year/award-winners/kevin-s-jones"},
    {n:"Richard Hennig", h:["Alumni Prof."], d:"AI-driven and ab-initio materials discovery. A UF AI-accelerated superconductor-discovery workflow was recognised by UF Innovate, a natural HiPerGator pairing.", u:"https://mse.ufl.edu/utilizing-ai-to-discover-faster-paths-to-new-materials/"},
    {n:"Simon Phillpot", h:["Distinguished Prof."], d:"Computational materials science, nuclear materials, defect properties."},
    {n:"Michael Tonks", h:["MSE Chair"], d:"Computational nuclear materials modelling — DOE-funded mesoscale simulation of fuel microstructure evolution."},
    {n:"David P. Norton", h:["UF VP Research"], d:"Electronic, photonic and magnetic thin films."},
    {n:"Megan Butala", h:["NSF CAREER 2025"], d:"Disordered rocksalt oxide cathodes as sustainable lithium-ion alternatives."},
    {n:"Don Wall", h:["Reactor Director"], d:"Director of the UF Training Reactor."},
    {n:"James Baciak", h:[], d:"Florida Power & Light Professor. Cargo monitoring and gamma-ray detection."},
    {n:"Andreas Enqvist", h:[], d:"Nuclear safeguards and nonproliferation."},
    {n:"Assel Aitkaliyeva", h:[], d:"Nuclear fuels and irradiated materials."},
    {n:"Yong Yang", h:[], d:"Radiation effects in structural materials."}
  ],
  srcs:[["Nanoscale Research Facility","https://nrf.aux.eng.ufl.edu/about.asp"],["Particle Engineering Research Center","https://erc-assoc.org/content/particle-engineering-research-center"]]
},
{
  id:"math", tier:2, x:41, y:58, sec:"3.13", tags:["math","comp"],
  name:"Mathematics, Statistics & Optimization",
  short:"Math, Stats & Optimization",
  home:"Mathematics · Statistics · Industrial & Systems Engineering (Center for Applied Optimization)",
  why:"A genuinely outsized citation footprint hiding inside a mid-ranked department — plus a Bayesian statistics bench that is real, and two live math groups worth targeting specifically.",
  detail:"Do not assume department-wide elite status in mathematics. The department's most famous honour — <b>John G. Thompson's Fields Medal (1970) and Abel Prize (2008)</b> — is attached to an emeritus professor and is a historical honour, not a live research engine. Target the number theory or topology/TDA groups instead.",
  infra:"The <b>Center for Applied Optimization</b> in ISE is the standout unit. Statistics' identity is Bayesian methodology. Note that <b>Biostatistics is a separate department</b> in the College of Public Health & Health Professions, ranked #20. One ranking discrepancy worth knowing: an HWCOE article puts ISE at #11, while UF News's broader Industrial/Manufacturing/Systems category says #19.",
  infraFlag:"ise-rank",
  friction:3,
  access:"Mathematics and statistics run on independent study and honors thesis structures rather than formal programs. Topological data analysis (Bubenik, Wagner) is the most natural applied bridge for a student who wants both theory and a computational output.",
  doors:["Number theory group — Alladi, Berkovich, Garvan, Booher, Keating","Topology & topological data analysis — Bubenik, Wagner","Center for Applied Optimization (ISE)","Statistics honors thesis / independent study"],
  verdict:"Target groups, not departments. Number theory and topology/TDA in math; the Bayesian bench in statistics; the Center for Applied Optimization in ISE.",
  people:[
    {n:"Panos M. Pardalos", h:["INFORMS Fellow 2006"], d:"Distinguished Professor, Paul and Heidi Brown Preeminent Professor, Director of the Center for Applied Optimization. Humboldt Research Award. UF's top-cited computer-science-adjacent scholar: h-index 123, ~67,000 citations. Global and combinatorial optimization for networks, biomedicine and logistics.", hflag:"pardalos", u:"https://www.ise.ufl.edu/blog/2017/02/distinguished-professor-one-of-most-cited-in-field/"},
    {n:"John G. Thompson", h:["Fields Medal 1970","Abel Prize 2008","Emeritus"], d:"Graduate Research Professor Emeritus. Group theory, the Feit–Thompson theorem and the classification of finite simple groups. A historical honour attached to an emeritus professor, not a lab you can join.", u:"https://math.ufl.edu/people/emeritus-faculty-2/"},
    {n:"Krishnaswami Alladi", h:[], d:"Founding editor of The Ramanujan Journal (Springer). Number theory and partitions; closely tied to the SASTRA Ramanujan Prize community.", u:"https://en.wikipedia.org/wiki/Krishnaswami_Alladi"},
    {n:"Michael Daniels", h:["Andrew Banks Chair"], d:"Bayesian methodology, missing data, causal inference.", u:"https://stat.ufl.edu/people/faculty/"},
    {n:"Malay Ghosh", h:["Distinguished Prof."], d:"Small-area estimation and empirical Bayes — internationally leading in that subfield."},
    {n:"Hani Doss", h:[], d:"MCMC and Bayesian computation."},
    {n:"Kshitij Khare", h:[], d:"Graphical models and high-dimensional inference."},
    {n:"William Hager", h:["Distinguished Prof."], d:"Numerical optimization and optimal control."},
    {n:"Alexander Dranishnikov", h:["Distinguished Prof."], d:"Topology and coarse geometry."},
    {n:"Kevin Knudson", h:["Distinguished Prof."], d:"Topology; algebraic K-theory."},
    {n:"Peter Bubenik", h:[], d:"Topological data analysis, the emerging applied bridge in the department."},
    {n:"Dana Bartosova", h:["NSF CAREER"], d:"Topological dynamics and set theory."},
    {n:"Aleksandr Kazachkov", h:["NSF CAREER 2025"], d:"Integer optimization for power systems, vehicle routing and organ-transplant allocation."},
    {n:"Jia “Peter” Liu", h:["NAE Frontiers 2026"], d:"Selected for the 2026 NAE Frontiers of Engineering Symposium — roughly 100 national invitees."},
    {n:"Joseph Antonelli", h:[], d:"Bayesian causal inference; environmental statistics."},
    {n:"Georgia Papadogeorgou", h:[], d:"Causal inference with spatial and network data."},
    {n:"Sayar Karmakar", h:[], d:"Time series and high-dimensional inference."},
    {n:"Miklós Bóna", h:[], d:"Enumerative and analytic combinatorics."},
    {n:"Maia Martcheva", h:[], d:"Mathematical biology — epidemiological and immunological models."},
    {n:"Calistus Ngonghala", h:[], d:"Mathematical biology — infectious disease and poverty-trap dynamics."}
  ],
  srcs:[["Statistics faculty","https://stat.ufl.edu/people/faculty/"],["Center for Applied Optimization","https://www.ise.ufl.edu/blog/2017/02/distinguished-professor-one-of-most-cited-in-field/"],["Math emeritus","https://math.ufl.edu/people/emeritus-faculty-2/"]]
},
{
  id:"cancer", tier:2, x:53, y:60, sec:"3.16", tags:["health","life"],
  name:"Cancer, Genetics & Clinical Translation",
  short:"Cancer & Genetics",
  home:"UF Health Cancer Institute · UF Genetics Institute · Clinical and Translational Science Institute",
  why:"NCI designation in June 2023, the 72nd nationally and <b>the only one at a Florida public university</b> — elevated to “Institute” status in 2025.",
  detail:"FY2025: <b>$57.4M in total cancer grants</b> ($33.2M NIH/NCI direct), 360+ faculty across 75 departments and all 16 colleges, 268 active research projects, <b>233 active clinical trials</b> with 990 patients enrolled, 871 publications and 36 US patents. Notable 2025 work spans mRNA cancer-vaccine immunotherapy, dietary links to lung-cancer prevention, GLP-1 drugs and cancer risk, and AI diagnostics for acute myeloid leukemia.",
  infra:"The <b>UF Genetics Institute</b> umbrella covers functional genomics and proteomics platforms, the Powell Gene Therapy Center, the Center for Immunology and Transplantation, and Plant Molecular & Cellular Biology. <b>CTSI</b> is a joint UF–FSU CTSA hub (NIH UM1) with an external advisory committee drawn from Yale, Duke, Michigan and Vanderbilt. Tech transfer runs through <b>UF Innovate</b> and the Sid Martin Biotech incubator in Alachua — 32,546 sq ft, 25 wet labs, ~$2.2M in shared equipment, 13 active biotech companies.",
  friction:3,
  access:"No central undergraduate intake across 360+ affiliated faculty. This is a cold-email domain. The clinical-trials and translational side is unusually welcoming to students with data skills, and CTSI's pilot programs create recurring short-horizon projects.",
  doors:["Cold-email an individual PI in the Cancer Institute or Genetics Institute","CTSI pilot-funded projects — short horizon, data-skills friendly","GatorPitch / Sid Martin Biotech for the translational and startup side"],
  verdict:"Large, genuinely well-credentialed clinical research with real trial infrastructure. Best entered with a specific technique — sequencing, imaging analysis, or statistics — rather than general enthusiasm.",
  people:[
    {n:"Jonathan D. Licht, M.D.", h:["UFHCI Director"], d:"Director of the UF Health Cancer Institute. Epigenetics of hematologic malignancy.", u:"https://cancer.ufl.edu/nci-designation/"},
    {n:"Thomas P. Burris", h:["UFGI Director","ASPET 2026"], d:"Director of the UF Genetics Institute. Nuclear receptor pharmacology and circadian biology; selected for the 2026 ASPET Goodman & Gilman Award Lecture.", u:"https://ufgi.ufl.edu/research/"},
    {n:"Duane Mitchell, M.D., Ph.D.", h:["CTSI Co-Director"], d:"Brain tumor immunotherapy; co-directs the UF–FSU CTSA hub.", u:"https://ctsi.ufl.edu/about/uf-ctsi-overview/governance"},
    {n:"Elizabeth Shenkman", h:["CTSI Co-Director"], d:"Health outcomes and policy; co-directs CTSI."}
  ],
  srcs:[["UFHCI 2025 annual report","https://cancer.ufl.edu/2026/03/16/2025-annual-report/"],["UF Genetics Institute","https://ufgi.ufl.edu/research/"],["Sid Martin Biotech","https://innovate.research.ufl.edu/accelerate/sid-martin-biotech/"]]
},
{
  id:"astro", tier:2, x:28, y:57, sec:"3.14", tags:["physical","earth"],
  name:"Astronomy & Planetary Science",
  short:"Astronomy & Planetary",
  home:"Department of Astronomy · Geological Sciences · UF Astraeus Space Institute",
  why:"A small department with an exoplanet PI whose external funding <em>explicitly</em> supports an undergraduate research program, and a genuine Mars-mission scientist next door.",
  detail:"Both of the strongest assets here are individual-person bets rather than departmental strength. That is not a criticism: for an undergraduate, one well-funded PI who wants undergraduates is worth more than a large department that does not.",
  infra:"UF is a formal partner in the <b>Gran Telescopio Canarias</b> — 10.4m on La Palma, the largest single-aperture optical telescope in the world at commissioning, and built and tested infrared camera instrumentation for it. UF also operates the <b>Rosemary Hill Observatory</b> (30-inch, ~30 miles from campus) and a Campus Teaching Observatory. In 2025 UF entered an NRAO/ngVLA partnership evaluating Florida IFAS sites as next-generation Very Large Array stations.",
  friction:2,
  access:"The <b>Astronomy REU</b> pays $6,000 for 10 weeks plus campus housing, deadline 1 February. Separately, Sarah Ballard's 2023 Cottrell Scholar award ($100,000) explicitly funds an undergraduate research program, a rare, named, funded commitment.",
  doors:["Astronomy REU — $6,000 / 10 weeks + housing, deadline Feb 1","Sarah Ballard's Cottrell-funded undergraduate program","Direct email to Amy Williams (Geological Sciences) for planetary/astrobiology"],
  verdict:"Small department, two real niches, unusual facility access. Exceptionally attractive if the field matches — but check that the specific person is still taking students.",
  people:[
    {n:"Sarah Ballard", h:["Cottrell Scholar 2023"], d:"Exoplanets around M dwarfs and day/night habitability. PhD Harvard, former NASA Sagan Fellow. Her $100,000 Cottrell funding explicitly supports an undergraduate research program.", u:"https://news.ufl.edu/2023/02/sarah-ballard-cottrell-scholar"},
    {n:"Amy J. Williams", h:["Curiosity + Perseverance"], d:"Geological Sciences — astrobiology and geobiology. Science team member on NASA's Curiosity rover (SAM instrument) since 2009 and Participating Scientist on Perseverance. Served on the National Academies' Planetary Science and Astrobiology Decadal Survey committee. The only clearly nationally distinctive asset in that department.", u:"https://astraeus.ufl.edu/faculty-bio-amy-williams/"},
    {n:"Desika Narayanan", h:[], d:"Galaxy-formation hydrodynamic simulations and dust radiative transfer; developer of the widely used Powderday code. A natural HiPerGator pairing.", u:"https://users.astro.ufl.edu/~desika.narayanan/research.html"},
    {n:"Adam Ginsburg", h:["NSF CAREER"], d:"Gas disks around massive young stars."},
    {n:"Jaehan Bae", h:[], d:"Protoplanetary disks and planet formation."},
    {n:"Jason Dittmann", h:[], d:"Exoplanet discovery and characterisation."},
    {n:"Zachary Slepian", h:[], d:"Cosmology and large-scale structure."},
    {n:"Anthony Gonzalez", h:[], d:"Galaxy clusters and cosmology."},
    {n:"Rafael Guzmán", h:[], d:"Galaxy evolution; GTC instrumentation."},
    {n:"Keri Hoadley", h:[], d:"Ultraviolet instrumentation and the interstellar medium."},
    {n:"Robert Ferl", h:["Astraeus"], d:"UF Astraeus Space Institute — leads UF's side of the NRAO/ngVLA site partnership. Plant biology in spaceflight.", u:"https://news.ufl.edu/2025/04/nsf-nrao/"},
    {n:"Stephen Elardo", h:[], d:"Lunar and planetary geochemistry."},
    {n:"Jonathan Martin", h:["Distinguished Prof."], d:"Geochemistry and hydrogeology."},
    {n:"John M. Jaeger", h:["Dept. Chair"], d:"Coastal and marine sedimentology."},
    {n:"Alessandro M. Forte", h:[], d:"Computational geodynamics."},
    {n:"Joseph Meert", h:[], d:"Paleomagnetism and supercontinent reconstruction."}
  ],
  srcs:[["Astronomy REU","https://www.astro.ufl.edu/reu"],["GTC partnership","https://archive.news.ufl.edu/articles/2000/11/uf-to-become-partner-with-spanish-govt-in-worlds-largest-telescope.html"],["NRAO/ngVLA","https://news.ufl.edu/2025/04/nsf-nrao/"]]
},
{
  id:"mae", tier:2, x:50, y:52, sec:"3.13", tags:["eng"],
  name:"Mechanical & Aerospace Engineering",
  short:"Mechanical & Aerospace",
  home:"Department of Mechanical & Aerospace Engineering",
  why:"Solid, broad, and currently in transition — MAE's most nationally visible figure left in 2026. The controls/robotics group's successor leadership is unclear.",
  detail:"<b>Warren E. Dixon</b> — Distinguished Professor of nonlinear controls and robotics, former MAE chair and interim college dean — left UF in 2026 to become Dean of Engineering at Virginia Tech. That is a real loss for the controls and robotics group, and the Nonlinear Controls and Robotics lab's successor leadership was not determinable. Check current group status before committing here.",
  infra:"Strengths cluster in computational fluid dynamics, dynamic materials behaviour, plasma flow control, and trajectory optimization. The MAE “Engineering for Healthcare” REU ran 23 May – 1 Aug 2026.",
  friction:3,
  access:"The MAE Engineering for Healthcare REU is the formal door, though its stipend was not published. Otherwise it is EGN4912 research credit plus direct outreach, and MAE professors recruit heavily out of their own classrooms, so course performance is the highest-conversion tactic here.",
  doors:["MAE “Engineering for Healthcare” REU — programme runs late May to early August","EGN4912 research credit","Excel in a core MAE course, then approach that professor"],
  verdict:"Broad and capable rather than pointed. Verify the current state of any group you target — this department is mid-transition.",
  people:[
    {n:"Warren E. Dixon", h:["Departed 2026"], d:"Left UF in 2026 to become Dean of Engineering at Virginia Tech. Nonlinear controls and robotics.", u:"https://news.vt.edu/articles/2026/04/eng-coe-warren-dixon-named-dean-of-the-college-of-engineering.html"},
    {n:"S. “Bala” Balachandar", h:["Distinguished Prof."], d:"Newton C. Ebaugh Professor. Computational fluid dynamics; large-scale simulation of turbulent and multiphase flows.", hflag:"bala"},
    {n:"Subrata Roy", h:["NAI Fellow","RAeS Fellow","FL Inventors HoF"], d:"Founding director, Applied Physics Research Group. Plasma actuators for flow control; invented the Wingless Electromagnetic Air Vehicle (WEAV); founded SurfPlasma Inc.", u:"https://en.wikipedia.org/wiki/Subrata_Roy_(scientist)"},
    {n:"Ghatu Subhash", h:["Distinguished Prof."], d:"Newton C. Ebaugh Professor. Dynamic and impact behaviour of ceramics, composites and biological materials."},
    {n:"Anil V. Rao", h:["UF Term Prof."], d:"Spacecraft and air-vehicle trajectory optimization; author of the widely used GPOPS-II optimal-control software."},
    {n:"Malisa Sarntinoranont", h:["ASME Fellow 2017"], d:"Directs the Soft Tissue Mechanics and Drug Delivery Laboratory."},
    {n:"Jessica Allen", h:["NSF CAREER 2024"], d:"Neuromechanical gait rehabilitation and prosthetics."},
    {n:"Amor Menezes", h:["NSF CAREER 2024"], d:"Synthetic biological regulation and control."},
    {n:"Jing Pan", h:["NSF CAREER 2024"], d:"Biosensing."},
    {n:"Patrick Musgrave", h:["NSF CAREER 2025"], d:"Underwater robotics."}
  ],
  srcs:[["Dixon to Virginia Tech","https://news.vt.edu/articles/2026/04/eng-coe-warren-dixon-named-dean-of-the-college-of-engineering.html"],["2025 NSF CAREER awardees","https://www.eng.ufl.edu/news/stories/shaping-whats-next-2025-nsf-career-awardees/"]]
},
{
  id:"cs", tier:3, x:55, y:24, sec:"§2",  tags:["comp","math"],
  name:"Core Computer Science & Machine-Learning Theory",
  short:"Core CS / ML Theory",
  home:"Department of Computer & Information Science & Engineering (CISE)",
  why:"UF's AI narrative is built on compute infrastructure and course breadth, not on top-venue publication density. Research.com places UF CS at <b>#75 nationally / #128 world</b>.",
  detail:"UF participates in NSF AI Institutes but <b>leads none</b> of the ~25–30 national institutes. The widely quoted “<b>300 AI faculty</b>” figure conflates a genuine hiring cluster, the original NVIDIA-partnership pledge was 100, and an independent case study confirms 106 hired 2020–2022 — with a much broader self-reported tally of anyone who teaches or uses AI. The “AI readiness #1” ranking is sourced to AIREDEX, a private assessment firm scoring public disclosures, not an independent academic audit. NVIDIA's blog crediting AI investment for UF's US News rise is a promotional post by UF's own hardware partner.",
  detailFlag:"csrankings",
  infra:"There is real substance in CISE. It is simply not where the headline says it is. The flagship labs are the Machine Intelligence Laboratory (autonomous vehicles across air, land, sea and underwater), the Computing for Social Good Lab, the Center for Vision, Graphics & Medical Imaging, the Data Science Research Group, the NLP Research Lab, the Bioinformatics Lab, the Embedded Systems Lab, and the Adaptive Learning & Optimization Lab.",
  friction:3,
  access:"CISE labs recruit heavily from their own courses. Juan Gilbert in particular has a long public record of mentoring undergraduates, a 2012 Presidential Award for mentoring, and is the most reliable single point of entry in the department.",
  doors:["Excel in a CISE course, then approach that professor","Machine Intelligence Laboratory — robotics and autonomy, hands-on","Bioinformatics Lab — pairs with Tier 1 biology and with HiPerGator"],
  verdict:"If you want to be a top ML theorist, UF's compute will help you and its faculty bench will not carry you the way CMU, Stanford, Berkeley or UIUC would. Use the compute; get the science elsewhere in this map.",
  people:[
    {n:"Juan E. Gilbert", h:["IEEE Fellow 2023","ACM Fellow","AAAS Fellow","NAI Fellow"], d:"Banks Family Preeminence Endowed Professor; Computing for Social Good Lab. Human-centered computing, AI fairness, accessible voting. Presidential Award for mentoring (2012), a long public record of mentoring undergraduates.", u:"https://cise.ufl.edu/gilbert-named-2023-ieee-fellow/"},
    {n:"Baba C. Vemuri", h:[], d:"Center for Vision, Graphics & Medical Imaging. Computer vision and medical image analysis."},
    {n:"My T. Thai", h:[], d:"Adaptive Learning & Optimization Lab. Network science and optimization."},
    {n:"Christina Boucher", h:[], d:"Bioinformatics Lab. Compressed data structures for large-scale genomics."},
    {n:"Tamer Kahveci", h:[], d:"Bioinformatics Lab. Computational biology and biological networks."},
    {n:"Daisy Zhe Wang", h:[], d:"Data Science Research Group. Large-scale data management."},
    {n:"Bonnie Dorr", h:[], d:"NLP Research Lab. Natural language processing."}
  ],
  srcs:[["CISE labs & centers","https://cise.ufl.edu/ciseresearch/research-centers-labs/"],["Research.com CS ranking","https://research.com/university/computer-science/university-of-florida"],["AI hiring case study","https://news.ufl.edu/2026/05/warrington-press-building-ai-university/"],["AIREDEX “AI readiness”","https://news.ufl.edu/2026/07/ai-readiness/"]]
},
{
  id:"geo", tier:3, x:30, y:33, sec:"§2", tags:["earth","physical"],
  name:"Geological Sciences as a Department",
  short:"Geological Sciences",
  home:"Department of Geological Sciences",
  why:"No current NAS members, Distinguished Professors, or major-prize winners were found among active faculty. One genuinely distinctive asset — but that is one person, not a departmental thrust.",
  detail:"The distinctive asset is <b>Amy J. Williams</b>, a science team member on NASA's Curiosity rover and a Participating Scientist on Perseverance, a rare, high-visibility credential. The correct read is therefore: target her, or target the cross-appointed paleontology work through the Florida Museum (Jonathan Bloch is cross-appointed here), rather than treating the department as a destination.",
  infra:"Cross-appointments do most of the work: vertebrate paleontology runs through the Florida Museum, planetary science through the Astraeus Space Institute, and hydrogeology connects to ESSIE's water programs.",
  friction:2,
  access:"Small department, so direct email reaches a real person quickly. The stronger play is to enter through the adjacent Tier 1 or Tier 2 dossier — Evolutionary Biology for paleontology, Astronomy & Planetary for astrobiology.",
  doors:["Direct email to Amy Williams for astrobiology / Mars science","Enter via the Florida Museum for vertebrate paleontology","Enter via ESSIE for hydrogeology and coastal work"],
  verdict:"One person, not a department. Go for the person — or go through a neighbouring dossier that has the institutional weight this one lacks.",
  people:[
    {n:"Amy J. Williams", h:["Curiosity + Perseverance"], d:"Astrobiology and geobiology. NASA Curiosity SAM science team since 2009; Perseverance Participating Scientist; Planetary Science and Astrobiology Decadal Survey committee; Scialog Fellow.", u:"https://astraeus.ufl.edu/faculty-bio-amy-williams/"},
    {n:"Jonathan I. Bloch", h:["Cross-appointed"], d:"Vertebrate paleontology, the substance sits in the Florida Museum, not this department."}
  ],
  srcs:[["Amy Williams profile","https://astraeus.ufl.edu/faculty-bio-amy-williams/"]]
},
{
  id:"quantum", tier:3, x:66, y:21, sec:"§2", tags:["physical","comp"],
  name:"Florida Quantum Initiative",
  short:"Florida Quantum Initiative",
  home:"Cross-institutional · leadership not publicly documented",
  why:"Real institutional intent, but individual faculty leadership and funded projects were not extractable from public pages as of August 2026. Thinner than peer efforts at FSU and FAMU.",
  detail:"This is the clearest “watch, don't bet” entry on the map. There is a live quantum story at UF — but it is in the Physics department's 2024 hiring cohort (Pedrozo-Peñafiel's entanglement-enhanced optical atomic clocks, Jiabin Yu's topological theory), not in the Initiative's own public footprint.",
  detailFlag:"quantum",
  infra:"Not publicly documented at a level that would let a student evaluate it. Treat any claim about this Initiative as unverified until you speak to a named person.",
  friction:4,
  access:"No documented undergraduate pathway. If quantum is your interest, route through the Physics dossier and the 2024 hiring cohort instead.",
  doors:["Route through Physics — Pedrozo-Peñafiel, Jiabin Yu","Ask the Physics department directly what the Initiative actually funds"],
  verdict:"Watch, don't bet. The real quantum activity at UF has physics faculty names attached; the Initiative, as of August 2026, does not.",
  people:[],
  srcs:[["2024 Physics hires","https://phys.ufl.edu/2024/12/16/new-faculty-join-department-of-physics-in-2024/"]]
}
);

/* ---------------------------------------------------------------------------
   VERIFICATION FLAGS — inline markers + the evidence layer
   --------------------------------------------------------------------------- */
const FLAGS = {
  "mcguire":    {t:"UF's own framing", b:"The 10-million specimen count is confirmed. “Largest collections-based butterfly and moth research center in the world” is UF's own superlative; independent sources hedge to “one of the largest, rivalling the Natural History Museum in London.”"},
  "soltis-yr":  {t:"Year not re-confirmed", b:"Doug Soltis's NAS election year (2017) was sourced from UF and NAS pages on the first pass but could not be re-confirmed on the adversarial pass, the search budget ran out. Very likely correct; check nasonline.org before quoting the year."},
  "holt-yr":    {t:"Year not re-confirmed", b:"Robert Holt's NAS election year (2022) was sourced on the first pass only. Same caveat as Doug Soltis — verify the year directly against nasonline.org."},
  "reitze":     {t:"Sourced from public record", b:"David Reitze's Breakthrough Prize and full honors list could not be confirmed on his current UF department page. The prize is real and a matter of public record; UF's own page simply does not list it."},
  "moroz":      {t:"One claim was refuted here", b:"An earlier draft attributed a 2023 Science paper on ctenophore syncytial (fused-cell) nerve nets to Moroz. That finding is real and important to the same debate, but Moroz is NOT confirmed as an author. The 2014 Nature genome paper is the one to attribute to him. This page has been corrected."},
  "fics-pipeline": {t:"Pipeline mechanics unconfirmed", b:"FICS maintains a students page and a certificate program that imply structured undergraduate involvement, but the specific intake mechanics were not confirmable from public pages. The Assured Autonomy & Networking REU is the door that is actually documented."},
  "mbi-rank":   {t:"Self-published claim", b:"“No. 2 in neuroscience and neuromedicine research” appears on MBI's own site with no stated methodology and no independent source. Treat it skeptically until independently verified."},
  "csrankings": {t:"Could not retrieve CSRankings", b:"UF's CSRankings position in AI/ML could not be retrieved programmatically. Check csrankings.org directly, filtered to “AI”. That is the metric CS academics actually use, and it will likely tell a less flattering story than UF's press releases."},
  "agroview":   {t:"Award claim unverified", b:"Yiannis Ampatzidis's “Agroview” invention-award claim could not be verified from a primary UF source. The platform and the research program are real; the specific award is not confirmed."},
  "salemi":     {t:"Still interim?", b:"Marco Salemi has been Interim EPI Director since October 2024. No permanent appointment was found as of August 2026. Confirm current leadership before citing."},
  "pardalos":   {t:"Honors beyond 2006 unverified", b:"Panos Pardalos's honors beyond INFORMS Fellow (2006) are unverified. The citation figures — h-index 123, ~67,000 citations, per Research.com — are the load-bearing evidence here, not the award list."},
  "bala":       {t:"Fellow status unverified", b:"S. Balachandar's fellow and honor status could not be verified. His research standing in computational multiphase flow is not in question; the specific honors are."},
  "ise-rank":   {t:"Two conflicting rankings", b:"One HWCOE article puts ISE at #11; UF News's broader “Industrial / Manufacturing / Systems” category says #19. Different category definitions, both published by UF."},
  "nrf":        {t:"Specs not retrievable", b:"Nanoscale Research Facility leadership names and precise cleanroom specifications were not retrievable from public pages. Contact directly: nrfinfo@mail.ufl.edu, 352-846-2626."},
  "heterocyclic": {t:"Active unit or legacy?", b:"It is unclear whether the Center for Heterocyclic Compounds still operates as an active unit or survives only as a historical name. The Katritzky Term Professorship endures regardless."},
  "quantum":    {t:"Thinly documented", b:"Individual faculty leadership and funded projects for the Florida Quantum Initiative were not extractable from public pages as of August 2026."},
  "usnews":     {t:"Rank not re-confirmed", b:"UF's #7 public / #30 national US News rank was sourced from UF's own newsroom on the first pass but not independently re-confirmed on the adversarial pass."},
  "beckman":    {t:"Apparently lapsed", b:"UF ran a Beckman Scholars program roughly 2013–2015 ($19,300 per scholar; 9 scholars across Chemistry, Biology, Biochemistry and the Florida Museum), but UF does not appear in the Beckman Foundation's 2025 or 2026 award cohorts. Confirm with UF Chemistry before counting on it."},
  "astronaut":  {t:"Confirmed absent", b:"UF is not among the Astronaut Scholarship Foundation's ~60 partner universities, while peers including UCF, Georgia Tech and Purdue are. There is no institutional nomination pathway for UF students."},
  "igem-intake":{t:"Intake entirely undocumented", b:"UF's Center for Undergraduate Research page for iGEM does not publish how to join, when applications open, who the faculty advisors are, whether it carries course credit, or how it is funded. For a CUR-affiliated gold-medal team that is a significant gap. Email CUR or ask at 202 Newell Hall."},
  "fsae-results":{t:"Results unverified", b:"The only source found for Gator Motorsports' 2025 FSAE Electric results was a sponsor's Facebook post — marketing, not a result. Standing at the June 2026 Michigan competition is unknown. Ask the team directly at uffsae@gmail.com."},
  "swamplaunch-results":{t:"Results not found", b:"Swamp Launch's USLI and IREC placements were not found in any public source. Participation is confirmed; performance is not."},
  "solargators":{t:"Team site returns 403", b:"ufsolargators.org returned HTTP 403 and the 2025–26 information packet PDF could not be parsed. Every figure here comes from UF news, ECE news and The Independent Florida Alligator rather than from the team. Contact solargatorspresident@gmail.com."},
  "icpc":       {t:"Absence of evidence", b:"No UF ICPC or competitive-programming team surfaced in any search. A team may exist without a web presence. This is not confirmed absence. But UCF's is highly visible and UF's is not, and that asymmetry is informative on its own."},
  "aiaa":       {t:"Domain failed to resolve", b:"uflaiaa.org returned a DNS failure on 16 August 2026. The chapter is still listed on the MAE organisations page. It may be dormant, mid-migration, or simply have let a domain lapse — find out before planning around it."},
  "prehealth":  {t:"Third-party claim only", b:"The claim that the Preprofessional Service Organization is UF's oldest pre-health society and second-oldest student-run organisation comes from a third-party summary, not a UF source. Pre-health organisations generally publish very little that can be verified from outside."},
  "clubfair":   {t:"Recurrence extrapolated", b:"The 27 August 2026 fair date is confirmed by the O'Connell Center events page. That it recurs in late August every year is inferred from the annual pattern, not from a published multi-year schedule."},
  "rhodes-passed":{t:"Deadline already past", b:"UF's published campus endorsement deadline for Rhodes and Marshall was 14 August 2026 — before this page's survey date. Deadlines occasionally move and offices occasionally make exceptions. Email the Office of Prestigious Awards rather than assuming it is hopeless."},
  "gates-dl":   {t:"Deadline listed as TBD", b:"UF's own prestigious-awards page lists this campus deadline as “to be determined” for the cycle. Check directly with the Office of Prestigious Awards."},
  "gilman-rate":{t:"Self-reported rate", b:"The ~30% UF award rate for Gilman is UF's own published figure. Plausible and consistent with Gilman's national profile, but self-reported and not independently audited."},
  "amgen-dates":{t:"Dates not yet open", b:"Amgen Scholars 2027 applications were open for Australia only at the time of research; all other regions were listed as “coming November 1.” Treat 1 November as the date to check, not the date to apply."},
  "aachen-elig":{t:"Eligibility not published", b:"UF in Aachen's eligibility criteria, cohort size and application deadline are not published on the HWCOE research-abroad page. The 10 weeks, 6 UF credits and €2,000 RWTH scholarship are stated; everything else must be asked."},
  "irsc":       {t:"Details not published", b:"For NSF IRSC at Seoul National University, only the six-student cohort figure was published. Duration, funding, eligibility and deadline were not."},
  "newcastle":  {t:"Details not published", b:"Cohort size, stipend and eligibility for the Newcastle summer research internship were not published. The six-week duration and the exchange-extension path were."},
  "exchange-dl":{t:"No deadlines published", b:"Neither the HWCOE nor the CLAS exchange pages publish application deadlines, GPA thresholds, class-standing requirements, or a general language policy. Given that several of the best destinations are Spring-only — which means applying roughly a year ahead. This is the single most important missing number on this page. Ask UFIC directly."},
  "ufic-404":   {t:"UFIC pages returned 404", b:"The UF International Center's own program-search and exchange-listing pages returned 404 errors during research, and the STEM Study Abroad Fair page is dead. The exchange lists here come from the college pages (HWCOE and Beyond120), which may not be exhaustive or perfectly current."},
  "tier-call":  {t:"My assessment, not a ranking", b:"Institutional tiers here are drawn from general standing in each field rather than from a single ranking table. Reasonable people would move two or three entries between tiers. The distinction between research universities and universities of applied sciences is structural and not a matter of opinion; the ordering within Tier 1 is."},
  "csr2026":    {t:"From secondary summaries", b:"The 2026 CSRankings figures here come from secondary write-ups rather than csrankings.org directly, and sources disagree on whether Tsinghua or Shanghai Jiao Tong tops the OVERALL table (Tsinghua's No. 1 in AI is consistent across them). CSRankings also has real critics — Duke's Cynthia Rudin argues it rewards volume and can reward \u201cfast and sloppy\u201d work, and one-year snapshots distort. Check csrankings.org yourself, filtered to your subfield over several years, the same advice this site gives about UF."},
  "csc-dl":     {t:"Deadline varies by track", b:"8 February 2026 is the commonly cited CampusChina deadline, but CSC deadlines vary by track and by embassy, and Type B university deadlines are earlier and differ per institution. A new CSCA assessment requirement was reported for undergraduate applicants from 2026\u201327; its applicability to graduate applicants is unclear. Confirm with your target department."},
  "c9-shorthand":{t:"My shorthand, not a ranking", b:"The American-equivalent column is a device for building intuition in a reader who has no frame for these names. It is not a ranking, it is not endorsed by any institution, and reasonable people would move several entries. Its only job is to get you oriented well enough to read the rest."},
  "china-fields":{t:"Bibliometrics measure output, not mentorship", b:"Field-strength claims rest on aggregate publication metrics, which capture output and venue quality, not teaching, lab culture, or how well you personally would be supported. Those are what determine whether a placement works, and no index measures them. Department quality also varies enormously within a top-ten university, exactly as this site argues about UF: \u201cTsinghua is No. 1 in AI\u201d is not a claim about any specific lab you might join."},
  "noroute-layer":{t:"Not researched to the same depth", b:"These are strong destinations UF has no agreement with, included so the map is not just a picture of UF's paperwork. The Chinese entries come from the study abroad research and carry sources; the Canadian ones are here for orientation and have had a lighter check. Verify anything before acting on it."},
  "outcomes":   {t:"Inferred, not sourced", b:"The research map documents standing and access — it contains no outcome data. Everything in the “where it leads” material is reasoning from that evidence: from who the letter-writers are, which collaborations exist, which techniques are scarce, and which sectors currently hire for them. Named programs and employers are illustrative of the category, not placement records. Nobody has tracked where UF undergraduates from these labs actually end up; if that data exists, it is not public."},
  "hhmi":       {t:"No evidence found", b:"No active HHMI-funded undergraduate program was found at UF — no Gilliam, EXROP or Freshman Research Initiative presence. Treat as likely absent but unconfirmed, rather than confirmed-absent."},
  "extrapolated": {t:"Extrapolated deadline", b:"This date is extrapolated from the last published cycle, not confirmed for the coming year. Confirm directly with the program."}
};

const EVIDENCE = {
  confirmed: {
    label:"Independently confirmed", icon:"✓", cls:"ev-ok",
    note:"A second adversarial verification pass was run against 25 load-bearing claims. These survived it.",
    items:[
      "<b>Pierre Sikivie</b> elected to NAS, 2026","<b>Pamela Soltis</b> NAS 2016",
      "<b>Christine Schmidt</b> NAE 2024 — <i>and</i> National Academy of Medicine the same year. She is a dual-academy member, a stronger signal than the source document stated.",
      "<b>Mark Tehranipoor</b> Engineering dean, effective 20 July 2026","<b>Kevin Butler</b> CISE chair, 9 June 2026",
      "<b>Warren Dixon</b> departed for Virginia Tech","<b>$1.33B</b> FY2025 research expenditures","<b>ABE ranked #6</b> nationally",
      "<b>HiPerGator</b> fastest in US higher education","<b>Whitney Marine Research Center</b> opened 14 April 2026",
      "<b>$100M Wertheim gift</b> — largest individual gift in UF history","<b>NCI designation</b> June 2023",
      "<b>USP</b> $1,750 + $500 mentor","<b>ESP</b> $1,000","<b>15 NSF GRFP</b> winners in 2026",
      "<b>George Christou</b> 2026 Herty Medal","<b>Amy Williams</b> on both Curiosity and Perseverance science teams",
      "<b>John Thompson</b> Fields Medal 1970 / Abel Prize 2008","<b>UF absent</b> from Astronaut Scholarship partner list",
      "<b>Eckhoff Steel Bridge Team</b> — five consecutive national titles through 2025",
      "<b>Concrete Canoe</b> — first overall at the 38th ASCE competition; fifth national title, four in six years",
      "<b>SubjuGator</b> — every RoboSub since 1998; wins in 2005, 2006 and 2007",
      "<b>Solar Gators</b> — 2023 FSGP first place; first-ever American Solar Challenge qualification 2024 and $10,000 Altair prize",
      "<b>SHPE UF</b> — Gold Chapter Award 2025, one of four nationally, second consecutive year",
      "<b>SASE UF</b> — one of two strongest chapters of 86 nationally (2024); ~800 members",
      "<b>UF iGEM</b> — Gold Medal October 2024 for SEPSYNTH",
      "<b>Student Organization Fair</b> — 27 August 2026, 4pm, O'Connell Center",
      "<b>Swamp Launch</b> — recruits each Fall and Spring, no prior experience required",
      "<b>UF exchange model</b> — partner tuition waived, you pay UF tuition, aid and scholarships intact",
      "<b>The full HWCOE exchange list</b> — including KAIST, POSTECH, KU Leuven, DTU, Politecnico di Milano, ISAE-SUPAERO, Technion, NTU, RWTH Aachen, Chalmers, Lund, Tohoku, Twente",
      "<b>The full CLAS/Beyond120 exchange list</b> — including UCL, Melbourne, Sydney, UNSW, Monash, Manchester, Glasgow",
      "<b>Churchill</b> — campus deadline 2 Oct 2026, and UF may endorse only two applicants nationally",
      "<b>Fulbright</b> campus deadline 4 Sept 2026 · <b>Truman</b> 11 Dec 2026 · <b>Boren</b> 9 Jan 2027",
      "<b>UF in Aachen</b> — 10 weeks at RWTH, 6 UF credits, €2,000 RWTH scholarship",
      "<b>NSF IRSC</b> at Seoul National University — six US students per cycle",
      "<b>DAAD RISE</b> — €992/month, three months, 15 Oct – 30 Nov 2026 window, STEM-only eligibility",
      "<b>Amgen Scholars</b> host institutions and ~10 scholars per European site",
      "<b>Maddie Ross</b> — UF's 10th Gates Cambridge Scholar, first since 2017, mentored by Brent Sumerlin",
      "<b>HWCOE study-abroad scholarships</b> $1,000–$2,000, deadlines 15 Oct and 15 Feb"
    ]
  },
  refuted: {
    label:"Refuted and corrected", icon:"✕", cls:"ev-bad",
    note:"One claim did not survive. It has been corrected everywhere on this page.",
    items:[
      "<b>Moroz / Science 2023.</b> An earlier draft attributed a 2023 <i>Science</i> paper on ctenophore syncytial nerve nets to Leonid Moroz. The finding is real and central to the same debate, but Moroz is not confirmed as an author. Attribute the <b>2014 <i>Nature</i></b> ctenophore genome paper to him instead."
    ]
  },
  open: {
    label:"Open — verify before relying on it", icon:"?", cls:"ev-unk",
    note:"Not disproven. Simply not confirmed — which is a different and more common thing.",
    items:[
      "<b>Doug Soltis NAS year (2017)</b> and <b>Robert Holt NAS year (2022)</b> — first-pass sources only; check nasonline.org.",
      "<b>UF's #7 public US News rank</b>, not re-confirmed on the adversarial pass.",
      "<b>MBI's “No. 2 in neuroscience”</b> — MBI's own self-published claim, methodology unstated.",
      "<b>CSRankings position for UF in AI/ML</b> — could not be retrieved programmatically. Check csrankings.org filtered to “AI” yourself.",
      "<b>Marco Salemi</b> may still be <i>interim</i> EPI director — no permanent appointment found.",
      "<b>Beckman Scholars at UF appears lapsed</b> — UF is absent from the 2025 and 2026 cohorts. Confirm with UF Chemistry.",
      "<b>HHMI undergraduate programs at UF</b> — no Gilliam, EXROP or Freshman Research Initiative presence found. Unconfirmed rather than confirmed-absent.",
      "<b>Every 2026–27 and 2027–28 deadline</b> is extrapolated from the last published cycle.",
      "<b>Total USP scholars per year is not published</b> — each of ~16 colleges runs its own selection.",
      "<b>No central CURE course catalog exists</b> — availability varies by department and semester. Ask each term.",
      "<b>REU stipends unpublished</b> for MAE Engineering for Healthcare, all SURF-umbrella sites, Whitney's exact 2026 figure, and the Physics materials REU's 2026 status.",
      "<b>Research Ambassadors</b> eligibility and application process not published — email the directors (dliu1@ufl.edu, rushi.patel@ufl.edu).",
      "<b>Ampatzidis “Agroview” award</b>, <b>Reitze's full honors list</b>, <b>Pardalos's post-2006 honors</b>, <b>Balachandar's fellow status</b> — all unverified from primary sources.",
      "<b>Nanoscale Research Facility</b> leadership and cleanroom specs; <b>Center for Heterocyclic Compounds</b> active status; <b>Florida Quantum Initiative</b> leadership — all thinly documented.",
      "<b>No 2025–26 Sloan or Packard Fellows</b> surfaced in CLAS science departments. An open gap, not a confirmed negative.",
      "<b>Susan Sinnott</b> appears in older search indexes as UF MSE but is at Penn State — excluded from this map.",
      "<b>Gator Motorsports' recent FSAE placements</b>, the only source found was a sponsor's Facebook post. Marketing, not a result.",
      "<b>Swamp Launch USLI and IREC placements</b> — participation confirmed, performance not found in any public source.",
      "<b>Solar Gators' own site returns HTTP 403</b> and its information packet PDF could not be parsed. All figures come from UF news and The Alligator.",
      "<b>AIAA at UF: uflaiaa.org failed to resolve</b> (DNS) on 16 August 2026, though the chapter is still listed by MAE.",
      "<b>UF iGEM intake is entirely undocumented</b> — no published application process, deadline, advisor list, funding model or credit arrangement.",
      "<b>No UF ICPC or competitive-programming team surfaced at all.</b> Absence of evidence, not confirmed absence — but UCF's is highly visible.",
      "<b>“Aerogators”</b> appears on the MAE organisations list with no description found anywhere.",
      "<b>Pre-health organisations are largely unverifiable</b>; the Preprofessional Service Organization claim is third-party.",
      "<b>The college-wide engineering organisation list is incomplete</b> — it omits several of the strongest teams on this page.",
      "<b>Club membership figures are self-reported</b> throughout (SASE's ~800 comes from a UF news article quoting the chapter).",
      "<b>Rhodes and Marshall campus endorsement</b> was published as 14 August 2026 — before this survey. Deadlines move and offices make exceptions; email the Office of Prestigious Awards rather than assuming.",
      "<b>Gates Cambridge and McCall MacBain campus deadlines</b> are listed as “TBD” on UF's own page.",
      "<b>No exchange application deadlines, GPA thresholds, class-standing requirements or language policy are published</b> on either college's exchange page. With several of the best destinations Spring-only, this is the most important missing number in the whole set.",
      "<b>UFIC's own program-search and exchange-listing pages returned 404s</b>, and the STEM Study Abroad Fair page is dead. Exchange lists here come from the college pages, which may not be exhaustive.",
      "<b>UF's record with Churchill, Rhodes and Marshall could not be established.</b> Gates Cambridge is documented at 10. For the others no count surfaced — which may mean the record is thin, or simply unpublished.",
      "<b>Cohort sizes, stipends and eligibility</b> for the Newcastle internship, NSF IRSC and UF in Aachen were not published.",
      "<b>Amgen Scholars 2027 dates</b> were open for Australia only at time of research; all other regions listed as “coming November 1.”",
      "<b>Whether UF students have ever been placed via DAAD RISE or Amgen Scholars</b> is unknown — neither publishes institutional breakdowns.",
      "<b>The Gilman ~30% UF award rate</b> is UF's own published figure, self-reported.",
      "<b>Institutional prestige tiers on the abroad page are my assessment</b>, drawn from standing in each field rather than a single ranking table. The research-university vs. university-of-applied-sciences distinction is structural; the ordering within Tier 1 is a judgment call."
    ]
  }
};

/* ---------------------------------------------------------------------------
   THE APPLICATION YEAR — Sept 2026 → Aug 2027
   --------------------------------------------------------------------------- */
const MONTHS = ["Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"];
const MONTH_FULL = ["September","October","November","December","January","February","March","April","May","June","July","August"];
const MONTH_YEAR = [2026,2026,2026,2026,2027,2027,2027,2027,2027,2027,2027,2027];

const CAL = [
  {tr:"research", m:0, when:"early Sept", est:true, kind:"evt", name:"CUR Fall Expo", u:"https://cur.aa.ufl.edu/events-expo/", money:"", desc:"Faculty and grad students table their research for undergraduates to browse, Reitz Union Grand Ballroom, 5–7pm. Fall 2025 was 8 Sept. The single lowest-effort way to meet ten labs in two hours."},
  {tr:"research", m:0, when:"~late Sept", est:true, kind:"cur", name:"Emerging Scholars Program opens", u:"https://cur.aa.ufl.edu/emerging-scholars-program/", money:"$1,000", desc:"Applications open for freshmen and sophomores with no prior university research. The 2025-26 cycle opened 22 Sept."},
  {tr:"research", m:2, when:"~late Nov", est:true, kind:"dl", name:"Emerging Scholars Program — DEADLINE", u:"https://cur.aa.ufl.edu/emerging-scholars-program/", money:"$1,000", desc:"$500 spring + $500 fall. Restricted to freshmen and sophomores with no prior university research experience. The 2025-26 deadline was 23 Nov. If you are a first-year, this is the first real door that opens to you."},
  {tr:"research", m:3, when:"~5 Dec", est:true, kind:"cur", name:"SUIRP opens", u:"https://cur.aa.ufl.edu/summer-undergraduate-international-research-program/", money:"up to $5,000", desc:"Summer Undergraduate International Research Program. Requires at least one year of prior UF research and a valid passport."},
  {tr:"research", m:4, when:"Jan 12", est:true, kind:"reu", name:"Physics IREU — Gravitational Physics", u:"https://ireu.phys.ufl.edu/", money:"NSF-funded", desc:"International REU placing students at European and Australasian partner institutions. Under-applied-to; most students do not know it exists."},
  {tr:"research", m:4, when:"Jan 15", est:true, kind:"reu", name:"Chemistry REU in France", u:"https://reu.chem.ufl.edu/the-program", money:"$6,000 + travel", desc:"Toulouse, Strasbourg, Sorbonne, Reims/AgroParisTech via a Sorbonne partnership. $6,000 living + $1,000 travel + free housing + up to $1,000 ACS meeting reimbursement."},
  {tr:"research", m:4, when:"Jan–Feb", est:true, kind:"dl", name:"University Scholars Program — DEADLINE", u:"https://cur.aa.ufl.edu/programs-university-scholars-program/", money:"$1,750 + $500", desc:"Applied through YOUR COLLEGE, not through CUR. Opens fall, closes winter, for the following academic year. CLAS's 2025-26 deadline was 3 Feb. The 2026-27 window closed around Feb 2026 — target Jan–Feb 2027."},
  {tr:"research", m:5, when:"Feb 1", est:true, kind:"reu", name:"Astronomy REU", u:"https://www.astro.ufl.edu/reu", money:"$6,000 + housing", desc:"Ten weeks. Galaxy evolution, cosmology, exoplanets, compact objects, the interstellar medium."},
  {tr:"research", m:5, when:"~early Feb", est:true, kind:"reu", name:"Wertheim UF Scripps SURF", u:"https://wertheim.scripps.ufl.edu/education/", money:"Paid, 10 wks", desc:"Chemistry, Immunology & Microbiology, Molecular Medicine, Neuroscience, Structural & Computational Biology. National applicant pool — apply a full year ahead."},
  {tr:"research", m:5, when:"~early-mid Feb", est:true, kind:"reu", name:"Whitney Lab REU", u:"http://reu.whitney.ufl.edu/", money:"Stipend + housing", desc:"Running continuously since 1987. Ten weeks, NSF Site Award, fully covered on-site housing plus travel assistance. Requires US citizenship or permanent residency."},
  {tr:"research", m:5, when:"February", est:true, kind:"cur", name:"AI Scholars Program (AIIRI)", u:"https://ai.research.ufl.edu/for-students/student-research-opportunity-listings/", money:"$1,750", desc:"Two semesters. Requires you to find a faculty mentor FIRST, then submit a one-page proposal. The formal funded on-ramp to HiPerGator."},
  {tr:"research", m:5, when:"Feb 15", est:true, kind:"dl", name:"SUIRP — DEADLINE", u:"https://cur.aa.ufl.edu/summer-undergraduate-international-research-program/", money:"up to $5,000", desc:"The 2025-26 cycle closed 15 Feb. Requires ≥1 year of prior UF research."},
  {tr:"research", m:5, when:"February", est:true, kind:"evt", name:"Florida Undergraduate Research Conference", u:"https://cur.aa.ufl.edu/events-expo/", money:"", desc:"Required for FGLSA (Louis Stokes Alliance) participants, alongside the April UF Symposium."},
  {tr:"research", m:6, when:"Mar 1", est:false, kind:"cur", name:"Journal of Undergraduate Research opens", u:"https://cur.aa.ufl.edu/", money:"Publication", desc:"Submissions 1 March – 1 April, published each fall. Open to any UF undergraduate with a mentor."},
  {tr:"research", m:7, when:"Apr 1", est:false, kind:"dl", name:"USP paper deadline — HARD", u:"https://cur.aa.ufl.edu/programs-university-scholars-program/", money:"", desc:"11:59pm, no exceptions. University Scholars owe an abstract for the Spring Symposium plus one of three publication paths. Also the JUR submission close."},
  {tr:"research", m:7, when:"April", est:true, kind:"evt", name:"UF Spring Undergraduate Research Symposium", u:"https://cur.aa.ufl.edu/events-expo/", money:"", desc:"The formal presentation requirement for USP and ESP scholars, and the easiest low-stakes place to present for everyone else."},
  {tr:"research", m:8, when:"May 23", est:false, kind:"reu", name:"MAE “Engineering for Healthcare” REU begins", money:"Not published", desc:"Programme runs 23 May – 1 Aug 2026. Stipend not published — ask."},
  {tr:"research", m:8, when:"mid-May", est:true, kind:"evt", name:"Honors lateral admission invitations", u:"https://www.honors.ufl.edu/admissions/lateral-and-transfer-student-admissions/lateral-admissions/", money:"", desc:"Invitations go out mid-May to students with a 3.75 cumulative UF GPA over their first year plus 29 credits (Fall admits) / 34 (Summer B). AP/IB/dual-enrollment excluded."},
  {tr:"research", m:9, when:"Jun 1–30", est:false, kind:"dl", name:"Honors lateral admission window", u:"https://www.honors.ufl.edu/admissions/lateral-and-transfer-student-admissions/lateral-admissions/", money:"", desc:"Portal opens 1 June, deadline 30 June, decisions 31 July, mandatory orientation 19 Aug. Petition option at 3.7 GPA / 26–31 credits, due 22 June 5pm to Dr. Forbes (tforbes@honors.ufl.edu). Honors is a convenience layer, not a gate — UF's own page says so."},
  {tr:"clubs", m:4, when:"late Jan", est:true, kind:"evt", name:"SwampHacks", u:"https://2026.swamphacks.com/", money:"", desc:"UF's flagship hackathon — 300+ students, 36 hours, Newell Hall. SwampHacks XI ran 23–25 January; assume a similar late-January window for the next edition. Three ways in: hack, mentor, or volunteer, and mentoring is how you meet the sponsoring engineers rather than competing for their attention."},
  {tr:"clubs", m:11, when:"late Aug", est:true, kind:"evt", name:"Student Organization Fair", u:"https://www.oconnellcenter.ufl.edu/events/uf-fall-2026-student-organization-fair/", money:"", desc:"O'Connell Center. The 2026 fair was 27 August at 4:00pm. Competition teams recruit on the semester boundary, so this is the single highest-leverage two hours of the year for club access."},
  {tr:"abroad", m:0, when:"Sept 4", est:false, kind:"dl", name:"Fulbright U.S. Student Program — CAMPUS DEADLINE", u:"https://studentsuccess.ufl.edu/prestigious-awards/studyabroadawards/", money:"travel + stipend", desc:"Research, a graduate degree, or English teaching in ~140 countries. Campus committee review is mandatory before national submission — so the essays and recommenders are a junior-summer project, not an August one."},
  {tr:"abroad", m:1, when:"Oct 2", est:false, kind:"dl", name:"Churchill Scholarship — CAMPUS DEADLINE", u:"https://www.churchillscholarship.org/the-scholarship", money:"full Cambridge cost", desc:"A fully funded STEM master's at Cambridge, including residency at Churchill College. The only elite award built specifically for science and engineering, and UF may endorse only TWO applicants nationally per year. For rising seniors or newly graduated alumni."},
  {tr:"abroad", m:1, when:"Oct 15", est:false, kind:"dl", name:"HWCOE Study Abroad Scholarships", u:"https://www.eng.ufl.edu/undergraduate/programs-and-partnerships/international-programs/resources-and-funding/", money:"$1,000–$2,000", desc:"For winter, spring, spring break and summer early-bird programmes. Apply via ScholarshipUniverse. A second round closes 15 February for summer, fall and academic year."},
  {tr:"abroad", m:1, when:"Oct 15 – Nov 30", est:false, kind:"reu", name:"DAAD RISE Germany", u:"https://www.daad.de/rise/en/rise-germany/", money:"€992/month", desc:"Three months in a German research group — biology, chemistry, physics, earth sciences, engineering or computer science. Insurance and travel assistance included, plus the RISE meeting in Heidelberg. Must have completed two years of a four-year degree by the placement."},
  {tr:"abroad", m:2, when:"Nov 1", est:true, kind:"reu", name:"Amgen Scholars opens", u:"https://amgenscholars.com/europe-programme/", money:"funded", desc:"Summer 2027 applications open for ETH Zurich, Cambridge, Karolinska, Institut Pasteur, LMU Munich, Kyoto, NUS, Tsinghua and Tokyo. About 10 scholars per European site, ~50 in Europe total."},
  {tr:"abroad", m:3, when:"Dec 11", est:false, kind:"dl", name:"Truman Scholarship — CAMPUS DEADLINE", u:"https://studentsuccess.ufl.edu/prestigious-awards/graduateschoolabroad/", money:"multi-year", desc:"Graduate and professional school funding for third-year undergraduates pursuing public-service careers. The route for science policy rather than science."},
  {tr:"abroad", m:4, when:"Jan 9", est:false, kind:"dl", name:"Boren Awards — CAMPUS DEADLINE", u:"https://studentsuccess.ufl.edu/prestigious-awards/studyabroadawards/", money:"up to $25,000", desc:"25+ weeks of critical-language study tied to US national security priorities. Carries a federal service requirement — which is a feature if you want a national-security or State Department technical role."},
  {tr:"abroad", m:11, when:"Aug 14", est:false, kind:"dl", name:"Rhodes & Marshall — CAMPUS DEADLINE", u:"https://studentsuccess.ufl.edu/prestigious-awards/graduateschoolabroad/", money:"full", desc:"UF campus endorsement for Oxford (Rhodes) and UK-wide graduate study (Marshall). Note the date: this falls BEFORE senior year technically begins, which is why preparation is a junior-summer project."},
  {tr:"research", m:11, when:"Aug", est:true, kind:"evt", name:"Start now if you have not", u:"https://cur.aa.ufl.edu/find-research/", money:"", desc:"ESP's November deadline and the University Research Scholars year-one requirements both assume you are already looking by October. If you are past that point, start this week, the perfect semester does not arrive."}
];

const UNDATED = [
  {name:"IoT4Ag REU", u:"https://iot4ag.us/reu-program/", desc:"Precision agriculture, sensors, robotics, digital twins. SURF umbrella, 3 students. Deadline not published."},
  {name:"Assured Autonomy & Networking REU", u:"https://www.eng.ufl.edu/surf/research-projects/", desc:"Autonomous systems, AI/ML, cybersecurity. SURF umbrella, 8 students. The cleanest formal door into FICS."},
  {name:"AHA Cardiovascular REU", u:"https://www.eng.ufl.edu/surf/research-projects/", desc:"Vascular and cardiovascular bioengineering. SURF umbrella, 5–6 students."},
  {name:"USDA REEU", u:"https://www.eng.ufl.edu/surf/research-projects/", desc:"Circular economy, water–energy–food nexus. SURF umbrella, 8–12 students."},
  {name:"Physics REU — Materials Discovery", u:"https://phys.ufl.edu/", desc:"Condensed matter and materials. $6,000 in 2024 plus travel and housing; 2026 status unconfirmed."},
  {name:"Research in Newcastle (UK)", u:"https://cur.aa.ufl.edu/", desc:"New pilot, Summer B. Data science, statistics, genetics, astrophysics, marine science. Note: ~$3,500 COST, not a stipend. Requires ≥1 semester of prior research."},
  {name:"University Research Scholars (URSP)", u:"https://cur.aa.ufl.edu/", desc:"Invitation only — top 2% of the incoming class. No stipend; a four-year structured on-ramp that stacks with USP."},
  {name:"FGLSA (Louis Stokes Alliance)", u:"https://cur.aa.ufl.edu/", desc:"Small stipend plus mentoring. Junior standing, STEM, US citizen/PR, disadvantaged status, 3.5+ GPA."},
  {name:"REPU", u:"https://cur.aa.ufl.edu/", desc:"No money — graduation honor cords. Points-based: 50 points for four-year admits, 30 for transfers. Tracked via Canvas."}
];

const FELLOWSHIPS = [
  {n:"Goldwater Scholarship", m:"~$7,500/yr", d:"The marquee STEM undergraduate award. UF had three Goldwater Scholars in 2025 — Glenn Bruda (math), Sultan Khanfar (neuroscience), Monique Kubovsky (physics), and at least one in 2026, Matthew Tibi, cited for a first-author <i>C. elegans</i> paper.", u:"https://studentsuccess.ufl.edu/success-stories/2025/ufs-2025-goldwater-scholars"},
  {n:"NSF GRFP", m:"~$160,000 / 3 yrs", d:"Fifteen UF winners in 2026, spanning biomedical, chemical, mechanical, electrical and industrial engineering, life sciences, physics, materials, CS/AI and social sciences.", u:"https://news.ufl.edu/2026/07/2026-grfp/"},
  {n:"McNair Scholars", m:"Federal TRIO", d:"UF runs a chapter for first-generation, low-income undergraduates headed to PhD study.", u:"https://mcnair.aa.ufl.edu/"},
  {n:"Beckman Scholars", m:"$19,300 / scholar", d:"UF ran a program roughly 2013–2015 across Chemistry, Biology, Biochemistry and the Florida Museum — but does not appear in the Foundation's 2025 or 2026 cohorts.", u:"https://www.beckman-foundation.org/programs/beckman-scholars/", flag:"beckman"},
  {n:"Astronaut Scholarship", m:"Not available", d:"UF is not among the Foundation's ~60 partner universities, while UCF, Georgia Tech and Purdue are. There is no institutional nomination pathway for UF students.", u:"https://www.astronautscholarship.org/universities/university-partners/", flag:"astronaut"},
  {n:"HHMI undergraduate programs", m:"None found", d:"No Gilliam, EXROP or Freshman Research Initiative presence surfaced at UF.", u:"", flag:"hhmi"}
];

/* ---------------------------------------------------------------------------
   WHERE EACH POCKET LEADS — graduate leverage and professional destinations.
   INFERRED, not sourced: the research map documents standing and access, not
   outcomes. Everything here is reasoning from the evidence in the dossiers.
   --------------------------------------------------------------------------- */
const OUTCOMES = {
evo:{
 mech:"Rare in this field: the person writing your letter is someone the admissions committee has personally read and cited.",
 grad:"Top evolutionary-biology and systematics PhD programs — Harvard OEB, Berkeley Integrative Biology, Michigan EEB, Chicago, Yale. Three sitting NAS members in one department is the strongest letter-writing bench on this map, and NAS members sit on the review panels and editorial boards those committees defer to.",
 ind:"Biodiversity informatics and applied genomics. Natural-history institutions, federal agencies doing species and biosecurity work, and agricultural genomics — crop wild-relative discovery is a commercial problem, not just an academic one. The specimen-data and phylogenomics skill set also transfers cleanly into computational biology.",
 prog:["Harvard OEB","Berkeley IB","Michigan EEB","U Chicago","Yale E&EB"],
 emp:["Smithsonian","AMNH","Kew","USDA / APHIS","US Fish & Wildlife","Corteva","Bayer Crop Science","Inari"]},
gw:{
 mech:"Hardware experience in a field where almost every PhD applicant has only ever touched the data.",
 grad:"The LIGO Scientific Collaboration is a small, closed world, and instrumentation people are scarce inside it. Caltech, MIT, Penn State IGC, Syracuse, Glasgow, AEI Hannover, ANU. With LIGO's Executive Director on the faculty, your work is visible to the collaboration's leadership by default rather than by effort.",
 ind:"Precision optics and metrology is a direct pipeline, the semiconductor lithography industry runs on interferometry. Quantum-hardware startups need exactly this skill set, because laser and cavity control is the part that is actually hard. Low-noise measurement and real-time DSP also transfer into quantitative finance and aerospace sensing.",
 prog:["Caltech","MIT","Penn State IGC","Syracuse","Glasgow","AEI Hannover"],
 emp:["ASML","KLA","Zeiss SMT","Coherent","PsiQuantum","Atom Computing","Vector Atomic","Infleqtion","LLNL / LANL / Sandia"]},
fics:{
 mech:"Clearance eligibility and tapeout-adjacent security work, both built before you graduate. Neither is acquirable from coursework.",
 grad:"Hardware security is a small enough subfield that Tehranipoor's and Bhunia's names function as a direct introduction. Georgia Tech, CMU CyLab, UC San Diego, Michigan, Illinois. The DARPA and DOD program-manager network overlaps heavily with the faculty who run those admissions.",
 ind:"The strongest immediate-employment position on this map. Silicon vendors, EDA, the defense primes, and the federally funded R&D centers all hire directly for it, and CHIPS Act money means the semiconductor hiring wave is structural rather than cyclical.",
 prog:["Georgia Tech","CMU CyLab","UC San Diego","Michigan","Illinois"],
 emp:["NVIDIA","Intel","AMD","Apple silicon","Qualcomm","Synopsys","Cadence","Lockheed Martin","Raytheon","MIT Lincoln Lab","JHU APL","Sandia"]},
hpg:{
 mech:"Scarcity, plainly. Compute access, not talent — is the bottleneck for undergraduates almost everywhere else, and this is the one place a UF student is structurally ahead of a Stanford one.",
 grad:"Any ML-systems or computational-science PhD where “has actually trained at scale” separates candidates: Stanford, Berkeley, CMU, Washington, UT Austin, Illinois. The credential is not “I know PyTorch.” It is “I have run multi-node distributed training on a Blackwell SuperPOD and debugged it when it stalled.” Very few undergraduate applicants anywhere can say that sentence.",
 ind:"The clearest infrastructure-to-frontier-lab pipeline at UF. Distributed-training and cluster-debugging experience is scarce and is hired for by name — on the infrastructure side by the GPU-cloud and orchestration companies, and on the product side by the fast-moving AI startups and the frontier labs' own infra and evaluation teams. NVIDIA is the obvious one given where the machine came from.",
 prog:["Stanford","Berkeley","CMU","UW","UT Austin","Illinois"],
 emp:["NVIDIA","Anysphere / Cursor","Modal","Together AI","Lambda","CoreWeave","Anyscale","frontier-lab infra teams"]},
scripps:{
 mech:"R35 density means your letters come from investigators the admissions committees are already funded alongside, and a named therapeutic modality on your resume.",
 grad:"Scripps Research, MIT, Harvard Chemical Biology, Stanford, UCSF. Small-molecule RNA targeting is a recognised franchise with Disney's name attached, which is a specific thing to have worked on rather than a generic “drug discovery” line.",
 ind:"Pharma and biotech directly, including the RNA-targeted small-molecule companies that exist because this field opened. Disney founding Ribonaut Therapeutics is the template: this is a research area with a live translation path.",
 prog:["Scripps Research","MIT","Harvard Chem Bio","Stanford","UCSF"],
 emp:["Vertex","Genentech","Novartis NIBR","Arrakis Therapeutics","Skyhawk Therapeutics","Recursion"]},
whitney:{
 mech:"A community that hires from a short list of known REUs, and this is one of the oldest names on it.",
 grad:"Marine and evo-devo programs: the Woods Hole / MBL network, Scripps Institution of Oceanography, Duke Marine Lab, Chicago, Berkeley, Stanford Hopkins. Hinman arriving from Carnegie Mellon matters; so does a 39-year REU track record that the field's faculty grew up inside.",
 ind:"Conservation and wildlife medicine, genomics tooling. The fast-growing environmental-DNA sector — Duffy's wildlife genomic medicine work sits exactly on that trend. The Sea Turtle Hospital is also a genuine veterinary-school credential, not just a good story.",
 prog:["MBL / Woods Hole","Scripps Oceanography","Duke Marine Lab","U Chicago","Stanford Hopkins"],
 emp:["NOAA","state wildlife agencies","Oxford Nanopore","Illumina","eDNA startups","aquaria & marine hospitals"]},
wind:{
 mech:"Your data changes building codes. Very few undergraduate projects have a paper trail that ends in regulation.",
 grad:"Structural and wind-engineering PhD programs are a small, well-connected set: Notre Dame NatHaz, Colorado State, Texas Tech's National Wind Institute, Western Ontario, Stanford Blume. UF is a designated node in the NSF NHERI network, which is how those groups know each other.",
 ind:"Immediately employable and licensure-track. Catastrophe modelling in particular pays well and specifically wants engineers who have handled real hazard field data — which is exactly what the Florida Coastal Monitoring Program produces.",
 prog:["Notre Dame NatHaz","Colorado State","Texas Tech NWI","Western Ontario","Stanford Blume"],
 emp:["Thornton Tomasetti","Arup","WSP","Walter P Moore","Verisk / AIR","Moody's RMS","Swiss Re","Munich Re","FEMA","ASCE 7 committees"]},
ag:{
 mech:"A five-university ERC means your PI already has standing collaborations at four other programs you might apply to. That is an underrated admissions advantage.",
 grad:"A #6-ranked department is a genuine feeder for agricultural and biological engineering PhDs, and the IoT4Ag consortium puts Penn, Purdue, UC Merced and ASU inside your advisor's existing network. Robotics and remote-sensing programs also read this experience well.",
 ind:"Agricultural robotics has a labour-shortage tailwind and far less competition for talent than consumer robotics. Autonomy hiring at the big equipment manufacturers is aggressive. The ag-tech startup layer is real rather than speculative.",
 prog:["Penn","Purdue","UC Merced","ASU","Cornell","UC Davis"],
 emp:["John Deere","Trimble","Climate LLC / Bayer","Corteva","AGCO","Blue River","Carbon Robotics","Verdant Robotics"]},
bme:{
 mech:"A dual National Academy of Engineering and National Academy of Medicine member running an open undergraduate application process. Those two member lists overlap heavily with BME admissions chairs and NIH study sections.",
 grad:"BME PhD at Johns Hopkins, Georgia Tech/Emory, Duke, Michigan, BU, and a strong MD-PhD case given the Fixel Institute clinical bridge.",
 ind:"Medical devices and neurotechnology. Gunduz's deep-brain-stimulation interfaces and Ferris's exoskeleton work both map onto companies that exist right now and are hiring. The regulated-device world values people who have handled human-subjects protocols early.",
 prog:["Johns Hopkins","Georgia Tech / Emory","Duke","Michigan","Boston University"],
 emp:["Medtronic","Boston Scientific","Abbott Neuromodulation","Stryker","Neuralink","Paradromics","Precision Neuroscience","Synchron"]},
clinai:{
 mech:"Working with real, de-identified critical-care data at national-consortium scale. Most applicants have only touched public benchmark datasets.",
 grad:"Biomedical informatics and health-AI PhD: Stanford BMI, Harvard DBMI, Vanderbilt, UW. Bridge2AI participation puts you inside a named national consortium, which admissions committees recognise on sight.",
 ind:"Clinical-AI companies, payer and provider analytics, FDA regulatory science, and the clinical-evaluation teams at frontier labs, a fast-growing niche that needs people who understand both model behaviour and clinical workflow.",
 prog:["Stanford BMI","Harvard DBMI","Vanderbilt DBMI","UW","Columbia DBMI"],
 emp:["Epic","Abridge","Microsoft / Nuance DAX","Viz.ai","Aidoc","Tempus","FDA","frontier-lab health eval teams"]},
chem:{
 mech:"Bartlett essentially built modern coupled-cluster theory. Every quantum-chemistry group in the world runs code descended from that lineage, and Roitberg's AMBER contribution is named directly in industry job listings.",
 grad:"For theory: Berkeley, Caltech, Chicago, Northwestern, MIT. For polymers: Minnesota, UMass Amherst, Northwestern, Delaware. Target the sub-niche in your application; “UF chemistry” as such does not travel.",
 ind:"Computational chemistry and molecular simulation is one of the few areas where a specific software lineage on your resume gets you an interview. Polymers routes into materials and battery companies, where Sumerlin's stimuli-responsive work is directly relevant.",
 prog:["Berkeley","Caltech","U Chicago","Northwestern","MIT","Minnesota","UMass Amherst"],
 emp:["Schrödinger","OpenEye / Cadence","Relay Therapeutics","Isomorphic Labs","Dow","3M","DuPont","battery-materials startups"]},
epi:{
 mech:"Longini and Cummings are among the names on the modelling papers those departments teach from. That is a short, specific list of people.",
 grad:"Biostatistics and epidemiology PhD at Harvard, Johns Hopkins, Michigan, UW, Imperial. This is the best route on the map for a mathematically inclined student who wants their work to have visible consequence.",
 ind:"Public-health agencies and global-health funders, vaccine developers' epidemiology groups, and pandemic-preparedness organisations. Also a clean route into quantitative consulting and public-health data engineering.",
 prog:["Harvard Chan","Johns Hopkins","Michigan","UW","Imperial College"],
 emp:["CDC","WHO","Gates Foundation","Institute for Disease Modeling","PATH","Moderna","Pfizer","GSK"]},
mbi:{
 mech:"Technique travels further than institution in neuroscience. MRI and NMR methods experience is scarce and is what actually gets you into imaging-heavy programs.",
 grad:"Neuroscience PhD is competitive everywhere, so lead with AMRIS: 800 MHz NMR, an 11T animal magnet and two 3T human scanners is real methods exposure. Penn, WashU, MGH/Martinos, Stanford.",
 ind:"Pharma neuroscience, neuroimaging software and hardware, and clinical-trial CROs. The Fixel Institute and Parkinson's Center of Excellence ties also make this strong pre-med signalling.",
 prog:["Penn","WashU","MGH / Martinos","Stanford","UCSF"],
 emp:["Biogen","Denali Therapeutics","Eisai","Siemens Healthineers","GE HealthCare","icometrix","clinical CROs"]},
mse:{
 mech:"Hands-on experience at a licensed nuclear facility. Almost no undergraduate applicant anywhere has it, and it cannot be faked or substituted.",
 grad:"Materials PhD at MIT DMSE, Northwestern, UCSB, Illinois; nuclear at Michigan, Wisconsin, MIT NSE, Berkeley. The UF Training Reactor is the differentiator on the application, not the department rank.",
 ind:"Two sectors with federal money behind them and a demographic gap in the workforce: advanced nuclear, which is hiring hard after fifteen quiet years, and semiconductor materials, which has CHIPS Act capacity coming online.",
 prog:["MIT DMSE / NSE","Northwestern","UCSB","Michigan","Wisconsin","Berkeley"],
 emp:["TerraPower","X-energy","Kairos Power","Oklo","Westinghouse","Constellation","INL / ORNL / Argonne","Intel","Micron","Applied Materials","Lam Research"]},
math:{
 mech:"Pardalos's citation footprint reaches every operations-research department in the world. The Bayesian statistics bench is genuinely known in the departments you would apply to.",
 grad:"Statistics PhD at Duke, UW, Michigan, CMU. For optimization, the Center for Applied Optimization is a real name in the field. For mathematics, target number theory or topological data analysis specifically — general “UF math” does not travel on its own.",
 ind:"Quantitative finance hires heavily from optimization and probability, and operations research is embedded in airlines, logistics and energy markets. Kazachkov's organ-allocation work is also a distinctive route into health-systems OR.",
 prog:["Duke","UW","Michigan","CMU","Georgia Tech ISyE"],
 emp:["Jane Street","Citadel","Two Sigma","D.E. Shaw","Delta","UPS","Amazon","ISO / RTO grid operators"]},
cancer:{
 mech:"233 active clinical trials is an enormous amount of exposure for an undergraduate, and NCI designation means the infrastructure behind them is audited and real.",
 grad:"Cancer biology and clinical-translation PhD programs, and a strong MD-PhD case. Enter with a specific technique — sequencing, imaging analysis, or statistics — rather than general enthusiasm.",
 ind:"Oncology clinical development, precision-oncology diagnostics, and cell and gene therapy, where the Powell Gene Therapy Center is a genuine differentiator for a sector that is short of trained people.",
 prog:["MSKCC / Weill Cornell","Stanford","Dana-Farber / Harvard","Michigan","UNC Lineberger"],
 emp:["Foundation Medicine","Guardant Health","Tempus","oncology CROs","cell & gene therapy startups"]},
astro:{
 mech:"In a small field, one well-connected advisor matters more than institutional rank, and Ballard's Cottrell award explicitly funds undergraduates, which almost no astronomy PI's grant does.",
 grad:"Ballard (Harvard PhD, former NASA Sagan Fellow) and Narayanan are both plugged into the exoplanet and galaxy-formation communities. Williams's rover science-team membership is a direct route into planetary programs and into JPL.",
 ind:"NASA centres and JPL, the space-telescope institutes, and the Earth-observation industry. Simulation and radiative-transfer work is also a well-worn path into machine-learning research roles — astronomy has been feeding data science for two decades.",
 prog:["Arizona LPL","Caltech","Berkeley","Michigan","Colorado Boulder"],
 emp:["NASA / JPL","STScI","Planet","Maxar","Muon Space","ML research roles"]},
mae:{
 mech:"Named software on your resume. GPOPS-II shows up directly in guidance, navigation and control job listings.",
 grad:"Solid but not distinguishing on its own — target the specific group. Rao's trajectory-optimization work routes to Georgia Tech, Michigan and Colorado Boulder aerospace. Verify the current state of any group here first; the department is mid-transition.",
 ind:"Aerospace and defense, plus robotics. Plasma flow control (Roy) and impact mechanics (Subhash) both have direct defense-sector demand.",
 prog:["Georgia Tech AE","Michigan AE","Colorado Boulder","Purdue AAE"],
 emp:["Lockheed Martin","Blue Origin","SpaceX","Anduril","Sierra Space","robotics startups"]},
cs:{
 mech:"The honest negative on this map. Do not fight it — get your letters from a Tier 1 domain PI and your compute from HiPerGator.",
 grad:"For a top-10 machine-learning PhD, UF's core CS bench will not carry your letters the way CMU, Stanford, Berkeley or UIUC would. Human-centred computing is the exception: Gilbert's record and standing are real, and that subfield's admissions committees know him.",
 ind:"Largely unaffected. Software engineering hiring is skills-based and department rank barely registers — build the portfolio and the interview performance. Accessibility and human-centred computing roles are a genuine speciality route out of Gilbert's group.",
 prog:["(for HCC) Georgia Tech","Maryland","Washington","Michigan"],
 emp:["general software engineering","accessibility & civic-tech roles","voting-systems and public-interest technology"]},
geo:{
 mech:"One person, not a department. Williams's Curiosity and Perseverance membership is the asset; route through her or through the Florida Museum.",
 grad:"Planetary science and astrobiology at Arizona LPL, Caltech, Brown, Washington — through Williams. Or paleontology through the Florida Museum's cross-appointments. Not through the department as a whole.",
 ind:"NASA and JPL for planetary work. Otherwise environmental consulting, water resources, and hydrogeology roles at state agencies and water management districts — steady, licensure-track, and locally abundant in Florida.",
 prog:["Arizona LPL","Caltech","Brown","Washington"],
 emp:["NASA / JPL","Jacobs","AECOM","Geosyntec","water management districts"]},
quantum:{
 mech:"Pedrozo-Peñafiel came from MIT's Vuletić group. That lineage is the real asset here, and it lives in the Physics department rather than in the Initiative.",
 grad:"Route through Physics. Entanglement-enhanced atomic clocks and topological theory are recognised paths into MIT, JILA at Colorado, JQI at Maryland, and Wisconsin.",
 ind:"Quantum-hardware companies hire atomic-physics and optics experience directly — but get the training from the physics department, not from the Initiative's public materials.",
 prog:["MIT","JILA / Colorado","JQI / Maryland","Wisconsin"],
 emp:["IonQ","Quantinuum","PsiQuantum","Atom Computing","Infleqtion","IBM Quantum","Google Quantum AI"]}
};

/* ---------------------------------------------------------------------------
   CLUBS & TEAMS, the other track. Researched separately, August 2026.
   --------------------------------------------------------------------------- */
const CLUBS = [
{tier:1, tags:["eng","earth"], n:"ASCE Steel Bridge & Concrete Canoe", home:"Civil & Coastal Engineering · ESSIE · Weil Hall",
 rec:"<b>Five consecutive national titles</b> for the Eckhoff Steel Bridge Team through 2025. Concrete Canoe took <b>first overall at the 38th ASCE competition</b> at Cal Poly San Luis Obispo — UF's fifth national title, four of them in the last six years — narrowly beating Virginia Tech. No UF academic department has an equivalent claim.",
 people:"Faculty adviser <b>Taylor Rawlinson, Ph.D.</b>, who also directs the Weil Hall Structures & Materials Laboratory. The 2025 canoe team ran ~30 members under two co-project managers, one of them a third-year.",
 acc:"Through the UF ASCE student chapter, on the semester boundary. Join in the fall, the build cycle means a spring arrival lands you mid-project.",
 grad:"Structural engineering MS/PhD. The ASCE network is small and faculty advisers judge each other's competitions.",
 dest:["Thornton Tomasetti","Arup","WSP","Walter P Moore","Kiewit","Skanska","PE licensure track"],
 u:"https://www.eng.ufl.edu/news/engineering-education/uf-concrete-canoe-team-claims-its-fifth-championship/"},

{tier:1, tags:["eng","comp"], n:"SubjuGator · Machine Intelligence Lab", home:"ECE + MAE + CISE · the club that is also a research lab",
 rec:"UF has <b>competed in every RoboSub since the competition began in 1998</b>, winning in <b>2005, 2006 and 2007</b>. Twenty-eight consecutive years is its own evidence: institutional knowledge is being transferred, not rebuilt each year. Sister vehicle <b>NaviGator</b> (autonomous surface vessel) competed at the 2022 Maritime RobotX Challenge.",
 people:"Draws undergraduates from three departments at once — one of very few places at UF where ECE, MAE and CISE students work the same problem.",
 acc:"Via the Machine Intelligence Laboratory, which the research map lists as a CISE flagship lab. This is the cleanest way to get a research-lab affiliation through a club door rather than a cold email.",
 grad:"Robotics and autonomy PhD — CMU Robotics Institute, Michigan, Georgia Tech, MIT CSAIL. The RoboSub technical design reports are public and citable.",
 dest:["Anduril","Saronic","Skydio","Boston Dynamics","Waymo","Applied Intuition","naval defense"],
 u:"http://subjugator.org/"},

{tier:1, tags:["eng","physical"], n:"Solar Gators", home:"MAE + ECE · solar vehicle racing",
 rec:"<b>First place at the 2023 Formula Sun Grand Prix</b> — <i>Sunrider</i> completed the most laps in the field, 707.5 miles on sunlight. In 2024 the team qualified for the <b>American Solar Challenge for the first time in its history</b> and finished the 1,550-mile Nashville-to-Casper rally over eight days, winning the <b>$10,000 Altair Challenge grand prize</b>. 2025: fifth overall plus the fastest lap award, a $500 MathWorks award and second in the Altair Challenge.",
 people:"Read the trajectory honestly, a win, then fourth, then fifth is not decline. Finishing the American Solar Challenge is considerably harder than winning a track event. The simulation awards show the analysis is strong independent of race-day luck.",
 acc:"Annual information packet published through MAE; recruitment at the start of the academic year. solargatorspresident@gmail.com",
 grad:"Power electronics, energy systems, vehicle dynamics.",
 dest:["Tesla","Rivian","Lucid","Form Energy","Enphase","Our Next Energy","motorsport engineering"],
 u:"https://ece.ufl.edu/2024/09/13/solar-gators-asc-2024/", flag:"solargators"},

{tier:1, tags:["eng","comp","health"], n:"SHPE UF", home:"Society of Hispanic Professional Engineers · college-wide",
 rec:"<b>Gold Chapter Award at the 2025 SHPE National Convention</b> in Philadelphia — <b>one of only four chapters in the nation</b>, and the second consecutive year UF earned it. The award recognises excellence in leadership, programming and impact.",
 people:"Open organisation, the mission is advancing a community, not gatekeeping membership.",
 acc:"Open membership. Ask in your first semester how convention travel funding is allocated; it runs on a deadline most students miss.",
 grad:"Conference travel and graduate-recruiting sessions at the national convention.",
 dest:["SHPE National Convention","chapter travel funding","early-career recruiting"],
 u:"https://www.shpeuf.com/"},

{tier:1, tags:["eng","comp"], n:"SASE UF", home:"Society of Asian Scientists and Engineers · ~800 members",
 rec:"Named <b>one of two Overall Strongest Chapters out of 86 nationally</b> in 2024, plus <b>UF Student Organization of the Year 2023–24</b> and a Life-Long Learner Excellence in Career Readiness award. Founded at UF in 2010.",
 people:"Runs internship and mentorship programs aimed at first-years, alongside one of the largest intramural sports programs on campus.",
 acc:"Open membership, unusually large and well-organised for first-year onboarding.",
 grad:"Same mechanism as SHPE, the national convention is where the recruiting happens.",
 dest:["SASE National Convention","first-year mentorship","internship program"],
 u:"https://ufsase.com/about"},

{tier:1, tags:["life","health"], n:"UF iGEM", home:"Center for Undergraduate Research · Biology · synthetic biology",
 rec:"<b>Gold Medal, October 2024</b> for <b>SEPSYNTH</b> — bone marrow organoids as a model to study sepsis. iGEM is international: 300+ teams from 40+ countries. The team's public work also carries a serious human-practices component, including a synthetic-biology lesson plan built for 4th–7th graders and delivered through UF GEMS.",
 people:"Faculty advisors are not published. Neither is anything else about intake.",
 acc:"<b>Entirely undocumented.</b> No published application process, deadline, advisor list, funding model or credit arrangement — for a CUR-affiliated gold-medal team. Email CUR directly or ask at 202 Newell Hall, and start early.",
 grad:"Synthetic biology and bioengineering PhD; iGEM is recognised on sight in that community. The natural companion to the Tier 1 evolutionary biology and drug-discovery dossiers.",
 dest:["Ginkgo Bioworks","Amyris","biotech startups","synthetic-biology PhD programs"],
 u:"https://cur.aa.ufl.edu/programs-the-international-genetically-engineered-machine/", flag:"igem-intake"},

{tier:2, tags:["eng","physical"], n:"Swamp Launch Rocket Team", home:"MAE · solid-motor high-power rocketry",
 rec:"Competes in <b>NASA's University Student Launch Initiative</b> and the <b>Intercollegiate Rocket Engineering Competition</b>, running two parallel sets of subteams — one per competition.",
 acc:"<b>The lowest-friction serious door at UF.</b> Recruits at the start of Fall and Spring semesters, <b>no prior experience necessary</b>, and in their own words: “most of our leads had almost no rocketry experience prior to joining.” New members attend general education meetings on rocketry fundamentals before picking a subteam. Coordination runs through Slack.",
 grad:"Aerospace propulsion MS/PhD — Purdue, Georgia Tech, Michigan, Colorado Boulder.",
 dest:["SpaceX","Blue Origin","Relativity","Stoke Space","Firefly"],
 u:"https://www.swamplaunch.org/join.html", flag:"swamplaunch-results"},

{tier:2, tags:["eng","physical"], n:"Florida Rocket Lab", home:"MAE · undergraduate liquid propulsion",
 rec:"Designs, builds and tests <b>liquid propellant rocket engines and flight vehicles</b> — substantially harder and considerably rarer at the undergraduate level than solid-motor rocketry.",
 acc:"ufliquidpropulsion@gmail.com. The more differentiated credential of UF's two rocket teams, if you are willing to work harder for it.",
 grad:"Propulsion specifically — very few undergraduates anywhere have hot-fire experience.",
 dest:["SpaceX","Ursa Major","Aerojet","Stoke Space"],
 u:"https://floridarocketlab.org/"},

{tier:2, tags:["eng"], n:"Gator Motorsports · Formula SAE Electric", home:"MAE-C · ~120 teams at the Michigan competition each spring",
 rec:"Transitioned from combustion to <b>electric in 2022</b>. Formula SAE is the most employer-legible undergraduate engineering competition in the world, and the electric switch means the skills now transfer to a growing sector rather than a shrinking one.",
 acc:"uffsae@gmail.com. Based in MAE-C; the F26 car had a public college unveiling.",
 grad:"Vehicle dynamics and controls MS.",
 dest:["Ford","GM","Rivian","Tesla","F1 feeder teams"],
 u:"https://gatormotorsports.org/", flag:"fsae-results"},

{tier:2, tags:["comp"], n:"SwampHacks", home:"CISE · UF's flagship hackathon · Newell Hall",
 rec:"<b>300+ students, 36 hours</b>, held each January. Three distinct entry points worth knowing: register to hack, register to <b>mentor</b>, or sign up to <b>volunteer</b>.",
 acc:"Mentoring and organising are underrated. They are how you meet the sponsoring engineers rather than competing for their attention. <b>WiNGHacks</b> is the explicitly beginner-friendly alternative if 36 competitive hours sound unappealing.",
 grad:"Minimal on its own.",
 dest:["sponsor recruiting"],
 u:"https://2026.swamphacks.com/"},

{tier:2, tags:["comp"], n:"Open Source Club", home:"CISE · a Special Interest Group of UF ACM · founded Spring 2016",
 rec:"Members collaborate on open source projects each semester, with technical talks alongside. Everything lives on the public <b>ufosc GitHub organisation</b> under open licences.",
 acc:"Open. Contribution is the membership.",
 grad:"Weak for admissions; strong for everything else.",
 why:"<b>The most useful CS club at UF, for a structural reason.</b> It produces a public, permanent, attributable commit history, and given the research map's finding that UF's core CS bench will not carry your letters, a visible open-source record is one of the few things that routes around department reputation entirely. GitHub history is evaluated on its own merits.",
 dest:["general software engineering","open-source portfolio","GitHub-first hiring"],
 u:"https://ufosc.github.io/"},

{tier:2, tags:["eng","health"], n:"Dream Team Engineering", home:"BME · devices deployed inside UF Health Shands",
 rec:"Students building devices alongside physicians, nurses and child-life specialists. Three branches: <b>design</b> (3D modelling for patient education), <b>Dream Team Software Engineering</b>, and a <b>research branch</b> testing efficacy of devices in actual hospital use. Projects include surgical training models for residents, a model MRI to prepare patients for scanning, and a model Berlin Heart.",
 people:"Founded by Rani Mahmoudi under <b>Dr. Stephen Hugo Arce</b>.",
 acc:"One of very few undergraduate organisations anywhere with a genuine clinical deployment path, the devices go into a hospital and get used.",
 grad:"Strong MD, MD-PhD and BME PhD signal.",
 dest:["Medtronic","Stryker","Boston Scientific","hospital clinical engineering"],
 u:"https://www.dreamteameng.org/"},

{tier:2, tags:["eng","health"], n:"GRiP · Generational Relief in Prosthetics", home:"BME · grip-info@bme.ufl.edu",
 rec:"Makes <b>3D-printed assistive devices, adaptive controllers and toys</b> for people who need them, worldwide.",
 acc:"Open, project-based, and unusually easy to contribute to in a first semester.",
 dest:["assistive technology","medical devices"],
 u:"https://bme.ufl.edu/resources/student-activities-and-organizations/"},

{tier:2, tags:["physical","math"], n:"Society of Physics Students", home:"Department of Physics",
 rec:"Professional development, outreach and socials — but the load-bearing part is that SPS explicitly provides <b>resources for writing graduate, REU and job applications</b>.",
 acc:"Open. Given that UF Physics runs both a domestic REU and the International REU in Gravitational Physics, a club that teaches you how to apply to them is worth more than its size suggests.",
 dest:["Physics REU","Gravitational Physics IREU"],
 u:"https://phys.ufl.edu/undergraduate/society-of-physics-students/"},

{tier:2, tags:["eng"], n:"Engineers Without Borders", home:"HWCOE · office beside Weil 0270 · ewb.ufl@gmail.com",
 rec:"Engineering projects and partnerships built with communities abroad — UF's chapter runs a long-standing Peru program.",
 acc:"Open; project cycles run annually and travel is competitive.",
 dest:["development engineering","water & sanitation","NGO technical roles"],
 u:"https://www.ufewbperu.com/"},

{tier:2, tags:["eng","comp"], n:"Society of Women Engineers", home:"HWCOE · president.swe.ufl@gmail.com",
 rec:"One of the largest and best-resourced chapters on campus; also runs the <b>STEAM Team</b>, a design group bridging engineering and the arts.",
 acc:"Open membership. Same convention-recruiting mechanism as SHPE and SASE.",
 dest:["SWE national conference recruiting"],
 u:"https://uf.swe.org/"},

{tier:2, tags:["eng","comp"], n:"NSBE · National Society of Black Engineers", home:"HWCOE · University of Florida Gator Chapter",
 rec:"Part of a national body of 24,000+ members across 600+ chapters, with scholarships, career development and leadership programs attached.",
 acc:"Open membership; the national convention is the recruiting event that matters.",
 dest:["NSBE national convention career fair"],
 u:"https://nsbe.org/chapter/university-of-florida-gator-chapter/"},

{tier:2, tags:["comp"], n:"Gator AI", home:"HWCOE · “democratising AI at UF”",
 rec:"Education and applied-learning club for AI, with an active Discord.",
 acc:"Open. Pair it with the HiPerGator dossier, the club teaches the concepts, the machine is what actually differentiates you.",
 dest:["a starting point, not a destination"],
 u:"https://gaitor-club.web.app/"},

{tier:2, tags:["eng","physical"], n:"American Nuclear Society at UF", home:"MSE / Nuclear Engineering",
 rec:"The student chapter attached to a department with an <b>operating research reactor</b> — one of very few in the United States.",
 acc:"Open. Complete EHS and safety training early; for licensed facilities it is the most persuasive thing on an undergraduate application.",
 dest:["TerraPower","X-energy","Kairos Power","Westinghouse","DOE national labs"],
 u:"https://mse.ufl.edu/about/societies/"},

{tier:2, tags:["eng"], n:"Design/Build/Fly · GatorVex · Gator Robotics", home:"MAE · three separate build teams",
 rec:"AIAA's Design/Build/Fly aircraft competition, VEX robotics, and a combat-robotics (battlebots) team respectively. Smaller and less decorated than the flagship teams, but with correspondingly lower barriers to doing real work early.",
 acc:"Through the MAE organisations page; all three recruit on the semester boundary.",
 dest:["aerospace","robotics","fabrication skills"],
 u:"https://mae.ufl.edu/students/organizations/"},

{tier:2, tags:["math","comp"], n:"SIAM Gators · Statistics Club · AWM", home:"Mathematics & Statistics",
 rec:"The Society for Industrial and Applied Mathematics chapter, the Statistics Club, and the Association for Women in Mathematics, the three most active quantitative student groups.",
 acc:"Open. Useful for finding the number theory, topology and TDA groups the research map recommends targeting specifically.",
 dest:["quantitative finance","operations research","statistics PhD"],
 u:"https://math.ufl.edu/student-organizations-chapters/"},

{tier:2, tags:["eng"], n:"Tau Beta Pi · Pi Tau Sigma · Sigma Gamma Tau", home:"Engineering honor societies — Florida Alpha chapter and department equivalents",
 rec:"Tau Beta Pi is the engineering-wide honor society; Pi Tau Sigma (mechanical) and Sigma Gamma Tau (aerospace) are the departmental equivalents.",
 acc:"Invitation by GPA. <b>A line, not a lever</b> — join, but do not organise your time around them. They confirm a GPA you already have.",
 dest:["resume-screen signal only"],
 u:"https://uftbp.com/"},

{tier:3, tags:["comp","math"], n:"Competitive programming · ICPC", home:"CISE · structurally absent",
 rec:"<b>No visible UF ICPC team or results surfaced at all.</b> Meanwhile UCF's programming team placed <b>1st in North America and 10th worldwide</b>. This is an absence of evidence rather than confirmed absence, a team may exist without a web presence — but the asymmetry is itself informative.",
 acc:"If competitive programming is your thing, UF is not currently a place that will carry you. This is the club-level echo of the research map's Tier 3 verdict on core CS.",
 dest:["build a public record instead"],
 u:"https://www.ucf.edu/news/ucf-programming-team-places-1st-in-north-america-10th-worldwide/", flag:"icpc"},

{tier:3, tags:["eng","physical"], n:"AIAA at UF", home:"MAE · chapter web presence is dead",
 rec:"The chapter's own domain <b>failed to resolve</b> as of 16 August 2026. AIAA is still listed on the MAE organisations page, so the chapter likely exists — dormant, mid-migration, or simply a lapsed domain.",
 acc:"Verify before planning around it. The Space Systems Design Club operates under the same umbrella and is more visible.",
 dest:["ask MAE directly"],
 u:"https://mae.ufl.edu/students/organizations/", flag:"aiaa"},

{tier:3, tags:["physical","comp"], n:"Florida Quantum Computing Society", home:"Listed with an Instagram, a Discord, and nothing else",
 rec:"Consistent with the research map's finding that UF's quantum story is thinner than its billing. Watch, don't bet.",
 acc:"If quantum is your interest, route through the Physics department's 2024 hiring cohort instead.",
 dest:["route through Physics"],
 u:"https://phys.ufl.edu/2024/12/16/new-faculty-join-department-of-physics-in-2024/"},

{tier:3, tags:["health","life"], n:"Pre-health organisations, generally", home:"Large, popular, and almost entirely unverifiable from outside",
 rec:"The claim that the Preprofessional Service Organization is UF's oldest pre-health society and second-oldest student-run organisation comes from a third-party summary, not a UF source. AMSA and similar chapters are real but publish little.",
 acc:"Treat pre-med club membership as a social good, not a credential. The Dream Team Engineering entry above is the version of this with an actual clinical output.",
 dest:["community","shadowing leads"],
 u:"https://www.uflamsa.com/", flag:"prehealth"}
];

/* Documented training lineage — each of these is a fact the dossiers already carry. */
const PEDIGREE = [
  {p:"Edwin Pedrozo-Peñafiel", from:"MIT — Vuletić group", d:"gw", w:"Entanglement-enhanced optical atomic clocks, published in Nature. The clearest live MIT lineage on campus."},
  {p:"Veronica Hinman", from:"Carnegie Mellon", d:"whitney", w:"Recruited to direct the Whitney Lab in 2024, bringing an established evo-devo network with her."},
  {p:"Sarah Ballard", from:"Harvard PhD · NASA Sagan Fellow", d:"astro", w:"Her $100,000 Cottrell award explicitly funds an undergraduate research program, a named, funded commitment almost no astronomy PI has."},
  {p:"David Reitze", from:"Executive Director, LIGO Laboratory", d:"gw", w:"Runs the collaboration your work would be visible inside. Caltech-based; UF faculty."},
  {p:"Changying “Charlie” Li", from:"University of Georgia", d:"ag", w:"Founded the UGA Phenomics and Plant Robotics Center before moving to UF. A recent hire still building a group, the best time to join one."},
  {p:"Christine Schmidt", from:"NAE + NAM, both 2024", d:"bme", w:"Dual-academy membership, and an open undergraduate application process. That combination is close to unique."},
  {p:"Rodney J. Bartlett", from:"Coupled-cluster theory", d:"chem", w:"Built much of the method every quantum-chemistry group in the world now runs."},
  {p:"Adrian E. Roitberg", from:"AMBER force field", d:"chem", w:"AMBER experience is named directly in computational-chemistry job listings."},
  {p:"Amy J. Williams", from:"NASA Curiosity + Perseverance", d:"astro", w:"An active rover science-team member. A rare, legible credential for planetary-science admissions and for JPL."},
  {p:"Matthew Disney", from:"Founder, Ribonaut Therapeutics", d:"scripps", w:"A live academic-to-biotech translation path you can point at."},
  {p:"Mark Tehranipoor", from:"Founder of FICS · now Engineering dean", d:"fics", w:"Institutional confirmation of where the college's national reputation lives."},
  {p:"Panos M. Pardalos", from:"h-index 123 · ~67,000 citations", d:"math", w:"A citation footprint that reaches every operations-research department there is."}
];

/* --------------------------------------------------------------------------- */
const STATS = [
  {v:"$1.33B", k:"FY2025 research expenditures, up 4.5% year on year"},
  {v:"No. 7", k:"among US public universities — 8th consecutive year in the top 10", flag:"usnews"},
  {v:"15th", k:"among publics in NSF HERD research spending (25th overall)"},
  {v:"40M+", k:"specimens in the Florida Museum of Natural History"},
  {v:"No. 1", k:"university-owned supercomputer in the US on TOP500, IO500 and HPCG"},
  {v:"461", k:"invention disclosures in FY2025 — 5th nationally"}
];

const LADDER = [
  {when:"First six weeks of freshman year", h:"Get research credit in any lab", p:"EGN4912 in engineering, IDH 4912 as the Honors fallback, or your department's own code. The first lab does not need to be the right lab — it needs to prove you can sustain 8–20 hrs/week without disappearing. Elite labs care far less about credentials than about evidence you will not need re-recruiting in six weeks.", u:"https://www.eng.ufl.edu/undergraduate/programs-and-partnerships/center-for-experiential-learning/join-a-research-lab/"},
  {when:"Freshman or sophomore year", h:"Emerging Scholars Program or a CURE course", p:"ESP pays $1,000 and is restricted to students with no prior university research — so it expires. There is no central CURE catalog; ask your department each term what course-based research they are running.", u:"https://cur.aa.ufl.edu/emerging-scholars-program/"},
  {when:"After a semester or two of output", h:"University Scholars Program", p:"$1,750 to you, $500 to your mentor. Applied through your college, not CUR. Your mentor commits to 8–10 hrs/week of guidance and registers you for research credit each semester; you owe a Spring Symposium abstract and a paper by 1 April, 11:59pm, no exceptions.", u:"https://cur.aa.ufl.edu/programs-university-scholars-program/"},
  {when:"The following summer", h:"An NSF REU — ideally off campus", p:"UF's own advisors actively encourage leaving for a summer to diversify your letters and see a second research environment before PhD applications. This is not treated as disloyalty to your home lab. Apply to two your first eligible winter: one at UF, one elsewhere.", u:"https://careerhub.ufl.edu/resources/nsf-reu-site-finder/"},
  {when:"Junior year", h:"Goldwater Scholarship", p:"~$7,500/yr, the marquee STEM undergraduate award. UF had three Goldwater Scholars in 2025 and at least one in 2026. Built on two years of continuous output and at least one co-authored or JUR publication, not on a single strong semester.", u:"https://studentsuccess.ufl.edu/success-stories/2025/ufs-2025-goldwater-scholars"},
  {when:"Senior year", h:"NSF GRFP", p:"~$160,000 over three years. UF had 15 winners in 2026 across biomedical, chemical, mechanical, electrical and industrial engineering, life sciences, physics, materials, CS/AI and social sciences.", u:"https://news.ufl.edu/2026/07/2026-grfp/"}
];

const EMAIL = {
  to:"[their address, from the department directory]",
  subj:"Second-year CE student — question about the Florida Coastal Monitoring Program",
  lines:[
    {t:"Dr. [Surname],", slot:true, a:null},
    {t:"", a:null},
    {t:"I'm a second-year civil engineering student, currently in CES3102 and CGN3421.", a:1},
    {t:" I read your paper on ", a:null},
    {t:"[the specific paper]", slot:true, a:2},
    {t:" and I was struck by ", a:null},
    {t:"[the specific finding, in your own words]", slot:true, a:2},
    {t:" — particularly the part about how the field data feeds back into code revisions rather than staying in the literature.", a:2},
    {t:"", a:null},
    {t:"I have ", a:null},
    {t:"[Python / MATLAB / instrumentation / fabrication]", slot:true, a:3},
    {t:" experience from ", a:null},
    {t:"[coursework or a project]", slot:true, a:3},
    {t:", and I completed EHS lab safety training in ", a:null},
    {t:"[month]", slot:true, a:4},
    {t:".", a:null},
    {t:"", a:null},
    {t:"Would you have 15 minutes in the next few weeks to talk about what your group is working on this year?", a:5},
    {t:" I'm not asking for a position — I'd like to understand the work well enough to know whether I'd be useful to you.", a:5},
    {t:"", a:null},
    {t:"I'm emailing now with next semester in mind, since I understand groups tend to take students at semester boundaries.", a:6},
    {t:"", a:null},
    {t:"Thank you for your time,", a:null},
    {t:"[Name] · [UFID] · [phone]", slot:true, a:null}
  ],
  notes:[
    {n:1, t:"Name your actual courses. It tells the PI, in four words, what you can already do and what vocabulary they can use with you."},
    {n:2, t:"<b>The single highest-impact line.</b> Generic “I'm interested in your research” emails are named as the top failure mode across the Biology, BME and Engineering advising guides. Reference a specific paper or result, in your own words."},
    {n:3, t:"Programming skills — Python, MATLAB, C++ — appear across dozens of UF lab listings. State them concretely; do not claim fluency you cannot demonstrate."},
    {n:4, t:"BME's guidebook calls completed EHS safety training <i>before</i> you apply “very impressive.” It removes a real cost from the PI's side and almost nobody does it."},
    {n:5, t:"Ask for a conversation, not a position. A position is a yes-or-no question and the default answer is no. A conversation is a much smaller ask, and it is where the converting happens."},
    {n:6, t:"Faculty batch-hire at semester boundaries. Email at the end of one semester for the next, or in early summer for fall. Miss the window and you wait a full term."},
    {n:7, t:"<b>Email only.</b> UF Biology's guidance is explicit: “e-mail the professors (don't phone them or drop by their labs).” Also: send 7–10 of these, not one."}
  ]
};

const STRATS = [
  {L:"A", h:"Maximum verifiable prestige, minimum friction",
   p:"Target the Florida Museum and Biology evolutionary cluster. Three sitting NAS members, the world's largest Lepidoptera collection, 40M specimens — on the Gainesville campus, with volunteer and collections pathways open year-round. No other Tier 1 domain combines this level of verified excellence with this little access friction. Pair with the iGEM team or a genomics CURE course, then apply to USP with a Soltis or Kawahara Lab mentor.",
   picks:["evo"]},
  {L:"B", h:"The differentiated technical bet",
   p:"Pair a Tier 1 domain with HiPerGator-scale computation: computational galaxy formation (Narayanan), gravitational-wave data analysis (Klimenko), computational chemistry (Roitberg, Bartlett, Miranda Quintana), infectious-disease modelling (Cummings, Longini), or AI-driven materials discovery (Hennig). Each runs at a compute scale almost no undergraduate anywhere can access. This route neutralises UF's genuine weakness, a mid-pack core CS bench — by using its genuine strength as a <i>tool</i> rather than a <i>subject</i>. Get onto a PI's allocation early; apply to AI Scholars in February.",
   picks:["hpg","astro","gw","chem","epi","mse"]},
  {L:"C", h:"Physical, consequential, hands-on",
   p:"Wind and hurricane engineering, the UF Training Reactor, the Whitney Sea Turtle Hospital and REU, or hardware security. These share three properties: an undergraduate can do genuinely load-bearing work early, the facilities are rare or unique, and the output has a visible real-world consequence, a changed building code, a treated turtle, a detected counterfeit chip. Best fit if you learn by doing rather than by reading.",
   picks:["wind","mse","whitney","fics"]}
];

const SOURCES = [
  ["news.ufl.edu","https://news.ufl.edu/"],["research.ufl.edu","https://research.ufl.edu/"],
  ["cur.aa.ufl.edu","https://cur.aa.ufl.edu/"],["honors.ufl.edu","https://www.honors.ufl.edu/"],
  ["floridamuseum.ufl.edu","https://www.floridamuseum.ufl.edu/"],["whitney.ufl.edu","https://www.whitney.ufl.edu/"],
  ["wertheim.scripps.ufl.edu","https://wertheim.scripps.ufl.edu/"],["epi.ufl.edu","https://epi.ufl.edu/"],
  ["mbi.ufl.edu","https://mbi.ufl.edu/"],["cancer.ufl.edu","https://cancer.ufl.edu/"],
  ["phys.ufl.edu","https://phys.ufl.edu/"],["cise.ufl.edu","https://cise.ufl.edu/"],
  ["fics.institute.ufl.edu","https://fics.institute.ufl.edu/"],["essie.ufl.edu","https://essie.ufl.edu/"],
  ["National Academy of Sciences","https://www.nasonline.org/"],["AAU","https://www.aau.edu/who-we-are/our-members/university-of-florida"],
  ["HPCwire","https://www.hpcwire.com/off-the-wire/university-of-florida-hipergator-tops-us-university-systems-across-major-hpc-benchmarks/"],
  ["Research.com","https://research.com/university/computer-science/university-of-florida"],
  ["Beckman Foundation","https://www.beckman-foundation.org/programs/beckman-scholars/"],
  ["Astronaut Scholarship Foundation","https://www.astronautscholarship.org/universities/university-partners/"]
];
/* ===========================================================================
   STUDY ABROAD — researched August 2026. Prestige-filtered for STEM.
   =========================================================================== */

/* Elite awards, graduate level. `quota` = how many UF may endorse nationally. */
const FELLOWS_ABROAD = [
 {t:1, n:"Churchill Scholarship", dest:"University of Cambridge", dl:"2 Oct 2026", dlKey:"oct",
  what:"<b>A STEM master's at Cambridge, fully funded</b> — tuition and residency at Churchill College. The only elite award built specifically for science and engineering.",
  elig:"Rising seniors or newly graduated alumni.",
  quota:"UF may endorse only <b>two</b> applicants nationally per year, an extraordinary ratio at a university of 55,000.",
  u:"https://www.churchillscholarship.org/the-scholarship"},
 {t:1, n:"Gates Cambridge", dest:"University of Cambridge", dl:"TBD for 2026", dlKey:"tbd", flag:"gates-dl",
  what:"Full cost of study, a living allowance, a discretionary allowance for study-related activities, and airfare. Preference for doctoral candidates.",
  elig:"Awarded on intellectual ability, leadership capacity, and desire to use knowledge to contribute to society.",
  quota:"<b>UF has produced 10 Gates Cambridge Scholars</b> — but the most recent was the first since 2017.",
  u:"https://studentsuccess.ufl.edu/success-stories/2024/ufs-10th-gates-cambridge-scholar/"},
 {t:1, n:"Rhodes Scholarship", dest:"University of Oxford", dl:"14 Aug 2026", dlKey:"passed", flag:"rhodes-passed",
  what:"Postgraduate study at Oxford in nearly every field. The oldest international scholarship programme.",
  elig:"US and Canadian citizens must receive UF endorsement to enter the national competition.",
  quota:"Applicants are expected to also apply for Marshall and to consider Churchill, Gates Cambridge and Fulbright.",
  u:"https://studentsuccess.ufl.edu/prestigious-awards/graduateschoolabroad/"},
 {t:1, n:"Marshall Scholarship", dest:"Any UK institution", dl:"14 Aug 2026", dlKey:"passed", flag:"rhodes-passed",
  what:"Graduate study at almost any UK institution in generally all fields — most commonly two separate one-year master's degrees.",
  elig:"UF campus endorsement required.",
  quota:"Same campus deadline as Rhodes.",
  u:"https://studentsuccess.ufl.edu/prestigious-awards/graduateschoolabroad/"},
 {t:1, n:"Fulbright U.S. Student Program", dest:"~140 countries", dl:"4 Sept 2026", dlKey:"sept",
  what:"Three grant categories: independent <b>research</b>, a graduate degree, or English teaching. All grants cover travel and a living stipend.",
  elig:"Qualifications vary grant by grant, including any host-language requirement.",
  quota:"Campus committee review is mandatory before national submission. The broadest and most achievable of the elite awards.",
  u:"https://studentsuccess.ufl.edu/prestigious-awards/studyabroadawards/"},
 {t:2, n:"Boren Awards", dest:"Critical-language regions", dl:"9 Jan 2027", dlKey:"jan",
  what:"Up to <b>$25,000</b> for 25+ weeks of critical-language study, tied to US national security priorities.",
  elig:"Continuing students at all levels — undergraduates as Scholars, graduate students as Fellows.",
  quota:"Carries a federal service requirement, which is a feature: a direct route into national-security and State Department technical roles.",
  u:"https://studentsuccess.ufl.edu/prestigious-awards/studyabroadawards/"},
 {t:2, n:"Gilman International Scholarship", dest:"Anywhere you study abroad", dl:"Varies by term", dlKey:"var",
  what:"Up to <b>$5,000</b>, plus a <b>$1,000 STEM supplemental award</b> and up to $3,000 for critical languages. Designed to remove the financial barrier.",
  elig:"Must be receiving a Federal Pell Grant at the time of application.",
  quota:"<b>About 30% of UF applicants are awarded</b>, a far better rate than most national scholarships. sas@ufic.ufl.edu",
  u:"https://internationalcenter.ufl.edu/sas/finances/scholarships/gilman-scholarship/", flag:"gilman-rate"},
 {t:2, n:"Schwarzman Scholars", dest:"Tsinghua University, China", dl:"Sept 2026", dlKey:"sept",
  what:"A one-year Master's in Global Affairs, with lectures, travel throughout China, and a built network.",
  elig:"Separate May deadline for China/Taiwan/Hong Kong/Macao passport holders.",
  quota:"Science-policy adjacent rather than technical.",
  u:"https://studentsuccess.ufl.edu/prestigious-awards/graduateschoolabroad/"},
 {t:2, n:"McCall MacBain Scholarship", dest:"McGill University, Canada", dl:"TBD", dlKey:"tbd", flag:"gates-dl",
  what:"A fully funded master's or professional degree at McGill, with mentors and an interdisciplinary leadership programme.",
  elig:"Complete a full application before the campus deadline and notify the Office of Prestigious Awards.",
  quota:"UF endorsement required.",
  u:"https://studentsuccess.ufl.edu/prestigious-awards/graduateschoolabroad/"},
 {t:2, n:"Truman Scholarship", dest:"US graduate study", dl:"11 Dec 2026", dlKey:"dec",
  what:"Several years of graduate or professional school funding, plus access to a network of leading public servants.",
  elig:"Third-year undergraduates pursuing public-service careers.",
  quota:"The route for science policy rather than science.",
  u:"https://studentsuccess.ufl.edu/prestigious-awards/graduateschoolabroad/"}
];

/* Undergraduate research placements abroad. */
const RESEARCH_ABROAD = [
 {t:1, n:"DAAD RISE Germany", host:"German universities and top research institutes", dl:"15 Oct – 30 Nov 2026",
  what:"<b>The best-designed STEM research-abroad programme for undergraduates anywhere.</b> Three months (ten-week minimum) matched into an actual German research group — biology, chemistry, physics, earth sciences, engineering or computer science.",
  money:"€992/month, insurance, travel assistance, plus the RISE meeting in Heidelberg",
  elig:"Must have completed at least two years of a four-year degree by the placement, and remain an undergraduate afterwards.",
  why:"A letter of reference from a foreign PI is the scarce object here, and RISE is the standard on-ramp to German PhD programmes, which are typically <b>fully funded and salaried</b>. That is a materially different financial proposition from a US PhD.",
  u:"https://www.daad.de/rise/en/rise-germany/"},
 {t:1, n:"Amgen Scholars — Europe & Asia", host:"ETH Zurich · Cambridge · Karolinska · Institut Pasteur · LMU Munich · Kyoto · NUS · Tsinghua · Tokyo", dl:"Opens 1 Nov 2026",
  what:"Hands-on summer research alongside faculty at some of the world's premier research universities, with seminars, networking and a symposium. Direction and technical assistance come from Harvard.",
  money:"Funded; varies by site",
  elig:"Approximately <b>10 scholars per European site, ~50 in Europe total</b>.",
  why:"The most prestigious host list on this page. Also a direct pipeline into each host institution's own graduate programmes.",
  u:"https://amgenscholars.com/europe-programme/", flag:"amgen-dates"},
 {t:1, n:"UF in Aachen — Summer Undergraduate Research", host:"RWTH Aachen University, Germany", dl:"Not published",
  what:"Ten weeks of research at <b>Germany's leading technical university</b>, earning <b>6 UF credits</b>.",
  money:"€2,000 scholarship from RWTH for selected students",
  elig:"Not published — ask HWCOE International Programs.",
  why:"The easiest way into an elite European host, because it runs through UF rather than through an open international competition.",
  u:"https://www.eng.ufl.edu/undergraduate/programs-and-partnerships/international-programs/go-global/research-abroad/", flag:"aachen-elig"},
 {t:1, n:"Physics IREU — Gravitational Physics", host:"European and Australasian partner institutions", dl:"12 Jan 2027",
  what:"NSF-funded placements inside the international gravitational-wave community, the same collaboration UF helped build.",
  money:"NSF-funded",
  elig:"See the research map's gravitational-wave dossier.",
  why:"Places you inside the LIGO collaboration's international network, which is small and closely connected.",
  u:"https://ireu.phys.ufl.edu/"},
 {t:1, n:"Chemistry REU in France", host:"Sorbonne partnership — Toulouse, Strasbourg, Paris, Reims/AgroParisTech", dl:"15 Jan 2027",
  what:"Ten weeks of chemistry and biochemistry research in France through a Sorbonne partnership.",
  money:"$6,000 living + $1,000 travel + free housing + up to $1,000 ACS meeting reimbursement",
  elig:"See the research map's chemistry dossier.",
  why:"Unusual, generously funded, and under-applied-to — most UF students do not know it exists.",
  u:"https://reu.chem.ufl.edu/the-program"},
 {t:1, n:"NSF IRSC — Interdisciplinary Research in Smart City", host:"Seoul National University, South Korea", dl:"Not published",
  what:"Research in smart-city engineering technologies at Korea's leading national university.",
  money:"Not published",
  elig:"<b>Six US students</b> per cycle, an extremely small cohort.",
  why:"Cohort size alone makes this a distinguishing credential if you get it.",
  u:"https://www.eng.ufl.edu/undergraduate/programs-and-partnerships/international-programs/go-global/research-abroad/", flag:"irsc"},
 {t:2, n:"Newcastle University Summer Research Internship", host:"Newcastle University, UK", dl:"Not published",
  what:"Six weeks of supervised research in your own discipline with a faculty mentor, extendable through the exchange partnership.",
  money:"Not published",
  elig:"Not published.",
  why:"The extension path into a full exchange semester is the interesting part — it turns a summer into a year.",
  u:"https://www.eng.ufl.edu/undergraduate/programs-and-partnerships/international-programs/go-global/research-abroad/", flag:"newcastle"},
 {t:2, n:"SUIRP — Summer Undergraduate International Research", host:"Anywhere you can secure a placement", dl:"~15 Feb 2027",
  what:"Eight to ten weeks of international research, with the placement <b>secured by you</b>.",
  money:"Up to $5,000",
  elig:"Requires <b>at least one year of prior UF research</b> and a self-secured host.",
  why:"The self-secured requirement is the point: it rewards students who already have a PI willing to make an introduction. The research map's playbook is the prerequisite, not a parallel track.",
  u:"https://cur.aa.ufl.edu/summer-undergraduate-international-research-program/"}
];

/* Exchange partners. college: E = engineering, C = CLAS, EC = both. */
const EXCHANGE = [
 {t:1, n:"KAIST", c:"South Korea", col:"E", term:"Year · Fall · Spring", d:"Most majors", w:"Korea's MIT — elite across engineering and the physical sciences"},
 {t:1, n:"POSTECH", c:"South Korea", col:"E", term:"Year · Fall · Spring", d:"Most majors", w:"Korea's other elite science and technology institute; unusually research-intense"},
 {t:1, n:"KU Leuven", c:"Belgium", col:"E", term:"Year · Spring", d:"Electrical, Computer Engineering", w:"Leuven is home to <b>imec</b>, the world's central semiconductor research institute"},
 {t:1, n:"Technical University of Denmark (DTU)", c:"Denmark", col:"E", term:"Year · Fall · Spring", d:"Civil, Computer, Electrical, Mechanical", w:"Among Europe's strongest technical universities"},
 {t:1, n:"Politecnico di Milano", c:"Italy", col:"E", term:"Year · Spring", d:"Civil (UG), most graduate majors", w:"Consistently a global top-20 engineering school"},
 {t:1, n:"ISAE-SUPAERO", c:"France", col:"E", term:"Spring · Summer", d:"Aerospace Engineering", w:"The world's leading aerospace grande école — rare access"},
 {t:1, n:"Technion", c:"Israel", col:"E", term:"Spring", d:"Civil, Mechanical", w:"Israel's MIT"},
 {t:1, n:"Nanyang Technological University", c:"Singapore", col:"EC", term:"Year · Fall · Spring · Summer", d:"Most majors", w:"Global top-30; elite in engineering and materials"},
 {t:1, n:"RWTH Aachen University", c:"Germany", col:"E", term:"Summer", d:"Most majors", w:"Germany's leading technical university; also hosts the UF research programme"},
 {t:1, n:"Chalmers University of Technology", c:"Sweden", col:"E", term:"Year · Spring", d:"—", w:"One of Scandinavia's strongest technical universities"},
 {t:1, n:"Lund University", c:"Sweden", col:"E", term:"Year · Spring", d:"—", w:"Strong across engineering and the sciences"},
 {t:1, n:"Tohoku University", c:"Japan", col:"E", term:"Academic Year", d:"Aerospace, Mechanical", w:"A top Japanese national university"},
 {t:1, n:"University of Twente", c:"Netherlands", col:"E", term:"Year · Spring", d:"Most graduate majors", w:"Strong for graduate-level engineering"},
 {t:1, n:"University College London", c:"United Kingdom", col:"C", term:"Semester · Year", d:"Open to CLAS majors", w:"Global top-10, the most prestigious destination on UF's CLAS list"},
 {t:1, n:"University of Melbourne", c:"Australia", col:"EC", term:"Year · Fall · Spring", d:"Most majors", w:"Consistently one of Australia's top two"},
 {t:2, n:"University of New South Wales", c:"Australia", col:"EC", term:"Year · Fall · Spring", d:"Most majors", w:"Strong engineering; Sydney"},
 {t:2, n:"University of Sydney", c:"Australia", col:"C", term:"Semester · Year", d:"CLAS majors", w:"Australia's oldest university"},
 {t:2, n:"Monash University", c:"Australia", col:"C", term:"Semester · Year", d:"CLAS majors", w:"Australia's largest university"},
 {t:2, n:"University of Manchester", c:"United Kingdom", col:"C", term:"Semester · Year", d:"CLAS majors", w:"Russell Group"},
 {t:2, n:"University of Leeds", c:"United Kingdom", col:"E", term:"Year · Spring", d:"Most majors", w:"Russell Group"},
 {t:2, n:"University of Sheffield", c:"United Kingdom", col:"E", term:"Year · Spring", d:"Most majors", w:"Russell Group; strong engineering"},
 {t:2, n:"University of Glasgow", c:"United Kingdom", col:"C", term:"Semester · Year", d:"CLAS majors", w:"Founded 1451"},
 {t:2, n:"University of Bristol", c:"United Kingdom", col:"C", term:"From Spring 2027", d:"CLAS majors", w:"Ranked 8th in the UK"},
 {t:2, n:"Newcastle University", c:"United Kingdom", col:"EC", term:"Year · Fall · Spring", d:"Most majors", w:"Also hosts the 6-week research internship"},
 {t:2, n:"Royal Holloway, University of London", c:"United Kingdom", col:"C", term:"Semester · Year", d:"CLAS majors", w:"Top-30 UK"},
 {t:2, n:"University of Aberdeen", c:"United Kingdom", col:"C", term:"Semester · Year", d:"CLAS majors", w:"Fifth oldest in the English-speaking world"},
 {t:2, n:"Cardiff University", c:"United Kingdom", col:"C", term:"Semester · Year", d:"CLAS majors", w:"Founded 1883"},
 {t:2, n:"Universidad Carlos III de Madrid", c:"Spain", col:"EC", term:"Year · Fall · Spring", d:"Aerospace, Biomedical, CS, Electrical, Mechanical", w:"Among Spain's most prestigious"},
 {t:2, n:"Universidad Politécnica de Madrid", c:"Spain", col:"E", term:"Year · Spring", d:"Most graduate majors", w:"Spain's leading technical university"},
 {t:2, n:"Universidad Pontificia Comillas", c:"Spain", col:"E", term:"Year · Fall · Spring", d:"CS, Industrial & Systems, Mechanical", w:"Strong industrial engineering"},
 {t:2, n:"Universidad del País Vasco — Bilbao", c:"Spain", col:"E", term:"Year · Spring", d:"Mechanical, most graduate majors", w:"Bilbao School of Engineering"},
 {t:2, n:"Hanyang University", c:"South Korea", col:"E", term:"Year · Fall · Spring", d:"Most majors", w:"Strong engineering, Seoul"},
 {t:2, n:"Yonsei University", c:"South Korea", col:"EC", term:"Year · Fall · Spring", d:"Most majors", w:"One of Korea's SKY universities"},
 {t:2, n:"Sungkyunkwan University (SKKU)", c:"South Korea", col:"C", term:"Semester · Year", d:"CLAS majors", w:"Founded 1398; East Asia's oldest university"},
 {t:2, n:"Waseda University", c:"Japan", col:"C", term:"Semester · Year", d:"CLAS majors", w:"Founded 1882; Tokyo"},
 {t:2, n:"University of Bern", c:"Switzerland", col:"C", term:"Semester · Year", d:"Open to all UF majors, courses in English", w:"World-class course access in English"},
 {t:2, n:"INSA Lyon", c:"France", col:"E", term:"Summer", d:"CS, Electrical", w:"A leading French engineering school"},
 {t:2, n:"ENSEA", c:"France", col:"E", term:"Spring", d:"Electrical Engineering", w:"Specialist electrical and computer engineering"},
 {t:2, n:"Université de Technologie de Troyes", c:"France", col:"E", term:"Spring", d:"Electrical (limited English)", w:"Language barrier is real here"},
 {t:2, n:"LUT University", c:"Finland", col:"E", term:"Year · Fall · Spring", d:"CS, Electrical, Mechanical", w:"Strong energy systems focus"},
 {t:2, n:"Sapienza University of Rome", c:"Italy", col:"E", term:"Year · Spring", d:"CS, most graduate majors", w:"One of Europe's largest universities"},
 {t:2, n:"Koç University", c:"Turkey", col:"E", term:"Year · Spring", d:"Industrial Engineering", w:"Turkey's leading private research university"},
 {t:2, n:"Khalifa University", c:"UAE", col:"E", term:"Year · Fall · Spring", d:"Most majors", w:"Well-funded; strong in energy and robotics"},
 {t:2, n:"Hebrew University of Jerusalem", c:"Israel", col:"C", term:"Semester · Year", d:"CLAS majors", w:"Consistently ranked Israel's top university"},
 {t:2, n:"Tecnológico de Monterrey", c:"Mexico", col:"E", term:"Year · Fall · Spring", d:"—", w:"Latin America's leading private technical university"},
 {t:2, n:"Universidad de los Andes", c:"Colombia", col:"E", term:"Year · Fall · Spring", d:"Spanish-language courses only", w:"Colombia's strongest research university"},
 {t:2, n:"Universidad del Norte", c:"Colombia", col:"C", term:"Semester · Year", d:"CLAS majors", w:"Typically a top-5 Colombian university"},
 {t:2, n:"Instituto Tecnológico de Buenos Aires", c:"Argentina", col:"E", term:"Year · Fall · Spring", d:"Computer Engineering, CS", w:"Argentina's leading private technical institute"},
 {t:2, n:"American University of Cairo", c:"Egypt", col:"E", term:"Year · Fall · Spring", d:"Most majors", w:"English-language instruction"},
 {t:2, n:"Universiti Teknologi Petronas", c:"Malaysia", col:"E", term:"Year · Spring", d:"Most majors", w:"Industry-linked, energy focus"},
 {t:2, n:"Institut Teknologi Bandung", c:"Indonesia", col:"E", term:"Year · Fall · Spring", d:"Civil, Mechanical", w:"Indonesia's leading technical institute"},
 {t:2, n:"University of Graz", c:"Austria", col:"C", term:"Semester · Year", d:"CLAS majors", w:"Founded 1585"},
 {t:3, n:"Hamburg University of Applied Sciences", c:"Germany", col:"E", term:"Spring", d:"Aerospace, CS, Electrical, Mechanical", w:"A <i>Fachhochschule</i> — excellent practice-oriented teaching and industry links, but structurally not a research university"},
 {t:3, n:"Munich University of Applied Sciences", c:"Germany", col:"E", term:"Spring", d:"Mechanical", w:"Same distinction as Hamburg UAS — choose it for the internship pipeline, not the prestige"},
 {t:3, n:"Zurich University of Applied Sciences (ZHAW)", c:"Switzerland", col:"E", term:"Fall · Spring", d:"Aerospace, CS, Electrical, Mechanical", w:"Strong applied teaching; not ETH, and admissions committees know the difference"}
];

/* The faculty-led catalogue — named honestly. */
const FACULTY_LED = ["UF in Antarctica: The Frozen Continent","UF in Brazil: Developing Innovative Housing Solutions with AI","UF in Cayman Islands: Concept to Coral","UF in Nepal: Engineering for Sustainable Development","UF in Panama: Exploring the Canal Across Disciplines","UF in Scandinavia: Nordic Sustainability and Design Innovations","UF in Greece: Kinesiology and Engineering","UF in Brno: Engineering and Arts in Central Europe","UF in Cape Town: Software Engineering and UX Design","UF in Chile: International Energy Management","UF in Iceland: Renewable Energy and Sustainability","UF in Ireland: Internship and Global Culture","UF in Italy: From Automotive Industries to Urban Planning","UF in Japan: Cross Cultural Engineering Design","UF in Lille: Engineering and Arts in France","UF in London: Innovating for Access","UF in Munich: Technology Innovation and Entrepreneurship","UF in Singapore: Internship and Global Culture","UF in South Korea: Cross-Cultural Engineering and Design","UF in Spain: Understanding Next Generation Energy Technologies"];

const ABROAD_MONEY = [
 {n:"HWCOE Study Abroad Scholarships", m:"$1,000 – $2,000", d:"Undergraduate engineering students on global learning experiences. Deadlines <b>15 October</b> (winter, spring, spring break, summer early bird) and <b>15 February</b> (summer, fall, academic year). Apply via ScholarshipUniverse.", u:"https://www.eng.ufl.edu/undergraduate/programs-and-partnerships/international-programs/resources-and-funding/"},
 {n:"Gerald R. Kunde, II Scholarship", m:"3 × $2,000", d:"For summer UF programmes in Europe of at least six weeks, with demonstrated financial need. Students from non-traditional majors and underrepresented groups are encouraged to apply. Requires a post-programme blog.", u:"https://www.eng.ufl.edu/undergraduate/programs-and-partnerships/international-programs/resources-and-funding/"},
 {n:"Gilman International Scholarship", m:"up to $5,000 + $1,000 STEM", d:"Pell-eligible undergraduates. Add up to $3,000 for critical languages. Roughly 30% of UF applicants are awarded. sas@ufic.ufl.edu", u:"https://internationalcenter.ufl.edu/sas/finances/scholarships/gilman-scholarship/"},
 {n:"UFIC Summer & Summer Merit Scholarships", m:"Varies", d:"For UF-sponsored or approved summer programmes.", u:"https://www.eng.ufl.edu/undergraduate/programs-and-partnerships/international-programs/resources-and-funding/"},
 {n:"Learning without Borders", m:"Varies", d:"For Pell Grant recipients attending UF-sponsored summer programmes.", u:"https://www.eng.ufl.edu/undergraduate/programs-and-partnerships/international-programs/resources-and-funding/"},
 {n:"Wentworth Honors Scholarships", m:"Varies", d:"Designated for Honors students.", u:"https://www.eng.ufl.edu/undergraduate/programs-and-partnerships/international-programs/resources-and-funding/"},
 {n:"The Sones Scholarship", m:"Varies", d:"For semester or academic-year programmes with French cultural immersion.", u:"https://www.eng.ufl.edu/undergraduate/programs-and-partnerships/international-programs/resources-and-funding/"},
 {n:"Brian and Kate Harfe International Exchange Award", m:"up to $400", d:"For CLAS exchange students with demonstrated financial need. Contact Dr. Brian Harfe, bharfe@ufl.edu.", u:"https://beyond120.clas.ufl.edu/global-engagement/clas-exchange-programs/"}
];

/* ===========================================================================
   CHINA — researched August 2026.
   Ordered education → opportunity → cost, because a reader cannot evaluate a
   funded Tsinghua master's until they know what Tsinghua is, and should not
   accept one until they know what it does to a clearance application.
   =========================================================================== */

const CHINA_STATS = [
  {v:"No. 1", k:"Tsinghua, world ranking in AI — CSRankings 2026, the publication-based metric this site cites for UF", flag:"csr2026"},
  {v:"No. 1", k:"Chinese Academy of Sciences, top research institution on Earth — Nature Index 2025 (Harvard is No. 2 among academic institutions)"},
  {v:"53%", k:"China's share of global chemistry output. The United States is second at 15%"},
  {v:"−82%", k:"Americans studying in China: ~11,000 in 2019 to under 2,000 in 2026"}
];

/* The nine. The shorthand column is a device for building intuition. It is not
   a ranking and no institution endorses it. */
const CHINA_C9 = [
  {n:"Tsinghua University",       c:"Beijing",  us:"China's MIT",      f:"Engineering, CS, AI, architecture", star:true},
  {n:"Peking University (PKU)",   c:"Beijing",  us:"China's Harvard",  f:"Sciences, humanities, economics, AI", star:true},
  {n:"USTC",                      c:"Hefei",    us:"≈ Caltech",        f:"Physics, quantum information, chemistry", star:true},
  {n:"Shanghai Jiao Tong",        c:"Shanghai", us:"≈ Berkeley",       f:"Engineering, CS, naval, medicine"},
  {n:"Zhejiang University",       c:"Hangzhou", us:"≈ Cornell",        f:"Very broad; strong CS and engineering"},
  {n:"Fudan University",          c:"Shanghai", us:"≈ Columbia",       f:"Medicine, sciences, economics"},
  {n:"Nanjing University",        c:"Nanjing",  us:"≈ Wisconsin",      f:"Physics, astronomy, chemistry"},
  {n:"Harbin Institute of Tech.", c:"Harbin",   us:"≈ Georgia Tech",   f:"Aerospace, robotics, materials"},
  {n:"Xi'an Jiaotong",            c:"Xi'an",    us:"≈ Purdue",         f:"Mechanical, energy, power engineering"}
];

const CHINA_ROUTES = [
  {t:1, n:"Schwarzman Scholars", w:"Tsinghua University", sel:"~3% acceptance · 100–200 scholars",
   money:"Full + $4,000 stipend",
   d:"A one-year fully funded master's in Global Affairs — tuition, room and board, health insurance, a purpose-built residential college and a deliberately constructed network. Tighter than most Ivy League PhD admissions.",
   u:"https://www.schwarzmanscholars.org/"},
  {t:1, n:"Yenching Academy", w:"Peking University", sel:"~120 scholars a year, worldwide",
   money:"Full + round-trip travel",
   d:"A fully funded master's in China Studies. Tuition, campus accommodation, monthly stipend, medical cover and travel. Twelve months, extendable to finish a thesis.",
   u:"https://yenchingacademy.pku.edu.cn/"},
  {t:1, n:"Chinese Government Scholarship (CSC)", w:"Any participating university, including all nine C9", sel:"Far less competitive than the two above",
   money:"Full tuition · dorm · ¥2,500–3,500/month · insurance",
   d:"<b>The underexploited one.</b> A standing, fully funded offer open to any nationality, and with American applications collapsing 82%, competition from your own country has largely evaporated. Type B applies direct to the university and closes earlier than the embassy track.",
   dl:"Deadline ~8 Feb 2026 via CampusChina", flag:"csc-dl",
   u:"https://www.campuschina.org/"},
  {t:2, n:"Direct graduate admission", w:"Tsinghua and peers", sel:"Programme-dependent",
   money:"Then apply for CSC on top",
   d:"Tsinghua alone offers <b>30+ master's programmes taught entirely in English</b> across 53 schools, concentrated in engineering, computer science, architecture, environmental science and public policy.",
   dl:"Applications September → February", u:"https://yz.tsinghua.edu.cn/en/Programs/Master_s_Degrees.htm"},
  {t:2, n:"Short-term research visit", w:"Tsinghua", sel:"A genuine on-ramp, low bar",
   money:"Tuition and application fees waived",
   d:"Minimum six weeks. Costs you a summer rather than two years, tells you whether you can actually live and work there, and produces a named contact at a top-ten department who can support a later application.",
   dl:"Runs 1 Jan – 30 Nov 2026", u:"https://yz.tsinghua.edu.cn/en/"},
  {t:2, n:"Summer schools", w:"Tsinghua · Peking", sel:"Open enrolment",
   money:"Varies",
   d:"Two-week intensives — generative AI, future power and energy systems, environment, and others. The lowest-risk way to test the whole idea.",
   dl:"PKU's opens 1 Jan", u:"https://www.tsinghua.edu.cn/gss/Home.htm"}
];

const CHINA_FIELDS = {
  yes:[
    ["Artificial intelligence & ML","Tsinghua No. 1 in the world on CSRankings 2026; Chinese universities hold much of the top ten","Tsinghua (IIIS / College of AI), Peking, Shanghai Jiao Tong"],
    ["Chemistry","China 53% of global Nature Index share against America's 15%","CAS institutes, USTC, Peking, Nanjing"],
    ["Quantum information","USTC is a genuine world centre; Yao Class runs a dedicated quantum track","USTC, Tsinghua IIIS"],
    ["Materials science","Sustained Nature Index dominance","Tsinghua, Zhejiang, Harbin Institute of Technology"],
    ["Energy & power systems","China leads deployment at scale; Tsinghua runs a summer school on it","Tsinghua, Xi'an Jiaotong"],
    ["Robotics & aerospace","Long-standing institutional strength","Harbin Institute of Technology, Shanghai Jiao Tong"]
  ],
  no:[
    ["Biomedical & clinical research","US advantages in NIH funding scale, clinical-trial infrastructure and FDA pathways remain decisive. For an MD-PhD or drug-discovery track, Wertheim Scripps and the European Amgen sites are better bets."],
    ["Anything adjacent to policy or social science","Research touching politics, history, ethnic policy or governance is constrained in ways with no US analogue. Largely irrelevant for most STEM; not irrelevant here."]
  ]
};

const CHINA_RISKS = [
  {h:"Disclosure is permanent, not disqualifying",
   d:"Get the scope right, because both the panic and the dismissal are wrong. Federal law bars <b>“covered individuals”</b> — principal investigators and senior personnel on federal grants, plus federal-lab researchers — from participating in a <i>malign</i> foreign talent recruitment programme. That is a specifically defined thing involving IP transfer or duplicate shadow labs. <b>A normal funded degree is not that, and students are not covered individuals.</b> But a CSC scholarship is a benefit from a foreign government, so you will disclose it on every clearance application for the rest of your career. Friction, not a bar — budget for it."},
  {h:"Your university has to report it",
   d:"Under Section 117 of the Higher Education Act, institutions are expected to collect and report support from foreign government sponsors including the China Scholarship Council. Administratively routine, and increasingly scrutinised."},
  {h:"It pulls against one specific UF career track",
   d:"This site identifies hardware security and microelectronics — FICS — as UF's clearest national #1-tier niche, and its whole value proposition is DOD funding and security-clearance pathways. <b>A funded degree in China and a career in cleared defense microelectronics pull against each other.</b> Not fatally, but choose deliberately rather than discovering the tension at a background investigation. Low-risk instead: academic research, industry roles without clearance, climate, energy, materials, fundamental science, global health."},
  {h:"Mandarin is genuinely hard",
   d:"Graduate coursework may be in English; daily life is not. The US Foreign Service Institute classes Mandarin among the hardest languages for English speakers. Plan on real study, not an app."},
  {h:"Geopolitics moves faster than a two-year degree",
   d:"US–China relations can change visa policy, funding rules and travel guidance inside the span of your programme. Have a contingency plan."},
  {h:"The network is asymmetric, and you will be alone",
   d:"A Tsinghua degree is enormously valuable in Asia and among people who know the field, and less legible to a generalist American recruiter than a Michigan degree, a gap that is closing but real today. And with under 2,000 Americans in the entire country, there is no large compatriot cohort. Some people thrive on that."}
];

/* ===========================================================================
   STRONG DESTINATIONS UF HAS NO ROUTE TO.
   Everything else on the world map is somewhere UF can actually send you. These
   are not — no exchange agreement, no placement, no fellowship. They are here
   because leaving them off implies they do not matter, and a map that only shows
   what your own university happens to have signed is a map of UF's paperwork
   rather than of the world. Each one says what you would have to do instead.
   =========================================================================== */
const WORLD_NOROUTE = [
  {n:"University of Waterloo", c:"Canada", lat:43.4723, lon:-80.5449, reg:"amer",
   w:"<b>North America's largest co-op programme</b> — 8,000+ employers, larger than the next two Canadian programmes combined, and a long-standing Silicon Valley feeder. Students alternate four-month academic terms with four-month paid work terms.",
   how:"No UF agreement. Route in is a graduate application, or a co-op-style internship secured directly. Worth knowing that Waterloo's model is the thing UF's own career pipeline does not replicate."},
  {n:"University of Toronto", c:"Canada", lat:43.6629, lon:-79.3957, reg:"amer",
   w:"Canada's largest research university and the anchor of the Toronto AI cluster around the Vector Institute.",
   how:"No UF agreement. Graduate application direct. Canadian doctoral funding is typically guaranteed and stipended, closer to the European model than the American one."},
  {n:"University of British Columbia", c:"Canada", lat:49.2606, lon:-123.2460, reg:"amer",
   w:"Strong across engineering, forestry, oceanography and computer science, on the Pacific coast.",
   how:"No UF agreement. Graduate application direct."},

  /* The C9 League — China's Ivy League, from the study abroad research. */
  {n:"Tsinghua University", c:"China · C9", lat:40.0000, lon:116.3264, reg:"easia", c9:1,
   w:"<b>Ranked No. 1 in the world in AI</b> on CSRankings 2026. Home of the Institute for Interdisciplinary Information Sciences and, since April 2024, a full College of AI — both led by Andrew Chi-Chih Yao, winner of the 2000 Turing Award. Roughly China's MIT.",
   how:"No UF exchange. Schwarzman Scholars, the Chinese Government Scholarship, direct admission to 30+ English-taught master's programmes, or a six-week research visit with fees waived."},
  {n:"Peking University", c:"China · C9", lat:39.9925, lon:116.3059, reg:"easia", c9:1,
   w:"Roughly China's Harvard — sciences, humanities and economics, and second in the world in AI on the 2026 tables.",
   how:"No UF exchange. The Yenching Academy fellowship funds about 120 scholars a year, fully, including travel."},
  {n:"USTC", c:"China · C9", lat:31.8390, lon:117.2640, reg:"easia", c9:1,
   w:"University of Science and Technology of China, Hefei — roughly China's Caltech, and <b>No. 3 among academic institutions worldwide</b> on the Nature Index 2025. A genuine world centre for quantum information.",
   how:"No UF exchange. Chinese Government Scholarship or direct graduate admission."},
  {n:"Shanghai Jiao Tong University", c:"China · C9", lat:31.0256, lon:121.4370, reg:"easia", c9:1,
   w:"Ranked No. 3 in the world across all computer science fields on CSRankings 2025. Engineering, naval architecture and medicine.",
   how:"No UF exchange. Chinese Government Scholarship or direct graduate admission."},
  {n:"Zhejiang University", c:"China · C9", lat:30.2635, lon:120.1210, reg:"easia", c9:1,
   w:"No. 4 worldwide on both CSRankings 2025 and the Nature Index 2025 academic table. Very broad, with strong computer science and engineering.",
   how:"No UF exchange. Chinese Government Scholarship or direct graduate admission."},
  {n:"Fudan University", c:"China · C9", lat:31.2990, lon:121.5030, reg:"easia",
   w:"Shanghai. Medicine, natural sciences and economics — roughly China's Columbia.",
   how:"No UF exchange. Chinese Government Scholarship or direct graduate admission."},
  {n:"Nanjing University", c:"China · C9", lat:32.0560, lon:118.7780, reg:"easia",
   w:"Physics, astronomy and chemistry — part of the Chinese chemistry output that now accounts for 53% of the global Nature Index share.",
   how:"No UF exchange. Chinese Government Scholarship or direct graduate admission."},
  {n:"Harbin Institute of Technology", c:"China · C9", lat:45.7290, lon:126.6360, reg:"easia",
   w:"Aerospace, robotics and materials — roughly China's Georgia Tech.",
   how:"No UF exchange. Chinese Government Scholarship or direct graduate admission."},
  {n:"Xi'an Jiaotong University", c:"China · C9", lat:34.2470, lon:108.9840, reg:"easia",
   w:"Mechanical, energy and power engineering — roughly China's Purdue.",
   how:"No UF exchange. Chinese Government Scholarship or direct graduate admission."}
];
