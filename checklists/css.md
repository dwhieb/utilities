# CSS Checklist

## Tools
* [CSS Debugger](https://medium.freecodecamp.org/heres-my-favorite-weird-trick-to-debug-css-88529aa5a6a3)

## General

* Aim for responsive, mobile-first design

* Sort declarations and rules alphabetically

* Use declarations just once

* Always use classes rather than IDs, elements, or attribute selectors. Classes force you to provide a semantic, readable label for *what* the component is.

* Use semantic class names (e.g. `cup-handle`) rather than descriptive ones (e.g. `red`)

* Separate code for appearance and layout. _appearance_ refers to how the item looks, while _layout_ refers to how that content is styled in relation to the content around it (or how content is styled in relation to each other).

* Design should be responsive both vertically and horizontally (don't let items take up too much/litte vertical  screen space, on narrow or wide devices)

* Don't use a CSS reset or universally-applied styles

  - If a style needs to be applied, use a class
  - All styling is applied to some layout / component - make it explicit

* Avoid nested selectors except for:

  - state changes
  - theme changes
  - sub-components

## Images

- Cheating:

```css
.image {
  background-image: url('image.png');
  background-size:  cover;
}
```

- Future:

```css
.image {
  height:     10rem;
  object-fit: cover;
  width:      10rem;
}
```

- Simple:

```css
.image {
  height:    auto;
  max-width: 10rem;
  width:     100%;
}
```

- `<picture>` tag with `srcset`

```html
<picture>
  <source media="(max-width: 799px)" srcset="elva-480w.jpg">
  <source media="(min-width: 800px)" srcset="elva-800w.jpg">
  <img src="elva-800w.jpg">
</picture>
```

## Miscellaneous

* Customize scrolling behavior:
  - `scroll-behavior: smooth;` - Prevents jumps when same-page links are clicked
  - `overscroll-behavior: contain;` - Prevents page from scrolling when the bottom of the current element is reached

* Use `flex-basis` to force a flex row to wrap on narrow screens (avoids the need for a media query)
