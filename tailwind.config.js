/** @type {import('tailwindcss').Config} */
export default {
  content: [
    //"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F9F6EE',
        'secondary': '#252525',
        'Active': '#FF3253'
      },
      fontFamily: {
        'Aeros': ['aeros', 'sans-serif'],
        'Aquire': ['aquire-regular', 'sans-serif'],
        'AquireBold': ['aquire-bold', 'sans-serif'],
        'AquireLight': ['aquire-light', 'sans-serif'],
      },
      dropShadow: {
        'iluminate': '0px 0px 2px #ffffff',
        '4xl': ['0 35px 35px rgba(0, 0, 0, 0.25)', '0 45px 65px rgba(0, 0, 0, 0.15)'],
      },
      keyframes:{
        infiniteScrool:{
          '0%': {
            transform: 'translateX(0)'
          },
          '50%': {
            transform: 'translateX(-10%)'
          },
          '75%': {
            transform: 'translateX(10%)'
          },
          '100%': {
            transform: 'translateX(0%)'
          }
        }
      },
      animation: {
        'infiniteScrool': 'infiniteScrool 20s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

