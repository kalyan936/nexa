import React from 'react';
import Button from '../components/Button';

const ContactPage = () => {
  return (
    <div className="w-full pt-20">
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-white">
        <div className="max-w-container-max mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <h1 className="font-display-lg text-5xl md:text-6xl text-primary mb-6">Let's Build the Future</h1>
            <p className="font-body-lg text-xl text-on-surface-variant mb-12">
              Ready to integrate advanced AI into your business? Our team of specialists is here to guide you through the transition.
            </p>
            
            <div className="space-y-10">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary">location_on</span>
                </div>
                <div>
                  <p className="font-title-md text-xl text-primary mb-2">Global Headquarters</p>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    #52, 3rd Cross, Aswath Nagar<br />
                    Marathahalli, Bengaluru<br />
                    Karnataka, India – 560037
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary">mail</span>
                </div>
                <div>
                  <p className="font-title-md text-xl text-primary mb-2">Email Inquiries</p>
                  <a href="mailto:contact@nexacore.ai" className="font-body-md text-secondary hover:underline">contact@nexacore.ai</a>
                  <p className="text-sm text-on-surface-variant mt-1">We aim to respond within 24 hours.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/20 shadow-2xl relative overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 blur-[80px] rounded-full pointer-events-none"></div>
            
            <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <h3 className="font-headline-lg text-3xl text-primary mb-8">Send us a message</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-sm text-primary uppercase tracking-wider">First Name</label>
                  <input className="w-full bg-white border border-outline-variant/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all" placeholder="Jane" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="font-label-sm text-primary uppercase tracking-wider">Last Name</label>
                  <input className="w-full bg-white border border-outline-variant/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all" placeholder="Doe" type="text" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="font-label-sm text-primary uppercase tracking-wider">Business Email</label>
                <input className="w-full bg-white border border-outline-variant/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all" placeholder="jane@company.com" type="email" />
              </div>
              
              <div className="space-y-2">
                <label className="font-label-sm text-primary uppercase tracking-wider">How can we help?</label>
                <textarea className="w-full bg-white border border-outline-variant/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all resize-none" placeholder="Tell us about your project goals and timeline..." rows="5"></textarea>
              </div>
              
              <Button onClick={() => alert('Message Sent! We will get back to you shortly.')} className="w-full bg-primary text-on-primary py-4 rounded-xl font-title-md hover:scale-[1.02] transition-transform shadow-lg mt-4">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
