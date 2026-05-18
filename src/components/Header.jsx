import React, { useState } from 'react';
import Button from './Button';

const Header = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Offset by header height (approx 80px) to prevent the fixed header from covering the content
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      // For sections like Careers that don't exist yet
      alert(`The ${id} section is coming soon!`);
    }
  };

  const getLinkClass = (id) => {
    const isActive = activeSection === id;
    const baseClasses = "font-label-sm text-label-sm pb-1 border-b-2 transition-colors duration-300";
    if (isActive) {
      return `${baseClasses} text-primary font-bold border-secondary-fixed-dim`;
    }
    return `${baseClasses} text-on-surface-variant border-transparent hover:text-primary`;
  };

  const getMobileLinkClass = (id) => {
    const isActive = activeSection === id;
    const baseClasses = "font-title-md text-title-md py-4 transition-colors duration-300 w-full text-center border-b border-primary/10 block";
    if (isActive) {
      return `${baseClasses} text-primary font-bold bg-primary/5`;
    }
    return `${baseClasses} text-on-surface-variant hover:text-primary hover:bg-primary/5`;
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/90 dark:bg-surface/90 backdrop-blur-xl border-b border-primary/10 shadow-[0_0_15px_rgba(0,240,255,0.1)] h-20 flex justify-between items-center px-margin-mobile md:px-margin-desktop">
        <div className="flex items-center gap-2">
          <svg className="w-12 h-12 text-[#000080]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            <path d="M2.5 8h19" />
            <path d="M2.5 16h19" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            <circle cx="16" cy="8" r="1" fill="currentColor" />
            <circle cx="8" cy="8" r="1" fill="currentColor" />
            <circle cx="16" cy="16" r="1" fill="currentColor" />
            <circle cx="8" cy="16" r="1" fill="currentColor" />
          </svg>
          <div className="w-[1.5px] h-10 bg-[#000080] mx-1"></div>
          <div className="flex flex-col text-[#000080] font-bold tracking-wide leading-[1.1] text-[13px]">
            <span>Nexacore</span>
            <span>AI</span>
            <span>Technologies</span>
          </div>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a className={getLinkClass('home')} href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
          <a className={getLinkClass('about')} href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
          <a className={getLinkClass('services')} href="#services" onClick={(e) => scrollToSection(e, 'services')}>Services</a>
          <a className={getLinkClass('industries')} href="#industries" onClick={(e) => scrollToSection(e, 'industries')}>Industries</a>
          <a className={getLinkClass('careers')} href="#careers" onClick={(e) => scrollToSection(e, 'careers')}>Careers</a>
          <a className={getLinkClass('contact')} href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
        </div>
        <Button className="md:hidden text-primary bg-transparent" aria-label="Menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className="material-symbols-outlined text-[32px]">{isMobileMenuOpen ? 'close' : 'menu'}</span>
        </Button>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-surface/95 backdrop-blur-xl md:hidden flex flex-col items-center overflow-y-auto">
          <a className={getMobileLinkClass('home')} href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
          <a className={getMobileLinkClass('about')} href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
          <a className={getMobileLinkClass('services')} href="#services" onClick={(e) => scrollToSection(e, 'services')}>Services</a>
          <a className={getMobileLinkClass('industries')} href="#industries" onClick={(e) => scrollToSection(e, 'industries')}>Industries</a>
          <a className={getMobileLinkClass('careers')} href="#careers" onClick={(e) => scrollToSection(e, 'careers')}>Careers</a>
          <a className={getMobileLinkClass('contact')} href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
        </div>
      )}
    </>
  );
};

export default Header;
