import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
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
  );
};

export default Hero;
