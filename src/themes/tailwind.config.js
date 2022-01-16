const emNotRem = require('../emNotRem');

module.exports = {
  corePlugins: {
    preflight: false,
  },
  daisyui: {
    base: false,
  },
  theme:{
    ...emNotRem
  },
  plugins: [
    require('../../index'),
  ],
}
