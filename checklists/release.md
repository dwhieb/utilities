# Release Checklist

A checklist for planning, developing, and publishing a release, from start to finish.

## Notes
* Not currently using milestones
* Run tests in all applicable browsers

**Pre-Coding**
* Open an issue
* Label issue
* Triage issue on the project board
* Project Board: To Do
* Project Board: In Progress
* Create issue branch

**Coding**
* Update external documentation with planned changes (README)
* Debug with Chrome Dev Tools (use `--inspect` flag with Node)
* Write tests
  - unit tests
  - functional tests
  - online/offline tests
  - accessibility tests
    - tab / keyboard navigation and interaction
    - text resizing (up to 200%)
  - performance tests
    - custom performance tests
    - Lighthouse
    - network waterfall
    - security audit
    - Chrome audits
* Write code to pass tests / for performance improvements
* Check for accessibility (see [Accessibility Checklist][1])
* Remove any test-related code
* Update internal documentation (code commenting)
* Revise external documentation (README)
* Check for typos (see [Typos Checklist][2])
* Run build process, potentially including
  - transpile JS (Babel)
  - bundle modules (Webpack)
  - compile CSS (LESS)
  - compile HTML (Handlebars)
  - create documentation (JSDoc)
* Repeat tests as needed

**Post-Coding**
* Increment version number & add comment closing the issue
* Create pull request from issue branch into `dev` / `master`
* Add release notes
  - CHANGE
  - DEPS
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
* Merge pull request into `master`
* Repeat testing on production
* Create GitHub release
* Edit Zenodo release
* Publish to npm
* Upload assets to CDN
* Update website
* Write a blog post

[1]: https://github.com/dwhieb/utilities/blob/master/checklists/accessibility.md
[2]: https://github.com/dwhieb/utilities/blob/master/checklists/typos.md
