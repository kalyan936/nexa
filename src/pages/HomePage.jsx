import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const HomePage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden px-margin-mobile md:px-margin-desktop bg-surface-container-low pt-20">
        <div className="absolute inset-0 z-0 opacity-[0.15]">
          <img className="w-full h-full object-cover" alt="Abstract Network" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzSHC2-tWQnunk6ZacWh_6yLIgaX3Iqyg9q33TvgdeeG9Zeo_-1_F1A-Z4YI4DViCdUGK63c-MC55Z3S_Oi0OTnF6jh8zk_6HkQP7vIRisVWW5D7f-YNvJusAElUzwUAegC0y5RoxzbUk1oXnQj24rkseCKkaPY1Uaqgds5I8Xb5inrbpcfgoFJJJcn_5bpmL8XWiBvDfT7DlNAXqHVu7tCmoTyCN2_BeMYgnpN_YCextbnqymwmXCqoP66uStsAs3BW7J4-g79Haj" />
        </div>
        
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary-fixed-dim/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-[850px] py-20 mx-auto text-center md:text-left md:mx-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-highest border border-primary/10 mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary-fixed-dim animate-pulse"></span>
            <span className="font-label-sm text-label-sm text-primary">Nexacore AI v2.0 is now live</span>
            <span className="material-symbols-outlined text-sm text-primary">arrow_forward</span>
          </div>
          
          <h1 className="font-display-lg text-display-lg md:text-[72px] leading-[1.1] text-primary mb-8 tracking-tight">
            Infrastructure for the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Intelligent Enterprise</span>
          </h1>
          
          <p className="font-body-lg text-body-lg md:text-[20px] text-on-surface-variant mb-12 max-w-[650px] mx-auto md:mx-0 leading-relaxed">
            We build scalable AI systems, robust data platforms, and autonomous agentic workflows that drive measurable business outcomes for the world's most ambitious companies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/contact">
              <Button className="bg-primary text-on-primary font-title-md text-title-md px-8 py-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(0,0,60,0.39)] hover:shadow-[0_6px_20px_rgba(0,0,60,0.23)] hover:scale-[1.02] transition-all active:scale-95">
                Start Building
                <span className="material-symbols-outlined">arrow_forward</span>
              </Button>
            </Link>
            <Link to="/services">
              <Button className="bg-white border border-primary/10 text-primary font-title-md text-title-md px-8 py-4 rounded-xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 border-b border-outline-variant/20 bg-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-8">Trusted by forward-thinking teams globally</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale">
            {/* Placeholder Logos */}
            <div className="text-xl font-bold font-display-lg">Acme Corp</div>
            <div className="text-xl font-bold font-display-lg">GlobalTech</div>
            <div className="text-xl font-bold font-display-lg">Quantum AI</div>
            <div className="text-xl font-bold font-display-lg">Nexus Systems</div>
            <div className="text-xl font-bold font-display-lg">Vertex</div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface-bright">
        <div className="max-w-container-max mx-auto">
          <div className="text-center max-w-[800px] mx-auto mb-20">
            <h2 className="font-headline-lg md:text-[48px] text-primary mb-6 leading-tight">Engineered for absolute performance and reliability.</h2>
            <p className="font-body-md text-body-md text-on-surface-variant text-lg">
              Nexacore unifies data engineering, machine learning, and cloud infrastructure into a single, cohesive ecosystem designed specifically for your organizational needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-outline-variant/30 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">architecture</span>
              </div>
              <h3 className="font-title-md text-title-md text-primary mb-3">Modular Architecture</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Build precisely what you need. Our solutions are designed as composable microservices that integrate seamlessly with your existing stack.
              </p>
            </div>
            
            <div className="p-8 rounded-3xl bg-white border border-outline-variant/30 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary text-3xl">speed</span>
              </div>
              <h3 className="font-title-md text-title-md text-primary mb-3">High-Throughput</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Process terabytes of data with near-zero latency. We optimize algorithms and infrastructure to ensure peak operational velocity.
              </p>
            </div>
            
            <div className="p-8 rounded-3xl bg-white border border-outline-variant/30 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 rounded-2xl bg-tertiary/5 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-tertiary text-3xl">verified_user</span>
              </div>
              <h3 className="font-title-md text-title-md text-primary mb-3">Enterprise Security</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Bank-grade encryption, strict IAM policies, and continuous compliance monitoring keep your proprietary models and data secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop bg-primary text-white relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-primary to-primary opacity-50 blur-2xl"></div>
        
        <div className="max-w-container-max mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-[600px]">
            <h2 className="font-display-lg text-4xl md:text-5xl font-bold mb-6 text-white">Ready to scale your intelligence?</h2>
            <p className="text-white/80 text-lg mb-0">Join the innovative companies building their future on Nexacore AI's enterprise infrastructure.</p>
          </div>
          <div className="flex gap-4">
            <Link to="/contact">
              <Button className="bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-surface-container-lowest transition-colors shadow-xl">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
