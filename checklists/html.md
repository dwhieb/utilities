# HTML Checklist

## Basic

- [ ] [Validate HTML][3]

- [ ] [Check links][4]

- [ ] Include these `<meta>` tags first in your `<head>`

  ```html
  <meta charset=utf-8>
  <meta name=viewport content="width=device-width, initial-scale=1, shrink-to-fit=no">
  ```

- [ ] Title element - best to limit to 55 characters

- [ ] Set the `lang` attribute:

  ```html
  <html lang=en>
  ```

- [ ] Favicon - PNG is recommended over .ico for `<link>`s. You can (and should) also place the favicon.ico file in your root public directory.

  ```html
  <link rel="icon" type="image/png" sizes="16x16" href="/path/to/favicon-16x16.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/path/to/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="/path/to/favicon-96x96.png">
  ```

## Informational & SEO

- [ ] Add code comments explaining HTML sections (including at the end of sections)

  ```html
  <section class=article>
    <!-- content -->
  </section>
  <!-- End article section -->
  ```

- [ ] Application Name - for apps

  ```html
  <meta name="application-name" content="Application Name">
  ```

- [ ] Description

  ```html
  <meta name="description" content="A description of the page">
  ```

- [ ] Search Engines

  ```html
  <!-- Control the behavior of search engine crawling and indexing -->
  <meta name="robots" content="index,follow"><!-- All Search Engines -->
  <meta name="googlebot" content="index,follow"><!-- Google Specific -->

  <!-- Tells Google not to show the sitelinks search box -->
  <meta name="google" content="nositelinkssearchbox">

  <!-- Tells Google not to provide a translation for this document -->
  <meta name="google" content="notranslate">
  ```

- [ ] Search engine webmaster tools (e.g. Google, Bing)

- [ ] Software used to create the site

  ```html
  <meta name="generator" content="Atom">
  ```

- [ ] Subject of the page

  ```html
  <meta name="subject" content="your document's subject">
  ```

- [ ] Age rating

  ```html
  <meta name="rating" content="General">
  ```

- [ ] Author information

  ```html
  <!-- Links to information about the author(s) of the document -->
  <link rel="author" href="humans.txt">
  ```

- [ ] License information

  ```html
  <!-- Refers to a copyright statement that applies to the link's context -->
  <link rel="license" href="copyright.html">
  ```

- [ ] [Social media tags][2]

- [ ] Set cookie if needed

  ```html
  <meta http-equiv="set-cookie" content="name=value; expires=date; path=url">
  ```

## Performance

- [ ] Inline critical CSS, minified, in a `<style>` tag in the `<head>`

- [ ] Load CSS files before JS files

- [ ] Load non-critical stylesheets asynchronously

  - `rel=preload` - tells browser to download but not apply style
  - `onload` - sets link to stylesheet once it's done loading

  ```html
  <link rel=preload href=styles.css as=style onload="this.rel='stylesheet';">
  ```

- [ ] Place `href` attribute first in an element

- [ ] Specify global prefetch policy - you can also specify this on a case-by-case basis using `rel=dns-prefetch`

  ```html
  <meta http-equiv="x-dns-prefetch-control" content="off|on">
  ```

- [ ] Prefetch resources that are known to be used in the near future

  ```html
  <link rel="prefetch" href="/images/big.jpeg">
  ```

- [ ] Prerender pages that are known to be loaded in the near future

  ```html
  <link rel="prerender" href="http://css-tricks.com">
  ```

- [ ] Prefer Handlebars comments over HTML comments (where appropriate)

## Security

- [ ] Content Security Policy - controls where resources are loaded from

  ```html
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'">
  ```

- [ ] Upgrade insecure requests

  ```html
  <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
  ```

- [ ] Referrer Policy

  ```html
  <meta name="referrer" content="no-referrer">
  ```

- [ ] Use `noopener` with external links

  ```html
  <a href=https://danielhieber.com target=_blank rel="noopener noreferrer"></a>
  ```

## Resources

- [List of HEAD Elements][1]
- [W3C Validator][3]
- [W3C Link Checker][4]

[1]: https://github.com/joshbuchea/HEAD
[2]: https://github.com/joshbuchea/HEAD#social
[3]: https://validator.w3.org/
[4]: https://validator.w3.org/checklink
