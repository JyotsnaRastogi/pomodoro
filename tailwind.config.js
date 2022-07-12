/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '20px',
        xl: '24px',
        'display-sm': '24px',
        'display-md': '32px',
        'display-lg': '48px',
        'display-xl': '64px'
      },
      lineHeight: { regular: '1.25', open: '1.5' },
      spacing: {
        '0': '0px',
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '6': '48px',
        '8': '64px',
        '12': '96px',
        '16': '128px',
        '24': '192px',
        '32': '256px',
        '40': '320px',
        '48': '384px',
        '56': '448px',
        '68': '544px',
        '80': '640px',
        '100': '800px',
        '120': '960px',
        '150': '1200px',
        '180': '1440px',
        '0.125': '1px',
        '0.25': '2px',
        '0.375': '3px',
        '0.5': '4px',
        '1.5': '12px',
        '12.5%': '12.5%',
        '25%': '25%',
        '50%': '50%',
        '75%': '75%'
      },
    },
  },
  plugins: [],
}
