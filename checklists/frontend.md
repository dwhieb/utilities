# Front End Checklist

- [ ] Responsive design (mobile-first)

- [ ] 404 and 500 error pages

- [ ] [Accessibility checklist][2]

- [ ] [Font checklist][1]

- [ ] [HTML checklist][3]

## Tools

- [PageSpeed Insights][6]
- [Web Page Test][8]

## Performance

- [ ] Lazy-load non-critical CSS, with appropriate `<noscript>` fallbacks as needed

  ```html
  <link rel=preload href=path/to/mystylesheet.css as=style onload="this.rel='stylesheet'">

  <noscript>
    <link rel=stylesheet href=path/to/mystylesheet.css>
  </noscript>
  ```

- [ ] Lazy-load non-critical JS (including third-party scripts) with the `async` or `defer` attributes, or with a resource hint like `rel=prefetch` or `rel=dns-prefetch`

![lazy-loading JS][7]

  ```html
  <link rel="dns-prefetch" href="http://example.com">
  <!-- Only if the remote server uses HTTPS -->
  <link rel="preconnect" href="https://cdn.example.com">
  ```

- [ ] Use web workers to cache assets for quick loading

- [ ] Use the [Intersection Observer API][5] to only load assets when the relevant part of the page comes into view

## Resources

- [Front End Checklist][4]

[1]: https://github.com/dwhieb/utilities/blob/master/checklists/fonts.md
[2]: https://github.com/dwhieb/utilities/blob/master/checklists/accessibility.md
[3]: https://github.com/dwhieb/utilities/blob/master/checklists/html.md
[4]: https://github.com/thedaviddias/Front-End-Checklist
[5]: https://developers.google.com/web/updates/2016/04/intersectionobserver
[6]: https://developers.google.com/speed/pagespeed/insights/
[7]: https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript/images/image_13.png
[8]: https://www.webpagetest.org
