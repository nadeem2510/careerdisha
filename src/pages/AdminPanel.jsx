import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// Mock Admin Data
const mockStats = {
  totalStudents: 1247,
  totalInstitutes: 38,
  pendingApprovals: 7,
  totalSessions: 89,
  monthlyRevenue: 127500,
  totalLeads: 342,
  activeSubscriptions: 24,
  conversionRate: '12.4%',
}

const mockInstitutes = [
  { id: 1, name: 'Aakash Study Center', city: 'Pune', plan: 'Growth', status: 'active', leads: 28, paid: 5999, joined: 'May 2025', contact: '9876543210' },
  { id: 2, name: 'Resonance Classes', city: 'Pune', plan: 'Premium', status: 'active', leads: 45, paid: 9999, joined: 'Apr 2025', contact: '9876543211' },
  { id: 3, name: 'Vidyalankar Institute', city: 'Mumbai', plan: 'Starter', status: 'active', leads: 15, paid: 2999, joined: 'Jun 2025', contact: '9876543212' },
  { id: 4, name: 'Bright Future Academy', city: 'Nashik', plan: 'Free', status: 'pending', leads: 0, paid: 0, joined: 'Jun 2025', contact: '9876543213' },
  { id: 5, name: 'Success Point', city: 'Nagpur', plan: 'Starter', status: 'pending', leads: 0, paid: 2999, joined: 'Jun 2025', contact: '9876543214' },
]

const mockSessions = [
  { id: 1, student: 'Priya Sharma', phone: '9876543210', service: 'NEET Counseling', counselor: 'Dr. Meera', date: 'Jun 10', status: 'upcoming', amount: 2000 },
  { id: 2, student: 'Rahul Patil', phone: '9876543211', service: 'JEE Advanced', counselor: 'Prof. Raj', date: 'Jun 8', status: 'completed', amount: 2000 },
  { id: 3, student: 'Sneha Desai', phone: '9876543212', service: 'MBBS Abroad', counselor: 'Dr. Meera', date: 'Jun 9', status: 'completed', amount: 5000 },
  { id: 4, student: 'Amit Kumar', phone: '9876543213', service: 'Stream Selection', counselor: 'Prof. Raj', date: 'Jun 11', status: 'upcoming', amount: 1500 },
  { id: 5, student: 'Kavya Nair', phone: '9876543214', service: 'Career Assessment', counselor: 'Dr. Meera', date: 'Jun 7', status: 'completed', amount: 1000 },
]

const mockLeads = [
  { id: 1, student: 'Arjun Singh', phone: '9876543215', institute: 'Aakash Study Center', exam: 'NEET', date: 'Jun 9', status: 'new' },
  { id: 2, student: 'Pooja Mehta', phone: '9876543216', institute: 'Resonance Classes', exam: 'JEE', date: 'Jun 8', status: 'contacted' },
  { id: 3, student: 'Rohan Das', phone: '9876543217', institute: 'Aakash Study Center', exam: 'NEET', date: 'Jun 8', status: 'enrolled' },
  { id: 4, student: 'Nisha Rao', phone: '9876543218', institute: 'Bright Future Academy', exam: 'Foundation', date: 'Jun 7', status: 'new' },
]

const planColors = { Premium: '#F59E0B', Growth: '#1E40AF', Starter: '#059669', Free: '#94A3B8' }
const statusColors = { active: '#059669', pending: '#F59E0B', rejected: '#DC2626', upcoming: '#1E40AF', completed: '#059669', new: '#DC2626', contacted: '#F59E0B', enrolled: '#059669' }

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('overview')
  const [instituteFilter, setInstituteFilter] = useState('all')
  const navigate = useNavigate()

  // Simple admin auth check
  const isAdmin = localStorage.getItem('cd_admin') === 'true'
  if (!isAdmin) return <AdminLogin />

  const tabs = [
    { id: 'overview', label: '📊 Overview', },
    { id: 'institutes', label: '🏫 Institutes' },
    { id: 'sessions', label: '📅 Sessions' },
    { id: 'leads', label: '🎯 Leads' },
    { id: 'revenue', label: '💰 Revenue' },
    { id: 'students', label: '👥 Students' },
  ]

  const pendingInstitutes = mockInstitutes.filter(i => i.status === 'pending')

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#F1F5F9', minHeight: '100vh', all: 'revert', fontFamily: 'system-ui, sans-serif' }}>

      {/* Top Bar */}
      <div style={{ background: '#0F172A', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60, position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg, #1E40AF, #3B82F6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 13 }}>CD</div>
            <span style={{ fontWeight: 700, fontSize: 16, color: '#fff' }}>CareerDisha <span style={{ color: '#F59E0B', fontSize: 12, fontWeight: 500 }}>Admin</span></span>
          </Link>
          {pendingInstitutes.length > 0 && (
            <div style={{ background: '#DC2626', color: '#fff', borderRadius: 20, padding: '2px 10px', fontSize: 12, fontWeight: 700 }}>
              {pendingInstitutes.length} pending approvals
            </div>
          )}
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <span style={{ color: '#94A3B8', fontSize: 13 }}>Admin Panel</span>
          <button onClick={() => { localStorage.removeItem('cd_admin'); navigate('/') }} style={{ background: '#1E293B', border: 'none', color: '#94A3B8', padding: '6px 14px', borderRadius: 8, cursor: 'pointer', fontSize: 13 }}>
            Logout
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '24px', display: 'grid', gridTemplateColumns: '200px 1fr', gap: 24 }}>

        {/* Sidebar */}
        <div style={{ background: '#fff', borderRadius: 14, padding: 8, border: '1px solid #E2E8F0', height: 'fit-content', position: 'sticky', top: 80 }}>
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
              width: '100%', padding: '11px 14px', borderRadius: 10, border: 'none',
              cursor: 'pointer', textAlign: 'left', fontSize: 13, fontWeight: 500,
              background: activeTab === tab.id ? '#0F172A' : 'transparent',
              color: activeTab === tab.id ? '#fff' : '#374151',
              marginBottom: 2,
            }}>{tab.label}</button>
          ))}
          <div style={{ borderTop: '1px solid #F1F5F9', marginTop: 12, paddingTop: 12 }}>
            <Link to="/" style={{ display: 'block', padding: '10px 14px', fontSize: 13, color: '#64748B', textDecoration: 'none' }}>← Back to Site</Link>
          </div>
        </div>

        {/* Main Content */}
        <div>

          {/* OVERVIEW */}
          {activeTab === 'overview' && (
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginBottom: 4 }}>Dashboard Overview</h2>
              <p style={{ color: '#64748B', fontSize: 14, marginBottom: 24 }}>June 2025 — Real-time stats</p>

              {/* KPI Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 28 }}>
                {[
                  { icon: '👥', label: 'Total Students', value: mockStats.totalStudents.toLocaleString(), color: '#EFF6FF', accent: '#1E40AF', sub: '+124 this month' },
                  { icon: '🏫', label: 'Institutes', value: mockStats.totalInstitutes, color: '#F0FDF4', accent: '#059669', sub: `${mockStats.activeSubscriptions} paid` },
                  { icon: '💰', label: 'Monthly Revenue', value: `₹${(mockStats.monthlyRevenue/1000).toFixed(0)}K`, color: '#FFFBEB', accent: '#D97706', sub: '+18% vs last month' },
                  { icon: '📅', label: 'Sessions', value: mockStats.totalSessions, color: '#F5F3FF', accent: '#7C3AED', sub: '34 this month' },
                  { icon: '🎯', label: 'Total Leads', value: mockStats.totalLeads, color: '#FFF1F2', accent: '#E11D48', sub: `${mockStats.conversionRate} conversion` },
                  { icon: '⏳', label: 'Pending Approval', value: mockStats.pendingApprovals, color: '#FFF7ED', accent: '#EA580C', sub: 'Need action' },
                ].map(card => (
                  <div key={card.label} style={{ background: '#fff', borderRadius: 14, padding: 18, border: '1px solid #E2E8F0' }}>
                    <div style={{ fontSize: 28, marginBottom: 8 }}>{card.icon}</div>
                    <div style={{ fontSize: 26, fontWeight: 800, color: card.accent }}>{card.value}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#0F172A', marginTop: 2 }}>{card.label}</div>
                    <div style={{ fontSize: 11, color: '#94A3B8', marginTop: 2 }}>{card.sub}</div>
                  </div>
                ))}
              </div>

              {/* Pending Approvals Alert */}
              {pendingInstitutes.length > 0 && (
                <div style={{ background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: 14, padding: 20, marginBottom: 24 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <h3 style={{ fontWeight: 700, color: '#92400E', fontSize: 16 }}>⚠️ {pendingInstitutes.length} Institutes Pending Approval</h3>
                    <button onClick={() => setActiveTab('institutes')} style={{ padding: '8px 16px', background: '#F59E0B', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 600, fontSize: 13 }}>Review Now</button>
                  </div>
                  {pendingInstitutes.map(inst => (
                    <div key={inst.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: '#fff', borderRadius: 10, marginBottom: 8 }}>
                      <div>
                        <span style={{ fontWeight: 600, color: '#0F172A', fontSize: 14 }}>{inst.name}</span>
                        <span style={{ color: '#64748B', fontSize: 13, marginLeft: 8 }}>📍 {inst.city}</span>
                      </div>
                      <div style={{ display: 'flex', gap: 8 }}>
                        <button onClick={() => { inst.status = 'active'; setActiveTab('institutes') }} style={{ padding: '6px 14px', background: '#059669', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontSize: 13, fontWeight: 600 }}>✓ Approve</button>
                        <button style={{ padding: '6px 14px', background: '#FEF2F2', color: '#DC2626', border: '1px solid #FECACA', borderRadius: 8, cursor: 'pointer', fontSize: 13 }}>✗ Reject</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Revenue Chart (visual) */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <div style={{ background: '#fff', borderRadius: 16, padding: 24, border: '1px solid #E2E8F0' }}>
                  <h3 style={{ fontWeight: 700, fontSize: 16, color: '#0F172A', marginBottom: 20 }}>💰 Revenue Breakdown</h3>
                  {[
                    { label: 'Institute Subscriptions', amount: 79500, pct: 62, color: '#1E40AF' },
                    { label: 'Counseling Sessions', amount: 31000, pct: 24, color: '#059669' },
                    { label: 'Loan Referrals', amount: 12000, pct: 10, color: '#F59E0B' },
                    { label: 'Premium Students', amount: 5000, pct: 4, color: '#7C3AED' },
                  ].map(r => (
                    <div key={r.label} style={{ marginBottom: 14 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                        <span style={{ fontSize: 13, color: '#374151' }}>{r.label}</span>
                        <span style={{ fontSize: 13, fontWeight: 700, color: '#0F172A' }}>₹{(r.amount/1000).toFixed(0)}K ({r.pct}%)</span>
                      </div>
                      <div style={{ height: 8, background: '#F1F5F9', borderRadius: 4 }}>
                        <div style={{ height: '100%', borderRadius: 4, width: `${r.pct}%`, background: r.color }} />
                      </div>
                    </div>
                  ))}
                  <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: 12, marginTop: 4 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: 700, color: '#0F172A' }}>Total This Month</span>
                      <span style={{ fontWeight: 800, color: '#059669', fontSize: 18 }}>₹1,27,500</span>
                    </div>
                  </div>
                </div>

                <div style={{ background: '#fff', borderRadius: 16, padding: 24, border: '1px solid #E2E8F0' }}>
                  <h3 style={{ fontWeight: 700, fontSize: 16, color: '#0F172A', marginBottom: 20 }}>📈 Quick Actions</h3>
                  {[
                    { icon: '🏫', action: 'Approve Institutes', count: mockStats.pendingApprovals, tab: 'institutes', color: '#FFF7ED', accent: '#EA580C' },
                    { icon: '📅', action: 'Upcoming Sessions', count: mockSessions.filter(s => s.status === 'upcoming').length, tab: 'sessions', color: '#EFF6FF', accent: '#1E40AF' },
                    { icon: '🎯', action: 'New Leads', count: mockLeads.filter(l => l.status === 'new').length, tab: 'leads', color: '#FFF1F2', accent: '#E11D48' },
                    { icon: '💬', action: 'Send WhatsApp Blast', count: null, tab: 'students', color: '#F0FDF4', accent: '#059669' },
                  ].map(qa => (
                    <button key={qa.action} onClick={() => setActiveTab(qa.tab)} style={{
                      width: '100%', display: 'flex', alignItems: 'center', gap: 12,
                      padding: '12px 14px', background: qa.color, borderRadius: 10,
                      border: 'none', cursor: 'pointer', marginBottom: 10, textAlign: 'left',
                    }}>
                      <span style={{ fontSize: 22 }}>{qa.icon}</span>
                      <span style={{ flex: 1, fontWeight: 600, fontSize: 14, color: '#0F172A' }}>{qa.action}</span>
                      {qa.count !== null && <span style={{ background: qa.accent, color: '#fff', borderRadius: 20, padding: '2px 10px', fontSize: 12, fontWeight: 700 }}>{qa.count}</span>}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* INSTITUTES */}
          {activeTab === 'institutes' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <div>
                  <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginBottom: 4 }}>🏫 Institute Management</h2>
                  <p style={{ color: '#64748B', fontSize: 14 }}>Manage all registered coaching institutes</p>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  {['all', 'active', 'pending'].map(f => (
                    <button key={f} onClick={() => setInstituteFilter(f)} style={{
                      padding: '8px 16px', borderRadius: 20, border: '1.5px solid',
                      cursor: 'pointer', fontSize: 13, fontWeight: 500, textTransform: 'capitalize',
                      borderColor: instituteFilter === f ? '#1E40AF' : '#E2E8F0',
                      background: instituteFilter === f ? '#EFF6FF' : '#fff',
                      color: instituteFilter === f ? '#1E40AF' : '#374151',
                    }}>{f} ({mockInstitutes.filter(i => f === 'all' || i.status === f).length})</button>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {mockInstitutes.filter(i => instituteFilter === 'all' || i.status === instituteFilter).map(inst => (
                  <div key={inst.id} style={{ background: '#fff', borderRadius: 16, padding: 20, border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                    <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                      <div style={{ width: 48, height: 48, borderRadius: 12, background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>🏫</div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 16, color: '#0F172A', marginBottom: 2 }}>{inst.name}</div>
                        <div style={{ fontSize: 13, color: '#64748B' }}>📍 {inst.city} · 📞 {inst.contact} · Joined {inst.joined}</div>
                        <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
                          <span style={{ background: planColors[inst.plan] + '20', color: planColors[inst.plan], fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 10 }}>{inst.plan} Plan</span>
                          <span style={{ background: statusColors[inst.status] + '20', color: statusColors[inst.status], fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 10, textTransform: 'capitalize' }}>{inst.status}</span>
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: 20, fontWeight: 800, color: '#1E40AF' }}>{inst.leads}</div>
                        <div style={{ fontSize: 11, color: '#94A3B8' }}>Leads Sent</div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: 20, fontWeight: 800, color: '#059669' }}>₹{inst.paid.toLocaleString()}</div>
                        <div style={{ fontSize: 11, color: '#94A3B8' }}>Monthly</div>
                      </div>
                      <div style={{ display: 'flex', gap: 8 }}>
                        {inst.status === 'pending' && (
                          <>
                            <button style={{ padding: '8px 16px', background: '#059669', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 600, fontSize: 13 }}>✓ Approve</button>
                            <button style={{ padding: '8px 16px', background: '#FEF2F2', color: '#DC2626', border: '1px solid #FECACA', borderRadius: 8, cursor: 'pointer', fontSize: 13 }}>✗ Reject</button>
                          </>
                        )}
                        {inst.status === 'active' && (
                          <>
                            <button style={{ padding: '8px 16px', background: '#EFF6FF', color: '#1E40AF', border: '1px solid #BFDBFE', borderRadius: 8, cursor: 'pointer', fontSize: 13, fontWeight: 600 }}>View Details</button>
                            <button style={{ padding: '8px 14px', background: '#FFF7ED', color: '#EA580C', border: '1px solid #FED7AA', borderRadius: 8, cursor: 'pointer', fontSize: 13 }}>Suspend</button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing Plans Banner */}
              <div style={{ marginTop: 24, background: 'linear-gradient(135deg, #0F172A, #1E3A5F)', borderRadius: 16, padding: 24, color: '#fff' }}>
                <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 16 }}>💎 Institute Pricing Plans</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}>
                  {[
                    { name: 'Free', price: '₹0', leads: '5 leads/mo', color: '#94A3B8', features: 'Basic listing' },
                    { name: 'Starter', price: '₹2,999', leads: '30 leads/mo', color: '#059669', features: 'Verified badge + WhatsApp' },
                    { name: 'Growth', price: '₹5,999', leads: 'Unlimited leads', color: '#1E40AF', features: 'Featured + Analytics' },
                    { name: 'Premium', price: '₹9,999', leads: 'Priority placement', color: '#F59E0B', features: 'Top slot + Manager' },
                  ].map(plan => (
                    <div key={plan.name} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 12, padding: 16, border: `1px solid ${plan.color}40` }}>
                      <div style={{ color: plan.color, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{plan.name}</div>
                      <div style={{ color: '#fff', fontWeight: 800, fontSize: 20, marginBottom: 4 }}>{plan.price}<span style={{ fontSize: 12, fontWeight: 400, opacity: 0.7 }}>/mo</span></div>
                      <div style={{ color: '#94A3B8', fontSize: 12, marginBottom: 2 }}>{plan.leads}</div>
                      <div style={{ color: '#94A3B8', fontSize: 11 }}>{plan.features}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SESSIONS */}
          {activeTab === 'sessions' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <div>
                  <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginBottom: 4 }}>📅 Session Management</h2>
                  <p style={{ color: '#64748B', fontSize: 14 }}>All counseling sessions — completed aur upcoming</p>
                </div>
                <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 12, padding: '8px 16px' }}>
                  <span style={{ color: '#059669', fontWeight: 700, fontSize: 16 }}>₹{mockSessions.filter(s => s.status === 'completed').reduce((a, s) => a + s.amount, 0).toLocaleString()}</span>
                  <span style={{ color: '#64748B', fontSize: 12, marginLeft: 4 }}>earned</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {mockSessions.map(s => (
                  <div key={s.id} style={{ background: '#fff', borderRadius: 14, padding: 18, border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                    <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                      <div style={{ width: 44, height: 44, borderRadius: 12, background: s.status === 'upcoming' ? '#EFF6FF' : '#F0FDF4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>
                        {s.status === 'upcoming' ? '📅' : '✅'}
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 15, color: '#0F172A' }}>{s.student}</div>
                        <div style={{ fontSize: 13, color: '#64748B' }}>📞 {s.phone} · {s.service}</div>
                        <div style={{ fontSize: 13, color: '#1E40AF' }}>👩‍💼 {s.counselor} · 📅 {s.date}</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                      <span style={{ fontWeight: 800, color: '#059669', fontSize: 16 }}>₹{s.amount.toLocaleString()}</span>
                      <span style={{
                        background: statusColors[s.status] + '20', color: statusColors[s.status],
                        fontSize: 12, fontWeight: 700, padding: '4px 12px', borderRadius: 20, textTransform: 'capitalize'
                      }}>{s.status}</span>
                      {s.status === 'upcoming' && (
                        <button style={{ padding: '8px 14px', background: '#1E40AF', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontSize: 12, fontWeight: 600 }}>
                          📞 Call
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* LEADS */}
          {activeTab === 'leads' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <div>
                  <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginBottom: 4 }}>🎯 Lead Management</h2>
                  <p style={{ color: '#64748B', fontSize: 14 }}>Students interested in institutes — track aur forward karo</p>
                </div>
                <div style={{ background: '#FFF1F2', border: '1px solid #FECDD3', borderRadius: 12, padding: '8px 16px' }}>
                  <span style={{ color: '#DC2626', fontWeight: 700, fontSize: 16 }}>{mockLeads.filter(l => l.status === 'new').length}</span>
                  <span style={{ color: '#64748B', fontSize: 12, marginLeft: 4 }}>new leads today</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {mockLeads.map(lead => (
                  <div key={lead.id} style={{ background: '#fff', borderRadius: 14, padding: 18, border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 15, color: '#0F172A', marginBottom: 2 }}>{lead.student}</div>
                      <div style={{ fontSize: 13, color: '#64748B' }}>📞 {lead.phone} · 🎯 {lead.exam} · 📅 {lead.date}</div>
                      <div style={{ fontSize: 13, color: '#1E40AF', marginTop: 2 }}>🏫 {lead.institute}</div>
                    </div>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                      <span style={{
                        background: statusColors[lead.status] + '20', color: statusColors[lead.status],
                        fontSize: 12, fontWeight: 700, padding: '4px 12px', borderRadius: 20, textTransform: 'capitalize'
                      }}>{lead.status}</span>
                      <button style={{ padding: '8px 14px', background: '#059669', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontSize: 12, fontWeight: 600 }}>
                        📲 Forward to Institute
                      </button>
                      <button style={{ padding: '8px 14px', background: '#EFF6FF', color: '#1E40AF', border: '1px solid #BFDBFE', borderRadius: 8, cursor: 'pointer', fontSize: 12 }}>
                        📞 Call Student
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* REVENUE */}
          {activeTab === 'revenue' && (
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginBottom: 4 }}>💰 Revenue Dashboard</h2>
              <p style={{ color: '#64748B', fontSize: 14, marginBottom: 24 }}>Full financial overview</p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 28 }}>
                {[
                  { label: 'This Month', value: '₹1,27,500', change: '+18%', color: '#059669' },
                  { label: 'Last Month', value: '₹1,08,000', change: '', color: '#64748B' },
                  { label: 'Total (YTD)', value: '₹4,23,000', change: '', color: '#1E40AF' },
                  { label: 'Projected (Annual)', value: '₹15,30,000', change: '🚀 On track', color: '#F59E0B' },
                ].map(r => (
                  <div key={r.label} style={{ background: '#fff', borderRadius: 14, padding: 20, border: '1px solid #E2E8F0', textAlign: 'center' }}>
                    <div style={{ fontSize: 26, fontWeight: 800, color: r.color }}>{r.value}</div>
                    <div style={{ fontSize: 13, color: '#64748B', marginTop: 4 }}>{r.label}</div>
                    {r.change && <div style={{ fontSize: 12, color: '#059669', fontWeight: 600, marginTop: 2 }}>{r.change}</div>}
                  </div>
                ))}
              </div>

              {/* Monthly breakdown */}
              <div style={{ background: '#fff', borderRadius: 16, padding: 24, border: '1px solid #E2E8F0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: '#0F172A', marginBottom: 20 }}>Monthly Transactions</h3>
                {[
                  { type: 'Institute Subscription', party: 'Resonance Classes', amount: 9999, status: 'paid', date: 'Jun 1' },
                  { type: 'Institute Subscription', party: 'Aakash Study Center', amount: 5999, status: 'paid', date: 'Jun 1' },
                  { type: 'Counseling Session', party: 'Sneha Desai (MBBS Abroad)', amount: 5000, status: 'paid', date: 'Jun 9' },
                  { type: 'Institute Subscription', party: 'Vidyalankar Institute', amount: 2999, status: 'paid', date: 'Jun 2' },
                  { type: 'Counseling Session', party: 'Rahul Patil (JEE)', amount: 2000, status: 'paid', date: 'Jun 8' },
                  { type: 'Loan Referral Commission', party: 'HDFC Credila', amount: 12000, status: 'pending', date: 'Jun 5' },
                  { type: 'Institute Registration', party: 'Success Point (Starter)', amount: 2999, status: 'pending', date: 'Jun 10' },
                ].map((tx, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #F8FAFC' }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14, color: '#0F172A' }}>{tx.type}</div>
                      <div style={{ fontSize: 13, color: '#64748B' }}>{tx.party} · {tx.date}</div>
                    </div>
                    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                      <span style={{ fontWeight: 700, fontSize: 16, color: tx.status === 'paid' ? '#059669' : '#F59E0B' }}>₹{tx.amount.toLocaleString()}</span>
                      <span style={{ background: tx.status === 'paid' ? '#F0FDF4' : '#FFFBEB', color: tx.status === 'paid' ? '#059669' : '#D97706', fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 20, textTransform: 'capitalize' }}>{tx.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STUDENTS */}
          {activeTab === 'students' && (
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginBottom: 4 }}>👥 Student Management</h2>
              <p style={{ color: '#64748B', fontSize: 14, marginBottom: 24 }}>All registered students — {mockStats.totalStudents.toLocaleString()} total</p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 24 }}>
                {[
                  { label: 'NEET Aspirants', value: 487, pct: 39, color: '#1E40AF' },
                  { label: 'JEE Aspirants', value: 312, pct: 25, color: '#D97706' },
                  { label: 'MBBS Abroad Interest', value: 198, pct: 16, color: '#059669' },
                  { label: 'Stream Selection', value: 250, pct: 20, color: '#7C3AED' },
                ].map(seg => (
                  <div key={seg.label} style={{ background: '#fff', borderRadius: 14, padding: 18, border: '1px solid #E2E8F0' }}>
                    <div style={{ fontSize: 24, fontWeight: 800, color: seg.color }}>{seg.value}</div>
                    <div style={{ fontSize: 13, color: '#374151', fontWeight: 600, marginTop: 2 }}>{seg.label}</div>
                    <div style={{ height: 4, background: '#F1F5F9', borderRadius: 2, marginTop: 8 }}>
                      <div style={{ height: '100%', borderRadius: 2, width: `${seg.pct}%`, background: seg.color }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Blast */}
              <div style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', borderRadius: 16, padding: 24, color: '#fff' }}>
                <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>📲 WhatsApp Broadcast</h3>
                <p style={{ opacity: 0.85, fontSize: 14, marginBottom: 16 }}>Send bulk messages to students — scholarship deadlines, exam alerts, offers</p>
                <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 12, padding: 16, marginBottom: 16 }}>
                  <textarea placeholder="Message likhein..." rows={3} style={{ width: '100%', background: 'transparent', border: 'none', color: '#fff', fontSize: 14, resize: 'none', outline: 'none', fontFamily: 'system-ui' }} />
                </div>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  {['All Students (1247)', 'NEET Students (487)', 'JEE Students (312)', 'New Registrations (124)'].map(seg => (
                    <button key={seg} style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', borderRadius: 20, cursor: 'pointer', fontSize: 12, fontWeight: 500 }}>
                      {seg}
                    </button>
                  ))}
                  <button style={{ padding: '10px 24px', background: '#fff', color: '#128C7E', border: 'none', borderRadius: 10, cursor: 'pointer', fontWeight: 700, fontSize: 14, marginLeft: 'auto' }}>
                    Send Broadcast →
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

// Admin Login Component
function AdminLogin() {
  const [pwd, setPwd] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const login = (e) => {
    e.preventDefault()
    if (pwd === 'careerdisha@admin2025') {
      localStorage.setItem('cd_admin', 'true')
      navigate('/admin')
      window.location.reload()
    } else {
      setError('Wrong password!')
    }
  }

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', minHeight: '100vh', background: '#0F172A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#1E293B', borderRadius: 20, padding: 40, width: '100%', maxWidth: 380, border: '1px solid #334155' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ width: 56, height: 56, borderRadius: 14, background: 'linear-gradient(135deg, #1E40AF, #3B82F6)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontWeight: 800, fontSize: 20, color: '#fff' }}>CD</div>
          <h2 style={{ color: '#fff', fontWeight: 800, fontSize: 22, marginBottom: 4 }}>Admin Login</h2>
          <p style={{ color: '#64748B', fontSize: 14 }}>CareerDisha Admin Panel</p>
        </div>
        {error && <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 10, padding: 12, marginBottom: 16, color: '#DC2626', fontSize: 13, textAlign: 'center' }}>{error}</div>}
        <form onSubmit={login}>
          <div style={{ marginBottom: 16 }}>
            <label style={{ color: '#94A3B8', fontSize: 13, display: 'block', marginBottom: 6 }}>Admin Password</label>
            <input type="password" value={pwd} onChange={e => setPwd(e.target.value)} placeholder="Enter admin password" required style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1.5px solid #334155', background: '#0F172A', color: '#fff', fontSize: 15, boxSizing: 'border-box', outline: 'none' }} />
          </div>
          <button type="submit" style={{ width: '100%', padding: 14, borderRadius: 12, background: 'linear-gradient(135deg, #1E40AF, #3B82F6)', color: '#fff', border: 'none', fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>
            Login to Admin Panel →
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: 16, fontSize: 12, color: '#475569' }}>Default: careerdisha@admin2025</p>
      </div>
    </div>
  )
}
