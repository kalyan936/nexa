import React from 'react';

const About = () => {
  return (
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
  );
};

export default About;
