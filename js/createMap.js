/**
 * Creates a Map object from a regular Object
 * @param  {Object} [obj={}] The Object to transform into a Map
 * @return {Map}
 */
export default (obj = {}) => new Map(Object.entries(obj));
