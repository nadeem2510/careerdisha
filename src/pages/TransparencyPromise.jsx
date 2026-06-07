import { Link } from 'react-router-dom'

const pillars = [
  {
    icon: '🏷️',
    color: '#1E40AF',
    title: 'Sponsored vs. Recommended — Always Labeled',
    desc: 'Har listing, course, ya college suggestion par saaf-saaf likha hoga "Sponsored" ya "AI-Recommended". Hum kabhi paid partner ko organic recommendation jaisa dikha kar nahi bechte — jo bhi paisa de raha hai uska tag alag rahega, hamesha.',
  },
  {
    icon: '🤖',
    color: '#7C3AED',
    title: 'AI-Matched Suggestions, Bias-Free',
    desc: 'Aapke marks, budget, goals aur interest ke aadhar par sabse best-fit institute ya university suggest hoti hai — paying partner hone se uski rank upar nahi jaati. Recommendation engine sirf aapke fit score se chalta hai.',
  },
  {
    icon: '📊',
    color: '#059669',
    title: 'Verified Outcome Data — No Inflated Claims',
    desc: 'Placement %, average package, visa success rate, alumni outcomes — sab independently verify karke publish karte hain. Koi institute apne "100% placement" claims khud likh kar nahi laga sakta.',
  },
  {
    icon: '💸',
    color: '#F59E0B',
    title: 'Free Forever for Students & Parents',
    desc: 'Counseling, course discovery, scholarship search, college comparison — sab kuch students aur parents ke liye hamesha FREE rahega. Hum paise institutes/universities se kamate hain, aapse kabhi nahi.',
  },
  {
    icon: '🤝',
    color: '#DC2626',
    title: 'Pay-Only-On-Results for Our Partners',
    desc: 'Coaching institutes aur universities sirf tab pay karte hain jab genuinely matched student unke saath aage badhta hai (lead ya enrollment par) — isse unka incentive bhi aapko sahi guidance dene mein hi hota hai.',
  },
  {
    icon: '📖',
    color: '#0F172A',
    title: 'Open Ranking Methodology',
    desc: 'Hamari ranking aur recommendation ka method publicly explain kiya gaya hai — kya factors count hote hain, kaise score banta hai. Koi "black box" nahi, sab kuch dekha ja sakta hai.',
  },
]

const compare = [
  ['Konse listing paid hain?', 'Pata nahi chalta — sab ek jaisa dikhta hai', 'Har sponsored listing par clear "Sponsored" badge'],
  ['Recommendation kis base par?', 'Jo zyada paisa de, woh upar', 'Aapke profile + goals ke fit score par (AI-matched)'],
  ['Outcome / placement data?', 'Institute khud claim karta hai', 'Independently verified aur publish kiya jaata hai'],
  ['Student ke liye cost?', 'Kabhi-kabhi hidden charges / referral fees', 'Hamesha 100% free — koi hidden cost nahi'],
  ['Partner kab pay karta hai?', 'Sirf listing ke liye, outcome se farak nahi padta', 'Genuine matched lead / enrollment par — outcome-linked'],
]

export default function TransparencyPromise() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        padding: '72px 24px 64px',
        color: '#fff',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.4)',
            borderRadius: 20, padding: '6px 16px', marginBottom: 24,
          }}>
            <span style={{ fontSize: 13, color: '#F59E0B', fontWeight: 600 }}>🛡️ India's First Transparent Career Marketplace</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-1px' }}>
            Hum Sponsored aur Genuine Recommendation mein <span style={{ color: '#F59E0B' }}>Kabhi Confuse Nahi Karte</span>
          </h1>
          <p style={{ fontSize: 17, color: '#CBD5E1', lineHeight: 1.8 }}>
            CareerDisha duniya ka pehla career-guidance marketplace banne ja raha hai jo openly batata hai —
            kaun pay kar raha hai, kaun nahi, aur aapko suggestion kis base par mil rahi hai.
            Yeh hamara <strong style={{ color: '#fff' }}>permanent promise</strong> hai aapse aur aapke parents se.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section style={{ padding: '64px 24px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 28, fontWeight: 800, color: '#0F172A', marginBottom: 12 }}>
            Hamare 6 Transparency Pillars
          </h2>
          <p style={{ textAlign: 'center', color: '#64748B', fontSize: 15, marginBottom: 44, maxWidth: 640, margin: '0 auto 44px' }}>
            Yeh sirf marketing wala promise nahi hai — yeh hamare platform ke design mein hi built-in hai.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {pillars.map((p, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: 16, padding: 28,
                border: '1px solid #E2E8F0', boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14, marginBottom: 16,
                  background: `${p.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24,
                }}>{p.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#0F172A', marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section style={{ padding: '64px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 920, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 28, fontWeight: 800, color: '#0F172A', marginBottom: 12 }}>
            Purana "Directory" Model vs. CareerDisha
          </h2>
          <p style={{ textAlign: 'center', color: '#64748B', fontSize: 15, marginBottom: 36 }}>
            Jaha purane business-listing platforms band darwaze ke peeche kaam karte hain, hum sab kuch khol ke rakhte hain.
          </p>
          <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid #E2E8F0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: '#0F172A' }}>
                  <th style={{ textAlign: 'left', padding: '16px 20px', color: '#fff', fontWeight: 700 }}>Sawaal</th>
                  <th style={{ textAlign: 'left', padding: '16px 20px', color: '#FCA5A5', fontWeight: 700 }}>Purana Directory Model</th>
                  <th style={{ textAlign: 'left', padding: '16px 20px', color: '#86EFAC', fontWeight: 700 }}>CareerDisha — Transparent Marketplace</th>
                </tr>
              </thead>
              <tbody>
                {compare.map(([q, old, neu], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#F8FAFC' : '#fff', borderTop: '1px solid #E2E8F0' }}>
                    <td style={{ padding: '16px 20px', fontWeight: 600, color: '#0F172A' }}>{q}</td>
                    <td style={{ padding: '16px 20px', color: '#94A3B8' }}>❌ {old}</td>
                    <td style={{ padding: '16px 20px', color: '#059669', fontWeight: 500 }}>✅ {neu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* For Partners CTA */}
      <section style={{ padding: '64px 24px', background: 'linear-gradient(135deg, #EFF6FF 0%, #FFFBEB 100%)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 26, fontWeight: 800, color: '#0F172A', marginBottom: 14 }}>
            Coaching Institute ya University ho? Hamare Partner Bano
          </h2>
          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.8, marginBottom: 28 }}>
            Students aur parents ko hamesha free guidance milti rahegi — aap genuine, matched students tak pohochne ke liye
            featured listing, verified badge, aur outcome-linked lead partnerships ke through judh sakte hain.
            Sab kuch labeled aur transparent — koi hidden bias nahi.
          </p>
          <Link to="/institute/register" style={{
            display: 'inline-block', padding: '15px 36px', borderRadius: 12,
            background: 'linear-gradient(135deg, #1E40AF, #3B82F6)',
            color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 16,
            boxShadow: '0 8px 24px rgba(30,64,175,0.3)',
          }}>
            Partner Registration →
          </Link>
        </div>
      </section>
    </div>
  )
}
