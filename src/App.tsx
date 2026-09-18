import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Hero from './sections/Hero'
import Services from './sections/Services'
import Portfolio from './sections/Portfolio'
import About from './sections/About'
import Contact from './sections/Contact'

import Qovoltis from './pages/Qovoltis'

function HomePage() {
  return (
    <main className="bg-[#0B0B0F]">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/work/ev-charging-app"
          element={<Qovoltis />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App