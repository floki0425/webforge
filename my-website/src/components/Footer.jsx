export default function Footer() {
  return (
    <footer className="bg-[#080808] text-[#F7F3EC] py-14">
      <div className="container-custom">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Webforge</h3>
            <p className="text-sm text-[#B8C0CC]">Websites. Funnels. Systems.</p>
            <p className="text-sm text-[#8C96A3]">Building modern digital systems for growing businesses.</p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-[.15em] text-[#8C96A3] mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-[#B8C0CC]">
              <li><a href="#home" className="hover:text-[#C8A96A] transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-[#C8A96A] transition-colors">Services</a></li>
              <li><a href="#packages" className="hover:text-[#C8A96A] transition-colors">Packages</a></li>
              <li><a href="#portfolio" className="hover:text-[#C8A96A] transition-colors">Portfolio</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-[.15em] text-[#8C96A3] mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-[#B8C0CC]">
              <li><a href="#about" className="hover:text-[#C8A96A] transition-colors">About</a></li>
              <li><a href="#faq" className="hover:text-[#C8A96A] transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-[#C8A96A] transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-[#C8A96A] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-[.15em] text-[#8C96A3] mb-4">Follow</h4>
            <div className="flex flex-wrap gap-3 text-sm text-[#B8C0CC]">
              <a href="#" className="rounded-2xl border border-[#3A4047] px-4 py-2 hover:border-[#C8A96A] hover:text-[#C8A96A] transition-colors">X</a>
              <a href="#" className="rounded-2xl border border-[#3A4047] px-4 py-2 hover:border-[#C8A96A] hover:text-[#C8A96A] transition-colors">in</a>
              <a href="#" className="rounded-2xl border border-[#3A4047] px-4 py-2 hover:border-[#C8A96A] hover:text-[#C8A96A] transition-colors">GH</a>
              <a href="#" className="rounded-2xl border border-[#3A4047] px-4 py-2 hover:border-[#C8A96A] hover:text-[#C8A96A] transition-colors">FB</a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-[#3A4047] pt-6 text-sm text-[#8C96A3] text-center">
          &copy; {new Date().getFullYear()} Webforge. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
