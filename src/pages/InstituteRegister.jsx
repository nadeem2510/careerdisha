import { useState } from 'react'
import { Link } from 'react-router-dom'

const steps = [
  { id: 1, label: 'Basic Info', icon: '🏫' },
  { id: 2, label: 'Courses & Batches', icon: '📚' },
  { id: 3, label: 'Faculty & Results', icon: '👨‍🏫' },
  { id: 4, label: 'Photos & Media', icon: '📸' },
  { id: 5, label: 'Fees & Plans', icon: '💰' },
]

const examOptions = ['NEET', 'JEE Mains', 'JEE Advanced', 'Foundation (Class 8-10)', 'NEET + JEE Both', 'Dropper Batch', 'MHT-CET', 'BITSAT', 'KVPY', 'Olympiad']
const facilityOptions = ['AC Classrooms', 'Library', 'Hostel', 'Online Backup Classes', 'Test Series', 'Doubt Sessions', 'Study Material', 'Parent App', 'CCTV Campus', 'Cafeteria', 'Transport', 'Medical Facility', 'Counseling Support', 'Scholarship Tests']

export default function InstituteRegister() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [logoPreview, setLogoPreview] = useState(null)
  const [galleryPreviews, setGalleryPreviews] = useState([])
  const [form, setForm] = useState({
    // Basic Info
    name: '', ownerName: '', phone: '', whatsapp: '', email: '',
    address: '', city: '', state: '', pincode: '',
    established: '', totalStudents: '', website: '',
    description: '',
    // Courses
    exams: [],
    batches: [{ name: '', timing: '', days: '', seats: '', startDate: '', mode: 'Offline' }],
    // Faculty
    faculty: [{ name: '', qualification: '', experience: '', subject: '', photo: null }],
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

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }))
  const toggleExam = (exam) => {
    const arr = form.exams.includes(exam) ? form.exams.filter(e => e !== exam) : [...form.exams, exam]
    set('exams', arr)
  }
  const toggleFacility = (f) => {
    const arr = form.facilities.includes(f) ? form.facilities.filter(x => x !== f) : [...form.facilities, f]
    set('facilities', arr)
  }

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

          {/* STEP 1 — Basic Info */}
          {step === 1 && (
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginBottom: 4 }}>🏫 Basic Information</h2>
              <p style={{ color: '#64748B', fontSize: 14, marginBottom: 28 }}>Institute ki basic details — students yahi dekhenge</p>

              {/* Logo Upload */}
              <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>Institute Logo / Photo *</label>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                  <div style={{
                    width: 90, height: 90, borderRadius: 16, border: '2px dashed #BFDBFE',
                    background: logoPreview ? 'transparent' : '#EFF6FF',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    overflow: 'hidden', flexShrink: 0,
                  }}>
                    {logoPreview ? <img src={logoPreview} alt="logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <span style={{ fontSize: 28 }}>🏫</span>}
                  </div>
                  <div>
                    <label style={{ padding: '10px 20px', background: '#EFF6FF', color: '#1E40AF', borderRadius: 10, cursor: 'pointer', fontWeight: 600, fontSize: 13, display: 'inline-block' }}>
                      📁 Upload Logo
                      <input type="file" accept="image/*" onChange={handleLogo} style={{ display: 'none' }} />
                    </label>
                    <p style={{ fontSize: 12, color: '#94A3B8', marginTop: 6 }}>PNG, JPG — max 2MB. Square image preferred.</p>
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                {[
                  { key: 'name', label: 'Institute Full Name *', placeholder: 'e.g. Aakash Study Center Pune' },
                  { key: 'ownerName', label: 'Owner / Director Name *', placeholder: 'Full name' },
                  { key: 'phone', label: 'Phone Number *', placeholder: '+91 98765 43210' },
                  { key: 'whatsapp', label: 'WhatsApp Number', placeholder: 'Same as phone or different' },
                  { key: 'email', label: 'Email Address *', placeholder: 'institute@email.com' },
                  { key: 'website', label: 'Website (if any)', placeholder: 'www.yourinstitute.com' },
                  { key: 'established', label: 'Established Year', placeholder: '2010' },
                  { key: 'totalStudents', label: 'Total Students (All Time)', placeholder: '500' },
                ].map(f => (
                  <div key={f.key}>
                    <label style={labelStyle}>{f.label}</label>
                    <input value={form[f.key]} onChange={e => set(f.key, e.target.value)} placeholder={f.placeholder} style={inputStyle}
                      onFocus={e => e.target.style.borderColor = '#3B82F6'}
                      onBlur={e => e.target.style.borderColor = '#E2E8F0'} />
                  </div>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={labelStyle}>Full Address *</label>
                  <input value={form.address} onChange={e => set('address', e.target.value)} placeholder="Street address, landmark" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>City *</label>
                  <input value={form.city} onChange={e => set('city', e.target.value)} placeholder="Pune" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Pincode</label>
                  <input value={form.pincode} onChange={e => set('pincode', e.target.value)} placeholder="411001" style={inputStyle} />
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Institute Description * <span style={{ color: '#94A3B8', fontWeight: 400 }}>(Students ko dikhega — 100-200 words)</span></label>
                <textarea value={form.description} onChange={e => set('description', e.target.value)} rows={4} placeholder="Apne institute ke baare mein likhein — specialization, teaching methodology, achievements, what makes you unique..." style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }} />
              </div>

              <div style={{ marginBottom: 8 }}>
                <label style={labelStyle}>YouTube Channel Link</label>
                <input value={form.youtubeChannel} onChange={e => set('youtubeChannel', e.target.value)} placeholder="https://youtube.com/@yourinstitute" style={inputStyle} />
              </div>
            </div>
          )}

          {/* STEP 2 — Courses & Batches */}
          {step === 2 && (
            <div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginBottom: 4 }}>📚 Courses & Batches</h2>
              <p style={{ color: '#64748B', fontSize: 14, marginBottom: 24 }}>Kaunse exams ke liye coaching, kab se batch, kitni seats</p>

              {/* Exams */}
              <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>Exams Offered * <span style={{ color: '#94A3B8', fontWeight: 400 }}>(Sab select karo jo applicable ho)</span></label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {examOptions.map(exam => (
                    <label key={exam} style={{
                      display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer',
                      padding: '8px 14px', borderRadius: 20,
                      border: `1.5px solid ${form.exams.includes(exam) ? '#1E40AF' : '#E2E8F0'}`,
                      background: form.exams.includes(exam) ? '#EFF6FF' : '#F8FAFC',
                      color: form.exams.includes(exam) ? '#1E40AF' : '#374151',
                      fontSize: 13, fontWeight: 500, transition: 'all 0.2s',
                    }}>
                      <input type="checkbox" checked={form.exams.includes(exam)} onChange={() => toggleExam(exam)} style={{ display: 'none' }} />
                      {form.exams.includes(exam) ? '✓' : ''} {exam}
                    </label>
                  ))}
                </div>
              </div>

              {/* Batches */}
              <div style={{ marginBottom: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <label style={{ ...labelStyle, margin: 0 }}>Batch Details *</label>
                  <button onClick={addBatch} style={{ padding: '6px 14px', background: '#EFF6FF', color: '#1E40AF', border: '1.5px solid #BFDBFE', borderRadius: 8, cursor: 'pointer', fontSize: 13, fontWeight: 600 }}>+ Add Batch</button>
                </div>
                {form.batches.map((batch, i) => (
                  <div key={i} style={{ background: '#F8FAFC', borderRadius: 14, padding: 20, marginBottom: 14, border: '1px solid #E2E8F0' }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#1E40AF', marginBottom: 12 }}>Batch {i + 1}</div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12 }}>
                      {[
                        { key: 'name', label: 'Batch Name', placeholder: 'e.g. NEET Morning Batch' },
                        { key: 'timing', label: 'Timing', placeholder: '7:00 AM – 10:00 AM' },
                        { key: 'days', label: 'Days', placeholder: 'Mon–Sat' },
                        { key: 'seats', label: 'Total Seats', placeholder: '40' },
                        { key: 'startDate', label: 'Next Batch Start', placeholder: 'July 2025' },
                      ].map(f => (
                        <div key={f.key}>
                          <label style={{ ...labelStyle, fontSize: 12 }}>{f.label}</label>
                          <input value={batch[f.key]} onChange={e => updateBatch(i, f.key, e.target.value)} placeholder={f.placeholder} style={{ ...inputStyle, padding: '9px 12px', fontSize: 13 }} />
                        </div>
                      ))}
                      <div>
                        <label style={{ ...labelStyle, fontSize: 12 }}>Mode</label>
                        <select value={batch.mode} onChange={e => updateBatch(i, 'mode', e.target.value)} style={{ ...inputStyle, padding: '9px 12px', fontSize: 13 }}>
                          <option>Offline</option>
                          <option>Online</option>
                          <option>Offline + Online</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Facilities */}
              <div>
                <label style={labelStyle}>Facilities Available</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {facilityOptions.map(f => (
                    <label key={f} style={{
                      display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer',
                      padding: '6px 12px', borderRadius: 20, fontSize: 12, fontWeight: 500,
                      border: `1.5px solid ${form.facilities.includes(f) ? '#059669' : '#E2E8F0'}`,
                      background: form.facilities.includes(f) ? '#F0FDF4' : '#F8FAFC',
                      color: form.facilities.includes(f) ? '#059669' : '#374151',
                      transition: 'all 0.2s',
                    }}>
                      <input type="checkbox" checked={form.facilities.includes(f)} onChange={() => toggleFacility(f)} style={{ display: 'none' }} />
                      {form.facilities.includes(f) ? '✓ ' : ''}{f}
                    </label>
                  ))}
                </div>
              </div>
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
