import React from 'react';

const IndustriesPage = () => {
  const industries = [
    { name: 'Financial Services', icon: 'account_balance', metric: '60%', metricLabel: 'Reduction in Fraud Detection Latency' },
    { name: 'Healthcare & Life Sciences', icon: 'medical_services', metric: '3x', metricLabel: 'Faster Document Processing via OCR/LLMs' },
    { name: 'Supply Chain & Logistics', icon: 'local_shipping', metric: '25%', metricLabel: 'Optimization in Route Planning' },
    { name: 'E-commerce & Retail', icon: 'storefront', metric: '40%', metricLabel: 'Increase in Recommendation CTR' },
  ];

  return (
    <div className="w-full pt-20">
      {/* Header */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-b border-outline-variant/10">
        <div className="max-w-container-max mx-auto text-center">
          <h1 className="font-display-lg text-5xl md:text-7xl text-primary mb-8">Industries We Empower</h1>
          <p className="text-xl text-on-surface-variant max-w-[700px] mx-auto leading-relaxed">
            We deliver domain-specific AI solutions that understand the unique regulatory, scale, and operational requirements of your sector.
          </p>
        </div>
      </section>

      {/* Global Impact Stats */}
      <section className="py-16 bg-primary text-white border-y border-primary/20">
        <div className="max-w-container-max mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-margin-mobile md:px-margin-desktop">
          <div>
            <p className="font-display-lg text-4xl text-secondary-fixed-dim mb-2">150+</p>
            <p className="font-title-md text-sm opacity-80">Enterprise Deployments</p>
          </div>
          <div>
            <p className="font-display-lg text-4xl text-secondary-fixed-dim mb-2">12</p>
            <p className="font-title-md text-sm opacity-80">Sectors Supported</p>
          </div>
          <div>
            <p className="font-display-lg text-4xl text-secondary-fixed-dim mb-2">0</p>
            <p className="font-title-md text-sm opacity-80">Data Breaches</p>
          </div>
          <div>
            <p className="font-display-lg text-4xl text-secondary-fixed-dim mb-2">99.99%</p>
            <p className="font-title-md text-sm opacity-80">Platform Uptime SLA</p>
          </div>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop bg-white">
        <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-8">
          {industries.map((ind, idx) => (
            <div key={idx} className="glass-card p-10 rounded-3xl border border-outline-variant/20 hover:border-primary/20 transition-all hover:-translate-y-1 hover:shadow-xl cursor-default group">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white transition-colors">{ind.icon}</span>
                </div>
                <h3 className="font-headline-lg text-2xl text-primary">{ind.name}</h3>
              </div>
              
              <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/10">
                <p className="font-display-lg text-3xl text-secondary mb-2">{ind.metric}</p>
                <p className="font-title-md text-on-surface-variant text-sm uppercase tracking-wider">{ind.metricLabel}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
