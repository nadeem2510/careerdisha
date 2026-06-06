import { useState } from 'react'
import { Link } from 'react-router-dom'

const myths = [
  {
    myth: '"Doctor ya Engineer hi achha career hai"',
    reality: 'India mein 350+ viable careers hain. UX Designer, Climate Analyst, Space Engineer — sabka CTC doctor se zyada bhi ho sakta hai.',
    data: 'UX Designer avg CTC: ₹12–22L/5yr | MBBS doctor avg: ₹8–15L/5yr (private practice excluded)',
    icon: '🩺',
  },
  {
    myth: '"ITI/Polytechnic "log" ke liye hota hai"',
    reality: 'Gulf mein ek skilled electrician ₹3–5L/month kamata hai. Germany mein CNC machinist ko sponsorship milti hai. Degree se zyada skill matter karti hai.',
    data: 'ITI Electrician (Gulf): ₹36–60L/year | B.Tech fresher India: ₹3–6L/year',
    icon: '⚙️',
  },
  {
    myth: '"NEET fail matlab life khatam"',
    reality: '97.3% NEET applicants ko government MBBS seat nahi milti. BAMS, BDS, Pharma, Biotech, MBBS abroad — sab valid paths hain.',
    data: '2024: 23.3 lakh appeared, 60,000 govt MBBS seats = 97.4% ko alternative chahiye',
    icon: '📊',
  },
  {
    myth: '"Arts stream mein koi scope nahi"',
    reality: 'Psychology, Law (LLB), Journalism, UX Design, Civil Services, Content Creation — sab Arts stream se jaate hain. IAS toppers ka bada percentage Arts wale hain.',
    data: 'UPSC 2024: Top 10 mein 6 Humanities background ke — 0 engineers',
    icon: '🎨',
  },
  {
    myth: '"Company job se better koi option nahi"',
    reality: 'Content creators, freelancers, consultants — khud ke boss. India mein 1 crore+ creators hain, top ones ₹50L–5Cr/year earn karte hain.',
    data: 'Creator economy India: ₹2,200 crore (2024), growing at 25% CAGR',
    icon: '💡',
  },
  {
    myth: '"Bahar padhna waste of money hai"',
    reality: 'Germany mein public university education almost FREE hai. Canada PR path clear hai. MBBS Russia mein ₹25–40L total vs India private mein ₹80L–1.5Cr.',
    data: 'Germany tuition: ~₹0–50K/year | India private engineering: ₹8–15L/year',
    icon: '🌍',
  },
]

const careerComparisons = [
  {
    title: 'Medical Career',
    options: [
      { name: 'MBBS (Govt)', cost: '₹5–10L total', time: '5.5 yrs', yr1: '₹6–12L', yr10: '₹25–80L', note: 'Hard to get, worth it' },
      { name: 'MBBS (Private)', cost: '₹80L–1.5Cr', time: '5.5 yrs', yr1: '₹6–12L', yr10: '₹30–80L', note: 'Very expensive loan burden' },
      { name: 'MBBS Abroad', cost: '₹25–45L total', time: '6 yrs', yr1: '₹6–12L', yr10: '₹25–70L', note: 'FMGE exam required after return' },
      { name: 'BDS Dental', cost: '₹10–40L', time: '5 yrs', yr1: '₹4–8L', yr10: '₹20–60L', note: 'Good scope, lower competition' },
      { name: 'B.Pharma', cost: '₹3–10L', time: '4 yrs', yr1: '₹3–6L', yr10: '₹10–25L', note: 'Pharma industry growing fast' },
    ],
  },
  {
    title: 'Engineering Career',
    options: [
      { name: 'IIT B.Tech', cost: '₹9–12L total', time: '4 yrs', yr1: '₹12–25L', yr10: '₹40–100L+', note: 'Elite, hard to get in' },
      { name: 'NIT B.Tech', cost: '₹6–10L total', time: '4 yrs', yr1: '₹8–18L', yr10: '₹25–60L', note: 'Excellent value for money' },
      { name: 'Private B.Tech', cost: '₹30–60L', time: '4 yrs', yr1: '₹3–8L', yr10: '₹10–30L', note: 'Varies hugely by college' },
      { name: 'B.Tech Abroad (Germany)', cost: '₹5–15L total', time: '4 yrs', yr1: '₹15–30L (Euro)', yr10: '₹40–80L', note: 'Near-free education, PR path' },
      { name: 'Diploma + Lateral Entry', cost: '₹2–6L', time: '3+2 yrs', yr1: '₹3–7L', yr10: '₹15–35L', note: 'Smart shortcut path' },
    ],
  },
]

const faqItems = [
  {
    q: 'Bachche ka NEET score achha nahi aaya — abhi kya karein?',
    a: 'Ghabrao mat. 3 options hain: (1) Ek aur attempt — dropper batch ke saath structured prep, 40% improve karte hain. (2) MBBS abroad — NMC approved college select karo carefully (FMGE pass rate dekho). (3) Alternative medical career — BDS, BAMS, B.Pharma, Nursing — sab valid medical careers hain. Hum mil ke decide karenge.',
  },
  {
    q: 'Beta keh raha hai gaming/YouTube career banana hai — kya karein?',
    a: 'Directly "nahi" mat kaho. Pehle data dekho: India gaming industry ₹60,000 crore by 2027. Content creators crore mein earn karte hain. LEKIN: structured approach chahiye. Game Developer (₹12–24L CTC) vs just playing games — difference hai. Hum ek free session mein realistic roadmap banate hain jisme passion + income dono ho.',
  },
  {
    q: 'Arts stream choose karna chahta/chahti hai — future kya hoga?',
    a: 'Arts stream se: IAS/IPS officer, Lawyer (NLU), Journalist, UX Designer, Psychologist, Content Strategist, HR Leader — sab possible hai. UPSC 2024 mein top 10 mein 6 Humanities background ke the. Data zyada important hai opinion se.',
  },
  {
    q: 'Loan kitna sahi hai education ke liye?',
    a: 'Rule of thumb: Education loan aapki expected first year salary se zyada nahi hona chahiye. Example: MBBS govt seat pe ₹5L loan — bilkul sahi. Private MBBS pe ₹1Cr loan — risky (doctor first year ₹8–12L kamaata hai, EMI ₹80K/month ho sakti hai). Hum free session mein ROI calculation karte hain.',
  },
  {
    q: 'Coaching center ke liye ₹1–2 lakh kharcha sahi hai?',
    a: 'Depends on student. Agar student genuinely committed hai aur subject basics strong hain — haan, structured coaching helpful hai. Agar basics weak hain, toh pehle foundation strong karo. Hum coaching select karne mein bhi help karte hain — location, faculty, batch size sab matter karta hai.',
  },
]

export default function ParentPortal() {
  const [activeMyth, setActiveMyth] = useState(null)
  const [activeComparison, setActiveComparison] = useState(0)
  const [activeFaq, setActiveFaq] = useState(null)
  const [quizStep, setQuizStep] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState({})
  const [quizDone, setQuizDone] = useState(false)

  const quizQuestions = [
    {
      q: 'Aapke bachche ki current class kya hai?',
      key: 'class',
      opts: ['Class 8–9', 'Class 10', 'Class 11–12', 'Dropper/College student'],
    },
    {
      q: 'Kaunsa exam target kar rahe hain?',
      key: 'exam',
      opts: ['NEET', 'JEE', 'CLAT/Law', 'Abhi decide nahi', 'Koi competitive exam nahi'],
    },
    {
      q: 'Sabse badi concern kya hai abhi?',
      key: 'concern',
      opts: ['Exam score / rank', 'College selection', 'Career confusion', 'Financial planning (fees/loan)', 'Mental stress / pressure'],
    },
  ]

  const handleQuiz = (key, val) => {
    const newAns = { ...quizAnswers, [key]: val }
    setQuizAnswers(newAns)
    if (quizStep < quizQuestions.length - 1) setQuizStep(s => s + 1)
    else setQuizDone(true)
  }

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#F8FAFC', all: 'revert', fontFamily: 'system-ui, sans-serif' }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #7C3AED, #6D28D9)', padding: '56px 24px', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', gap: 8, alignItems: 'center', background: 'rgba(255,255,255,0.1)', borderRadius: 20, padding: '6px 16px', marginBottom: 16 }}>
          <span style={{ color: '#DDD6FE', fontSize: 13, fontWeight: 600 }}>👨‍👩‍👧 Parents ke Liye — Hindi mein</span>
        </div>
        <h1 style={{ fontSize: 'clamp(26px,4vw,48px)', fontWeight: 800, color: '#fff', marginBottom: 12, lineHeight: 1.2 }}>
          Aap Chahte Hain Best for Your Child<br />
          <span style={{ color: '#C4B5FD' }}>Hum Data Denge, Decision Tumhara</span>
        </h1>
        <p style={{ color: '#DDD6FE', fontSize: 15, maxWidth: 600, margin: '0 auto 28px', lineHeight: 1.7 }}>
          92% parents ke paas outdated career information hai. NEET/JEE ke baad bhi 300+ careers exist karte hain. Yahan sab kuch simple, Hindi mein, data ke saath.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#quiz" style={{ padding: '14px 28px', borderRadius: 12, background: '#F59E0B', color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
            2-Minute Quick Check →
          </a>
          <Link to="/book" style={{ padding: '14px 28px', borderRadius: 12, border: '1.5px solid rgba(255,255,255,0.3)', color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: 15, background: 'rgba(255,255,255,0.1)' }}>
            Free Parent Session Book Karo
          </Link>
        </div>
      </section>

      {/* Quick Quiz */}
      <section id="quiz" style={{ padding: '56px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: '#0F172A', marginBottom: 8 }}>Aapke Bachche Ke Liye Kya Best Hai?</h2>
            <p style={{ color: '#64748B' }}>3 sawaalon mein personalized guidance</p>
          </div>

          {!quizDone ? (
            <div style={{ background: '#F8FAFC', borderRadius: 20, padding: 32, border: '1px solid #E2E8F0' }}>
              {/* Progress */}
              <div style={{ marginBottom: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#64748B', marginBottom: 8 }}>
                  <span>Question {quizStep + 1} of {quizQuestions.length}</span>
                  <span>{Math.round(((quizStep) / quizQuestions.length) * 100)}% done</span>
                </div>
                <div style={{ height: 6, background: '#E2E8F0', borderRadius: 3 }}>
                  <div style={{ height: '100%', borderRadius: 3, width: `${(quizStep / quizQuestions.length) * 100}%`, background: 'linear-gradient(135deg, #7C3AED, #6D28D9)', transition: 'width 0.3s' }} />
                </div>
              </div>

              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0F172A', marginBottom: 20 }}>
                {quizQuestions[quizStep].q}
              </h3>
              <div style={{ display: 'grid', gap: 10 }}>
                {quizQuestions[quizStep].opts.map(opt => (
                  <button key={opt} onClick={() => handleQuiz(quizQuestions[quizStep].key, opt)} style={{
                    padding: '14px 18px', borderRadius: 12,
                    border: '2px solid #E2E8F0', background: '#fff',
                    cursor: 'pointer', textAlign: 'left', fontSize: 15,
                    fontWeight: 500, color: '#374151', transition: 'all 0.15s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#7C3AED'; e.currentTarget.style.background = '#F5F3FF' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.background = '#fff' }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div style={{ background: '#F5F3FF', border: '2px solid #C4B5FD', borderRadius: 20, padding: 32, textAlign: 'center' }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: '#4C1D95', marginBottom: 12 }}>Tumhara Profile Ready!</h3>
              <div style={{ background: '#fff', borderRadius: 14, padding: 20, marginBottom: 20, textAlign: 'left' }}>
                {Object.entries(quizAnswers).map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', gap: 12, marginBottom: 8, fontSize: 14 }}>
                    <span style={{ color: '#7C3AED', fontWeight: 700 }}>✓</span>
                    <span style={{ color: '#374151' }}>{v}</span>
                  </div>
                ))}
              </div>
              <p style={{ color: '#6D28D9', fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>
                Ek free 30-minute session mein hum specifically <strong>{quizAnswers.concern}</strong> pe focus karenge. Certified counselor tumse aur bachche se milenge.
              </p>
              <Link to="/book" style={{
                display: 'inline-block', padding: '14px 32px', borderRadius: 12,
                background: 'linear-gradient(135deg, #7C3AED, #6D28D9)',
                color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 16,
              }}>Free Session Book Karo →</Link>
              <button onClick={() => { setQuizDone(false); setQuizStep(0); setQuizAnswers({}) }} style={{ display: 'block', margin: '12px auto 0', background: 'none', border: 'none', color: '#7C3AED', cursor: 'pointer', fontSize: 13 }}>
                Dobara karo
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Myths Section */}
      <section style={{ padding: '56px 24px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#7C3AED', textTransform: 'uppercase', letterSpacing: 1 }}>Myths vs Reality</span>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: '#0F172A', marginTop: 8, marginBottom: 8 }}>Jo Galat Sunते Aaye Ho — Sacchi Baat</h2>
            <p style={{ color: '#64748B' }}>Data aur facts ke saath — opinion nahi</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16 }}>
            {myths.map((m, i) => (
              <div key={i} onClick={() => setActiveMyth(activeMyth === i ? null : i)} style={{
                background: '#fff', borderRadius: 16, padding: 22, cursor: 'pointer',
                border: `2px solid ${activeMyth === i ? '#7C3AED' : '#E2E8F0'}`,
                boxShadow: activeMyth === i ? '0 0 0 3px rgba(124,58,237,0.1)' : 'none',
                transition: 'all 0.2s',
              }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: activeMyth === i ? 16 : 0 }}>
                  <span style={{ fontSize: 28, flexShrink: 0 }}>{m.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                      <span style={{ background: '#FEF2F2', color: '#DC2626', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 10 }}>❌ Myth</span>
                    </div>
                    <p style={{ fontWeight: 600, color: '#374151', fontSize: 14, lineHeight: 1.5 }}>{m.myth}</p>
                  </div>
                  <span style={{ color: '#7C3AED', fontSize: 18 }}>{activeMyth === i ? '▲' : '▼'}</span>
                </div>

                {activeMyth === i && (
                  <div>
                    <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 12, padding: 14, marginBottom: 10 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: '#059669', marginBottom: 4 }}>✅ REALITY</div>
                      <p style={{ color: '#065F46', fontSize: 14, lineHeight: 1.6 }}>{m.reality}</p>
                    </div>
                    <div style={{ background: '#EFF6FF', borderRadius: 10, padding: '8px 12px' }}>
                      <span style={{ fontSize: 11, fontWeight: 600, color: '#1E40AF' }}>📊 Data: </span>
                      <span style={{ fontSize: 12, color: '#374151' }}>{m.data}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Cost Comparison */}
      <section style={{ padding: '56px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: '#0F172A', marginBottom: 8 }}>💰 Career Cost vs Earning — Real Data</h2>
            <p style={{ color: '#64748B' }}>Fees kitni, salary kitni, ROI kitna — honest comparison</p>
          </div>

          {/* Tab selector */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 24, justifyContent: 'center' }}>
            {careerComparisons.map((c, i) => (
              <button key={c.title} onClick={() => setActiveComparison(i)} style={{
                padding: '10px 24px', borderRadius: 20, border: '2px solid',
                cursor: 'pointer', fontWeight: 600, fontSize: 14,
                borderColor: activeComparison === i ? '#7C3AED' : '#E2E8F0',
                background: activeComparison === i ? '#F5F3FF' : '#fff',
                color: activeComparison === i ? '#7C3AED' : '#374151',
              }}>{c.title}</button>
            ))}
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 16, overflow: 'hidden', border: '1px solid #E2E8F0' }}>
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #7C3AED, #6D28D9)' }}>
                  {['Option', 'Total Cost', 'Duration', 'Year 1 Salary', 'Year 10 Salary', 'Note'].map(h => (
                    <th key={h} style={{ padding: '14px 16px', color: '#fff', fontWeight: 700, fontSize: 13, textAlign: 'left', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {careerComparisons[activeComparison].options.map((opt, i) => (
                  <tr key={opt.name} style={{ background: i % 2 === 0 ? '#F8FAFC' : '#fff', borderBottom: '1px solid #F1F5F9' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 700, color: '#0F172A', fontSize: 14 }}>{opt.name}</td>
                    <td style={{ padding: '14px 16px', color: '#DC2626', fontWeight: 600, fontSize: 14 }}>{opt.cost}</td>
                    <td style={{ padding: '14px 16px', color: '#374151', fontSize: 13 }}>{opt.time}</td>
                    <td style={{ padding: '14px 16px', color: '#059669', fontWeight: 600, fontSize: 14 }}>{opt.yr1}</td>
                    <td style={{ padding: '14px 16px', color: '#1E40AF', fontWeight: 700, fontSize: 14 }}>{opt.yr10}</td>
                    <td style={{ padding: '14px 16px', color: '#64748B', fontSize: 12 }}>{opt.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: 12, padding: 16, marginTop: 16 }}>
            <p style={{ color: '#92400E', fontSize: 13 }}>
              💡 <strong>CareerDisha Tip:</strong> Salary figures approximate hain. Actual outcome depends on student's performance, college quality, and specialization. Hum free session mein aapke specific case ke liye realistic projection denge.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '56px 24px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: '#0F172A', marginBottom: 8 }}>Parents Ke Common Sawaal</h2>
            <p style={{ color: '#64748B' }}>Real situations, honest answers</p>
          </div>
          {faqItems.map((faq, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 14, marginBottom: 12, border: `1px solid ${activeFaq === i ? '#C4B5FD' : '#E2E8F0'}`, overflow: 'hidden' }}>
              <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} style={{
                width: '100%', padding: '18px 20px', background: 'none', border: 'none',
                cursor: 'pointer', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span style={{ fontWeight: 600, color: '#0F172A', fontSize: 15, lineHeight: 1.4, paddingRight: 16 }}>❓ {faq.q}</span>
                <span style={{ color: '#7C3AED', fontSize: 18, flexShrink: 0 }}>{activeFaq === i ? '▲' : '▼'}</span>
              </button>
              {activeFaq === i && (
                <div style={{ padding: '0 20px 20px', color: '#374151', fontSize: 14, lineHeight: 1.8, borderTop: '1px solid #F1F5F9' }}>
                  <p style={{ marginTop: 12 }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Trust Signals */}
      <section style={{ background: '#fff', padding: '40px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: '#0F172A', marginBottom: 24 }}>Parents Ka Hamare Baare Mein</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {[
              { name: 'Suresh Patil, Pune', text: '"Mujhe lagta tha NEET hi ek option hai. Session ke baad pata chala BAMS bhi utna hi valuable hai. Beta ab khush hai BAMS mein."', child: 'Son in BAMS, Pune' },
              { name: 'Kavita Sharma, Nagpur', text: '"Beti gaming career mein jaana chahti thi. Pehle dar laga, par counselor ne Game Developer ka roadmap dikhaya. Ab MAANG company mein ₹18L pakad rahi hai."', child: 'Daughter: Game Developer' },
              { name: 'Ramesh Desai, Kolhapur', text: '"Financial guidance ke liye aaye the — ITI ke baad Gulf ka scope dikha. Bete ka placement ho gaya Dubai mein. Family income double ho gayi."', child: 'Son: Electrician, Dubai' },
            ].map(t => (
              <div key={t.name} style={{ background: '#F8FAFC', borderRadius: 16, padding: 24, border: '1px solid #E2E8F0', textAlign: 'left' }}>
                <div style={{ display: 'flex', gap: 3, marginBottom: 12 }}>{[...Array(5)].map((_, j) => <span key={j} style={{ color: '#F59E0B' }}>★</span>)}</div>
                <p style={{ color: '#374151', fontSize: 14, lineHeight: 1.7, fontStyle: 'italic', marginBottom: 16 }}>"{t.text}"</p>
                <div style={{ fontWeight: 700, color: '#0F172A', fontSize: 14 }}>{t.name}</div>
                <div style={{ fontSize: 12, color: '#059669' }}>✓ {t.child}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: 'linear-gradient(135deg, #7C3AED, #6D28D9)', padding: '64px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 32, fontWeight: 800, color: '#fff', marginBottom: 12 }}>
          Aur Sawaal Hain? Baat Karte Hain
        </h2>
        <p style={{ color: '#DDD6FE', fontSize: 16, marginBottom: 32, maxWidth: 560, margin: '0 auto 32px', lineHeight: 1.7 }}>
          Free 30-minute parent session — tumhare bachche ki specific situation ke baare mein. Koi pressure nahi, koi fee nahi.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/book" style={{ padding: '16px 36px', borderRadius: 12, background: '#F59E0B', color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 17 }}>
            Book Free Parent Session →
          </Link>
          <a href="tel:9876543210" style={{ padding: '16px 28px', borderRadius: 12, border: '1.5px solid rgba(255,255,255,0.3)', color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: 16, background: 'rgba(255,255,255,0.1)' }}>
            📞 Call Us Now
          </a>
        </div>
        <p style={{ color: '#C4B5FD', fontSize: 13, marginTop: 16 }}>
          ✓ Hindi mein available &nbsp;&nbsp; ✓ No sales pitch &nbsp;&nbsp; ✓ Data-driven guidance
        </p>
      </section>

    </div>
  )
}
