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
      colors: {
        "primary": "#00337F",
        "primary-light": "#165EC8",
        "secondary-yellow": "#E7A511",
        "secondary-red": "#D84315",
        "light-yellow": "#FFEEC1",
        "light-blue": "#D4E6FF",
				"btn-primary": "#00337F",
        "gray-20": "#F0F0F0",
        "gray-30": "#212121",
        "gray-60": "#737575",
        // "skyblue-jumbotron": "#D4E6FF",
			},
    },
  },
  plugins: [],
}
