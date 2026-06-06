import { Link } from 'react-router-dom'

const stats = [
  { number: '500+', label: 'Students Guided' },
  { number: '10+', label: 'Years Experience' },
  { number: '95%', label: 'Success Rate' },
  { number: '50+', label: 'Colleges Tied Up' },
]

const services = [
  {
    icon: '🩺',
    title: 'NEET Counseling',
    desc: 'Expert guidance for MBBS, BDS, BAMS aspirants. College selection, cutoff analysis & admission strategy.',
    color: '#EFF6FF',
    border: '#BFDBFE',
  },
  {
    icon: '⚡',
    title: 'JEE Advanced',
    desc: 'IIT/NIT branch selection, rank-based college prediction, and career roadmap for engineering aspirants.',
    color: '#FFFBEB',
    border: '#FDE68A',
  },
  {
    icon: '🌍',
    title: 'MBBS Abroad',
    desc: 'Russia, Philippines, Georgia, Kazakhstan — complete guidance for international medical education.',
    color: '#ECFDF5',
    border: '#A7F3D0',
  },
  {
    icon: '🎯',
    title: 'Stream Selection',
    desc: 'Science, Commerce or Arts? Data-driven stream selection for Class 9–10 students based on aptitude.',
    color: '#F5F3FF',
    border: '#DDD6FE',
  },
  {
    icon: '🧠',
    title: 'Career Assessment',
    desc: 'Psychometric tests + expert analysis to identify your strengths, interests, and ideal career path.',
    color: '#FFF1F2',
    border: '#FECDD3',
  },
  {
    icon: '💻',
    title: 'Online Counseling',
    desc: 'Live 1-on-1 video sessions from anywhere in India. Flexible scheduling, recorded sessions available.',
    color: '#F0FDF4',
    border: '#BBF7D0',
  },
]

const steps = [
  { step: '01', title: 'Free Assessment', desc: 'Take our free career quiz to understand your interests and strengths.' },
  { step: '02', title: 'Expert Session', desc: 'One-on-one session with our certified career counselor.' },
  { step: '03', title: 'Personalized Roadmap', desc: 'Get a detailed action plan — exams, colleges, deadlines.' },
  { step: '04', title: 'Ongoing Support', desc: 'Continued support through admissions, not just one session.' },
]

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Pune',
    text: 'CareerDisha helped me understand which medical colleges to target after my NEET score. Got admission in my preferred college!',
    score: 'NEET Score: 620',
    avatar: 'PS',
  },
  {
    name: 'Rahul Patil',
    location: 'Nashik',
    text: 'I was confused between PCM and PCB. After the session, I was 100% clear. Now in IIT Bombay — couldn\'t be happier!',
    score: 'JEE Advanced: AIR 2840',
    avatar: 'RP',
  },
  {
    name: 'Sneha Desai',
    location: 'Nagpur',
    text: 'MBBS in Russia seemed risky but CareerDisha explained everything — fees, NMC approval, career prospects. Best decision!',
    score: 'MBBS, Russia',
    avatar: 'SD',
  },
]

export default function Home() {
  return (
    <div style={{ all: 'revert', fontFamily: 'system-ui, -apple-system, sans-serif', background: '#fff', color: '#1E293B' }}>

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #EFF6FF 0%, #fff 50%, #FFFBEB 100%)',
        padding: '80px 24px 100px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#EFF6FF', border: '1px solid #BFDBFE',
            borderRadius: 20, padding: '6px 16px', marginBottom: 24,
          }}>
            <span style={{ width: 8, height: 8, background: '#22C55E', borderRadius: '50%', display: 'inline-block' }} />
            <span style={{ fontSize: 13, color: '#1E40AF', fontWeight: 500 }}>Free Career Session Available Now</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(32px, 6vw, 60px)',
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: 24,
            color: '#0F172A',
            letterSpacing: '-1px',
          }}>
            Apna <span style={{ color: '#1E40AF' }}>Sahi Career</span> Chunno<br />
            <span style={{ color: '#F59E0B' }}>Expert Guidance</span> ke Saath
          </h1>

          <p style={{ fontSize: 18, color: '#475569', lineHeight: 1.7, marginBottom: 40, maxWidth: 600, margin: '0 auto 40px' }}>
            NEET, JEE Advanced, Stream Selection, aur MBBS Abroad — 10+ years experience ke saath certified career counselor se milein. Class 9–12 students ke liye.
          </p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/book" style={{
              padding: '16px 36px', borderRadius: 12,
              background: 'linear-gradient(135deg, #1E40AF, #3B82F6)',
              color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 17,
              boxShadow: '0 8px 24px rgba(30,64,175,0.35)',
              transition: 'transform 0.2s',
            }}>
              Book Free Session →
            </Link>
            <Link to="/services" style={{
              padding: '16px 36px', borderRadius: 12,
              border: '2px solid #E2E8F0',
              color: '#374151', textDecoration: 'none', fontWeight: 600, fontSize: 17,
              background: '#fff',
            }}>
              Explore Services
            </Link>
          </div>

          <p style={{ marginTop: 20, fontSize: 13, color: '#94A3B8' }}>
            ✓ No payment required &nbsp;&nbsp; ✓ 30-min session &nbsp;&nbsp; ✓ Certified counselor
          </p>
        </div>

        {/* Decorative blobs */}
        <div style={{
          position: 'absolute', top: -80, right: -80, width: 300, height: 300,
          background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', bottom: -60, left: -60, width: 250, height: 250,
          background: 'radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
      </section>

      {/* STATS BAR */}
      <section style={{ background: '#1E40AF', padding: '32px 24px' }}>
        <div style={{
          maxWidth: 1000, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 24, textAlign: 'center',
        }}>
          {stats.map(s => (
            <div key={s.number}>
              <div style={{ fontSize: 36, fontWeight: 800, color: '#F59E0B' }}>{s.number}</div>
              <div style={{ fontSize: 14, color: '#BFDBFE', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: '80px 24px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#1E40AF', textTransform: 'uppercase', letterSpacing: 1 }}>
              What We Offer
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, marginTop: 8, color: '#0F172A' }}>
              Comprehensive Career Services
            </h2>
            <p style={{ color: '#64748B', fontSize: 17, marginTop: 12 }}>
              Har student ke liye personalized guidance — stream se lekar admission tak
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {services.map(s => (
              <div key={s.title} style={{
                background: '#fff', borderRadius: 16,
                border: `1px solid ${s.border}`,
                padding: 28, transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'default',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{
                  width: 52, height: 52, borderRadius: 12,
                  background: s.color, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: 26, marginBottom: 16,
                }}>{s.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 10, color: '#0F172A' }}>{s.title}</h3>
                <p style={{ color: '#64748B', lineHeight: 1.65, fontSize: 15 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#1E40AF', textTransform: 'uppercase', letterSpacing: 1 }}>
              Process
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, marginTop: 8, color: '#0F172A' }}>
              Kaise Kaam Karta Hai?
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32, position: 'relative' }}>
            {steps.map((s, i) => (
              <div key={s.step} style={{ textAlign: 'center', position: 'relative' }}>
                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: i % 2 === 0 ? 'linear-gradient(135deg, #1E40AF, #3B82F6)' : 'linear-gradient(135deg, #F59E0B, #FBBF24)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px', color: '#fff', fontWeight: 800, fontSize: 20,
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                }}>{s.step}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 10, color: '#0F172A' }}>{s.title}</h3>
                <p style={{ color: '#64748B', fontSize: 14, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '80px 24px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#1E40AF', textTransform: 'uppercase', letterSpacing: 1 }}>
              Success Stories
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, marginTop: 8, color: '#0F172A' }}>
              Hamare Students Ki Kahani
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {testimonials.map(t => (
              <div key={t.name} style={{
                background: '#fff', borderRadius: 16, padding: 28,
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
              }}>
                <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
                  {[...Array(5)].map((_, i) => <span key={i} style={{ color: '#F59E0B', fontSize: 18 }}>★</span>)}
                </div>
                <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, marginBottom: 20, fontStyle: 'italic' }}>
                  "{t.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1E40AF, #3B82F6)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontWeight: 700, fontSize: 14,
                  }}>{t.avatar}</div>
                  <div>
                    <div style={{ fontWeight: 600, color: '#0F172A', fontSize: 15 }}>{t.name}</div>
                    <div style={{ fontSize: 13, color: '#94A3B8' }}>{t.location} · {t.score}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{
        background: 'linear-gradient(135deg, #1E40AF 0%, #1D4ED8 100%)',
        padding: '80px 24px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>
            Ready Hai Apna Future Plan Karne Ke Liye?
          </h2>
          <p style={{ color: '#BFDBFE', fontSize: 17, marginBottom: 36, lineHeight: 1.7 }}>
            Abhi free session book karo aur ek certified expert se seedha baat karo. No obligation, no payment.
          </p>
          <Link to="/book" style={{
            display: 'inline-block',
            padding: '18px 44px', borderRadius: 12,
            background: '#F59E0B',
            color: '#fff', textDecoration: 'none',
            fontWeight: 700, fontSize: 18,
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          }}>
            Book Your Free Session Now →
          </Link>
          <p style={{ color: '#93C5FD', fontSize: 13, marginTop: 16 }}>
            📞 Call us: +91 98765 43210 &nbsp;|&nbsp; ✉️ hello@careerdisha.in
          </p>
        </div>
      </section>

    </div>
  )
}
