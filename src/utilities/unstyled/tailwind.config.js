const plugin = require('tailwindcss/plugin')
const emNotRem = require('../../emNotRem');
module.exports = {
  theme: {
    colors: require('../../../colors'),
    ...emNotRem
  },
  plugins: [
    plugin(function({ addBase, addUtilities }) {
      addBase(require('../../../dist/base'))
      addUtilities(require('../../../dist/utilities'),{ variants: ['responsive'] })
    })
  ],
}
