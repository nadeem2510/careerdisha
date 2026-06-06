import { Link } from 'react-router-dom'

const services = [
  {
    icon: '🩺',
    title: 'NEET Counseling',
    tagline: 'Medical Career Planning',
    color: '#EFF6FF',
    accent: '#1E40AF',
    points: [
      'NEET score-based college shortlisting',
      'State vs All India quota strategy',
      'Private vs Government college comparison',
      'MBBS, BDS, BAMS, BHMS options',
      'Cutoff analysis & seat matrix',
      'Document preparation guidance',
    ],
    price: '₹2,000',
    duration: '60 min',
  },
  {
    icon: '⚡',
    title: 'JEE Advanced Counseling',
    tagline: 'Engineering Career Planning',
    color: '#FFFBEB',
    accent: '#D97706',
    points: [
      'IIT / NIT / IIIT branch selection',
      'JoSAA counseling round strategy',
      'Rank-based college prediction',
      'Branch vs college tradeoff analysis',
      'Future scope of each branch',
      'Scholarship & hostel guidance',
    ],
    price: '₹2,000',
    duration: '60 min',
  },
  {
    icon: '🌍',
    title: 'MBBS Abroad',
    tagline: 'International Medical Education',
    color: '#ECFDF5',
    accent: '#059669',
    points: [
      'NMC/WHO approved university selection',
      'Russia, Philippines, Georgia, Kazakhstan',
      'Complete fee structure (6-year cost)',
      'Visa & document guidance',
      'FMGE/NExT exam preparation plan',
      'SOP writing support',
    ],
    price: '₹5,000',
    duration: '90 min',
  },
  {
    icon: '🎯',
    title: 'Stream Selection',
    tagline: 'Class 9–10 Students',
    color: '#F5F3FF',
    accent: '#7C3AED',
    points: [
      'Aptitude & interest assessment',
      'Science / Commerce / Arts analysis',
      'Career options per stream',
      'Subject combination guidance',
      'Parent counseling included',
      'Future career mapping',
    ],
    price: '₹1,500',
    duration: '60 min',
  },
  {
    icon: '🧠',
    title: 'Career Assessment',
    tagline: 'Psychometric + Expert Analysis',
    color: '#FFF1F2',
    accent: '#E11D48',
    points: [
      'Validated psychometric test battery',
      'Personality + aptitude + interest mapping',
      'Expert interpretation & report',
      '300+ career options database',
      'Personalized career roadmap',
      'PDF report delivered',
    ],
    price: '₹1,000',
    duration: '45 min',
  },
  {
    icon: '💻',
    title: 'Online Counseling',
    tagline: 'Anywhere in India',
    color: '#F0FDF4',
    accent: '#16A34A',
    points: [
      'Live 1-on-1 video sessions',
      'Available 7 days a week',
      'Session recording provided',
      'WhatsApp follow-up support',
      'All services available online',
      'Same quality as in-person',
    ],
    price: '₹1,500',
    duration: '60 min',
  },
]

export default function Services() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#F8FAFC', color: '#1E293B' }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1E40AF, #1D4ED8)', padding: '64px 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>
          Our Services
        </h1>
        <p style={{ color: '#BFDBFE', fontSize: 17, maxWidth: 560, margin: '0 auto' }}>
          NEET se lekar MBBS Abroad tak — har career question ka jawab yahan hai
        </p>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '64px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 28 }}>
          {services.map(s => (
            <div key={s.title} style={{
              background: '#fff', borderRadius: 20,
              border: '1px solid #E2E8F0',
              padding: 32,
              boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: 14,
                background: s.color, fontSize: 28,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 16,
              }}>{s.icon}</div>

              <span style={{ fontSize: 12, color: s.accent, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.8 }}>
                {s.tagline}
              </span>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: '#0F172A', margin: '6px 0 16px' }}>{s.title}</h3>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', flex: 1 }}>
                {s.points.map(p => (
                  <li key={p} style={{ display: 'flex', gap: 10, marginBottom: 10, fontSize: 14, color: '#374151', alignItems: 'flex-start' }}>
                    <span style={{ color: '#22C55E', fontWeight: 700, marginTop: 1 }}>✓</span>
                    {p}
                  </li>
                ))}
              </ul>

              <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: 24, fontWeight: 800, color: s.accent }}>{s.price}</span>
                  <span style={{ fontSize: 13, color: '#94A3B8', marginLeft: 6 }}>{s.duration}</span>
                </div>
                <Link to="/book" style={{
                  padding: '10px 22px', borderRadius: 10,
                  background: s.accent, color: '#fff',
                  textDecoration: 'none', fontWeight: 600, fontSize: 14,
                }}>Book Now</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '60px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: '#0F172A', marginBottom: 12 }}>Aksar Pooche Jane Wale Sawaal</h2>
          <p style={{ color: '#64748B', marginBottom: 40 }}>Common questions about our counseling services</p>

          {[
            { q: 'Kya session online hoti hai?', a: 'Haan, hum Zoom/Google Meet par video sessions karte hain. Pune mein in-person bhi available hai.' },
            { q: 'Kitne sessions ki zaroorat hoti hai?', a: 'Zyada tar 1-2 sessions mein complete guidance milti hai. Complex cases mein 3-4 sessions ho sakte hain.' },
            { q: 'Kya parent bhi session mein hona chahiye?', a: 'Haan, especially stream selection aur MBBS abroad mein parent ka hona bahut helpful hota hai.' },
            { q: 'MBBS abroad ke liye commission lete hain kya?', a: 'Hum transparent hain — counseling fee alag hai, aur agar university referral karte hain toh clearly batate hain.' },
          ].map(faq => (
            <div key={faq.q} style={{
              textAlign: 'left', marginBottom: 20,
              border: '1px solid #E2E8F0', borderRadius: 12,
              overflow: 'hidden',
            }}>
              <div style={{ padding: '16px 20px', background: '#F8FAFC', fontWeight: 600, color: '#0F172A', fontSize: 15 }}>
                ❓ {faq.q}
              </div>
              <div style={{ padding: '16px 20px', color: '#475569', fontSize: 15, lineHeight: 1.6 }}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
