# CSS Checklist

## General
* Aim for responsive, mobile-first design
* Sort declarations and rules alphabetically
* Use declarations just once
* Prefer classes over IDs or elements (unless the element is part of a component)
* Use semantic class names (e.g. `cup-handle`) rather than descriptive ones (e.g. `red`)
* Design should be responsive both vertically and horizontally (don't let items take up too much/litte vertical screen space, on narrow or wide devices)

## Miscellaneous

* Customize scrolling behavior:
  - `scroll-behavior: smooth;` - Prevents jumps when same-page links are clicked
  - `overscroll-behavior: contain;` - Prevents page from scrolling when the bottom of the current element is reached

* Use `flex-basis` to force a flex row to wrap on narrow screens (avoids the need for a media query)
