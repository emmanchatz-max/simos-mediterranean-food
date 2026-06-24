import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import PrivateLabel from '@/components/PrivateLabel';
import Image from 'next/image';

export default function PrivateLabelPage({params: {locale}}: {params: {locale: string}}) {
  setRequestLocale(locale);
  const t = useTranslations('PrivateLabelPage');
  const processSteps = [
    { step: '01', title: t('process.steps.consultation.title'), desc: t('process.steps.consultation.description') },
    { step: '02', title: t('process.steps.sourcing.title'), desc: t('process.steps.sourcing.description') },
    { step: '03', title: t('process.steps.design.title'), desc: t('process.steps.design.description') },
    { step: '04', title: t('process.steps.production.title'), desc: t('process.steps.production.description') }
  ];
  
  return (
    <div className="pt-20">
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=2000"
          alt={t('hero.imageAlt')}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">{t('hero.title')}</h1>
          <p className="text-xl font-light tracking-widest uppercase">{t('hero.subtitle')}</p>
        </div>
      </section>

      <PrivateLabel />

      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-primary">{t('benefits.title')}</h2>
              <ul className="space-y-4 text-foreground/70 font-light">
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold">•</span>
                  <span>{t('benefits.items.certifiedProducers')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold">•</span>
                  <span>{t('benefits.items.foodSafetyCompliance')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold">•</span>
                  <span>{t('benefits.items.endToEndManagement')}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold">•</span>
                  <span>{t('benefits.items.packagingOptions')}</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm space-y-6">
              <h3 className="text-2xl font-serif text-primary">{t('process.title')}</h3>
              <div className="space-y-6">
                {processSteps.map((item) => (
                  <div key={item.step} className="flex space-x-4">
                    <span className="text-primary font-serif font-bold">{item.step}</span>
                    <div>
                      <h4 className="font-serif font-bold">{item.title}</h4>
                      <p className="text-sm text-foreground/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
