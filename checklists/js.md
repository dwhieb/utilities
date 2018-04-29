# JavaScript Checklist

## Latest Syntax

- [ ] Use Object rest and spread properties

  ```js
  const data1  = { a: 1, b: 2 };
  const data2  = { c: 3, d: 4 };
  const clone  = { ...data };
  const merged = { ...data1, ...data2 };
  ```

- [ ] Use async iterators when appropriate (Node.js v10.x)

  ```js
  const readStream = fs.createReadStream('filename.txt');

  let data = ``;

  for await (const chunk of readStream) data += chunk;
  ```

## Development

* `console.trace()`: Shows where the log is being prompted from.
* `console.time()` & `console.timeEnd()`: Time how long it takes for a process to complete.
* `console.count()`: Keep count of how many times a step occurs.
* `console.clear()`: Clears the console.
* `console.table()`: Print a table of the attributes on a set of Objects.

## Regular Expressions

- [ ] Use the unicode (`u`) and dotAll (`s`) flags by default

- [ ] Used named capture groups in Regular Expressions whenever possible
