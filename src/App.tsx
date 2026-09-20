import { BrowserRouter, Route, Routes } from 'react-router-dom'

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

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

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
    </BrowserRouter>
  )
}