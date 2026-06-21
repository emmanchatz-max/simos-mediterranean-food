import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const t = useTranslations('Navigation');
  const commonT = useTranslations('Contact');

  return (
    <footer className="bg-primary-dark text-white/80 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-white/95 p-1 shadow-xl ring-1 ring-white/10">
              <Image
                src="/images/logo.PNG"
                alt="Simos logo"
                fill
                sizes="64px"
                className="object-contain"
              />
            </div>
            <Link href="/" className="inline-block">
              <span className="text-3xl font-serif font-bold text-white">SIMOS</span>
              <span className="block text-xs uppercase tracking-[0.3em] text-white/50 mt-1">
                {commonT('mediterraneanFood')}
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              {commonT('brandDescription')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">{commonT('quickLinks')}</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-primary-light transition-colors">{t('home')}</Link></li>
              <li><Link href="/about" className="hover:text-primary-light transition-colors">{t('about')}</Link></li>
              <li><Link href="/products" className="hover:text-primary-light transition-colors">{t('products')}</Link></li>
              <li><Link href="/markets" className="hover:text-primary-light transition-colors">{t('markets')}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">{commonT('services')}</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/private-label" className="hover:text-primary-light transition-colors">{t('privateLabel')}</Link></li>
              <li><Link href="/logistics" className="hover:text-primary-light transition-colors">{t('logistics')}</Link></li>
              <li><Link href="/contact" className="hover:text-primary-light transition-colors">{t('contact')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">{commonT('contact')}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-light shrink-0" />
                <span>Kolokotroni 1, Kryoneri, Athens 14568, Greece</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-light shrink-0" />
                <span>+30 210 3246981</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-light shrink-0" />
                <span>info@simosfg.com</span>
              </li>
              <li className="pt-4">
                <a
                  href="https://www.linkedin.com/company/simos-mediterranean-food/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-white hover:text-primary-light transition-colors"
                >
                  <Linkedin size={20} />
                  <span>{commonT('followUs')}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:row justify-between items-center text-xs tracking-widest text-white/40 uppercase">
          <p>© {new Date().getFullYear()} SIMOS {commonT('mediterraneanFood')}. {commonT('allRightsReserved')}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary-light transition-colors">{commonT('privacyPolicy')}</Link>
            <Link href="/terms" className="hover:text-primary-light transition-colors">{commonT('termsOfService')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
