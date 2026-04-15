/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // We keep the names so your components don't break, but flip the colors!
        navy: '#F4F7F8',     // Was dark blue, now a very light, airy sea-salt gray
        surface: '#FFFFFF',  // Was dark cards, now pure white
        ocean: '#0F766E',    // Deepened the teal slightly for high contrast on white
        seafoam: '#14B8A6',  // Standard teal for hover effects
        crisp: '#0F172A',    // Was white text, now deep dark slate for headings
        cool: '#475569'      // Was gray text, now a darker slate for body paragraphs
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    }
  },
  plugins: [],
};