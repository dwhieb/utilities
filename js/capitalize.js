/**
 * Capitalizes the first letter of a string
 * @param  {String} string The string to capitalize
 * @return {String}        Returns the capitalized string
 */
export default string => string.charAt(0).toUpperCase() + string.slice(1);
