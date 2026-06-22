import HeroSlider from '@/components/HeroSlider';
import AboutPreview from '@/components/AboutPreview';
import FeaturedCategories from '@/components/FeaturedCategories';
import ExportMarkets from '@/components/ExportMarkets';
import PrivateLabel from '@/components/PrivateLabel';
import Logistics from '@/components/Logistics';
import Certifications from '@/components/Certifications';
import ContactCTA from '@/components/ContactCTA';
import {setRequestLocale} from 'next-intl/server';

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
