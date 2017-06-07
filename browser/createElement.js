/**
 * Creates a new element with the provided attributes
 * @param  {String} tagName    'div', 'p', etc.
 * @param  {Object} [attributes] { id: 'nav', textContent: 'text' }
 * @return {Object}            Returns the new HTMLElement
 */
const createElement = (tagName, attributes = {}) => {

  if (typeof tagName !== 'string') throw new Error('The `tagName` argument must be a string.');

  const el = document.createElement(tagName);

  Object.assign(el, attributes);

  return el;

};

export default createElement;
