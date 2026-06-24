'use client';

import { useTranslations } from 'next-intl';
import { Truck, PackageCheck, BarChart3, Clock } from 'lucide-react';

const Logistics = () => {
  const t = useTranslations('Logistics');

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-primary font-medium tracking-[0.2em] uppercase text-sm">
                {t('eyebrow')}
              </h3>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground">
                {t('title')}
              </h2>
            </div>
            <p className="text-lg text-foreground/70 font-light leading-relaxed">
              {t('description')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <Truck className="text-primary shrink-0" size={24} />
                <div>
                  <h4 className="font-serif text-lg">{t('features.temperatureControlled.title')}</h4>
                  <p className="text-sm text-foreground/60">{t('features.temperatureControlled.description')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="text-primary shrink-0" size={24} />
                <div>
                  <h4 className="font-serif text-lg">{t('features.timelyDelivery.title')}</h4>
                  <p className="text-sm text-foreground/60">{t('features.timelyDelivery.description')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <PackageCheck className="text-primary shrink-0" size={24} />
                <div>
                  <h4 className="font-serif text-lg">{t('features.secureHandling.title')}</h4>
                  <p className="text-sm text-foreground/60">{t('features.secureHandling.description')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <BarChart3 className="text-primary shrink-0" size={24} />
                <div>
                  <h4 className="font-serif text-lg">{t('features.realTimeTracking.title')}</h4>
                  <p className="text-sm text-foreground/60">{t('features.realTimeTracking.description')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
             <div className="relative h-[500px] w-full bg-white rounded-2xl p-4 shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200" 
                  alt={t('imageAlt')}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-primary/10" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logistics;
