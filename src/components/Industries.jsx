import React from 'react';

const Industries = () => {
  return (
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
  );
};

export default Industries;
