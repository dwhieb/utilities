# Release Checklist

A checklist for planning, developing, and publishing a release, from start to finish.

## Notes
* Not currently using milestones
* Run tests in all applicable browsers
* Keep a continuous `dev` branch
* Only use Squash & Merge commits for `master` branch
* Do not allow commits to the `master` branch without an override

**Pre-Coding**
* Open an issue
* Label issue
* Triage issue on the project board
* Project Board: To Do
* Project Board: In Progress
* Create issue branch (from `dev`)

**Coding**
* Update external documentation with planned changes (README)
* Debug with Chrome Dev Tools (use `--inspect` flag with Node)
* Update dependencies
  - [ ] npm
  - [ ] Node
  - [ ] npm packages
  - [ ] other third-party scripts
* Write tests
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
* Write code to pass tests / for performance improvements
* Run through relevant [checklists][1]
* Remove any test-related code
* Update internal documentation (code commenting)
* Revise external documentation (README)
* Run build process, potentially including
  - transpile JS (Babel)
  - bundle modules (Webpack)
  - compile CSS (LESS)
  - compile HTML (Handlebars)
  - create documentation (JSDoc)
* Repeat tests as needed

**Post-Coding**
* Increment version number & add comment closing the issue
* Update environment variables on Travis CI, development, and production server
* Create pull request from issue branch into `dev` / `master`
* Add commit message (each commit to `dev` should have one of these)
  - CHANGE
  - DEPS
  - DEV
  - DOCS
  - FIX
  - NEW
  - PERF
  - TEST
* Code review
* Address code review comments (repeat **Coding** steps)
* Merge pull request into `dev` / `master`
* Repeat testing on development server
* Project Board: Done
* Open a pull request from `dev` into `master`
* Add commit message (name & version number)
* Merge pull request into `master`
* Repeat testing on production
* Create GitHub release
* Edit Zenodo release
* Publish to npm
* Upload assets to CDN
* Update website
* Write a blog post

[1]: https://github.com/dwhieb/utilities/tree/master/checklists
