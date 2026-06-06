import { useState } from 'react'
import { Link } from 'react-router-dom'

const feelings = [
  { id: 'failed_exam', emoji: '😔', label: 'Exam fail hua', color: '#FFF1F2', accent: '#E11D48' },
  { id: 'confused', emoji: '😕', label: 'Career confused hoon', color: '#FFFBEB', accent: '#D97706' },
  { id: 'pressure', emoji: '😰', label: 'Family pressure bahut hai', color: '#F5F3FF', accent: '#7C3AED' },
  { id: 'anxiety', emoji: '😟', label: 'Anxiety / Stress feel ho raha', color: '#EFF6FF', accent: '#1E40AF' },
  { id: 'dropout', emoji: '😞', label: 'College/school chhodni hai', color: '#FFF7ED', accent: '#EA580C' },
  { id: 'crisis', emoji: '🆘', label: 'Bahut bura lag raha hai', color: '#FEF2F2', accent: '#DC2626' },
]

const responses = {
  failed_exam: {
    title: 'Exam fail hua — yeh end nahi hai',
    message: 'Dost, 14,488 students ne 2024 mein apni jaan li sirf exam ke darr se. Tum yahan ho — yeh sabse badi baat hai. India ka education system bahut narrow hai, lekin tumhara future nahi.',
    steps: [
      { icon: '🫁', text: 'Pehle ek deep breath lo. Seriously. 4 second inhale, 4 second hold, 4 second exhale.' },
      { icon: '💬', text: 'Kisi ek trusted insaan se — dost, bhai/behen, teacher — sirf baat karo. Abhi.' },
      { icon: '🗓️', text: 'Agle 48 ghante koi bhi "kya karoon life mein" decision mat lo. Sirf rest karo.' },
      { icon: '📞', text: 'iCall helpline: 9152987821 — free, confidential, Hindi mein available.' },
    ],
    paths: [
      { icon: '🔄', title: 'Retake Planning', desc: 'Ek baar aur try karna chahte ho? Strategy banate hain.' },
      { icon: '🌍', title: 'Alternative Paths', desc: 'NEET fail? 12 alternative medical careers hain. JEE fail? 11 alternatives.' },
      { icon: '🧠', title: 'Expert Session', desc: 'Certified counselor se baat karo — judge nahi karenge.' },
    ],
    crisis: false,
  },
  confused: {
    title: 'Career confusion — bilkul normal hai',
    message: '93% Indian students sirf 7-10 careers ke baare mein jaante hain, jabki 350+ options exist karte hain. Tumhari confusion system ki wajah se hai, tumhari wajah se nahi.',
    steps: [
      { icon: '📝', text: '5 cheezein likho jo tumhe genuinely enjoy karti hain — koi pressure nahi.' },
      { icon: '🧪', text: 'Free psychometric assessment lo — 15 minutes mein tumhara aptitude pattern clear ho jaayega.' },
      { icon: '🎥', text: '"Careers of 2030" page dekho — aisa career mil sakta hai jo tumne socha bhi nahi.' },
      { icon: '💬', text: 'Free expert session mein sirf baat karo — koi commitment nahi.' },
    ],
    paths: [
      { icon: '🧪', title: 'Free Assessment', desc: 'Aptitude + personality test lo — 15 min.' },
      { icon: '🚀', title: 'Careers of 2030', desc: '50+ emerging careers explore karo.' },
      { icon: '💬', title: 'Expert Session', desc: 'Counselor se openly baat karo.' },
    ],
    crisis: false,
  },
  pressure: {
    title: 'Family pressure — tum akele nahi ho',
    message: 'India mein 80%+ students apne career decisions mein family pressure feel karte hain. Yeh real struggle hai. Parents love karte hain, lekin outdated information se guide karte hain.',
    steps: [
      { icon: '❤️', text: 'Parents galat nahi hain — unke paas sirf limited information hai. Unka darr genuine hai.' },
      { icon: '📊', text: 'Data dikhao: "Papa, is career mein salary X hai, growth Y hai" — numbers parents ko convince karte hain.' },
      { icon: '🤝', text: 'CareerDisha mein parent counseling session bhi available hai — hum parents ko guide karenge.' },
      { icon: '⏳', text: 'Ek week ka time maango — "Main research karke batata/batati hoon" — informed decision for all.' },
    ],
    paths: [
      { icon: '👨‍👩‍👧', title: 'Parent Session', desc: 'Parents ke saath joint counseling session.' },
      { icon: '📊', title: 'Career Data', desc: 'Salary facts dikhao — data se convince karo.' },
      { icon: '💬', title: 'Student Session', desc: 'Pehle khud clarity lo, phir parents.' },
    ],
    crisis: false,
  },
  anxiety: {
    title: 'Anxiety real hai — address karo',
    message: '69.9% Indian students moderate to high anxiety feel karte hain exams ke time. Tum abnormal nahi ho. Lekin ignore karna dangerous hai.',
    steps: [
      { icon: '🫁', text: 'Box breathing technique: 4-4-4-4. Inhale 4sec → Hold 4sec → Exhale 4sec → Hold 4sec. Repeat 4x.' },
      { icon: '📵', text: 'Social media 24 ghante ke liye band karo. News bhi. Comparison bahut anxiety deta hai.' },
      { icon: '🏃', text: '20 minute walk daily — anxiety ke liye proven treatment, free, no side effects.' },
      { icon: '📞', text: 'Vandrevala Foundation: 1860-2662-345 (24x7) | iCall: 9152987821 (Mon-Sat)' },
    ],
    paths: [
      { icon: '🧘', title: 'Wellbeing Resources', desc: 'Free meditation + breathing guides.' },
      { icon: '📞', title: 'Helpline', desc: 'Aaj call karo — anonymous, free.' },
      { icon: '💬', title: 'Counselor Session', desc: 'Mental health + career dono address.' },
    ],
    crisis: false,
  },
  dropout: {
    title: 'Ruko — pehle baat karte hain',
    message: 'India mein 28% students dropout karte hain graduation se pehle. Most of them baad mein regret karte hain — not because college was right, but because they had no alternative mapped out.',
    steps: [
      { icon: '⏸️', text: 'Aaj koi final decision mat lo. 1 week pause karo.' },
      { icon: '📋', text: 'Likho: Chhod kyun raha/rahi ho? Kya specific karna chahte ho baad mein?' },
      { icon: '💡', text: 'NEP 2020 mein multiple exit option hai — certificate/diploma le ke ruk sakte ho officially.' },
      { icon: '💬', text: 'Free session mein alternatives discuss karo — shayad ek different raah dikh jaaye.' },
    ],
    paths: [
      { icon: '📋', title: 'NEP Exit Options', desc: 'Official semester-exit options samjho.' },
      { icon: '🔄', title: 'Alternative Paths', desc: 'Dropout ke baad kya — mapped out.' },
      { icon: '💬', title: 'Free Session', desc: 'Judge-free conversation.' },
    ],
    crisis: false,
  },
  crisis: {
    title: '🆘 Abhi Help Lo — Tum Important Ho',
    message: 'Agar tumhe apne aap ko hurt karne ke thoughts aa rahe hain — please abhi call karo. Yeh temporary feeling hai. Tumhari life permanently valuable hai.',
    steps: [
      { icon: '📞', text: 'iCall: 9152987821 — abhi call karo, Hindi mein, free, confidential' },
      { icon: '📞', text: 'Vandrevala Foundation: 1860-2662-345 — 24x7, free' },
      { icon: '📞', text: 'NIMHANS: 080-46110007' },
      { icon: '🏥', text: 'Nearest hospital emergency — aaj jaao' },
    ],
    paths: [],
    crisis: true,
  },
}

const peerStories = [
  {
    name: 'Arjun, 20',
    city: 'Kota → Pune',
    emoji: '💪',
    story: 'NEET 2 baar fail hua. Family ne kaha "tujhse nahi hoga." CareerDisha ne BAMS + Abroad option dikhaya. Aaj Tbilisi Medical University mein 3rd year hoon. Zindagi badal gayi.',
    outcome: 'MBBS Student, Georgia',
    color: '#EFF6FF',
  },
  {
    name: 'Priya, 22',
    city: 'Nagpur',
    emoji: '🌟',
    story: 'JEE 3 attempts. Parents chahte the IIT. Depression aa gaya tha. Counseling session mein UX Design career pata chala. Ab Swiggy mein Product Designer hoon — ₹18L CTC.',
    outcome: 'Product Designer, Swiggy',
    color: '#F0FDF4',
  },
  {
    name: 'Sneha, 19',
    city: 'Solapur',
    emoji: '⚡',
    story: 'Village se thi, SC category, NEET mein 420 marks. Koi scholarship nahi pata tha. CareerDisha ne Post Matric + Pragati scholarship dilayi. BDS free mein ho rahi hai ab.',
    outcome: 'BDS Student, Pune (Scholarship Holder)',
    color: '#FFFBEB',
  },
]

export default function Wellbeing() {
  const [selectedFeeling, setSelectedFeeling] = useState(null)
  const response = selectedFeeling ? responses[selectedFeeling] : null

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#F8FAFC', all: 'revert', fontFamily: 'system-ui, sans-serif' }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1E1B4B, #312E81)', padding: '56px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.06 }}>
          <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=60" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ display: 'inline-flex', gap: 8, alignItems: 'center', background: 'rgba(255,255,255,0.1)', borderRadius: 20, padding: '6px 16px', marginBottom: 16 }}>
          <span style={{ color: '#A5B4FC', fontSize: 13, fontWeight: 600 }}>🫂 You're Not Alone — CareerDisha Cares</span>
        </div>
        <h1 style={{ fontSize: 'clamp(26px,4vw,46px)', fontWeight: 800, color: '#fff', marginBottom: 12, lineHeight: 1.2 }}>
          Exam Fail Hua? Confused Ho?<br />
          <span style={{ color: '#A5B4FC' }}>Pehle Baat Karte Hain</span>
        </h1>
        <p style={{ color: '#C7D2FE', fontSize: 15, maxWidth: 560, margin: '0 auto 24px', lineHeight: 1.7 }}>
          India mein <strong style={{ color: '#FCA5A5' }}>40 students roz apni jaan dete hain</strong> sirf exam pressure se. CareerDisha mein career guidance aur emotional support dono milte hain — ek saath.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
          <a href="tel:9152987821" style={{
            padding: '14px 28px', borderRadius: 12, background: '#EF4444',
            color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 15,
          }}>📞 iCall: 9152987821</a>
          <Link to="/book" style={{
            padding: '14px 28px', borderRadius: 12, background: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.3)',
            color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: 15,
          }}>Free Counseling Session</Link>
        </div>
      </section>

      {/* Feeling Selector */}
      <section style={{ padding: '48px 24px', maxWidth: 1000, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: '#0F172A', marginBottom: 8 }}>Abhi Kaisa Feel Ho Raha Hai?</h2>
          <p style={{ color: '#64748B', fontSize: 15 }}>Select karo — tumhare liye personalized guidance milegi</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16, marginBottom: 40 }}>
          {feelings.map(f => (
            <button key={f.id} onClick={() => setSelectedFeeling(f.id)} style={{
              padding: '20px 16px', borderRadius: 16, border: `2px solid`,
              cursor: 'pointer', textAlign: 'center', transition: 'all 0.2s',
              background: selectedFeeling === f.id ? f.color : '#fff',
              borderColor: selectedFeeling === f.id ? f.accent : '#E2E8F0',
              boxShadow: selectedFeeling === f.id ? `0 0 0 3px ${f.accent}20` : 'none',
            }}>
              <div style={{ fontSize: 36, marginBottom: 8 }}>{f.emoji}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: selectedFeeling === f.id ? f.accent : '#374151', lineHeight: 1.4 }}>{f.label}</div>
            </button>
          ))}
        </div>

        {/* Response */}
        {response && (
          <div style={{
            background: response.crisis ? '#FEF2F2' : '#fff',
            border: `2px solid ${response.crisis ? '#FCA5A5' : '#E2E8F0'}`,
            borderRadius: 20, padding: 32, marginBottom: 40,
            boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
          }}>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: response.crisis ? '#DC2626' : '#0F172A', marginBottom: 12 }}>
              {response.title}
            </h3>
            <p style={{ color: '#374151', fontSize: 15, lineHeight: 1.7, marginBottom: 24, maxWidth: 700 }}>
              {response.message}
            </p>

            {/* Steps */}
            <div style={{ marginBottom: response.paths.length > 0 ? 28 : 0 }}>
              <h4 style={{ fontWeight: 700, color: '#0F172A', marginBottom: 14, fontSize: 15 }}>
                {response.crisis ? '🆘 Abhi Yeh Karo:' : '✅ Abhi Yeh 4 Kaam Karo:'}
              </h4>
              {response.steps.map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, marginBottom: 14, padding: '14px 16px', background: response.crisis ? '#FEF2F2' : '#F8FAFC', borderRadius: 12 }}>
                  <span style={{ fontSize: 24, flexShrink: 0 }}>{s.icon}</span>
                  <p style={{ color: '#374151', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{s.text}</p>
                </div>
              ))}
            </div>

            {/* Action Cards */}
            {response.paths.length > 0 && (
              <>
                <h4 style={{ fontWeight: 700, color: '#0F172A', marginBottom: 14, fontSize: 15 }}>🚀 Aage Ke Raaste:</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
                  {response.paths.map(p => (
                    <Link to="/book" key={p.title} style={{ textDecoration: 'none' }}>
                      <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 14, padding: 18, cursor: 'pointer', transition: 'all 0.2s' }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#EFF6FF'; e.currentTarget.style.borderColor = '#BFDBFE' }}
                        onMouseLeave={e => { e.currentTarget.style.background = '#F8FAFC'; e.currentTarget.style.borderColor = '#E2E8F0' }}
                      >
                        <div style={{ fontSize: 28, marginBottom: 8 }}>{p.icon}</div>
                        <div style={{ fontWeight: 700, fontSize: 14, color: '#0F172A', marginBottom: 4 }}>{p.title}</div>
                        <div style={{ fontSize: 13, color: '#64748B', lineHeight: 1.5 }}>{p.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </section>

      {/* Peer Stories */}
      <section style={{ background: '#fff', padding: '56px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: '#0F172A', marginBottom: 8 }}>Jinke Haalaath Same The — Unki Kahani</h2>
            <p style={{ color: '#64748B' }}>Verified real students — naam badal diye privacy ke liye</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {peerStories.map(s => (
              <div key={s.name} style={{ background: s.color, borderRadius: 16, padding: 24, border: '1px solid #E2E8F0' }}>
                <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#1E40AF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{s.emoji}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#0F172A', fontSize: 15 }}>{s.name}</div>
                    <div style={{ fontSize: 13, color: '#64748B' }}>{s.city}</div>
                  </div>
                </div>
                <p style={{ color: '#374151', fontSize: 14, lineHeight: 1.7, fontStyle: 'italic', marginBottom: 14 }}>"{s.story}"</p>
                <div style={{ background: '#1E40AF', color: '#fff', borderRadius: 20, padding: '4px 12px', display: 'inline-block', fontSize: 12, fontWeight: 700 }}>✓ {s.outcome}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Helplines */}
      <section style={{ background: '#0F172A', padding: '48px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 26, fontWeight: 800, color: '#fff', marginBottom: 8 }}>📞 Emergency Helplines — Free, Confidential</h2>
          <p style={{ color: '#94A3B8', marginBottom: 28, fontSize: 14 }}>Agar bahut bura lag raha hai — please call karo. Anonymous hai, free hai.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
            {[
              { name: 'iCall (TISS)', number: '9152987821', hours: 'Mon–Sat 8am–10pm', lang: 'Hindi + English' },
              { name: 'Vandrevala Foundation', number: '1860-2662-345', hours: '24×7', lang: 'Multiple languages' },
              { name: 'NIMHANS', number: '080-46110007', hours: '24×7', lang: 'Hindi + Kannada + English' },
              { name: 'iCall WhatsApp', number: '9152987821', hours: 'Chat available', lang: 'Text support' },
            ].map(h => (
              <div key={h.name} style={{ background: '#1E293B', borderRadius: 14, padding: 18, textAlign: 'center' }}>
                <div style={{ fontWeight: 700, color: '#fff', fontSize: 14, marginBottom: 6 }}>{h.name}</div>
                <a href={`tel:${h.number}`} style={{ fontSize: 20, fontWeight: 800, color: '#EF4444', display: 'block', marginBottom: 6, textDecoration: 'none' }}>{h.number}</a>
                <div style={{ fontSize: 12, color: '#64748B' }}>{h.hours}</div>
                <div style={{ fontSize: 12, color: '#64748B' }}>{h.lang}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
