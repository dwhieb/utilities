# HTML Checklist

## Basic

- [ ] [Validate HTML][3]

- [ ] [Check links][4]

- [ ] [Check meta tags][6]

- [ ] Set the `lang` attribute:

  ```html
  <html lang=en>
  ```

- [ ] Favicon - PNG is recommended over .ico for `<link>`s. You can (and should) also place the favicon.ico file in your root public directory.

  ```html
  <link rel=icon type=image/png href=/path/to/favicon.png>
  ```

- [ ] Add code comments explaining HTML sections (including at the end of sections)

  ```html
  <section class=article>
    <!-- content -->
  </section>
  <!-- End article section -->
  ```

- [ ] [Add subject and other information to mailto: links][5]

- [ ] Don't include inline JavaScript or CSS (except for critical CSS)

## Head

- [ ] Include these `<meta>` tags first in your `<head>`

  ```html
  <meta charset=utf-8>
  <meta name=viewport content='width=device-width, initial-scale=1, shrink-to-fit=no'>
  ```

- [ ] Title element (best to limit to 55 characters)

- [ ] Set cookie if needed

  ```html
  <meta http-equiv=set-cookie content='name=value; expires=date; path=url'>
  ```

- [ ] Application Name - for apps

  ```html
  <meta name=application-name content='Application Name'>
  ```

- [ ] Author information

  ```html
  <meta name=author content='Daniel W. Hieber'>
  ```

  ```html
  <!-- Links to information about the author(s) of the document -->
  <link rel=author href=humans.txt>
  ```

- [ ] Description

  ```html
  <meta name=description content='A description of the page'>
  ```

- [ ] Software used to create the site

  ```html
  <meta name=generator content=Atom>
  ```

- [ ] Keywords

  ```html
  <meta name=keywords content='linguistics, language'>
  ```

- [ ] Age rating

  ```html
  <meta name=rating content=general>
  ```

- [ ] Subject of the page

  ```html
  <meta name=subject content='the subject of the document'>
  ```

- [ ] Search Engines

  ```html
  <meta name=google content=nositelinkssearchbox><!-- Tells Google not to show the sitelinks search box -->
  <meta name=google content=notranslate><!-- Tells Google not to provide a translation for this document -->
  <meta name=googlebot content='index,follow'><!-- Google Specific -->
  <meta name=robots content='index,follow'><!-- All Search Engines -->
  ```

- [ ] Search engine webmaster tools (e.g. Google, Bing)

- [ ] [Social media tags][2]

  ```html
  <!-- Facebook -->
  <meta property=og:description content='{{meta.description}}'>
  <meta property=og:image content=https://danielhieber.com/img/grad_slam.jpg>
  <meta property=og:locale content=en_US>
  <meta property=og:title content='{{pageTitle}}'>
  <meta property=og:type content=website>
  <meta property=og:url content=https://danielhieber.com>

  <!-- Twitter (also uses Facebook og properties) -->
  <meta name=twitter:card content=summary>
  <meta name=twitter:creator content=@dwhieb>
  ```

- [ ] License information

  ```html
  <!-- Refers to a copyright statement that applies to the link's context -->
  <link rel=license href=copyright.html>
  ```

## Security

- [ ] Content Security Policy - controls where resources are loaded from

  ```html
  <meta http-equiv=Content-Security-Policy content="default-src 'self'">
  ```

- [ ] Upgrade insecure requests

  ```html
  <meta http-equiv=Content-Security-Policy content=upgrade-insecure-requests>
  ```

- [ ] Referrer Policy

  ```html
  <meta name=referrer content=no-referrer>
  ```

- [ ] Use `noopener` with external links

  ```html
  <a href=https://danielhieber.com rel='noopener noreferrer'></a>
  ```

## Resources

- [List of HEAD Elements][1]
- [W3C Validator][3]
- [W3C Link Checker][4]

[1]: https://github.com/joshbuchea/HEAD
[2]: https://github.com/joshbuchea/HEAD#social
[3]: https://validator.w3.org/
[4]: https://validator.w3.org/checklink
[5]: https://css-tricks.com/snippets/html/mailto-links/
[6]: http://www.heymeta.com/?utm_source=CSS-Weekly&utm_campaign=Issue-299&utm_medium=web
