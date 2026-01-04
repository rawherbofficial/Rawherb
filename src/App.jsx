import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Return from './pages/Return.jsx'
import Faq from './pages/Faq.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import ProductDescription from './components/ProductDescription.jsx'

function App() {
    const location = useLocation()

    return (
        <>
            <Navbar />
            <ScrollToTop />

            {/* 👇 Animate only route changes */}
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/return-policy' element={<Return />} />
                    <Route path='/faq' element={<Faq />} />
                    <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                    <Route path='/product/:id' element={<ProductDescription />} />
                </Routes>
            </AnimatePresence>

            <Footer />
        </>
    )
}

export default App
