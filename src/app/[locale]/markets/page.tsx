'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Globe2, Ship, Plane, Truck } from 'lucide-react';

const ExportMarketsPage = () => {
  const t = useTranslations('Markets');

  return (
    <div className="pt-20">
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-serif mb-8">{t('title')}</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Connecting Greek excellence with major European markets through reliable logistics and localized expertise.
          </p>
        </div>
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
          <Globe2 size={600} strokeWidth={0.5} />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { name: 'France', description: 'Strong presence in major retail chains and specialized Mediterranean food importers.' },
              { name: 'Italy', description: 'Supplying high-quality Greek yogurt and feta to food service partners across the country.' },
              { name: 'Spain', description: 'Growing network of distributors focusing on authentic Mediterranean products.' },
              { name: 'Belgium', description: 'Central hub for distribution to Benelux wholesalers and catering companies.' }
            ].map((market) => (
              <div key={market.name} className="p-8 border border-secondary rounded-2xl hover:shadow-xl transition-shadow space-y-4">
                <h3 className="text-3xl font-serif text-primary">{market.name}</h3>
                <p className="text-foreground/70 leading-relaxed font-light">{market.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 text-center space-y-12">
          <h2 className="text-4xl font-serif text-foreground">Logistics Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto text-primary shadow-sm">
                <Ship size={32} />
              </div>
              <h4 className="text-xl font-serif">Maritime Transport</h4>
              <p className="text-sm text-foreground/60 leading-relaxed">Efficient container shipping for large volume orders.</p>
            </div>
            <div className="space-y-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto text-primary shadow-sm">
                <Truck size={32} />
              </div>
              <h4 className="text-xl font-serif">Road Transport</h4>
              <p className="text-sm text-foreground/60 leading-relaxed">Weekly departures to all major European destinations.</p>
            </div>
            <div className="space-y-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto text-primary shadow-sm">
                <Plane size={32} />
              </div>
              <h4 className="text-xl font-serif">Air Freight</h4>
              <p className="text-sm text-foreground/60 leading-relaxed">Express shipping for fresh and time-sensitive products.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExportMarketsPage;
