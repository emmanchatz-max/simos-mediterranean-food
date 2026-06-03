import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function ContactPage({params: {locale}}: {params: {locale: string}}) {
  setRequestLocale(locale);
  const t = useTranslations('Contact');

  return (
    <div className="pt-20">
      <section className="bg-primary text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-8">{t('title')}</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            Connect with our team of export specialists to discuss how we can support your business.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl font-serif text-foreground">{t('info')}</h2>
                <p className="text-lg text-foreground/70 font-light leading-relaxed">
                  We are available for inquiries regarding wholesale, retail distribution, and private label opportunities.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-1">Our Headquarters</h4>
                    <p className="text-foreground/70">Kolokotroni 1, Kryoneri, Athens 14568, Greece</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-1">Phone Number</h4>
                    <p className="text-foreground/70">+30 210 3246981</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-1">Email Address</h4>
                    <p className="text-foreground/70">info@simosfg.com</p>
                  </div>
                </div>

                <div className="pt-6 border-t">
                   <a
                    href="https://www.linkedin.com/company/simos-mediterranean-food/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-4 group text-primary font-medium uppercase tracking-widest text-sm"
                  >
                    <Linkedin size={24} />
                    <span className="border-b border-primary/20 pb-1 group-hover:border-primary transition-all">Follow us on LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-64 bg-secondary rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-foreground/20">
                  <MapPin size={48} />
                  <span className="ml-4 font-serif text-xl italic">Athens, Greece</span>
                </div>
                {/* In a real project, embed Google Maps here */}
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
