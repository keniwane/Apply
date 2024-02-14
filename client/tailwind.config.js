/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-color': '#24202D',
        'job-card-color': '#333038',
        'header-color': '#28252B',
      },
    },
  },
  plugins: [],
};
