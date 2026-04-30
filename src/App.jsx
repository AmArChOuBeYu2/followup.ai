import { useState, useEffect } from 'react'

const TESTIMONIALS = [
  { quote: "We're onboarding our first pilot clients right now. You get hands-on attention, real results, and the lowest pricing we'll ever offer. No fluff — just show us your leads and we'll show you what we can recover.", name: 'Pilot Program', role: '3 spots open — first come first serve', init: '🚀' },
  { quote: "No fake case studies. No made-up numbers. We set up your follow-up system, run it for 7 days, and hand you a report showing exactly how many leads replied and how many booked. That's the deal.", name: 'Our Promise', role: 'Honest. Straightforward. Results first.', init: '✊' },
  { quote: "You're already spending money on ads, referrals, and word of mouth to get leads. We just make sure none of them fall through the cracks. That's literally all this is.", name: 'What We Do', role: 'Simple. Effective. No BS.', init: '💡' },
]

const STEPS = [
  { n: '01', title: 'Connect your lead sources', desc: 'WhatsApp, Instagram DMs, website forms, Google Ads — all leads flow into one dashboard automatically.', tag: 'Setup in 10 min' },
  { n: '02', title: 'AI writes personalized follow-ups', desc: 'Every lead gets a custom 7-day message sequence. Right tone, right timing, right offer — no copy-paste blasts.', tag: 'Claude AI engine' },
  { n: '03', title: 'Messages send on autopilot', desc: 'WhatsApp messages go out at the perfect time. Replies come back to your dashboard. Staff handles only serious leads.', tag: 'Auto-send' },
  { n: '04', title: 'Track every rupee influenced', desc: 'See which leads converted, how many appointments booked, revenue influenced. Weekly report sent to your phone.', tag: 'Full reporting' },
]

const PRICING = [
  {
    name: 'Pilot', amount: '₹6,999', sub: '7-day trial · one-time',
    features: ['Up to 200 leads', 'AI follow-up sequences', 'WhatsApp sending', 'Dashboard access', 'Results report on Day 7'],
    cta: 'Start pilot', featured: false,
  },
  {
    name: 'Growth', amount: '₹19,999', sub: 'per month · cancel anytime',
    features: ['Up to 1,000 leads/month', 'AI sequences for all niches', 'WhatsApp + email follow-up', 'Full analytics dashboard', 'Weekly revenue report', 'Dedicated setup call'],
    cta: 'Get started', featured: true, badge: 'Most popular',
  },
  {
    name: 'Scale', amount: '₹39,999', sub: 'per month · multi-location',
    features: ['Unlimited leads', 'Multi-branch support', 'Custom AI personas per location', 'Priority support', 'Monthly strategy call', 'Razorpay payment integration'],
    cta: 'Talk to us', featured: false,
  },
]

const TICKER_ITEMS = [
  'Stop losing leads', 'Reply in under 2 minutes', '7-day follow-up on autopilot',
  'AI-powered personalization', 'Coaching centers', 'Clinics', 'Training institutes',
  'Real-time dashboard', 'No extra staff needed', 'Works while you sleep',
]

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [formStep, setFormStep] = useState('form')
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
      <nav>
        <div className="nav-logo">followup<span>.ai</span></div>
        <div className="nav-links">
          <a href="#how">How it works</a>
          <a href="#proof">Why us</a>
          <a href="#pricing">Pricing</a>
          <a href="#calculator">Calculator</a>
        </div>
        <button className="nav-cta" onClick={openModal}>Book free demo →</button>
      </nav>

      <div style={{ paddingTop: 0 }}>
        <div className="hero">
          <div className="hero-kicker">AI Lead Follow-Up · Built for your lost leads</div>
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
            <button className="btn-primary" onClick={openModal}>Book a free demo →</button>
            <a href="#calculator" className="btn-secondary">Calculate your losses ↓</a>
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

      <div id="proof" className="how-bg">
        <div className="section">
          <div className="section-kicker">Why us</div>
          <h2 className="section-title">
            No fake reviews.<br />
            <em>Just straight facts.</em>
          </h2>
          <div className="proof-grid">
            {TESTIMONIALS.map((t, i) => (
              <div className="proof-card" key={i}>
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

      <div className="cta-section">
        <div className="cta-glow" />
        <h2>Your leads aren't going to<br /><em>follow up themselves.</em></h2>
        <p>Book a 20-min demo. We'll show you exactly what you're losing and how to fix it. No pitch, no pressure.</p>
        <button className="btn-primary" style={{ margin: '0 auto' }} onClick={openModal}>
          Let's talk — it's free →
        </button>
      </div>

      <footer>
        <span>© 2026 followup.ai · for everyone losing leads · </span>
        <span style={{ color: 'var(--green)' }}>sc62970@gmail.com</span>
        <span> · </span>
        <a href="https://wa.me/917096093039" style={{ color: 'var(--green)', textDecoration: 'none' }}>WhatsApp us</a>
      </footer>

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
                <h4>You're in, {formData.name.split(' ')[0]}!</h4>
                <p>We'll WhatsApp you within 2 hours to lock in your demo slot. See you soon.</p>
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
