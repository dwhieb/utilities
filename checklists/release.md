# Release Checklist

A checklist for planning, developing, and publishing a release, from start to finish.

You should automate as many steps in this process as possible.

## Notes
* Not currently using milestones
* Keep a continuous `dev` branch

## Pre-Coding
- [ ] Open an issue
- [ ] Label issue
- [ ] Triage issue on the project board
- [ ] Project Board: To Do
- [ ] Assign issue
- [ ] Project Board: In Progress
- [ ] Create issue branch (from `dev`)
- [ ] Design the API for any new code or changes to code
- [ ] Open pull request from issue branch into `dev` to track progress on issue
  - Will need to increment version number or make some other minor change first

## Coding
- [ ] Update external documentation with planned changes (README)
- [ ] Set environment variable(s) (e.g. `set NODE_ENV=localhost`)
- [ ] Debug Node with Chrome Dev Tools (use `--inspect` flag with Node)
- [ ] Develop in different browsers each day
  - Chrome
  - Edge
  - Firefox
- [ ] Set nodemon to run only the relevant build steps
- [ ] Update dependencies
  - [ ] npm
  - [ ] Node
  - [ ] npm packages
  - [ ] other third-party scripts
- [ ] Write tests
  - unit tests
  - functional tests
  - online/offline tests
  - accessibility tests
  - performance tests
    - custom performance tests
    - Lighthouse
    - network waterfall
    - security audit
    - Chrome audits
- [ ] Write code to pass tests / for performance improvements
  - Run tests in all applicable browsers
  - Check code coverage
- [ ] Add assets to offline cache
- [ ] Run through relevant [checklists][1]
  - This only needs to be done occasionally for most checklists
  - Create new issues if items in checklists should be addressed separately
- [ ] Remove any test-related code
- [ ] Update internal documentation (code commenting)
- [ ] Revise external documentation (README)
- [ ] Change environment variables if needed (e.g. `set NODE_ENV=development|production`)
- [ ] Run build process, potentially including
  - transpile JS (Babel)
  - bundle modules (Webpack)
  - compile CSS (LESS)
  - compile HTML (Handlebars)
  - create documentation (JSDoc)
  - upload (versioned) assets to storage / CDN (Azure)
- [ ] Repeat tests as needed

## Post-Coding
- [ ] Stop nodemon
- [ ] Increment version number
- [ ] Update environment variables on Travis CI, development, and production server
- [ ] Code review
- [ ] Address code review comments (repeat **Coding** steps)
- [ ] Merge pull request into `dev` using a squash commit. Each commit to `dev` should have one of the categories below, an issue number, and a message explaining *why* and *what* was done (not how).
  - CHANGE
  - CONTENT
  - DEPS
  - DEV
  - DOCS
  - FIX
  - NEW
  - PERF
  - REFACTOR
  - TEST
- [ ] Repeat testing on development server
- [ ] Rerun build process if needed, using production environment settings
  - `set NODE_ENV=production`
- [ ] Open a pull request from `dev` into `master`
- [ ] Merge (not squash) pull request into `master`
- [ ] Project Board: Completed & close issue (should happen automatically)
- [ ] Repeat testing on production
- [ ] Delete issue branch
- [ ] Create GitHub release
- [ ] Edit Zenodo release
- [ ] Publish to npm
- [ ] Update website
- [ ] Write a blog post

[1]: https://github.com/dwhieb/utilities/tree/master/checklists
