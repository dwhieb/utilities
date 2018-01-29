# Front End Checklist

- [ ] Responsive design (mobile-first)

- [ ] 404 and 500 error pages

- [ ] Include a `<noscript>` fallback for assets loaded with JavaScript

- [ ] [Accessibility checklist][2]

- [ ] [Font checklist][1]

- [ ] [HTML checklist][3]

## Performance

- [ ] Defer (lazy-load) non-critical CSS and JS (with appropriate `<noscript>` fallbacks as needed)

  ```html
  <link rel=preload href=path/to/mystylesheet.css as=style onload="this.rel='stylesheet'">
  ```

- [ ] Use web workers to cache assets for quick loading

## Resources

- [Front End Checklist][4]

[1]: https://github.com/dwhieb/utilities/blob/master/checklists/fonts.md
[2]: https://github.com/dwhieb/utilities/blob/master/checklists/accessibility.md
[3]: https://github.com/dwhieb/utilities/blob/master/checklists/html.md
[4]: https://github.com/thedaviddias/Front-End-Checklist
