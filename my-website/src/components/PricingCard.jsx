export default function PricingCard({ icon, title, price, features, isCustom }) {
  return (
    <div className="pricing-card">
      <div className="pricing-icon">{icon}</div>
      <h3>{title}</h3>
      {!isCustom ? (
        <p className="price">{price}</p>
      ) : (
        <p className="price custom">Get Custom Quote</p>
      )}
      
      {features && (
        <ul className="features-list">
          {features.map((feature, idx) => (
            <li key={idx}>✓ {feature}</li>
          ))}
        </ul>
      )}
      
      <button className="btn btn-secondary full-width">
        {isCustom ? 'Request Quote' : 'Get Started'}
      </button>
    </div>
  )
}
