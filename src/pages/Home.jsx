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
    img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80',
  },
  {
    icon: '⚡',
    title: 'JEE Advanced',
    desc: 'IIT/NIT branch selection, rank-based college prediction, and career roadmap for engineering aspirants.',
    color: '#FFFBEB',
    border: '#FDE68A',
    img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80',
  },
  {
    icon: '🌍',
    title: 'MBBS Abroad',
    desc: 'Russia, Philippines, Georgia, Kazakhstan — complete guidance for international medical education.',
    color: '#ECFDF5',
    border: '#A7F3D0',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    icon: '🎯',
    title: 'Stream Selection',
    desc: 'Science, Commerce or Arts? Data-driven stream selection for Class 9–10 students based on aptitude.',
    color: '#F5F3FF',
    border: '#DDD6FE',
    img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80',
  },
  {
    icon: '🧠',
    title: 'Career Assessment',
    desc: 'Psychometric tests + expert analysis to identify your strengths, interests, and ideal career path.',
    color: '#FFF1F2',
    border: '#FECDD3',
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80',
  },
  {
    icon: '💻',
    title: 'Online Counseling',
    desc: 'Live 1-on-1 video sessions from anywhere in India. Flexible scheduling, recorded sessions available.',
    color: '#F0FDF4',
    border: '#BBF7D0',
    img: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=400&q=80',
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
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80',
  },
  {
    name: 'Rahul Patil',
    location: 'Nashik',
    text: 'I was confused between PCM and PCB. After the session, I was 100% clear. Now in IIT Bombay — couldn\'t be happier!',
    score: 'JEE Advanced: AIR 2840',
    avatar: 'RP',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80',
  },
  {
    name: 'Sneha Desai',
    location: 'Nagpur',
    text: 'MBBS in Russia seemed risky but CareerDisha explained everything — fees, NMC approval, career prospects. Best decision!',
    score: 'MBBS, Russia',
    avatar: 'SD',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80',
  },
]

export default function Home() {
  return (
    <div style={{ all: 'revert', fontFamily: 'system-ui, -apple-system, sans-serif', background: '#fff', color: '#1E293B' }}>

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #EFF6FF 0%, #fff 50%, #FFFBEB 100%)',
        padding: '64px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'center', position: 'relative', zIndex: 1 }}>

          {/* Left — Text */}
          <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 24 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#EFF6FF', border: '1px solid #BFDBFE',
                borderRadius: 20, padding: '6px 16px',
              }}>
                <span style={{ width: 8, height: 8, background: '#22C55E', borderRadius: '50%', display: 'inline-block' }} />
                <span style={{ fontSize: 13, color: '#1E40AF', fontWeight: 500 }}>Free Career Session Available Now</span>
              </div>
              <Link to="/transparency" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#FFFBEB', border: '1px solid #FDE68A',
                borderRadius: 20, padding: '6px 16px', textDecoration: 'none',
              }}>
                <span style={{ fontSize: 13, color: '#B45309', fontWeight: 600 }}>🛡️ India's First Transparent Career Marketplace</span>
              </Link>
            </div>

            <h1 style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: 20,
              color: '#0F172A',
              letterSpacing: '-1px',
            }}>
              Apna <span style={{ color: '#1E40AF' }}>Sahi Career</span> Chunno<br />
              <span style={{ color: '#F59E0B' }}>Expert Guidance</span> ke Saath
            </h1>

            <p style={{ fontSize: 17, color: '#475569', lineHeight: 1.7, marginBottom: 32 }}>
              NEET, JEE Advanced, Stream Selection, aur MBBS Abroad — 10+ years experience ke saath certified career counselor se milein. Class 9–12 students ke liye.
            </p>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 28 }}>
              <Link to="/book" style={{
                padding: '15px 32px', borderRadius: 12,
                background: 'linear-gradient(135deg, #1E40AF, #3B82F6)',
                color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 16,
                boxShadow: '0 8px 24px rgba(30,64,175,0.35)',
              }}>
                Book Free Session →
              </Link>
              <Link to="/services" style={{
                padding: '15px 32px', borderRadius: 12,
                border: '2px solid #E2E8F0',
                color: '#374151', textDecoration: 'none', fontWeight: 600, fontSize: 16,
                background: '#fff',
              }}>
                Explore Services
              </Link>
            </div>

            <p style={{ fontSize: 13, color: '#94A3B8' }}>
              ✓ No payment required &nbsp;&nbsp; ✓ 30-min session &nbsp;&nbsp; ✓ Certified counselor
            </p>

            {/* Trust badges */}
            <div style={{ display: 'flex', gap: 16, marginTop: 28, flexWrap: 'wrap' }}>
              {[
                { img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=36&h=36&fit=crop&q=80' },
                { img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=36&h=36&fit=crop&q=80' },
                { img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=36&h=36&fit=crop&q=80' },
                { img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=36&h=36&fit=crop&q=80' },
                { img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=36&h=36&fit=crop&q=80' },
              ].map((a, i) => (
                <img key={i} src={a.img} alt="student" style={{ width: 36, height: 36, borderRadius: '50%', border: '2px solid #fff', marginLeft: i > 0 ? -12 : 0, objectFit: 'cover', boxShadow: '0 2px 6px rgba(0,0,0,0.15)' }} />
              ))}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: 8 }}>
                <div style={{ display: 'flex', gap: 2 }}>{[...Array(5)].map((_, i) => <span key={i} style={{ color: '#F59E0B', fontSize: 14 }}>★</span>)}</div>
                <span style={{ fontSize: 12, color: '#64748B' }}>500+ students guided</span>
              </div>
            </div>
          </div>

          {/* Right — Hero Image */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: '0 32px 64px rgba(0,0,0,0.15)',
              position: 'relative',
            }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Berea_College_20101205_StudentsOnCampus_LS_%2820554604349%29.jpg/960px-Berea_College_20101205_StudentsOnCampus_LS_%2820554604349%29.jpg"
                alt="Students studying"
                style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }}
              />
              {/* Overlay card — top left */}
              <div style={{
                position: 'absolute', top: 20, left: 20,
                background: '#fff', borderRadius: 14, padding: '12px 16px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>🎯</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: '#0F172A' }}>NEET 2025</div>
                  <div style={{ fontSize: 11, color: '#22C55E', fontWeight: 600 }}>Admission Confirmed ✓</div>
                </div>
              </div>
              {/* Overlay card — bottom right */}
              <div style={{
                position: 'absolute', bottom: 20, right: 20,
                background: '#fff', borderRadius: 14, padding: '12px 16px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: '#FFFBEB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>⚡</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: '#0F172A' }}>JEE AIR 2840</div>
                  <div style={{ fontSize: 11, color: '#1E40AF', fontWeight: 600 }}>IIT Bombay 🎓</div>
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div style={{
              position: 'absolute', top: -16, right: -16,
              background: 'linear-gradient(135deg, #1E40AF, #3B82F6)',
              borderRadius: '50%', width: 72, height: 72,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(30,64,175,0.4)', color: '#fff',
            }}>
              <div style={{ fontWeight: 800, fontSize: 16 }}>10+</div>
              <div style={{ fontSize: 9, opacity: 0.9, textAlign: 'center', lineHeight: 1.2 }}>Years Exp</div>
            </div>
          </div>
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
                overflow: 'hidden',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'default', padding: 0,
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.1)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
              >
                {/* Service Image */}
                <div style={{ height: 160, overflow: 'hidden', position: 'relative' }}>
                  <img src={s.img} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.35))' }} />
                  <div style={{ position: 'absolute', bottom: 12, left: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(255,255,255,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>{s.icon}</div>
                  </div>
                </div>
                <div style={{ padding: '20px 24px 24px' }}>
                  <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 8, color: '#0F172A' }}>{s.title}</h3>
                  <p style={{ color: '#64748B', lineHeight: 1.65, fontSize: 14 }}>{s.desc}</p>
                </div>
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
                  <img src={t.photo} alt={t.name} style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', border: '2px solid #E2E8F0' }} />
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
