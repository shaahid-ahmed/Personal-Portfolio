import './globals.css';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import Navbar from '@/components/Navbar';

// Self-hosted through next/font: no render-blocking request to Google, no FOUT.
const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap'
});

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap'
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap'
});

const title = 'Shaahid Ahmed Nadeem | Software Engineer & ML Researcher';
const description =
  'MS Computer Science student at NYU specializing in machine learning, quantitative research, and software engineering.';

export const metadata = {
  metadataBase: new URL('https://shaahid-ahmed.vercel.app'),
  title: {
    default: title,
    template: '%s | Shaahid Ahmed Nadeem'
  },
  description,
  keywords: [
    'Shaahid Ahmed Nadeem',
    'machine learning',
    'software engineer',
    'NYU',
    'speech and audio processing',
    'quantitative research'
  ],
  authors: [{ name: 'Shaahid Ahmed Nadeem' }],
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'en_US',
    siteName: 'Shaahid Ahmed Nadeem'
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description
  }
};

export const viewport = {
  themeColor: '#F4F7F8'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="antialiased font-body">
        <a
          href="#education"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-pill focus:bg-ocean focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
