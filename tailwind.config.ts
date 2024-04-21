import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'
import containerQueries from '@tailwindcss/container-queries'

export const statusColors = {
  sPurple: '#AD1FEA',
  sOrange: '#F49F85',
  sCyan: '#62BCFA',
}

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          md: '2.5rem',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      colors: {
        '@purple': {
          400: '#C75AF6',
          500: '#AD1FEA',
        },
        '@blue': {
          100: '#F7F8FD',
          200: '#F2F4FF',
          300: '#CFD7FF',
          400: '#7C91F9',
          500: '#4661E6',
          700: '#656EA3',
          800: '#373F68',
          900: '#3A4374',
        },
        '@gray': '#647196',
        '@red': {
          400: '#E98888',
          500: '#D73737',
        },
        ...statusColors,
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
