import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const links = [
  { to: '/', label: 'Home' },
  { to: '/exams', label: '🧠 Exams' },
  { to: '/classes', label: '🏫 Classes' },
  { to: '/scholarships', label: '🎓 Scholarships' },
  { to: '/careers2030', label: '🚀 Careers 2030' },
  { to: '/global-education', label: '🌍 Global Education' },
  { to: '/wellbeing', label: '💚 Wellbeing' },
  { to: '/parents', label: '👨‍👩‍👧 Parents' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { user, isLoggedIn } = useAuth()

  return (
    <nav style={{
      background: '#fff',
      boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 68,
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10,
            background: 'linear-gradient(135deg, #1E40AF, #3B82F6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontWeight: 800, fontSize: 18,
          }}>CD</div>
          <span style={{ fontWeight: 700, fontSize: 22, color: '#1E40AF' }}>
            Career<span style={{ color: '#F59E0B' }}>Disha</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }} className="desktop-nav">
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              padding: '8px 16px',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: 15,
              color: pathname === l.to ? '#1E40AF' : '#374151',
              background: pathname === l.to ? '#EFF6FF' : 'transparent',
              transition: 'all 0.2s',
            }}>{l.label}</Link>
          ))}
          {isLoggedIn ? (
            <Link to="/dashboard" style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '8px 16px', borderRadius: 8, textDecoration: 'none',
              background: '#EFF6FF', border: '1.5px solid #BFDBFE', marginLeft: 8,
            }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg, #1E40AF, #3B82F6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 11 }}>{user.avatar}</div>
              <span style={{ color: '#1E40AF', fontWeight: 600, fontSize: 14 }}>My Dashboard</span>
            </Link>
          ) : (
            <>
              <Link to="/login" style={{ padding: '10px 18px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14, color: '#374151', border: '1.5px solid #E2E8F0', marginLeft: 8 }}>Login</Link>
              <Link to="/book" style={{
                padding: '10px 22px', borderRadius: 8, textDecoration: 'none',
                fontWeight: 600, fontSize: 14, color: '#fff',
                background: 'linear-gradient(135deg, #1E40AF, #3B82F6)',
                marginLeft: 6, boxShadow: '0 4px 12px rgba(30,64,175,0.3)',
              }}>Book Free Session</Link>
            </>
          )}
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} style={{
          display: 'none', background: 'none', border: 'none', cursor: 'pointer',
          flexDirection: 'column', gap: 5, padding: 4,
        }} className="hamburger">
          <span style={{ display: 'block', width: 24, height: 2, background: '#374151', borderRadius: 2 }} />
          <span style={{ display: 'block', width: 24, height: 2, background: '#374151', borderRadius: 2 }} />
          <span style={{ display: 'block', width: 24, height: 2, background: '#374151', borderRadius: 2 }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{
          borderTop: '1px solid #E5E7EB',
          padding: '16px 24px',
          display: 'flex', flexDirection: 'column', gap: 4,
          background: '#fff',
        }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} style={{
              padding: '12px 16px', borderRadius: 8, textDecoration: 'none',
              fontWeight: 500, color: '#374151', fontSize: 16,
            }}>{l.label}</Link>
          ))}
          <Link to="/book" onClick={() => setOpen(false)} style={{
            padding: '12px 16px', borderRadius: 8, textDecoration: 'none',
            fontWeight: 600, color: '#fff', background: '#1E40AF',
            textAlign: 'center', marginTop: 8,
          }}>Book Free Session</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
