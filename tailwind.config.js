/** @type {import('tailwindcss').Config} */ 
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    // theme: {
    //   extend: {
    //     backgroundColor: {
    //       primary: 'var(--color-bg-primary)',
    //       secondary: 'var(--color-bg-secondary)',
    //     },
    //     textColor: {
    //       accent: 'var(--color-text-accent)',
    //       primary: 'var(--color-text-primary)',
    //       secondary: 'var(--color-text-secondary)',
    //     },
    //   },
    // },
    plugins: [],
    darkMode: 'class',
  }