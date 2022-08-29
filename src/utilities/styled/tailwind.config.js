const plugin = require('tailwindcss/plugin')
const emNotRem = require('../../emNotRem');
const responsiveRegex = require("../../lib/responsiveRegex");
module.exports = {
  content: [
    { raw: '' },
  ],
  safelist: responsiveRegex,
  theme: {
    colors: require("../../colors"),
    ...emNotRem
  },
  plugins: [
    plugin(function ({ addBase, addUtilities }) {
      addBase(require("../../../dist/base"));
      addUtilities(require("../../../dist/utilities"), {
        variants: ["responsive"],
      });
    }),
  ],
};
