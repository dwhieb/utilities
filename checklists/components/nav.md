# Navigation

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

- [ ] Avoid dropdowns or expanding menus for navigation or tables of contents

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

- [ ] Tables of Contents should have headers and ARIA labels

  ```html
  <nav id=contents aria-labelledby=contents-heading>

    <h2 id=contents-heading>Contents</h2>

    <ol>
      {{#each CVTypes}}
        <li><a href=#{{id}}>{{header}}</a></li>
      {{/each}}
    </ol>

  </nav>
  ```
