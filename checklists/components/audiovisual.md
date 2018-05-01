# Audiovisual Elements

## Images

- [ ] Images have `alt` attribute

- [ ] Avoid using images of text

- [ ] Avoid contentful images and iconography in pseudo-elements, as there is no possible way to provide alternative text for these.

- [ ] Make non-informative images background images where possible, or leave their `alt` attribute blank (but don't omit it). This makes them hidden to assistive technology.

- [ ] Make SVGs accessible:
  - [ ] Add a `<title>` element as the first element in the SVG, and a `aria-labelledby="title"` attribute to the `<svg>` element itself.
  - [ ] Add a `<desc>` element after the `<title>` element that provides more detailed information about the content of the image
  - [ ] Add `role=img` to the `<svg>` tag (if it is in fact an image and not something else, like a graph, etc.)

## Audio / Video

- [ ] Video or audio should have accompanying text saying what they are (as well as transcripts)

- [ ] Add captions to videos
