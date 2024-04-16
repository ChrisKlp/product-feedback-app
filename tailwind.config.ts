import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'
import containerQueries from '@tailwindcss/container-queries'

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
        blue100: '#F7F8FD',
        blue200: '#F2F4FF',
        blue300: '#CFD7FF',
        blue500: '#4661E6',
        blueHighlighted: '#7C91F9',
        darkBlue: '#373F68',
        darkBlueHighlighted: '#656EA3',
        red: '#D73737',
        redHighlighted: '#E98888',
        lightOrange: '#F49F85',
        lightBlue: '#62BCFA',
        darkBlue700: '#647196',
        darkBlue800: '#3A4374',
      },
      borderRadius: {
        dlg: '10px',
      },
      boxShadow: {
        blue: '0 10px 40px -7px rgba(55, 63, 104, 0.35)',
      },
    },
  },
  plugins: [containerQueries],
}
export default config
