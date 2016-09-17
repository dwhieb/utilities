if ((![].max) || typeof [].max !== 'function') {

  /**
  * Extends the Array object with a .max() method
  * @method max
  * @return {Number} Returns the largest value in the array
  */
  Array.prototype.max = function max() {
    const arr = this.filter(val => val);
    return Math.max.apply(Math, arr);
  };

}
