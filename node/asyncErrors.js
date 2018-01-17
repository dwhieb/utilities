/**
 * Catches any asynchronous errors in Express middleware, and passes them along the middleware chain as usual. Best to use this when defining the middleware, rather than in each individual route.
 * @param  {Function} fn The middleware function to wrap
 * @return {Function}
 * @example
 *
 * router.get('home', asyncErrors(async (req, res, next) => {
 *   // do stuff asynchronously
 * }));
 */
const asyncErrors = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = asyncErrors;
