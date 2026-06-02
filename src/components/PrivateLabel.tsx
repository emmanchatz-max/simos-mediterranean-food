'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Tag, ShieldCheck, Factory } from 'lucide-react';

const PrivateLabel = () => {
  const t = useTranslations('Navigation');

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h3 className="text-primary font-medium tracking-[0.2em] uppercase text-sm">
              Tailored Solutions
            </h3>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">
              Private Label Capabilities
            </h2>
          </div>
          <p className="text-lg text-foreground/70 font-light leading-relaxed">
            We offer comprehensive private label services for wholesalers and major retailers. From product selection to packaging design and quality control, we help you bring authentic Mediterranean products to your customers under your own brand.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto text-primary">
                <Tag size={28} />
              </div>
              <h4 className="text-xl font-serif">Brand Development</h4>
              <p className="text-sm text-foreground/60 leading-relaxed">Assistance in packaging and labeling compliant with EU regulations.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto text-primary">
                <Factory size={28} />
              </div>
              <h4 className="text-xl font-serif">Flexible Sourcing</h4>
              <p className="text-sm text-foreground/60 leading-relaxed">Direct access to certified producers for various product categories.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto text-primary">
                <ShieldCheck size={28} />
              </div>
              <h4 className="text-xl font-serif">Quality Assurance</h4>
              <p className="text-sm text-foreground/60 leading-relaxed">Rigorous testing and certification to ensure the highest standards.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateLabel;
