import { Link, useParams } from 'react-router-dom'
import { packages } from '../../data/packages'

const demos = {
  'starter-website': {
    brand: 'Northline Studio',
    packageName: 'Starter Website',
    accent: '#2563EB',
    dark: '#0F172A',
    light: '#EFF6FF',
  },
  'website-funnel': {
    brand: 'LeadLift Consulting',
    packageName: 'Website Funnel',
    accent: '#16A34A',
    dark: '#052E16',
    light: '#ECFDF5',
  },
  'business-funnel': {
    brand: 'ScalePath Growth',
    packageName: 'Business Funnel',
    accent: '#7C3AED',
    dark: '#1E1B4B',
    light: '#F5F3FF',
  },
  'ecommerce-website': {
    brand: 'Luna Supply Co.',
    packageName: 'E-commerce Website',
    accent: '#DB2777',
    dark: '#500724',
    light: '#FCE7F3',
  },
  'order-system': {
    brand: 'Pure Grind Orders',
    packageName: 'Order System',
    accent: '#B45309',
    dark: '#1C1917',
    light: '#FEF3C7',
  },
  'custom-web-app': {
    brand: 'OpsCore Portal',
    packageName: 'Custom Web App',
    accent: '#0891B2',
    dark: '#083344',
    light: '#ECFEFF',
  },
}

export default function SampleDemo() {
  const { slug } = useParams()
  const pkg = packages.find((item) => item.slug === slug)
  const demo = demos[slug]

  if (!pkg || !demo) {
    return (
      <main className="min-h-screen bg-[#F7F3EC] px-6 py-24 text-[#080808]">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-black">Demo not found.</h1>
          <Link
            to="/#packages"
            className="mt-8 inline-flex h-12 items-center justify-center bg-[#080808] px-8 text-sm font-medium text-white"
          >
            Back to Packages
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <DemoTopBar demo={demo} slug={slug} />
      {renderDemo(slug, demo)}
    </main>
  )
}

function DemoTopBar({ demo, slug }) {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-[#080808] px-5 py-3 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#C8A96A]">
            Interactive Package Demo
          </p>
          <p className="text-xs text-white/60">{demo.packageName}</p>
        </div>
        <Link
          to={`/packages/${slug}`}
          className="inline-flex h-9 items-center justify-center border border-white/20 px-4 text-xs font-semibold text-white transition hover:border-[#C8A96A] hover:text-[#C8A96A]"
        >
          Back to Package
        </Link>
      </div>
    </div>
  )
}

function renderDemo(slug, demo) {
  const demosBySlug = {
    'starter-website': <StarterWebsiteDemo demo={demo} />,
    'website-funnel': <WebsiteFunnelDemo demo={demo} />,
    'business-funnel': <BusinessFunnelDemo demo={demo} />,
    'ecommerce-website': <EcommerceDemo demo={demo} />,
    'order-system': <OrderSystemDemo demo={demo} />,
    'custom-web-app': <CustomWebAppDemo demo={demo} />,
  }

  return demosBySlug[slug]
}

function SiteHeader({ demo, nav, cta }) {
  return (
    <header className="border-b border-slate-200 bg-white px-6">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-8">
        <a href="#top" className="text-xl font-black tracking-[-0.04em]">
          {demo.brand}
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          {nav.map((item) => (
            <a key={item} href={`#${toId(item)}`} className="hover:text-slate-950">
              {item}
            </a>
          ))}
        </nav>
        <a
          href="#action"
          className="hidden h-10 items-center justify-center px-5 text-sm font-bold text-white md:inline-flex"
          style={{ backgroundColor: demo.accent }}
        >
          {cta}
        </a>
      </div>
    </header>
  )
}

function StarterWebsiteDemo({ demo }) {
  return (
    <>
      <SiteHeader demo={demo} nav={['Services', 'Projects', 'Reviews', 'Contact']} cta="Request Quote" />
      <section id="top" className="px-6 py-16 lg:py-24" style={{ backgroundColor: demo.light }}>
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.28em]" style={{ color: demo.accent }}>
              Local Service Website
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl">
              Clean workspace design and repairs for growing teams.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              A realistic starter website with service cards, proof sections,
              project highlights, testimonials, and a conversion-ready contact form.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex h-12 items-center justify-center px-8 text-sm font-bold text-white" href="#action" style={{ backgroundColor: demo.accent }}>
                Request a Quote
              </a>
              <a className="inline-flex h-12 items-center justify-center border border-slate-950 px-8 text-sm font-bold" href="#services">
                View Services
              </a>
            </div>
          </div>
          <div className="grid gap-4">
            {['Office fit-out', 'Retail refresh', 'Studio repair'].map((item, index) => (
              <div key={item} className="border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: demo.accent }}>
                  Featured 0{index + 1}
                </p>
                <h2 className="mt-4 text-2xl font-black">{item}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Project card with category, outcome, image space, and CTA.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="services" className="px-6 py-16 lg:py-24">
        <SectionIntro eyebrow="Services" title="Simple pages that explain what you do." demo={demo} />
        <ThreeCards
          cards={[
            ['Design Consultation', 'Clear service detail page with process, benefits, and inquiry CTA.'],
            ['Build Support', 'A scannable offer section for customers comparing service options.'],
            ['Maintenance', 'Recurring service information with trust points and contact prompts.'],
          ]}
        />
      </section>
      <section id="projects" className="border-y border-slate-200 bg-slate-50 px-6 py-16 lg:py-24">
        <SectionIntro eyebrow="Projects" title="Portfolio blocks make the business feel proven." demo={demo} />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {['Before and after gallery', 'Project timeline', 'Result summary'].map((item) => (
            <div key={item} className="bg-white p-7">
              <div className="mb-6 h-36" style={{ backgroundColor: demo.light }} />
              <h3 className="text-xl font-black">{item}</h3>
            </div>
          ))}
        </div>
      </section>
      <ContactPanel demo={demo} title="Request a Project Quote" selectLabel="Choose a service" />
    </>
  )
}

function WebsiteFunnelDemo({ demo }) {
  return (
    <>
      <section id="top" className="px-6 py-14 lg:py-20" style={{ backgroundColor: demo.light }}>
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.28em]" style={{ color: demo.accent }}>
              Lead Capture Funnel
            </p>
            <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl">
              Download the 7-point website audit checklist.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              This package demonstrates a focused page with one offer, social
              proof, a lead form, and a clear next step after submission.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {['One CTA', 'Lead magnet', 'Thank-you flow'].map((item) => (
                <div key={item} className="border border-slate-200 bg-white p-4 text-sm font-bold">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <OptInCard demo={demo} />
        </div>
      </section>
      <section id="proof" className="px-6 py-16">
        <SectionIntro eyebrow="Proof" title="Objection handling before the form." demo={demo} />
        <ThreeCards
          cards={[
            ['Who it is for', 'Service businesses that need more qualified inquiries.'],
            ['What they get', 'Checklist, audit, or lead magnet delivered after signup.'],
            ['Why it works', 'Focused copy and no distracting navigation.'],
          ]}
        />
      </section>
      <section id="thank-you" className="bg-slate-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-5xl border border-white/15 p-8">
          <p className="text-xs font-black uppercase tracking-[0.25em]" style={{ color: demo.accent }}>
            Thank-you page preview
          </p>
          <h2 className="mt-5 text-4xl font-black">Your guide is on the way.</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65">
            After signup, visitors can be routed to a thank-you page with a
            booking CTA, next steps, or email confirmation.
          </p>
        </div>
      </section>
    </>
  )
}

function BusinessFunnelDemo({ demo }) {
  return (
    <>
      <SiteHeader demo={demo} nav={['Campaign', 'Qualify', 'Pipeline', 'Book']} cta="Start Assessment" />
      <section id="top" className="px-6 py-16 lg:py-24" style={{ backgroundColor: demo.light }}>
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-black uppercase tracking-[0.28em]" style={{ color: demo.accent }}>
            Multi-step Business Funnel
          </p>
          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl">
            Qualify leads, track intent, and move serious prospects to booking.
          </h1>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {['Landing page', 'Qualifier', 'CRM handoff', 'Booking page'].map((step, index) => (
              <div key={step} className="border border-slate-200 bg-white p-6">
                <p className="text-3xl font-black" style={{ color: demo.accent }}>0{index + 1}</p>
                <h2 className="mt-5 font-black">{step}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="qualify" className="px-6 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[420px_1fr]">
          <form className="grid gap-4 border border-slate-200 p-6 shadow-sm">
            <h2 className="text-2xl font-black">Lead qualifier</h2>
            <select className="h-12 border border-slate-200 px-4 text-sm" defaultValue="">
              <option value="" disabled>Monthly revenue range</option>
              <option>Under 100k</option>
              <option>100k to 500k</option>
              <option>500k+</option>
            </select>
            <select className="h-12 border border-slate-200 px-4 text-sm" defaultValue="">
              <option value="" disabled>Main goal</option>
              <option>More sales calls</option>
              <option>Better lead quality</option>
              <option>Campaign tracking</option>
            </select>
            <StaticDemoButton demo={demo} label="Continue" />
          </form>
          <div className="grid gap-4">
            {['New lead captured', 'Score calculated', 'CRM tag applied', 'Booking prompt shown'].map((item) => (
              <div key={item} className="flex items-center justify-between border border-slate-200 p-5">
                <span className="font-bold">{item}</span>
                <span className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: demo.accent }}>
                  Active
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PipelineBoard demo={demo} />
    </>
  )
}

function EcommerceDemo({ demo }) {
  return (
    <>
      <SiteHeader demo={demo} nav={['Shop', 'Best Sellers', 'Cart', 'Policies']} cta="View Cart" />
      <section id="top" className="px-6 py-14" style={{ backgroundColor: demo.light }}>
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em]" style={{ color: demo.accent }}>
              Storefront Demo
            </p>
            <h1 className="max-w-3xl text-5xl font-black tracking-[-0.05em]">
              Everyday desk goods, ready to browse and buy.
            </h1>
          </div>
          <div className="border border-slate-200 bg-white p-5">
            <p className="text-sm font-bold">Cart: 2 items</p>
            <p className="mt-1 text-2xl font-black">PHP 3,580</p>
          </div>
        </div>
      </section>
      <section id="shop" className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[240px_1fr]">
          <aside className="h-fit border border-slate-200 p-5">
            <h2 className="mb-5 font-black">Filters</h2>
            {['Desk setup', 'Lighting', 'Cable tools', 'In stock'].map((item) => (
              <label key={item} className="mb-3 flex items-center gap-3 text-sm">
                <input type="checkbox" defaultChecked={item === 'In stock'} />
                {item}
              </label>
            ))}
          </aside>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ['Desk Mat', 'PHP 1,290'],
              ['Cable Kit', 'PHP 890'],
              ['Task Lamp', 'PHP 2,290'],
              ['Monitor Stand', 'PHP 1,750'],
              ['Notebook Set', 'PHP 540'],
              ['Dock Tray', 'PHP 980'],
            ].map(([name, price]) => (
              <article key={name} className="border border-slate-200 p-5">
                <div className="mb-5 h-40" style={{ backgroundColor: demo.light }} />
                <h3 className="font-black">{name}</h3>
                <p className="mt-1 text-sm text-slate-500">{price}</p>
                <button type="button" className="mt-5 h-10 w-full text-sm font-black text-white" style={{ backgroundColor: demo.accent }}>
                  Add to Cart
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CartSummary demo={demo} />
    </>
  )
}

function OrderSystemDemo({ demo }) {
  return (
    <>
      <section id="top" className="px-6 py-14" style={{ backgroundColor: demo.light }}>
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.28em]" style={{ color: demo.accent }}>
            Ordering Workflow Demo
          </p>
          <h1 className="max-w-4xl text-5xl font-black tracking-[-0.05em]">
            Customer order form, status tracking, and admin queue in one flow.
          </h1>
        </div>
      </section>
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[420px_1fr]">
          <form className="grid gap-4 border border-slate-200 p-6 shadow-sm">
            <h2 className="text-2xl font-black">Build an order</h2>
            <select className="h-12 border border-slate-200 px-4 text-sm" defaultValue="">
              <option value="" disabled>Choose item</option>
              <option>Cold Brew Box</option>
              <option>Espresso Tray</option>
              <option>Weekly Office Supply</option>
            </select>
            <div className="grid grid-cols-2 gap-3">
              <input className="h-12 border border-slate-200 px-4 text-sm" placeholder="Quantity" />
              <input className="h-12 border border-slate-200 px-4 text-sm" placeholder="Pickup time" />
            </div>
            <textarea className="min-h-28 border border-slate-200 p-4 text-sm" placeholder="Order notes" />
            <StaticDemoButton demo={demo} label="Submit Order" />
          </form>
          <div className="grid gap-5">
            <StatusBoard demo={demo} />
            <AdminQueue demo={demo} />
          </div>
        </div>
      </section>
    </>
  )
}

function CustomWebAppDemo({ demo }) {
  return (
    <section className="min-h-[calc(100vh-61px)] bg-slate-100">
      <div className="grid min-h-[calc(100vh-61px)] lg:grid-cols-[280px_1fr]">
        <aside className="bg-slate-950 p-6 text-white">
          <h1 className="text-2xl font-black tracking-[-0.04em]">{demo.brand}</h1>
          <p className="mt-2 text-sm text-white/50">Operations dashboard</p>
          <nav className="mt-10 grid gap-2">
            {['Dashboard', 'Clients', 'Tasks', 'Approvals', 'Reports', 'Users'].map((item, index) => (
              <a
                key={item}
                href={`#${toId(item)}`}
                className={`px-4 py-3 text-sm font-semibold ${index === 0 ? 'bg-white text-slate-950' : 'text-white/65 hover:bg-white/10'}`}
              >
                {item}
              </a>
            ))}
          </nav>
        </aside>
        <div className="p-5 sm:p-8">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em]" style={{ color: demo.accent }}>
                Custom Web App UI
              </p>
              <h2 className="mt-2 text-4xl font-black tracking-[-0.05em]">
                Team workspace overview
              </h2>
            </div>
            <StaticDemoButton demo={demo} label="New Request" compact />
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              ['Open jobs', '24', '+12% this week'],
              ['Pending approvals', '8', '3 urgent'],
              ['Client messages', '16', '5 unread'],
            ].map(([label, value, meta]) => (
              <div key={label} className="border border-slate-200 bg-white p-6">
                <p className="text-sm font-semibold text-slate-500">{label}</p>
                <p className="mt-3 text-4xl font-black">{value}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em]" style={{ color: demo.accent }}>
                  {meta}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <DataTable demo={demo} />
            <KanbanPanel demo={demo} />
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionIntro({ eyebrow, title, demo }) {
  return (
    <div className="mx-auto mb-10 max-w-7xl">
      <p className="mb-3 text-xs font-black uppercase tracking-[0.28em]" style={{ color: demo.accent }}>
        {eyebrow}
      </p>
      <h2 className="max-w-3xl text-4xl font-black tracking-[-0.04em]">{title}</h2>
    </div>
  )
}

function ThreeCards({ cards }) {
  return (
    <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
      {cards.map(([title, body]) => (
        <article key={title} className="border border-slate-200 bg-white p-7 shadow-sm">
          <h3 className="text-2xl font-black tracking-[-0.03em]">{title}</h3>
          <p className="mt-4 text-sm leading-6 text-slate-600">{body}</p>
        </article>
      ))}
    </div>
  )
}

function ContactPanel({ demo, title, selectLabel }) {
  return (
    <section id="action" className="px-6 py-16 lg:py-24" style={{ backgroundColor: demo.dark }}>
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="text-white">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em]" style={{ color: demo.accent }}>
            Contact
          </p>
          <h2 className="text-4xl font-black tracking-[-0.04em]">{title}</h2>
        </div>
        <form className="grid gap-4 bg-white p-6">
          <input className="h-12 border border-slate-200 px-4 text-sm" placeholder="Name" />
          <input className="h-12 border border-slate-200 px-4 text-sm" placeholder="Email" />
          <select className="h-12 border border-slate-200 px-4 text-sm" defaultValue="">
            <option value="" disabled>{selectLabel}</option>
            <option>Starter service</option>
            <option>Custom request</option>
          </select>
          <textarea className="min-h-32 border border-slate-200 p-4 text-sm" placeholder="Tell us what you need" />
          <StaticDemoButton demo={demo} label="Submit Demo Form" />
        </form>
      </div>
    </section>
  )
}

function OptInCard({ demo }) {
  return (
    <form id="action" className="border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.14)]">
      <p className="text-xs font-black uppercase tracking-[0.24em]" style={{ color: demo.accent }}>
        Free Download
      </p>
      <h2 className="mt-4 text-3xl font-black tracking-[-0.04em]">Get the checklist</h2>
      <div className="mt-6 grid gap-4">
        <input className="h-12 border border-slate-200 px-4 text-sm" placeholder="Name" />
        <input className="h-12 border border-slate-200 px-4 text-sm" placeholder="Email" />
        <StaticDemoButton demo={demo} label="Send Me the Guide" />
      </div>
      <p className="mt-4 text-xs leading-5 text-slate-500">
        Includes form fields, consent copy, email integration area, and thank-you routing.
      </p>
    </form>
  )
}

function PipelineBoard({ demo }) {
  return (
    <section id="pipeline" className="border-y border-slate-200 bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Pipeline" title="CRM-style visibility for every lead." demo={demo} />
        <div className="grid gap-4 md:grid-cols-4">
          {['New', 'Qualified', 'Booked', 'Won'].map((column) => (
            <div key={column} className="border border-slate-200 bg-white p-4">
              <h3 className="mb-4 font-black">{column}</h3>
              {['Acme Co.', 'Bright Studio'].map((lead) => (
                <div key={`${column}-${lead}`} className="mb-3 border border-slate-100 bg-slate-50 p-3 text-sm">
                  <p className="font-bold">{lead}</p>
                  <p className="mt-1 text-xs text-slate-500">Campaign lead</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CartSummary({ demo }) {
  return (
    <section id="cart" className="border-t border-slate-200 bg-slate-50 px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_380px]">
        <div>
          <SectionIntro eyebrow="Checkout Flow" title="Cart, shipping, and payment-ready structure." demo={demo} />
        </div>
        <aside className="border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-black">Order Summary</h2>
          <div className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between"><span>Desk Mat</span><strong>PHP 1,290</strong></div>
            <div className="flex justify-between"><span>Task Lamp</span><strong>PHP 2,290</strong></div>
            <div className="border-t border-slate-200 pt-3 flex justify-between text-base"><span>Total</span><strong>PHP 3,580</strong></div>
          </div>
          <button type="button" className="mt-6 h-12 w-full text-sm font-black text-white" style={{ backgroundColor: demo.accent }}>
            Continue to Checkout
          </button>
        </aside>
      </div>
    </section>
  )
}

function StatusBoard({ demo }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {['Received', 'Preparing', 'Ready'].map((status) => (
        <div key={status} className="border border-slate-200 bg-white p-5">
          <p className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: demo.accent }}>
            Status
          </p>
          <h3 className="mt-3 text-2xl font-black">{status}</h3>
          <p className="mt-2 text-sm text-slate-600">Customer-facing tracking state.</p>
        </div>
      ))}
    </div>
  )
}

function AdminQueue({ demo }) {
  return (
    <div className="border border-slate-200 bg-slate-50 p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-black">Admin queue</h2>
        <span className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: demo.accent }}>
          Live
        </span>
      </div>
      {['#1042 Cold Brew Box', '#1043 Espresso Tray', '#1044 Weekly Supply'].map((order) => (
        <div key={order} className="mb-3 flex items-center justify-between bg-white p-4 text-sm">
          <strong>{order}</strong>
          <button type="button" className="px-3 py-2 text-xs font-black text-white" style={{ backgroundColor: demo.accent }}>
            Update
          </button>
        </div>
      ))}
    </div>
  )
}

function DataTable({ demo }) {
  return (
    <div className="overflow-hidden border border-slate-200 bg-white">
      <div className="border-b border-slate-200 p-5">
        <h3 className="text-2xl font-black">Client requests</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[620px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-[0.16em] text-slate-500">
            <tr>
              <th className="px-5 py-4">Client</th>
              <th className="px-5 py-4">Request</th>
              <th className="px-5 py-4">Owner</th>
              <th className="px-5 py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Northline', 'Quote approval', 'Mika', 'Review'],
              ['Luna Supply', 'Catalog import', 'Josh', 'Active'],
              ['Pure Grind', 'Order export', 'Ana', 'Waiting'],
            ].map(([client, request, owner, status]) => (
              <tr key={client} className="border-t border-slate-100">
                <td className="px-5 py-4 font-bold">{client}</td>
                <td className="px-5 py-4">{request}</td>
                <td className="px-5 py-4">{owner}</td>
                <td className="px-5 py-4">
                  <span className="px-3 py-1 text-xs font-black text-white" style={{ backgroundColor: demo.accent }}>
                    {status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function KanbanPanel({ demo }) {
  return (
    <div className="border border-slate-200 bg-white p-5">
      <h3 className="mb-5 text-2xl font-black">Workflow board</h3>
      {['Intake', 'In progress', 'Needs approval', 'Done'].map((task, index) => (
        <div key={task} className="mb-3 flex items-center gap-4 border border-slate-100 bg-slate-50 p-4">
          <span className="flex h-9 w-9 items-center justify-center text-xs font-black text-white" style={{ backgroundColor: demo.accent }}>
            {index + 1}
          </span>
          <div>
            <p className="font-bold">{task}</p>
            <p className="text-xs text-slate-500">Role-based task state</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function StaticDemoButton({ demo, label, compact = false }) {
  return (
    <button
      type="button"
      className={`${compact ? 'h-11 px-5' : 'h-12 w-full'} cursor-default text-sm font-black text-white`}
      style={{ backgroundColor: demo.accent }}
      aria-label={`${label} demo button`}
    >
      {label}
    </button>
  )
}

function toId(value) {
  return value.toLowerCase().replace(/\s+/g, '-')
}
