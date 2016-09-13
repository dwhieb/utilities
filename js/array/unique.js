if (![].unique) {

  /**
   * Array.prototype.unique()
   * @type {Function}
   * @return {any}      Returns a new Array containing only the unique values of the original Array
   */
  Array.prototype.unique = function () {
    const set = new Set(this);
    return Array.from(set);
  };

}
