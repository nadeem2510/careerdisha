import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#F8FAFC', color: '#1E293B' }}>

      <section style={{ background: 'linear-gradient(135deg, #ECFDF5, #fff)', padding: '56px 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(24px,4vw,42px)', fontWeight: 800, color: '#0F172A', marginBottom: 12 }}>
          Sampark Karein
        </h1>
        <p style={{ color: '#64748B', fontSize: 16 }}>Koi bhi sawaal ho — hum yahan hain</p>
      </section>

      <section style={{ padding: '56px 24px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32 }}>

          {/* Contact Info */}
          <div>
            <h3 style={{ fontWeight: 700, fontSize: 22, color: '#0F172A', marginBottom: 28 }}>Direct Contact</h3>
            {[
              { icon: '📞', label: 'Phone / WhatsApp', value: '+91 98765 43210' },
              { icon: '📧', label: 'Email', value: 'hello@careerdisha.in' },
              { icon: '📍', label: 'Office', value: 'Pune, Maharashtra' },
              { icon: '⏰', label: 'Timings', value: 'Mon–Sat: 9am – 7pm' },
            ].map(c => (
              <div key={c.label} style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12, background: '#EFF6FF',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0,
                }}>{c.icon}</div>
                <div>
                  <div style={{ fontSize: 13, color: '#94A3B8', marginBottom: 2 }}>{c.label}</div>
                  <div style={{ fontWeight: 600, color: '#0F172A', fontSize: 15 }}>{c.value}</div>
                </div>
              </div>
            ))}

            <div style={{
              background: '#FFFBEB', border: '1px solid #FDE68A',
              borderRadius: 12, padding: 16, marginTop: 8,
            }}>
              <p style={{ color: '#92400E', fontSize: 14, fontWeight: 500 }}>
                💬 WhatsApp pe "Hi" bhejo — hum turant reply karenge!
              </p>
            </div>
          </div>

          {/* Quick Message Form */}
          <div style={{ background: '#fff', borderRadius: 20, padding: 32, border: '1px solid #E2E8F0', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontWeight: 700, color: '#0F172A', marginBottom: 8 }}>Message Bheja Gaya!</h3>
                <p style={{ color: '#64748B', fontSize: 14 }}>Hum jaldi reply karenge.</p>
              </div>
            ) : (
              <>
                <h3 style={{ fontWeight: 700, fontSize: 20, color: '#0F172A', marginBottom: 24 }}>Quick Message</h3>
                <form onSubmit={e => { e.preventDefault(); setSent(true) }}>
                  {[
                    { name: 'name', label: 'Aapka Naam', placeholder: 'Naam likhein' },
                    { name: 'phone', label: 'Phone Number', placeholder: '+91 XXXXX XXXXX' },
                  ].map(f => (
                    <div key={f.name} style={{ marginBottom: 16 }}>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>{f.label}</label>
                      <input name={f.name} value={form[f.name]} onChange={handle} placeholder={f.placeholder} required style={{
                        width: '100%', padding: '12px 14px', borderRadius: 10,
                        border: '1.5px solid #E2E8F0', fontSize: 15, boxSizing: 'border-box',
                      }} />
                    </div>
                  ))}
                  <div style={{ marginBottom: 20 }}>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Message</label>
                    <textarea name="message" value={form.message} onChange={handle} rows={4} placeholder="Apna sawaal yahan likhein..." style={{
                      width: '100%', padding: '12px 14px', borderRadius: 10,
                      border: '1.5px solid #E2E8F0', fontSize: 15, resize: 'vertical',
                      boxSizing: 'border-box', fontFamily: 'inherit',
                    }} />
                  </div>
                  <button type="submit" style={{
                    width: '100%', padding: 14, borderRadius: 12,
                    background: 'linear-gradient(135deg, #059669, #10B981)',
                    color: '#fff', border: 'none', fontWeight: 700, fontSize: 15, cursor: 'pointer',
                  }}>Send Message →</button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
