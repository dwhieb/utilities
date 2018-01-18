/* eslint-disable
  no-invalid-this
*/

/**
 * Runs a function exactly once, and will not run again
 * @param  {Function} fn      The Function to run once
 * @param  {Object}   context The Object to use as context for this
 * @return {Function}         Returns the Function that, when called, will only run once
 */
export default function once(fn, context) {

  let called = false;

  return function inner(...args) {
    if (called) return;
    called = true;
    return fn.apply(context || this, args);
  };

}
