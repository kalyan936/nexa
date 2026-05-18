import React from 'react';
import Button from './Button';

const Services = () => {
  return (
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
  );
};

export default Services;
