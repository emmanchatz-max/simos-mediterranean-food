import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Logistics from '@/components/Logistics';
import Image from 'next/image';

export default function LogisticsPage({params: {locale}}: {params: {locale: string}}) {
  setRequestLocale(locale);
  const t = useTranslations('LogisticsPage');
  
  return (
    <div className="pt-20">
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
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

      <Logistics />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl font-serif text-primary text-center">{t('commitment.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="text-xl font-serif font-bold">{t('commitment.cards.coldChainIntegrity.title')}</h4>
                <p className="text-foreground/70 font-light leading-relaxed">
                  {t('commitment.cards.coldChainIntegrity.description')}
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-serif font-bold">{t('commitment.cards.regulatoryCompliance.title')}</h4>
                <p className="text-foreground/70 font-light leading-relaxed">
                  {t('commitment.cards.regulatoryCompliance.description')}
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-serif font-bold">{t('commitment.cards.flexibleVolume.title')}</h4>
                <p className="text-foreground/70 font-light leading-relaxed">
                  {t('commitment.cards.flexibleVolume.description')}
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-serif font-bold">{t('commitment.cards.strategicHubs.title')}</h4>
                <p className="text-foreground/70 font-light leading-relaxed">
                  {t('commitment.cards.strategicHubs.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
