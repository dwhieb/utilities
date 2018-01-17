/**
 * Creates a new element with the provided attributes
 * @param  {String}      tagName      'div', 'p', etc.
 * @param  {Object}      [attributes] { id: 'nav', textContent: 'text' }
 * @return {HTMLElement}              Returns the new HTMLElement
 */
export default function createElement(tagName, attributes = {}) {

  if (typeof tagName !== `string`) throw new Error(`The tagName argument must be a String.`);

  const el = document.createElement(tagName);

  Object.assign(el, attributes);

  return el;

}
