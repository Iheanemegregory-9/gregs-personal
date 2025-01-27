/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito']
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

