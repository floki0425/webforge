export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-14">
      <div className="container-custom">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">BuildFlow Studio</h3>
            <p className="text-sm text-gray-400">Websites. Funnels. Systems.</p>
            <p className="text-sm text-gray-500">Building modern digital systems for growing businesses.</p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-[.3em] text-gray-500 mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#packages" className="hover:text-white">Packages</a></li>
              <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-[.3em] text-gray-500 mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-[.3em] text-gray-500 mb-4">Follow</h4>
            <div className="flex flex-wrap gap-3 text-sm text-gray-400">
              <a href="#" className="rounded-2xl border border-gray-700 px-4 py-2 hover:border-white hover:text-white">X</a>
              <a href="#" className="rounded-2xl border border-gray-700 px-4 py-2 hover:border-white hover:text-white">in</a>
              <a href="#" className="rounded-2xl border border-gray-700 px-4 py-2 hover:border-white hover:text-white">GH</a>
              <a href="#" className="rounded-2xl border border-gray-700 px-4 py-2 hover:border-white hover:text-white">FB</a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-6 text-sm text-gray-500 text-center">
          &copy; {new Date().getFullYear()} BuildFlow Studio. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
