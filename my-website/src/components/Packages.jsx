import PricingCard from './PricingCard'

export default function Packages() {
  const packages = [
    { id: 1, icon: '🖥️', title: 'Starter Website', price: 'starts at ₱12,000', features: ['Responsive design', 'Up to 5 pages', '3 revisions', 'Mobile optimized'] },
    { id: 2, icon: '🔗', title: 'Website Funnel', price: 'starts at ₱20,000', features: ['High-converting pages', 'Lead capture forms', 'Email integration', 'Analytics setup'] },
    { id: 3, icon: '🎯', title: 'Business Funnel', price: 'starts at ₱35,000', features: ['Multi-step funnel', 'CRM integration', 'Upsell pages', 'Conversion tracking'] },
    { id: 4, icon: '🏪', title: 'E-commerce Website', price: 'starts at ₱45,000', features: ['Product catalog', 'Shopping cart', 'Payment integration', 'Inventory system'] },
    { id: 5, icon: '📦', title: 'Order System', price: 'starts at ₱55,000', features: ['Custom order forms', 'Admin dashboard', 'Order tracking', 'Customer emails'] },
    { id: 6, icon: '</>', title: 'Custom Web App', isCustom: true }
  ]

  return (
    <section id="packages" className="py-20 bg-[#F7F3EC]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">PACKAGES & PRICING</h2>
          <p className="section-subtitle mt-4">Transparent pricing for every business size and project need.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map(pkg => (
            <PricingCard key={pkg.id} icon={pkg.icon} title={pkg.title} price={pkg.price} features={pkg.features} isCustom={pkg.isCustom} />
          ))}
        </div>
      </div>
    </section>
  )
}
