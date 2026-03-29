import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import { ThemeProvider } from './ThemeContext'
import Cursor  from './components/Cursor'
import Nav     from './components/Nav'
import Footer  from './components/Footer'

import Home    from './pages/Home'
import Work    from './pages/Work'
import About   from './pages/About'
import Contact from './pages/Contact'

function ScrollReset() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"        element={<Home />}    />
        <Route path="/work"    element={<Work />}    />
        <Route path="/about"   element={<About />}   />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="grain relative">
          <Cursor />
          <Nav />
          <ScrollReset />
          <AnimatedRoutes />
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}
