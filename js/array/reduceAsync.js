Array.prototype.reduceAsync = function reduceAsync(asyncFunc) {
  return this.reduce(async (p, item) => {
    await p;
    await asyncFunc(item);
  }, Promise.resolve());
};
