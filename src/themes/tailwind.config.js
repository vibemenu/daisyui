const emNotRem = require('../emNotRem');

module.exports = {
  content: [
    { raw: '' },
  ],
  corePlugins: {
    preflight: false,
  },
  daisyui: {
    base: false,
  },
<<<<<<< HEAD
  theme:{
    ...emNotRem
  },
  plugins: [
    require('../../index'),
  ],
}
=======
  plugins: [require("../index")],
};
>>>>>>> bb7e3f523b3be1fc73373b0f0ce6577f5eebd8b5
