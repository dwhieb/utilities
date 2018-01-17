// documentation here: https://davidwalsh.name/javascript-debounce-function
export default (func, wait, immediate) => {

  let timeout;

  return function debounce(...args) {

    const later = () => {
      timeout = null;
      if (!immediate) func.apply(this, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(this, args);

  };

};
