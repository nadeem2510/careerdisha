import { useState } from 'react'
import { Link } from 'react-router-dom'

const careers = [
  // AI / Tech
  { id: 1, title: 'AI/ML Engineer', icon: '🤖', category: 'Tech', stream: ['PCM', 'Computer Science'], salary1yr: '₹6–10L', salary5yr: '₹18–35L', salary10yr: '₹40–80L', demand: 'Very High', growth: '+45%', known: 20, companies: ['Google', 'Microsoft', 'Flipkart', 'Infosys', 'Razorpay'], education: 'B.Tech CS/IT + ML specialization OR B.Sc + online courses', tag: '🔥 Hottest', tagColor: '#DC2626', desc: 'Machines ko sikhao sochna — AI products banao jo crore logo ki life badlein. ChatGPT jaisi technology banane waale log.', dayInLife: 'Data process karo, models train karo, Python code likho, experiments run karo. 80% work computer ke saath.', skills: ['Python', 'TensorFlow/PyTorch', 'Statistics', 'SQL', 'Problem Solving'] },
  { id: 2, title: 'Cybersecurity Analyst', icon: '🛡️', category: 'Tech', stream: ['PCM', 'Computer Science'], salary1yr: '₹5–8L', salary5yr: '₹15–28L', salary10yr: '₹30–60L', demand: 'Very High', growth: '+40%', known: 8, companies: ['TCS', 'Wipro', 'Banks', 'CERT-In', 'Startups'], education: 'B.Tech + CEH/CISSP certification OR B.Sc Computer Science', tag: '📈 High Demand', tagColor: '#1E40AF', desc: 'India mein 3000+ cyberattacks roz hote hain. Digital India ki rakhwali karo. Hackers ko rokne waale become karo.', dayInLife: 'Security systems monitor karo, vulnerabilities find karo, incident respond karo, reports banao.', skills: ['Ethical Hacking', 'Network Security', 'Python', 'Linux', 'Penetration Testing'] },
  { id: 3, title: 'UX/UI Designer', icon: '🎨', category: 'Design', stream: ['Any Stream'], salary1yr: '₹4–7L', salary5yr: '₹12–22L', salary10yr: '₹25–45L', demand: 'High', growth: '+35%', known: 12, companies: ['Swiggy', 'Zomato', 'CRED', 'Amazon', 'Every Startup'], education: 'Any degree + UX portfolio (B.Des preferred but not mandatory)', tag: '💡 No PCM Needed', tagColor: '#7C3AED', desc: 'Apps aur websites ko beautiful aur easy banana. Har product mein designer hota hai. Arts ya commerce background bhi okay.', dayInLife: 'User research karo, wireframes banao, Figma mein design karo, developer se coordinate karo.', skills: ['Figma', 'User Research', 'Prototyping', 'Wireframing', 'Design Thinking'] },

  // Space / Defense Tech
  { id: 4, title: 'Space/Satellite Engineer', icon: '🚀', category: 'Space', stream: ['PCM'], salary1yr: '₹5–9L', salary5yr: '₹15–30L', salary10yr: '₹35–65L', demand: 'Growing Fast', growth: '+60%', known: 5, companies: ['ISRO', 'Skyroot', 'Agnikul', 'DRDO', 'L&T Defense'], education: 'B.Tech Aerospace/Electronics/Mechanical + GATE optional', tag: '🌌 Future', tagColor: '#0891B2', desc: 'India mein 400+ space startups hain. ₹1000 crore govt VC fund. Chandrayaan banane waali next generation bano.', dayInLife: 'Satellite systems design karo, simulations chalao, launch preparations karo, data analyze karo.', skills: ['Aerospace Basics', 'MATLAB', 'C/C++', 'Systems Engineering', 'Problem Solving'] },

  // Climate / Green
  { id: 5, title: 'Climate Tech / ESG Analyst', icon: '🌱', category: 'Climate', stream: ['Any Stream'], salary1yr: '₹4–8L', salary5yr: '₹12–20L', salary10yr: '₹22–40L', demand: 'High', growth: '+50%', known: 3, companies: ['Tata Power', 'Adani Green', 'ReNew', 'Banks', 'Consulting Firms'], education: 'Any degree + ESG certification OR Environmental Science + MBA', tag: '🌍 Impact Career', tagColor: '#059669', desc: 'India 500GW clean energy chahta hai by 2030 — 8 million green jobs create honge. Planet bachao, career banao.', dayInLife: 'Carbon footprint calculate karo, sustainability reports banao, companies ko advise karo, data analyze karo.', skills: ['Sustainability Basics', 'Data Analysis', 'Report Writing', 'Excel', 'ESG Frameworks'] },
  { id: 6, title: 'Solar Energy Engineer', icon: '☀️', category: 'Climate', stream: ['PCM'], salary1yr: '₹3.5–6L', salary5yr: '₹10–18L', salary10yr: '₹20–35L', demand: 'Very High', growth: '+55%', known: 8, companies: ['Waaree', 'Adani Solar', 'NTPC Solar', 'Tata Power', 'SolarEdge India'], education: 'B.Tech Electrical/Mechanical + Solar PV courses OR Diploma + MNRE certification', tag: '⚡ Booming', tagColor: '#D97706', desc: 'India ka solar capacity 2030 tak 300GW. ITI bhi okay, B.Tech bhi. Gulf aur Middle East demand enormous hai.', dayInLife: 'Solar panel install karo, system design karo, maintenance karo, performance monitor karo.', skills: ['Electrical Basics', 'Solar PV Design', 'AutoCAD', 'Site Assessment', 'Safety Protocols'] },

  // Healthcare
  { id: 7, title: 'Mental Health Counselor', icon: '🧠', category: 'Healthcare', stream: ['Any Stream'], salary1yr: '₹3–5L', salary5yr: '₹8–18L', salary10yr: '₹20–40L', demand: 'Very High', growth: '+70%', known: 10, companies: ['Hospitals', 'NGOs', 'Schools', 'Corporate HR', 'Private Practice'], education: 'BA/BSc Psychology + MA Psychology + RCI registration', tag: '❤️ India Needs You', tagColor: '#E11D48', desc: 'India mein 1 psychiatrist per 2 lakh log. Mental health crisis post-COVID. 40 students roz suicide karte hain. Ye gap fill karo.', dayInLife: 'Clients se baat karo, therapy sessions conduct karo, notes likho, group sessions facilitate karo.', skills: ['Empathy', 'Active Listening', 'Psychology Knowledge', 'CBT Techniques', 'Report Writing'] },
  { id: 8, title: 'Biotech / Pharma Researcher', icon: '🧬', category: 'Healthcare', stream: ['PCB', 'PCM'], salary1yr: '₹4–7L', salary5yr: '₹10–20L', salary10yr: '₹22–45L', demand: 'High', growth: '+30%', known: 15, companies: ['Cipla', 'Sun Pharma', 'Dr. Reddy\'s', 'CSIR Labs', 'IISc'], education: 'B.Sc Biotechnology/Biochemistry + M.Sc OR B.Pharma + M.Pharma', tag: '🔬 NEET Alternative', tagColor: '#7C3AED', desc: 'Covid vaccines, cancer drugs, genetic testing — yeh sab banate hain. NEET alternative mein best career.', dayInLife: 'Lab mein experiments, data collection, publications likhna, quality testing, government regulatory work.', skills: ['Lab Skills', 'Data Analysis', 'Research Writing', 'Cell Biology', 'Bioinformatics Basics'] },

  // Gaming / Creator
  { id: 9, title: 'Game Developer', icon: '🎮', category: 'Gaming', stream: ['PCM', 'Computer Science'], salary1yr: '₹4–7L', salary5yr: '₹12–24L', salary10yr: '₹25–50L', demand: 'High', growth: '+40%', known: 12, companies: ['Dream11', 'Mobile Premier League', 'Nazara', 'EA India', 'Jio Games'], education: 'B.Tech + Unity/Unreal self-learning OR B.Sc + game dev portfolio', tag: '🕹️ Passion + Pay', tagColor: '#7C3AED', desc: 'India gaming industry ₹60,000 crore by 2027. Sirf player mat bano — creator bano. Portfolio > degree.', dayInLife: 'Game mechanics code karo, Unity mein scenes banao, bug fix karo, team ke saath design discuss karo.', skills: ['Unity / Unreal Engine', 'C# / C++', 'Game Design', '3D Modeling Basics', 'Problem Solving'] },
  { id: 10, title: 'Content Creator / YouTuber', icon: '📱', category: 'Creator', stream: ['Any Stream'], salary1yr: '₹1–5L', salary5yr: '₹10–50L', salary10yr: '₹30L–Unlimited', demand: 'Growing', growth: '+80%', known: 40, companies: ['Self / Brand Deals / YouTube / Instagram / Agencies'], education: 'Koi fixed degree nahi — creativity + consistency required. Media/Mass Comm helpful.', tag: '🎬 No Degree Needed', tagColor: '#DC2626', desc: 'India mein 1 crore+ creators hain — lekin quality creators ki shortage hai. Structured approach se ₹10–50L in 3–5 years possible.', dayInLife: 'Script likho, shoot karo, edit karo, engage with audience, brand deals negotiate karo.', skills: ['Content Strategy', 'Video Editing', 'Storytelling', 'SEO', 'Consistency'] },

  // AgriTech / Rural
  { id: 11, title: 'AgriTech Professional', icon: '🌾', category: 'Agriculture', stream: ['Any Stream'], salary1yr: '₹3–6L', salary5yr: '₹8–18L', salary10yr: '₹18–35L', demand: 'Growing Fast', growth: '+45%', known: 5, companies: ['AgroStar', 'BigHaat', 'DeHaat', 'Ninjacart', 'Jivabhumi'], education: 'B.Sc Agriculture OR Any degree + agritech interest', tag: '🌱 Rural Opportunity', tagColor: '#059669', desc: '10,000 agritech startups by 2030. Rural India ka tech transformation — insider ho toh advantage hai. Drone operator, supply chain, rural sales.', dayInLife: 'Farmers se meet karo, tech solutions demonstrate karo, data collect karo, supply chain manage karo.', skills: ['Agriculture Basics', 'Rural Communication', 'Data Collection', 'Tech Comfort', 'Problem Solving'] },

  // Vocational Premium
  { id: 12, title: 'CNC Machinist / Mechatronics', icon: '⚙️', category: 'Vocational', stream: ['ITI', 'Polytechnic'], salary1yr: '₹2.5–4L (India)', salary5yr: '₹6–12L (India) / ₹25–40L (Gulf)', salary10yr: '₹35–60L (Gulf / Germany)', demand: 'Very High Abroad', growth: '+35%', known: 8, companies: ['Mahindra', 'Tata Motors', 'L&T', 'Gulf MNCs', 'German Companies'], education: 'ITI Machinist / Fitter OR Polytechnic Mechanical → Diploma', tag: '✈️ Gulf Mein ₹40L/yr', tagColor: '#D97706', desc: 'Germany aur Gulf mein skilled machinists ki enormous demand hai. ITI + 3 years experience + NAPS certification = ₹3–5L/month abroad.', dayInLife: 'CNC machines operate karo, precision parts manufacture karo, quality check karo, maintenance karo.', skills: ['CNC Operation', 'Blueprint Reading', 'Metrology', 'CAD Basics', 'Safety'] },
]

const categories = ['All', 'Tech', 'Design', 'Space', 'Climate', 'Healthcare', 'Gaming', 'Creator', 'Agriculture', 'Vocational']
const streams = ['All Streams', 'PCM', 'PCB', 'Computer Science', 'Any Stream', 'ITI', 'Polytechnic']

export default function Careers2030() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeStream, setActiveStream] = useState('All Streams')
  const [selected, setSelected] = useState(null)

  const filtered = careers.filter(c => {
    if (activeCategory !== 'All' && c.category !== activeCategory) return false
    if (activeStream !== 'All Streams' && !c.stream.includes(activeStream) && !c.stream.includes('Any Stream')) return false
    return true
  })

  const career = selected ? careers.find(c => c.id === selected) : null

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#F8FAFC', all: 'revert', fontFamily: 'system-ui, sans-serif' }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0F172A, #1E3A5F, #0F172A)', padding: '56px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.07 }}>
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=60" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ display: 'inline-flex', gap: 8, alignItems: 'center', background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: 20, padding: '6px 16px', marginBottom: 16 }}>
          <span style={{ color: '#F59E0B', fontSize: 13, fontWeight: 600 }}>🚀 Careers That Will Dominate 2030 India</span>
        </div>
        <h1 style={{ fontSize: 'clamp(26px,4vw,50px)', fontWeight: 800, color: '#fff', marginBottom: 12, lineHeight: 1.2 }}>
          Jo Careers <span style={{ color: '#F59E0B' }}>Exist Karte Hain</span><br />
          Jo Parents <span style={{ color: '#FCA5A5' }}>Nahi Jaante</span>
        </h1>
        <p style={{ color: '#94A3B8', fontSize: 15, maxWidth: 600, margin: '0 auto 24px' }}>
          AI Engineer, Climate Analyst, Space Startup, Mental Health Counselor, AgriTech — yeh sab real careers hain, real salaries hain. Sirf NEET/JEE tunnel nahi hai.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
          {[['350+', 'Career Options'], ['₹3L–80L', 'Salary Range'], ['2030', 'Future Ready'], ['0', 'NEET/JEE Required (many)']].map(([n, l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 20, fontWeight: 800, color: '#F59E0B' }}>{n}</div>
              <div style={{ fontSize: 11, color: '#64748B' }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Filters */}
      <div style={{ background: '#fff', borderBottom: '1px solid #E2E8F0', padding: '16px 24px', position: 'sticky', top: 68, zIndex: 50 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 10 }}>
            {categories.map(c => (
              <button key={c} onClick={() => setActiveCategory(c)} style={{
                padding: '6px 14px', borderRadius: 20, border: '1.5px solid',
                cursor: 'pointer', fontSize: 12, fontWeight: 500,
                borderColor: activeCategory === c ? '#1E40AF' : '#E2E8F0',
                background: activeCategory === c ? '#EFF6FF' : '#F8FAFC',
                color: activeCategory === c ? '#1E40AF' : '#374151',
              }}>{c}</button>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 12, color: '#94A3B8', paddingTop: 6 }}>Your Stream:</span>
            {streams.map(s => (
              <button key={s} onClick={() => setActiveStream(s)} style={{
                padding: '4px 12px', borderRadius: 16, border: '1.5px solid',
                cursor: 'pointer', fontSize: 12,
                borderColor: activeStream === s ? '#059669' : '#E2E8F0',
                background: activeStream === s ? '#ECFDF5' : '#F8FAFC',
                color: activeStream === s ? '#059669' : '#374151',
              }}>{s}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Career Grid + Detail */}
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '28px 24px', display: 'grid', gridTemplateColumns: career ? '1fr 420px' : '1fr', gap: 24 }}>

        {/* Grid */}
        <div>
          <div style={{ marginBottom: 16, color: '#64748B', fontSize: 14 }}>{filtered.length} careers found</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
            {filtered.map(c => (
              <div key={c.id} onClick={() => setSelected(c.id)} style={{
                background: '#fff', borderRadius: 16, padding: 20,
                border: `2px solid ${selected === c.id ? '#1E40AF' : '#E2E8F0'}`,
                cursor: 'pointer', transition: 'all 0.2s',
                boxShadow: selected === c.id ? '0 0 0 3px rgba(30,64,175,0.1)' : '0 2px 8px rgba(0,0,0,0.04)',
              }}>
                {/* Tag */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{ background: c.tagColor, color: '#fff', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 12 }}>{c.tag}</span>
                  <span style={{ background: '#F1F5F9', color: '#475569', fontSize: 11, padding: '3px 8px', borderRadius: 12 }}>{c.category}</span>
                </div>

                {/* Title */}
                <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                  <div style={{ fontSize: 32 }}>{c.icon}</div>
                  <div>
                    <h3 style={{ fontWeight: 700, fontSize: 16, color: '#0F172A', marginBottom: 4 }}>{c.title}</h3>
                    <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                      {c.stream.map(s => (
                        <span key={s} style={{ background: '#EFF6FF', color: '#1E40AF', fontSize: 10, fontWeight: 600, padding: '2px 6px', borderRadius: 8 }}>{s}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <p style={{ color: '#64748B', fontSize: 13, lineHeight: 1.5, marginBottom: 14 }}>{c.desc}</p>

                {/* Salary */}
                <div style={{ background: '#F8FAFC', borderRadius: 10, padding: '10px 12px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 4, textAlign: 'center' }}>
                    {[['Year 1', c.salary1yr], ['Year 5', c.salary5yr], ['Year 10', c.salary10yr]].map(([label, val]) => (
                      <div key={label}>
                        <div style={{ fontSize: 10, color: '#94A3B8' }}>{label}</div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: '#059669' }}>{val}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Demand */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12, fontSize: 12 }}>
                  <span style={{ color: '#059669', fontWeight: 600 }}>📈 Demand: {c.demand}</span>
                  <span style={{ color: '#D97706', fontWeight: 600 }}>Growth: {c.growth}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detail Panel */}
        {career && (
          <div style={{ position: 'sticky', top: 140, height: 'fit-content', background: '#fff', borderRadius: 20, border: '1px solid #E2E8F0', overflow: 'hidden' }}>
            <div style={{ background: 'linear-gradient(135deg, #0F172A, #1E3A5F)', padding: '24px 24px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <div style={{ fontSize: 40 }}>{career.icon}</div>
                  <div>
                    <h2 style={{ fontWeight: 800, fontSize: 20, color: '#fff' }}>{career.title}</h2>
                    <span style={{ background: career.tagColor, color: '#fff', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 10 }}>{career.tag}</span>
                  </div>
                </div>
                <button onClick={() => setSelected(null)} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', width: 30, height: 30, borderRadius: '50%', cursor: 'pointer' }}>✕</button>
              </div>
              <div style={{ display: 'flex', gap: 1, borderRadius: '10px 10px 0 0', overflow: 'hidden' }}>
                {[['Year 1', career.salary1yr], ['Year 5', career.salary5yr], ['Year 10', career.salary10yr]].map(([l, v]) => (
                  <div key={l} style={{ flex: 1, background: 'rgba(255,255,255,0.08)', padding: '10px 8px', textAlign: 'center' }}>
                    <div style={{ fontSize: 14, fontWeight: 800, color: '#6EE7B7' }}>{v}</div>
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ padding: 24, maxHeight: '65vh', overflowY: 'auto' }}>
              <p style={{ color: '#374151', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{career.desc}</p>

              <div style={{ marginBottom: 18 }}>
                <h4 style={{ fontWeight: 700, color: '#0F172A', fontSize: 14, marginBottom: 8 }}>📋 Ek Din Ki Zindagi</h4>
                <p style={{ color: '#64748B', fontSize: 13, background: '#F8FAFC', padding: '12px 14px', borderRadius: 10, lineHeight: 1.6 }}>{career.dayInLife}</p>
              </div>

              <div style={{ marginBottom: 18 }}>
                <h4 style={{ fontWeight: 700, color: '#0F172A', fontSize: 14, marginBottom: 8 }}>🎓 Education Path</h4>
                <p style={{ color: '#374151', fontSize: 13, background: '#EFF6FF', padding: '12px 14px', borderRadius: 10, lineHeight: 1.6 }}>{career.education}</p>
              </div>

              <div style={{ marginBottom: 18 }}>
                <h4 style={{ fontWeight: 700, color: '#0F172A', fontSize: 14, marginBottom: 8 }}>💡 Key Skills</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {career.skills.map(s => (
                    <span key={s} style={{ background: '#F1F5F9', color: '#475569', fontSize: 12, padding: '4px 10px', borderRadius: 16 }}>{s}</span>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 20 }}>
                <h4 style={{ fontWeight: 700, color: '#0F172A', fontSize: 14, marginBottom: 8 }}>🏢 Top Hiring Companies</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {career.companies.map(c => (
                    <span key={c} style={{ background: '#FFFBEB', border: '1px solid #FDE68A', color: '#92400E', fontSize: 12, padding: '4px 10px', borderRadius: 16, fontWeight: 500 }}>{c}</span>
                  ))}
                </div>
              </div>

              <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 12, padding: '10px 14px', marginBottom: 20 }}>
                <div style={{ fontSize: 13, color: '#065F46' }}>
                  <span style={{ fontWeight: 700 }}>⚠️ Kitne log jaante hain yeh career?</span> Sirf {career.known}% Indian students aware hain. Tum baaki 80% se aage ho!
                </div>
              </div>

              <Link to="/book" style={{
                display: 'block', textAlign: 'center', padding: '14px',
                background: 'linear-gradient(135deg, #1E40AF, #3B82F6)',
                color: '#fff', borderRadius: 12, textDecoration: 'none',
                fontWeight: 700, fontSize: 15,
              }}>
                Is Career Ka Full Roadmap Chahiye? Free Session Book Karo →
              </Link>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}
