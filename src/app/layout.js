import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Himachal Temples',
    template: '%s | Himachal Temples',
  },
  description: 'Explore famous temples across all districts of Himachal Pradesh with practical visitor information.',
  applicationName: 'Himachal Temples',
  keywords: ['Himachal Pradesh temples', 'temples in Himachal', 'district wise temples', 'spiritual tourism'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Himachal Temples',
    description: 'Discover temples in Himachal Pradesh district by district.',
    url: '/',
    siteName: 'Himachal Temples',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Himachal Temples',
    description: 'Discover temples in Himachal Pradesh district by district.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-slate-900"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
