import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="bg-background text-on-surface font-body-md" data-mode="connect">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="pt-20">
        <Hero />
        <About />
        <Services />
        <Industries />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
