import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {locales} from '@/i18n';
import {notFound} from 'next/navigation';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FaviconDebug from '@/components/FaviconDebug';
import { Metadata } from 'next';

const socialPreviewTitle = 'SIMOS Mediterranean Food';
const socialPreviewDescription =
  'Greek Feta, Halloumi, Manouri & Yogurt for International Markets';
const socialPreviewImage = '/images/preview.png';

export const metadata: Metadata = {
  title: 'SIMOS Mediterranean Food | Premium Food Export',
  description: 'Specialists in exporting high-quality Greek and Mediterranean food products across Europe.',
  openGraph: {
    title: socialPreviewTitle,
    description: socialPreviewDescription,
    type: 'website',
    images: [
      {
        url: socialPreviewImage,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: socialPreviewTitle,
    description: socialPreviewDescription,
    images: [socialPreviewImage],
  },
  icons: {
    icon: [
      { url: '/images/favicon.png', type: 'image/png' },
      { url: '/images/favicon.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: [
      { url: '/images/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/images/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/images/favicon.png', color: '#1F497D' },
    ],
  },
  manifest: '/site.webmanifest',
};

export const viewport = {
  themeColor: '#1F497D',
};

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const {locale} = params;
  
  // Enable static rendering
  setRequestLocale(locale);

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="antialiased min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <FaviconDebug />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
