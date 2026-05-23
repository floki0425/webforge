export default function PricingCard({ icon, title, price, features, isCustom }) {
  return (
    <div className="card">
      <div className="text-4xl mb-4 opacity-90">{icon}</div>
      <h3 className="text-xl font-bold text-[#080808] mb-2">{title}</h3>
      {!isCustom ? (
        <p className="text-2xl font-bold text-[#080808] mb-6">{price}</p>
      ) : (
        <p className="text-lg font-semibold text-[#667085] mb-6">Custom Quote</p>
      )}
      {features && (
        <ul className="space-y-3 mb-6 text-[#667085]">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <span className="text-[#C8A96A]">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
      <button className="btn-secondary w-full">{isCustom ? 'Request Quote' : 'Get Started'}</button>
    </div>
  )
}
