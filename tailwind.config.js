// https://mertjf.github.io/tailblocks
// https://github.com/mattwaler/tea-stack
// https://github.com/jorenvanhee/tailwindcss-debug-screens
// https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss

module.exports = {
  theme: {
    debugScreens: {
      ignore: ['dark'],
    },
    // https://v1.tailwindcss.com/docs/breakpoints
    // https://v1.tailwindcss.com/docs/breakpoints#custom-media-queries
    extend: {
      screens: {
        'custom-tablet': {
          'min': '600px',
          'max': '740px'
        }
      }
    }
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/custom-forms'),
    require('@tailwindcss/typography'),
  ],
  // scans template files for class strings and remove unused css from bundle
  purge: [
    './src/**/*.js',
    './src/**/*.njk',
    './src/**/*.svg',
  ]
}
