import { useState } from 'react'
import { Link } from 'react-router-dom'

const steps = [
  { id: 1, label: 'Brand Info', icon: '🏢' },
  { id: 2, label: 'Branches / Cities', icon: '📍' },
  { id: 3, label: 'Courses & Results', icon: '📚' },
  { id: 4, label: 'Faculty & Photos', icon: '👨‍🏫' },
  { id: 5, label: 'Fees & Plan', icon: '💰' },
]

const examOptions = ['NEET', 'JEE Mains', 'JEE Advanced', 'Foundation (Class 8-10)', 'NEET + JEE Both', 'Dropper Batch', 'MHT-CET', 'BITSAT', 'KVPY', 'Olympiad']
const facilityOptions = ['AC Classrooms', 'Library', 'Hostel', 'Online Backup Classes', 'Test Series', 'Doubt Sessions', 'Study Material', 'Parent App', 'CCTV Campus', 'Cafeteria', 'Transport', 'Medical Facility', 'Counseling Support', 'Scholarship Tests']

const indianCities = [
  'Mumbai','Delhi','Bangalore','Hyderabad','Chennai','Kolkata','Pune','Ahmedabad',
  'Jaipur','Surat','Lucknow','Kanpur','Nagpur','Indore','Bhopal','Patna','Vadodara',
  'Nashik','Aurangabad','Kota','Jodhpur','Chandigarh','Coimbatore','Visakhapatnam',
  'Agra','Varanasi','Allahabad','Ranchi','Guwahati','Mysore','Thiruvananthapuram',
  'Kochi','Bhubaneswar','Dehradun','Jabalpur','Raipur','Amritsar','Ludhiana',
  'Kolhapur','Solapur','Thane','Navi Mumbai','Noida','Gurgaon','Faridabad',
  'Meerut','Rajkot','Vijayawada','Srinagar','Jammu','Other'
]

const indianStates = [
  'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat',
  'Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh',
  'Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab',
  'Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand',
  'West Bengal','Delhi','Jammu & Kashmir','Ladakh'
]

const emptyBranch = () => ({
  city: '', state: '', area: '', address: '', pincode: '',
  contactPerson: '', phone: '', whatsapp: '', email: '',
  totalSeats: '', established: '',
  batches: [{ name: '', exam: 'NEET', timing: '', days: 'Mon–Sat', seats: '', startDate: '', mode: 'Offline', fee: '' }],
  facilities: [],
  isHQ: false,
})

export default function InstituteRegister() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [logoPreview, setLogoPreview] = useState(null)
  const [galleryPreviews, setGalleryPreviews] = useState([])
  const [form, setForm] = useState({
    // Brand / Master Info
    name: '', ownerName: '', phone: '', whatsapp: '', email: '',
    website: '', established: '', totalStudents: '',
    description: '', tagline: '',
    isChain: false,  // Single center or multiple cities
    totalBranches: '1',
    operatingIn: [],  // cities list for display
    // Branches — each branch is a separate center
    branches: [{ ...emptyBranch(), isHQ: true }],
    // Courses (brand-level)
    exams: [],
    // Faculty (brand-level)
    faculty: [{ name: '', qualification: '', experience: '', subject: '' }],
    results2024: { neetTop: '', jeeTop: '', neetSelections: '', jeeSelections: '', totalSelections: '' },
    achievements: '',
    // Fees
    feeStructure: [{ course: '', duration: '', fee: '', emi: '' }],
    loanFacility: false,
    scholarshipTest: false,
    scholarshipDetails: '',
    // Facilities
    facilities: [],
    totalRooms: '', seatingCapacity: '', youtubeChannel: '',
    // Plan
    plan: 'starter',
  })

  const [activeBranch, setActiveBranch] = useState(0)
  const set = (key, val) => setForm(f => ({ ...f, [key]: val }))

  const toggleExam = (exam) => {
    const arr = form.exams.includes(exam) ? form.exams.filter(e => e !== exam) : [...form.exams, exam]
    set('exams', arr)
  }

  // Branch management
  const addBranch = () => {
    set('branches', [...form.branches, emptyBranch()])
    setActiveBranch(form.branches.length)
  }
  const removeBranch = (i) => {
    if (form.branches.length === 1) return
    const arr = form.branches.filter((_, idx) => idx !== i)
    set('branches', arr)
    setActiveBranch(Math.max(0, activeBranch - 1))
  }
  const updateBranchField = (branchIdx, key, val) => {
    const arr = [...form.branches]
    arr[branchIdx] = { ...arr[branchIdx], [key]: val }
    set('branches', arr)
  }
  const toggleBranchFacility = (branchIdx, fac) => {
    const branch = form.branches[branchIdx]
    const arr = branch.facilities.includes(fac)
      ? branch.facilities.filter(x => x !== fac)
      : [...branch.facilities, fac]
    updateBranchField(branchIdx, 'facilities', arr)
  }
  const addBranchBatch = (branchIdx) => {
    const arr = [...form.branches]
    arr[branchIdx].batches = [...arr[branchIdx].batches, { name: '', exam: 'NEET', timing: '', days: 'Mon–Sat', seats: '', startDate: '', mode: 'Offline', fee: '' }]
    set('branches', arr)
  }
  const updateBranchBatch = (branchIdx, batchIdx, key, val) => {
    const arr = [...form.branches]
    arr[branchIdx].batches[batchIdx] = { ...arr[branchIdx].batches[batchIdx], [key]: val }
    set('branches', arr)
  }
  const toggleFacility = (f) => toggleBranchFacility(activeBranch, f)

  const handleLogo = (e) => {
    const file = e.target.files[0]
    if (file) setLogoPreview(URL.createObjectURL(file))
  }

  const handleGallery = (e) => {
    const files = Array.from(e.target.files).slice(0, 8)
    setGalleryPreviews(files.map(f => URL.createObjectURL(f)))
  }

  const addBatch = () => set('batches', [...form.batches, { name: '', timing: '', days: '', seats: '', startDate: '', mode: 'Offline' }])
  const addFaculty = () => set('faculty', [...form.faculty, { name: '', qualification: '', experience: '', subject: '' }])
  const addFee = () => set('feeStructure', [...form.feeStructure, { course: '', duration: '', fee: '', emi: '' }])

  const updateBatch = (i, key, val) => {
    const arr = [...form.batches]; arr[i] = { ...arr[i], [key]: val }; set('batches', arr)
  }
  const updateFaculty = (i, key, val) => {
    const arr = [...form.faculty]; arr[i] = { ...arr[i], [key]: val }; set('faculty', arr)
  }
  const updateFee = (i, key, val) => {
    const arr = [...form.feeStructure]; arr[i] = { ...arr[i], [key]: val }; set('feeStructure', arr)
  }

  const inputStyle = {
    width: '100%', padding: '11px 14px', borderRadius: 10,
    border: '1.5px solid #E2E8F0', fontSize: 14, boxSizing: 'border-box',
    outline: 'none', background: '#fff',
    transition: 'border-color 0.2s',
  }
  const labelStyle = { display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 6 }

  if (submitted) return (
    <div style={{ fontFamily: 'system-ui, sans-serif', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F8FAFC', padding: 24 }}>
      <div style={{ background: '#fff', borderRadius: 24, padding: 48, maxWidth: 560, width: '100%', textAlign: 'center', boxShadow: '0 16px 48px rgba(0,0,0,0.08)' }}>
        <div style={{ fontSize: 80, marginBottom: 20 }}>🎉</div>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: '#0F172A', marginBottom: 12 }}>Registration Successful!</h2>
        <p style={{ color: '#64748B', fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>
          <strong>{form.name}</strong> ka registration ho gaya! Humari team 24 ghante mein verify karegi aur listing live karegi.
        </p>
        <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 14, padding: 20, marginBottom: 28, textAlign: 'left' }}>
          <h4 style={{ color: '#065F46', fontWeight: 700, marginBottom: 12 }}>📋 Next Steps:</h4>
          {['Humari team aapko call karegi verification ke liye', 'Institute listing 24hrs mein live hogi', 'Dashboard access milega leads track karne ke liye', 'Selected plan ke according billing start hogi'].map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
              <span style={{ color: '#059669', fontWeight: 700, fontSize: 16 }}>✓</span>
              <span style={{ color: '#374151', fontSize: 14 }}>{s}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/classes" style={{ padding: '12px 24px', background: '#1E40AF', color: '#fff', borderRadius: 10, textDecoration: 'none', fontWeight: 600, fontSize: 14 }}>View Classes Portal →</Link>
          <Link to="/" style={{ padding: '12px 24px', background: '#F8FAFC', color: '#374151', borderRadius: 10, textDecoration: 'none', fontWeight: 600, fontSize: 14, border: '1px solid #E2E8F0' }}>Go to Home</Link>
        </div>
      </div>
    </div>
  )

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#F8FAFC', all: 'revert', fontFamily: 'system-ui, sans-serif' }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1E40AF, #1D4ED8)', padding: '40px 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(22px,4vw,38px)', fontWeight: 800, color: '#fff', marginBottom: 8 }}>
          Apna Institute List Karo — Free!
        </h1>
        <p style={{ color: '#BFDBFE', fontSize: 15, maxWidth: 500, margin: '0 auto' }}>
          1000+ students har mahine CareerDisha se coaching dhundthe hain — unhe apne institute se connect karo
        </p>
      </section>

      {/* Progress Steps */}
      <div style={{ background: '#fff', borderBottom: '1px solid #E2E8F0', padding: '16px 24px', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {steps.map((s, i) => (
            <div key={s.id} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }} onClick={() => step > s.id && setStep(s.id)}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%', fontSize: 16,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: step === s.id ? '#1E40AF' : step > s.id ? '#059669' : '#F1F5F9',
                  color: step >= s.id ? '#fff' : '#94A3B8',
                  fontWeight: 700, transition: 'all 0.3s',
                }}>{step > s.id ? '✓' : s.icon}</div>
                <span style={{ fontSize: 10, color: step === s.id ? '#1E40AF' : step > s.id ? '#059669' : '#94A3B8', fontWeight: 600, marginTop: 4, whiteSpace: 'nowrap' }}>{s.label}</span>
              </div>
              {i < steps.length - 1 && (
                <div style={{ flex: 1, height: 2, background: step > s.id ? '#059669' : '#E2E8F0', margin: '0 4px', marginBottom: 16, transition: 'background 0.3s' }} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 24px' }}>
        <div style={{ background: '#fff', borderRadius: 20, padding: 32, border: '1px solid #E2E8F0', boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}>

          {/* STEP 1 — Brand Info */}
          {step === 1 && (
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginBottom: 4 }}>🏢 Brand / Institute Information</h2>
              <p style={{ color: '#64748B', fontSize: 14, marginBottom: 24 }}>Ye brand-level info hai — sab branches pe apply hogi</p>

              {/* Logo Upload */}
              <div style={{ marginBottom: 24, display: 'flex', gap: 20, alignItems: 'center' }}>
                <div>
                  <label style={labelStyle}>Brand Logo *</label>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                    <div style={{ width: 90, height: 90, borderRadius: 16, border: '2px dashed #BFDBFE', background: logoPreview ? 'transparent' : '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
                      {logoPreview ? <img src={logoPreview} alt="logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <span style={{ fontSize: 28 }}>🏢</span>}
                    </div>
                    <div>
                      <label style={{ padding: '10px 20px', background: '#EFF6FF', color: '#1E40AF', borderRadius: 10, cursor: 'pointer', fontWeight: 600, fontSize: 13, display: 'inline-block' }}>
                        📁 Upload Logo
                        <input type="file" accept="image/*" onChange={handleLogo} style={{ display: 'none' }} />
                      </label>
                      <p style={{ fontSize: 12, color: '#94A3B8', marginTop: 6 }}>Square logo — min 200×200px</p>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                {[
                  { key: 'name', label: 'Institute / Brand Name *', placeholder: 'e.g. PhysicsWallah, Aakash, Allen' },
                  { key: 'tagline', label: 'Tagline', placeholder: "e.g. 'Nurturing Tomorrow's Doctors'" },
                  { key: 'ownerName', label: 'Owner / Director Name *', placeholder: 'Full name' },
                  { key: 'phone', label: 'HQ Phone *', placeholder: '+91 98765 43210' },
                  { key: 'whatsapp', label: 'WhatsApp', placeholder: 'For student inquiries' },
                  { key: 'email', label: 'Official Email *', placeholder: 'contact@institute.com' },
                  { key: 'website', label: 'Website', placeholder: 'www.yourinstitute.com' },
                  { key: 'established', label: 'Established Year', placeholder: '2010' },
                  { key: 'totalStudents', label: 'Total Students (All Branches)', placeholder: '5000' },
                  { key: 'totalBranches', label: 'Total Centers / Branches', placeholder: '12' },
                ].map(f => (
                  <div key={f.key}>
                    <label style={labelStyle}>{f.label}</label>
                    <input value={form[f.key]} onChange={e => set(f.key, e.target.value)} placeholder={f.placeholder} style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#3B82F6'}
                      onBlur={e => e.target.style.borderColor = '#E2E8F0'} />
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>About Your Institute * <span style={{ color: '#94A3B8', fontWeight: 400 }}>(Brand story, USP, methodology)</span></label>
                <textarea value={form.description} onChange={e => set('description', e.target.value)} rows={4} placeholder="Apni institute ki journey, teaching philosophy, kya alag karta hai tumhein..." style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }} />
              </div>

              {/* Single vs Chain Toggle */}
              <div style={{ background: '#F8FAFC', borderRadius: 16, padding: 20, border: '1px solid #E2E8F0' }}>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: '#0F172A', marginBottom: 16 }}>📍 How many locations?</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  {[
                    { val: false, icon: '🏫', title: 'Single Center', desc: 'Ek hi city mein, ek location', color: '#EFF6FF', accent: '#1E40AF' },
                    { val: true, icon: '🏢', title: 'Multiple Cities (Chain)', desc: 'Multiple branches across India', color: '#FFFBEB', accent: '#D97706' },
                  ].map(opt => (
                    <div key={String(opt.val)} onClick={() => set('isChain', opt.val)} style={{
                      padding: 20, borderRadius: 14, cursor: 'pointer',
                      border: `2px solid ${form.isChain === opt.val ? opt.accent : '#E2E8F0'}`,
                      background: form.isChain === opt.val ? opt.color : '#fff',
                      transition: 'all 0.2s', textAlign: 'center',
                    }}>
                      <div style={{ fontSize: 36, marginBottom: 8 }}>{opt.icon}</div>
                      <div style={{ fontWeight: 700, fontSize: 15, color: '#0F172A', marginBottom: 4 }}>{opt.title}</div>
                      <div style={{ fontSize: 13, color: '#64748B' }}>{opt.desc}</div>
                      {form.isChain === opt.val && <div style={{ color: opt.accent, fontWeight: 700, fontSize: 12, marginTop: 8 }}>✓ Selected</div>}
                    </div>
                  ))}
                </div>

                {form.isChain && (
                  <div style={{ marginTop: 16, background: '#FFFBEB', borderRadius: 12, padding: 14 }}>
                    <p style={{ color: '#92400E', fontSize: 13, fontWeight: 500 }}>
                      ✅ Multi-city mode ON — Next step mein har city ka alag branch add kar sakte ho with city-specific batches, timing, contact.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* STEP 2 — Branches / Cities */}
          {step === 2 && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
                <div>
                  <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginBottom: 4 }}>
                    📍 {form.isChain ? 'Branch Cities' : 'Center Details'}
                  </h2>
                  <p style={{ color: '#64748B', fontSize: 14 }}>
                    {form.isChain ? `${form.branches.length} branch(es) added — har city ka alag detail` : 'Your single center ka address aur details'}
                  </p>
                </div>
                {form.isChain && (
                  <button onClick={addBranch} style={{ padding: '10px 20px', background: 'linear-gradient(135deg, #1E40AF, #3B82F6)', color: '#fff', border: 'none', borderRadius: 10, cursor: 'pointer', fontSize: 13, fontWeight: 700 }}>
                    + Add Branch
                  </button>
                )}
              </div>

              {/* Branch Tabs */}
              {form.isChain && (
                <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
                  {form.branches.map((br, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                      <button onClick={() => setActiveBranch(i)} style={{
                        padding: '8px 16px', borderRadius: '10px 0 0 10px', border: '1.5px solid',
                        cursor: 'pointer', fontSize: 13, fontWeight: 600,
                        borderColor: activeBranch === i ? '#1E40AF' : '#E2E8F0',
                        background: activeBranch === i ? '#EFF6FF' : '#fff',
                        color: activeBranch === i ? '#1E40AF' : '#374151',
                      }}>
                        {br.isHQ ? '⭐ HQ' : '📍'} {br.city || `Branch ${i + 1}`}
                      </button>
                      {!br.isHQ && (
                        <button onClick={() => removeBranch(i)} style={{ padding: '8px 10px', border: '1.5px solid #E2E8F0', borderLeft: 'none', borderRadius: '0 10px 10px 0', background: '#FEF2F2', color: '#DC2626', cursor: 'pointer', fontSize: 12 }}>✕</button>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Branch Form */}
              {form.branches.map((branch, branchIdx) => (
                (form.isChain ? branchIdx === activeBranch : true) && (
                  <div key={branchIdx}>
                    {branch.isHQ && form.isChain && (
                      <div style={{ background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: 10, padding: '8px 14px', marginBottom: 16, display: 'flex', gap: 8, alignItems: 'center' }}>
                        <span style={{ fontSize: 16 }}>⭐</span>
                        <span style={{ color: '#92400E', fontSize: 13, fontWeight: 600 }}>Headquarters / Main Center</span>
                      </div>
                    )}

                    {/* Location Details */}
                    <div style={{ background: '#F8FAFC', borderRadius: 14, padding: 20, marginBottom: 20, border: '1px solid #E2E8F0' }}>
                      <h4 style={{ fontWeight: 700, color: '#0F172A', fontSize: 15, marginBottom: 14 }}>📍 Location Details</h4>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
                        <div>
                          <label style={{ ...labelStyle, fontSize: 12 }}>City *</label>
                          <select value={branch.city} onChange={e => updateBranchField(branchIdx, 'city', e.target.value)} style={{ ...inputStyle, padding: '9px 12px', fontSize: 13 }}>
                            <option value="">Select City</option>
                            {indianCities.map(c => <option key={c}>{c}</option>)}
                          </select>
                        </div>
                        <div>
                          <label style={{ ...labelStyle, fontSize: 12 }}>State *</label>
                          <select value={branch.state} onChange={e => updateBranchField(branchIdx, 'state', e.target.value)} style={{ ...inputStyle, padding: '9px 12px', fontSize: 13 }}>
                            <option value="">Select State</option>
                            {indianStates.map(s => <option key={s}>{s}</option>)}
                          </select>
                        </div>
                        <div>
                          <label style={{ ...labelStyle, fontSize: 12 }}>Area / Locality *</label>
                          <input value={branch.area} onChange={e => updateBranchField(branchIdx, 'area', e.target.value)} placeholder="e.g. Kothrud, Shivajinagar" style={{ ...inputStyle, padding: '9px 12px', fontSize: 13 }} />
                        </div>
                        <div>
                          <label style={{ ...labelStyle, fontSize: 12 }}>Pincode</label>
                          <input value={branch.pincode} onChange={e => updateBranchField(branchIdx, 'pincode', e.target.value)} placeholder="411001" style={{ ...inputStyle, padding: '9px 12px', fontSize: 13 }} />
                        </div>
                      </div>
                      <div style={{ marginTop: 12 }}>
                        <label style={{ ...labelStyle, fontSize: 12 }}>Full Address</label>
                        <input value={branch.address} onChange={e => updateBranchField(branchIdx, 'address', e.target.value)} placeholder="Building, Street, Landmark" style={{ ...inputStyle, fontSize: 13 }} />
                      </div>
                    </div>

                    {/* Contact for this branch */}
                    <div style={{ background: '#F8FAFC', borderRadius: 14, padding: 20, marginBottom: 20, border: '1px solid #E2E8F0' }}>
                      <h4 style={{ fontWeight: 700, color: '#0F172A', fontSize: 15, marginBottom: 14 }}>📞 Branch Contact</h4>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
                        {[
                          { key: 'contactPerson', label: 'Branch Manager / Contact Person', placeholder: 'Name' },
                          { key: 'phone', label: 'Branch Phone *', placeholder: '+91 XXXXX XXXXX' },
                          { key: 'whatsapp', label: 'WhatsApp', placeholder: '+91 XXXXX XXXXX' },
                          { key: 'email', label: 'Branch Email', placeholder: 'pune@institute.com' },
                          { key: 'totalSeats', label: 'Total Capacity (seats)', placeholder: '200' },
                          { key: 'established', label: 'Branch Established', placeholder: '2018' },
                        ].map(f => (
                          <div key={f.key}>
                            <label style={{ ...labelStyle, fontSize: 12 }}>{f.label}</label>
                            <input value={branch[f.key]} onChange={e => updateBranchField(branchIdx, f.key, e.target.value)} placeholder={f.placeholder} style={{ ...inputStyle, padding: '9px 12px', fontSize: 13 }} />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Batches for this branch */}
                    <div style={{ background: '#F8FAFC', borderRadius: 14, padding: 20, marginBottom: 20, border: '1px solid #E2E8F0' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                        <h4 style={{ fontWeight: 700, color: '#0F172A', fontSize: 15 }}>📚 Batches at this Branch</h4>
                        <button onClick={() => addBranchBatch(branchIdx)} style={{ padding: '6px 14px', background: '#EFF6FF', color: '#1E40AF', border: '1.5px solid #BFDBFE', borderRadius: 8, cursor: 'pointer', fontSize: 12, fontWeight: 600 }}>+ Add Batch</button>
                      </div>
                      {branch.batches.map((batch, batchIdx) => (
                        <div key={batchIdx} style={{ background: '#fff', borderRadius: 12, padding: 16, marginBottom: 10, border: '1px solid #E2E8F0' }}>
                          <div style={{ fontSize: 12, fontWeight: 700, color: '#1E40AF', marginBottom: 10 }}>Batch {batchIdx + 1}</div>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 10 }}>
                            {[
                              { key: 'name', label: 'Batch Name', placeholder: 'NEET Morning 2025' },
                              { key: 'timing', label: 'Timing', placeholder: '7–10 AM' },
                              { key: 'days', label: 'Days', placeholder: 'Mon–Sat' },
                              { key: 'seats', label: 'Seats', placeholder: '40' },
                              { key: 'startDate', label: 'Start Date', placeholder: 'July 2025' },
                              { key: 'fee', label: 'Fee (₹)', placeholder: '85,000' },
                            ].map(f => (
                              <div key={f.key}>
                                <label style={{ fontSize: 11, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 4 }}>{f.label}</label>
                                <input value={batch[f.key]} onChange={e => updateBranchBatch(branchIdx, batchIdx, f.key, e.target.value)} placeholder={f.placeholder} style={{ ...inputStyle, padding: '8px 10px', fontSize: 12 }} />
                              </div>
                            ))}
                            <div>
                              <label style={{ fontSize: 11, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 4 }}>Mode</label>
                              <select value={batch.mode} onChange={e => updateBranchBatch(branchIdx, batchIdx, 'mode', e.target.value)} style={{ ...inputStyle, padding: '8px 10px', fontSize: 12 }}>
                                <option>Offline</option>
                                <option>Online</option>
                                <option>Offline + Online</option>
                              </select>
                            </div>
                            <div>
                              <label style={{ fontSize: 11, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 4 }}>Exam</label>
                              <select value={batch.exam} onChange={e => updateBranchBatch(branchIdx, batchIdx, 'exam', e.target.value)} style={{ ...inputStyle, padding: '8px 10px', fontSize: 12 }}>
                                {examOptions.map(e => <option key={e}>{e}</option>)}
                              </select>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Facilities for this branch */}
                    <div>
                      <label style={labelStyle}>Facilities at this Branch</label>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {facilityOptions.map(f => (
                          <label key={f} style={{
                            display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer',
                            padding: '6px 12px', borderRadius: 20, fontSize: 12, fontWeight: 500,
                            border: `1.5px solid ${branch.facilities.includes(f) ? '#059669' : '#E2E8F0'}`,
                            background: branch.facilities.includes(f) ? '#F0FDF4' : '#F8FAFC',
                            color: branch.facilities.includes(f) ? '#059669' : '#374151',
                            transition: 'all 0.2s',
                          }}>
                            <input type="checkbox" checked={branch.facilities.includes(f)} onChange={() => toggleBranchFacility(branchIdx, f)} style={{ display: 'none' }} />
                            {branch.facilities.includes(f) ? '✓ ' : ''}{f}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              ))}

              {/* Summary if chain */}
              {form.isChain && form.branches.length > 1 && (
                <div style={{ marginTop: 24, background: 'linear-gradient(135deg, #EFF6FF, #F0FDF4)', borderRadius: 14, padding: 20, border: '1px solid #BFDBFE' }}>
                  <h4 style={{ fontWeight: 700, color: '#0F172A', fontSize: 15, marginBottom: 12 }}>🗺️ Your Coverage Map</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                    {form.branches.map((br, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#fff', borderRadius: 20, padding: '6px 14px', border: '1px solid #E2E8F0', fontSize: 13 }}>
                        <span>{br.isHQ ? '⭐' : '📍'}</span>
                        <span style={{ fontWeight: 600, color: '#0F172A' }}>{br.city || `Branch ${i+1}`}</span>
                        {br.state && <span style={{ color: '#94A3B8', fontSize: 11 }}>, {br.state}</span>}
                      </div>
                    ))}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#1E40AF', borderRadius: 20, padding: '6px 14px', fontSize: 13 }}>
                      <span style={{ color: '#fff', fontWeight: 700 }}>{form.branches.length} Cities Total</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* STEP 3 — Faculty & Results */}
          {step === 3 && (
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginBottom: 4 }}>👨‍🏫 Faculty & Results</h2>
              <p style={{ color: '#64748B', fontSize: 14, marginBottom: 24 }}>Faculty details aur past results — students ka trust badhega</p>

              {/* Faculty */}
              <div style={{ marginBottom: 28 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <label style={{ ...labelStyle, margin: 0 }}>Faculty Members</label>
                  <button onClick={addFaculty} style={{ padding: '6px 14px', background: '#EFF6FF', color: '#1E40AF', border: '1.5px solid #BFDBFE', borderRadius: 8, cursor: 'pointer', fontSize: 13, fontWeight: 600 }}>+ Add Faculty</button>
                </div>
                {form.faculty.map((f, i) => (
                  <div key={i} style={{ background: '#F8FAFC', borderRadius: 14, padding: 20, marginBottom: 14, border: '1px solid #E2E8F0', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    {/* Faculty photo */}
                    <div style={{ flexShrink: 0 }}>
                      <label style={{ cursor: 'pointer' }}>
                        <div style={{ width: 64, height: 64, borderRadius: '50%', border: '2px dashed #BFDBFE', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, overflow: 'hidden' }}>
                          {f.photoPreview ? <img src={f.photoPreview} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : '👨‍🏫'}
                        </div>
                        <input type="file" accept="image/*" onChange={e => {
                          const file = e.target.files[0]
                          if (file) updateFaculty(i, 'photoPreview', URL.createObjectURL(file))
                        }} style={{ display: 'none' }} />
                      </label>
                      <div style={{ fontSize: 10, color: '#94A3B8', textAlign: 'center', marginTop: 4 }}>Upload Photo</div>
                    </div>
                    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12 }}>
                      {[
                        { key: 'name', label: 'Faculty Name', placeholder: 'Dr. Ramesh Kulkarni' },
                        { key: 'qualification', label: 'Qualification', placeholder: 'MBBS, MD / B.Tech IIT' },
                        { key: 'subject', label: 'Subject', placeholder: 'Biology / Physics / Maths' },
                        { key: 'experience', label: 'Experience', placeholder: '10 years' },
                      ].map(field => (
                        <div key={field.key}>
                          <label style={{ ...labelStyle, fontSize: 12 }}>{field.label}</label>
                          <input value={f[field.key] || ''} onChange={e => updateFaculty(i, field.key, e.target.value)} placeholder={field.placeholder} style={{ ...inputStyle, padding: '9px 12px', fontSize: 13 }} />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Results */}
              <div style={{ background: 'linear-gradient(135deg, #F0FDF4, #fff)', borderRadius: 16, padding: 24, border: '1px solid #BBF7D0', marginBottom: 20 }}>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: '#065F46', marginBottom: 16 }}>🏆 2024 Results</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 14 }}>
                  {[
                    { key: 'neetTop', label: 'Top NEET Score', placeholder: '680' },
                    { key: 'jeeTop', label: 'Top JEE Rank', placeholder: 'AIR 2840' },
                    { key: 'neetSelections', label: 'NEET Selections', placeholder: '45 students' },
                    { key: 'jeeSelections', label: 'JEE Selections', placeholder: '28 students' },
                    { key: 'totalSelections', label: 'Total Selections', placeholder: '120 students' },
                  ].map(f => (
                    <div key={f.key}>
                      <label style={{ ...labelStyle, fontSize: 12 }}>{f.label}</label>
                      <input value={form.results2024[f.key]} onChange={e => set('results2024', { ...form.results2024, [f.key]: e.target.value })} placeholder={f.placeholder} style={{ ...inputStyle, padding: '9px 12px', fontSize: 13 }} />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label style={labelStyle}>Notable Achievements / Awards</label>
                <textarea value={form.achievements} onChange={e => set('achievements', e.target.value)} rows={3} placeholder="e.g. Pune's Best NEET Coaching 2023 (Times Group Survey), 500+ IIT selections since 2015, 3 students in AIIMS Delhi..." style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }} />
              </div>
            </div>
          )}

          {/* STEP 4 — Photos & Media */}
          {step === 4 && (
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginBottom: 4 }}>📸 Photos & Media</h2>
              <p style={{ color: '#64748B', fontSize: 14, marginBottom: 24 }}>Institute ki photos — students booking se pehle dekhte hain</p>

              {/* Gallery Upload */}
              <div style={{ marginBottom: 28 }}>
                <label style={labelStyle}>Institute Gallery Photos <span style={{ color: '#94A3B8', fontWeight: 400 }}>(Max 8 photos)</span></label>
                <div style={{ border: '2px dashed #BFDBFE', borderRadius: 16, padding: 24, background: '#EFF6FF', textAlign: 'center', marginBottom: 16 }}>
                  <div style={{ fontSize: 40, marginBottom: 8 }}>📷</div>
                  <p style={{ color: '#1E40AF', fontWeight: 600, marginBottom: 4 }}>Classroom, Library, Faculty photos upload karo</p>
                  <p style={{ color: '#64748B', fontSize: 13, marginBottom: 16 }}>Drag & drop ya browse karo — JPG, PNG</p>
                  <label style={{ padding: '10px 24px', background: '#1E40AF', color: '#fff', borderRadius: 10, cursor: 'pointer', fontWeight: 600, fontSize: 14, display: 'inline-block' }}>
                    📁 Choose Photos (Max 8)
                    <input type="file" accept="image/*" multiple onChange={handleGallery} style={{ display: 'none' }} />
                  </label>
                </div>

                {/* Preview Grid */}
                {galleryPreviews.length > 0 && (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 12 }}>
                    {galleryPreviews.map((src, i) => (
                      <div key={i} style={{ borderRadius: 12, overflow: 'hidden', height: 100, position: 'relative' }}>
                        <img src={src} alt={`gallery ${i}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{ position: 'absolute', bottom: 4, right: 4, background: '#059669', color: '#fff', borderRadius: 10, padding: '2px 8px', fontSize: 10, fontWeight: 700 }}>✓</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Photo guidelines */}
              <div style={{ background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: 12, padding: 16, marginBottom: 24 }}>
                <h4 style={{ color: '#92400E', fontWeight: 700, fontSize: 14, marginBottom: 8 }}>📌 Photo Tips — Better Photos = More Enrollments</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  {['Classrooms (well-lit, clean)', 'Library & study area', 'Faculty photos', 'Results board / trophies', 'Students in classroom', 'Campus / building exterior', 'Lab / facilities', 'Events / achievements'].map(tip => (
                    <div key={tip} style={{ display: 'flex', gap: 8, fontSize: 13, color: '#374151' }}>
                      <span style={{ color: '#D97706' }}>✓</span> {tip}
                    </div>
                  ))}
                </div>
              </div>

              {/* Video */}
              <div>
                <label style={labelStyle}>YouTube Video Tour (Optional)</label>
                <input value={form.youtubeChannel} onChange={e => set('youtubeChannel', e.target.value)} placeholder="https://youtube.com/watch?v=..." style={inputStyle} />
                <p style={{ fontSize: 12, color: '#94A3B8', marginTop: 6 }}>Institute tour ya introduction video — students ka confidence badhta hai</p>
              </div>
            </div>
          )}

          {/* STEP 5 — Fees & Plan */}
          {step === 5 && (
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginBottom: 4 }}>💰 Fees & Listing Plan</h2>
              <p style={{ color: '#64748B', fontSize: 14, marginBottom: 24 }}>Fee structure aur CareerDisha listing plan select karo</p>

              {/* Fee Structure */}
              <div style={{ marginBottom: 28 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <label style={{ ...labelStyle, margin: 0 }}>Course Fee Structure *</label>
                  <button onClick={addFee} style={{ padding: '6px 14px', background: '#EFF6FF', color: '#1E40AF', border: '1.5px solid #BFDBFE', borderRadius: 8, cursor: 'pointer', fontSize: 13, fontWeight: 600 }}>+ Add Course</button>
                </div>
                {form.feeStructure.map((fee, i) => (
                  <div key={i} style={{ background: '#F8FAFC', borderRadius: 12, padding: 16, marginBottom: 12, border: '1px solid #E2E8F0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 12 }}>
                    {[
                      { key: 'course', label: 'Course Name', placeholder: 'NEET 1-Year Batch' },
                      { key: 'duration', label: 'Duration', placeholder: '1 Year' },
                      { key: 'fee', label: 'Total Fee (₹)', placeholder: '85,000' },
                      { key: 'emi', label: 'EMI Option', placeholder: '₹7,500/month' },
                    ].map(f => (
                      <div key={f.key}>
                        <label style={{ ...labelStyle, fontSize: 12 }}>{f.label}</label>
                        <input value={fee[f.key]} onChange={e => updateFee(i, f.key, e.target.value)} placeholder={f.placeholder} style={{ ...inputStyle, padding: '9px 12px', fontSize: 13 }} />
                      </div>
                    ))}
                  </div>
                ))}

                <div style={{ display: 'flex', gap: 20, marginTop: 12 }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 14, color: '#374151' }}>
                    <input type="checkbox" checked={form.loanFacility} onChange={e => set('loanFacility', e.target.checked)} style={{ width: 16, height: 16, accentColor: '#1E40AF' }} />
                    Bank Loan Facility Available
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 14, color: '#374151' }}>
                    <input type="checkbox" checked={form.scholarshipTest} onChange={e => set('scholarshipTest', e.target.checked)} style={{ width: 16, height: 16, accentColor: '#1E40AF' }} />
                    Scholarship Test Offered
                  </label>
                </div>
              </div>

              {/* Listing Plan Selection */}
              <div>
                <label style={{ ...labelStyle, fontSize: 16, marginBottom: 16 }}>CareerDisha Listing Plan Select Karo</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 14 }}>
                  {[
                    { id: 'free', name: 'Free', price: '₹0', period: 'forever', color: '#94A3B8', bg: '#F8FAFC', features: ['Basic listing', '5 leads/month', 'Standard placement', 'Email support'] },
                    { id: 'starter', name: 'Starter', price: '₹2,999', period: '/month', color: '#059669', bg: '#F0FDF4', recommended: false, features: ['30 leads/month', 'Verified ✓ badge', 'WhatsApp alerts', 'Analytics dashboard'] },
                    { id: 'growth', name: 'Growth', price: '₹5,999', period: '/month', color: '#1E40AF', bg: '#EFF6FF', recommended: true, features: ['Unlimited leads', 'Featured listing', 'Priority placement', 'Monthly report'] },
                    { id: 'premium', name: 'Premium', price: '₹9,999', period: '/month', color: '#D97706', bg: '#FFFBEB', features: ['Top slot always', 'Dedicated manager', 'Social promotion', 'WhatsApp campaign'] },
                  ].map(plan => (
                    <div key={plan.id} onClick={() => set('plan', plan.id)} style={{
                      borderRadius: 16, border: `2px solid ${form.plan === plan.id ? plan.color : '#E2E8F0'}`,
                      padding: 18, cursor: 'pointer', position: 'relative',
                      background: form.plan === plan.id ? plan.bg : '#fff',
                      boxShadow: form.plan === plan.id ? `0 0 0 3px ${plan.color}20` : 'none',
                      transition: 'all 0.2s',
                    }}>
                      {plan.recommended && <div style={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)', background: '#1E40AF', color: '#fff', borderRadius: 20, padding: '2px 12px', fontSize: 10, fontWeight: 700, whiteSpace: 'nowrap' }}>Most Popular</div>}
                      <div style={{ color: plan.color, fontWeight: 800, fontSize: 16, marginBottom: 2 }}>{plan.name}</div>
                      <div style={{ fontSize: 22, fontWeight: 800, color: '#0F172A' }}>{plan.price}<span style={{ fontSize: 12, color: '#94A3B8', fontWeight: 400 }}>{plan.period}</span></div>
                      <div style={{ marginTop: 12 }}>
                        {plan.features.map(f => (
                          <div key={f} style={{ fontSize: 12, color: '#374151', marginBottom: 4, display: 'flex', gap: 6 }}>
                            <span style={{ color: plan.color }}>✓</span> {f}
                          </div>
                        ))}
                      </div>
                      {form.plan === plan.id && <div style={{ marginTop: 10, textAlign: 'center', fontSize: 11, color: plan.color, fontWeight: 700 }}>✓ Selected</div>}
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 20, background: '#EFF6FF', borderRadius: 12, padding: 14 }}>
                  <p style={{ color: '#1E40AF', fontSize: 13 }}>
                    💡 <strong>Tip:</strong> Free plan se shuru karo — jab leads aane lagein tab upgrade karo. Koi hidden charges nahi.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 32, paddingTop: 24, borderTop: '1px solid #F1F5F9' }}>
            {step > 1 ? (
              <button onClick={() => setStep(s => s - 1)} style={{ padding: '12px 24px', borderRadius: 10, border: '1.5px solid #E2E8F0', background: '#fff', color: '#374151', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>
                ← Back
              </button>
            ) : <div />}

            {step < 5 ? (
              <button onClick={() => setStep(s => s + 1)} style={{
                padding: '12px 32px', borderRadius: 10,
                background: 'linear-gradient(135deg, #1E40AF, #3B82F6)',
                color: '#fff', border: 'none', fontWeight: 700, fontSize: 15, cursor: 'pointer',
                boxShadow: '0 6px 16px rgba(30,64,175,0.3)',
              }}>
                Next Step →
              </button>
            ) : (
              <button onClick={() => setSubmitted(true)} style={{
                padding: '12px 32px', borderRadius: 10,
                background: 'linear-gradient(135deg, #059669, #10B981)',
                color: '#fff', border: 'none', fontWeight: 700, fontSize: 15, cursor: 'pointer',
                boxShadow: '0 6px 16px rgba(5,150,105,0.3)',
              }}>
                🚀 Submit Registration
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
