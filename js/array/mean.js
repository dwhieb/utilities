if (![].mean) {

  /**
  * Array.prototype.mean()
  * @return {Number} Returns the mean value of the items in the Array
  */
  Array.prototype.mean = function mean() {

    var sum = 0;

    const values = this.filter(val => {
      if (val) sum += val;
      return val;
    });

    return sum / values.length;

  };

}
