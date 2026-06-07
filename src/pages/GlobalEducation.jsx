import { useState } from 'react'
import { Link } from 'react-router-dom'

// ─── DATA ───────────────────────────────────────────────────────────────────

const categories = [
  { id: 'all', label: 'All Programs', icon: '🌍' },
  { id: 'medical', label: 'Medical', icon: '🩺' },
  { id: 'engineering', label: 'Engineering & Tech', icon: '⚙️' },
  { id: 'management', label: 'MBA / Management', icon: '📊' },
  { id: 'science', label: 'Pure Sciences & PhD', icon: '🔬' },
  { id: 'creative', label: 'Design, Arts, Film', icon: '🎨' },
  { id: 'vocational', label: 'Vocational / Skills', icon: '🔧' },
  { id: 'law', label: 'Law & Policy', icon: '⚖️' },
  { id: 'hospitality', label: 'Hospitality & Culinary', icon: '🍽️' },
  { id: 'unique', label: 'Hidden Gems 💎', icon: '💎' },
]

const levelFilters = ['All Levels', 'After Class 12', 'After Graduation', 'Post Graduation', 'PhD / Research']
const budgetFilters = ['Any Budget', 'Free / Fully Funded', 'Under ₹10L/year', 'Under ₹20L/year', 'Under ₹40L/year']

const programs = [
  // ─── MEDICAL ───
  {
    id: 1, category: 'medical', level: 'After Class 12',
    title: 'MBBS in Russia', flag: '🇷🇺', country: 'Russia',
    duration: '6 years', cost: '₹25–40L total', costPY: '₹4–7L/year',
    known: 72, demand: 'Very High', prPath: false,
    scholarship: false, workVisa: false,
    tag: 'Most Popular', tagColor: '#1E40AF',
    desc: 'India ke sabse popular MBBS abroad destination. NMC approved universities, English medium, affordable cost.',
    pros: ['NMC/WHO approved universities', 'English medium teaching', 'Total cost ₹25-40L — affordable', '57+ medical universities to choose from'],
    cons: ['FMGE pass rate ~29% — prep required', 'Cultural adjustment needed', 'Extreme cold weather'],
    topColleges: ['Sechenov University (Top 5 in Russia)', 'Kazan Federal University', 'RUDN University Moscow', 'Altai State Medical'],
    fmgeRate: '29.54%',
    avgSalary: '₹8-15L (India) after FMGE',
    eligibility: 'Class 12 PCB, 50% marks, NEET qualified (any score)',
    applyProcess: ['NEET qualification (any score)', 'Choose NMC-approved university', 'Get invitation letter', 'Apply for student visa', 'Travel + enroll'],
    hiddenCost: 'Living expenses ₹8,000-15,000/month, Health insurance required, Travel costs',
    scholarshipDetails: 'Russian Govt scholarships available (competitive) — covers tuition for select students',
    uniqueFact: '🔥 Even NEET 420 scorers can get MBBS — opens door when India shuts',
  },
  {
    id: 2, category: 'medical', level: 'After Class 12',
    title: 'MBBS in Philippines', flag: '🇵🇭', country: 'Philippines',
    duration: '5.5 years', cost: '₹35–55L total', costPY: '₹6–10L/year',
    known: 45, demand: 'High', prPath: false,
    scholarship: false, workVisa: false,
    tag: 'Best FMGE Outcomes', tagColor: '#059669',
    desc: 'US-based medical curriculum, English medium, strong FMGE/USMLE preparation. 9,000+ Indian students annually.',
    pros: ['US-based curriculum (USMLE pathway)', 'Best FMGE pass rates among abroad countries', 'English-speaking country', 'Friendly climate & food'],
    cons: ['Higher cost than Russia', 'Typhoon season', 'Long travel time from India'],
    topColleges: ['University of Santo Tomas', 'University of the East', 'AMA School of Medicine', 'Lyceum Northwestern'],
    fmgeRate: '45-55% (highest among abroad destinations)',
    avgSalary: '₹8-18L (India) + USMLE pathway for USA',
    eligibility: 'Class 12 PCB, 50%, NEET qualifying marks',
    applyProcess: ['Complete 1-year pre-med (BS Biology)', 'Apply to MD program', 'Student visa Philippines', 'PRC board exam recognition'],
    hiddenCost: 'Pre-med year cost extra, Living ₹25,000-40,000/month, Visa renewals',
    uniqueFact: '💡 Philippines ke MBBS ke baad USA mein USMLE de sakte ho — American doctor bann sakte ho!',
  },
  {
    id: 3, category: 'medical', level: 'After Class 12',
    title: 'MBBS in Georgia', flag: '🇬🇪', country: 'Georgia',
    duration: '6 years', cost: '₹30–45L total', costPY: '₹5–8L/year',
    known: 28, demand: 'Growing', prPath: true,
    scholarship: false, workVisa: true,
    tag: 'EU Gateway', tagColor: '#7C3AED',
    desc: 'European country, WHO/NMC recognized, EU standards medical education. Gateway to Europe for future specialization.',
    pros: ['EU-standard medical education', 'WHO/NMC recognized', 'Safe country, friendly people', 'Affordable compared to Europe', 'EU specialization possible after'],
    cons: ['Language barrier (Georgian)', 'Smaller country, fewer resources', 'Limited Indian community'],
    topColleges: ['Tbilisi State Medical University', 'David Tvildiani Medical University', 'New Vision University Tbilisi'],
    fmgeRate: '35-40%',
    avgSalary: '₹8-15L India or Europe practice',
    eligibility: 'Class 12 PCB, 50%, NEET qualifying marks',
    uniqueFact: '🇪🇺 Georgia EU candidate country — medical degree recognized across Europe for specialization!',
  },
  {
    id: 4, category: 'medical', level: 'After Graduation',
    title: 'Nursing Abroad (UK/Australia)', flag: '🇬🇧🇦🇺', country: 'UK / Australia',
    duration: '3 years (BSc) or OET+registration', cost: '₹15–30L', costPY: '₹5–10L/year',
    known: 22, demand: 'Very High', prPath: true,
    scholarship: true, workVisa: true,
    tag: '🔥 Huge Demand', tagColor: '#DC2626',
    desc: 'UK and Australia face critical nursing shortage. Indian BSc Nurses can register directly with OET exam.',
    pros: ['Critical shortage = easy work visa', 'PR pathway in 2-3 years', '£30,000-45,000/year salary UK', 'NHS sponsorship available', 'AUS$65,000-80,000/year Australia'],
    cons: ['OET exam preparation needed', 'Initial adjustment to healthcare system', 'Away from family'],
    topColleges: ['NHS Trust Hospitals (UK)', 'Australian healthcare system', 'University of Melbourne Nursing', 'King\'s College London'],
    fmgeRate: 'N/A',
    avgSalary: '£30,000-45,000/year UK | AUS$65,000-80,000 Australia',
    eligibility: 'BSc Nursing + OET score 350+ each component',
    uniqueFact: '🏆 UK NHS actively recruits Indian nurses — sponsored visa, free accommodation, relocation allowance!',
  },

  // ─── ENGINEERING / TECH ───
  {
    id: 5, category: 'engineering', level: 'After Class 12',
    title: 'B.Tech in Germany (FREE!)', flag: '🇩🇪', country: 'Germany',
    duration: '3-4 years', cost: '₹0–2L/year tuition', costPY: 'Near FREE',
    known: 18, demand: 'Very High', prPath: true,
    scholarship: true, workVisa: true,
    tag: '🆓 Near Free Tuition', tagColor: '#059669',
    desc: 'German public universities charge only semester fees (€150-300). World-class engineering education. PR pathway after graduation.',
    pros: ['Tuition: €0-300/semester at public universities', 'World #1 engineering programs', 'Strong industry (Mercedes, BMW, Siemens, SAP)', 'PR after 33 months work', 'No NEET/JEE required'],
    cons: ['German language required for most programs (B2 level)', 'High living costs (€800-1200/month)', 'Competitive admission'],
    topColleges: ['TU Munich (World Top 50)', 'KIT Karlsruhe', 'RWTH Aachen', 'TU Berlin', 'University of Stuttgart'],
    fmgeRate: 'N/A',
    avgSalary: '€45,000-70,000/year Germany | Same for India return',
    eligibility: 'Class 12 PCM 75%+, German language B2, APS certificate',
    applyProcess: ['Learn German (B2 level — 1 year)', 'Get APS certificate (Indian degree verification)', 'Apply directly to university (no agency needed)', 'Student visa Germany', 'Part-time work allowed 20hrs/week'],
    uniqueFact: '💸 TU Munich (Top 50 world) charges only €143/semester! IIT costs more!',
    scholarshipDetails: 'DAAD scholarship covers living expenses + flights for selected students',
  },
  {
    id: 6, category: 'engineering', level: 'After Graduation',
    title: 'MS in USA (STEM OPT)', flag: '🇺🇸', country: 'USA',
    duration: '1.5-2 years', cost: '₹30–80L total', costPY: '₹20–50L/year',
    known: 65, demand: 'Very High', prPath: false,
    scholarship: true, workVisa: true,
    tag: 'AI/ML Capital', tagColor: '#D97706',
    desc: 'USA is the global hub for AI, ML, CS research. STEM OPT gives 3 years to work after graduation. 363,000+ Indian students.',
    pros: ['Top tech companies (MAANG) recruit on campus', 'STEM OPT: 3 years work authorization', 'Research funding available', 'Best AI/ML/Robotics programs', 'TA/RA funding possible'],
    cons: ['H-1B visa lottery uncertainty', 'High cost', 'GRE + TOEFL required', 'Competitive admission'],
    topColleges: ['MIT, Stanford (CS/AI)', 'Carnegie Mellon (Robotics)', 'UIUC (CS)', 'Georgia Tech', 'UT Austin', 'Purdue (Engineering)'],
    avgSalary: '$100,000-180,000/year at MAANG',
    eligibility: 'B.Tech/BE with 7.5+ CGPA, GRE 320+, TOEFL 100+',
    uniqueFact: '🤖 Carnegie Mellon = World #1 Robotics. Microsoft, Google, Amazon hire directly from campus!',
    scholarshipDetails: 'TA/RA positions cover full tuition + stipend $20,000-30,000/year',
  },
  {
    id: 7, category: 'engineering', level: 'After Class 12',
    title: 'Ausbildung — Germany Vocational', flag: '🇩🇪', country: 'Germany',
    duration: '2-3 years', cost: 'EARN while studying', costPY: 'Get PAID €600-800/month',
    known: 5, demand: 'Very High', prPath: true,
    scholarship: false, workVisa: true,
    tag: '💎 Hidden Gem — Earn + Learn', tagColor: '#0891B2',
    desc: 'German apprenticeship system — work at a company while studying. Get PAID €600-1000/month. After completion, permanent job + PR pathway.',
    pros: ['Get PAID while studying (€600-1000/month)', 'Company trains you — no tuition', 'Direct employment after completion', 'PR pathway in 2-3 years', 'Recognized qualification'],
    cons: ['German language required (B1 minimum)', 'Mostly manual/technical trades', 'Less prestige than university degree'],
    topColleges: ['BMW, Mercedes-Benz, Siemens (company training)', 'Bosch, SAP, Deutsche Telekom', 'German chambers of commerce'],
    avgSalary: '€28,000-45,000/year after completion',
    eligibility: 'Class 12 any stream, German B1 language, age 18-35',
    uniqueFact: '🤯 BMW pays you €900/month to learn car engineering + gives you a job after! Zero fees!',
  },
  {
    id: 8, category: 'engineering', level: 'After Graduation',
    title: 'MS in Canada + PR', flag: '🇨🇦', country: 'Canada',
    duration: '2 years', cost: '₹25–50L total', costPY: '₹15–25L/year',
    known: 52, demand: 'High', prPath: true,
    scholarship: true, workVisa: true,
    tag: 'Clearest PR Path', tagColor: '#DC2626',
    desc: 'Canada has the most transparent PR pathway for students. PGWP (3 years), then Express Entry. 427,000+ Indian students.',
    pros: ['PGWP: 3 years open work permit after graduation', 'Express Entry PR in 1-2 years', 'Co-op programs (work while studying)', 'Family-friendly', 'Multicultural society'],
    cons: ['Cold weather', 'Housing expensive (Toronto/Vancouver)', 'Study permit caps being reduced', 'Competition increasing'],
    topColleges: ['University of Toronto', 'UBC Vancouver', 'University of Waterloo (Tech)', 'McGill Montreal', 'University of Alberta'],
    avgSalary: 'CAD $70,000-110,000/year',
    eligibility: 'B.Tech, IELTS 6.5+, GRE optional',
    uniqueFact: '🍁 University of Waterloo co-op = work at Google/Microsoft while studying + earn CAD $25-35K in internships!',
  },

  // ─── MANAGEMENT ───
  {
    id: 9, category: 'management', level: 'After Graduation',
    title: 'MBA in USA (Top 10)', flag: '🇺🇸', country: 'USA',
    duration: '2 years', cost: '₹1.2–2.5Cr total', costPY: '₹60L-1.2Cr/year',
    known: 55, demand: 'Very High', prPath: false,
    scholarship: true, workVisa: true,
    tag: 'Highest ROI', tagColor: '#D97706',
    desc: 'Harvard, Wharton, Kellogg — world-renowned. Average post-MBA salary $175,000+. Scholarships available.',
    pros: ['Average salary $150,000-200,000+', 'World-class alumni network', 'Top consulting/banking jobs', 'Leadership brand for lifetime', 'Scholarships up to 50%'],
    cons: ['Very high cost', 'GMAT 730+ needed', 'Highly competitive', 'H-1B uncertainty after'],
    topColleges: ['Harvard Business School', 'Wharton (UPenn)', 'Kellogg (Northwestern)', 'Booth (Chicago)', 'Columbia', 'MIT Sloan'],
    avgSalary: '$150,000-200,000+/year',
    eligibility: 'Graduation + 3-5 years work experience + GMAT 700+',
    uniqueFact: '💼 McKinsey hires 1000+ MBAs from top schools every year. Starting salary ₹1.5Cr+ in India!',
  },
  {
    id: 10, category: 'management', level: 'After Graduation',
    title: 'PGDM / MBA in Singapore', flag: '🇸🇬', country: 'Singapore',
    duration: '1-2 years', cost: '₹40–80L', costPY: '₹40–80L total',
    known: 25, demand: 'Growing', prPath: true,
    scholarship: true, workVisa: true,
    tag: 'Asia Hub', tagColor: '#0891B2',
    desc: 'NUS & NTU ranked top 15 globally. Southeast Asia business hub. PR after work. Gateway to ASEAN markets.',
    pros: ['World top 15 universities', 'Gateway to APAC markets', 'High salaries SGD $80,000+', 'Small country, easy to settle', 'English medium'],
    cons: ['Expensive city', 'Competitive admission', 'Small job market'],
    topColleges: ['NUS Business School (World Top 10)', 'NTU Nanyang Business School', 'SMU', 'INSEAD Singapore campus'],
    avgSalary: 'SGD $70,000-100,000/year',
    eligibility: 'Graduation + 2+ years work experience, GMAT 600+',
    uniqueFact: '🌏 NUS MBA = gateway to Singapore PR + all ASEAN multinationals like DBS, Grab, Sea Group!',
  },

  // ─── PURE SCIENCES / PHD ───
  {
    id: 11, category: 'science', level: 'After Graduation',
    title: 'Fully Funded PhD — USA', flag: '🇺🇸', country: 'USA',
    duration: '4-6 years', cost: 'FULLY FUNDED', costPY: 'FREE + Stipend $25-35K/year',
    known: 35, demand: 'High', prPath: true,
    scholarship: true, workVisa: true,
    tag: '🆓 Fully Funded', tagColor: '#059669',
    desc: 'PhD in USA = full tuition waiver + monthly stipend $25,000-35,000/year as Teaching/Research Assistant. Zero fees!',
    pros: ['100% funded: zero tuition', 'Monthly stipend $25,000-35,000/year', 'Research with world-class professors', 'Publications + patents', 'Green card (EB-1/O-1) pathway for researchers'],
    cons: ['Intense research pressure', '4-6 years commitment', 'GRE required', 'Narrow specialization'],
    topColleges: ['MIT, Stanford, Harvard, Caltech', 'UIUC, Michigan, Cornell', 'For Chemistry: MIT, Scripps', 'For Biology: Harvard, Broad Institute'],
    avgSalary: '$90,000-150,000 after PhD (academia or industry)',
    eligibility: 'B.Tech/M.Sc, strong research background, GRE 320+, publications helpful',
    uniqueFact: '🔬 MIT PhD pays you $37,000/year stipend — you earn while getting world\'s best education FREE!',
    scholarshipDetails: 'RA/TA position: full tuition waiver + $25K-37K annual stipend + health insurance',
  },
  {
    id: 12, category: 'science', level: 'After Graduation',
    title: 'Erasmus Mundus — Europe', flag: '🇪🇺', country: 'Multiple EU Countries',
    duration: '2 years (study in 2-3 countries)', cost: 'FULLY FUNDED', costPY: 'FREE + €1,400/month',
    known: 8, demand: 'Growing', prPath: false,
    scholarship: true, workVisa: false,
    tag: '💎 Best Kept Secret', tagColor: '#7C3AED',
    desc: 'Study in 2-3 European countries in ONE master\'s degree. EU funds full scholarship €1,400/month + tuition. 200+ programs.',
    pros: ['Study in 2-3 EU countries', '€1,400/month scholarship + tuition paid', 'Double/triple degree recognition', 'EU network for jobs', 'Completely free for scholarship holders'],
    cons: ['Highly competitive (3-5% acceptance)', 'Moving countries is challenging', 'Limited to specific programs'],
    topColleges: ['Programs across TU Delft, Sorbonne, KTH, TU Berlin', 'University of Barcelona, Ghent, Edinburgh'],
    avgSalary: '€40,000-70,000/year in Europe',
    eligibility: 'Bachelor\'s degree, English proficiency, strong academic record',
    uniqueFact: '🤫 Only 3% Indians know about Erasmus Mundus. EU pays you €1,400/month to study across Europe!',
  },
  {
    id: 13, category: 'science', level: 'After Graduation',
    title: 'DAAD Scholarship — Germany', flag: '🇩🇪', country: 'Germany',
    duration: '1-2 years', cost: '€861/month stipend + tuition', costPY: 'FULLY FUNDED',
    known: 12, demand: 'Steady', prPath: true,
    scholarship: true, workVisa: true,
    tag: 'German Excellence', tagColor: '#1E40AF',
    desc: 'German Academic Exchange Service — Germany\'s premier scholarship for international students. Masters + PhD funding.',
    pros: ['Full funding: tuition + €861/month living', 'Health insurance included', 'Flights covered', 'Germany PR pathway after work', 'German industry connections'],
    cons: ['German language often required', 'Competitive application', 'September deadline — plan 1 year ahead'],
    topColleges: ['Any German university including TU Munich, RWTH Aachen, Heidelberg'],
    avgSalary: '€45,000-70,000/year Germany',
    eligibility: 'Bachelor\'s with 7.5+ CGPA, research interest, 2 years after graduation',
    uniqueFact: '🎓 DAAD covers everything — flights from India, full tuition, €861/month, health insurance. Zero cost to you!',
  },

  // ─── CREATIVE / ARTS ───
  {
    id: 14, category: 'creative', level: 'After Class 12',
    title: 'Animation / Film — CalArts USA', flag: '🇺🇸', country: 'USA',
    duration: '4 years (BFA)', cost: '₹60–80L total', costPY: '$48,000/year',
    known: 5, demand: 'High', prPath: false,
    scholarship: true, workVisa: true,
    tag: '💎 Disney School!', tagColor: '#D97706',
    desc: 'California Institute of the Arts — founded by Walt Disney. Where Pixar, DreamWorks talent comes from. Animation, Film, Game Design.',
    pros: ['Disney-founded school', 'Industry connections at Pixar/DreamWorks/Netflix', 'Portfolio-based admission (no SAT needed)', 'Strong alumni network in Hollywood', 'Scholarship up to 50%'],
    cons: ['Very expensive', 'Portfolio work needs years of prep', 'Career is competitive'],
    topColleges: ['CalArts (Animation)', 'Ringling College of Art', 'SCAD Georgia', 'NYU Tisch (Film)', 'RISD (Design)'],
    avgSalary: '$60,000-120,000 at studios after experience',
    eligibility: 'Class 12 any stream, strong portfolio (artwork/animations), personal essay',
    uniqueFact: '🎬 CalArts alumni made "Up", "Toy Story", "Frozen". Portfolio > marks — no SAT/NEET needed!',
  },
  {
    id: 15, category: 'creative', level: 'After Graduation',
    title: 'Fashion Design — Parsons NYC', flag: '🇺🇸', country: 'USA / Italy / France',
    duration: '1-2 years (MFA)', cost: '₹50–90L', costPY: '₹25–45L/year',
    known: 8, demand: 'Niche', prPath: false,
    scholarship: true, workVisa: true,
    tag: 'World\'s Best', tagColor: '#E11D48',
    desc: 'Parsons School of Design (NYC), Central Saint Martins (London), Istituto Marangoni (Milan/Paris) — world top fashion schools.',
    pros: ['Top brands recruit directly (Dior, Gucci, H&M)', 'Portfolio-based admission', 'Industry exposure in fashion capitals', 'Strong alumni (Marc Jacobs, Donna Karan)'],
    cons: ['Expensive cities (NYC, Paris, Milan)', 'Portfolio needs years of preparation', 'Competitive industry'],
    topColleges: ['Parsons School of Design (NYC)', 'Central Saint Martins (London)', 'Istituto Marangoni (Milan/Paris/Dubai)', 'Fashion Institute of Technology (NYC — cheaper!)'],
    avgSalary: '$45,000-120,000 depending on role and brand',
    eligibility: 'Any graduation + strong portfolio + personal statement',
    uniqueFact: '✂️ FIT New York (Fashion Institute of Technology) = world class fashion education at STATE SCHOOL prices (₹10L/year)!',
  },

  // ─── VOCATIONAL / UNIQUE ───
  {
    id: 16, category: 'vocational', level: 'After Class 12',
    title: 'Aviation — Pilot Training', flag: '✈️', country: 'USA / Canada / Europe',
    duration: '18 months - 2 years', cost: '₹35–60L', costPY: 'One-time investment',
    known: 15, demand: 'Very High', prPath: false,
    scholarship: false, workVisa: true,
    tag: '✈️ Pilot Career', tagColor: '#0891B2',
    desc: 'Commercial Pilot License (CPL) training abroad. USA FAA license or EASA (Europe) license. India aviation booming — massive pilot shortage.',
    pros: ['India needs 10,000+ pilots by 2030', 'Starting salary ₹2-4L/month at IndiGo/Air India', 'CPL abroad faster and cheaper than India', 'International license = fly anywhere', 'FAA > DGCA recognition'],
    cons: ['High initial cost', 'Medical fitness required Class 1', 'Years of building flight hours', 'Weather dependent training'],
    topColleges: ['ATP Flight School (USA)', 'CAE (Canada)', 'OAA Oxford Aviation (UK)', 'Airline Academy New Zealand'],
    avgSalary: '₹2.5-8L/month (IndiGo, Air India, Vistara)',
    eligibility: 'Class 12 PCM, age 17+, Class 1 Medical Certificate, English fluency',
    uniqueFact: '✈️ IndiGo is hiring 1,000+ pilots/year. CPL in USA (FAA) in 18 months costs same as India DGCA training!',
  },
  {
    id: 17, category: 'vocational', level: 'After Class 12',
    title: 'Merchant Navy / Maritime', flag: '🚢', country: 'India + Global',
    duration: '3-4 years (B.Sc Nautical / DNS)', cost: '₹8–25L total', costPY: '₹3-8L/year',
    known: 12, demand: 'High', prPath: false,
    scholarship: false, workVisa: true,
    tag: '🚢 ₹5L/Month!', tagColor: '#059669',
    desc: 'Merchant Navy officer earns ₹2-8L/month on ships. 6 months work, 6 months off. Travel the world, earn in USD.',
    pros: ['₹2-8L/month salary for officers', '6 months on, 6 months off schedule', 'Earn in USD, spend in India', 'Travel to 50+ countries', 'India has strong maritime tradition'],
    cons: ['Away from family for months', 'Physical fitness required', 'Medical fitness certification needed', 'Dangerous profession risks'],
    topColleges: ['IMU (Indian Maritime University)', 'T.S. Chanakya Mumbai', 'IME Kolkata', 'Tolani Maritime Institute Pune', 'HIMT Chennai'],
    avgSalary: 'Chief Officer: ₹5-8L/month | Captain: ₹10-15L/month',
    eligibility: 'Class 12 PCM 60%, IMUCET exam, ENG-1 Medical fitness',
    uniqueFact: '🌊 A ship captain earns ₹12L/month, works 6 months, vacations 6 months — and sees the world for FREE!',
  },
  {
    id: 18, category: 'vocational', level: 'After Class 12',
    title: 'Japan Technical Intern Training', flag: '🇯🇵', country: 'Japan',
    duration: '3-5 years', cost: 'EARN ¥150,000-180,000/month', costPY: 'GET PAID',
    known: 4, demand: 'Growing', prPath: true,
    scholarship: false, workVisa: true,
    tag: '🇯🇵 Earn in Yen!', tagColor: '#DC2626',
    desc: 'Japan Specified Skilled Worker program — work in manufacturing, agriculture, construction. Earn ¥150K-200K/month. PR pathway.',
    pros: ['Earn ¥150,000-200,000/month (₹80,000-1,10,000)', 'PR possible after 5 years', 'Japan is world\'s 3rd largest economy', 'Zero crime, safe country', 'Unique cultural experience'],
    cons: ['Japanese language mandatory (JLPT N4)', 'Cultural adjustment is significant', 'Strict work culture'],
    topColleges: ['Japan-India Institute for Manufacturing (JIM)', 'JICA training programs', 'Sending organizations in India (IM Japan)'],
    avgSalary: '¥180,000-250,000/month skilled workers',
    eligibility: 'Class 12 any, JLPT N4 Japanese, age 18-35',
    uniqueFact: '🇯🇵 IM Japan — government program — gives FREE Japanese training in India, pays your ticket to Japan, zero fee!',
  },

  // ─── HOSPITALITY ───
  {
    id: 19, category: 'hospitality', level: 'After Class 12',
    title: 'Culinary Arts — Le Cordon Bleu', flag: '🍳', country: 'France / UK / Australia',
    duration: '9 months - 3 years', cost: '₹20–60L', costPY: '₹20-60L total',
    known: 6, demand: 'Niche', prPath: false,
    scholarship: false, workVisa: true,
    tag: '👨‍🍳 World #1 Chef School', tagColor: '#D97706',
    desc: 'Le Cordon Bleu — world\'s most famous culinary school. Gordon Ramsay\'s alma mater. Programs in Paris, London, Tokyo, Sydney.',
    pros: ['World\'s most recognized culinary brand', 'Graduates run Michelin-star restaurants', 'Campuses in 20+ countries', 'No entrance exam — portfolio/interview', 'Fast-growing food industry in India too'],
    cons: ['Very physical, intense program', 'Working in kitchens is demanding', 'Long hours career'],
    topColleges: ['Le Cordon Bleu Paris (Original)', 'Le Cordon Bleu London', 'CIA (Culinary Institute of America)', 'Johnson & Wales University', 'Le Cordon Bleu Sydney'],
    avgSalary: '₹3-12L India | $50,000-80,000 abroad after experience',
    eligibility: 'Class 12 any stream, passion for cooking, basic English',
    uniqueFact: '🍽️ Le Cordon Bleu Paris — established 1895 — Julia Child, Gordon Ramsay students. Opens doors to Michelin-star kitchens!',
  },
  {
    id: 20, category: 'hospitality', level: 'After Class 12',
    title: 'Hotel Management — EHL Switzerland', flag: '🇨🇭', country: 'Switzerland',
    duration: '3-4 years', cost: '₹60–100L total', costPY: 'CHF 60,000/year',
    known: 8, demand: 'Niche', prPath: false,
    scholarship: true, workVisa: true,
    tag: '🏨 World #1 Hospitality', tagColor: '#059669',
    desc: 'Ecole hôtelière de Lausanne — ranked #1 hospitality school in the world for 25+ years. Graduates run Marriott, Hilton, Ritz Carlton.',
    pros: ['#1 ranked globally for 25 years', 'Alumni network runs top hotel chains worldwide', 'Swiss education = prestige', 'Internships in luxury hotels worldwide', 'Starting salary CHF 50,000+'],
    cons: ['Very expensive', 'Extremely competitive admission', 'Switzerland high cost of living'],
    topColleges: ['EHL Lausanne (#1 World)', 'Les Roches Switzerland', 'Glion Switzerland', 'SHA Spain', 'Hotelschool The Hague Netherlands'],
    avgSalary: '$60,000-120,000/year in luxury hospitality',
    eligibility: 'Class 12, English + French helpful, strong extracurriculars',
    uniqueFact: '🏆 EHL Lausanne alumni run Marriott, Four Seasons, Ritz Carlton. Batch parties on Swiss Alps — literally!',
  },

  // ─── LAW ───
  {
    id: 21, category: 'law', level: 'After Graduation',
    title: 'LLM from UK / USA', flag: '🇬🇧🇺🇸', country: 'UK / USA',
    duration: '1 year (UK) / 1-2 years (USA)', cost: '₹30–80L', costPY: '₹30-80L total',
    known: 32, demand: 'Growing', prPath: true,
    scholarship: true, workVisa: true,
    tag: 'Corporate Law', tagColor: '#374151',
    desc: 'LLM from Oxford, Cambridge, Harvard opens doors to international law firms, MNCs, UN, World Bank. 1-year UK program is fast.',
    pros: ['1-year program UK (fast, cost-effective)', 'Top law firms hire directly', 'UN/World Bank/ICC recruitment', 'Barrister call in UK (Bar Council)', 'Strong alumni in corporate law'],
    cons: ['Indian LLB recognition varies', 'Expensive tuition', 'Bar exam needed for practice'],
    topColleges: ['Oxford, Cambridge (UK)', 'Harvard Law, NYU Law (USA)', 'London School of Economics', 'King\'s College London'],
    avgSalary: '₹15-40L India | £60,000-120,000 UK',
    eligibility: 'LLB/BA LLB + IELTS 7.0+ (UK) or TOEFL (USA)',
    uniqueFact: '⚖️ LSE LLM + 2 years London work = Solicitor qualification. Indian lawyers earn £80,000+ in London firms!',
  },

  // ─── UNIQUE / HIDDEN GEMS ───
  {
    id: 22, category: 'unique', level: 'After Class 12',
    title: 'Sports Science Abroad', flag: '🏃', country: 'UK / Australia / USA',
    duration: '3-4 years', cost: '₹20–50L total', costPY: '₹8-15L/year',
    known: 3, demand: 'Growing', prPath: false,
    scholarship: true, workVisa: true,
    tag: '💎 Almost Nobody Knows', tagColor: '#7C3AED',
    desc: 'Sports Science, Exercise Physiology, Sports Psychology, Athletic Training — India\'s sports boom needs 10,000+ professionals.',
    pros: ['IPL, BCCI, Olympic programs hiring', 'International degree + India boom', 'Sports dietician, physiotherapist roles', 'CrossFit, wellness industry growing', 'Unique skill = high demand'],
    cons: ['Small field in India currently', 'Need sports background helpful', 'Building India career takes time'],
    topColleges: ['Loughborough University UK (#1 Sports)', 'University of Queensland Australia', 'Penn State USA', 'University of Bath UK', 'University of British Columbia'],
    avgSalary: '₹5-15L India growing | £30,000-50,000 UK',
    eligibility: 'Class 12 any stream, interest in sports/fitness/health',
    uniqueFact: '🏏 BCCI, IPL teams, Olympic Committee India all need Sports Scientists. Market is EMPTY right now — early mover advantage!',
  },
  {
    id: 23, category: 'unique', level: 'After Class 12',
    title: 'Game Design — DigiPen / Ringling', flag: '🎮', country: 'USA / Canada',
    duration: '4 years (BS)', cost: '₹40-70L total', costPY: '$35,000-50,000/year',
    known: 5, demand: 'High', prPath: false,
    scholarship: true, workVisa: true,
    tag: '🎮 Portfolio > Marks', tagColor: '#7C3AED',
    desc: 'DigiPen Institute (Redmond, WA — next to Nintendo), Ringling, SCAD — produce talent for Nintendo, Ubisoft, EA, Epic Games.',
    pros: ['Nintendo has campus right next to DigiPen', 'Portfolio-based admission — no SAT/NEET', 'India gaming ₹60,000Cr by 2027', 'Game developer: ₹12-25L in India', 'Remote work possible worldwide'],
    cons: ['Intense portfolio preparation needed', 'Competitive industry globally', 'Long work hours in studios'],
    topColleges: ['DigiPen Institute (Redmond, WA)', 'Full Sail University (Orlando)', 'SCAD Savannah', 'Ryerson University Toronto'],
    avgSalary: '$65,000-120,000 at studios | ₹12-25L India',
    eligibility: 'Class 12 any stream, portfolio of game projects/programming',
    uniqueFact: '🎮 Nintendo HQ is literally next to DigiPen campus. Student projects have been commercialized on Nintendo Switch!',
  },
  {
    id: 24, category: 'unique', level: 'After Graduation',
    title: 'Chevening Scholarship — UK', flag: '🇬🇧', country: 'UK',
    duration: '1 year Masters', cost: 'FULLY FUNDED', costPY: 'FREE + £1,236/month',
    known: 15, demand: 'Steady', prPath: false,
    scholarship: true, workVisa: false,
    tag: 'UK Govt Scholarship', tagColor: '#DC2626',
    desc: 'UK Government\'s flagship scholarship — full funding for 1-year Masters at ANY UK university. Leadership focus. 1,800 scholars/year.',
    pros: ['Full tuition + £1,236/month living', 'Study at Oxford, LSE, Imperial, anywhere', 'Chevening alumni network (50,000+)', 'UK Govt prestige', 'Any Masters subject'],
    cons: ['Must return to India after (2-year rule)', 'Very competitive (2-3% acceptance)', 'Must show leadership potential', 'September deadline 1 year ahead'],
    topColleges: ['Any UK university — Oxford, Cambridge, LSE, Imperial, UCL, Edinburgh'],
    avgSalary: 'Career boost: ₹20-60L India | £50,000+ UK return later',
    eligibility: '2+ years work experience, Bachelor\'s, leadership record, IELTS 6.5+',
    uniqueFact: '🏛️ Chevening alumni include prime ministers, CEOs, Nobel laureates. UK government\'s most prestigious scholarship!',
    scholarshipDetails: 'Full tuition + £1,236/month + flights + visa — approximately £30,000-40,000 total funding',
  },
  {
    id: 25, category: 'unique', level: 'After Graduation',
    title: 'Norway / Sweden — Free Masters', flag: '🇳🇴🇸🇪', country: 'Scandinavia',
    duration: '2 years', cost: 'FREE tuition (Norway) / Low fee Sweden', costPY: 'Living €800-1200/month',
    known: 4, demand: 'Growing', prPath: true,
    scholarship: true, workVisa: true,
    tag: '💎 Free in Norway!', tagColor: '#059669',
    desc: 'Norway public universities charge ZERO tuition even for international students. Sweden has low fees + major scholarships. Quality of life #1 globally.',
    pros: ['Norway: Zero tuition all students', 'Sweden: Swedish Institute scholarships (full funding)', 'World #1 quality of life', 'Safe, clean, progressive societies', 'Work visa after graduation', 'English-taught programs'],
    cons: ['Very high cost of living', 'Cold, dark winters', 'Limited job market', 'Norwegian/Swedish helpful for social life'],
    topColleges: ['University of Oslo', 'NTNU Trondheim (Norway)', 'KTH Royal Institute Technology (Sweden)', 'Chalmers University (Sweden)'],
    avgSalary: 'NOK 500,000+/year (≈ ₹40L) Norway',
    eligibility: 'Bachelor\'s, IELTS 6.5+, strong academic record',
    uniqueFact: '🏔️ University of Oslo charges €0 tuition. You pay only living costs. QS-ranked university. Almost nobody from India applies!',
  },
  {
    id: 26, category: 'unique', level: 'After Class 12',
    title: 'Marine Biology / Oceanography', flag: '🌊', country: 'Australia / USA / France',
    duration: '3-4 years', cost: '₹25-60L total', costPY: '₹8-15L/year',
    known: 2, demand: 'Niche Growing', prPath: false,
    scholarship: true, workVisa: true,
    tag: '💎 Rarest Career', tagColor: '#0891B2',
    desc: 'Marine biology, oceanography — climate change is creating massive demand. Great Barrier Reef research, ocean conservation. India has massive coastline.',
    pros: ['Climate change urgency = growing field', 'India\'s Blue Economy policy pushing jobs', 'UN/IUCN/WWF recruitment', 'Research roles at CSIR-NIO', 'Unique global career'],
    cons: ['Niche field, limited jobs in India currently', 'Often requires PhD for research roles', 'Fieldwork can be remote'],
    topColleges: ['James Cook University Australia (Coral Reef specialist)', 'Scripps Institution of Oceanography USA', 'IFREMER France (world leader)', 'Plymouth Marine Lab UK'],
    avgSalary: '₹6-18L research roles | International NGOs $40,000-70,000',
    eligibility: 'Class 12 PCB, IELTS, interest in marine life',
    uniqueFact: '🐠 James Cook University sits next to Great Barrier Reef. Students literally dive to do research. Funded by UN climate programs!',
  },

  // ─── NEWLY RESEARCHED — 100% VERIFIED INTERNATIONAL DIPLOMAS (June 2026) ───
  {
    id: 27, category: 'vocational', level: 'After Class 12',
    title: 'TAFE Diploma — Australia (PR Pathway)', flag: '🇦🇺', country: 'Australia',
    duration: '1.5–2 years (CRICOS 92+ weeks)', cost: 'AUD 10,000–25,000/yr (₹5.5–14L/yr)', costPY: '₹5.5–14L/year',
    known: 6, demand: 'Very High', prPath: true,
    scholarship: false, workVisa: true,
    tag: '🇦🇺 Trades = Fast PR', tagColor: '#16A34A',
    desc: 'TAFE (Technical and Further Education) is Australia\'s government vocational college network — TAFE NSW, TAFE Queensland, TAFE Victoria, TAFE SA, TIWA. Diplomas in trades (electrician, plumbing, carpentry, automotive), early childhood education, hospitality & community services. A CRICOS-registered diploma of 92+ weeks unlocks the subclass 485 Temporary Graduate visa (Graduate Work stream — 18 months).',
    pros: ['Far cheaper than university (AUD 10-25K/yr vs AUD 35-45K/yr)', 'Trades have shortest, most direct PR routes via skills assessment (ACWA, TRA)', 'CRICOS 92-week diploma → 485 visa (18 months work rights)', 'After 3 yrs work + assessment → eligible for 190/491/494 PR visas', 'Hands-on, job-ready — high placement rate'],
    cons: ['Diploma graduates get shorter post-study visa (18 mo) than degree holders (2-3 yrs)', 'Must clear trade skills assessment for PR (ACWA/TRA)', 'Regional vs metro visa rules differ — research carefully', 'Requires genuine trade aptitude, not a "backdoor" — assessors check real skills'],
    topColleges: ['TAFE NSW (Sydney)', 'TAFE Queensland', 'TAFE South Australia', 'TAFE International Western Australia (TIWA)', 'Box Hill Institute (Melbourne)'],
    avgSalary: 'AUD 60,000–95,000/yr (₹33–52L/yr) for licensed trades in Australia',
    eligibility: 'Class 12 pass, IELTS 5.5-6.0, genuine interest in trade/vocational field',
    uniqueFact: '🔧 An electrician or plumber in Australia earns AUD 80,000+/yr — more than many IT graduates — and has one of the fastest, most predictable PR pathways in the entire migration system. Source: IDP Australia & TAFE Queensland official guidance.',
    applyProcess: ['Choose CRICOS-registered TAFE diploma (92+ weeks)', 'IELTS 5.5-6.0 (band varies by course)', 'Apply via TAFE international office or registered agent', 'Student visa (subclass 500)', 'On graduation → apply 485 Graduate Work visa', 'Get trade skills assessed (ACWA/TRA/VETASSESS) → PR pathway'],
  },
  {
    id: 28, category: 'unique', level: 'After Graduation',
    title: 'Postgraduate Diploma — Ireland (Stamp 1G)', flag: '🇮🇪', country: 'Ireland',
    duration: '1–2 years (Level 8/9)', cost: '€9,000–20,000/yr (₹8–18L/yr)', costPY: '₹8–18L/year',
    known: 3, demand: 'Rising Fast', prPath: false,
    scholarship: false, workVisa: true,
    tag: '🇮🇪 Europe\'s Best Kept Secret', tagColor: '#059669',
    desc: 'Ireland — English-speaking EU member, home to European HQs of Google, Meta, Pfizer, LinkedIn, Stripe. A Level 8 (Postgrad Diploma) or Level 9 (Master\'s) qualification from a recognised Irish institution gives you "Stamp 1G" — automatic permission to stay and work full-time for 12 months (24 months for Master\'s graduates), no employer sponsorship needed at this stage.',
    pros: ['Stamp 1G = automatic 1-2 year work permission, zero employer sponsorship needed upfront', 'English-speaking gateway to entire EU job market', 'Lower tuition than UK for similar quality (Trinity, UCD, NUI Galway, DCU)', 'Massive tech/pharma job market — Google, Meta, Pfizer, Stripe European HQs in Dublin/Cork', 'Smaller, less crowded applicant pool than UK/Canada — less competition from Indian students'],
    cons: ['Smaller country = fewer total seats than UK/USA', 'Dublin housing costs are very high', 'Stamp 1G is temporary — still need employer sponsorship (Critical Skills Permit) for long-term stay', 'Weather and smaller social/Indian-community network vs UK'],
    topColleges: ['Trinity College Dublin', 'University College Dublin (UCD)', 'National University of Ireland Galway', 'Dublin City University (DCU)', 'National College of Ireland (NCI)'],
    avgSalary: '€35,000–55,000/yr entry-level tech & pharma roles in Dublin/Cork',
    eligibility: 'Bachelor\'s degree 60%+, IELTS 6.5, Level 8/9 program acceptance',
    uniqueFact: '🍀 Almost no Indian student talks about Ireland — yet it has lower competition, an automatic 1-2 yr post-study work stamp (no lottery, no sponsorship drama like the US H-1B), and is literally the European headquarters address for Google, Meta and Pfizer. Source: Irish Immigration Service (irishimmigration.ie) official Stamp 1G guidance.',
    applyProcess: ['Shortlist Level 8/9 programs (Trinity/UCD/DCU/Galway/NCI)', 'IELTS 6.5+', 'Apply directly via university portal (no centralized system like UCAS)', 'Get CAS-equivalent offer letter + student visa (Stamp 2)', 'On graduation, register for Stamp 1G within 6 months — automatic 12-24 month work permission'],
  },
  {
    id: 29, category: 'management', level: 'After Graduation',
    title: 'ACCA — Global Accounting Qualification (UK)', flag: '🇬🇧', country: 'UK / Global (180+ countries)',
    duration: '2–3 years (13 papers, fewer with exemptions)', cost: '₹3–4.5L total (India) | ₹19-25L (if via UK university)', costPY: '₹1.5–2.5L/year',
    known: 8, demand: 'Very High', prPath: false,
    scholarship: true, workVisa: false,
    tag: '🌍 Work in 180+ Countries', tagColor: '#7C3AED',
    desc: 'ACCA (Association of Chartered Certified Accountants) — a UK-based, globally recognised professional accounting qualification, equivalent prestige to CA/CPA but valid worldwide. Indian CA-Inter clearers get up to 9 paper exemptions, finishing in just 1.5-2 years. Many UK universities (Oxford Brookes, London South Bank, Aston) offer integrated ACCA + degree programs.',
    pros: ['Recognised in 180+ countries — work in UK, Dubai, Singapore, Australia without re-qualifying', 'Indian CA-Inter clears get up to 9/13 exemptions — massive head start', 'Can be done FROM INDIA (₹3-4.5L total) or with a UK degree (more expensive but adds Master\'s + UK work visa route)', 'ACCA Financial Support scheme offers genuine need-based fee waivers', 'Direct pathway into Big 4 (EY, PwC, Deloitte, KPMG) globally'],
    cons: ['Exams are tough — global pass rates 35-50% per paper', 'If done purely online from India, no student visa / no UK work rights — must pair with a degree for that', 'Takes real discipline — self-study heavy', 'Lower brand recognition among Indian parents vs "MBA" or "CA" labels (a real reason it stays under-explored)'],
    topColleges: ['Oxford Brookes University (BSc Applied Accounting + ACCA)', 'London South Bank University', 'Aston University Birmingham', 'University of London (online ACCA-aligned)', 'ACCA-approved Learning Partners across India (for exams from home)'],
    avgSalary: '₹8-18L in India (Big 4) | £35,000-65,000/yr UK | AED 180,000-350,000 Dubai',
    eligibility: '10+2 with Maths/Accounts (or graduate); CA-Inter clearers get max exemptions',
    uniqueFact: '💼 A CA-Intermediate cleared Indian student can become a globally licensed accountant (work-ready in UK, UAE, Singapore, Australia) in under 2 years for less than the cost of one year of an average Indian MBA — yet barely 8% of commerce students have heard of this route. Source: ACCA Global official India fee/exemption guidance (accaglobal.com).',
    applyProcess: ['Register with ACCA Global (£30 one-time + £140/yr subscription)', 'Claim exemptions if CA-Inter/B.Com cleared', 'Study via ACCA-approved Learning Partner in India or enrol in UK university integrated program', 'Clear remaining Strategic Professional papers', 'Get 3 years relevant practical experience (PER) for full membership'],
  },
  {
    id: 30, category: 'creative', level: 'After Class 12',
    title: 'Vancouver Film School — Diploma Programs', flag: '🇨🇦', country: 'Canada',
    duration: '12 months (intensive diploma)', cost: 'CAD 29,000–54,000/yr (₹18–33L/yr)', costPY: '₹18–33L/year',
    known: 3, demand: 'Niche High-Paying', prPath: true,
    scholarship: false, workVisa: true,
    tag: '🎬 1-Year, Job-Ready', tagColor: '#DC2626',
    desc: 'Vancouver Film School (VFS) — one of the world\'s most respected creative-industry schools, alumni have worked on Avatar, Stranger Things, God of War. Intensive 12-month diplomas in Film Production, 3D Animation & VFX, Game Design, Programming for Games, Acting, Writing for Film/TV/Games — all built around real industry pipelines, not theory.',
    pros: ['Just 12 months — fastest creative-industry credential abroad (vs 3-4 yr degrees)', 'Alumni network at Pixar, ILM, Marvel Studios, Rockstar Games, EA', 'Vancouver is "Hollywood North" — Netflix, Disney+, major VFX studios shoot/produce here', 'Canada\'s post-graduation work permit (PGWP) gives 1-3 yrs work rights → Express Entry PR pathway', 'Portfolio-first teaching — graduates job-ready from week one'],
    cons: ['High tuition for a 1-year diploma (CAD 29-54K)', 'Extremely competitive industry — talent + networking both matter', 'Vancouver cost of living is high', 'Requires a strong creative portfolio for admission to top programs'],
    topColleges: ['Vancouver Film School (Vancouver, BC — the flagship)', 'Toronto Film School', 'Capilano University (Animation, North Vancouver)', 'Sheridan College (Animation, Ontario — globally ranked)'],
    avgSalary: 'CAD 55,000-90,000/yr (₹34-56L/yr) VFX/game artists in Canada; remote global gigs $40-100/hr freelance',
    eligibility: 'Class 12 pass + creative portfolio/demo reel (varies by program), basic English proficiency',
    uniqueFact: '🎮 A 12-month diploma here can put you on the same productions as Hollywood blockbusters and AAA games — most Indian students think "film school abroad" means a 3-4 year US degree costing ₹80L+; this is a fraction of the time and cost, with a direct PGWP-to-PR pipeline. Source: Vancouver Film School official international admissions page (vfs.edu).',
    applyProcess: ['Build a creative portfolio / demo reel', 'Apply directly to VFS international admissions', 'Receive Letter of Acceptance (LOA)', 'Apply for Canadian study permit (show CAD ~23,000 living funds)', 'On graduation, apply for Post-Graduation Work Permit (PGWP) — pathway to Express Entry PR'],
  },
]

const countryList = ['All Countries', 'USA', 'Germany', 'Canada', 'UK', 'Australia', 'France', 'Russia', 'Philippines', 'Japan', 'Singapore', 'Switzerland', 'Scandinavia', 'EU (Multiple)']

// ─── COMPONENT ──────────────────────────────────────────────────────────────

export default function GlobalEducation() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeLevel, setActiveLevel] = useState('All Levels')
  const [activeBudget, setActiveBudget] = useState('Any Budget')
  const [activeCountry, setActiveCountry] = useState('All Countries')
  const [selected, setSelected] = useState(null)
  const [search, setSearch] = useState('')
  const [showOnlyFunded, setShowOnlyFunded] = useState(false)
  const [showOnlyPR, setShowOnlyPR] = useState(false)

  const filtered = programs.filter(p => {
    if (activeCategory !== 'all' && p.category !== activeCategory) return false
    if (activeLevel !== 'All Levels' && p.level !== activeLevel) return false
    if (activeCountry !== 'All Countries' && !p.country.includes(activeCountry)) return false
    if (showOnlyFunded && !p.scholarship) return false
    if (showOnlyPR && !p.prPath) return false
    if (search && !p.title.toLowerCase().includes(search.toLowerCase()) && !p.country.toLowerCase().includes(search.toLowerCase()) && !p.desc.toLowerCase().includes(search.toLowerCase())) return false
    if (activeBudget === 'Free / Fully Funded' && !p.cost.toLowerCase().includes('free') && !p.cost.toLowerCase().includes('fund')) return false
    return true
  })

  const prog = selected ? programs.find(p => p.id === selected) : null

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#0F172A', color: '#fff', all: 'revert', fontFamily: 'system-ui, sans-serif' }}>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 50%, #0F172A 100%)', padding: '56px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05 }}>
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&q=60" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: 20, padding: '6px 18px', marginBottom: 20 }}>
            <span style={{ color: '#F59E0B', fontSize: 13, fontWeight: 600 }}>🌍 India's Most Complete Global Education Guide</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px,5vw,54px)', fontWeight: 800, color: '#fff', marginBottom: 14, lineHeight: 1.2 }}>
            Duniya Bhar Ke <span style={{ color: '#F59E0B' }}>Best Courses</span><br />
            <span style={{ color: '#60A5FA' }}>Sirf Indian Students</span> Ke Liye
          </h1>
          <p style={{ color: '#94A3B8', fontSize: 16, maxWidth: 640, margin: '0 auto 28px', lineHeight: 1.7 }}>
            MBBS abroad se lekar <strong style={{ color: '#F59E0B' }}>Germany mein FREE engineering</strong>, <strong style={{ color: '#6EE7B7' }}>Japan earn-while-learn</strong>, <strong style={{ color: '#A78BFA' }}>Culinary arts Paris</strong> — jo koi nahi batata, woh sab yahan hai.
          </p>

          {/* Search */}
          <div style={{ maxWidth: 560, margin: '0 auto 24px', position: 'relative' }}>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="🔍 Search country, course, field..." style={{
              width: '100%', padding: '14px 20px', borderRadius: 12,
              border: '1.5px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.08)', color: '#fff',
              fontSize: 15, boxSizing: 'border-box', outline: 'none',
            }} />
          </div>

          {/* Quick Stats */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 28, flexWrap: 'wrap' }}>
            {[
              ['30', 'Programs Listed'],
              ['19', 'Countries Covered'],
              ['8', 'Fully Funded Options'],
              ['6', 'Earn While Study'],
            ].map(([n, l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: '#F59E0B' }}>{n}</div>
                <div style={{ fontSize: 11, color: '#64748B' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <div style={{ background: '#1E293B', borderBottom: '1px solid #334155', padding: '16px 24px', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1400, margin: '0 auto' }}>
          {/* Category pills */}
          <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 8, marginBottom: 10 }}>
            {categories.map(c => (
              <button key={c.id} onClick={() => setActiveCategory(c.id)} style={{
                padding: '6px 14px', borderRadius: 20, border: '1.5px solid', whiteSpace: 'nowrap',
                cursor: 'pointer', fontSize: 12, fontWeight: 500,
                borderColor: activeCategory === c.id ? '#F59E0B' : '#334155',
                background: activeCategory === c.id ? 'rgba(245,158,11,0.15)' : 'transparent',
                color: activeCategory === c.id ? '#F59E0B' : '#94A3B8',
              }}>{c.icon} {c.label}</button>
            ))}
          </div>
          {/* Secondary filters */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
            <select value={activeLevel} onChange={e => setActiveLevel(e.target.value)} style={{ padding: '6px 12px', borderRadius: 8, border: '1px solid #334155', background: '#0F172A', color: '#94A3B8', fontSize: 12, cursor: 'pointer' }}>
              {levelFilters.map(l => <option key={l}>{l}</option>)}
            </select>
            <select value={activeCountry} onChange={e => setActiveCountry(e.target.value)} style={{ padding: '6px 12px', borderRadius: 8, border: '1px solid #334155', background: '#0F172A', color: '#94A3B8', fontSize: 12, cursor: 'pointer' }}>
              {countryList.map(c => <option key={c}>{c}</option>)}
            </select>
            <label style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', fontSize: 12, color: '#6EE7B7' }}>
              <input type="checkbox" checked={showOnlyFunded} onChange={e => setShowOnlyFunded(e.target.checked)} style={{ accentColor: '#6EE7B7' }} />
              🆓 Only Fully Funded
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', fontSize: 12, color: '#60A5FA' }}>
              <input type="checkbox" checked={showOnlyPR} onChange={e => setShowOnlyPR(e.target.checked)} style={{ accentColor: '#60A5FA' }} />
              🌿 PR Pathway
            </label>
            <span style={{ fontSize: 12, color: '#475569', marginLeft: 8 }}>{filtered.length} programs found</span>
          </div>
        </div>
      </div>

      {/* MAIN GRID + DETAIL */}
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '28px 24px', display: 'grid', gridTemplateColumns: prog ? '1fr 440px' : '1fr', gap: 24 }}>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16, height: 'fit-content' }}>
          {filtered.map(p => (
            <div key={p.id} onClick={() => setSelected(p.id)} style={{
              background: '#1E293B', borderRadius: 16,
              border: `2px solid ${selected === p.id ? '#F59E0B' : '#334155'}`,
              overflow: 'hidden', cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: selected === p.id ? '0 0 0 3px rgba(245,158,11,0.2)' : 'none',
            }}>
              {/* Tag bar */}
              <div style={{ background: p.tagColor, padding: '6px 14px', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#fff', fontSize: 11, fontWeight: 700 }}>{p.tag}</span>
                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 11 }}>{p.flag} {p.country.split('/')[0].trim()}</span>
              </div>

              <div style={{ padding: 20 }}>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: '#F1F5F9', marginBottom: 6, lineHeight: 1.3 }}>{p.title}</h3>
                <div style={{ display: 'flex', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>
                  <span style={{ background: '#334155', color: '#94A3B8', fontSize: 11, padding: '2px 8px', borderRadius: 10 }}>{p.level}</span>
                  <span style={{ background: '#334155', color: '#94A3B8', fontSize: 11, padding: '2px 8px', borderRadius: 10 }}>{p.duration}</span>
                </div>
                <p style={{ color: '#64748B', fontSize: 13, lineHeight: 1.5, marginBottom: 14 }}>{p.desc.slice(0, 90)}...</p>

                <div style={{ background: '#0F172A', borderRadius: 10, padding: '10px 12px', marginBottom: 12 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                    <div>
                      <div style={{ fontSize: 10, color: '#475569' }}>Annual Cost</div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: p.cost.includes('FREE') || p.cost.includes('FUND') || p.cost.includes('EARN') ? '#6EE7B7' : '#F59E0B' }}>{p.costPY}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 10, color: '#475569' }}>Awareness</div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: p.known < 15 ? '#DC2626' : '#94A3B8' }}>
                        {p.known < 10 ? '🔴 ' : p.known < 30 ? '🟡 ' : '🟢 '}{p.known}% know
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {p.scholarship && <span style={{ background: '#064E3B', color: '#6EE7B7', fontSize: 10, fontWeight: 600, padding: '2px 8px', borderRadius: 10 }}>🎓 Scholarship</span>}
                  {p.prPath && <span style={{ background: '#1E3A5F', color: '#60A5FA', fontSize: 10, fontWeight: 600, padding: '2px 8px', borderRadius: 10 }}>🌿 PR Path</span>}
                  {p.workVisa && <span style={{ background: '#1E1B4B', color: '#A78BFA', fontSize: 10, fontWeight: 600, padding: '2px 8px', borderRadius: 10 }}>💼 Work Visa</span>}
                  {(p.cost.includes('FREE') || p.cost.includes('FUND') || p.cost.includes('EARN')) && <span style={{ background: '#052E16', color: '#4ADE80', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 10 }}>🆓 Zero Cost</span>}
                </div>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: 60, color: '#475569' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
              <p style={{ fontSize: 16 }}>No programs found. Try different filters.</p>
            </div>
          )}
        </div>

        {/* DETAIL PANEL */}
        {prog && (
          <div style={{ background: '#1E293B', borderRadius: 20, border: '1px solid #334155', overflow: 'hidden', position: 'sticky', top: 120, maxHeight: '80vh', overflowY: 'auto', height: 'fit-content' }}>
            {/* Header */}
            <div style={{ background: `linear-gradient(135deg, ${prog.tagColor}, ${prog.tagColor}99)`, padding: '24px 24px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                <div>
                  <div style={{ fontSize: 28, marginBottom: 4 }}>{prog.flag}</div>
                  <h2 style={{ fontWeight: 800, fontSize: 20, color: '#fff', marginBottom: 4, lineHeight: 1.3 }}>{prog.title}</h2>
                  <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13 }}>{prog.country} · {prog.duration}</p>
                </div>
                <button onClick={() => setSelected(null)} style={{ background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff', width: 32, height: 32, borderRadius: '50%', cursor: 'pointer', fontSize: 16, flexShrink: 0 }}>✕</button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1, background: 'rgba(0,0,0,0.2)', borderRadius: '10px 10px 0 0', overflow: 'hidden' }}>
                {[['Cost', prog.costPY], ['Scholarship', prog.scholarship ? 'Available' : 'No'], ['PR Path', prog.prPath ? 'Yes ✓' : 'No']].map(([l, v]) => (
                  <div key={l} style={{ background: 'rgba(255,255,255,0.1)', padding: '10px 12px', textAlign: 'center' }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{v}</div>
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ padding: 24 }}>
              {/* Unique Fact */}
              {prog.uniqueFact && (
                <div style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: 12, padding: 14, marginBottom: 20 }}>
                  <p style={{ color: '#FCD34D', fontSize: 14, lineHeight: 1.6 }}>{prog.uniqueFact}</p>
                </div>
              )}

              <p style={{ color: '#94A3B8', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{prog.desc}</p>

              {/* Pros */}
              <div style={{ marginBottom: 18 }}>
                <h4 style={{ color: '#6EE7B7', fontWeight: 700, fontSize: 14, marginBottom: 10 }}>✅ Advantages</h4>
                {prog.pros.map((p, i) => (
                  <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6, fontSize: 13, color: '#CBD5E1' }}>
                    <span style={{ color: '#6EE7B7', flexShrink: 0 }}>+</span> {p}
                  </div>
                ))}
              </div>

              {/* Cons */}
              <div style={{ marginBottom: 18 }}>
                <h4 style={{ color: '#FCA5A5', fontWeight: 700, fontSize: 14, marginBottom: 10 }}>⚠️ Challenges</h4>
                {prog.cons.map((c, i) => (
                  <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6, fontSize: 13, color: '#94A3B8' }}>
                    <span style={{ color: '#FCA5A5', flexShrink: 0 }}>–</span> {c}
                  </div>
                ))}
              </div>

              {/* Colleges */}
              <div style={{ marginBottom: 18 }}>
                <h4 style={{ color: '#60A5FA', fontWeight: 700, fontSize: 14, marginBottom: 10 }}>🏛️ Top Colleges</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {prog.topColleges.map(c => (
                    <span key={c} style={{ background: '#0F172A', border: '1px solid #334155', color: '#CBD5E1', fontSize: 11, padding: '4px 10px', borderRadius: 20 }}>{c}</span>
                  ))}
                </div>
              </div>

              {/* Key details */}
              <div style={{ background: '#0F172A', borderRadius: 12, padding: 16, marginBottom: 18 }}>
                {[
                  ['📋 Eligibility', prog.eligibility],
                  ['💰 Avg Salary After', prog.avgSalary],
                  ...(prog.fmgeRate ? [['📊 FMGE Pass Rate', prog.fmgeRate]] : []),
                  ...(prog.scholarshipDetails ? [['🎓 Scholarship Details', prog.scholarshipDetails]] : []),
                  ...(prog.hiddenCost ? [['⚠️ Hidden Costs', prog.hiddenCost]] : []),
                ].map(([label, val]) => (
                  <div key={label} style={{ marginBottom: 12 }}>
                    <div style={{ fontSize: 11, color: '#475569', marginBottom: 2 }}>{label}</div>
                    <div style={{ fontSize: 13, color: '#CBD5E1', lineHeight: 1.5 }}>{val}</div>
                  </div>
                ))}
              </div>

              {/* Apply Process */}
              {prog.applyProcess && (
                <div style={{ marginBottom: 20 }}>
                  <h4 style={{ color: '#A78BFA', fontWeight: 700, fontSize: 14, marginBottom: 10 }}>🗺️ How to Apply</h4>
                  {prog.applyProcess.map((step, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
                      <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#1E1B4B', color: '#A78BFA', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{i+1}</div>
                      <p style={{ color: '#94A3B8', fontSize: 13, lineHeight: 1.5, margin: 0, paddingTop: 2 }}>{step}</p>
                    </div>
                  ))}
                </div>
              )}

              <Link to="/book" style={{
                display: 'block', textAlign: 'center', padding: '14px',
                background: `linear-gradient(135deg, ${prog.tagColor}, ${prog.tagColor}99)`,
                color: '#fff', borderRadius: 12, textDecoration: 'none',
                fontWeight: 700, fontSize: 15,
              }}>
                Get Free Guidance for {prog.title} →
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <section style={{ background: 'linear-gradient(135deg, #1E3A5F, #0F172A)', padding: '60px 24px', textAlign: 'center', borderTop: '1px solid #1E293B' }}>
        <h2 style={{ fontSize: 30, fontWeight: 800, color: '#fff', marginBottom: 12 }}>
          Confused Kaunsa Path Choose Karein?
        </h2>
        <p style={{ color: '#64748B', fontSize: 15, marginBottom: 28, maxWidth: 560, margin: '0 auto 28px' }}>
          Free expert session mein tumhara profile dekh ke best global option suggest karenge — budget, subject, career goal sab consider karke
        </p>
        <Link to="/book" style={{
          display: 'inline-block', padding: '16px 40px', borderRadius: 12,
          background: '#F59E0B', color: '#fff', textDecoration: 'none',
          fontWeight: 700, fontSize: 17,
        }}>
          Book Free Global Education Session →
        </Link>
      </section>
    </div>
  )
}
