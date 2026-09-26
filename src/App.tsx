import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Portfolio from './sections/Portfolio'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

import Qovoltis from './pages/Qovoltis'
import RealEstatePlatform from './pages/RealEstatePlatform'
import ERPPlatform from './pages/ERPPlatform'
import PersonalServicesPlatform from './pages/PersonalServicesPlatform'
import EVChargingWebPlatform from './pages/EVChargingWebPlatform'
import LUMA from './pages/LUMA'

export default function App() {
  return (
    <div className="site-shell">
      {/* =====================================================
          GLOBAL AURORA BACKGROUND
          ===================================================== */}

      <div className="aurora-background" aria-hidden="true">
        {/* Deep base */}
        <div className="aurora-base" />

        {/* Large moving auroras */}
        <div className="aurora-orb aurora-orb-one" />
        <div className="aurora-orb aurora-orb-two" />
        <div className="aurora-orb aurora-orb-three" />
        <div className="aurora-orb aurora-orb-four" />

        {/* Soft center glow */}
        <div className="aurora-center" />

        {/* Fine light particles */}
        <div className="aurora-particles">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        {/* Subtle atmospheric gradient */}
        <div className="aurora-vignette" />
      </div>

      {/* =====================================================
          PAGE CONTENT
          ===================================================== */}

      <div className="site-content">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <Portfolio />
                <About />
                <Contact />
                <Footer />
              </>
            }
          />

          <Route
            path="/work/ev-charging-app"
            element={<Qovoltis />}
          />

          <Route
            path="/work/real-estate-platform"
            element={<RealEstatePlatform />}
          />

          <Route
            path="/work/erp-platform"
            element={<ERPPlatform />}
          />

          <Route
            path="/work/personal-services-platform"
            element={<PersonalServicesPlatform />}
          />

          <Route
            path="/work/ev-charging-web-platform"
            element={<EVChargingWebPlatform />}
          />

          <Route
            path="/work/luma"
            element={<LUMA />}
          />
        </Routes>
      </div>
    </div>
  )
}