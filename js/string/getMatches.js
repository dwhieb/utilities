/**
 * Extracts all the matches for a Regular Expression from a String
 * @param  {RegExp} regExp The Regular Expression to match against the String
 * @param  {String} str    The String to match the Regular Expression against
 * @return {Array}     Returns an Array of Arrays consisting of the capturing groups for each match
 */
function getMatches(regExp, str) {

  const matches = [];
  let match     = regExp.exec(str);

  while (match !== null) {
    matches.push(match.slice(1));
    match = regExp.exec(str);
  }

  return matches;

}

export default getMatches;
