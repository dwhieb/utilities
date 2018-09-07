# Release Checklist

A checklist for planning, developing, and publishing a release, from start to finish.

You should automate as many steps in this process as possible.

## Branching
* Non-versioned projects:
  - Create release branches
  - Code on release branches should be production-ready
  - Each commit to the release branch should be a single issue with a category label
  - Commits are merged onto `master` branch with each release
* Versioned projects:
  - Create branches for each version
  - Code on version branches should be production-ready
  - Each commit to a version branch should be a single issue with a category label
  - Commits are squashed onto `master` branch with each release
* Websites:
  - `master` branch deploys to `staging` slot, and then slots are swapped
  - Create a branch and `dev` slot for each issue
  - Issue branches deploy to the `dev` slot for testing purposes
  - Issue branches are squashed onto the `master` branch

## Pre-Coding
- [ ] Open an issue
- [ ] Label issue
- [ ] Triage issue on the Project Board
- [ ] Project Board: To Do
- [ ] Assign issue
- [ ] Project Board: In Progress
- [ ] Create branch
  - Non-versioned projects: Create an issue branch off of `dev`
  - Versioned projects: Create a version branch (if necessary), then an issue branch
  - Websites: Create an issue branch and `dev` slot, deploying from issue branch
- [ ] (Versioned projects) Make a `VERSION` commit
- [ ] Design the API for any new code or changes to code

## Coding
- [ ] Update external documentation with planned changes (README)
- [ ] Set local environment variable(s) (`set NODE_ENV=localhost`)
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
  - [ ] Run tests in all applicable browsers
  - [ ] Check code coverage
  - [ ] Run `npm audit` (security audit)
- [ ] Add assets to offline cache
- [ ] Run through relevant [checklists][1]
  - This only needs to be done occasionally for most checklists
  - Create new issues if items in checklists should be addressed separately
- [ ] Remove any test-related code
- [ ] Update internal documentation (code commenting)
- [ ] Revise external documentation (README)
- [ ] Set development environment variables (`set NODE_ENV=development`)
- [ ] Run build process, potentially including
  - transpile JS (Babel)
  - bundle modules (Webpack)
  - compile CSS (LESS)
  - compile HTML (Handlebars)
  - create documentation (JSDoc)
  - upload (versioned) assets to storage / CDN (Azure)
- [ ] Repeat tests locally
- [ ] Repeat tests on `dev` server

## Categories
  - ACCESS
  - BUILD
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

## Post-Coding
- [ ] Stop nodemon
- [ ] Update environment variables on Travis CI, development, and staging server (not production)
- [ ] Set production environment variables (`set NODE_ENV=production`)
- [ ] Run build process
- [ ] Run tests locally
- [ ] Open pull request
  - Non-versioned projects: issue branch > `dev`
  - Versioned projects: issue branch > version branch
  - Websites: issue branch > `master`
- [ ] Code review
- [ ] Address code review comments (repeat **Coding** steps)
- [ ] Merge pull request with a squash commit (all project types)
  - Include a category label
  - Explain *why* and *what* was done (not how)
- [ ] Delete issue branch
- [ ] (Websites) Repeat testing on `staging` server
- [ ] Repeat steps with additional issues

## Post-Development & Release
- [ ] Project Board: Completed & close issue (should happen automatically)
- [ ] (Website) Swap staging and production slots
- [ ] Repeat testing on production
- [ ] Delete version / release branch
- [ ] Create GitHub release
- [ ] Edit Zenodo release
- [ ] Publish to npm
- [ ] Update website
- [ ] Write a blog post

[1]: https://github.com/dwhieb/utilities/tree/master/checklists
