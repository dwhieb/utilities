const fiveMinutes = 300000; // milliseconds

const wait = timeout => new Promise(resolve => setTimeout(resolve, timeout));

/**
 * Checks for a condition at specified intervals. Includes a timeout option.
 * @param  {Function} fn                    A Function that checks for the condition and returns a Boolean
 * @param  {Number}   interval              The interval to check for the condition on, in milliseconds
 * @param  {Number}   [timeout=fiveMinutes] How long to poll before an error is thrown
 * @return {Promise}                        Returns a Promise when the condition is met
 */
export default function poll(fn, interval, timeout = fiveMinutes) {

  const endTime = Number(new Date()) + timeout;

  const checkCondition = async () => {

    // check whether condition is met
    const result = fn();

    // resolve if condition is met
    if (result) return;

    // throw an error if the timeout has been met
    if (Number(new Date()) > endTime) throw new Error(`Timeout met for ${fn}`);

    // wait and check again
    await wait(interval);
    return checkCondition();

  };

  return checkCondition();

}
