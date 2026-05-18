import React from 'react';
import Button from '../components/Button';

const CareersPage = () => {
  const jobs = [
    { title: 'Senior AI Engineer', department: 'Engineering', location: 'Bengaluru / Remote', type: 'Full-time' },
    { title: 'Data Platform Architect', department: 'Infrastructure', location: 'Remote', type: 'Full-time' },
    { title: 'Machine Learning Researcher', department: 'R&D', location: 'Bengaluru', type: 'Full-time' },
    { title: 'Technical Product Manager', department: 'Product', location: 'Hybrid', type: 'Full-time' }
  ];

  return (
    <div className="w-full pt-20">
      {/* Header */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low border-b border-outline-variant/10">
        <div className="max-w-container-max mx-auto text-center">
          <h1 className="font-display-lg text-5xl md:text-7xl text-primary mb-8">Build the Future of AI</h1>
          <p className="text-xl text-on-surface-variant max-w-[700px] mx-auto leading-relaxed">
            Join a team of elite engineers and researchers solving the most complex problems in enterprise artificial intelligence.
          </p>
        </div>
      </section>

      {/* Culture & Benefits */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop bg-white">
        <div className="max-w-container-max mx-auto">
          <div className="mb-20 text-center">
            <h2 className="font-headline-lg text-4xl text-primary mb-6">Life at Nexacore</h2>
            <p className="text-on-surface-variant text-lg">We invest heavily in our people, providing the environment and resources needed to do your best work.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-outline-variant/20 rounded-2xl">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">computer</span>
              <h3 className="font-title-md text-xl text-primary mb-2">Top-tier Equipment</h3>
              <p className="text-on-surface-variant">Latest MacBook Pros, high-end monitors, and dedicated cloud compute budgets for research.</p>
            </div>
            <div className="p-8 border border-outline-variant/20 rounded-2xl">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">school</span>
              <h3 className="font-title-md text-xl text-primary mb-2">Continuous Learning</h3>
              <p className="text-on-surface-variant">Generous stipends for conferences, courses, and certifications to keep you at the cutting edge.</p>
            </div>
            <div className="p-8 border border-outline-variant/20 rounded-2xl">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">health_and_safety</span>
              <h3 className="font-title-md text-xl text-primary mb-2">Comprehensive Health</h3>
              <p className="text-on-surface-variant">Premium health, dental, and vision coverage for you and your dependents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface-bright">
        <div className="max-w-container-max mx-auto">
          <h2 className="font-headline-lg text-4xl text-primary mb-12">Open Positions</h2>
          
          <div className="space-y-4">
            {jobs.map((job, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-outline-variant/20 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-lg transition-shadow">
                <div>
                  <h3 className="font-title-md text-2xl text-primary mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="text-sm font-label-sm text-on-surface-variant bg-surface-container py-1 px-3 rounded-full">{job.department}</span>
                    <span className="text-sm font-label-sm text-on-surface-variant bg-surface-container py-1 px-3 rounded-full flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">location_on</span>
                      {job.location}
                    </span>
                    <span className="text-sm font-label-sm text-on-surface-variant bg-surface-container py-1 px-3 rounded-full">{job.type}</span>
                  </div>
                </div>
                <Button className="bg-primary/5 text-primary border border-primary/20 hover:bg-primary hover:text-white px-8 py-3 rounded-xl transition-colors shrink-0">
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
