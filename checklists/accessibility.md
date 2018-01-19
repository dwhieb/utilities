# Accessibility Checklist

A checklist for front-end accessibility. Automate these on a project-by-project basis whenever possible.

## Resources

- [ ] [Inclusive Design Patterns][1]

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

- [ ] Decorative elements should be hidden to assistive technology

- [ ] Do not rely on color alone to convey information

- [ ] Use high-contrast color schemes

## Interactivity

- [ ] Allow user to stop sound or adjust its volume

- [ ] Allow user to turn off any interruptions (server updates, notifications of live regions, etc.)

- [ ] Allow user to continue where they left off

- [ ] User should be able to see which element is focused

- [ ] It should be clear which page the user is currently on

- [ ] The purpose of a link should be clear from a) the link text, b) the text of the containing element, or c) the heading above the link

- [ ] Focusing on an element should not trigger any major changes

- [ ] Controls should not trigger any major changes unless the user expects them to

- [ ] Don't use block-level links. They should be inline.

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
