import PricingCard from './PricingCard'
import { packages } from '../data/packages'

export default function Packages() {
  return (
    <section
      id="packages"
      className="bg-[#F7F3EC] px-6 py-20 text-[#080808] lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 border-b border-[#DED6C8] pb-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.32em] text-[#C8A96A]">
            Packages & Pricing
            </p>

            <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-[-0.04em] text-[#080808] sm:text-5xl">
              Choose the system that fits your next move.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-[#080808]/55 lg:justify-self-end">
            Transparent starting points for websites, funnels, e-commerce, and
            custom systems built to help your business convert and scale.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden border border-[#DED6C8] bg-[#DED6C8] md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PricingCard key={pkg.id} packageData={pkg} />
          ))}
        </div>
      </div>
    </section>
  )
}
