import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const roadmapSteps = [
  { step: 1, title: 'Profile Complete Karo', desc: 'Apna class, stream, target exam fill karo', icon: '👤', done: true },
  { step: 2, title: 'Free Assessment Lo', desc: 'Psychometric test — 15 minutes', icon: '🧪', done: true },
  { step: 3, title: 'First Counseling Session', desc: 'Expert se baat karo', icon: '💬', done: false },
  { step: 4, title: 'Exam Strategy Banao', desc: 'Cutoff, college list, timeline', icon: '🎯', done: false },
  { step: 5, title: 'Scholarship Apply Karo', desc: 'Eligible scholarships ke liye apply', icon: '🎓', done: false },
  { step: 6, title: 'College Admission', desc: 'Final admission complete', icon: '🏛️', done: false },
]

const mockSessions = [
  { id: 1, type: 'NEET Counseling', counselor: 'Dr. Meera Joshi', date: 'June 10, 2025', time: '4:00 PM', status: 'upcoming', mode: 'Online', notes: 'College list + cutoff strategy' },
  { id: 2, type: 'Stream Selection', counselor: 'Prof. Raj Kumar', date: 'May 28, 2025', time: '5:30 PM', status: 'completed', mode: 'Online', notes: 'PCB recommended, NEET target confirmed' },
]

const mockScholarships = [
  { name: 'NSP Central Sector', amount: '₹20,000/year', status: 'Apply Now', deadline: 'Oct 31, 2025', color: '#EFF6FF', accent: '#1E40AF' },
  { name: 'Post Matric SC', amount: '₹5,500/year', status: 'Eligible', deadline: 'Oct 15, 2025', color: '#F0FDF4', accent: '#059669' },
  { name: 'AICTE Pragati', amount: '₹50,000/year', status: 'Check Later', deadline: 'After Admission', color: '#FFFBEB', accent: '#D97706' },
]

const mockExams = [
  { name: 'NEET UG 2025', date: 'May 4, 2025', daysLeft: 14, status: 'Upcoming', color: '#EFF6FF' },
  { name: 'NEET Registration', date: 'Feb 28, 2025', daysLeft: -60, status: 'Closed', color: '#FEF2F2' },
  { name: 'MCC Counseling', date: 'July 2025', daysLeft: 75, status: 'After Result', color: '#F0FDF4' },
]

const savedCareers = [
  { title: 'AI/ML Engineer', icon: '🤖', salary: '₹6–35L', match: 92 },
  { title: 'Biotech Researcher', icon: '🧬', salary: '₹4–20L', match: 87 },
  { title: 'Mental Health Counselor', icon: '🧠', salary: '₹3–18L', match: 78 },
]

export default function Dashboard() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')

  if (!user) {
    navigate('/login')
    return null
  }

  const handleLogout = () => { logout(); navigate('/') }

  const tabs = [
    { id: 'overview', label: '🏠 Overview' },
    { id: 'roadmap', label: '🗺️ Roadmap' },
    { id: 'sessions', label: '📅 Sessions' },
    { id: 'scholarships', label: '🎓 Scholarships' },
    { id: 'exams', label: '📋 Exams' },
    { id: 'careers', label: '🚀 Saved Careers' },
  ]

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#F1F5F9', minHeight: '100vh', all: 'revert', fontFamily: 'system-ui, sans-serif' }}>

      {/* Top Bar */}
      <div style={{ background: '#fff', borderBottom: '1px solid #E2E8F0', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64, position: 'sticky', top: 0, zIndex: 100 }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: 'linear-gradient(135deg, #1E40AF, #3B82F6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 14 }}>CD</div>
          <span style={{ fontWeight: 700, fontSize: 18, color: '#1E40AF' }}>Career<span style={{ color: '#F59E0B' }}>Disha</span></span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Link to="/book" style={{ padding: '8px 18px', borderRadius: 8, background: '#1E40AF', color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
            + Book Session
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, #1E40AF, #3B82F6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 13 }}>
              {user.avatar}
            </div>
            <div style={{ display: 'none' }} className="user-name">
              <div style={{ fontSize: 14, fontWeight: 600, color: '#0F172A' }}>{user.name}</div>
            </div>
          </div>
          <button onClick={handleLogout} style={{ background: 'none', border: '1px solid #E2E8F0', borderRadius: 8, padding: '7px 14px', cursor: 'pointer', fontSize: 13, color: '#64748B' }}>Logout</button>
        </div>
      </div>

      <div style={{ maxWidth: 1300, margin: '0 auto', padding: '24px 24px', display: 'grid', gridTemplateColumns: '220px 1fr', gap: 24 }}>

        {/* Sidebar */}
        <div>
          {/* Profile Card */}
          <div style={{ background: 'linear-gradient(135deg, #1E40AF, #1D4ED8)', borderRadius: 16, padding: 20, marginBottom: 16, color: '#fff', textAlign: 'center' }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 20, margin: '0 auto 10px' }}>{user.avatar}</div>
            <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 2 }}>{user.name}</div>
            <div style={{ fontSize: 12, color: '#BFDBFE', marginBottom: 4 }}>{user.class} · {user.target || 'Target not set'}</div>
            <div style={{ fontSize: 12, color: '#BFDBFE' }}>📍 {user.city || 'City not set'}</div>
            <div style={{ marginTop: 14, background: 'rgba(255,255,255,0.1)', borderRadius: 20, padding: '4px 0' }}>
              <div style={{ fontSize: 11, color: '#93C5FD' }}>Roadmap Progress</div>
              <div style={{ fontSize: 18, fontWeight: 800 }}>
                {Math.round((roadmapSteps.filter(r => r.done).length / roadmapSteps.length) * 100)}%
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <div style={{ background: '#fff', borderRadius: 14, padding: 8, border: '1px solid #E2E8F0' }}>
            {tabs.map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
                width: '100%', padding: '11px 14px', borderRadius: 10, border: 'none',
                cursor: 'pointer', textAlign: 'left', fontSize: 13, fontWeight: 500,
                background: activeTab === tab.id ? '#EFF6FF' : 'transparent',
                color: activeTab === tab.id ? '#1E40AF' : '#374151',
                marginBottom: 2,
              }}>{tab.label}</button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div>

          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginBottom: 4 }}>
                Namaste, {user.name.split(' ')[0]}! 👋
              </h2>
              <p style={{ color: '#64748B', marginBottom: 24, fontSize: 14 }}>Tumhara career dashboard — sab kuch ek jagah.</p>

              {/* Stats Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16, marginBottom: 28 }}>
                {[
                  { icon: '📅', label: 'Sessions', value: user.sessions, sub: 'Completed', color: '#EFF6FF', accent: '#1E40AF', link: '/book' },
                  { icon: '🎓', label: 'Scholarships', value: user.scholarships, sub: 'Eligible', color: '#F0FDF4', accent: '#059669', link: '/scholarships' },
                  { icon: '🏦', label: 'Loan Apps', value: user.loans, sub: 'Applied', color: '#FFFBEB', accent: '#D97706', link: '/classes' },
                  { icon: '🗺️', label: 'Roadmap', value: `${Math.round((roadmapSteps.filter(r => r.done).length / roadmapSteps.length) * 100)}%`, sub: 'Complete', color: '#F5F3FF', accent: '#7C3AED', link: '#' },
                ].map(s => (
                  <Link to={s.link} key={s.label} style={{ textDecoration: 'none' }}>
                    <div style={{ background: '#fff', borderRadius: 14, padding: 18, border: '1px solid #E2E8F0', transition: 'transform 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
                      <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
                      <div style={{ fontSize: 28, fontWeight: 800, color: s.accent }}>{s.value}</div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: '#0F172A' }}>{s.label}</div>
                      <div style={{ fontSize: 11, color: '#94A3B8' }}>{s.sub}</div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Next Action */}
              <div style={{ background: 'linear-gradient(135deg, #1E40AF, #1D4ED8)', borderRadius: 16, padding: 24, marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
                <div>
                  <div style={{ color: '#BFDBFE', fontSize: 13, marginBottom: 4 }}>⚡ Next Recommended Action</div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: 18, marginBottom: 4 }}>Counseling Session Book Karo</div>
                  <div style={{ color: '#93C5FD', fontSize: 13 }}>Exam strategy + college list ke liye expert session</div>
                </div>
                <Link to="/book" style={{ padding: '12px 24px', background: '#F59E0B', color: '#fff', borderRadius: 12, textDecoration: 'none', fontWeight: 700, fontSize: 14, whiteSpace: 'nowrap' }}>
                  Book Now →
                </Link>
              </div>

              {/* Two columns */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>

                {/* Upcoming Sessions */}
                <div style={{ background: '#fff', borderRadius: 16, padding: 20, border: '1px solid #E2E8F0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                    <h3 style={{ fontWeight: 700, fontSize: 16, color: '#0F172A' }}>📅 Upcoming Sessions</h3>
                    <button onClick={() => setActiveTab('sessions')} style={{ background: 'none', border: 'none', color: '#1E40AF', fontSize: 13, cursor: 'pointer', fontWeight: 600 }}>See All</button>
                  </div>
                  {mockSessions.filter(s => s.status === 'upcoming').map(s => (
                    <div key={s.id} style={{ background: '#EFF6FF', borderRadius: 12, padding: 14, marginBottom: 10 }}>
                      <div style={{ fontWeight: 600, color: '#0F172A', fontSize: 14, marginBottom: 4 }}>{s.type}</div>
                      <div style={{ fontSize: 12, color: '#3B82F6' }}>📅 {s.date} · {s.time}</div>
                      <div style={{ fontSize: 12, color: '#64748B' }}>👩‍💼 {s.counselor}</div>
                    </div>
                  ))}
                  <Link to="/book" style={{ display: 'block', textAlign: 'center', padding: '10px', background: '#EFF6FF', borderRadius: 10, textDecoration: 'none', color: '#1E40AF', fontWeight: 600, fontSize: 13, marginTop: 8 }}>
                    + Book New Session
                  </Link>
                </div>

                {/* Scholarship Deadlines */}
                <div style={{ background: '#fff', borderRadius: 16, padding: 20, border: '1px solid #E2E8F0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                    <h3 style={{ fontWeight: 700, fontSize: 16, color: '#0F172A' }}>🎓 Scholarship Deadlines</h3>
                    <button onClick={() => setActiveTab('scholarships')} style={{ background: 'none', border: 'none', color: '#059669', fontSize: 13, cursor: 'pointer', fontWeight: 600 }}>See All</button>
                  </div>
                  {mockScholarships.map(s => (
                    <div key={s.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #F1F5F9' }}>
                      <div>
                        <div style={{ fontWeight: 600, color: '#0F172A', fontSize: 13 }}>{s.name}</div>
                        <div style={{ fontSize: 11, color: '#64748B' }}>📅 {s.deadline}</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: '#059669' }}>{s.amount}</div>
                        <span style={{ background: s.color, color: s.accent, fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 10 }}>{s.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ROADMAP TAB */}
          {activeTab === 'roadmap' && (
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginBottom: 4 }}>🗺️ Career Roadmap</h2>
              <p style={{ color: '#64748B', marginBottom: 28, fontSize: 14 }}>Step by step — tumhara personalized career journey</p>

              <div style={{ background: '#fff', borderRadius: 20, padding: 32, border: '1px solid #E2E8F0' }}>
                {/* Progress bar */}
                <div style={{ marginBottom: 32 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontWeight: 700, color: '#0F172A' }}>Overall Progress</span>
                    <span style={{ fontWeight: 700, color: '#1E40AF' }}>{Math.round((roadmapSteps.filter(r => r.done).length / roadmapSteps.length) * 100)}%</span>
                  </div>
                  <div style={{ height: 10, background: '#E2E8F0', borderRadius: 5 }}>
                    <div style={{ height: '100%', borderRadius: 5, width: `${Math.round((roadmapSteps.filter(r => r.done).length / roadmapSteps.length) * 100)}%`, background: 'linear-gradient(135deg, #1E40AF, #3B82F6)' }} />
                  </div>
                </div>

                {roadmapSteps.map((step, i) => (
                  <div key={step.step} style={{ display: 'flex', gap: 20, marginBottom: 8 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
                        background: step.done ? 'linear-gradient(135deg, #059669, #10B981)' : i === roadmapSteps.findIndex(r => !r.done) ? 'linear-gradient(135deg, #1E40AF, #3B82F6)' : '#E2E8F0',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: step.done ? 20 : 18, color: step.done ? '#fff' : i === roadmapSteps.findIndex(r => !r.done) ? '#fff' : '#94A3B8',
                      }}>
                        {step.done ? '✓' : step.icon}
                      </div>
                      {i < roadmapSteps.length - 1 && <div style={{ width: 2, height: 40, background: step.done ? '#10B981' : '#E2E8F0', margin: '4px 0' }} />}
                    </div>
                    <div style={{ paddingTop: 8, flex: 1, paddingBottom: 12 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                        <h4 style={{ fontWeight: 700, fontSize: 16, color: step.done ? '#059669' : '#0F172A' }}>{step.title}</h4>
                        {step.done && <span style={{ background: '#ECFDF5', color: '#059669', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 10 }}>✓ Done</span>}
                        {!step.done && i === roadmapSteps.findIndex(r => !r.done) && <span style={{ background: '#EFF6FF', color: '#1E40AF', fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 10 }}>← Next Step</span>}
                      </div>
                      <p style={{ color: '#64748B', fontSize: 14 }}>{step.desc}</p>
                      {!step.done && i === roadmapSteps.findIndex(r => !r.done) && (
                        <Link to="/book" style={{ display: 'inline-block', marginTop: 8, padding: '8px 18px', background: '#1E40AF', color: '#fff', borderRadius: 8, textDecoration: 'none', fontSize: 13, fontWeight: 600 }}>
                          Start This Step →
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SESSIONS TAB */}
          {activeTab === 'sessions' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <div>
                  <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginBottom: 4 }}>📅 My Sessions</h2>
                  <p style={{ color: '#64748B', fontSize: 14 }}>All counseling sessions — completed aur upcoming</p>
                </div>
                <Link to="/book" style={{ padding: '10px 20px', background: '#1E40AF', color: '#fff', borderRadius: 10, textDecoration: 'none', fontWeight: 600, fontSize: 14 }}>+ Book New</Link>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {mockSessions.map(s => (
                  <div key={s.id} style={{ background: '#fff', borderRadius: 16, padding: 22, border: `1px solid ${s.status === 'upcoming' ? '#BFDBFE' : '#E2E8F0'}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
                    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                      <div style={{ width: 48, height: 48, borderRadius: 12, background: s.status === 'upcoming' ? '#EFF6FF' : '#F0FDF4', fontSize: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {s.status === 'upcoming' ? '📅' : '✅'}
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 16, color: '#0F172A', marginBottom: 2 }}>{s.type}</div>
                        <div style={{ fontSize: 13, color: '#64748B' }}>👩‍💼 {s.counselor} · {s.mode}</div>
                        <div style={{ fontSize: 13, color: '#1E40AF', marginTop: 2 }}>📅 {s.date} · {s.time}</div>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ background: s.status === 'upcoming' ? '#EFF6FF' : '#F0FDF4', color: s.status === 'upcoming' ? '#1E40AF' : '#059669', fontSize: 12, fontWeight: 700, padding: '4px 12px', borderRadius: 20 }}>
                        {s.status === 'upcoming' ? '🔔 Upcoming' : '✓ Completed'}
                      </span>
                      <div style={{ fontSize: 12, color: '#64748B', marginTop: 6 }}>📝 {s.notes}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ background: '#EFF6FF', borderRadius: 16, padding: 20, marginTop: 16, textAlign: 'center', border: '1px dashed #BFDBFE' }}>
                <p style={{ color: '#1E40AF', fontWeight: 600, marginBottom: 10 }}>Ready for next session?</p>
                <Link to="/book" style={{ padding: '12px 28px', background: '#1E40AF', color: '#fff', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: 14 }}>Book Next Session →</Link>
              </div>
            </div>
          )}

          {/* SCHOLARSHIPS TAB */}
          {activeTab === 'scholarships' && (
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginBottom: 4 }}>🎓 My Scholarships</h2>
              <p style={{ color: '#64748B', marginBottom: 24, fontSize: 14 }}>Tumhare profile ke basis par eligible scholarships</p>
              <div style={{ display: 'grid', gap: 16 }}>
                {mockScholarships.map(s => (
                  <div key={s.name} style={{ background: '#fff', borderRadius: 16, padding: 22, border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
                    <div>
                      <h4 style={{ fontWeight: 700, fontSize: 16, color: '#0F172A', marginBottom: 4 }}>{s.name}</h4>
                      <div style={{ fontSize: 13, color: '#64748B' }}>📅 Deadline: {s.deadline}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <div style={{ fontSize: 20, fontWeight: 800, color: '#059669' }}>{s.amount}</div>
                      <Link to="/scholarships" style={{ padding: '10px 20px', background: s.accent, color: '#fff', borderRadius: 10, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>
                        {s.status === 'Apply Now' ? 'Apply Now →' : 'View Details'}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 16 }}>
                <Link to="/scholarships" style={{ display: 'block', textAlign: 'center', padding: '14px', background: 'linear-gradient(135deg, #059669, #10B981)', color: '#fff', borderRadius: 12, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
                  Sab Scholarships Dekho (50+) →
                </Link>
              </div>
            </div>
          )}

          {/* EXAMS TAB */}
          {activeTab === 'exams' && (
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginBottom: 4 }}>📋 Exam Tracker</h2>
              <p style={{ color: '#64748B', marginBottom: 24, fontSize: 14 }}>Tumhare target exams ki dates aur status</p>
              <div style={{ display: 'grid', gap: 14 }}>
                {mockExams.map(e => (
                  <div key={e.name} style={{ background: '#fff', borderRadius: 14, padding: 20, border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                    <div>
                      <h4 style={{ fontWeight: 700, fontSize: 16, color: '#0F172A', marginBottom: 4 }}>{e.name}</h4>
                      <div style={{ fontSize: 13, color: '#64748B' }}>📅 {e.date}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: e.daysLeft > 0 ? 22 : 16, fontWeight: 800, color: e.daysLeft > 30 ? '#059669' : e.daysLeft > 0 ? '#D97706' : '#94A3B8' }}>
                        {e.daysLeft > 0 ? `${e.daysLeft} days left` : e.status}
                      </div>
                      <span style={{ background: e.color, fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 10, color: '#374151' }}>{e.status}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/exams" style={{ display: 'block', textAlign: 'center', padding: '14px', background: 'linear-gradient(135deg, #0F172A, #1E3A5F)', color: '#fff', borderRadius: 12, textDecoration: 'none', fontWeight: 700, fontSize: 15, marginTop: 16 }}>
                Full Exam Guide Dekho →
              </Link>
            </div>
          )}

          {/* SAVED CAREERS TAB */}
          {activeTab === 'careers' && (
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginBottom: 4 }}>🚀 Saved Careers</h2>
              <p style={{ color: '#64748B', marginBottom: 24, fontSize: 14 }}>Tumne explore kiye careers — match percentage ke saath</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16, marginBottom: 20 }}>
                {savedCareers.map(c => (
                  <div key={c.title} style={{ background: '#fff', borderRadius: 16, padding: 22, border: '1px solid #E2E8F0' }}>
                    <div style={{ fontSize: 36, marginBottom: 12 }}>{c.icon}</div>
                    <h4 style={{ fontWeight: 700, fontSize: 16, color: '#0F172A', marginBottom: 4 }}>{c.title}</h4>
                    <div style={{ fontSize: 14, color: '#059669', fontWeight: 600, marginBottom: 12 }}>{c.salary}</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ fontSize: 13, color: '#64748B' }}>Profile Match</div>
                      <div style={{ fontWeight: 800, color: '#1E40AF', fontSize: 16 }}>{c.match}%</div>
                    </div>
                    <div style={{ height: 6, background: '#E2E8F0', borderRadius: 3, marginTop: 6 }}>
                      <div style={{ height: '100%', borderRadius: 3, width: `${c.match}%`, background: 'linear-gradient(135deg, #1E40AF, #3B82F6)' }} />
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/careers2030" style={{ display: 'block', textAlign: 'center', padding: '14px', background: 'linear-gradient(135deg, #0F172A, #1E3A5F)', color: '#fff', borderRadius: 12, textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>
                350+ Careers Explore Karo →
              </Link>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
