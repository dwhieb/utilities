# Fonts Checklist

- [ ] Use `font-display` in font declarations
  - Use `optional` for optional fonts
  - Use `fallback` for non-critical fonts (1s FOIT, 3s to load before fallback)
  - Use `swap` for Flash of Unstyled Text (FOUT)
  - Use `block` for Flash of Invisible Text (FOIT)

- [ ] Target local, WOFF2, and WOFF fonts

- [ ] Preload critical fonts: `rel=preload as=font type=font/woff2`

- [ ] Use common fallbacks and generic types for all font-family declarations
  - e.g. `font-family: 'Fira Sans', 'Lucida Sans', sans-serif;`

- [ ] Subset fonts

- [ ] Use the Font Observer API

## Resources
  - [Web Font Loading Patterns][1]
  - [Font Loading Strategies][2]
  - [Web Font Optimization][3]

  [1]: https://www.bramstein.com/writing/web-font-loading-patterns.html?utm_source=CSS-Weekly&utm_campaign=Issue-211&utm_medium=web
  [2]: https://www.zachleat.com/web/comprehensive-webfonts/?utm_source=CSS-Weekly&utm_campaign=Issue-224&utm_medium=web
  [3]: https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization?utm_source=CSS-Weekly&utm_campaign=Issue-233&utm_medium=web
