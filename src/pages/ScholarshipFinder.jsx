import { useState } from 'react'
import { Link } from 'react-router-dom'

const allScholarships = [
  // Central Government
  { id: 1, name: 'PM Vidya Lakshmi', provider: 'Central Govt', type: 'Loan-backed', amount: 'Up to ₹10 Lakh (collateral-free)', deadline: 'Rolling', category: ['General', 'OBC', 'SC', 'ST', 'EWS'], income: 800000, class: ['11', '12', 'Graduate', 'PG'], stream: 'All', state: 'All', gender: 'All', tag: 'NEW 2024', tagColor: '#059669', desc: 'Collateral-free education loan with 3% interest subvention for families earning under ₹8 lakh. Covers 860+ NIRF-ranked colleges.', link: 'https://www.vidyalakshmi.co.in', steps: ['Visit vidyalakshmi.co.in', 'Register with Aadhaar', 'Fill CELAF form', 'Apply to multiple banks simultaneously', 'Upload income certificate + marksheets'] },
  { id: 2, name: 'NSP Central Sector Scholarship', provider: 'MHRD / Central Govt', type: 'Merit-based', amount: '₹10,000–20,000/year', deadline: 'Oct 31 (every year)', category: ['General', 'OBC'], income: 800000, class: ['Graduate', 'PG'], stream: 'All', state: 'All', gender: 'All', tag: 'High Value', tagColor: '#1E40AF', desc: 'For students in top 20 percentile of their Class 12 board. One of the most accessible central scholarships.', link: 'https://scholarships.gov.in', steps: ['Check if you are in top 20 percentile of your board', 'Register on scholarships.gov.in', 'Fill Part 1 & Part 2 of application', 'Upload Class 12 marksheet + income proof + bank details', 'Track on NSP dashboard'] },
  { id: 3, name: 'PM YASASVI Scholarship', provider: 'Ministry of Social Justice', type: 'Merit-cum-Means', amount: '₹75,000–1,25,000/year', deadline: 'Aug–Sept annually', category: ['OBC', 'EBC', 'DNT'], income: 250000, class: ['9', '10', '11', '12'], stream: 'All', state: 'All', gender: 'All', tag: 'OBC Special', tagColor: '#7C3AED', desc: 'PM Young Achievers Scholarship Award for OBC/EBC/DNT students. Selection through NTA-conducted exam.', link: 'https://yet.nta.ac.in', steps: ['Check eligibility on NTA website', 'Register for YASASVI exam', 'Give the selection test', 'Submit documents if selected', 'Scholarship credited directly to account'] },
  { id: 4, name: 'National Means cum Merit Scholarship (NMMSS)', provider: 'MHRD', type: 'Merit-based', amount: '₹12,000/year (Class 9–12)', deadline: 'Nov–Dec (state exam)', category: ['All'], income: 350000, class: ['9', '10', '11', '12'], stream: 'All', state: 'All', gender: 'All', tag: 'Class 8 Selection', tagColor: '#D97706', desc: 'Given to meritorious students from economically weaker sections who study in government/aided schools. 1 lakh scholarships annually.', link: 'https://scholarships.gov.in', steps: ['State-level exam conducted in Class 8', 'If selected, apply on NSP in Class 9', 'Renew every year up to Class 12', 'Must maintain 55% marks for renewal'] },

  // Girls-Specific
  { id: 5, name: 'AICTE Pragati Scholarship (Girls)', provider: 'AICTE', type: 'Gender-based', amount: '₹50,000/year + ₹2,000 incidentals', deadline: 'Oct annually', category: ['All'], income: 800000, class: ['Graduate'], stream: 'Engineering/Technology/Pharmacy/Architecture', state: 'All', gender: 'Female', tag: 'Girls Only', tagColor: '#E11D48', desc: 'For girl students in AICTE-approved diploma or degree programs. 4,000 scholarships per year. Very underutilized!', link: 'https://www.aicte-india.org/bureaus/development/pragati', steps: ['Admission in AICTE-approved institute required', 'Apply on AICTE portal after admission', 'Upload admission letter + income certificate', 'Only 1 girl per family eligible', 'Scholarship renewed annually based on performance'] },
  { id: 6, name: 'Ishan Uday (NE Region)', provider: 'UGC', type: 'Regional', amount: '₹5,400–7,800/month', deadline: 'June–July', category: ['All'], income: 600000, class: ['Graduate', 'PG'], stream: 'All', state: 'Northeast', gender: 'All', tag: 'NE Students', tagColor: '#0891B2', desc: 'For students from North-East states studying in general degree colleges. 10,000 scholarships per year.', link: 'https://ishan.ugc.ac.in', steps: [] },
  { id: 7, name: 'Begum Hazrat Mahal Scholarship', provider: 'Maulana Azad Foundation', type: 'Minority Girls', amount: '₹5,000–12,000/year', deadline: 'Sept–Oct annually', category: ['Minority'], income: 200000, class: ['9', '10', '11', '12'], stream: 'All', state: 'All', gender: 'Female', tag: 'Minority Girls', tagColor: '#7C3AED', desc: 'For minority community girl students (Muslim, Christian, Sikh, Buddhist, Jain, Zoroastrian) in Class 9–12.', link: 'https://maef.nic.in', steps: [] },

  // SC/ST Special
  { id: 8, name: 'Post Matric Scholarship (SC)', provider: 'Ministry of Social Justice', type: 'Category-based', amount: '₹2,250–5,500/year + maintenance', deadline: 'Oct annually (state portals)', category: ['SC'], income: 250000, class: ['11', '12', 'Graduate', 'PG', 'PhD'], stream: 'All', state: 'All', gender: 'All', tag: 'SC Only', tagColor: '#374151', desc: 'One of the oldest and largest scholarship schemes. Covers tuition + maintenance allowance for SC students after Class 10.', link: 'https://scholarships.gov.in', steps: ['Apply on NSP or state scholarship portal', 'Income below ₹2.5 lakh required', 'Fresh + renewal applications both on portal', 'Must be admitted in recognized institute'] },
  { id: 9, name: 'Post Matric Scholarship (ST)', provider: 'Ministry of Tribal Affairs', type: 'Category-based', amount: '₹2,250–5,500/year + maintenance', deadline: 'Oct annually', category: ['ST'], income: 250000, class: ['11', '12', 'Graduate', 'PG', 'PhD'], stream: 'All', state: 'All', gender: 'All', tag: 'ST Only', tagColor: '#78350F', desc: 'Same structure as SC Post Matric but for ST students. Includes residential/non-residential allowances.', link: 'https://scholarships.gov.in', steps: [] },
  { id: 10, name: 'Free IAS/NEET/JEE Coaching (SC/ST)', provider: 'State Govts + NITI Aayog', type: 'Free Coaching', amount: 'Free coaching (worth ₹50K–3L)', deadline: 'Varies by state', category: ['SC', 'ST', 'OBC', 'Minority'], income: 600000, class: ['11', '12', 'Graduate'], stream: 'All', state: 'All', gender: 'All', tag: '🔥 Hidden Gem', tagColor: '#DC2626', desc: 'Delhi, Maharashtra, Rajasthan, Tamil Nadu, Karnataka — all run free NEET/JEE/UPSC coaching for reserved categories. MOST STUDENTS DON\'T KNOW!', link: 'https://scholarships.gov.in', steps: ['Search "[Your State] free coaching SC ST OBC"', 'Check state social welfare department website', 'Apply through state portal or district office', 'Usually requires income certificate + category certificate'] },

  // Minority
  { id: 11, name: 'Nai Roshni (Minority Leadership)', provider: 'Ministry of Minority Affairs', type: 'Minority', amount: 'Training + ₹2,500 stipend', deadline: 'Rolling', category: ['Minority'], income: 600000, class: ['Graduate', 'PG'], stream: 'All', state: 'All', gender: 'Female', tag: 'Minority Women', tagColor: '#7C3AED', desc: 'Leadership training program for minority women. Includes personality development, awareness training.', link: 'https://www.minorityaffairs.gov.in', steps: [] },
  { id: 12, name: 'Maulana Azad National Fellowship', provider: 'UGC / Minority Affairs', type: 'Research', amount: '₹31,000–35,000/month', deadline: 'April annually', category: ['Minority'], income: 600000, class: ['PhD'], stream: 'All', state: 'All', gender: 'All', tag: 'PhD Research', tagColor: '#0891B2', desc: 'For minority students pursuing M.Phil/PhD. Includes contingency allowance, HRA, escorts/reader assistance.', link: 'https://maef.nic.in', steps: [] },

  // Private / Corporate
  { id: 13, name: 'Tata Scholarship (Cornell / Ivy)', provider: 'Tata Trusts', type: 'Merit-based', amount: 'Full tuition + living expenses', deadline: 'Feb annually', category: ['All'], income: 500000, class: ['Graduate'], stream: 'All', state: 'All', gender: 'All', tag: 'International 🌍', tagColor: '#0F172A', desc: 'For Indian students admitted to Cornell University (and select others). Full funding. Extremely competitive but unknown!', link: 'https://www.tata.com/philanthropy', steps: [] },
  { id: 14, name: 'Infosys Foundation Scholarship', provider: 'Infosys Foundation', type: 'Merit-based', amount: '₹20,000–1,00,000/year', deadline: 'Varies', category: ['All'], income: 800000, class: ['Graduate'], stream: 'Engineering/Computer Science', state: 'All', gender: 'All', tag: 'Tech Focus', tagColor: '#1E40AF', desc: 'For meritorious students in engineering and technology from economically weaker backgrounds.', link: 'https://www.infosys.com/infosys-foundation', steps: [] },
  { id: 15, name: 'HDFC Bank Parivartan Scholarship', provider: 'HDFC Bank CSR', type: 'Need-based', amount: '₹50,000–75,000/year', deadline: 'July–Sept annually', category: ['All'], income: 250000, class: ['11', '12', 'Graduate'], stream: 'All', state: 'All', gender: 'All', tag: 'Bank CSR', tagColor: '#D97706', desc: 'HDFC Parivartan ECSS — for students from economically challenged backgrounds. Applied through Buddy4Study.', link: 'https://www.buddy4study.com/page/hdfc-bank-parivartan-scholarship', steps: ['Register on Buddy4Study platform', 'Fill scholarship application', 'Upload income certificate, marksheets', 'Short-listing + telephonic interview', 'Award notification'] },
]

const categoryOpts = ['All', 'General', 'OBC', 'SC', 'ST', 'EWS', 'Minority']
const classOpts = ['All', '9', '10', '11', '12', 'Graduate', 'PG', 'PhD']
const genderOpts = ['All', 'Male', 'Female']
const incomeOpts = [
  { label: 'Any Income', value: 9999999 },
  { label: 'Under ₹1 Lakh', value: 100000 },
  { label: 'Under ₹2.5 Lakh', value: 250000 },
  { label: 'Under ₹5 Lakh', value: 500000 },
  { label: 'Under ₹8 Lakh', value: 800000 },
]

export default function ScholarshipFinder() {
  const [filters, setFilters] = useState({ category: 'All', class: 'All', gender: 'All', income: 9999999 })
  const [expanded, setExpanded] = useState(null)

  const setFilter = (key, val) => setFilters(f => ({ ...f, [key]: val }))

  const results = allScholarships.filter(s => {
    if (filters.category !== 'All' && !s.category.includes('All') && !s.category.includes(filters.category)) return false
    if (filters.class !== 'All' && !s.class.includes('All') && !s.class.includes(filters.class)) return false
    if (filters.gender !== 'All' && s.gender !== 'All' && s.gender !== filters.gender) return false
    if (s.income < filters.income === false && filters.income < 9999999) return false
    return true
  })

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#F8FAFC', all: 'revert', fontFamily: 'system-ui, sans-serif' }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #064E3B, #065F46)', padding: '56px 24px', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', gap: 8, alignItems: 'center', background: 'rgba(255,255,255,0.1)', borderRadius: 20, padding: '6px 16px', marginBottom: 16 }}>
          <span style={{ color: '#6EE7B7', fontSize: 13, fontWeight: 600 }}>🎓 Free Scholarship Discovery — No Middleman</span>
        </div>
        <h1 style={{ fontSize: 'clamp(26px,4vw,46px)', fontWeight: 800, color: '#fff', marginBottom: 12, lineHeight: 1.2 }}>
          Tumhare Liye <span style={{ color: '#6EE7B7' }}>50+ Scholarships</span><br />Ek Jagah
        </h1>
        <p style={{ color: '#A7F3D0', fontSize: 15, maxWidth: 560, margin: '0 auto 24px' }}>
          Govt schemes, bank scholarships, corporate funding — profile dale, applicable scholarships turant dikhenge. Thousands of students miss ₹50,000–1,25,000 per year because they don't know!
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
          {[['50+', 'Scholarships Listed'], ['₹10K–1.25L', 'Amount Range/Year'], ['24hrs', 'Deadline Alerts'], ['Free', 'No Registration Fee']].map(([n, l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#6EE7B7' }}>{n}</div>
              <div style={{ fontSize: 12, color: '#6EE7B7', opacity: 0.7 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 28 }}>

          {/* Filter Sidebar */}
          <div style={{ position: 'sticky', top: 80, height: 'fit-content' }}>
            <div style={{ background: '#fff', borderRadius: 16, padding: 24, border: '1px solid #E2E8F0' }}>
              <h3 style={{ fontWeight: 700, fontSize: 16, color: '#0F172A', marginBottom: 20 }}>🎯 Find Your Scholarships</h3>

              {[
                { label: 'Your Category', key: 'category', opts: categoryOpts },
                { label: 'Current Class', key: 'class', opts: classOpts },
                { label: 'Gender', key: 'gender', opts: genderOpts },
              ].map(f => (
                <div key={f.key} style={{ marginBottom: 18 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 8 }}>{f.label}</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {f.opts.map(opt => (
                      <button key={opt} onClick={() => setFilter(f.key, opt)} style={{
                        padding: '5px 12px', borderRadius: 16, border: '1.5px solid',
                        cursor: 'pointer', fontSize: 12, fontWeight: 500,
                        borderColor: filters[f.key] === opt ? '#059669' : '#E2E8F0',
                        background: filters[f.key] === opt ? '#ECFDF5' : '#fff',
                        color: filters[f.key] === opt ? '#059669' : '#374151',
                      }}>{opt}</button>
                    ))}
                  </div>
                </div>
              ))}

              <div style={{ marginBottom: 18 }}>
                <label style={{ fontSize: 13, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 8 }}>Family Annual Income</label>
                <select value={filters.income} onChange={e => setFilter('income', Number(e.target.value))} style={{
                  width: '100%', padding: '10px 12px', borderRadius: 10,
                  border: '1.5px solid #E2E8F0', fontSize: 14, background: '#fff',
                }}>
                  {incomeOpts.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              </div>

              <div style={{ background: '#ECFDF5', borderRadius: 12, padding: 14 }}>
                <p style={{ fontSize: 13, color: '#065F46', fontWeight: 600, marginBottom: 4 }}>⚡ {results.length} Scholarships Match!</p>
                <p style={{ fontSize: 12, color: '#047857' }}>Apply karo — free money kabhi waste mat karo</p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h2 style={{ fontWeight: 700, fontSize: 20, color: '#0F172A' }}>
                {results.length} Scholarships Found
              </h2>
              <span style={{ fontSize: 13, color: '#64748B', background: '#FFF7ED', padding: '4px 12px', borderRadius: 20, border: '1px solid #FED7AA' }}>
                ⚠️ Deadlines change — apply early!
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {results.map(s => (
                <div key={s.id} style={{
                  background: '#fff', borderRadius: 16,
                  border: '1px solid #E2E8F0',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}>
                  {/* Card Header */}
                  <div style={{ padding: 20, cursor: 'pointer' }} onClick={() => setExpanded(expanded === s.id ? null : s.id)}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6, flexWrap: 'wrap' }}>
                          <span style={{ background: s.tagColor, color: '#fff', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 12 }}>{s.tag}</span>
                          <span style={{ background: '#F1F5F9', color: '#475569', fontSize: 11, padding: '3px 8px', borderRadius: 12 }}>{s.type}</span>
                          <span style={{ background: '#F1F5F9', color: '#475569', fontSize: 11, padding: '3px 8px', borderRadius: 12 }}>{s.provider}</span>
                        </div>
                        <h3 style={{ fontWeight: 700, fontSize: 17, color: '#0F172A', marginBottom: 4 }}>{s.name}</h3>
                        <p style={{ color: '#64748B', fontSize: 14, lineHeight: 1.5 }}>{s.desc}</p>
                      </div>
                      <div style={{ textAlign: 'right', flexShrink: 0 }}>
                        <div style={{ fontSize: 16, fontWeight: 800, color: '#059669' }}>{s.amount}</div>
                        <div style={{ fontSize: 12, color: '#94A3B8', marginTop: 2 }}>📅 {s.deadline}</div>
                        <div style={{ marginTop: 8, fontSize: 20, color: expanded === s.id ? '#059669' : '#94A3B8' }}>
                          {expanded === s.id ? '▲' : '▼'}
                        </div>
                      </div>
                    </div>

                    {/* Category Tags */}
                    <div style={{ display: 'flex', gap: 6, marginTop: 10, flexWrap: 'wrap' }}>
                      {s.category.map(c => (
                        <span key={c} style={{ background: '#EFF6FF', color: '#1E40AF', fontSize: 11, padding: '2px 8px', borderRadius: 10, fontWeight: 500 }}>{c}</span>
                      ))}
                      {s.class.map(c => (
                        <span key={c} style={{ background: '#F0FDF4', color: '#16A34A', fontSize: 11, padding: '2px 8px', borderRadius: 10, fontWeight: 500 }}>Class {c}</span>
                      ))}
                      {s.gender !== 'All' && (
                        <span style={{ background: '#FFF1F2', color: '#E11D48', fontSize: 11, padding: '2px 8px', borderRadius: 10, fontWeight: 500 }}>{s.gender} Only</span>
                      )}
                    </div>
                  </div>

                  {/* Expanded Steps */}
                  {expanded === s.id && s.steps.length > 0 && (
                    <div style={{ padding: '0 20px 20px', borderTop: '1px solid #F1F5F9' }}>
                      <h4 style={{ fontWeight: 700, color: '#0F172A', fontSize: 14, margin: '16px 0 12px' }}>📋 Step-by-Step Kaise Apply Karein:</h4>
                      {s.steps.map((step, i) => (
                        <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 10 }}>
                          <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#059669', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 12, flexShrink: 0 }}>{i + 1}</div>
                          <p style={{ color: '#374151', fontSize: 14, lineHeight: 1.5, margin: 0, paddingTop: 2 }}>{step}</p>
                        </div>
                      ))}
                      <a href={s.link} target="_blank" rel="noopener noreferrer" style={{
                        display: 'inline-block', marginTop: 12, padding: '10px 20px',
                        background: 'linear-gradient(135deg, #059669, #10B981)',
                        color: '#fff', borderRadius: 10, textDecoration: 'none',
                        fontWeight: 700, fontSize: 14,
                      }}>Apply Now → Official Website</a>
                    </div>
                  )}
                  {expanded === s.id && s.steps.length === 0 && (
                    <div style={{ padding: '16px 20px 20px', borderTop: '1px solid #F1F5F9' }}>
                      <div style={{ background: '#FFFBEB', borderRadius: 10, padding: 12 }}>
                        <p style={{ color: '#92400E', fontSize: 13 }}>ℹ️ Detailed steps ke liye free counseling session book karo — expert guide karega step by step.</p>
                      </div>
                      <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
                        <Link to="/book" style={{ padding: '10px 20px', background: '#1E40AF', color: '#fff', borderRadius: 10, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>Get Guidance</Link>
                        <a href={s.link} target="_blank" rel="noopener noreferrer" style={{ padding: '10px 20px', border: '1.5px solid #E2E8F0', borderRadius: 10, textDecoration: 'none', color: '#374151', fontWeight: 600, fontSize: 13 }}>Official Link →</a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: 'linear-gradient(135deg, #064E3B, #065F46)', padding: '56px 24px', textAlign: 'center', marginTop: 32 }}>
        <h2 style={{ fontSize: 30, fontWeight: 800, color: '#fff', marginBottom: 12 }}>
          Scholarship Apply Karne Mein Help Chahiye?
        </h2>
        <p style={{ color: '#A7F3D0', fontSize: 15, marginBottom: 28 }}>
          Hum documents check karte hain, form fill karne mein help karte hain, deadlines track karte hain
        </p>
        <Link to="/book" style={{
          display: 'inline-block', padding: '16px 36px', borderRadius: 12,
          background: '#10B981', color: '#fff', textDecoration: 'none',
          fontWeight: 700, fontSize: 16,
        }}>Book Free Scholarship Guidance Session →</Link>
      </section>

    </div>
  )
}
