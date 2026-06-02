'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutPage = () => {
  const t = useTranslations('About.preview');

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=2000"
          alt="About Simos"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Our Story</h1>
          <p className="text-xl font-light tracking-widest uppercase">Mediterranean Excellence since 2008</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-serif text-primary">A Legacy of Quality</h2>
                <p className="text-lg text-foreground/70 leading-relaxed font-light">
                  Founded in 2008 in Athens, SIMOS Mediterranean Food was born from a passion for authentic Greek flavors and a vision to share them with the world. We began as a small family-run export business and have grown into a leading partner for European food service and retail.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=800"
                  alt="Quality"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=800"
                  alt="Expertise"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2 space-y-6">
                <h2 className="text-4xl font-serif text-primary">Mediterranean Expertise</h2>
                <p className="text-lg text-foreground/70 leading-relaxed font-light">
                  Our expertise lies in our deep understanding of both the production and distribution sides of the food industry. We work closely with certified Greek producers to ensure that every product meeting our name adheres to the highest standards of quality and authenticity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
