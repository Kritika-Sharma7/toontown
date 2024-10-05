import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturesPage from "./components/FeaturesPage";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} /> {/* Home Page */}
          <Route path="/about" element={<AboutSection />} /> {/* About Page */}
          <Route path="/features" element={<FeaturesPage />} />{" "}
          {/* Features Page */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
