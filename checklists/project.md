# Project Checklist

A high-level checklist of things to include in a project, and how to structure a project.

# Project Documentation

- [ ] `/.github`
  - [ ] CONTRIBUTING
  - [ ] LICENSE
    - [ ] code
    - [ ] data
    - [ ] images
  - [ ] PULL_REQUEST_TEMPLATE
  - [ ] README (general) ([README checklist][1])
  - [ ] READMEs (folder-specific, as needed)
- [ ] `/styles` - for coding styleguides
  - [ ] CSS (Stylelint)
  - [ ] JS (ESLint)

# Project Structure

- [ ] **Co-locate component code.** Place HTML, CSS, JS, documentation, and tests for each component/view together.

- [ ] **Document every file.** Put a filename and description inside every file containing code, explaining what the file is for.

- [ ] **Layer Node.js apps.** Don't pass app objects (e.g. `req`, `res`) to business logic. You should be able to replace the app components independently of the other components.

- [ ] **Make modules folders, not files.** Include an `index.js` in each module. This prevents other code from breaking when a module-internal filename or location changes.

# Project Scripts & Deployment

- [ ] `npm install` should deploy everything a developer needs to start working on a project

- [ ] When reasonable, your source control (i.e. GitHub) should only contain source / master code, whereas your distribution (i.e. npm) should only contain functional, production-ready code.

- [ ] Protect your `master` and `dev` branches

- [ ] Define separate environments as needed:
  - `localhost`: local development
  - `test`: continuous integration / local testing
  - `development`: development server
  - `production`: production server

[1]: https://github.com/dwhieb/utilities/blob/master/checklists/readme.md
