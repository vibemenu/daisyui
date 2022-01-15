const plugin = require('tailwindcss/plugin')
module.exports = {
  theme: {
    colors: require('../../colors'),
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125em',
      1: '0.25em',
      1.5: '0.375em',
      2: '0.5em',
      2.5: '0.625em',
      3: '0.75em',
      3.5: '0.875em',
      4: '1em',
      5: '1.25em',
      6: '1.5em',
      7: '1.75em',
      8: '2em',
      9: '2.25em',
      10: '2.5em',
      11: '2.75em',
      12: '3em',
      14: '3.5em',
      16: '4em',
      20: '5em',
      24: '6em',
      28: '7em',
      32: '8em',
      36: '9em',
      40: '10em',
      44: '11em',
      48: '12em',
      52: '13em',
      56: '14em',
      60: '15em',
      64: '16em',
      72: '18em',
      80: '20em',
      96: '24em'
    },
		fontSize: {
			'xs': '.75em',
			'sm': '.875em',
			'tiny': '.875em',
			'base': '1em',
			'lg': '1.125em',
			'xl': '1.25em',
			'2xl': '1.5em',
			'3xl': '1.875em',
			'4xl': '2.25em',
			'5xl': '3em',
			'6xl': '4em',
			'7xl': '5em',
		      }
  },
  corePlugins: [
    'animation',
    'backgroundColor',
    'backgroundImage',
    'borderColor',
    'divideColor',
    'gradientColorStops',
    'placeholderColor',
    'preflight',
    'ringColor',
    'ringOffsetColor',
    'ringOffsetWidth',
    'ringOpacity',
    'ringWidth',
    'textColor',
    'transitionProperty',
  ],
  plugins: [
    plugin(function({ addBase, addUtilities, addComponents }) {
      addBase(require('../../dist/base'))
      addComponents(require('../../dist/styled'))
      addUtilities(require('../../dist/utilities'),{ variants: ['responsive'] })
      addUtilities(require('../../dist/utilities-unstyled'),{ variants: ['responsive'] })
      addUtilities(require('../../dist/utilities-styled'),{ variants: ['responsive'] })
    })
  ],
}
