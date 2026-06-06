import { useState } from 'react'
import { Link } from 'react-router-dom'

const exams = [
  {
    id: 'neet',
    name: 'NEET UG',
    icon: '🩺',
    category: 'Medical',
    color: '#EFF6FF',
    accent: '#1E40AF',
    applicants: '23,33,000',
    seats: '1,09,145',
    govtSeats: '60,000',
    successRate: '4.7%',
    govtOdds: '2.7%',
    conducting: 'NTA (National Testing Agency)',
    eligibility: 'Class 12 with PCB, min 50% (Gen) / 40% (SC/ST/OBC)',
    pattern: '180 MCQs | Physics 45, Chemistry 45, Biology 90 | 720 marks | 3hrs 20min',
    syllabus: 'NCERT Class 11 & 12 — Physics, Chemistry, Biology',
    importantDates: [
      { event: 'Registration Opens', date: 'Feb 2025' },
      { event: 'Exam Date', date: 'May 4, 2025' },
      { event: 'Result', date: 'June 2025' },
      { event: 'Counseling (MCC)', date: 'July–Sept 2025' },
    ],
    cutoff2024: [
      { category: 'General', marks: '720–137' },
      { category: 'OBC', marks: '136–107' },
      { category: 'SC/ST', marks: '136–107' },
    ],
    topColleges: ['AIIMS Delhi', 'AIIMS Mumbai', 'Maulana Azad (Delhi)', 'Grant Medical (Mumbai)', 'BJ Medical (Pune)'],
    careerPaths: ['MBBS → MD/MS → Specialist', 'BDS → MDS → Dental Surgeon', 'BAMS/BHMS → Ayurvedic/Homeopathic Doctor', 'Veterinary (BVSc)', 'MBBS Abroad'],
    whatIfFail: {
      title: 'NEET Nahi Hua? Yeh 12 Raaste Hain:',
      options: [
        { icon: '🌍', path: 'MBBS Abroad', desc: 'Russia, Philippines, Georgia — NMC approved universities mein ₹25–40L total cost mein MBBS', link: '/classes' },
        { icon: '🦷', path: 'BDS (Dental)', desc: 'NEET score se hi milta hai, 5-year degree, ₹40,000–1.5L/month earning', link: '/book' },
        { icon: '🌿', path: 'BAMS/BHMS/BUMS', desc: 'Ayurveda, Homeopathy, Unani — lower cutoff, full medical career', link: '/book' },
        { icon: '🏥', path: 'B.Pharma / Pharm.D', desc: 'Pharmaceutical career, research, drug development — growing field', link: '/book' },
        { icon: '🩻', path: 'B.Sc Nursing / Allied Health', desc: 'Radiography, Physiotherapy, MLT, OT Technician — job guarantee', link: '/book' },
        { icon: '🧬', path: 'B.Sc Biotechnology / Microbiology', desc: 'Research, pharma industry, food tech, forensics', link: '/book' },
        { icon: '💪', path: 'Dropper Batch (1 Year)', desc: 'Structured 1-year preparation with coaching — 40% improve score significantly', link: '/classes' },
        { icon: '🎓', path: 'B.Sc + CSIR NET', desc: 'Research career path — teaching + DRDO + ICMR jobs', link: '/book' },
        { icon: '🏋️', path: 'B.P.Ed / Sports Science', desc: 'Sports medicine, fitness industry — booming with IPL/Olympics growth', link: '/book' },
        { icon: '🍎', path: 'B.Sc Nutrition & Dietetics', desc: 'Clinical nutritionist, hospital jobs, private practice — growing fast', link: '/book' },
        { icon: '🧠', path: 'Psychology / Counseling', desc: 'Mental health counselor — India needs 10 lakh more therapists', link: '/book' },
        { icon: '🔬', path: 'B.Sc Agriculture / Food Tech', desc: 'Agritech boom, food processing industry, government jobs', link: '/book' },
      ],
    },
    scholarships: [
      { name: 'AIIMS Merit Scholarship', amount: '₹1,000/month', eligibility: 'Admitted to AIIMS' },
      { name: 'MHRD Central Sector Scholarship', amount: '₹20,000/year', eligibility: 'Top 20 percentile in Class 12' },
      { name: 'State Minority Scholarship', amount: 'Varies', eligibility: 'Minority category students' },
    ],
  },
  {
    id: 'jee',
    name: 'JEE Mains + Advanced',
    icon: '⚡',
    category: 'Engineering',
    color: '#FFFBEB',
    accent: '#D97706',
    applicants: '11,80,000 (Mains)',
    seats: '17,000 (IIT) + 67,000 (NIT/IIIT)',
    govtSeats: '17,000 IIT seats',
    successRate: '1.4% (IIT)',
    govtOdds: '0.9% (IIT)',
    conducting: 'NTA (Mains) + IIT Madras (Advanced)',
    eligibility: 'Class 12 with PCM, min 75% (Gen) / 65% (SC/ST)',
    pattern: 'Mains: 90 Qs | 300 marks | 3hrs | Advanced: 2 Papers | 360 marks',
    syllabus: 'Class 11 & 12 Physics, Chemistry, Mathematics — CBSE + beyond',
    importantDates: [
      { event: 'JEE Mains Session 1', date: 'Jan 22–31, 2025' },
      { event: 'JEE Mains Session 2', date: 'April 2025' },
      { event: 'JEE Advanced', date: 'May 18, 2025' },
      { event: 'JoSAA Counseling', date: 'June–July 2025' },
    ],
    cutoff2024: [
      { category: 'General (JEE Adv)', marks: 'Rank 1–17,000' },
      { category: 'OBC-NCL', marks: 'Rank up to 24,000' },
      { category: 'SC/ST', marks: 'Relaxed criteria' },
    ],
    topColleges: ['IIT Bombay', 'IIT Delhi', 'IIT Madras', 'IIT Kharagpur', 'NIT Trichy', 'BITS Pilani'],
    careerPaths: ['B.Tech → GATE → M.Tech/MBA', 'B.Tech → Software/Core Engineering', 'B.Tech → UPSC/Civil Services', 'B.Tech → Startup / Entrepreneurship', 'B.Tech → MS/PhD Abroad'],
    whatIfFail: {
      title: 'JEE Nahi Hua? Yeh 12 Raaste Hain:',
      options: [
        { icon: '🏛️', path: 'State Engineering (via MHT-CET etc)', desc: 'COEP, VJTI, SGSITS — excellent placements at fraction of cost', link: '/book' },
        { icon: '🎓', path: 'BITS Pilani / Manipal / VIT', desc: 'Private top-tier — top placements, no JEE needed', link: '/classes' },
        { icon: '💻', path: 'BCA / B.Sc Computer Science', desc: 'IT industry same as B.Tech — MAANG companies hire BCA too', link: '/book' },
        { icon: '📐', path: 'Diploma (Polytechnic)', desc: '3-year diploma + lateral entry B.Tech (2nd year) — smart shortcut', link: '/book' },
        { icon: '🌍', path: 'B.Tech Abroad (Germany)', desc: 'Germany public universities — near-zero tuition, world-class degree', link: '/book' },
        { icon: '🔧', path: 'ITI + Advanced Skill', desc: 'Electrician/Mechatronics/CNC — Gulf demand, ₹3–6L/month abroad', link: '/book' },
        { icon: '📊', path: 'BBA + MBA (IIM)', desc: 'IIM via CAT — equal career value to IIT in management', link: '/book' },
        { icon: '🎨', path: 'B.Des (NID / NIFT)', desc: 'Design career — booming with product companies, startups', link: '/book' },
        { icon: '🏗️', path: 'B.Arch (NATA)', desc: 'Architecture — separate exam, great scope in infrastructure boom', link: '/book' },
        { icon: '🛡️', path: 'NDA / Defense', desc: 'Army, Navy, Air Force officer — PCM background advantage', link: '/book' },
        { icon: '💪', path: 'Dropper Batch', desc: '1-year focused prep — 35% droppers improve rank by 50%+', link: '/classes' },
        { icon: '🔬', path: 'B.Sc Physics/Math + GATE', desc: 'DRDO, ISRO, BARC recruitment — research career', link: '/book' },
      ],
    },
    scholarships: [
      { name: 'IIT Fee Waiver (Family income < ₹1L)', amount: 'Full fee waiver', eligibility: 'Income < ₹1 lakh/year' },
      { name: 'IIT SC/ST Scholarship', amount: '₹1,250/month + fee waiver', eligibility: 'SC/ST admitted students' },
      { name: 'INSPIRE Scholarship (DST)', amount: '₹80,000/year', eligibility: 'Top 1% in Class 12 + science stream' },
    ],
  },
  {
    id: 'clat',
    name: 'CLAT',
    icon: '⚖️',
    category: 'Law',
    color: '#F5F3FF',
    accent: '#7C3AED',
    applicants: '70,000',
    seats: '2,500 (NLU)',
    govtSeats: '2,500',
    successRate: '3.6%',
    govtOdds: '3.6%',
    conducting: 'Consortium of NLUs',
    eligibility: 'Class 12 any stream, min 45% (Gen) / 40% (SC/ST)',
    pattern: '120 MCQs | 120 marks | 2hrs | Comprehension-based',
    syllabus: 'English, Current Affairs, Legal Reasoning, Logical Reasoning, Quantitative Techniques',
    importantDates: [
      { event: 'Registration', date: 'Aug–Nov 2024' },
      { event: 'Exam', date: 'Dec 1, 2024' },
      { event: 'Result', date: 'Dec 2024' },
      { event: 'Counseling', date: 'Jan 2025' },
    ],
    cutoff2024: [
      { category: 'General (NLU Delhi)', marks: '98–99/120' },
      { category: 'General (Other NLUs)', marks: '85–95/120' },
      { category: 'SC/ST', marks: '65–75/120' },
    ],
    topColleges: ['NLU Delhi (AILET)', 'NLU Bangalore', 'NLU Hyderabad', 'NLU Jodhpur', 'Symbiosis Law (Pune)'],
    careerPaths: ['LLB → Litigation (Advocate)', 'LLB → Corporate Lawyer (₹15–50L CTC)', 'LLB → Judiciary (Judge)', 'LLB → Legal Counsel (MNCs)', 'LLB → LLM Abroad (Harvard, Oxford)'],
    whatIfFail: {
      title: 'CLAT Nahi Hua? Yeh 8 Raaste Hain:',
      options: [
        { icon: '🏛️', path: 'State Law Colleges (3-yr LLB)', desc: 'After graduation — solid legal career, many top lawyers took this route', link: '/book' },
        { icon: '📚', path: 'Symbiosis / Amity Law School', desc: 'Private law schools — no CLAT needed, good placements', link: '/book' },
        { icon: '🔄', path: 'Retake CLAT next year', desc: 'CLAT is given at 17–18 — most toppers take 2nd attempt', link: '/classes' },
        { icon: '⚖️', path: 'AILET / MHCET Law / LSAT', desc: 'Other law entrance exams — NLU Delhi, Maharashtra, private colleges', link: '/book' },
        { icon: '📊', path: 'BA LLB via graduation route', desc: 'Complete BA then 3-yr LLB — same career outcomes', link: '/book' },
        { icon: '🌍', path: 'Law abroad (UK / USA)', desc: 'LLM from UK (1 year) after Indian LLB — international career', link: '/book' },
        { icon: '🏢', path: 'Company Secretary (CS)', desc: 'Corporate governance, compliance — high demand, no law school needed', link: '/book' },
        { icon: '📋', path: 'Legal Process Outsourcing (LPO)', desc: 'US/UK law firms outsource to India — good income without court work', link: '/book' },
      ],
    },
    scholarships: [
      { name: 'NLU SC/ST Scholarship', amount: 'Full fee waiver', eligibility: 'SC/ST students at NLUs' },
      { name: 'Bar Council Merit Scholarship', amount: '₹20,000/year', eligibility: 'Top rankers at state bar councils' },
    ],
  },
  {
    id: 'upsc',
    name: 'UPSC Civil Services',
    icon: '🏛️',
    category: 'Government',
    color: '#FFF1F2',
    accent: '#E11D48',
    applicants: '10,00,000',
    seats: '1,056',
    govtSeats: '1,056',
    successRate: '0.1%',
    govtOdds: '0.1%',
    conducting: 'Union Public Service Commission',
    eligibility: 'Any graduation degree, Age 21–32 (Gen) / 21–37 (SC/ST)',
    pattern: '3 Stages: Prelims (MCQ) → Mains (Descriptive) → Interview',
    syllabus: 'GS 1–4, Optional Subject, CSAT, Essay — 2500+ topics',
    importantDates: [
      { event: 'Notification', date: 'Feb 2025' },
      { event: 'Prelims', date: 'May 25, 2025' },
      { event: 'Mains', date: 'Sept 2025' },
      { event: 'Interview', date: 'Jan–April 2026' },
    ],
    cutoff2024: [
      { category: 'General', marks: 'Final cutoff ~900+/2025' },
      { category: 'OBC', marks: '~870+/2025' },
      { category: 'SC/ST', marks: '~820+/2025' },
    ],
    topColleges: ['Lal Bahadur Shastri NA (IAS Training)', 'SVPNPA (IPS)', 'IRSEE (IRS)', 'IFS Training'],
    careerPaths: ['IAS — District Collector, Secretary', 'IPS — SP, DIG, Commissioner', 'IFS — Ambassador, Diplomat', 'IRS — Income Tax, Customs', 'Other Central Services'],
    whatIfFail: {
      title: 'UPSC Nahi Hua? Alternatives:',
      options: [
        { icon: '🏢', path: 'State PCS (MPSC/RPSC etc)', desc: 'SDM, DSP, BDO level posts — excellent career, less competition', link: '/book' },
        { icon: '🏦', path: 'IBPS / RBI / SBI Officer', desc: 'Banking PO — good salary, job security, quick selection', link: '/book' },
        { icon: '🛡️', path: 'SSC CGL (Group B Officer)', desc: 'Inspector, Auditor, Assistant — central govt job', link: '/book' },
        { icon: '📊', path: 'CAT + IIM MBA', desc: 'Parallel high-value career — corporate leadership', link: '/book' },
        { icon: '⚖️', path: 'Judiciary (PCS-J)', desc: 'Civil Judge, Magistrate — law background advantage', link: '/book' },
        { icon: '🔬', path: 'Research / Think Tank', desc: 'Policy research, NGO leadership, international organizations (UN, World Bank)', link: '/book' },
      ],
    },
    scholarships: [
      { name: 'IAS Free Coaching (SC/ST) — Delhi Govt', amount: 'Full free coaching', eligibility: 'SC/ST, Delhi domicile' },
      { name: 'Nai Udaan (Minority)', amount: 'Free coaching + stipend', eligibility: 'Minority community, income < ₹6L' },
    ],
  },
  {
    id: 'nda',
    name: 'NDA / CDS',
    icon: '🎖️',
    category: 'Defense',
    color: '#ECFDF5',
    accent: '#059669',
    applicants: '5,00,000',
    seats: '400',
    govtSeats: '400',
    successRate: '0.08%',
    govtOdds: '0.08%',
    conducting: 'UPSC (NDA), UPSC (CDS)',
    eligibility: 'NDA: Class 12 PCM for Army/Navy/AF | CDS: Graduation, Age 19–24',
    pattern: 'NDA: Math (300) + GAT (600) = 900 marks + SSB Interview (900 marks)',
    syllabus: 'Math (Class 11–12), English, GK, Physics, Chemistry — plus SSB psychological tests',
    importantDates: [
      { event: 'NDA 1 Notification', date: 'Dec 2024' },
      { event: 'NDA 1 Exam', date: 'April 13, 2025' },
      { event: 'NDA 2 Notification', date: 'June 2025' },
      { event: 'NDA 2 Exam', date: 'Sept 2025' },
    ],
    cutoff2024: [
      { category: 'Army', marks: '360/900 (Written)' },
      { category: 'Navy', marks: '380/900 (Written)' },
      { category: 'Air Force', marks: '400/900 (Written)' },
    ],
    topColleges: ['NDA, Pune', 'OTA Chennai', 'IMA Dehradun', 'AFA Hyderabad', 'INS Zamorin'],
    careerPaths: ['Army Officer → Colonel, General', 'Navy Officer → Captain, Admiral', 'Air Force Pilot / Officer', 'Defense PSU (HAL, DRDO, BEL)', 'Ex-servicemen corporate jobs'],
    whatIfFail: {
      title: 'NDA Nahi Hua? Defense Alternatives:',
      options: [
        { icon: '🎖️', path: 'CDS (After Graduation)', desc: 'Combined Defense Services — IMA, OTA, Naval, Air Force Academy', link: '/book' },
        { icon: '🏋️', path: 'CAPF (BSF, CRPF, CISF)', desc: 'Central Armed Police Forces — SSC CPO exam, officer grade', link: '/book' },
        { icon: '🚔', path: 'State Police Officer (MPSC etc)', desc: 'DSP via state PCS — uniform service, good career', link: '/book' },
        { icon: '✈️', path: 'Commercial Pilot License', desc: 'Private pilot training — airline career without NDA', link: '/book' },
        { icon: '🔬', path: 'DRDO Scientist', desc: 'B.Tech + GATE → defense R&D career, government job', link: '/book' },
      ],
    },
    scholarships: [
      { name: 'Army Welfare Education Society', amount: '₹3,000–12,000/month', eligibility: 'Wards of Army personnel' },
    ],
  },
  {
    id: 'cat',
    name: 'CAT / MBA',
    icon: '📊',
    category: 'Management',
    color: '#FFF7ED',
    accent: '#EA580C',
    applicants: '3,30,000',
    seats: '4,500 (IIM)',
    govtSeats: '4,500',
    successRate: '1.36%',
    govtOdds: '1.36%',
    conducting: 'IIMs (rotating)',
    eligibility: 'Any graduation with 50% (Gen) / 45% (SC/ST), no age limit',
    pattern: '66 Qs | VARC + DILR + QA | 120 min | Sectional time limits',
    syllabus: 'Verbal Ability, Reading Comprehension, Data Interpretation, Logical Reasoning, Quantitative Aptitude',
    importantDates: [
      { event: 'Registration', date: 'Aug–Sept 2025' },
      { event: 'CAT Exam', date: 'Nov 2025' },
      { event: 'Result', date: 'Jan 2026' },
      { event: 'GDPI Rounds', date: 'Feb–April 2026' },
    ],
    cutoff2024: [
      { category: 'IIM Ahmedabad', marks: '99+ percentile' },
      { category: 'IIM Bangalore', marks: '98+ percentile' },
      { category: 'Other IIMs', marks: '85–95 percentile' },
    ],
    topColleges: ['IIM Ahmedabad', 'IIM Bangalore', 'IIM Calcutta', 'IIM Lucknow', 'FMS Delhi', 'MDI Gurgaon'],
    careerPaths: ['MBA Finance → Investment Banking, CFO', 'MBA Marketing → Brand Manager, CMO', 'MBA Operations → Supply Chain, Consulting', 'MBA HR → CHRO, Talent Leader', 'MBA Entrepreneurship → Startup Founder'],
    whatIfFail: {
      title: 'CAT Nahi Hua? MBA Alternatives:',
      options: [
        { icon: '📚', path: 'XAT / SNAP / IIFT / NMAT', desc: 'XLRI, Symbiosis, IIFT, Narsee Monjee — excellent B-schools', link: '/book' },
        { icon: '🌍', path: 'MBA Abroad (1-year)', desc: 'ISB Hyderabad, IIM Udaipur, UK / Europe 1-year MBA', link: '/book' },
        { icon: '📊', path: 'CFA / CPA / ACCA', desc: 'Finance certification — often beats MBA for finance careers', link: '/book' },
        { icon: '🔄', path: 'Retake with 1-year prep', desc: 'Most IIM students take CAT 2–3 times — normal path', link: '/classes' },
        { icon: '💼', path: 'Work 2-3 years first', desc: 'Work ex improves IIM chances + CAT percentile weight', link: '/book' },
      ],
    },
    scholarships: [
      { name: 'IIM Fee Waiver (Income < ₹6L)', amount: 'Partial fee waiver', eligibility: 'Family income below ₹6 lakh' },
      { name: 'Aditya Birla Scholarship', amount: '₹1.75L/year', eligibility: 'Top rankers at premier institutes' },
    ],
  },
]

const categories = ['All', 'Medical', 'Engineering', 'Law', 'Government', 'Defense', 'Management']

export default function ExamEngine() {
  const [selected, setSelected] = useState(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeTab, setActiveTab] = useState('overview')

  const filtered = activeCategory === 'All' ? exams : exams.filter(e => e.category === activeCategory)
  const exam = selected ? exams.find(e => e.id === selected) : null

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#F8FAFC', color: '#1E293B', all: 'revert', fontFamily: 'system-ui, sans-serif' }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0F172A, #1E3A5F)', padding: '56px 24px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.08 }}>
          <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1200&q=60" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: 20, padding: '6px 16px', marginBottom: 20 }}>
          <span style={{ color: '#F59E0B', fontSize: 13, fontWeight: 600 }}>🧠 India's Most Complete Exam Intelligence Platform</span>
        </div>
        <h1 style={{ fontSize: 'clamp(28px,5vw,50px)', fontWeight: 800, color: '#fff', marginBottom: 16, lineHeight: 1.2 }}>
          Har Exam Ki Poori <span style={{ color: '#F59E0B' }}>Sacchi Jankari</span>
        </h1>
        <p style={{ color: '#94A3B8', fontSize: 16, maxWidth: 600, margin: '0 auto 16px' }}>
          NEET se UPSC tak — odds, cutoffs, scholarships, aur sabse important: <strong style={{ color: '#F59E0B' }}>"Agar nahi hua toh kya?"</strong>
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
          {[['50+', 'Exams Covered'], ['12L+', 'NEET Seat Gap'], ['40/day', 'Student Suicides (solvable)'], ['350+', 'Career Paths']].map(([n, l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: '#F59E0B' }}>{n}</div>
              <div style={{ fontSize: 12, color: '#64748B' }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '32px 24px', display: 'grid', gridTemplateColumns: exam ? '320px 1fr' : '1fr', gap: 24 }}>

        {/* LEFT — Exam List */}
        <div>
          {/* Category Filter */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
            {categories.map(c => (
              <button key={c} onClick={() => setActiveCategory(c)} style={{
                padding: '6px 14px', borderRadius: 20, border: '1.5px solid',
                cursor: 'pointer', fontSize: 13, fontWeight: 500,
                borderColor: activeCategory === c ? '#1E40AF' : '#E2E8F0',
                background: activeCategory === c ? '#EFF6FF' : '#fff',
                color: activeCategory === c ? '#1E40AF' : '#374151',
              }}>{c}</button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: exam ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
            {filtered.map(e => (
              <div key={e.id} onClick={() => { setSelected(e.id); setActiveTab('overview') }} style={{
                background: '#fff', borderRadius: 16, padding: 20,
                border: `2px solid ${selected === e.id ? e.accent : '#E2E8F0'}`,
                cursor: 'pointer', transition: 'all 0.2s',
                boxShadow: selected === e.id ? `0 0 0 3px ${e.accent}20` : 'none',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <div style={{ width: 44, height: 44, borderRadius: 10, background: e.color, fontSize: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{e.icon}</div>
                    <div>
                      <h3 style={{ fontWeight: 700, fontSize: 16, color: '#0F172A', marginBottom: 2 }}>{e.name}</h3>
                      <span style={{ fontSize: 11, background: e.color, color: e.accent, padding: '2px 8px', borderRadius: 4, fontWeight: 600 }}>{e.category}</span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 18, fontWeight: 800, color: e.accent }}>{e.successRate}</div>
                    <div style={{ fontSize: 10, color: '#94A3B8' }}>success rate</div>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 12 }}>
                  <div style={{ background: '#F8FAFC', borderRadius: 8, padding: '8px 10px' }}>
                    <div style={{ color: '#94A3B8' }}>Applicants</div>
                    <div style={{ fontWeight: 700, color: '#0F172A' }}>{e.applicants}</div>
                  </div>
                  <div style={{ background: '#F8FAFC', borderRadius: 8, padding: '8px 10px' }}>
                    <div style={{ color: '#94A3B8' }}>Seats</div>
                    <div style={{ fontWeight: 700, color: '#0F172A' }}>{e.seats}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Exam Detail */}
        {exam && (
          <div style={{ background: '#fff', borderRadius: 20, border: '1px solid #E2E8F0', overflow: 'hidden', height: 'fit-content' }}>

            {/* Header */}
            <div style={{ background: `linear-gradient(135deg, ${exam.accent}, ${exam.accent}CC)`, padding: '28px 28px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                  <div style={{ width: 56, height: 56, borderRadius: 14, background: 'rgba(255,255,255,0.2)', fontSize: 30, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{exam.icon}</div>
                  <div>
                    <h2 style={{ fontWeight: 800, fontSize: 24, color: '#fff', marginBottom: 4 }}>{exam.name}</h2>
                    <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13 }}>{exam.conducting}</p>
                  </div>
                </div>
                <button onClick={() => setSelected(null)} style={{ background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff', width: 32, height: 32, borderRadius: '50%', cursor: 'pointer', fontSize: 16 }}>✕</button>
              </div>

              {/* Stats Row */}
              <div style={{ display: 'flex', gap: 1, background: 'rgba(0,0,0,0.2)', borderRadius: '12px 12px 0 0', overflow: 'hidden' }}>
                {[
                  { label: 'Applicants', value: exam.applicants },
                  { label: 'Total Seats', value: exam.seats },
                  { label: 'Success Rate', value: exam.successRate },
                ].map(s => (
                  <div key={s.label} style={{ flex: 1, padding: '12px 16px', background: 'rgba(255,255,255,0.1)', textAlign: 'center' }}>
                    <div style={{ fontSize: 18, fontWeight: 800, color: '#fff' }}>{s.value}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Tabs */}
              <div style={{ display: 'flex', gap: 2, marginTop: 2 }}>
                {['overview', 'dates', 'whatif', 'scholarships'].map(tab => (
                  <button key={tab} onClick={() => setActiveTab(tab)} style={{
                    flex: 1, padding: '10px 6px', border: 'none', cursor: 'pointer',
                    background: activeTab === tab ? '#fff' : 'transparent',
                    color: activeTab === tab ? exam.accent : 'rgba(255,255,255,0.7)',
                    fontWeight: 600, fontSize: 12,
                    borderRadius: activeTab === tab ? '8px 8px 0 0' : 0,
                  }}>
                    {tab === 'overview' ? '📋 Overview' : tab === 'dates' ? '📅 Dates' : tab === 'whatif' ? '🔄 What If' : '🎓 Scholarships'}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div style={{ padding: 28 }}>

              {/* OVERVIEW */}
              {activeTab === 'overview' && (
                <div>
                  <div style={{ marginBottom: 20 }}>
                    <h4 style={{ fontWeight: 700, color: '#0F172A', marginBottom: 8, fontSize: 15 }}>📝 Eligibility</h4>
                    <p style={{ color: '#475569', fontSize: 14, background: '#F8FAFC', padding: '10px 14px', borderRadius: 10, lineHeight: 1.6 }}>{exam.eligibility}</p>
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <h4 style={{ fontWeight: 700, color: '#0F172A', marginBottom: 8, fontSize: 15 }}>📄 Exam Pattern</h4>
                    <p style={{ color: '#475569', fontSize: 14, background: '#F8FAFC', padding: '10px 14px', borderRadius: 10, lineHeight: 1.6 }}>{exam.pattern}</p>
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <h4 style={{ fontWeight: 700, color: '#0F172A', marginBottom: 10, fontSize: 15 }}>🏆 Category-wise Cutoff 2024</h4>
                    {exam.cutoff2024.map(c => (
                      <div key={c.category} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: '#F8FAFC', borderRadius: 8, marginBottom: 6, fontSize: 14 }}>
                        <span style={{ color: '#374151' }}>{c.category}</span>
                        <span style={{ fontWeight: 700, color: exam.accent }}>{c.marks}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <h4 style={{ fontWeight: 700, color: '#0F172A', marginBottom: 10, fontSize: 15 }}>🎓 Top Colleges</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {exam.topColleges.map(c => (
                        <span key={c} style={{ background: exam.color, color: exam.accent, fontSize: 12, fontWeight: 600, padding: '5px 12px', borderRadius: 20 }}>{c}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, color: '#0F172A', marginBottom: 10, fontSize: 15 }}>🚀 Career Paths After This</h4>
                    {exam.careerPaths.map(c => (
                      <div key={c} style={{ display: 'flex', gap: 10, marginBottom: 8, fontSize: 14, color: '#374151' }}>
                        <span style={{ color: '#22C55E', fontWeight: 700 }}>→</span> {c}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* DATES */}
              {activeTab === 'dates' && (
                <div>
                  <h4 style={{ fontWeight: 700, color: '#0F172A', marginBottom: 16, fontSize: 15 }}>📅 Important Dates 2024–25</h4>
                  <div style={{ position: 'relative' }}>
                    {exam.importantDates.map((d, i) => (
                      <div key={d.event} style={{ display: 'flex', gap: 16, marginBottom: 20, position: 'relative' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <div style={{ width: 36, height: 36, borderRadius: '50%', background: exam.accent, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13, flexShrink: 0 }}>{i + 1}</div>
                          {i < exam.importantDates.length - 1 && <div style={{ width: 2, flex: 1, background: '#E2E8F0', minHeight: 20 }} />}
                        </div>
                        <div style={{ paddingTop: 6 }}>
                          <div style={{ fontWeight: 600, color: '#0F172A', fontSize: 15 }}>{d.event}</div>
                          <div style={{ color: exam.accent, fontWeight: 700, fontSize: 14, marginTop: 2 }}>{d.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: 12, padding: 16, marginTop: 8 }}>
                    <p style={{ color: '#92400E', fontSize: 13 }}>⚠️ Dates approximate. Always verify on official website before registration.</p>
                  </div>
                </div>
              )}

              {/* WHAT IF */}
              {activeTab === 'whatif' && (
                <div>
                  <div style={{ background: 'linear-gradient(135deg, #FFF1F2, #FFF)', border: '1px solid #FECDD3', borderRadius: 14, padding: 16, marginBottom: 20 }}>
                    <p style={{ color: '#9F1239', fontSize: 14, fontWeight: 600, lineHeight: 1.6 }}>
                      💡 Sacchi baat: Agar NEET mein 97% students ko MBBS seat nahi milti — toh failure nahi, system ki reality hai. <strong>Tumhara career khatam nahi hua.</strong>
                    </p>
                  </div>
                  <h4 style={{ fontWeight: 700, color: '#0F172A', marginBottom: 16, fontSize: 15 }}>{exam.whatIfFail.title}</h4>
                  <div style={{ display: 'grid', gap: 10 }}>
                    {exam.whatIfFail.options.map(opt => (
                      <Link to={opt.link} key={opt.path} style={{ textDecoration: 'none' }}>
                        <div style={{
                          display: 'flex', gap: 14, padding: '14px 16px',
                          background: '#F8FAFC', borderRadius: 12,
                          border: '1px solid #E2E8F0', cursor: 'pointer',
                          transition: 'all 0.2s',
                        }}
                          onMouseEnter={e => { e.currentTarget.style.background = exam.color; e.currentTarget.style.borderColor = exam.accent }}
                          onMouseLeave={e => { e.currentTarget.style.background = '#F8FAFC'; e.currentTarget.style.borderColor = '#E2E8F0' }}
                        >
                          <div style={{ fontSize: 24, flexShrink: 0 }}>{opt.icon}</div>
                          <div>
                            <div style={{ fontWeight: 700, color: '#0F172A', fontSize: 14, marginBottom: 3 }}>{opt.path}</div>
                            <div style={{ color: '#64748B', fontSize: 13, lineHeight: 1.5 }}>{opt.desc}</div>
                          </div>
                          <div style={{ marginLeft: 'auto', color: exam.accent, alignSelf: 'center', fontSize: 18 }}>→</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* SCHOLARSHIPS */}
              {activeTab === 'scholarships' && (
                <div>
                  <h4 style={{ fontWeight: 700, color: '#0F172A', marginBottom: 16, fontSize: 15 }}>🎓 Scholarships for This Exam</h4>
                  {exam.scholarships.map(s => (
                    <div key={s.name} style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 12, padding: 16, marginBottom: 12 }}>
                      <div style={{ fontWeight: 700, color: '#065F46', fontSize: 15, marginBottom: 4 }}>{s.name}</div>
                      <div style={{ display: 'flex', gap: 16, fontSize: 13 }}>
                        <span style={{ color: '#047857' }}>💰 {s.amount}</span>
                        <span style={{ color: '#374151' }}>✓ {s.eligibility}</span>
                      </div>
                    </div>
                  ))}
                  <div style={{ marginTop: 16 }}>
                    <Link to="/scholarships" style={{
                      display: 'block', textAlign: 'center', padding: '12px',
                      background: 'linear-gradient(135deg, #059669, #10B981)',
                      color: '#fff', borderRadius: 12, textDecoration: 'none',
                      fontWeight: 700, fontSize: 14,
                    }}>
                      See All 50+ Scholarships → Scholarship Finder
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* CTA */}
            <div style={{ padding: '0 28px 28px' }}>
              <Link to="/book" style={{
                display: 'block', textAlign: 'center', padding: '14px',
                background: `linear-gradient(135deg, ${exam.accent}, ${exam.accent}CC)`,
                color: '#fff', borderRadius: 12, textDecoration: 'none',
                fontWeight: 700, fontSize: 15,
              }}>
                Book Free Expert Session for {exam.name} →
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      {!exam && (
        <section style={{ background: 'linear-gradient(135deg, #1E40AF, #1D4ED8)', padding: '60px 24px', textAlign: 'center', marginTop: 16 }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 12 }}>Confused Kaunsa Exam Dena Chahiye?</h2>
          <p style={{ color: '#BFDBFE', fontSize: 16, marginBottom: 28 }}>Free 30-min session mein expert tumhari profile dekh ke best path suggest karega</p>
          <Link to="/book" style={{
            display: 'inline-block', padding: '16px 40px', borderRadius: 12,
            background: '#F59E0B', color: '#fff', textDecoration: 'none',
            fontWeight: 700, fontSize: 17,
          }}>Book Free Career Session →</Link>
        </section>
      )}

    </div>
  )
}
