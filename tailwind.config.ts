import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

export default defineConfig({
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: colors.lightBlue[700]
      },
    },
  },
  plugins: [],
})
