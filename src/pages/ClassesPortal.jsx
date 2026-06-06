import { useState } from 'react'
import { Link } from 'react-router-dom'

const cities = ['Pune', 'Mumbai', 'Nashik', 'Nagpur', 'Aurangabad', 'Kolhapur', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Jaipur', 'Kota']

const exams = ['NEET', 'JEE Mains', 'JEE Advanced', 'Foundation (9-10)', 'NEET + JEE Both', 'Dropper Batch']

const mockInstitutes = [
  {
    id: 1,
    name: 'Aakash Study Center',
    area: 'Kothrud, Pune',
    city: 'Pune',
    exam: 'NEET',
    coverImg: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80',
    rating: 4.6,
    reviews: 234,
    fee: 85000,
    seats: 8,
    totalSeats: 40,
    duration: '1 Year',
    timing: 'Morning 7am–10am',
    faculty: ['Dr. Ramesh Kulkarni (MBBS)', 'Prof. Anjali Sharma'],
    features: ['Study Material', 'Test Series', 'Doubt Classes', 'Online Backup'],
    nextBatch: 'July 15, 2025',
    mode: 'Offline',
    image: '🏫',
    tag: 'Most Popular',
    tagColor: '#1E40AF',
    loanAvailable: true,
    emi: '₹7,083/mo',
  },
  {
    id: 2,
    name: 'Resonance Classes',
    area: 'Shivajinagar, Pune',
    city: 'Pune',
    exam: 'JEE Advanced',
    rating: 4.8,
    reviews: 189,
    fee: 95000,
    seats: 12,
    totalSeats: 35,
    duration: '1 Year',
    timing: 'Evening 4pm–7pm',
    faculty: ['IIT Alumni Faculty', 'Prof. Suresh Patil (M.Tech IIT)'],
    features: ['DPP Sheets', 'Rank Booster', 'Online Portal', 'Parent App'],
    nextBatch: 'June 25, 2025',
    mode: 'Offline + Online',
    image: '⚡',
    tag: 'Top Rated',
    tagColor: '#D97706',
    loanAvailable: true,
    emi: '₹7,917/mo',
  },
  {
    id: 3,
    name: 'CareerDisha Live Classes',
    area: 'Online — All India',
    city: 'Online',
    exam: 'NEET',
    rating: 4.9,
    reviews: 312,
    fee: 35000,
    seats: 45,
    totalSeats: 100,
    duration: '1 Year',
    timing: 'Flexible — Recorded + Live',
    faculty: ['Expert Panel of 15+ Faculty', 'NEET Toppers as Mentors'],
    features: ['Live + Recorded', 'AI Doubt Solver', 'WhatsApp Support', 'Free Test Series'],
    nextBatch: 'Anytime — Self Paced',
    mode: 'Online',
    image: '💻',
    tag: 'Best Value',
    tagColor: '#059669',
    loanAvailable: false,
    emi: '₹2,917/mo',
  },
  {
    id: 4,
    name: 'Vidyalankar Institute',
    area: 'Dadar, Mumbai',
    city: 'Mumbai',
    exam: 'NEET',
    rating: 4.5,
    reviews: 156,
    fee: 75000,
    seats: 5,
    totalSeats: 30,
    duration: '1 Year',
    timing: 'Morning 8am–11am',
    faculty: ['Dr. Priya Mehta', 'Prof. Anil Joshi'],
    features: ['Study Material', 'Mock Tests', 'Hostel Available', 'Library'],
    nextBatch: 'July 1, 2025',
    mode: 'Offline',
    image: '🏛️',
    tag: 'Limited Seats',
    tagColor: '#DC2626',
    loanAvailable: true,
    emi: '₹6,250/mo',
  },
  {
    id: 5,
    name: 'Allen Kota Distance',
    area: 'Kota / Online',
    city: 'Online',
    exam: 'JEE Mains',
    rating: 4.7,
    reviews: 445,
    fee: 45000,
    seats: 120,
    totalSeats: 300,
    duration: '1 Year',
    timing: 'Weekend Batches Available',
    faculty: ['Allen Faculty Network', 'Kota Top Rankers'],
    features: ['Kota Material', 'Test Series', 'Video Lectures', 'App Access'],
    nextBatch: 'Rolling Admission',
    mode: 'Online',
    image: '🎯',
    tag: 'Kota Quality',
    tagColor: '#7C3AED',
    loanAvailable: false,
    emi: '₹3,750/mo',
  },
  {
    id: 6,
    name: 'Pace IIT & Medical',
    area: 'Andheri, Mumbai',
    city: 'Mumbai',
    exam: 'JEE Advanced',
    rating: 4.6,
    reviews: 201,
    fee: 110000,
    seats: 3,
    totalSeats: 25,
    duration: '2 Years',
    timing: 'Morning + Evening Batches',
    faculty: ['IIT Bombay Faculty', 'NIT Alumni'],
    features: ['2yr Program', 'Hostel', 'Scholarship Test', 'Placement Cell'],
    nextBatch: 'June 20, 2025',
    mode: 'Offline',
    image: '🚀',
    tag: 'Premium',
    tagColor: '#0F172A',
    loanAvailable: true,
    emi: '₹4,583/mo',
  },
]

const loanBanks = [
  { name: 'SBI Education Loan', rate: '8.5%', max: '₹20 Lakh', time: '7 days', logo: '🏦' },
  { name: 'HDFC Credila', rate: '9.5%', max: '₹40 Lakh', time: '3 days', logo: '🏧' },
  { name: 'Axis Bank', rate: '9.0%', max: '₹15 Lakh', time: '5 days', logo: '💳' },
  { name: 'Avanse Financial', rate: '10.5%', max: '₹50 Lakh', time: '2 days', logo: '⚡' },
]

function InstituteCard({ inst, onBook }) {
  const seatsPercent = ((inst.totalSeats - inst.seats) / inst.totalSeats) * 100
  const isAlmostFull = inst.seats <= 5

  return (
    <div style={{
      background: '#fff',
      border: '1px solid #E2E8F0',
      borderRadius: 16,
      overflow: 'hidden',
      boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
      transition: 'transform 0.2s, box-shadow 0.2s',
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.1)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.05)' }}
    >
      {/* Cover Image */}
      {inst.coverImg && (
        <div style={{ height: 120, overflow: 'hidden', position: 'relative' }}>
          <img src={inst.coverImg} alt={inst.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.5))' }} />
          <div style={{ position: 'absolute', bottom: 8, left: 12, right: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <span style={{ background: inst.tagColor, color: '#fff', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 20 }}>{inst.tag}</span>
            <span style={{ background: 'rgba(0,0,0,0.5)', color: '#fff', fontSize: 11, padding: '3px 8px', borderRadius: 20 }}>{inst.mode}</span>
          </div>
        </div>
      )}
      {!inst.coverImg && (
        <div style={{ background: inst.tagColor, padding: '6px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#fff', fontSize: 12, fontWeight: 700 }}>{inst.tag}</span>
          <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 12 }}>{inst.mode}</span>
        </div>
      )}

      <div style={{ padding: 24 }}>
        {/* Header */}
        <div style={{ display: 'flex', gap: 14, marginBottom: 16 }}>
          <div style={{
            width: 56, height: 56, borderRadius: 12,
            background: '#F8FAFC', fontSize: 28,
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>{inst.image}</div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontWeight: 700, fontSize: 17, color: '#0F172A', marginBottom: 2 }}>{inst.name}</h3>
            <p style={{ color: '#64748B', fontSize: 13 }}>📍 {inst.area}</p>
            <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
              <span style={{ background: '#EFF6FF', color: '#1E40AF', fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 4 }}>{inst.exam}</span>
              <span style={{ background: '#F0FDF4', color: '#16A34A', fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 4 }}>{inst.duration}</span>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#0F172A' }}>₹{(inst.fee / 1000).toFixed(0)}K</div>
            <div style={{ fontSize: 11, color: '#94A3B8' }}>per year</div>
            {inst.loanAvailable && <div style={{ fontSize: 11, color: '#059669', marginTop: 2 }}>EMI {inst.emi}</div>}
          </div>
        </div>

        {/* Rating */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
          <div style={{ display: 'flex', gap: 2 }}>
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: i < Math.floor(inst.rating) ? '#F59E0B' : '#E2E8F0', fontSize: 14 }}>★</span>
            ))}
          </div>
          <span style={{ fontWeight: 700, color: '#0F172A', fontSize: 14 }}>{inst.rating}</span>
          <span style={{ color: '#94A3B8', fontSize: 13 }}>({inst.reviews} reviews)</span>
        </div>

        {/* Seat bar */}
        <div style={{ marginBottom: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ fontSize: 12, color: '#64748B' }}>Seats Filled</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: isAlmostFull ? '#DC2626' : '#059669' }}>
              {isAlmostFull ? `⚠️ Only ${inst.seats} left!` : `${inst.seats} seats available`}
            </span>
          </div>
          <div style={{ height: 6, background: '#F1F5F9', borderRadius: 3 }}>
            <div style={{
              height: '100%', borderRadius: 3,
              width: `${seatsPercent}%`,
              background: seatsPercent > 80 ? '#DC2626' : seatsPercent > 60 ? '#F59E0B' : '#22C55E',
              transition: 'width 0.5s',
            }} />
          </div>
        </div>

        {/* Features */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
          {inst.features.map(f => (
            <span key={f} style={{
              background: '#F8FAFC', border: '1px solid #E2E8F0',
              fontSize: 11, color: '#475569', padding: '3px 8px', borderRadius: 20,
            }}>✓ {f}</span>
          ))}
        </div>

        {/* Timing & Next Batch */}
        <div style={{ background: '#F8FAFC', borderRadius: 10, padding: '10px 14px', marginBottom: 16, fontSize: 13 }}>
          <div style={{ color: '#475569' }}>🕐 {inst.timing}</div>
          <div style={{ color: '#1E40AF', fontWeight: 600, marginTop: 4 }}>📅 Next Batch: {inst.nextBatch}</div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: 10 }}>
          <button onClick={() => onBook(inst)} style={{
            flex: 1, padding: '11px', borderRadius: 10,
            background: 'linear-gradient(135deg, #1E40AF, #3B82F6)',
            color: '#fff', border: 'none', fontWeight: 700, fontSize: 14, cursor: 'pointer',
          }}>Enroll Now</button>
          <button style={{
            padding: '11px 16px', borderRadius: 10,
            border: '1.5px solid #E2E8F0', background: '#fff',
            color: '#374151', fontSize: 13, cursor: 'pointer', fontWeight: 500,
          }}>Demo Class</button>
          {inst.loanAvailable && (
            <button style={{
              padding: '11px 16px', borderRadius: 10,
              border: '1.5px solid #22C55E', background: '#F0FDF4',
              color: '#16A34A', fontSize: 13, cursor: 'pointer', fontWeight: 600,
            }}>🏦 Loan</button>
          )}
        </div>
      </div>
    </div>
  )
}

function EnrollModal({ inst, onClose }) {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ name: '', phone: '', email: '', city: '', class: '', wantLoan: false })
  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  if (!inst) return null

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 1000, padding: 16,
    }} onClick={onClose}>
      <div style={{
        background: '#fff', borderRadius: 20, padding: 32,
        maxWidth: 480, width: '100%', maxHeight: '90vh', overflowY: 'auto',
      }} onClick={e => e.stopPropagation()}>

        {step === 1 && (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
              <div>
                <h3 style={{ fontWeight: 800, fontSize: 20, color: '#0F172A', marginBottom: 4 }}>Enroll in Batch</h3>
                <p style={{ color: '#64748B', fontSize: 14 }}>{inst.name} — {inst.exam}</p>
              </div>
              <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: 20, cursor: 'pointer', color: '#94A3B8' }}>✕</button>
            </div>

            <div style={{ background: '#EFF6FF', borderRadius: 12, padding: 16, marginBottom: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}>
                <span style={{ color: '#374151' }}>Course Fee</span>
                <span style={{ fontWeight: 700, color: '#0F172A' }}>₹{inst.fee.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, marginTop: 8 }}>
                <span style={{ color: '#374151' }}>Next Batch</span>
                <span style={{ fontWeight: 600, color: '#1E40AF' }}>{inst.nextBatch}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, marginTop: 8 }}>
                <span style={{ color: '#374151' }}>Seats Left</span>
                <span style={{ fontWeight: 600, color: '#DC2626' }}>{inst.seats} only!</span>
              </div>
            </div>

            <form onSubmit={e => { e.preventDefault(); setStep(2) }}>
              {[
                { name: 'name', label: 'Student Name *', placeholder: 'Poora naam', type: 'text' },
                { name: 'phone', label: 'Phone/WhatsApp *', placeholder: '+91 XXXXX XXXXX', type: 'tel' },
                { name: 'email', label: 'Email', placeholder: 'email@example.com', type: 'email' },
              ].map(f => (
                <div key={f.name} style={{ marginBottom: 14 }}>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 5 }}>{f.label}</label>
                  <input name={f.name} type={f.type} value={form[f.name]} onChange={handle}
                    placeholder={f.placeholder} required={f.label.includes('*')} style={{
                      width: '100%', padding: '11px 14px', borderRadius: 10,
                      border: '1.5px solid #E2E8F0', fontSize: 15, boxSizing: 'border-box',
                    }} />
                </div>
              ))}

              {inst.loanAvailable && (
                <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 10, padding: 14, marginBottom: 16 }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
                    <input type="checkbox" checked={form.wantLoan} onChange={e => setForm({ ...form, wantLoan: e.target.checked })}
                      style={{ width: 18, height: 18 }} />
                    <div>
                      <div style={{ fontWeight: 600, color: '#065F46', fontSize: 14 }}>🏦 Apply for Education Loan</div>
                      <div style={{ color: '#047857', fontSize: 12 }}>EMI starts {inst.emi} · Zero processing fee</div>
                    </div>
                  </label>
                </div>
              )}

              <button type="submit" style={{
                width: '100%', padding: 14, borderRadius: 12,
                background: 'linear-gradient(135deg, #1E40AF, #3B82F6)',
                color: '#fff', border: 'none', fontWeight: 700, fontSize: 16, cursor: 'pointer',
              }}>Continue to Confirm →</button>
            </form>
          </>
        )}

        {step === 2 && (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
            <h3 style={{ fontWeight: 800, fontSize: 22, color: '#0F172A', marginBottom: 12 }}>Enrollment Request Sent!</h3>
            <p style={{ color: '#64748B', fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>
              <strong>{inst.name}</strong> ki team tumhe 24 ghante mein contact karegi. Batch seat temporarily hold kiya gaya hai.
            </p>
            {form.wantLoan && (
              <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 12, padding: 16, marginBottom: 20 }}>
                <p style={{ color: '#065F46', fontWeight: 600, fontSize: 14 }}>
                  🏦 Loan application bhi forward kar diya! Bank representative 2 business days mein contact karega.
                </p>
              </div>
            )}
            <button onClick={onClose} style={{
              padding: '12px 32px', borderRadius: 10,
              background: '#1E40AF', color: '#fff', border: 'none',
              fontWeight: 600, fontSize: 15, cursor: 'pointer',
            }}>Done</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function ClassesPortal() {
  const [selectedCity, setSelectedCity] = useState('All')
  const [selectedExam, setSelectedExam] = useState('All')
  const [maxFee, setMaxFee] = useState(150000)
  const [modeFilter, setModeFilter] = useState('All')
  const [sortBy, setSortBy] = useState('rating')
  const [enrollInst, setEnrollInst] = useState(null)
  const [activeTab, setActiveTab] = useState('classes')
  const [loanAmount, setLoanAmount] = useState(100000)
  const [loanYears, setLoanYears] = useState(5)

  const filtered = mockInstitutes.filter(i => {
    if (selectedCity !== 'All' && i.city !== selectedCity && !(selectedCity === 'Online' && i.city === 'Online')) return false
    if (selectedExam !== 'All' && i.exam !== selectedExam) return false
    if (i.fee > maxFee) return false
    if (modeFilter !== 'All' && !i.mode.includes(modeFilter)) return false
    return true
  }).sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating
    if (sortBy === 'fee_low') return a.fee - b.fee
    if (sortBy === 'fee_high') return b.fee - a.fee
    if (sortBy === 'seats') return a.seats - b.seats
    return 0
  })

  const emi = Math.round((loanAmount * (9 / 100 / 12)) / (1 - Math.pow(1 + 9 / 100 / 12, -(loanYears * 12))))

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#F8FAFC', color: '#1E293B', all: 'revert', fontFamily: 'system-ui, sans-serif' }}>

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #0F172A 0%, #1E40AF 100%)',
        padding: '56px 24px 0',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.1)', borderRadius: 20, padding: '6px 16px', marginBottom: 20 }}>
            <span style={{ fontSize: 16 }}>🚌</span>
            <span style={{ color: '#fff', fontSize: 13, fontWeight: 500 }}>India's #1 Coaching Discovery Platform</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 800, color: '#fff', marginBottom: 16, lineHeight: 1.2 }}>
            Find & Book <span style={{ color: '#F59E0B' }}>Best Coaching</span><br />Near You
          </h1>
          <p style={{ color: '#BFDBFE', fontSize: 16, marginBottom: 32 }}>
            NEET · JEE · Foundation — Compare 500+ institutes · Book seat in 2 minutes · EMI available
          </p>

          {/* Search Bar */}
          <div style={{
            background: '#fff', borderRadius: 16, padding: 8,
            display: 'flex', gap: 8, flexWrap: 'wrap',
            maxWidth: 800, margin: '0 auto 0',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
          }}>
            <select value={selectedCity} onChange={e => setSelectedCity(e.target.value)} style={{
              flex: 1, minWidth: 140, padding: '12px 14px', borderRadius: 10,
              border: '1.5px solid #E2E8F0', fontSize: 15, background: '#F8FAFC', cursor: 'pointer',
            }}>
              <option value="All">📍 All Cities</option>
              <option value="Online">💻 Online</option>
              {cities.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <select value={selectedExam} onChange={e => setSelectedExam(e.target.value)} style={{
              flex: 1, minWidth: 140, padding: '12px 14px', borderRadius: 10,
              border: '1.5px solid #E2E8F0', fontSize: 15, background: '#F8FAFC', cursor: 'pointer',
            }}>
              <option value="All">🎯 All Exams</option>
              {exams.map(e => <option key={e} value={e}>{e}</option>)}
            </select>
            <button style={{
              padding: '12px 28px', borderRadius: 10,
              background: 'linear-gradient(135deg, #1E40AF, #3B82F6)',
              color: '#fff', border: 'none', fontWeight: 700, fontSize: 15, cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}>Search Classes →</button>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: 0, marginTop: 32, justifyContent: 'center' }}>
            {[
              { id: 'classes', label: '🏫 Find Classes' },
              { id: 'loans', label: '🏦 Education Loan' },
              { id: 'register', label: '📋 Register Your Institute', link: '/institute/register' },
            ].map(tab => (
              tab.link ? (
                <a key={tab.id} href={tab.link} style={{
                  padding: '14px 24px', border: 'none', cursor: 'pointer',
                  fontWeight: 600, fontSize: 14, textDecoration: 'none',
                  background: 'transparent', color: '#BFDBFE', display: 'inline-block',
                  transition: 'all 0.2s',
                }}>{tab.label}</a>
              ) : (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
                  padding: '14px 24px', border: 'none', cursor: 'pointer',
                  fontWeight: 600, fontSize: 14,
                  background: activeTab === tab.id ? '#fff' : 'transparent',
                  color: activeTab === tab.id ? '#1E40AF' : '#BFDBFE',
                  borderRadius: activeTab === tab.id ? '12px 12px 0 0' : 0,
                  transition: 'all 0.2s',
                }}>{tab.label}</button>
              )
            ))}
          </div>
        </div>
      </section>

      {/* CLASSES TAB */}
      {activeTab === 'classes' && (
        <section style={{ padding: '32px 24px', maxWidth: 1300, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 28 }}>

            {/* Filters Sidebar */}
            <div style={{ position: 'sticky', top: 80, height: 'fit-content' }}>
              <div style={{ background: '#fff', borderRadius: 16, padding: 24, border: '1px solid #E2E8F0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: '#0F172A', marginBottom: 20 }}>🔧 Filters</h3>

                <div style={{ marginBottom: 20 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 8 }}>Mode</label>
                  {['All', 'Offline', 'Online'].map(m => (
                    <button key={m} onClick={() => setModeFilter(m)} style={{
                      marginRight: 8, marginBottom: 8, padding: '6px 14px', borderRadius: 20,
                      border: '1.5px solid', cursor: 'pointer', fontSize: 13, fontWeight: 500,
                      borderColor: modeFilter === m ? '#1E40AF' : '#E2E8F0',
                      background: modeFilter === m ? '#EFF6FF' : '#fff',
                      color: modeFilter === m ? '#1E40AF' : '#374151',
                    }}>{m}</button>
                  ))}
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 8 }}>
                    Max Fee: ₹{(maxFee / 1000).toFixed(0)}K
                  </label>
                  <input type="range" min={20000} max={150000} step={5000} value={maxFee}
                    onChange={e => setMaxFee(Number(e.target.value))} style={{ width: '100%', accentColor: '#1E40AF' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#94A3B8', marginTop: 4 }}>
                    <span>₹20K</span><span>₹1.5L</span>
                  </div>
                </div>

                <div style={{ marginBottom: 20 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 8 }}>Sort By</label>
                  {[
                    { val: 'rating', label: '⭐ Top Rated' },
                    { val: 'fee_low', label: '💰 Fee: Low to High' },
                    { val: 'fee_high', label: '💎 Fee: High to Low' },
                    { val: 'seats', label: '🔥 Seats Filling Fast' },
                  ].map(s => (
                    <div key={s.val} style={{ marginBottom: 6 }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 13, color: '#374151' }}>
                        <input type="radio" name="sort" value={s.val} checked={sortBy === s.val} onChange={() => setSortBy(s.val)} style={{ accentColor: '#1E40AF' }} />
                        {s.label}
                      </label>
                    </div>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: 16 }}>
                  <div style={{ background: '#EFF6FF', borderRadius: 10, padding: 14 }}>
                    <p style={{ fontSize: 13, color: '#1E40AF', fontWeight: 600, marginBottom: 4 }}>💡 Free Counseling</p>
                    <p style={{ fontSize: 12, color: '#3B82F6', lineHeight: 1.5 }}>Confused which institute? Book a free session with our expert!</p>
                    <Link to="/book" style={{ display: 'block', marginTop: 10, textAlign: 'center', padding: '8px', borderRadius: 8, background: '#1E40AF', color: '#fff', textDecoration: 'none', fontSize: 12, fontWeight: 600 }}>
                      Book Free Session
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <h2 style={{ fontWeight: 700, fontSize: 18, color: '#0F172A' }}>
                  {filtered.length} Institutes Found
                  {selectedCity !== 'All' && <span style={{ color: '#64748B', fontWeight: 400 }}> in {selectedCity}</span>}
                </h2>
                <span style={{ fontSize: 13, color: '#64748B' }}>Showing best matches</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
                {filtered.map(inst => (
                  <InstituteCard key={inst.id} inst={inst} onBook={setEnrollInst} />
                ))}
              </div>

              {filtered.length === 0 && (
                <div style={{ textAlign: 'center', padding: '60px 24px', color: '#64748B' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
                  <h3 style={{ fontWeight: 600, fontSize: 18, marginBottom: 8 }}>No institutes found</h3>
                  <p>Try changing filters or city</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* LOANS TAB */}
      {activeTab === 'loans' && (
        <section style={{ padding: '40px 24px', maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: '#0F172A', marginBottom: 12 }}>Education Loan — Zero Tension</h2>
            <p style={{ color: '#64748B', fontSize: 16 }}>Compare top banks, check EMI, apply online — all in one place</p>
          </div>

          {/* EMI Calculator */}
          <div style={{ background: '#fff', borderRadius: 20, padding: 32, border: '1px solid #E2E8F0', marginBottom: 32, boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
            <h3 style={{ fontWeight: 700, fontSize: 20, color: '#0F172A', marginBottom: 24 }}>🧮 EMI Calculator</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24, marginBottom: 24 }}>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 8 }}>
                  Loan Amount: ₹{(loanAmount / 1000).toFixed(0)}K
                </label>
                <input type="range" min={50000} max={2000000} step={10000} value={loanAmount}
                  onChange={e => setLoanAmount(Number(e.target.value))} style={{ width: '100%', accentColor: '#1E40AF' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#94A3B8' }}>
                  <span>₹50K</span><span>₹20L</span>
                </div>
              </div>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 8 }}>
                  Tenure: {loanYears} Years
                </label>
                <input type="range" min={1} max={10} step={1} value={loanYears}
                  onChange={e => setLoanYears(Number(e.target.value))} style={{ width: '100%', accentColor: '#1E40AF' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#94A3B8' }}>
                  <span>1yr</span><span>10yr</span>
                </div>
              </div>
              <div style={{ background: 'linear-gradient(135deg, #1E40AF, #3B82F6)', borderRadius: 14, padding: 20, textAlign: 'center', color: '#fff' }}>
                <div style={{ fontSize: 13, opacity: 0.8, marginBottom: 4 }}>Monthly EMI</div>
                <div style={{ fontSize: 36, fontWeight: 800 }}>₹{emi.toLocaleString()}</div>
                <div style={{ fontSize: 12, opacity: 0.7, marginTop: 4 }}>@ 9% interest rate</div>
              </div>
            </div>
          </div>

          {/* Bank Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 32 }}>
            {loanBanks.map(bank => (
              <div key={bank.name} style={{ background: '#fff', borderRadius: 16, padding: 24, border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{bank.logo}</div>
                <h4 style={{ fontWeight: 700, color: '#0F172A', fontSize: 16, marginBottom: 12 }}>{bank.name}</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: 13, color: '#64748B' }}>Interest</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#059669' }}>{bank.rate} p.a.</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: 13, color: '#64748B' }}>Max Loan</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#0F172A' }}>{bank.max}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
                  <span style={{ fontSize: 13, color: '#64748B' }}>Approval</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#1E40AF' }}>~{bank.time}</span>
                </div>
                <button style={{
                  width: '100%', padding: '10px', borderRadius: 10,
                  background: 'linear-gradient(135deg, #1E40AF, #3B82F6)',
                  color: '#fff', border: 'none', fontWeight: 600, fontSize: 14, cursor: 'pointer',
                }}>Apply Now</button>
              </div>
            ))}
          </div>

          <div style={{ background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: 14, padding: 20 }}>
            <p style={{ color: '#92400E', fontSize: 14, fontWeight: 500 }}>
              💡 <strong>CareerDisha Tip:</strong> SBI Education Loan mein 0.5% concession girls students ke liye milta hai. HDFC Credila sabse fast approval deta hai — 3 business days. Documents ready rakho: Marksheets, Income proof, Admission letter.
            </p>
          </div>
        </section>
      )}

      {/* REGISTER INSTITUTE TAB */}
      {activeTab === 'register' && (
        <section style={{ padding: '40px 24px', maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: '#0F172A', marginBottom: 12 }}>Register Your Institute</h2>
            <p style={{ color: '#64748B', fontSize: 16 }}>1000+ students discover coaching centers through CareerDisha every month</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 36 }}>
            {[
              { icon: '📈', title: 'More Enrollments', desc: 'Reach students actively searching for coaching' },
              { icon: '🆓', title: 'Free Listing', desc: 'Basic listing is completely free forever' },
              { icon: '📊', title: 'Analytics', desc: 'See profile views, inquiries, conversion rate' },
              { icon: '💬', title: 'Direct Leads', desc: 'Student contact details sent directly to you' },
            ].map(b => (
              <div key={b.title} style={{ background: '#fff', borderRadius: 14, padding: 20, border: '1px solid #E2E8F0', textAlign: 'center' }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{b.icon}</div>
                <h4 style={{ fontWeight: 700, fontSize: 15, color: '#0F172A', marginBottom: 4 }}>{b.title}</h4>
                <p style={{ color: '#64748B', fontSize: 12, lineHeight: 1.5 }}>{b.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: '#fff', borderRadius: 20, padding: 32, border: '1px solid #E2E8F0', boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
            <h3 style={{ fontWeight: 700, fontSize: 20, color: '#0F172A', marginBottom: 24 }}>Institute Registration Form</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                'Institute Name', 'Owner/Director Name',
                'Phone Number', 'Email Address',
                'City', 'Area/Locality',
              ].map(field => (
                <div key={field}>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 5 }}>{field} *</label>
                  <input placeholder={`Enter ${field.toLowerCase()}`} style={{
                    width: '100%', padding: '11px 14px', borderRadius: 10,
                    border: '1.5px solid #E2E8F0', fontSize: 14, boxSizing: 'border-box',
                  }} />
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16 }}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 5 }}>Exams Offered *</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {exams.map(ex => (
                  <label key={ex} style={{ display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', fontSize: 13, background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 20, padding: '5px 12px' }}>
                    <input type="checkbox" style={{ accentColor: '#1E40AF' }} /> {ex}
                  </label>
                ))}
              </div>
            </div>
            <button style={{
              marginTop: 24, width: '100%', padding: 14, borderRadius: 12,
              background: 'linear-gradient(135deg, #059669, #10B981)',
              color: '#fff', border: 'none', fontWeight: 700, fontSize: 16, cursor: 'pointer',
            }}>Submit — Get Listed Free →</button>
          </div>
        </section>
      )}

      {/* Enrollment Modal */}
      {enrollInst && <EnrollModal inst={enrollInst} onClose={() => setEnrollInst(null)} />}

    </div>
  )
}
