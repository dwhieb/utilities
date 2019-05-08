# Testing

## Resources

[Testing Best Practices](https://medium.com/@me_37286/yoni-goldberg-javascript-nodejs-testing-best-practices-2b98924c9347)

- [ ] linting
- [ ] license check ([license checker](https://www.npmjs.com/package/license-checker))
- [ ] unit testing
- [ ] component testing
- [ ] code coverage (Jest)
- [ ] mutation testing (Stryker)
- [ ] integration testing
- [ ] end-to-end testing
- [ ] performance testing
- [ ] user testing

## Server Testing

- [ ] Use Supertest
- [ ] Mock responses with nock
- [ ] Test middleware (using Sinon or node-mock-http)
- [ ] Test route handlers
- [ ] Test using local versions of databases

## Frontend Testing

**What to test:**

- imperative logic
  - unit test each method that contains logic (so all of them)
  - check for new views/modelss to be created, methods called, etc.
- event logic
  - separate testing of event trigger from event handler
- **don't** test visual properties if you can avoid it

**for**

- models
- collections
- views

- [ ] setup a fake or local server
