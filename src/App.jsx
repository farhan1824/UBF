import './App.css'

function App() {
  return (
    <div className="page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-brand">
          <span className="drop">♥</span> NO LIFE DROP
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#how">How It Works</a></li>
          <li><a href="#impact">Impact</a></li>
          <li><a href="#contact" className="nav-cta">Donate Now</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">Count kore lab nai ga hudai</p>
          <h1>Give the Gift<br />of <span className="highlight">Life</span></h1>
          <p className="hero-sub">
            One donation can save up to three lives. Join thousands of donors
            making a difference in their communities every day.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Donate Blood</a>
            <a href="#how" className="btn-ghost">Learn More</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="pulse-ring" />
          <div className="drop-icon">♥</div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats" id="impact">
        <div className="stat">
          <span className="stat-number">4.5M</span>
          <span className="stat-label">Lives saved yearly</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-number">1 in 7</span>
          <span className="stat-label">Hospital patients need blood</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-number">3</span>
          <span className="stat-label">Lives saved per donation</span>
        </div>
      </section>

      {/* How it works */}
      <section className="how-it-works" id="how">
        <p className="section-eyebrow">Simple Process</p>
        <h2 className="section-title">How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">01</div>
            <h3>Register</h3>
            <p>Create your donor profile in minutes and check your eligibility.</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-number">02</div>
            <h3>Schedule</h3>
            <p>Book a convenient time at your nearest blood donation center.</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-number">03</div>
            <h3>Donate</h3>
            <p>The donation process takes just 8–10 minutes of your time.</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-number">04</div>
            <h3>Save Lives</h3>
            <p>Your donation reaches patients in need within 24 hours.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="about-text">
          <p className="section-eyebrow">Our Mission</p>
          <h2 className="section-title">Why Blood Donation Matters</h2>
          <p>
            Blood cannot be manufactured — it can only come from generous donors.
            Every two seconds, someone in the world needs blood. Whether it's
            accident victims, cancer patients, or mothers giving birth, your
            donation is a lifeline.
          </p>
          <p>
            Safe, voluntary blood donations are the foundation of a reliable
            blood supply. Join our community of heroes and help us ensure that
            blood is available for every patient who needs it.
          </p>
        </div>
        <div className="about-cards">
          <div className="info-card">
            <span className="card-icon">🩸</span>
            <h4>Who Can Donate?</h4>
            <p>Adults aged 18–65, weighing over 50 kg, in good health.</p>
          </div>
          <div className="info-card">
            <span className="card-icon">🔄</span>
            <h4>How Often?</h4>
            <p>Whole blood can be donated every 56 days — up to 6 times a year.</p>
          </div>
          <div className="info-card">
            <span className="card-icon">✅</span>
            <h4>Is It Safe?</h4>
            <p>Completely safe. Sterile, single-use equipment is always used.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="contact">
        <div className="cta-inner">
          <span className="cta-icon">♥</span>
          <h2>Ready to Save a Life?</h2>
          <p>Find a donation center near you and schedule your appointment today.</p>
          <a href="#" className="btn-primary btn-large">Book an Appointment</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-brand">
          <span className="drop">♥</span> LifeDrop
        </div>
        <p className="footer-copy">© 2024 LifeDrop. Saving lives, one drop at a time.</p>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  )
}

export default App
