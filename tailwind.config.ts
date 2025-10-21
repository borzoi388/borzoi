import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary_1: '#d48c42',
        primary_2: '#dd645b',
        outline: '#662e7e',
        secondary: '#f8f1da',
        tertiary: 'ae66c5',
        accent: '##9e2c24',
      }
    },
  },
  plugins: [],
}

export default config;