module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Roboto', "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe\\ UI", "Helvetica\\ Neue", "Arial", "Noto\\ Sans", "sans-serif", "Apple\\ Color\\ Emoji", "Segoe\\ UI\\ Emoji", "Segoe\\ UI\\ Symbol", "Noto\\ Color\\ Emoji"]
    },
    extend: {
      backgroundImage: {
        'top-blue-curve': "url('../assets/top-blue-curve.svg')",
        'bottom-blue-curve': "url('../assets/bottom-blue-curve.svg')"
      }
    }
  },
  plugins: [],
}
