'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/navigation';
import { ArrowRight } from 'lucide-react';

const ContactCTA = () => {
  const t = useTranslations('Contact');

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-12 md:p-24 text-center text-white relative overflow-hidden"
        >
          {/* Decorative Circle */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif">
              {t('ctaTitle')}
            </h2>
            <p className="text-xl text-white/80 font-light leading-relaxed">
              {t('ctaDesc')}
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-3 bg-white text-primary px-10 py-5 rounded-full font-medium uppercase tracking-widest text-sm hover:bg-secondary transition-colors group"
              >
                <span>{t('submit')}</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
