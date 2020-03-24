# Branching Models

## Simple Branching Model

* The `master` branch is always production-ready

* Each issue receives its own branch

* Each issue branch is tested thoroughly and must be production-ready before being merged

* Issue branches are merged directly into the `master` branch

* The `master` branch is periodically tagged for a release and GitHub release notes made, and the code published to npm at that point

* Releases are managed using GitHub milestones to track when all the relevant issues are completed, and the `master` branch is ready for publishing on npm

## Release Branching Model

* `master` branch

    - Live code, published to npm
    - Each commit is a release with an associated tag, GitHub release, and publication to npm

* release branches

    - One release branch for each version
    - Always production-ready and thoroughly tested
    - Each commit addresses a single issue
    - Each release branch is managed by a GitHub milestone
    - Merged into `master` with a squash & merge commit

* issue branches

    - Issue branches are branched from release branches, not `master`
    - Issue branches are for development, and do not need to be production-ready until merge
    - Each issue branch must be tested thoroughly and be production-ready before merging
    - Merged into release branch with a squash & merge commit
