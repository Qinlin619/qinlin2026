import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkGrid from './components/WorkGrid';
import Footer from './components/Footer';
import WorkDetail from './pages/WorkDetail';
import Side from './pages/Side';
import About from './pages/About';
import CV from './pages/CV';

function HomePage() {
  return (
    <>
      <Hero />
      <div className="work-container">
        <WorkGrid />
      </div>
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/work/:id" element={<WorkDetail />} />
            <Route path="/side" element={<Side />} />
            <Route path="/about" element={<About />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
