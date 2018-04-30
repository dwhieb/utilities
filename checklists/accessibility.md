# Accessibility Checklist

A checklist for front-end accessibility. Automate these on a project-by-project basis whenever possible.

## Resources

- [ ] [Inclusive Design Patterns][1]
- [ ] [Creating Accessible Tables][3]

## Testing

- [ ] Navigate with tab / keyboard only
- [ ] Resize text up to 200%
- [ ] Turn off stylesheets
- [ ] Turn off JavaScript

## Perceivability

- [ ] Everything on the page should have accompanying text
  - [ ] Images have `alt` attribute
  - [ ] UI controls (buttons, text inputs) should have names and/or labels telling the user what they do
  - [ ] Video or audio should have accompanying text saying what they are (as well as transcripts)
  - [ ] Add captions to videos
  - [ ] Avoid using images of text
  - [ ] The webpage should have a proper `<title>`
  - [ ] Provide section headings
  - [ ] Label form elements
  - [ ] Add `<caption>`s to tables
  - [ ] Add structure to tables using `<thead>`, `<tfoot>` and `<tbody>`
  - [ ] Use the `scope=row|col` attribute for `<th>` elements
    - You could also use the `id` and `headers` attributes to link `<td>` elements to both their `<th>` header elements
  - [ ] Use `aria-label` on `<a>` elements to have that text read instead of the text inside the link. Useful when your visual text isn't descriptive enough.

- [ ] Decorative elements should be hidden to assistive technology
  - Make non-informative images background images where possible, or leave their `alt` attribute blank (but don't omit it)

- [ ] Do not rely on color alone to convey information or state changes

- [ ] Use high-contrast color schemes

- [ ] Use `.visually-hidden` rather than `display: none;` to hide something visually but leave it accessible to screen readers.

  ```css
  .visually-hidden {
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(1px);
    display: block;
    height: 1px;
    overflow: hidden;
    position: absolute;
    visibility: hidden;
    white-space: nowrap;
    width: 1px;
  }
  ```

- [ ] Use ARIA live regions to announce content changes
  - Use both `role=status` and `aria-live=polite`

## Interactivity

- [ ] Include a `<noscript>` fallback for assets loaded with JavaScript

- [ ] Allow user to stop sound or adjust its volume

- [ ] Allow user to turn off any interruptions (server updates, notifications of live regions, etc.)

- [ ] Allow user to continue where they left off when they reload the page

- [ ] It should be clear which page the user is currently on

- [ ] The purpose of a link should be clear from a) the link text, b) the text of the containing element, or c) the heading above the link

- [ ] Controls should not trigger any major changes unless the user expects them to

- [ ] Don't use block-level links. They should be inline.

- [ ] Do not open links in a new tab (`target=_blank`). Users can do this on their own, and it deprives them of the ability to *not* open items in a new tab.

- [ ] Add keyboard shortcuts for anything that can be clicked.

- [ ] Include an explicit close button on dialog boxes

- [ ] [Use accessible download links][2] (rather than download buttons)

### Focus Management

- [ ] User should be able to see which element is focused. If it's interactive, it should have a focus style. Use the `:focus` and `:active` selectors.

- [ ] Resting, focused, and active styles should all be distinguished.

- [ ] Focusing on an element should not trigger any major changes

- [ ] Make non-focusable elements (such as `<p>`, `<h1>`, `<div>`) focusable by adding a `tabindex=0` attribute. Avoid using a value other than 0.

- [ ] Use JavaScript to focus on elements when it would be naturally expected (e.g. a popup dialog, or when it closes)

## Understandability

- [ ] Identify the language of the page: `<html lang=en>`

- [ ] Specify when content appears in another language

- [ ] Use internationalized, non-idiomatic language, targeted at an 8th-grade reading level

- [ ] Use the `<abbr>` element for abbreviations

- [ ] Communicate mistakes to users when filling out forms, using text, including how to fix it

- [ ] Include labels or instructions in your forms

- [ ] User should be able to undo, correct, or review and confirm data before/after submission

- [ ] Content that appears in the same place with similar functionality should have the same text and functionality across pages (e.g. search boxes, text areas, navigation)

## Header

- [ ] Add `role=banner` to the header banner (not all readers can figure out which is the main header)

## Navigation

- [ ] Consider adding an extra Accessibility Menu specifically designed to be simple and navigable with a keyboard, with a consistent keyboard command to access it from anywhere on the site (e.g. `opt + /` is what Facebook does).

- [ ] Consider adding keyboard shortcuts (with instructions on which shortcuts do what). If the site has certain key pages, mapping them to hotkeys may also be a good idea.

- [ ] Use skip links that allow the user to skip to the main content, or to the nav if it's not already at the top of the page. You can make this visible only on focus (cf. GitHub).

  ```html
  <header role=banner>
    <h1>Page Title</h1>
    <a href=#main>Skip to main content</a>
  </header>
  ```

- [ ] Use `<nav>`, containing an unordered list `<ul>`

- [ ] Place navigation elements in the same place on each page

- [ ] Identify the current page visually and to assistive technologies with `aria-described-by`:

  ```html
  <nav id=nav>

    <ul>
      <li>
        <a {{#if home}} href=#home aria-describedby=current {{else}} href=/home {{/if}} >Home</a>
      </li>
    </ul>

    <div hidden id=current>Current Page</div>

  </nav>
  ```

- [ ] Clicking on the current page's link should take user to the `<main>` element (e.g. `href=#main|home|etc.`) rather than reloading the page (unless it's a single-page app, where the reader saying 'same page' isn't quite appropriate)

[1]: https://www.amazon.com/Inclusive-Design-Patterns-Heydon-Pickering-ebook/dp/B01MAXK8XR/ref=sr_1_2?ie=UTF8&qid=1516318100&sr=8-2&keywords=inclusive+design
[2]: https://css-tricks.com/building-good-download-button/
[3]: https://inclusive-components.design/data-tables/?utm_source=CSS-Weekly&utm_campaign=Issue-309&utm_medium=web
