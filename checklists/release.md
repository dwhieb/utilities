# Release Checklist

A checklist for planning, developing, and publishing a release, from start to finish.

**Pre-Coding**
* Open an issue
* Label issue
* Triage issue
* Project Board: To Do
* Project Board: In Progress
* Create issue branch

**Coding**
* Update external documentation with planned changes (README)
* Write unit tests
* Write code to pass unit tests
* Write functional tests
* Write code to pass functional tests
* Write performance tests (if needed)
* Performance testing
* Update internal documentation (code commenting)
* Revise external documentation (README)

**Post-Coding**
* Increment version number & Add comment closing the issue
* Create pull request
* Add release notes
  - CHANGE
  - DEPS
  - DOCS
  - FIX
  - NEW
  - PERF
  - TEST
* Code review
* Address code review comments (repeat Coding steps)
* Merge pull request
* Project Board: Done
* Create GitHub release
* Edit Zenodo release
* Publish to npm
* Update website
* Write a blog post
