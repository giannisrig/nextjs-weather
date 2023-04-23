/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        sm: '10px',
        md: '0',
        mdl: '0',
        lg: '0',
        xl: '0',
        '2xl': '0',
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'mdl': '900px',
      // => @media (min-width: 900px) { ... }
      'lg': '1080px',
      // => @media (min-width: 1080px) { ... }
      'xl': '1290px',
      // => @media (min-width: 1290px) { ... }
      '2xl': '1290px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      primary: ['var(--font-noto-sans-mono)'],
      secondary: ['var(--font-grava)'],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'green': '#24C1AE',
        'pink': '#F73693',
        'amethyst': '#AE94BD',
        'mirage': '#1D1528',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '5px': '5px',
        '7px': '7px',
        '10px': '10px',
        '15px': '15px',
        '20px': '20px',
        '25px': '25px',
        '30px': '30px',
        '35px': '35px',
        '40px': '40px',
        '50px': '50px',
        '60px': '60px',
        '80px': '80px',
        '100px': '100px',
        '120px': '120px',
        '150px': '150px',
        '160px': '160px',
      },
    },
  },
  plugins: [],
}
