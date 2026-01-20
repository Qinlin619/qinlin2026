import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkGrid from './components/WorkGrid';
import Footer from './components/Footer';
import WorkDetail from './pages/WorkDetail';
import Research from './pages/Research';
import Side from './pages/Side';
import About from './pages/About';
import CV from './pages/CV';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <WorkGrid />
            </>
          } />
          <Route path="/work/:id" element={<WorkDetail />} />
          <Route path="/research" element={<Research />} />
          <Route path="/side" element={<Side />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
