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
            className="mt-8 inline-flex border border-[#080808] px-6 py-3 text-sm font-medium hover:bg-[#080808] hover:text-white"
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
      <section className="relative overflow-hidden px-6 py-24 sm:py-28 lg:py-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              'radial-gradient(circle at center, #C8A96A 0.6px, transparent 0.6px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative mx-auto max-w-6xl">
          <Link
            to="/"
            className="mb-10 inline-block text-sm font-medium text-[#080808]/55 hover:text-[#C8A96A]"
          >
            ← Back to packages
          </Link>

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#C8A96A]">
                {pkg.label}
              </p>

              <h1 className="text-5xl font-black tracking-[-0.06em] sm:text-6xl">
                {pkg.title}
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#080808]/65">
                {pkg.description}
              </p>

              <div className="mt-8 border-t border-[#DED6C8] pt-8">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#080808]/45">
                  Starting Investment
                </p>

                <p className="mt-2 text-5xl font-black tracking-[-0.05em] text-[#C8A96A]">
                  {displayPrice}
                  {!pkg.isCustom && (
                    <span className="ml-2 text-sm font-medium text-[#080808]/45">
                      / project
                    </span>
                  )}
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  to={pkg.demoUrl}
                  className="inline-flex h-12 items-center justify-center bg-[#080808] px-8 text-sm font-medium text-white transition hover:bg-[#1C1C1C]"
                >
                  View Demo Website
                </Link>

                <a
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center border border-[#080808] px-8 text-sm font-medium text-[#080808] transition hover:bg-[#080808] hover:text-white"
                >
                  Start This Package
                </a>
              </div>
            </div>

            <div className="border border-[#DED6C8] bg-[#F7F3EC] p-8 shadow-sm">
              <DetailBlock title="What’s Included" items={pkg.inclusions} />
              <DetailBlock title="Best For" items={getBestFor(pkg.title)} />
              <DetailBlock
                title="What Clients Need To Provide"
                items={pkg.clientNeeds}
              />
              <DetailBlock
                title="Not Included By Default"
                items={pkg.notIncluded}
              />

              <div className="mt-8 border-t border-[#DED6C8] pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C8A96A]">
                  Estimated Timeline
                </p>
                <p className="mt-2 text-lg font-semibold">{pkg.timeline}</p>
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
    <div className="mb-8">
      <h2 className="mb-4 text-lg font-bold">{title}</h2>

      <div className="space-y-3">
        {items.map((item) => (
          <div key={item} className="flex gap-3">
            <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#C8A96A] text-[#C8A96A]">
              <svg
                viewBox="0 0 12 12"
                fill="none"
                className="h-2.5 w-2.5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 6.2L5 8.2L9 3.8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <p className="text-sm leading-6 text-[#080808]/70">{item}</p>
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
