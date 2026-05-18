import React from 'react';
import Button from '../components/Button';

const ServicesPage = () => {
  const services = [
    {
      title: 'Data Engineering',
      icon: 'database',
      description: 'High-throughput pipelines and robust data warehouse architectures. We build the foundational infrastructure required for advanced analytics and AI.',
      features: ['ETL/ELT Pipeline Development', 'Real-time Streaming Architectures', 'Data Lakehouse Implementation', 'Performance Optimization']
    },
    {
      title: 'Generative AI & LLMs',
      icon: 'auto_awesome',
      description: 'Custom LLM fine-tuning and RAG (Retrieval-Augmented Generation) implementation tailored to your enterprise knowledge base securely.',
      features: ['Private RAG Systems', 'Foundation Model Fine-tuning', 'Prompt Engineering Ops', 'AI Guardrails & Security']
    },
    {
      title: 'Agentic Workflows',
      icon: 'smart_toy',
      description: 'Autonomous agents designed to perform multi-step, complex business workflows requiring reasoning and external tool usage.',
      features: ['Multi-Agent Systems', 'Workflow Automation', 'Cognitive Architecture Design', 'Tool Integration (APIs)']
    },
    {
      title: 'MLOps & DevOps',
      icon: 'cloud_done',
      description: 'Cloud-native infrastructure and automated CI/CD for AI deployment. We ensure your models transition from sandbox to production seamlessly.',
      features: ['Model Registry Setup', 'Automated Retraining Pipelines', 'Kubernetes Deployment', 'Latency Optimization']
    }
  ];

  return (
    <div className="w-full pt-20">
      {/* Header */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/30 via-primary to-primary blur-[80px] pointer-events-none"></div>
        <div className="max-w-container-max mx-auto relative z-10">
          <h1 className="font-display-lg text-5xl md:text-7xl mb-6">Our Capabilities</h1>
          <p className="text-xl text-white/80 max-w-[600px] leading-relaxed">
            End-to-end technical solutions designed to modernize your infrastructure and embed intelligence into every layer of your business.
          </p>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto space-y-32">
          {services.map((service, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center mb-8 border border-outline-variant/30">
                  <span className="material-symbols-outlined text-primary text-4xl">{service.icon}</span>
                </div>
                <h2 className="font-headline-lg text-4xl text-primary mb-6">{service.title}</h2>
                <p className="font-body-lg text-on-surface-variant mb-10 leading-relaxed">{service.description}</p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                      <span className="font-title-md text-primary text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex-1 w-full relative">
                {/* Visual placeholder for architecture diagrams */}
                <div className="aspect-[4/3] rounded-3xl bg-surface-container-low border border-primary/10 overflow-hidden relative shadow-2xl flex items-center justify-center p-8">
                   <div className="w-full h-full border border-dashed border-outline-variant/50 rounded-xl flex items-center justify-center bg-white/50">
                     <p className="font-label-sm text-on-surface-variant/50 tracking-widest uppercase">Architecture Visualization</p>
                   </div>
                </div>
                {/* Decorative element */}
                <div className={`absolute top-1/2 -translate-y-1/2 w-full h-full bg-secondary-fixed-dim/10 blur-3xl -z-10 ${idx % 2 !== 0 ? '-left-8' : '-right-8'}`}></div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-highest text-center">
        <h2 className="font-headline-lg text-4xl text-primary mb-6">Need a custom solution?</h2>
        <p className="text-on-surface-variant mb-10 max-w-[500px] mx-auto">Our engineering team can audit your current architecture and propose a tailored roadmap.</p>
        <Button onClick={() => window.location.href='/contact'} className="bg-primary text-white px-8 py-4 rounded-xl">
          Schedule a Technical Consultation
        </Button>
      </section>
    </div>
  );
};

export default ServicesPage;
