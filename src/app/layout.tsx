import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';

import { gtm, GTM } from './scripts';

import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

const RootLayout: LayoutComponent = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex h-screen flex-col items-center justify-center`}
      >
        <GTM />
        {children}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {gtm}
        </Script>
      </body>
    </html>
  );
};

// Using edge runtime on a page currently disables static generation for that page
// export const runtime = 'edge';

export const metadata: Metadata = {
  metadataBase: new URL('https://cirych.com'),
  title: 'Cirych',
  description: 'Cirych personal site: frontend and mobile development',
  keywords: ['Next.js', 'React', 'JavaScript', 'TypeScript', 'Frontend'],
  authors: [{ name: 'Cirych', url: 'https://cirych.com' }],
  creator: 'Kirill Ezhemenskii',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light',
  themeColor: 'white',
  // manifest: 'https://cirych.com/manifest.json',
  category: 'technology',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://cirych.com',
    // languages: {
    //   'en-US': 'https://cirych.com/en-US',
    // },
    // media: {
    //   'only screen and (max-width: 600px)': 'https://cirych.com/mobile',
    // },
  },
  openGraph: {
    title: 'Cirych',
    description: 'Cirych personal site: frontend and mobile development',
    url: 'https://cirych.com',
    siteName: 'Cirych',
    locale: 'en_US',
    type: 'website',
    // images: [],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cirych',
    description: 'Cirych personal site: frontend and mobile development',
    // siteId: '',
    creator: '@cirych_',
    // creatorId: '',
    // images: ['https://cirych.com/og.png'],
  },
};

export default RootLayout;
