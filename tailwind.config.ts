import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      transparent: 'transparent',
      'purple-secundary': '#8A5CC2',
      'purple-primary': '#713BB3',
      'green-primary': '#4ED3AF',
      'green-secundary': '#3FA585',
      'white-primary' : '#FFFFFF',
      'purple-white' : '#E9D8FF',
      'muted-foreground' : '#F6F6F6',
      'dark-muted-foreground': '#100B00'
    },
    extend: {},
  },
  plugins: [],
}
export default config
