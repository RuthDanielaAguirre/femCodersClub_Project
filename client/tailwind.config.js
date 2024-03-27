/** @type {import('tailwindcss').Config} */
module.exports = {

  plugins: [require('flowbite/plugin')],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/lib/esm/**/*.js"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      'headerText': ["Montserrat", "sans-serif"],
      'bodyText': ["Hind Madurai", "sans-serif"],
    },
    extend: {
      colors: {
        'primary': '#FDFDFD',
        'secondary': '#3C0F59',
        'tertiary': '#FF754D',
        'accent': '#8120BF',
        'contrast': '#180623',
        'tertiary-transparent-20': 'rgba(255, 117, 77, 0.2)',
        'accent-transparent-20': 'rgba(129, 32, 191, 0.2)',
        'accent-transparent-80': 'rgba(129, 32, 191, 0.8)',
       
      },
      gradientColorStops: theme => ({
        'secondary-to-accent': ['#3C0F59','#8120BF'],
        'accent-to-tertiary': ['#8120BF', '#FF754D'],
        'primary-accent-secondary': ['#FDFDFD', '#8120BF', '#3C0F59'],
        'transparent-to-primary': ['transparent', '#FDFDFD'],
      })
    }
  }
};