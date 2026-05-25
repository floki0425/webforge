import { Link, useParams } from 'react-router-dom'
import { packages } from '../../data/packages'

export default function PackageDetails() {
  const { slug } = useParams()
  const pkg = packages.find((item) => item.slug === slug)

  if (!pkg) {
    return (
      <main className="min-h-screen bg-[#F7F3EC] px-6 py-24 text-[#080808]">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-black">Package not found.</h1>

          <Link
            to="/"
            className="mt-8 inline-flex h-12 items-center justify-center bg-[#080808] px-8 text-sm font-bold text-white"
          >
            Back Home
          </Link>
        </div>
      </main>
    )
  }

  const displayPrice = pkg.isCustom
    ? 'Custom'
    : pkg.price.replace('starts at ', '')

  return (
    <main className="bg-[#F7F3EC] text-[#080808]">
      <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/#packages"
            className="mb-10 inline-flex items-center gap-3 text-sm font-bold text-[#080808]/55 transition hover:text-[#C8A96A]"
          >
            <span className="h-px w-7 bg-[#C8A96A]" />
            Back to packages
          </Link>

          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="mb-5 text-xs font-black uppercase tracking-[0.32em] text-[#C8A96A]">
                {pkg.label}
              </p>

              <h1 className="max-w-3xl text-5xl font-black leading-[0.94] tracking-[-0.06em] sm:text-6xl">
                {pkg.title}
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#080808]/62 sm:text-lg">
                {pkg.description}
              </p>

              <div className="mt-9 border-y border-[#DED6C8] py-7">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#080808]/42">
                  Starting Investment
                </p>

                <p className="mt-3 text-5xl font-black tracking-[-0.05em] text-[#C8A96A]">
                  {displayPrice}
                  {!pkg.isCustom && (
                    <span className="ml-2 text-sm font-semibold text-[#080808]/45">
                      / project
                    </span>
                  )}
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to={pkg.demoUrl}
                  className="inline-flex h-12 items-center justify-center bg-[#080808] px-8 text-sm font-bold text-white transition hover:bg-[#1C1C1C]"
                >
                  View Demo Website
                </Link>

                <a
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center border border-[#080808] px-8 text-sm font-bold text-[#080808] transition hover:bg-[#080808] hover:text-white"
                >
                  Start This Package
                </a>
              </div>
            </div>

            <div className="grid gap-px overflow-hidden border border-[#DED6C8] bg-[#DED6C8]">
              <DetailBlock title="What's Included" items={pkg.inclusions} />
              <DetailBlock title="Best For" items={getBestFor(pkg.title)} />
              <DetailBlock
                title="What Clients Need To Provide"
                items={pkg.clientNeeds}
              />
              <DetailBlock
                title="Not Included By Default"
                items={pkg.notIncluded}
              />

              <div className="bg-[#080808] p-7 text-white sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#C8A96A]">
                  Estimated Timeline
                </p>
                <p className="mt-3 text-2xl font-black tracking-[-0.04em]">
                  {pkg.timeline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function DetailBlock({ title, items }) {
  return (
    <div className="bg-[#F7F3EC] p-7 sm:p-8">
      <h2 className="mb-6 text-2xl font-black tracking-[-0.04em]">{title}</h2>

      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8A96A]" />

            <p className="text-sm leading-7 text-[#080808]/62">{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function getBestFor(title) {
  const bestFor = {
    'Starter Website': [
      'Small businesses',
      'Freelancers',
      'Personal brands',
      'Service providers',
      'Simple company websites',
    ],
    'Website Funnel': [
      'Lead generation campaigns',
      'Coaches and consultants',
      'Service offers',
      'Appointment-based businesses',
    ],
    'Business Funnel': [
      'Established service businesses',
      'Sales campaigns',
      'Online programs',
      'Consulting offers',
    ],
    'E-commerce Website': [
      'Online stores',
      'Product-based businesses',
      'Retail brands',
      'Small shops',
    ],
    'Order System': [
      'Custom order businesses',
      'Food ordering',
      'Service requests',
      'Internal operations',
    ],
    'Custom Web App': [
      'Custom dashboards',
      'Client portals',
      'Internal tools',
      'Automation systems',
    ],
  }

  return bestFor[title] || ['Growing businesses', 'Custom digital systems']
}
