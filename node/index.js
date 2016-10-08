module.exports = {
  array: {
    max:    () => require('../js/array/max'),
    mean:   () => require('../js/array/mean'),
    median: () => require('../js/array/median'),
    min:    () => require('../js/array/min'),
    sum:    () => require('../js/array/sum'),
    unique: () => require('../js/array/unique'),
  },

  createHex:    require('./createHex'),
};
