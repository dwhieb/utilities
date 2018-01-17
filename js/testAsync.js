/**
 * A wrapper for asynchronous Jasmine tests
 * @param  {Function} asyncFunc The asynchronous Jasmine test function to wrap
 * @return {Function}
 */
export default asyncFunc => done => asyncFunc().then(done).catch(done.fail);
