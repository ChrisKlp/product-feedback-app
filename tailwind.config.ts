import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      colors: {
        purple: '#AD1FEA',
        purpleHighlighted: '#C75AF6',
        blue: '#4661E6',
        blueHighlighted: '#7C91F9',
        darkBlue: '#373F68',
        darkBlueHighlighted: '#656EA3',
        red: '#D73737',
        redHighlighted: '#E98888',
        lightOrange: '#F49F85',
        lightBlue: '#62BCFA',
        darkBlue70: '#647196',
        darkBlue80: '#3A4374',
        gray10: '#F7F8FD',
        gray20: '#F2F4FF',
      },
    },
  },
  plugins: [],
}
export default config
