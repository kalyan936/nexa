import React, { useState } from 'react';
import Button from './components/Button';

function App() {
  const [activeSection, setActiveSection] = useState('home');
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
    <div className="bg-background text-on-surface font-body-md" data-mode="connect">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/90 dark:bg-surface/90 backdrop-blur-xl border-b border-primary/10 shadow-[0_0_15px_rgba(0,240,255,0.1)] h-20 flex justify-between items-center px-margin-mobile md:px-margin-desktop">
        <div className="flex items-center gap-2">
          {/* Custom Network Globe SVG to match the provided logo */}
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

      {/* Mobile Menu Overlay */}
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

      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="relative min-h-[795px] flex items-center overflow-hidden px-margin-mobile md:px-margin-desktop bg-surface-container-low">
          <div className="absolute inset-0 z-0 opacity-20">
            <img className="w-full h-full object-cover" alt="Network" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzSHC2-tWQnunk6ZacWh_6yLIgaX3Iqyg9q33TvgdeeG9Zeo_-1_F1A-Z4YI4DViCdUGK63c-MC55Z3S_Oi0OTnF6jh8zk_6HkQP7vIRisVWW5D7f-YNvJusAElUzwUAegC0y5RoxzbUk1oXnQj24rkseCKkaPY1Uaqgds5I8Xb5inrbpcfgoFJJJcn_5bpmL8XWiBvDfT7DlNAXqHVu7tCmoTyCN2_BeMYgnpN_YCextbnqymwmXCqoP66uStsAs3BW7J4-g79Haj" />
          </div>
          <div className="relative z-10 max-w-[800px] py-20">
            <span className="font-label-sm text-label-sm text-secondary px-4 py-1 rounded-full bg-secondary-container/20 border border-secondary/20 mb-6 inline-block">BEYOND INTELLIGENCE</span>
            <h1 className="font-display-lg text-display-lg md:text-[64px] leading-tight text-primary mb-8">
              Transforming Businesses with AI &amp; <span className="text-secondary">Intelligent Engineering</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-[600px]">
              We build scalable AI systems, enterprise data platforms, intelligent automation, and cloud-native solutions for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-primary text-on-primary font-title-md text-title-md px-10 py-4 rounded-xl flex items-center justify-center gap-2 ai-glow hover:scale-[1.02] transition-transform active:scale-95">
                Get Started
                <span className="material-symbols-outlined">arrow_forward</span>
              </Button>
              <Button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="border border-primary text-primary font-title-md text-title-md px-10 py-4 rounded-xl hover:bg-primary/5 transition-colors">
                Talk to Experts
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-margin-mobile md:px-margin-desktop bg-white">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-container-max mx-auto">
            <div>
              <h2 className="font-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mb-6">Innovation-Driven Leader in AI Engineering</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Nexacore AI Technologies stands at the intersection of high-scale enterprise infrastructure and cutting-edge artificial intelligence. We don't just build models; we engineer robust ecosystems that drive operational excellence and measurable business outcomes.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                Our approach is rooted in precision engineering and enterprise-grade reliability, ensuring that every solution we deploy is built for scale, security, and sustained performance in complex technical environments.
              </p>
              <div className="flex gap-4 items-center p-4 glass-card rounded-xl border-l-4 border-secondary">
                <span className="material-symbols-outlined text-secondary text-4xl">verified_user</span>
                <div>
                  <p className="font-title-md text-title-md text-primary">ISO 27001 Certified</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Enterprise Security Guaranteed</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-video shadow-2xl">
              <img className="w-full h-full object-cover" alt="Research Facility" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYlqb_Om1jK8yyHCI4e3zPSBpN47pqWe6jgqLMvWtc-3rkKMrfBwZrnP_876u3L6ZX05KlMqh3SnrhweL-jILyQ4sjGmTmGRHpif4htzwsnNghQe2UEJoxfqsIj7jTLQBRY_T-YYS40BXqV5roPnJxfyrhGN3XuqxS3LlHEByvggMt03n93XZmIpgJ8oz_QzYUIR3NRgIokfPWgsR1T4Br8SGr0VQUMB3nXPDwixEoopiNiLuNYVFWfhZChd1e_lrfQ7DMdziOc5Dg" />
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mb-4">Specialized Enterprise Services</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-[600px] mx-auto">Providing high-end technical solutions across the modern data and AI stack.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {['Data Science', 'Data Engineering', 'Generative AI', 'Agentic AI', 'DevOps'].map((service, index) => {
                const icons = ['analytics', 'database', 'auto_awesome', 'smart_toy', 'cloud_done'];
                const descriptions = [
                  'Predictive analytics and statistical modeling for complex business datasets.',
                  'High-throughput pipelines and robust data warehouse architectures.',
                  'Custom LLM training and RAG implementation for enterprise knowledge.',
                  'Autonomous agents designed to perform multi-step business workflows.',
                  'Cloud-native infrastructure and automated CI/CD for AI deployment.'
                ];
                return (
                  <div key={index} className="glass-card p-8 rounded-2xl flex flex-col items-start hover:translate-y-[-8px] transition-all duration-300 group">
                    <div className="bg-primary/5 p-4 rounded-xl mb-6 group-hover:bg-secondary/10 transition-colors">
                      <span className="material-symbols-outlined text-primary text-3xl group-hover:text-secondary">{icons[index]}</span>
                    </div>
                    <h3 className="font-title-md text-title-md text-primary mb-4">{service}</h3>
                    <p className="font-label-sm text-label-sm text-on-surface-variant mb-6 grow">{descriptions[index]}</p>
                    <Button onClick={() => {
                      alert(`Learn more about ${service}`);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }} variant="text" className="text-secondary font-label-sm text-label-sm flex items-center gap-2 hover:gap-4 transition-all">
                      Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="industries" className="py-24 px-margin-mobile md:px-margin-desktop bg-primary text-on-primary">
          <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
              <p className="font-display-lg text-display-lg text-secondary-fixed-dim mb-2">150+</p>
              <p className="font-title-md text-title-md">Projects Delivered</p>
              <p className="font-label-sm text-label-sm opacity-70 mt-2">Across 12 industries worldwide</p>
            </div>
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
              <p className="font-display-lg text-display-lg text-secondary-fixed-dim mb-2">45%</p>
              <p className="font-title-md text-title-md">Efficiency Gains</p>
              <p className="font-label-sm text-label-sm opacity-70 mt-2">Average client operational improvement</p>
            </div>
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
              <p className="font-display-lg text-display-lg text-secondary-fixed-dim mb-2">99.9%</p>
              <p className="font-title-md text-title-md">System Uptime</p>
              <p className="font-label-sm text-label-sm opacity-70 mt-2">Enterprise-grade reliability standards</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-margin-mobile md:px-margin-desktop bg-white">
          <div className="max-w-container-max mx-auto grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mb-6">Let's Build the Future</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-10">Ready to integrate advanced AI into your business? Our team of specialists is here to guide you through the transition.</p>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-secondary">location_on</span>
                  <div>
                    <p className="font-title-md text-title-md text-primary">Office Location</p>
                    <p className="font-body-md text-body-md text-on-surface-variant">#52, 3rd Cross, Aswath Nagar, Marathahalli,<br />Bengaluru, Karnataka – 560037</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-secondary">mail</span>
                  <div>
                    <p className="font-title-md text-title-md text-primary">Email Us</p>
                    <p className="font-body-md text-body-md text-on-surface-variant">contact@nexacore.ai</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card p-8 rounded-3xl border border-primary/10 ai-glow">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-primary uppercase tracking-wider">Full Name</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary transition-colors py-2 text-primary" placeholder="Enter your name" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-primary uppercase tracking-wider">Business Email</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary transition-colors py-2 text-primary" placeholder="email@company.com" type="email" />
                </div>
                <div className="space-y-2">
                  <label className="font-label-sm text-label-sm text-primary uppercase tracking-wider">Message</label>
                  <textarea className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary transition-colors py-2 text-primary resize-none" placeholder="Tell us about your project" rows="4"></textarea>
                </div>
                <Button onClick={() => alert('Message Sent! We will get back to you shortly.')} className="w-full bg-primary text-on-primary py-4 rounded-xl font-title-md text-title-md hover:translate-y-[-2px] transition-transform active:scale-[0.98]">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-on-primary w-full relative bottom-0">
        <div className="max-w-container-max mx-auto px-margin-desktop py-8 border-t border-white/5 flex justify-between items-center opacity-60">
          <p className="font-body-md text-body-md">© 2024 Nexacore AI Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
