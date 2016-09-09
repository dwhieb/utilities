/**
 * Creates a new element with the provided attributes
 * @param  {String} tagName    'div', 'p', etc.
 * @param  {Object} attributes { id: 'nav', textContent: 'text' }
 * @return {Object}            Returns the new HTMLElement
 */
function createElement (tagName, attributes) {
  var el = document.createElement(tagName);
  for (var attribute in attributes) {
    el[attribute] = attributes[attribute];
  }
  return el;
}

/**
 * Initiates download of specified data as a text file
 * @param  {any} data     Any data that can be stringified using JSON.stringify
 * @param  {String} [filename] The name the file should have when downloaded
 */
function download (data, filename) {
  var text = JSON.stringify(data, null, 2);

  // For IE & Edge
  if (window.navigator.msSaveBlob) {
    var file = new Blob([text], { type: 'application/json' });
    window.navigator.msSaveBlob(file, filename);
  // For Chrome & FF
  } else {
    var a = createElement('a', {
      download: filename,
      href: 'data:application/json;charset=utf-8,' + encodeURIComponent(text)
    });
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}

// ARRAY METHODS

/**
 * Array.prototype.includes()
 * Taken from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
 * @type {Function}
 * @returns {Boolean}
 */
if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement /*, fromIndex*/ ) {
    'use strict';
    var O = Object(this);
    var len = parseInt(O.length) || 0;
    if (len === 0) {
      return false;
    }
    var n = parseInt(arguments[1]) || 0;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {k = 0;}
    }
    var currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement === currentElement ||
         (searchElement !== searchElement && currentElement !== currentElement)) { // NaN !== NaN
        return true;
      }
      k++;
    }
    return false;
  };
}

/**
 * Array.prototype.max()
 * @return {Number} Returns the largest value in the Array
 */
if (!Array.prototype.max) {
  Array.prototype.max = function() {
    var newArr = this.filter(function(value) { return value; });
    return Math.max.apply(Math, newArr);
  };
}

/**
 * Array.prototype.mean()
 * @return {Number} Returns the mean value of the items in the Array
 */
if (!Array.prototype.mean) {
  Array.prototype.mean = function() {
    var sum = 0;
    var values = this.filter(function(value) {
      sum += value;
      return value;
    });
    return sum/values.length;
  };
}

/**
 * Array.prototype.median()
 * @return {Number} Returns the median value of the items in the Array
 */
if (!Array.prototype.median) {
  Array.prototype.median = function() {
    this.sort(function(a, b) { return a > b; });
    var half = Math.floor(this.length/2);
    if (this.length%2) { return this[half]; }
    else { return this[half-1] + this[half] / 2; }
  };
}

/**
 * Array.prototype.min()
 * @return {Number} Returns the smallest value in the Array
 */
if (!Array.prototype.min) {
  Array.prototype.min = function() {
    var newArr = this.filter(function(value) { return value; });
    return Math.min.apply(Math, newArr);
  };
}

/**
 * Array.prototype.sum()
 * @return {Number}                      Returns the sum of the items in the Array.
 */
if (!Array.prototype.sum) {
  Array.prototype.sum = function() {
    this.reduce(function(a, b) { return a + b; });
  };
}

/**
 * Array.prototype.unique()
 * @type {Function}
 * @returns {any}      Returns a new Array containing only the unique values of the original Array
 */
 if (![].unique) {
   Array.prototype.unique = function () {
     const o = {};
     this.forEach(item => o[item] = item);
     return [...Object.keys(o)];
   };
 }

// STRING METHODS

/**
 * String.prototype.includes()
 * Taken from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
 * @param {String} string                       The String to check for inclusion.
 * @returns {Boolean}                            Returns whether the String includes the specified value
 */
if (!String.prototype.includes) {
  String.prototype.includes = function() {'use strict';
    return String.prototype.indexOf.apply(this, arguments) !== -1;
  };
}

/**
 * Array.prototype.startsWith()
 * Taken from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
 * @param  {String} string                       The String to check against.
 * @return {Boolean}
 */
if (!String.prototype.startsWith) {
  Object.defineProperty(String.prototype, 'startsWith', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: function(searchString, position) {
      position = position || 0;
      return this.lastIndexOf(searchString, position) === position;
    }
  });
}
