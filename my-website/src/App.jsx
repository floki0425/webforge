import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import PackageDetails from './components/pages/PackageDetails'
import SampleDemo from './components/pages/SampleDemo'
import Contact from './components/Contact'
import PremiumAccent from './components/PremiumAccent'
import Packages from './components/Packages'
import Process from './components/Process'
import WhyWorkWithMe from './components/WhyWorkWithMe'
import About from './components/About'
import FAQ from './components/FAQ'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Packages />
      <PremiumAccent />
      {/* <FeaturedWork /> */}
      <Process />
      <WhyWorkWithMe />
      <About />
      <Testimonial />
      <FAQ />
      <Contact />
    </>
  )
}

function AppShell() {
  const { pathname } = useLocation()
  const isDemoRoute = pathname.startsWith('/demos/')

  return (
    <div className="bg-[#F7F3EC] text-[#1F2933]">
      {!isDemoRoute && <Navbar />}

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/packages/:slug"
            element={
              <>
                <PackageDetails />
                <Contact />
              </>
            }
          />

          <Route path="/demos/:slug" element={<SampleDemo />} />
        </Routes>
      </main>

      {!isDemoRoute && <Footer />}
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}

export default App
