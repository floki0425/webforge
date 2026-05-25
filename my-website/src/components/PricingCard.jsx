import { Link } from 'react-router-dom'

export default function PricingCard({ packageData }) {
  const {
    id,
    slug,
    title,
    price,
    label,
    description,
    features = [],
    isCustom = false,
  } = packageData

  const isFeatured = id === 3
  const displayPrice = isCustom ? 'Custom' : price.replace('starts at ', '')

  return (
    <Link
      to={`/packages/${slug}`}
      className={`group relative flex h-full min-h-[430px] flex-col border p-8 transition-all duration-300 hover:-translate-y-1 ${
        isFeatured
          ? 'border-[#1C1C1C] bg-[#1C1C1C] text-white shadow-[0_30px_80px_rgba(0,0,0,0.22)] lg:-translate-y-3'
          : 'border-[#DED6C8] bg-[#F7F3EC] text-[#080808] hover:border-[#C8A96A]'
      }`}
    >
      {isFeatured && (
        <div className="absolute right-0 top-0 bg-[#C8A96A] px-3 py-1 text-[8px] font-bold uppercase tracking-[0.18em] text-[#080808]">
          Most Valued
        </div>
      )}

      <div className="mb-7">
        <p
          className={`mb-4 text-[11px] font-medium ${
            isFeatured ? 'text-white' : 'text-[#080808]'
          }`}
        >
          {label}
        </p>

        <h3 className="mb-3 text-3xl font-black tracking-[-0.04em] text-[#C8A96A]">
          {displayPrice}
          {!isCustom && (
            <span
              className={`ml-1 text-[10px] font-medium tracking-normal ${
                isFeatured ? 'text-white/55' : 'text-[#080808]/50'
              }`}
            >
              /project
            </span>
          )}
        </h3>

        <h4
          className={`mb-4 text-base font-semibold ${
            isFeatured ? 'text-white' : 'text-[#080808]'
          }`}
        >
          {title}
        </h4>

        <p
          className={`max-w-xs text-sm leading-6 ${
            isFeatured ? 'text-white/60' : 'text-[#080808]/65'
          }`}
        >
          {description}
        </p>
      </div>

      <div className="flex-1 space-y-4">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#C8A96A] text-[#C8A96A]">
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

            <p
              className={`text-xs font-medium leading-5 ${
                isFeatured ? 'text-white/82' : 'text-[#080808]/75'
              }`}
            >
              {feature}
            </p>
          </div>
        ))}
      </div>

      <div
        className={`mt-9 inline-flex h-12 items-center justify-center border text-xs font-medium transition-all ${
          isFeatured
            ? 'border-[#C8A96A] bg-[#C8A96A] text-[#080808] group-hover:bg-[#d8bb7c]'
            : 'border-[#080808]/70 bg-transparent text-[#080808] group-hover:border-[#080808] group-hover:bg-[#080808] group-hover:text-white'
        }`}
      >
        View Package Details
      </div>
    </Link>
  )
}