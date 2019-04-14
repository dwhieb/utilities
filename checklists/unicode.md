# Unicode

* Sort Unicode strings using [`.localeCompare()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)

* Fuzzy search strings by denormalizing / decomposing the string first, and then removing the diacritical marks:

```js
const original   = `Côte et Ciel`;            // length: 12
const decomposed = original.normalize(`NFD`); // length: 13
const stripped   = decomposed.replace(/[\u0300-\u036f]/gu, '');
// The above Unicode range is the block for diacritical marks
// You may need to add other blocks depending on your use case
```
