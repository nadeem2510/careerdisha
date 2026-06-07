import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: '#0F172A', color: '#94A3B8', marginTop: 0 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: 'linear-gradient(135deg, #1E40AF, #3B82F6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontWeight: 800, fontSize: 18,
              }}>CD</div>
              <span style={{ fontWeight: 700, fontSize: 22, color: '#fff' }}>
                Career<span style={{ color: '#F59E0B' }}>Disha</span>
              </span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
              Expert career guidance for Class 9–12 students. NEET, JEE, and International Medical Education specialists.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {['f', 'in', 'yt', 'ig'].map(s => (
                <div key={s} style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: '#1E293B', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', cursor: 'pointer', fontSize: 12, fontWeight: 700, color: '#94A3B8',
                }}>{s}</div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 600, marginBottom: 16, fontSize: 16 }}>Services</h4>
            {['NEET Counseling', 'JEE Advanced Guidance', 'Stream Selection', 'MBBS Abroad', 'Career Assessment', 'Online Sessions'].map(s => (
              <div key={s} style={{ marginBottom: 10 }}>
                <Link to="/services" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: 14, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#F59E0B'}
                  onMouseLeave={e => e.target.style.color = '#94A3B8'}
                >{s}</Link>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 600, marginBottom: 16, fontSize: 16 }}>Quick Links</h4>
            {[['Home', '/'], ['About Us', '/about'], ['🛡️ Our Transparency Promise', '/transparency'], ['Book Session', '/book'], ['Contact', '/contact']].map(([label, to]) => (
              <div key={label} style={{ marginBottom: 10 }}>
                <Link to={to} style={{ color: '#94A3B8', textDecoration: 'none', fontSize: 14 }}
                  onMouseEnter={e => e.target.style.color = '#F59E0B'}
                  onMouseLeave={e => e.target.style.color = '#94A3B8'}
                >{label}</Link>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 600, marginBottom: 16, fontSize: 16 }}>Contact Us</h4>
            <div style={{ fontSize: 14, lineHeight: 2 }}>
              <p>📞 +91 98765 43210</p>
              <p>📧 hello@careerdisha.in</p>
              <p>📍 Pune, Maharashtra</p>
              <p style={{ marginTop: 12, color: '#F59E0B', fontWeight: 500 }}>Mon–Sat: 9am – 7pm</p>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #1E293B', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 13 }}>
          <span>© 2025 CareerDisha. All rights reserved.</span>
          <span>Made with ❤️ for Indian Students</span>
        </div>
      </div>
    </footer>
  )
}
