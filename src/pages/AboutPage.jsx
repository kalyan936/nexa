import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const AboutPage = () => {
  return (
    <div className="w-full pt-20">
      {/* Header Section */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-b border-outline-variant/10">
        <div className="max-w-container-max mx-auto text-center max-w-[900px]">
          <span className="font-label-sm text-secondary tracking-widest uppercase mb-4 block">About Nexacore</span>
          <h1 className="font-display-lg text-5xl md:text-7xl text-primary mb-8 leading-tight">
            Pioneering the next generation of <span className="text-secondary">Enterprise AI</span>
          </h1>
          <p className="font-body-lg text-xl text-on-surface-variant max-w-[700px] mx-auto leading-relaxed">
            We are a collective of engineers, researchers, and strategists dedicated to transforming complex challenges into elegant, highly scalable technical solutions.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop bg-white">
        <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square md:aspect-auto h-[600px]">
            <img className="w-full h-full object-cover" alt="Engineering Team" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYlqb_Om1jK8yyHCI4e3zPSBpN47pqWe6jgqLMvWtc-3rkKMrfBwZrnP_876u3L6ZX05KlMqh3SnrhweL-jILyQ4sjGmTmGRHpif4htzwsnNghQe2UEJoxfqsIj7jTLQBRY_T-YYS40BXqV5roPnJxfyrhGN3XuqxS3LlHEByvggMt03n93XZmIpgJ8oz_QzYUIR3NRgIokfPWgsR1T4Br8SGr0VQUMB3nXPDwixEoopiNiLuNYVFWfhZChd1e_lrfQ7DMdziOc5Dg" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
          </div>
          
          <div>
            <div className="mb-16">
              <h2 className="font-headline-lg text-3xl md:text-4xl text-primary mb-6">Our Mission</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                To democratize access to advanced artificial intelligence and robust data infrastructure, empowering enterprises to operate with unprecedented efficiency and foresight. We believe that technology should amplify human potential, not replace it.
              </p>
            </div>
            
            <div>
              <h2 className="font-headline-lg text-3xl md:text-4xl text-primary mb-6">Our Engineering Philosophy</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-1">
                    <span className="material-symbols-outlined text-secondary text-sm">done</span>
                  </div>
                  <div>
                    <h4 className="font-title-md text-primary mb-1">Pragmatic Innovation</h4>
                    <p className="text-on-surface-variant">We prioritize solutions that deliver measurable business value over chasing hype.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-1">
                    <span className="material-symbols-outlined text-secondary text-sm">done</span>
                  </div>
                  <div>
                    <h4 className="font-title-md text-primary mb-1">Built to Scale</h4>
                    <p className="text-on-surface-variant">Architecture designed for tomorrow's traffic, not just today's demo.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-1">
                    <span className="material-symbols-outlined text-secondary text-sm">done</span>
                  </div>
                  <div>
                    <h4 className="font-title-md text-primary mb-1">Uncompromising Security</h4>
                    <p className="text-on-surface-variant">Security is embedded in our SDLC from line one, never bolted on as an afterthought.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Placeholder */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-container-max mx-auto">
          <div className="mb-20">
            <h2 className="font-headline-lg text-4xl text-primary mb-4">Leadership</h2>
            <p className="text-on-surface-variant text-lg max-w-[600px]">Guided by industry veterans from the world's most innovative tech companies.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="w-full aspect-[4/5] rounded-2xl bg-surface-variant mb-6 overflow-hidden relative">
                  {/* Abstract placeholder for face */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/20 group-hover:scale-105 transition-transform duration-500"></div>
                </div>
                <h3 className="font-title-md text-primary text-xl">Executive Name {i}</h3>
                <p className="text-on-surface-variant">Co-Founder & Role</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-white border-t border-outline-variant/10 text-center">
        <h2 className="font-headline-lg text-4xl text-primary mb-8">Want to join our mission?</h2>
        <Link to="/careers">
          <Button className="bg-primary text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
            View Open Positions
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
