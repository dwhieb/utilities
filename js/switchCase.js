const executeIfFunction = f => (typeof f === `function` ? f() : f);

const switchCase = cases => defaultCase => key => (cases.hasOwnProperty(key) ? cases[key] : defaultCase);

/**
 * Accepts an Object of cases and the resulting values, which may either be Functions or static values.
 * @param  {Object} cases A hash of cases and the values to evaluate to for each case
 * @return {Any}          Returns the value of the matched case
 * @example
 *
 * const getDay = switchcase({
 *   0: 'Sunday',
 *   1: 'Monday',
 *   2: 'Tuesday',
 *   3: 'Wednesday',
 *   4: 'Thursday',
 *   5: 'Friday',
 *   6: 'Saturday',
 * })('Unknown');
 *
 * getDay(0); // --> "Sunday"
 * getDay(9); // --> "Unknown"
 */
export default cases => defaultCase => key => executeIfFunction(switchCase(cases)(defaultCase)(key));
