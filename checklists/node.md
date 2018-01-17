# Node Checklist

A checklist for server-side projects using Node (& Express).

## package.json

- [ ] The `"main"` field should point to the entry point for the app (usually `app.js`)
- [ ] Node engines should be specified in the `"engines"` field

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

## Express Settings

- [ ] Trust proxy

  ```js
  app.enable(`trust proxy`);
  ```

- [ ] Declare Handlebars engine and file extension

  ```js
  app.engine(extname, handlebars.engine);
  ```

## Express Middleware

- [ ] async middleware (to catch async errors)

  ```js
  const catchAsyncErrors = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
  ```

- [ ] authentication (e.g. Passport)

- [ ] rate limiting (e.g. express-rate-limit)

- [ ] security (e.g. helmet)

- [ ] static files:

  ```js
  express.static(path.join(__dirname, `/public`));
  ```

## Logging & Error Handling

- [ ] Persistent error logging (e.g. Application Insights, )

- [ ] Log requests (at beginning of waterfall, but after static files)

  - request ID (generated)
  - time: `new Date().toISOString()`
  - method: `req.method`
  - original URL: `req.originalURL`
  - # of bytes sent: `res.get('Content-Length')`
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

[1]: https://www.npmjs.com/package/boom
