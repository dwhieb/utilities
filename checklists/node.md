# Node Checklist

A checklist for server-side projects using Node (& Express).

## app.js

- [ ] Do initialization / configuration in separate files, which then export the ready-to-use object. Some possible cases:

  - authenticate.js
  - config.js
  - errors.js
  - handlebars.js
  - limiter.js
  - logger.js
  - mendeley.js
  - passport.js
  - router.js
  - server.js
  - socket.js

- [ ] Log server information when app starts:

  - `Server started. Press Ctrl+C to terminate.`
  - Project
  - Port
  - Time
  - Node Version (`Node`)
  - Environment (`Env`)

## Development

- [ ] Use Nodemon (with `--inspect` flag)

- [ ] Use environment variables (`process.env.NODE_ENV=production|development|testing|localhost`)
  - `production` = production server
  - `testing` = Travis CI
  - `localhost` = local testing
  - `development` = development server

- [ ] Update dependencies
  - npm
  - Node
  - npm packages

- [ ] Use different base URLs for each environment

## Express Settings

- [ ] Declare Handlebars engine and file extension

  ```js
  app.engine(extname, handlebars.engine);
  ```

- [ ] static files:

  ```js
  app.use(express.static(path.join(__dirname, `/public`)));
  ```

## Logging & Error Handling

- [ ] Monitoring (e.g. Application Insights)
  - uptime
  - memory (watch for leaks)

- [ ] Log requests (at beginning of waterfall, but after static files)

  - request ID (generated)
  - time: `new Date().toISOString()`
  - method: `req.method`
  - original URL: `req.originalURL`
  - \# of bytes sent: `res.get('Content-Length')`
  - client version: `req.get('X-ClientVersion')`
  - platform version: `req.get('X-ClientPlatformVersion')`
  - device: `req.get('X-ClientDevice')`
  - locale: `req.get('X-ClientLocale')`
  - user ID
  - user role

  ```js
  const logRequest = (req, res, next) => {

    // log request properties (listed above)

    res.on(`finish`, () => {
      // log response code and message
    });

    res.on(`close`, () => {
      // log that the request was aborted by the client (400?)
    });

    res.on(`error`, () => {
      // log 500 error
    });

    next();

  };
  ```

- [ ] 404 and 500 error handlers (should come last in the waterfall for Express)

  ```js
  // 404 handler
  const error404 = (req, res, next) => {
    // render error page with 404 status
  };

  // 500 handler
  const error500 = (err, req, res, next) => {
    // render error page with 500 status
    // log and report errors
  };
  ```

- [ ] Async middleware (to catch async errors)

  ```js
  const catchAsyncErrors = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
  ```

- [ ] Generic error handler for server

  ```js
  server.on(`error`, err => {
    // log and report error
  });
  ```

- [ ] Standardized error handling

  - [ ] Standardized error messages (e.g. with [Boom][1])
  - [ ] `res.error` middleware
  - [ ] convert errors from third-party services

- [ ] Provide an option to console log requested URL with an environment variable

  - The log should happen after static files are sent

## package.json

- [ ] The `"main"` field should point to the entry point for the app (usually `app.js`)
- [ ] Node engines should be specified in the `"engines"` field

## Performance

- [ ] Don't serve static files from Node
  - Option 1: Use a CDN / Blob Storage
  - Option 2: Proxy server

## Security

- [ ] Authentication (e.g. Passport)

- [ ] Force HTTPS (on Azure)

- [ ] Prevent CSURF attacks (e.g. csurf package)

- [ ] Rate limiting (e.g. express-rate-limit)

- [ ] Security middleware (e.g. helmet)

- [ ] Trust proxy

  ```js
  app.enable(`trust proxy`);
  ```

- [ ] Use the `Upgrade-Insecure-Requests` header
  - This can be set as a Content-Security-Policy directive in helmet
  - Also add `Upgrade-Insecure-Requests` to the `Vary` header

[1]: https://www.npmjs.com/package/boom
