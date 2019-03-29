# Patterns

## Action Pattern

(https://ponyfoo.com/articles/action-pattern-clean-obvious-testable-code)

1. Any code that involves multiple steps should be moved into its own file/module.

1. That file/module should be given a name that describes what those steps lead up to.

1. Each step in that code should be a single function with a name that describes exactly what it does.

1. If the code fails, it should be easy to see exactly _where_ it fails.

**Example**

```js
const actionMethod = (someOption) => {
  try {
    console.log('Do something with someOption', someOption);
    // Perform a single step in your action here.
  } catch (exception) {
    throw new Error(`[actionName.actionMethod] ${exception.message}`);
  }
};

const validateOptions = (options) => {
  try {
    if (!options) throw new Error('options object is required.');
    if (!options.someOption) throw new Error('options.someOption is required.');
  } catch (exception) {
    throw new Error(`[actionName.validateOptions] ${exception.message}`);
  }
};

export default (options) => {
  try {
    validateOptions(options);
    actionMethod(options.someOption);
    // Call action methods in sequence here.
  } catch (exception) {
    throw new Error(`[actionName] ${exception.message}`);
  }
};
```
