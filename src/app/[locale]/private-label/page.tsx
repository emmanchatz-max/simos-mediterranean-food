'use client';

import { useTranslations } from 'next-intl';
import PrivateLabel from '@/components/PrivateLabel';
import Image from 'next/image';

const PrivateLabelPage = () => {
  return (
    <div className="pt-20">
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=2000"
          alt="Private Label"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Private Label</h1>
          <p className="text-xl font-light tracking-widest uppercase">Custom Solutions for Your Brand</p>
        </div>
      </section>

      <PrivateLabel />

      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-primary">Why Choose Us?</h2>
              <ul className="space-y-4 text-foreground/70 font-light">
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Access to a network of certified Greek producers.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Full compliance with European food safety standards.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold">•</span>
                  <span>End-to-end management from production to delivery.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Customizable packaging and volume options.</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm space-y-6">
              <h3 className="text-2xl font-serif text-primary">Process</h3>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Consultation', desc: 'Discuss your brand requirements and product selection.' },
                  { step: '02', title: 'Sourcing', desc: 'Identify the best producers for your specific needs.' },
                  { step: '03', title: 'Design', desc: 'Assist in packaging design and labeling compliance.' },
                  { step: '04', title: 'Production', desc: 'Rigorous quality control during the manufacturing process.' }
                ].map((item) => (
                  <div key={item.step} className="flex space-x-4">
                    <span className="text-primary font-serif font-bold">{item.step}</span>
                    <div>
                      <h4 className="font-serif font-bold">{item.title}</h4>
                      <p className="text-sm text-foreground/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivateLabelPage;
