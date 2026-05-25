export default function Footer() {
  return (
   function Footer() {
  return (
    <footer className="bg-[#1c1b1b]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 py-24 md:grid-cols-4 lg:py-32">
        <div className="space-y-6 md:col-span-1">
          <div className="font-['Hanken_Grotesk'] text-3xl font-bold text-[#C8A96A]">
            Webforge
          </div>
          <p className="font-['DM_Sans'] leading-[1.6] text-[#858383]/70">
            Precision handcrafted systems for businesses that demand performance
            over promises.
          </p>
        </div>

        <FooterColumn title="Studio" links={studioLinks} />
        <FooterColumn title="Legal" links={legalLinks} />
        <NewsletterSignup />
      </div>

      <div className="mx-auto max-w-[1280px] border-t border-[#E7E1D6]/10 px-6 py-8">
        <p className="text-center font-['DM_Sans'] leading-[1.6] text-[#858383]/50">
          © 2024 Webforge Digital Studio. Precision Handcrafted Systems.
        </p>
      </div>
    </footer>
  );
}
  )
}
