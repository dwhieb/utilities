# Front End Checklist

- [ ] [Front End Checklist][4]

- [ ] [Accessibility checklist][2]

- [ ] [CSS checklist][17]

- [ ] [Font checklist][1]

- [ ] [HTML checklist][3]

## Content

- [ ] 404 and 500 error pages

## Performance

- [Lazy Loading Images & Videos][9]
- [PageSpeed Insights][6]
- [Web Page Test][8]
- [Sonarwhal][10]

- [ ] First meaningful paint should occur within 1s

- [ ] Time to interactive should occur within 5s (on a slow 3G network with 400ms RTT and 400kkps transfer speed) and under 2s for repeat visits

- [ ] Use Optimize.js

### Lazy-Loading Assets

- [ ] Lazy-load assets with `dns-prefetch`, `preconnect`, `prefetch`, or `preload`. Use `preload` when you're confident the resource will be used on the page, and `prefetch` when it *may* be used on the page. `prefetch` works during idle times, while `preload` grabs the resource as soon as possible. [More info][13].

- [ ] Preload (`rel=preload`) resources that you are confident will be used on the page (this tells the browser to load the asset as soon as possible)

- [ ] Prefetch resources that *may* be used later (this tells the browser to load them during idle times)

  ```html
  <link rel="prefetch" href="/images/big.jpeg">
  ```

- [ ] Prerender pages that are known to be loaded in the near future

  ```html
  <link rel="prerender" href="http://css-tricks.com">
  ```

- [ ] Do not lazy-load *all* assets, or the value of lazy-loading will be negated. Use `dns-prefetch` or `preconnect` for some resources that do not need to be loaded early, but will be used later in the page.

- [ ] Lazy-load non-critical CSS, with appropriate `<noscript>` fallbacks as needed

  ```html
  <link rel=preload href=path/to/mystylesheet.css as=style onload="this.rel='stylesheet'">

  <noscript>
    <link rel=stylesheet href=path/to/mystylesheet.css>
  </noscript>
  ```

- [ ] Lazy-load non-critical JS (including third-party scripts) with the `async` or `defer` attributes, or with a resource hint like `rel=prefetch` or `rel=dns-prefetch`

![lazy-loading JS][7]

- [ ] Lazy-load HTML as appropriate

  ```html
  <link rel="dns-prefetch" href="http://example.com">
  <!-- Only if the remote server uses HTTPS -->
  <link rel="preconnect" href="https://cdn.example.com">
  ```

- [ ] Use web workers to cache assets for quick loading

- [ ] Use the [Intersection Observer API][5] to only load assets when the relevant part of the page comes into view

- [ ] Minify JavaScript files

- [ ] Minify HTML files

- [ ] Inline critical CSS, minified, in a `<style>` tag in the `<head>`

- [ ] Inline SVG icons and images

- [ ] Load CSS files before JS files

- [ ] Place `href` attribute first in an element

- [ ] Specify global prefetch policy - you can also specify this on a case-by-case basis using `rel=dns-prefetch`

  ```html
  <meta http-equiv="x-dns-prefetch-control" content="off|on">
  ```

- [ ] Prefer Handlebars comments over HTML comments (where appropriate)

## Security

- [Observatory][12]
- [Security Headers][11]

- [ ] Deliver all content over HTTPS (make sure the `Strict-Transport-Security` header is set).
- [ ] Set the `X-Content-Type-Options` header to `nosniff`
- [ ] Set the `X-Frame-Options` header to `SAMEORIGIN`
- [ ] Set the `Content-Security-Policy` header

## SEO

- [Structured Data Testing Tool][15]

- [ ] Use structured data like [JSON-LD][14] or [Microdata][16] (preferably JSON-LD)

[1]: https://github.com/dwhieb/utilities/blob/master/checklists/fonts.md
[2]: https://github.com/dwhieb/utilities/blob/master/checklists/accessibility.md
[3]: https://github.com/dwhieb/utilities/blob/master/checklists/html.md
[4]: https://github.com/thedaviddias/Front-End-Checklist
[5]: https://developers.google.com/web/updates/2016/04/intersectionobserver
[6]: https://developers.google.com/speed/pagespeed/insights/
[7]: https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript/images/image_13.png
[8]: https://www.webpagetest.org
[9]: https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/?utm_source=CSS-Weekly&utm_campaign=Issue-310&utm_medium=web
[10]: https://sonarwhal.com/
[11]: https://securityheaders.com/
[12]: https://observatory.mozilla.org/
[13]: https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf
[14]: https://json-ld.org/
[15]: https://search.google.com/structured-data/testing-tool
[16]: https://developer.mozilla.org/en-US/docs/Web/HTML/Microdata
[17]: https://github.com/dwhieb/utilities/blob/master/checklists/css.md
