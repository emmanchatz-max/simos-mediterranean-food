'use client';

import { useTranslations } from 'next-intl';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const t = useTranslations('Contact');

  return (
    <div className="bg-secondary p-8 md:p-12 rounded-3xl">
      <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
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
  );
};

export default ContactForm;
