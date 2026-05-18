import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getLinkClass = ({ isActive }) => {
    const baseClasses = "font-label-sm text-label-sm pb-1 border-b-2 transition-colors duration-300";
    if (isActive) {
      return `${baseClasses} text-primary font-bold border-secondary-fixed-dim`;
    }
    return `${baseClasses} text-on-surface-variant border-transparent hover:text-primary`;
  };

  const getMobileLinkClass = ({ isActive }) => {
    const baseClasses = "font-title-md text-title-md py-4 transition-colors duration-300 w-full text-center border-b border-primary/10 block";
    if (isActive) {
      return `${baseClasses} text-primary font-bold bg-primary/5`;
    }
    return `${baseClasses} text-on-surface-variant hover:text-primary hover:bg-primary/5`;
  };

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/90 dark:bg-surface/90 backdrop-blur-xl border-b border-primary/10 shadow-[0_0_15px_rgba(0,240,255,0.1)] h-20 flex justify-between items-center px-margin-mobile md:px-margin-desktop">
        <Link to="/" className="flex items-center gap-2">
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
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <NavLink to="/" className={getLinkClass} end>Home</NavLink>
          <NavLink to="/about" className={getLinkClass}>About</NavLink>
          <NavLink to="/services" className={getLinkClass}>Services</NavLink>
          <NavLink to="/industries" className={getLinkClass}>Industries</NavLink>
          <NavLink to="/careers" className={getLinkClass}>Careers</NavLink>
          <NavLink to="/contact" className={getLinkClass}>Contact</NavLink>
        </div>
        <Button className="md:hidden text-primary bg-transparent" aria-label="Menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className="material-symbols-outlined text-[32px]">{isMobileMenuOpen ? 'close' : 'menu'}</span>
        </Button>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-surface/95 backdrop-blur-xl md:hidden flex flex-col items-center overflow-y-auto">
          <NavLink to="/" className={getMobileLinkClass} onClick={handleMobileNavClick} end>Home</NavLink>
          <NavLink to="/about" className={getMobileLinkClass} onClick={handleMobileNavClick}>About</NavLink>
          <NavLink to="/services" className={getMobileLinkClass} onClick={handleMobileNavClick}>Services</NavLink>
          <NavLink to="/industries" className={getMobileLinkClass} onClick={handleMobileNavClick}>Industries</NavLink>
          <NavLink to="/careers" className={getMobileLinkClass} onClick={handleMobileNavClick}>Careers</NavLink>
          <NavLink to="/contact" className={getMobileLinkClass} onClick={handleMobileNavClick}>Contact</NavLink>
        </div>
      )}
    </>
  );
};

export default Header;
