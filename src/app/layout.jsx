import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Shaahid Ahmed Nadeem | Portfolio',
  description: 'MS Computer Science student at NYU specializing in machine learning, quantitative research, and software engineering.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Import the fonts from Google Fonts */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=JetBrains+Mono&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-body selection:bg-ocean/30 selection:text-seafoam">
        <Navbar />
        {children}
      </body>
    </html>
  );
}