/**
 * Runs an Array of Promises in sequence. Each Promise finishes before the next is called.
 * @param  {Array}   arr The Array of Promises to run
 * @return {Promise}     Returns a Promise that resolves when all the Promises are complete
 */
export default arr => asyncFunc => arr.reduce(async (p, item) => {
  await p;
  await asyncFunc(item);
}, Promise.resolve());
