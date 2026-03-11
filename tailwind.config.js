/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
        extend: {
            colors: {
            cream: '#F5F0E8',
            ivory: '#FAF7F2',
            navy: {
                DEFAULT: '#1A2744',
                light: '#243461',
                dark: '#0F1A30',
            },
            gold: {
                DEFAULT: '#C9A84C',
                light: '#E8C97A',
                light_2: '#8C7B6B',
            },
            ink: '#2C2417',
            muted: '#6d727e',
            rose: '#C4746E',
            sage: '#6B8C7B',
            }
        }
    },
  plugins: [],
}