import { useState } from 'react'

const services = [
  'NEET Counseling',
  'JEE Advanced Counseling',
  'MBBS Abroad',
  'Stream Selection (Class 9-10)',
  'Career Assessment',
  'Online Counseling',
]

export default function BookSession() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', class: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) return (
    <div style={{ fontFamily: 'system-ui, sans-serif', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ textAlign: 'center', maxWidth: 480 }}>
        <div style={{ fontSize: 72, marginBottom: 20 }}>🎉</div>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: '#0F172A', marginBottom: 12 }}>Session Booked!</h2>
        <p style={{ color: '#64748B', fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>
          Shukriya <strong>{form.name}</strong>! Humari team aapko <strong>{form.phone}</strong> par 24 ghante mein call karegi aur session schedule karegi.
        </p>
        <div style={{
          background: '#EFF6FF', border: '1px solid #BFDBFE',
          borderRadius: 12, padding: 20, marginBottom: 24,
        }}>
          <p style={{ color: '#1E40AF', fontSize: 14, fontWeight: 500 }}>
            📱 WhatsApp us also at: +91 98765 43210
          </p>
        </div>
        <button onClick={() => setSubmitted(false)} style={{
          padding: '12px 28px', borderRadius: 10,
          background: '#1E40AF', color: '#fff',
          border: 'none', fontWeight: 600, fontSize: 15, cursor: 'pointer',
        }}>Book Another Session</button>
      </div>
    </div>
  )

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#F8FAFC', color: '#1E293B' }}>

      <section style={{ background: 'linear-gradient(135deg, #1E40AF, #1D4ED8)', padding: '56px 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(24px,4vw,42px)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
          Book Your Free Session
        </h1>
        <p style={{ color: '#BFDBFE', fontSize: 16 }}>
          30-minute free consultation — koi payment nahi, koi obligation nahi
        </p>
      </section>

      <section style={{ padding: '56px 24px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40 }}>

          {/* Info Panel */}
          <div>
            <h3 style={{ fontSize: 22, fontWeight: 700, color: '#0F172A', marginBottom: 24 }}>
              Free Session Mein Kya Milega?
            </h3>
            {[
              ['🎯', '30-min expert consultation', 'Apni situation explain karo, expert guide karega'],
              ['📋', 'Initial roadmap', 'Basic action plan — exams, deadlines, options'],
              ['📞', 'Follow-up support', 'WhatsApp pe 3 din tak questions pooch sakte ho'],
              ['💰', 'Zero cost', 'Completely free — no credit card required'],
            ].map(([icon, title, desc]) => (
              <div key={title} style={{ display: 'flex', gap: 14, marginBottom: 20 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: '#EFF6FF', fontSize: 20,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>{icon}</div>
                <div>
                  <div style={{ fontWeight: 600, color: '#0F172A', fontSize: 15 }}>{title}</div>
                  <div style={{ color: '#64748B', fontSize: 13, marginTop: 2 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div style={{ background: '#fff', borderRadius: 20, padding: 32, border: '1px solid #E2E8F0', boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
            <h3 style={{ fontWeight: 700, fontSize: 20, color: '#0F172A', marginBottom: 24 }}>Fill Your Details</h3>
            <form onSubmit={submit}>
              {[
                { name: 'name', label: 'Student Name *', type: 'text', placeholder: 'Poora naam' },
                { name: 'phone', label: 'Phone/WhatsApp *', type: 'tel', placeholder: '+91 98765 43210' },
                { name: 'email', label: 'Email', type: 'email', placeholder: 'email@example.com' },
              ].map(f => (
                <div key={f.name} style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>{f.label}</label>
                  <input
                    type={f.type} name={f.name} value={form[f.name]} onChange={handle}
                    placeholder={f.placeholder} required={f.label.includes('*')}
                    style={{
                      width: '100%', padding: '12px 14px', borderRadius: 10,
                      border: '1.5px solid #E2E8F0', fontSize: 15, outline: 'none',
                      boxSizing: 'border-box', transition: 'border-color 0.2s',
                    }}
                    onFocus={e => e.target.style.borderColor = '#3B82F6'}
                    onBlur={e => e.target.style.borderColor = '#E2E8F0'}
                  />
                </div>
              ))}

              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Current Class *</label>
                <select name="class" value={form.class} onChange={handle} required style={{
                  width: '100%', padding: '12px 14px', borderRadius: 10,
                  border: '1.5px solid #E2E8F0', fontSize: 15, background: '#fff', boxSizing: 'border-box',
                }}>
                  <option value="">Select class</option>
                  {['Class 9', 'Class 10', 'Class 11', 'Class 12', 'Repeater/Drop Year', 'Already Graduated'].map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Service Required *</label>
                <select name="service" value={form.service} onChange={handle} required style={{
                  width: '100%', padding: '12px 14px', borderRadius: 10,
                  border: '1.5px solid #E2E8F0', fontSize: 15, background: '#fff', boxSizing: 'border-box',
                }}>
                  <option value="">Select service</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Message (Optional)</label>
                <textarea name="message" value={form.message} onChange={handle}
                  placeholder="Apna situation briefly batao..."
                  rows={3} style={{
                    width: '100%', padding: '12px 14px', borderRadius: 10,
                    border: '1.5px solid #E2E8F0', fontSize: 15, resize: 'vertical',
                    boxSizing: 'border-box', fontFamily: 'inherit',
                  }} />
              </div>

              <button type="submit" style={{
                width: '100%', padding: '14px', borderRadius: 12,
                background: 'linear-gradient(135deg, #1E40AF, #3B82F6)',
                color: '#fff', border: 'none', fontWeight: 700, fontSize: 16,
                cursor: 'pointer', boxShadow: '0 6px 18px rgba(30,64,175,0.3)',
              }}>
                Book Free Session →
              </button>

              <p style={{ textAlign: 'center', fontSize: 12, color: '#94A3B8', marginTop: 12 }}>
                By submitting, you agree to be contacted on WhatsApp/Phone
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
