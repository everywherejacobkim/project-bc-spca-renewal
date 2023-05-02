/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
      backgroundColor:{
        'primaryLight':'#165EC8',
        'gray20':'#F0F0F0',
        'light-blue':'#D4E6FF'
      },
      colors: {
				"btn-primary": "#00337F",
			},
    },
  },
  plugins: [],
}
