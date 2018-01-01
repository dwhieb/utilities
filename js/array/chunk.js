Array.prototype.chunk = function chunk(len) {

  const chunked = [];

  for (let i = 0; i < this.length; i += len) {
    chunked.push(this.slice(i, i + len));
  }

  return chunked;

};
