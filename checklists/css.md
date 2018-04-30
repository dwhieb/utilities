# CSS Checklist

* Sort declarations and rules alphabetically
* Use declarations just once
* Prefer classes over IDs or elements (unless the element is part of a component)
* Customize scrolling behavior:
  - `scroll-behavior: smooth;` - Prevents jumps when same-page links are clicked
  - `overscroll-behavior: contain;` - Prevents page from scrolling when the bottom of the current element is reached

## Button Styling

- Design states in the following order:
  1. default
  1. focus
  1. expanded / toggled / selected
  1. disabled
  1. hover
  1. active

- Decide on a consistent voice and style for button labels

- Invert button colors when backgrounds are complicated or change shades drastically

- Limit # of buttons to just the main calls for action. Ideally there should only be 1 button per page (or 1 per component if it's a repeated action, like selecting items from a list).

- Consistently pairing an icon with a button label reinforces meaning and enhances recognition

- Make sure secondary colors are clearly distinguished from disabled or other saturated uses of colors

- Always set a `background-color` for buttons that contrasts with the background behind it, and invert that color when needed.

Resources:
- [Designing Button States][1]
- [Buttons in Design Systems][2]

[1]: https://cloudfour.com/thinks/designing-button-states/
[2]: https://medium.com/eightshapes-llc/buttons-in-design-systems-eac3acf7e23
