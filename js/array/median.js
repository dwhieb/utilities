if ((![].median) || typeof [].median !== 'function') {

  /**
   * Array.prototype.median()
   * @return {Number} Returns the median value of the items in the Array
   */
  Array.prototype.median = function median() {
    this.sort((a, b) => a > b);
    const half = Math.floor(this.length / 2);
    if (this.length % 2) return this[half];
    return this[half - 1] + (this[half] / 2);
  };

}
