import HeroSlider from '@/components/HeroSlider';
import AboutPreview from '@/components/AboutPreview';
import FeaturedCategories from '@/components/FeaturedCategories';
import ExportMarkets from '@/components/ExportMarkets';
import PrivateLabel from '@/components/PrivateLabel';
import Logistics from '@/components/Logistics';
import Certifications from '@/components/Certifications';
import ContactCTA from '@/components/ContactCTA';

export default function HomePage() {
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
