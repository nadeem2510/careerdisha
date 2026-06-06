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
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'center' }}>
          {/* Counselor Photo Card */}
          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 24px 48px rgba(0,0,0,0.15)' }}>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=85"
                alt="Lead Counselor"
                style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
              />
              <div style={{ background: 'linear-gradient(135deg, #1E40AF, #3B82F6)', padding: '20px 24px' }}>
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 18, marginBottom: 4 }}>Our Lead Counselor</h3>
                <p style={{ color: '#BFDBFE', fontSize: 13, marginBottom: 12 }}>10+ Years Teaching Experience · B.Ed, M.Ed</p>
                <div style={{ display: 'flex', gap: 8 }}>
                  {['GCDF Certified', 'NCDA', 'Career Coach'].map(c => (
                    <div key={c} style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 20, padding: '4px 10px', fontSize: 11, fontWeight: 600, color: '#fff' }}>{c}</div>
                  ))}
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div style={{
              position: 'absolute', top: 20, right: -16,
              background: '#F59E0B', borderRadius: 14, padding: '10px 14px',
              boxShadow: '0 8px 20px rgba(245,158,11,0.4)', color: '#fff', textAlign: 'center',
            }}>
              <div style={{ fontWeight: 800, fontSize: 22 }}>500+</div>
              <div style={{ fontSize: 10, fontWeight: 600 }}>Students<br/>Guided</div>
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

      {/* Gallery Strip */}
      <section style={{ background: '#0F172A', padding: '40px 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: 12, padding: '0 24px' }}>
          {[
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&q=80',
            'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&q=80',
            'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=300&q=80',
            'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&q=80',
            'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=300&q=80',
          ].map((src, i) => (
            <div key={i} style={{ flex: '0 0 220px', borderRadius: 14, overflow: 'hidden', height: 140 }}>
              <img src={src} alt="students" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
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
