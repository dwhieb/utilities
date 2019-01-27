# Fonts Checklist

## Performance

- [ ] Serve the font from a CDN

- [ ] Cache fonts using Web Workers

- [ ] Preload critical fonts

  - The `<link>` to preload the font needs to precede the CSS containing the `@font-face` directive (preferably immediately before)

    ```html
    <link href=fonts/FiraSans-Light.woff2 rel=preload as=font type=font/woff2 crossorigin>
    ```
- [ ] Consider using the Font Observer API to render fonts only when they've loaded (will cause FOUT)

- [ ] Use `font-display` in font declarations

  - Use `optional` for optional fonts (or when fallback is extremely similar to first font)
  - Use `fallback` for non-critical fonts (1s FOIT, 3s to load before fallback)
  - Use `swap` for Flash of Unstyled Text (FOUT)
  - Use `block` for Flash of Invisible Text (FOIT)
  - [More details on `font-display`][5]

### Subsetting Fonts

- [ ] Use Font Squirrel or the command line tool `pyftsubset` to subset (NB: Font Squirrel's subsetting isn't compatible with variable fonts)

- [ ] Create 2 font files: one that's subset with the characters you're likely to use, and one that contains the remaining characters from the font

- [ ] Use the `unicode-range` property in the font-face declaration to indicate that a font should only be downloaded when characters are needed from that Unicode range.
  - This is really useful for gigantic fonts like Google's Noto Sans, which supports all languages, but is a download over 1GB).
  - Make sure the `unicode-range` property matches the Unicode ranges of the subsetted font files.
  - [More details on subsetting][4]

## Compatibility & Support

- [ ] Use common fallbacks and generic types for all font-family declarations

  ```css
  html {
    font-family: 'Fira Sans', 'Lucida Sans', sans-serif;
  }
  ```

- [ ] Use the [Font Style Matcher][6] for fallback fonts

- [ ] Target local, WOFF, and WOFF2 fonts for broad browser support

## Resources
  - [Web Font Loading Patterns][1]
  - [Font Loading Strategies][2]
  - [Web Font Optimization][3]
  - [Font Style Matcher][6]
  - [Font Events][7]
  - [Variable Fonts][8]

[1]: https://www.bramstein.com/writing/web-font-loading-patterns.html?utm_source=CSS-Weekly&utm_campaign=Issue-211&utm_medium=web
[2]: https://www.zachleat.com/web/comprehensive-webfonts/?utm_source=CSS-Weekly&utm_campaign=Issue-224&utm_medium=web
[3]: https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization?utm_source=CSS-Weekly&utm_campaign=Issue-233&utm_medium=web
[4]: https://css-tricks.com/three-techniques-performant-custom-font-usage/
[5]: https://css-tricks.com/font-display-masses/
[6]: https://meowni.ca/font-style-matcher/
[7]: https://jonsuh.com/blog/font-loading-with-font-events/
[8]: https://v-fonts.com/
