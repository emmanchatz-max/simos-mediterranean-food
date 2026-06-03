'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Globe2 } from 'lucide-react';

const markets = [
  { key: 'france', flag: '🇫🇷' },
  { key: 'italy', flag: '🇮🇹' },
  { key: 'spain', flag: '🇪🇸' },
  { key: 'belgium', flag: '🇧🇪' },
];

const ExportMarkets = () => {
  const t = useTranslations('Markets');

  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
          <Globe2 size={600} strokeWidth={0.5} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 relative z-10">
            <div className="space-y-4">
              <h3 className="text-white/60 font-medium tracking-[0.2em] uppercase text-sm">
                {t('subtitle')}
              </h3>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                {t('title')}
              </h2>
            </div>
            <p className="text-lg text-white/80 font-light leading-relaxed max-w-lg">
              {t('description')}
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              {markets.map((market) => (
                <div key={market.key} className="flex items-center space-x-4 group">
                  <span className="text-4xl grayscale group-hover:grayscale-0 transition-all duration-300">
                    {market.flag}
                  </span>
                  <span className="text-xl font-serif tracking-wide">{t(market.key)}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative h-[400px] lg:h-[600px] flex items-center justify-center"
          >
            {/* Elegant Map Visual Placeholder */}
            <div className="w-full h-full border border-white/10 rounded-full flex items-center justify-center p-12">
               <div className="w-full h-full border border-white/20 rounded-full flex items-center justify-center p-12">
                  <div className="w-full h-full border border-white/40 rounded-full flex items-center justify-center">
                    <Globe2 size={120} className="text-white/60 animate-pulse" />
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExportMarkets;
