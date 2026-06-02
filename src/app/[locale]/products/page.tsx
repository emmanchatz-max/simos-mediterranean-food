'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from '@/navigation';
import { ArrowRight, Package, Truck, Info } from 'lucide-react';

const products = [
  {
    id: 'feta',
    title: 'Feta Cheese',
    description: 'Authentic P.D.O. Greek Feta cheese made from sheep and goat milk. Available in various formats for retail and food service.',
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=1200',
    packaging: ['150g Vacuum', '200g Vacuum', '400g Brine', '1kg Brine', '15kg Tin'],
  },
  {
    id: 'halloumi',
    title: 'Halloumi',
    description: 'Traditional Cyprus cheese, perfect for grilling or frying. High-quality production with authentic taste.',
    image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&q=80&w=1200',
    packaging: ['200g Vacuum', '225g Vacuum', '250g Vacuum', '500g Catering Pack'],
  },
  {
    id: 'yogurt',
    title: 'Greek Yogurt',
    description: 'Thick, creamy and authentic Greek yogurt. High protein content and traditional straining process.',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=1200',
    packaging: ['150g Cup', '200g Cup', '500g Tub', '1kg Tub', '5kg Catering Tub'],
  },
  {
    id: 'olives',
    title: 'Mediterranean Olives',
    description: 'Premium Kalamata and Green olives, harvested at peak ripeness and processed with traditional methods.',
    image: 'https://images.unsplash.com/photo-151451687d820-27060a0fdee3?auto=format&fit=crop&q=80&w=1200',
    packaging: ['200g Pouch', '350g Jar', '1kg Vacuum', '5kg Pail', '10kg Drum'],
  },
];

const ProductsPage = () => {
  return (
    <div className="pt-20">
      <section className="bg-secondary py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-primary mb-8">Our Product Range</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-light leading-relaxed">
            Discover our carefully selected range of premium Mediterranean food products, specifically curated for the European B2B market.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 space-y-32">
          {products.map((product, index) => (
            <div key={product.id} id={product.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-serif text-foreground">{product.title}</h2>
                  <p className="text-lg text-foreground/70 font-light leading-relaxed">{product.description}</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-3 text-primary">
                    <Package size={24} />
                    <h4 className="font-serif text-xl">Export Packaging</h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {product.packaging.map((pkg) => (
                      <span key={pkg} className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-foreground/80">
                        {pkg}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-primary text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-primary-light transition-all flex items-center space-x-2"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
