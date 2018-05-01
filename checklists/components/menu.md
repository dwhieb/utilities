# Menu Buttons

- [ ] If you don't need one, don't use it. If a menu has fewer than 5 items, just lay them out.

- [ ] Use both the menu hamburger icon and the text `Menu`, inside a `<button>` element. You can place the `Menu` text inside a `<span class=visually-hidden>` if you don't want the text to be displayed.

- [ ] Avoid or minimize animations / transitions. Keep it simple.

```html
<nav aria-label="site">

  <!-- Should be first child of nav -->
  <button aria-expanded=false>
    <svg><use xlink:href="#navicon"></use></svg>
    <span>Menu</span>
  </button>

  <ul hidden>
    <li><a href="#main">home</a></li>
    <li><a href="/about">about</a></li>
    <li><a href="/products">products</a></li>
    <li><a href="/contact">contact us</a></li>
    <li><a href="/login">login</a></li>
  </ul>

</nav>
```
