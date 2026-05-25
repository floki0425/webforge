import PricingCard from './PricingCard'
import { packages } from '../data/packages'

export default function Packages() {
  return (
    <section
      id="packages"
      className="relative overflow-hidden bg-[#F7F3EC] py-24 text-[#080808] sm:py-28 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            'radial-gradient(circle at center, #C8A96A 0.6px, transparent 0.6px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="container-custom relative">
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#C8A96A]">
            Packages & Pricing
          </p>

          <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-[#080808] sm:text-5xl lg:text-6xl">
            Choose the system that fits your next move.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#080808]/60 sm:text-lg">
            Transparent starting points for websites, funnels, e-commerce, and
            custom systems built to help your business convert and scale.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PricingCard key={pkg.id} packageData={pkg} />
          ))}
        </div>
      </div>
    </section>
  )
}