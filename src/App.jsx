import React from 'react'
import { Navbar, Footer } from './components/components.js'
import { Home, Thanks, About, Contact, Attic, CrawlSpace, OtherServices, Financing, Quote } from './pages/pages.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/thank-you" element={<Thanks />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/attic-cleaning-near-me" element={<Attic />} />
            <Route path="/crawl-space-cleaning-near-me" element={<CrawlSpace />} />
            <Route path="/other-services" element={<OtherServices />} />
            <Route path="/financing" element={<Financing />} />
            <Route path="/get-a-quote" element={<Quote />} />
        </Routes>
        <Footer />
    </Router>
  );
}
