'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/navigation';
import Image from 'next/image';

const AboutPreview = () => {
  const t = useTranslations('About.preview');

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/feta.PNG"
              alt="Mediterranean Sourcing"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-primary font-medium tracking-[0.2em] uppercase text-sm">
                About Simos
              </h3>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground leading-tight">
                {t('title')}
              </h2>
            </div>
            
            <div className="space-y-6 text-foreground/70 text-lg leading-relaxed font-light">
              <p>{t('text1')}</p>
              <p>{t('text2')}</p>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center space-x-4 group"
              >
                <span className="text-primary font-medium tracking-widest uppercase text-sm border-b border-primary/20 pb-1 group-hover:border-primary transition-all">
                  Read Our Story
                </span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-primary"
                >
                  →
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
