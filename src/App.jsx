import { useState, useEffect } from 'react'

const TESTIMONIALS = [
  { quote: "We had 200+ old leads just sitting there. FollowUp.ai recovered 31 of them in the first week. That's ₹3.1L in admissions we nearly lost.", name: 'Arvind Mehta', role: 'Director, Pinnacle IIT Academy', init: 'AM' },
  { quote: "My clinic gets 80+ inquiries a week but the staff couldn't keep up. Now every inquiry gets a reply in under 2 minutes. Appointment rate went up 40%.", name: 'Dr. Priya Nair', role: 'Dermatologist, Glow Skin Clinic', init: 'PN' },
  { quote: "I spent ₹20k on ads every month and was losing half the leads before they even got a callback. This fixed the entire bottom of my funnel.", name: 'Rohit Bansal', role: 'Founder, SkillEdge Training', init: 'RB' },
]

const STEPS = [
  { n: '01', title: 'Connect your lead sources', desc: 'WhatsApp, Instagram DMs, website forms, Google Ads — all leads flow into one dashboard automatically.', tag: 'Setup in 10 min' },
  { n: '02', title: 'AI writes personalized follow-ups', desc: 'Every lead gets a custom 7-day message sequence. Right tone, right timing, right offer — no copy-paste blasts.', tag: 'Claude AI engine' },
  { n: '03', title: 'Messages send on autopilot', desc: 'WhatsApp messages go out at the perfect time. Replies come back to your dashboard. Staff handles only serious leads.', tag: 'Auto-send' },
  { n: '04', title: 'Track every rupee influenced', desc: 'See which leads converted, how many appointments booked, revenue influenced. Weekly report sent to your phone.', tag: 'Full reporting' },
]

const PRICING = [
  {
    name: 'Pilot', amount: '₹10,000', sub: '7-day trial · one-time',
    features: ['Up to 200 leads', 'AI follow-up sequences', 'WhatsApp sending', 'Dashboard access', 'Results report on Day 7'],
    cta: 'Start pilot', featured: false,
  },
  {
    name: 'Growth', amount: '₹35,000', sub: 'per month · cancel anytime',
    features: ['Up to 1,000 leads/month', 'AI sequences for all niches', 'WhatsApp + email follow-up', 'Full analytics dashboard', 'Weekly revenue report', 'Dedicated setup call'],
    cta: 'Get started', featured: true, badge: 'Most popular',
  },
  {
    name: 'Scale', amount: '₹65,000', sub: 'per month · multi-location',
    features: ['Unlimited leads', 'Multi-branch support', 'Custom AI personas per location', 'Priority support', 'Monthly strategy call', 'Razorpay payment integration'],
    cta: 'Talk to us', featured: false,
  },
]

const TICKER_ITEMS = [
  '40% more appointments', 'Zero lead slip-through', 'Replies in under 2 minutes',
  '7-day follow-up sequences', 'AI-powered personalization', 'Coaching centers', 'Clinics',
  'Training institutes', 'Real-time dashboard', '₹2L recovered per month',
]

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [formStep, setFormStep] = useState('form') // form | success
  const [formData, setFormData] = useState({ name: '', phone: '', business: '', type: 'Coaching Center' })
  const [leads, setLeads] = useState(80)
  const [rate, setRate] = useState(30)
  const [value, setValue] = useState(15000)

  const lostRevenue = Math.round(leads * (rate / 100) * (value / 1000)) * 1000

  async function handleSubmit(e) {
    e.preventDefault()
    if (!formData.name || !formData.phone) return
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '105009e3-14f4-4ac7-bea1-e303a62a870d',
          name: formData.name,
          phone: formData.phone,
          business: formData.business,
          type: formData.type,
          subject: 'New Demo Request — FollowUp.ai',
        })
      })
    } catch(err) {}
    setFormStep('success')
  }

  function openModal() { setModalOpen(true); setFormStep('form') }

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setModalOpen(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <>
      {/* NAV */}
      <nav>
        <div className="nav-logo">followup<span>.ai</span></div>
        <div className="nav-links">
          <a href="#how">How it works</a>
          <a href="#proof">Results</a>
          <a href="#pricing">Pricing</a>
          <a href="#calculator">Calculator</a>
        </div>
        <button className="nav-cta" onClick={openModal}>Book free demo →</button>
      </nav>

      {/* HERO */}
      <div style={{ paddingTop: 0 }}>
        <div className="hero">
          <div className="hero-kicker">AI Lead Follow-Up · Made for India</div>
          <h1>
            Your leads are<br />
            <em>leaving money</em><br />
            on the table.
          </h1>
          <p className="hero-sub">
            Every missed WhatsApp inquiry is a customer your competitor gets instead.
            FollowUp.ai sends the perfect follow-up — automatically, instantly, personally — so you convert more leads without hiring more staff.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={openModal}>
              Book a free demo →
            </button>
            <a href="#calculator" className="btn-secondary">
              Calculate your losses ↓
            </a>
          </div>
          <div className="hero-stat-row">
            <div className="hero-stat">
              <div className="hero-stat-num">2 min</div>
              <div className="hero-stat-lbl">avg first reply time</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">40%</div>
              <div className="hero-stat-lbl">more conversions</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">7 days</div>
              <div className="hero-stat-lbl">to see ROI</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">₹0</div>
              <div className="hero-stat-lbl">extra staff needed</div>
            </div>
          </div>
        </div>
      </div>

      {/* TICKER */}
      <div className="ticker-wrap">
        <div className="ticker">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span className="ticker-item" key={i}>
              <span className="dot" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* PROBLEM */}
      <div style={{ background: 'var(--bg)' }}>
        <div className="section">
          <div className="section-kicker">The problem</div>
          <h2 className="section-title">
            Good businesses lose<br />
            <em>crores in revenue</em> to slow follow-up
          </h2>
          <p className="section-sub">
            It's not that you don't have leads. You have plenty. The problem is what happens — or doesn't — in the first 24 hours after a lead reaches out.
          </p>
          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon">⏱️</div>
              <div className="problem-num"><span>78</span>%</div>
              <div className="problem-lbl">of leads go to the business that responds first. If you reply in 5 minutes instead of 60, you're 21× more likely to qualify the lead.</div>
            </div>
            <div className="problem-card">
              <div className="problem-icon">💬</div>
              <div className="problem-num"><span>60</span>%</div>
              <div className="problem-lbl">of SMB leads never receive a second follow-up. Most decisions take 5–7 touchpoints. Without a system, you're quitting at one.</div>
            </div>
            <div className="problem-card">
              <div className="problem-icon">📉</div>
              <div className="problem-num">₹<span>2L+</span></div>
              <div className="problem-lbl">lost per month by the average coaching center or clinic from leads that inquired but were never followed up with properly.</div>
            </div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div id="how" className="how-bg">
        <div className="section">
          <div className="section-kicker">How it works</div>
          <h2 className="section-title">
            Set up once.<br />
            <em>Convert forever.</em>
          </h2>
          <div className="steps-list">
            {STEPS.map(s => (
              <div className="step-row" key={s.n}>
                <div className="step-num-box">{s.n}</div>
                <div>
                  <div className="step-title">{s.title}</div>
                  <div className="step-desc">{s.desc}</div>
                </div>
                <div className="step-tag">{s.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CALCULATOR */}
      <div id="calculator" style={{ background: 'var(--bg)' }}>
        <div className="section">
          <div className="section-kicker">Revenue calculator</div>
          <h2 className="section-title">
            See exactly how much<br />
            <em>you're losing right now</em>
          </h2>
          <div className="calc-box">
            <div className="calc-grid">
              <div>
                <div className="calc-input-group">
                  <label className="calc-label">Leads per month</label>
                  <input type="range" className="calc-slider" min={20} max={500} step={10} value={leads} onChange={e => setLeads(+e.target.value)} />
                  <div className="calc-val">{leads} leads/mo</div>
                </div>
                <div className="calc-input-group">
                  <label className="calc-label">% not followed up (estimate)</label>
                  <input type="range" className="calc-slider" min={10} max={80} step={5} value={rate} onChange={e => setRate(+e.target.value)} />
                  <div className="calc-val">{rate}% lost leads</div>
                </div>
                <div className="calc-input-group">
                  <label className="calc-label">Avg. revenue per customer (₹)</label>
                  <input type="range" className="calc-slider" min={1000} max={100000} step={1000} value={value} onChange={e => setValue(+e.target.value)} />
                  <div className="calc-val">₹{value.toLocaleString('en-IN')}/customer</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem' }}>
                <div className="calc-result">
                  <div className="calc-result-lbl">Revenue you're losing monthly</div>
                  <div className="calc-result-num">₹{(lostRevenue).toLocaleString('en-IN')}</div>
                  <div className="calc-result-sub">Based on {Math.round(leads * rate / 100)} uncontacted leads × ₹{value.toLocaleString('en-IN')}/customer</div>
                </div>
                <div className="calc-result" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>
                  <div className="calc-result-lbl" style={{ color: 'var(--text3)' }}>FollowUp.ai recovers up to</div>
                  <div className="calc-result-num" style={{ fontSize: '2.2rem' }}>₹{Math.round(lostRevenue * 0.4).toLocaleString('en-IN')}</div>
                  <div className="calc-result-sub">Assuming 40% recovery rate in first month</div>
                </div>
                <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={openModal}>
                  Start recovering this revenue →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROOF */}
      <div id="proof" className="how-bg">
        <div className="section">
          <div className="section-kicker">Results</div>
          <h2 className="section-title">
            What clients say after<br />
            <em>the first 7 days</em>
          </h2>
          <div className="proof-grid">
            {TESTIMONIALS.map((t, i) => (
              <div className="proof-card" key={i}>
                <div className="proof-stars">★★★★★</div>
                <div className="proof-quote">"{t.quote}"</div>
                <div className="proof-author">
                  <div className="proof-avatar">{t.init}</div>
                  <div>
                    <div className="proof-name">{t.name}</div>
                    <div className="proof-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PRICING */}
      <div id="pricing" style={{ background: 'var(--bg)' }}>
        <div className="section">
          <div className="section-kicker">Pricing</div>
          <h2 className="section-title">
            Start with a pilot.<br />
            <em>Scale when you're convinced.</em>
          </h2>
          <p className="section-sub">No long-term contracts. No setup fees. Start with the 7-day pilot and see real results before committing.</p>
          <div className="pricing-grid">
            {PRICING.map(p => (
              <div className={`price-card ${p.featured ? 'featured' : ''}`} key={p.name}>
                {p.badge && <div className="price-badge">{p.badge}</div>}
                <div className="price-name">{p.name}</div>
                <div className="price-amount">{p.amount} <small>/ {p.sub.split('·')[0]}</small></div>
                <div className="price-sub">{p.sub.split('·')[1]}</div>
                <ul className="price-features">
                  {p.features.map(f => <li key={f}>{f}</li>)}
                </ul>
                <button
                  className={`price-cta ${p.featured ? 'price-cta-filled' : 'price-cta-outline'}`}
                  onClick={openModal}
                >{p.cta} →</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-section">
        <div className="cta-glow" />
        <h2>Every day you wait is<br /><em>another month of lost leads.</em></h2>
        <p>Book a 20-minute demo. We'll show you exactly how many leads you're losing and how to recover them.</p>
        <button className="btn-primary" style={{ margin: '0 auto' }} onClick={openModal}>
          Book free demo — no commitment →
        </button>
      </div>

      {/* FOOTER */}
      <footer>
        <span>© 2026 followup.ai · Built for India · </span>
        <span style={{ color: 'var(--green)' }}>hello@followup.ai</span>
      </footer>

      {/* MODAL */}
      {modalOpen && (
        <div className="modal-overlay" onClick={e => e.target === e.currentTarget && setModalOpen(false)}>
          <div className="modal">
            <button className="modal-close" onClick={() => setModalOpen(false)}>×</button>
            {formStep === 'form' ? (
              <>
                <h3>Book your free demo</h3>
                <p>We'll show you exactly how many leads you're losing and how to recover them — in 20 minutes.</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-field">
                    <label>Your name *</label>
                    <input required placeholder="Rahul Sharma" value={formData.name} onChange={e => setFormData(d => ({ ...d, name: e.target.value }))} />
                  </div>
                  <div className="form-field">
                    <label>WhatsApp number *</label>
                    <input required placeholder="+91 9876543210" value={formData.phone} onChange={e => setFormData(d => ({ ...d, phone: e.target.value }))} />
                  </div>
                  <div className="form-field">
                    <label>Business name</label>
                    <input placeholder="Apex Coaching Center" value={formData.business} onChange={e => setFormData(d => ({ ...d, business: e.target.value }))} />
                  </div>
                  <div className="form-field">
                    <label>Business type</label>
                    <select value={formData.type} onChange={e => setFormData(d => ({ ...d, type: e.target.value }))}>
                      <option>Coaching Center</option>
                      <option>Clinic / Hospital</option>
                      <option>Tuition Institute</option>
                      <option>Skill Training</option>
                      <option>Other SMB</option>
                    </select>
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '.5rem', justifyContent: 'center' }}>
                    Book demo now →
                  </button>
                </form>
              </>
            ) : (
              <div className="form-success">
                <div className="form-success-icon">✅</div>
                <h4>You're booked, {formData.name.split(' ')[0]}!</h4>
                <p>We'll WhatsApp you within 2 hours to confirm your demo slot. Get ready to see exactly how many leads you've been losing.</p>
                <button className="btn-primary" style={{ margin: '1.5rem auto 0', justifyContent: 'center' }} onClick={() => setModalOpen(false)}>
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
