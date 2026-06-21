'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/navigation';
import { Menu, X, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const t = useTranslations('Navigation');
  const commonT = useTranslations('Common');
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/products', label: t('products') },
    { href: '/markets', label: t('markets') },
    { href: '/quality', label: t('quality') },
    { href: '/private-label', label: t('privateLabel') },
    { href: '/logistics', label: t('logistics') },
    { href: '/contact', label: t('contact') },
  ];

  const isHomePage = pathname === '/';
  const useSolidHeader = isScrolled || !isHomePage;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        useSolidHeader
          ? 'bg-white/95 shadow-md backdrop-blur supports-[backdrop-filter]:bg-white/85 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className={`text-2xl font-serif font-bold ${useSolidHeader ? 'text-primary' : 'text-white'}`}>
            SIMOS
          </span>
          <span className={`text-xs uppercase tracking-widest hidden md:block ${useSolidHeader ? 'text-primary-light' : 'text-white/80'}`}>
            {commonT('mediterraneanFood')}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide hover:opacity-70 transition-opacity ${
                useSolidHeader ? 'text-foreground' : 'text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          <div className={`flex items-center space-x-4 border-l pl-8 ${useSolidHeader ? 'border-foreground/10' : 'border-white/20'}`}>
            <LanguageSwitcher isScrolled={useSolidHeader} />
            <a
              href="https://www.linkedin.com/company/simos-mediterranean-food/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${useSolidHeader ? 'text-primary' : 'text-white'} hover:opacity-70 transition-opacity`}
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={useSolidHeader ? 'text-primary' : 'text-white'} />
          ) : (
            <Menu className={useSolidHeader ? 'text-primary' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-6 border-t flex justify-between items-center">
                <LanguageSwitcher isScrolled={true} isMobile={true} />
                <a
                  href="https://www.linkedin.com/company/simos-mediterranean-food/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
