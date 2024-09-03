module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "light-grey": "hsl(217, 12%, 63%)",
        "dark-blue": "hsl(213, 19%, 18%)",
        "very-dark-blue": "hsl(216, 12%, 8%)",
      },
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
      },
      width: {
        '90': '22.5rem', 
        '95': '23.75rem',
      },
    },
  },
  plugins: [],
};
