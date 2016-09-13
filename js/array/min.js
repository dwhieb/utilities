if (![].min) {

  /**
  * Extends the Array object with a .min() method
  * @method min
  * @return {Number} Returns the smallest value in the array
  */
  Array.prototype.min = function min() {
    const arr = this.filter(val => val);
    return Math.min.apply(Math, arr);
  };

}
