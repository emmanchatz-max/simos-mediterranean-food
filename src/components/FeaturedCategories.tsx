'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/navigation';
import Image from 'next/image';

const categories = [
  { key: 'feta', image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=800' },
  { key: 'halloumi', image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&q=80&w=800' },
  { key: 'yogurt', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800' },
  { key: 'olives', image: 'https://images.unsplash.com/photo-151451687d820-27060a0fdee3?auto=format&fit=crop&q=80&w=800' },
  { key: 'dips', image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800' },
  { key: 'vineLeaves', image: 'https://images.unsplash.com/photo-1621841957884-1210fe19d66d?auto=format&fit=crop&q=80&w=800' },
];

const FeaturedCategories = () => {
  const t = useTranslations('Categories');
  const commonT = useTranslations('Common');

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-primary font-medium tracking-[0.2em] uppercase text-sm">
            {t('subtitle')}
          </h3>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">
            {t('title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative h-[400px] overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src={category.image}
                alt={t(category.key)}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <h4 className="text-2xl font-serif mb-4">{t(category.key)}</h4>
                <Link
                  href={`/products#${category.key}`}
                  className="text-xs uppercase tracking-[0.2em] font-medium border-b border-white/40 pb-1 w-fit hover:border-white transition-all"
                >
                  {commonT('viewCollection')}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
