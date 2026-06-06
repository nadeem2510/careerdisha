export default function About() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#fff', color: '#1E293B' }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #FFFBEB, #FFF)', padding: '64px 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(28px,5vw,48px)', fontWeight: 800, color: '#0F172A', marginBottom: 16 }}>
          About CareerDisha
        </h1>
        <p style={{ color: '#64748B', fontSize: 17, maxWidth: 560, margin: '0 auto' }}>
          Ek mission ke saath shuru kiya — India ke students ko sahi career direction dilaana
        </p>
      </section>

      {/* Story */}
      <section style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'center' }}>
          <div style={{
            background: 'linear-gradient(135deg, #1E40AF, #3B82F6)',
            borderRadius: 20, padding: 40, color: '#fff', textAlign: 'center',
          }}>
            <div style={{
              width: 100, height: 100, borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)',
              margin: '0 auto 20px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 40,
            }}>👩‍🏫</div>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Our Lead Counselor</h3>
            <p style={{ color: '#BFDBFE', fontSize: 15 }}>10+ Years Teaching Experience</p>
            <div style={{ marginTop: 24, display: 'flex', gap: 16, justifyContent: 'center' }}>
              {['GCDF', 'NCDA', 'M.Ed'].map(c => (
                <div key={c} style={{
                  background: 'rgba(255,255,255,0.15)', borderRadius: 8,
                  padding: '6px 12px', fontSize: 12, fontWeight: 600,
                }}>{c}</div>
              ))}
            </div>
          </div>

          <div>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#1E40AF', textTransform: 'uppercase', letterSpacing: 1 }}>Our Story</span>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: '#0F172A', margin: '8px 0 16px', lineHeight: 1.3 }}>
              Ek Teacher Ki Disha Se Bana CareerDisha
            </h2>
            <p style={{ color: '#475569', lineHeight: 1.8, marginBottom: 16, fontSize: 15 }}>
              Hum dono ne dekha ki 10+ saal ki teaching mein lakho students ko sahi guidance nahi milti. NEET aspirants confuse rehte hain college selection mein, JEE rankers galat branch choose karte hain, aur MBBS abroad ke case mein toh fraud consultants ki bharmaar hai.
            </p>
            <p style={{ color: '#475569', lineHeight: 1.8, fontSize: 15 }}>
              Isiliye CareerDisha banaya — ek platform jahan certified counselors + technology milke students ki life changing decisions mein help kare. Transparency, ethics, aur genuine care hamara USP hai.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '64px 24px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: '#0F172A', marginBottom: 48 }}>Hamare Values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {[
              { icon: '🎯', title: 'Student First', desc: 'Har decision student ke best interest mein — koi commission bias nahi' },
              { icon: '💎', title: 'Transparency', desc: 'Fees, commissions, sab kuch openly batate hain' },
              { icon: '📊', title: 'Data-Driven', desc: 'Psychometric tests + expert analysis = better decisions' },
              { icon: '🤝', title: 'Long-term Support', desc: 'Ek session nahi — admission tak saath rehte hain' },
            ].map(v => (
              <div key={v.title} style={{
                background: '#fff', borderRadius: 16, padding: 28,
                border: '1px solid #E2E8F0',
              }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{v.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 8, color: '#0F172A' }}>{v.title}</h3>
                <p style={{ color: '#64748B', fontSize: 14, lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
