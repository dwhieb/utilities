# Typography Checklist

- [ ] A measure (paragraph) width of about 60rem is best (this is a maximum). The measure will increase with the font size if rem units are used.

- [ ] Avoid justified text

- [ ] Use CSS `hyphens` property (be language-specific if necessary)

- [ ] Use a minimum line-height ("leading") of 1.5 on `<body>`

- [ ] Use smart quotes where appropriate

  ```
  &#8216; = opening single quote
  &#8217 = closing single quote
  &#8220 = opening double quote
  &#8221 = closing double quote
  ```

- [ ] Use en dashes for series (`&#8211;`)

- [ ] Use em dashes for parenthetical offsets (`&#8212;`)

- [ ] Use high-contrast text and background colors

- [ ] Use improved underlining.

  - Option 1: border-bottom

  - Option 2: background gradient and text shadow

    ```css
    p a {
      text-decoration: none;
      text-shadow: 0.05em 0 0 #fff, -0.05em 0 0 #fff,
          0 0.05em 0 #fff, 0 -0.05em 0 #fff,
          0.1em 0 0 #fff, -0.1em 0 0 #fff,
          0 0.1em 0 #fff, 0 -0.1em 0 #fff;
      background-image: linear-gradient(to right, currentColor 0%, currentColor 100%);
      background-repeat: repeat-x;
      background-position: bottom 0.05em center;
      background-size: 100% 0.05em;
    }
    ```

- [ ] Indicate focus on links
  - [ ] Make sure the element is focusable
  - [ ] Make sure the element is visible
  - [ ] Make sure the focus state of the element is visible

- [ ] Identify external links (using an external link icon next to the anchor) and pseudo-content before/after that identifies it as an external link using text

  ```css
  [href^="http"]:not([href*="danielhieber.com"])::after {}
  ```

- [ ] Set font size to 100%

  ```css
  body { font-size: 100%; }
  ```

- [ ] Consider scaling font size to viewport, with a minimum threshold

  ```css
  body { font-size: calc(1em + 1vw); }
  ```

- [ ] Use comfortable amounts of white space around all text
