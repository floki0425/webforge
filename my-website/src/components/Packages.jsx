import PricingCard from './PricingCard'

export default function Packages() {
  const packages = [
    {
      id: 1,
      icon: '🖥️',
      title: 'Starter Website',
      price: 'starts at ₱12,000',
      features: ['Responsive design', 'Up to 5 pages', '3 revisions', 'Mobile optimized']
    },
    {
      id: 2,
      icon: '🔗',
      title: 'Website Funnel',
      price: 'starts at ₱20,000',
      features: ['High-converting pages', 'Lead capture forms', 'Email integration', 'Analytics setup']
    },
    {
      id: 3,
      icon: '🎯',
      title: 'Business Funnel',
      price: 'starts at ₱35,000',
      features: ['Multi-step funnel', 'CRM integration', 'Upsell pages', 'Conversion tracking']
    },
    {
      id: 4,
      icon: '🏪',
      title: 'E-commerce Website',
      price: 'starts at ₱45,000',
      features: ['Product catalog', 'Shopping cart', 'Payment integration', 'Inventory system']
    },
    {
      id: 5,
      icon: '📦',
      title: 'Order System',
      price: 'starts at ₱55,000',
      features: ['Custom order forms', 'Admin dashboard', 'Order tracking', 'Customer emails']
    },
    {
      id: 6,
      icon: '</>',
      title: 'Custom Web App',
      isCustom: true
    }
  ]

  return (
    <section id="packages" className="packages">
      <div className="container">
        <h2>PACKAGES & PRICING</h2>
        <h3 className="section-subtitle">Transparent Pricing for Every Business Size</h3>
        
        <div className="packages-grid">
          {packages.map(pkg => (
            <PricingCard
              key={pkg.id}
              icon={pkg.icon}
              title={pkg.title}
              price={pkg.price}
              features={pkg.features}
              isCustom={pkg.isCustom}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
