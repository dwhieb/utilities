# Forms

* iOS will not submit a form without a `type=submit` button present.

- [ ] Label form elements

- [ ] Include labels or instructions in your forms

- [ ] Hide form elements and style proxy content instead, when appropriate ([guide][1])

- [ ] Use `ev.preventDefault()` and `form.submit()` to run any script that needs to before submitting the form.

- [ ] Use placeholders in inputs for *hints* not instructions. Directions and instructions should either be separate text, or understandable from the field's label.

- [ ] Style placeholder text as needed to achieve appropriate contrast ratios

  ```css
  /* NB: Each rule is in a separate declaration block rather than a comma-delimited list. Browsers will not parse a combined block if it contains unrecognized, proprietary selectors.) */

  ::placeholder {
    color: #000;
    font-style: italic;
  }

  ::-webkit-input-placeholder {
    color: #000;
    font-style: italic;
  }

  ::-moz-placeholder {
    color: #000;
    font-style: italic;
  }
  ```

- [ ] Don't use `<fieldset>` to stylistically group elements. Only use it for a functional grouping of inputs that share a common field label.

## Validation

- [ ] Communicate mistakes to users when filling out forms, using text and an ARIA live region, including how to fix it. You can use a form-specific ARIA live region, which displays only when an error or warning is being communicated:

  ```html
  <div id="error" aria-live="assertive" role="alert">
    <p>
      <svg role="img" aria-label="error:">
        <use xlink:href="#error"></use>
      </svg>
      <span>Please make sure all your registration information is correct.</span>
    </p>
  </div>
  ```

  ```css
  #error:empty {
      display: none;
  }
  ```

- [ ] User should be able to undo, correct, or review and confirm data before/after submission

- [ ] Delay input validation until a) the form is submitted, b) focus has left the input, or c) a short time delay (e.g. 3s, using a debounce function).

- [ ] Consider not using the `required` attribute, as this immediately marks fields as invalid from the outset.

[1]: http://wtfforms.com
