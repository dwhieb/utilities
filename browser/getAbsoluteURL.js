/**
 * Gets an absolute URL from a relative or incomplete URL
 * @param  {String} str The String to convert to an absolute URL
 * @return {String}     The absolute URL
 */
export default function getAbsoluteURL(str) {

  const a = document.createElement(`a`);
  a.href = str;
  return a.href;

}
