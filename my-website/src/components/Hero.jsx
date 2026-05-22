export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="badge">WE BUILD WEBSITES, FUNNELS & SYSTEMS</div>
          <h1>Websites and Systems That Get You More Leads, Orders, and Customers</h1>
          <p>
            I help small businesses and entrepreneurs build high-converting websites, 
            funnels, e-commerce stores, and custom systems that grow their business online.
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-primary">View Packages</button>
            <button className="btn btn-secondary">See My Work</button>
          </div>

          <div className="feature-row">
            <div className="feature-item">⚡ Fast Turnaround</div>
            <div className="feature-item">📱 Mobile Responsive</div>
            <div className="feature-item">🎯 Built for Conversion</div>
            <div className="feature-item">🤝 Ongoing Support</div>
          </div>
        </div>

        <div className="hero-image">
          <div className="browser-mockup">
            <div className="browser-header">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="browser-content">
              <div className="placeholder-content">
                <div className="placeholder-header"></div>
                <div className="placeholder-line"></div>
                <div className="placeholder-line short"></div>
                <div className="placeholder-image"></div>
              </div>
            </div>
          </div>
          <div className="phone-mockup">
            <div className="phone-frame">
              <div className="phone-content"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
