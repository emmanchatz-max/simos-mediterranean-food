import type {Metadata} from 'next';
import HeroSlider from '@/components/HeroSlider';
import AboutPreview from '@/components/AboutPreview';
import FeaturedCategories from '@/components/FeaturedCategories';
import ExportMarkets from '@/components/ExportMarkets';
import PrivateLabel from '@/components/PrivateLabel';
import Logistics from '@/components/Logistics';
import Certifications from '@/components/Certifications';
import ContactCTA from '@/components/ContactCTA';
import {setRequestLocale} from 'next-intl/server';

const homeTitle = 'SIMOS Mediterranean Food';
const homeDescription =
  'Greek Feta, Halloumi, Manouri & Yogurt for International Markets';

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    type: 'website',
    images: [
      {
        url: '/images/preview.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: homeTitle,
    description: homeDescription,
    images: ['/images/preview.png'],
  },
};

export default function HomePage({params: {locale}}: {params: {locale: string}}) {
  setRequestLocale(locale);
  
  return (
    <div className="flex flex-col">
      <HeroSlider />
      <AboutPreview />
      <FeaturedCategories />
      <ExportMarkets />
      <PrivateLabel />
      <Logistics />
      <Certifications />
      <ContactCTA />
    </div>
  );
}
