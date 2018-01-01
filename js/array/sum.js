if ((![].sum) || typeof [].sum !== 'function') {

  /**
   * Array.prototype.sum()
   * @return {Number}                      Returns the sum of the items in the Array.
   */
  Array.prototype.sum = function() {
    return this.reduce((a, b) => a + b);
  };

}
