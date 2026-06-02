'use client';

import { useTranslations } from 'next-intl';
import Logistics from '@/components/Logistics';
import Image from 'next/image';

const LogisticsPage = () => {
  return (
    <div className="pt-20">
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
          alt="Logistics"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Logistics</h1>
          <p className="text-xl font-light tracking-widest uppercase">Reliable European Supply Chain</p>
        </div>
      </section>

      <Logistics />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl font-serif text-primary text-center">Our Commitment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="text-xl font-serif font-bold">Cold Chain Integrity</h4>
                <p className="text-foreground/70 font-light leading-relaxed">
                  We specialize in temperature-controlled logistics, ensuring that chilled and frozen products like Feta and Greek yogurt maintain their quality and safety throughout the journey.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-serif font-bold">Regulatory Compliance</h4>
                <p className="text-foreground/70 font-light leading-relaxed">
                  Our team handles all necessary export documentation and ensures full compliance with EU food safety regulations and labeling requirements for each destination country.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-serif font-bold">Flexible Volume</h4>
                <p className="text-foreground/70 font-light leading-relaxed">
                  Whether you require full truckloads (FTL) or smaller groupage shipments (LTL), we provide flexible solutions tailored to your inventory needs.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-serif font-bold">Strategic Hubs</h4>
                <p className="text-foreground/70 font-light leading-relaxed">
                  With strategic partners in France, Italy, and Spain, we offer efficient local distribution from regional warehouses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogisticsPage;
