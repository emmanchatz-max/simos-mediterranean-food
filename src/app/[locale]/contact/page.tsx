'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

const ContactPage = () => {
  const t = useTranslations('Contact');

  return (
    <div className="pt-20">
      <section className="bg-primary text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-8">{t('title')}</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Connect with our team of export specialists to discuss how we can support your business.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl font-serif text-foreground">{t('info')}</h2>
                <p className="text-lg text-foreground/70 font-light leading-relaxed">
                  We are available for inquiries regarding wholesale, retail distribution, and private label opportunities.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-1">Our Headquarters</h4>
                    <p className="text-foreground/70">Kolokotroni 1, Kryoneri, Athens 14568, Greece</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-1">Phone Number</h4>
                    <p className="text-foreground/70">+30 210 3246981</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-1">Email Address</h4>
                    <p className="text-foreground/70">info@simosfg.com</p>
                  </div>
                </div>

                <div className="pt-6 border-t">
                   <a
                    href="https://www.linkedin.com/company/simos-mediterranean-food/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-4 group text-primary font-medium uppercase tracking-widest text-sm"
                  >
                    <Linkedin size={24} />
                    <span className="border-b border-primary/20 pb-1 group-hover:border-primary transition-all">Follow us on LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-64 bg-secondary rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-foreground/20">
                  <MapPin size={48} />
                  <span className="ml-4 font-serif text-xl italic">Athens, Greece</span>
                </div>
                {/* In a real project, embed Google Maps here */}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-secondary p-8 md:p-12 rounded-3xl">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-foreground/60 px-1">{t('name')}</label>
                    <input 
                      type="text" 
                      className="w-full bg-white border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-foreground/60 px-1">{t('email')}</label>
                    <input 
                      type="email" 
                      className="w-full bg-white border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-foreground/60 px-1">Subject</label>
                  <select className="w-full bg-white border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm appearance-none">
                    <option>Export Inquiry</option>
                    <option>Private Label Inquiry</option>
                    <option>Wholesale/Retail Partnership</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-foreground/60 px-1">{t('message')}</label>
                  <textarea 
                    rows={6}
                    className="w-full bg-white border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-primary text-white py-5 rounded-xl font-medium uppercase tracking-[0.2em] text-sm hover:bg-primary-dark transition-all flex items-center justify-center space-x-3 shadow-lg shadow-primary/20"
                >
                  <span>{t('submit')}</span>
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
