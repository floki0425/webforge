export default function Testimonial() {
  return (
    <section className="testimonial">
      <div className="container">
        <h2>WHAT CLIENTS SAY</h2>
        
        <div className="testimonial-card">
          <div className="testimonial-content">
            <p className="quote">
              "Joshua built our e-commerce store and it exceeded our expectations. 
              The site is fast, looks professional, and we've already seen a significant 
              increase in orders. Highly recommended!"
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">JD</div>
              <div className="author-info">
                <h4>Sarah Johnson</h4>
                <p>Owner, Bloom Fashion Co.</p>
              </div>
            </div>
          </div>
          <div className="rating">
            <span>⭐⭐⭐⭐⭐</span>
          </div>
        </div>
      </div>
    </section>
  )
}
