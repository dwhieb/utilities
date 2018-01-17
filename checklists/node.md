# Node Checklist

A checklist for server-side projects using Node (& Express).

## package.json

- The `"main"` field should point to the entry point for the app (usually `app.js`)
- Node engines should be specified in the `"engines"` field

## app.js

- Do initialization / configuration in separate files, which then export the ready-to-use object. Some possible cases:

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

- Log server information when app starts:

  - `Server started. Press Ctrl+C to terminate.`
  - Project
  - Port
  - Time
  - Node Version (`Node`)
  - Environment (`Env`)

## Express Settings

- Trust proxy

  ```js
  app.enable(`trust proxy`);
  ```

- Declare Handlebars engine and file extension

  ```js
  app.engine(extname, handlebars.engine);
  ```

## Express Middleware

- authentication (e.g. Passport)

- rate limiting (e.g. express-rate-limit)

- security (e.g. helmet)

- static files:

  ```js
  express.static(path.join(__dirname, `/public`));
  ```

## Logging & Error Handling

- 404 and 500 error handlers (should come last in the waterfall for Express)

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

- Generic error handler for server

  ```js
  server.on(`error`, err => {
    // log and report error
  });
  ```

- Standardized error handling

  - Standardized error messages (e.g. with [Boom][1])
  - `res.error` middleware
  - convert errors from third-party services

- Provide an option to log requested URL with an environment variable

  - The log should happen after static files are sent

[1]: https://www.npmjs.com/package/boom
