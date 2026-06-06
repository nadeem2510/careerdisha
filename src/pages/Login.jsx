import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

// Mock student profiles for demo
const mockUsers = [
  { id: 1, name: 'Rahul Patil', email: 'rahul@example.com', password: '1234', phone: '9876543210', class: 'Class 12', stream: 'PCM', target: 'JEE Advanced', city: 'Pune', avatar: 'RP', sessions: 2, scholarships: 3, loans: 1, roadmapStep: 3 },
  { id: 2, name: 'Priya Sharma', email: 'priya@example.com', password: '1234', phone: '9876543211', class: 'Class 12', stream: 'PCB', target: 'NEET', city: 'Nagpur', avatar: 'PS', sessions: 1, scholarships: 5, loans: 0, roadmapStep: 2 },
]

export default function Login() {
  const [isSignup, setIsSignup] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', class: '', stream: '', target: '', city: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleLogin = (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setTimeout(() => {
      const user = mockUsers.find(u => u.email === form.email && u.password === form.password)
      if (user) {
        login(user)
        navigate('/dashboard')
      } else {
        setError('Email ya password galat hai. Demo: rahul@example.com / 1234')
      }
      setLoading(false)
    }, 800)
  }

  const handleSignup = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      const newUser = {
        id: Date.now(), name: form.name, email: form.email, phone: form.phone,
        class: form.class, stream: form.stream, target: form.target, city: form.city,
        avatar: form.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2),
        sessions: 0, scholarships: 0, loans: 0, roadmapStep: 1,
      }
      login(newUser)
      navigate('/dashboard')
      setLoading(false)
    }, 800)
  }

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', minHeight: '100vh', background: 'linear-gradient(135deg, #EFF6FF, #fff, #FFFBEB)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ width: '100%', maxWidth: 900, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 0, borderRadius: 24, overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.12)' }}>

        {/* Left Panel */}
        <div style={{ background: 'linear-gradient(135deg, #1E40AF, #1D4ED8)', padding: '48px 36px', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 40 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 16, color: '#fff' }}>CD</div>
            <span style={{ fontWeight: 700, fontSize: 20, color: '#fff' }}>Career<span style={{ color: '#F59E0B' }}>Disha</span></span>
          </Link>
          <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16, lineHeight: 1.3 }}>Apna Career Dashboard Access Karo</h2>
          <p style={{ color: '#BFDBFE', lineHeight: 1.7, marginBottom: 32, fontSize: 15 }}>Sessions track karo, scholarships discover karo, career roadmap dekho — sab ek jagah.</p>
          {[
            ['📋', 'Personal Career Roadmap'],
            ['🎓', 'Scholarship Tracker'],
            ['📅', 'Session History & Upcoming'],
            ['🏦', 'Loan Application Status'],
            ['🚀', 'Saved Careers & Exams'],
          ].map(([icon, text]) => (
            <div key={text} style={{ display: 'flex', gap: 12, marginBottom: 14, alignItems: 'center' }}>
              <span style={{ fontSize: 20 }}>{icon}</span>
              <span style={{ color: '#DBEAFE', fontSize: 14 }}>{text}</span>
            </div>
          ))}

          {/* Demo credentials */}
          <div style={{ marginTop: 28, background: 'rgba(255,255,255,0.1)', borderRadius: 12, padding: 14 }}>
            <p style={{ color: '#FEF3C7', fontSize: 12, fontWeight: 600, marginBottom: 4 }}>🔑 Demo Login:</p>
            <p style={{ color: '#BFDBFE', fontSize: 12 }}>Email: rahul@example.com</p>
            <p style={{ color: '#BFDBFE', fontSize: 12 }}>Password: 1234</p>
          </div>
        </div>

        {/* Right Panel — Form */}
        <div style={{ background: '#fff', padding: '48px 36px' }}>
          <div style={{ display: 'flex', gap: 0, marginBottom: 32, border: '1.5px solid #E2E8F0', borderRadius: 12, overflow: 'hidden' }}>
            {['Login', 'Sign Up'].map((tab, i) => (
              <button key={tab} onClick={() => { setIsSignup(i === 1); setError('') }} style={{
                flex: 1, padding: '12px', border: 'none', cursor: 'pointer',
                fontWeight: 700, fontSize: 14,
                background: (isSignup ? i === 1 : i === 0) ? '#1E40AF' : '#fff',
                color: (isSignup ? i === 1 : i === 0) ? '#fff' : '#374151',
              }}>{tab}</button>
            ))}
          </div>

          {error && (
            <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 10, padding: '12px 14px', marginBottom: 16, fontSize: 13, color: '#DC2626' }}>
              ⚠️ {error}
            </div>
          )}

          {/* LOGIN FORM */}
          {!isSignup && (
            <form onSubmit={handleLogin}>
              <h3 style={{ fontWeight: 800, fontSize: 22, color: '#0F172A', marginBottom: 24 }}>Welcome Back! 👋</h3>
              {[
                { name: 'email', label: 'Email', type: 'email', placeholder: 'aapka@email.com' },
                { name: 'password', label: 'Password', type: 'password', placeholder: '••••••••' },
              ].map(f => (
                <div key={f.name} style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }}>{f.label}</label>
                  <input name={f.name} type={f.type} value={form[f.name]} onChange={handle} placeholder={f.placeholder} required style={{
                    width: '100%', padding: '12px 14px', borderRadius: 10, border: '1.5px solid #E2E8F0', fontSize: 15, boxSizing: 'border-box',
                    outline: 'none',
                  }}
                    onFocus={e => e.target.style.borderColor = '#3B82F6'}
                    onBlur={e => e.target.style.borderColor = '#E2E8F0'} />
                </div>
              ))}
              <button type="submit" disabled={loading} style={{
                width: '100%', padding: '14px', borderRadius: 12,
                background: loading ? '#93C5FD' : 'linear-gradient(135deg, #1E40AF, #3B82F6)',
                color: '#fff', border: 'none', fontWeight: 700, fontSize: 16, cursor: loading ? 'not-allowed' : 'pointer',
                marginTop: 8,
              }}>{loading ? 'Logging in...' : 'Login →'}</button>
              <p style={{ textAlign: 'center', marginTop: 16, fontSize: 13, color: '#64748B' }}>
                Account nahi hai? <button type="button" onClick={() => setIsSignup(true)} style={{ color: '#1E40AF', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: 13 }}>Sign Up karo</button>
              </p>
            </form>
          )}

          {/* SIGNUP FORM */}
          {isSignup && (
            <form onSubmit={handleSignup}>
              <h3 style={{ fontWeight: 800, fontSize: 22, color: '#0F172A', marginBottom: 20 }}>Apna Account Banao 🚀</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {[
                  { name: 'name', label: 'Full Name *', placeholder: 'Aapka naam', type: 'text', full: true },
                  { name: 'phone', label: 'Phone *', placeholder: '+91 XXXXX XXXXX', type: 'tel' },
                  { name: 'email', label: 'Email *', placeholder: 'email@example.com', type: 'email' },
                  { name: 'city', label: 'City', placeholder: 'Pune, Mumbai...', type: 'text' },
                  { name: 'password', label: 'Password *', placeholder: 'Min 6 characters', type: 'password', full: true },
                ].map(f => (
                  <div key={f.name} style={{ gridColumn: f.full ? '1 / -1' : 'auto' }}>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#374151', marginBottom: 5 }}>{f.label}</label>
                    <input name={f.name} type={f.type} value={form[f.name]} onChange={handle} placeholder={f.placeholder} required={f.label.includes('*')} style={{
                      width: '100%', padding: '10px 12px', borderRadius: 10, border: '1.5px solid #E2E8F0', fontSize: 14, boxSizing: 'border-box',
                    }} />
                  </div>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 12 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#374151', marginBottom: 5 }}>Current Class</label>
                  <select name="class" value={form.class} onChange={handle} style={{ width: '100%', padding: '10px 12px', borderRadius: 10, border: '1.5px solid #E2E8F0', fontSize: 14, background: '#fff', boxSizing: 'border-box' }}>
                    <option value="">Select</option>
                    {['Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12', 'Dropper', 'Graduate'].map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#374151', marginBottom: 5 }}>Target Exam</label>
                  <select name="target" value={form.target} onChange={handle} style={{ width: '100%', padding: '10px 12px', borderRadius: 10, border: '1.5px solid #E2E8F0', fontSize: 14, background: '#fff', boxSizing: 'border-box' }}>
                    <option value="">Select</option>
                    {['NEET', 'JEE Mains', 'JEE Advanced', 'CLAT', 'UPSC', 'NDA', 'CAT', 'Not decided'].map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              <button type="submit" disabled={loading} style={{
                width: '100%', padding: '14px', borderRadius: 12, marginTop: 20,
                background: loading ? '#93C5FD' : 'linear-gradient(135deg, #1E40AF, #3B82F6)',
                color: '#fff', border: 'none', fontWeight: 700, fontSize: 16, cursor: loading ? 'not-allowed' : 'pointer',
              }}>{loading ? 'Creating account...' : 'Create Account →'}</button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
