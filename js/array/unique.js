/**
 * Accepts an Array and returns an Array of only the unique items in that Array.
 * @param  {Array} arr The Array to find unique items in
 * @return {Array}     An Array of unique items
 */
export default arr => Array.from(new Set(arr));
