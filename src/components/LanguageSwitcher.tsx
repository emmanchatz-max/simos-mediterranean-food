'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/navigation';
import { locales } from '@/i18n';
import { motion } from 'framer-motion';

const LanguageSwitcher = ({ isScrolled, isMobile }: { isScrolled: boolean; isMobile?: boolean }) => {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className={`flex items-center ${isMobile ? 'space-x-4' : 'space-x-2'}`}>
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => handleLanguageChange(locale)}
          className={`text-xs font-bold transition-all px-1.5 py-1 rounded ${
            currentLocale === locale
              ? isScrolled
                ? 'bg-primary text-white'
                : 'bg-white text-primary'
              : isScrolled
              ? 'text-foreground/60 hover:text-primary'
              : 'text-white/60 hover:text-white'
          }`}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
