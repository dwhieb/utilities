# Front End Checklist

## Performance

- [ ] Inline critical CSS

- [ ] Load non-critical stylesheets asynchronously

  - `rel=preload` - tells browser to download but not apply style
  - `onload` - sets link to stylesheet once it's done loading

  ```html
  <link rel=preload href=styles.css as=style onload="this.rel='stylesheet';">
  ```
