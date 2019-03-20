# Node Checklist

A checklist for server-side projects using Node (& Express).

## Resources

- [Node.js Best Practices][3]

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

- [ ] Separate `server.js` from `app.js`

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

- [ ] Use `npm ci` command when testing on Travis CI
  - This speeds up install time significantly
  - Include the following in your `travis.yaml` file:

  ```yaml
  install:
    - npm ci
  ```

## Express Settings

- [ ] Declare Handlebars engine and file extension

  ```js
  app.engine(extname, handlebars.engine);
  ```

- [ ] static files:

  ```js
  app.use(express.static(path.join(__dirname, `/public`)));
  ```

## Logging

- [ ] Monitoring (e.g. Application Insights)
  - uptime
  - memory (watch for leaks)

- [ ] Use a mature logger (like Winston)

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

## Error Handling

- [ ] Distinguish operational (client) vs. programmer (server) errors

- [ ] Handle errors in a centralized place, and propagate all other errors to that location, converting error messages from third-party services. Error-handling middleware should itself pass the error to a centralized module, since not every error will happen during the HTTP request waterfall, or could be an uncaught promise exception.

- [ ] Use standardized error messages (e.g. with [Boom][1])

- [ ] Document possible API errors (using Swagger)

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

- [ ] Use middleware to catch async errors

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

- [ ] Generic error handling for uncaught exceptions ()

  ```js
  process.on('unhandledRejection', (reason, p) => {
    // I just caught an unhandled promise rejection, since we already have fallback handler for unhandled errors (see below), let throw and let that one handle that
    throw reason;
  });

  process.on(`uncaughtException` err => {
    // log and report error
  });
  ```

- [ ] Provide an option to console log requested URL with an environment variable

  - The log should happen after static files are sent

- [ ] Shut down gracefully when a process is killed

  ```js
  process.on(`SIGTERM`, () => {
    console.log(`Shutting down process.`);
    server.stop();
    .then(...);
    // close any other connections or child processes here
  });
  ```

- [ ] Retry HTTP requests as appropriate (use a for-loop with async functions and a `maxRequests` variable, [like this][2])

- [ ] Listen to error events on any objects that emit them

## package.json

- [ ] The `"main"` field should point to the entry point for the app (usually `app.js`)
- [ ] Node engines should be specified in the `"engines"` field

## Performance

- [ ] Don't serve static files from Node
  - Option 1: Use a CDN / Blob Storage
  - Option 2: Proxy server

- [ ] Avoid `require()` statements that block execution (i.e. place them at the top level of your code)

## Security

### Resources
* [Security Best Practices](https://medium.com/@nodepractices/were-under-attack-23-node-js-security-best-practices-e33c146cb87d)

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

- [ ] Cookies should use `sameSite` and `httpOnly` (prevents the cookie from being accessed by client-side JavaScript) settings by default. Use `secure` optionally.

- [ ] Use the Helmet package to set security headers

- [ ] Use [`eslint-plugin-security`](https://github.com/nodesecurity/eslint-plugin-security) to lint for security issues early

## Testing

- [ ] Test for all possible / documented operational (client) errors, not just positive scenarios. (**NB:** It should not be possible to test for programmer (server) errors.)

[1]: https://www.npmjs.com/package/boom
[2]: https://blog.risingstack.com/mastering-async-await-in-nodejs/
[3]: https://github.com/i0natan/nodebestpractices
