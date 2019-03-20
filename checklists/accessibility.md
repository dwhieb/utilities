# Accessibility Checklist

A checklist for front-end accessibility. Automate these on a project-by-project basis whenever possible.

- [Inclusive Design Patterns][1]
- WAVE Chome Extension

## Principles

1. Give users choice and put them in control.
1. Design with familiarity in mind.
1. Prioritize features that add value.

## Testing

- [ ] Navigate with tab / keyboard only
- [ ] Resize text up to 200%
- [ ] Turn off stylesheets
- [ ] Turn off JavaScript

## Perceivability

- [ ] Use temporary content to indicate when something is loading or being waited on

- [ ] Everything on the page should have accompanying text

- [ ] UI controls (buttons, text inputs) should have names and/or labels telling the user what they do

- [ ] Decorative elements should be hidden to assistive technology

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

- [ ] Use the `hidden` attribute on elements to hide them from both screen readers and on screen

- [ ] Use ARIA live regions to announce content changes
  - Use both `role=status` and `aria-live=polite`

- [ ] Create alternative routes / interfaces to receive the same content when needed

## Interactivity

- [ ] Include a `<noscript>` fallback for assets loaded with JavaScript

- [ ] Allow user to stop sound or adjust its volume

- [ ] Allow user to turn off any interruptions (server updates, notifications of live regions, etc.)

- [ ] Allow user to continue where they left off when they reload the page

- [ ] It should be clear which page the user is currently on

- [ ] Controls should not trigger any major changes unless the user expects them to

- [ ] Add keyboard shortcuts for anything that can be clicked

- [ ] Include an explicit close button on dialog boxes

- [ ] Use the following ARIA landmarks
  - banner
  - complementary
  - contentInfo
  - main
  - navigation
  - search

### Focus Management

- [ ] User should be able to see which element is focused. If it's interactive, it should have a focus style. Use the `:focus` and `:active` selectors.

- [ ] Resting, focused, and active styles should all be distinguished.

- [ ] Focusing on an element should not trigger any major changes

- [ ] Make non-focusable elements (such as `<p>`, `<h1>`, `<div>`) focusable by adding a `tabindex=0` attribute. Avoid using a value other than 0.

- [ ] Use JavaScript to focus on elements when it would be naturally expected (e.g. a popup dialog, or when it closes)

## Understandability

- [ ] For links, buttons, or other interactive elements, use a *Verb Noun* structure, e.g. `Save Document` rather than just `Save`

- [ ] Specify when content appears in another language

- [ ] Use internationalized, non-idiomatic language, targeted at an 8th-grade reading level

- [ ] Use the `<abbr>` element for abbreviations

- [ ] Content that appears in the same place with similar functionality should have the same text and functionality across pages (e.g. search boxes, text areas, navigation)

[1]: https://www.amazon.com/Inclusive-Design-Patterns-Heydon-Pickering-ebook/dp/B01MAXK8XR/ref=sr_1_2?ie=UTF8&qid=1516318100&sr=8-2&keywords=inclusive+design
