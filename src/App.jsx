import React from 'react'
import { Navbar, Footer } from './components/components.js'
import { Home, Thanks } from './pages/pages.js'
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
        </Routes>
        <Footer />
    </Router>
  );
}
