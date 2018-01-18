/**
 * A wait function that returns a Promise
 * @param  {Number} timeout The wait time in milliseconds
 * @return {Promise}
 */
export default timeout => new Promise(resolve => setTimeout(resolve, timeout));
