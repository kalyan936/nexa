import React from 'react';
import Button from './Button';

const Contact = () => {
  return (
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
  );
};

export default Contact;
