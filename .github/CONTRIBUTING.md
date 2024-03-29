# Contributors Guide

## Guidelines

Interested in contributing? Awesome! Before you do though, please read our
[Code of Conduct](https://slackhq.github.io/code-of-conduct). We take it very seriously, and expect that you will as
well.

There are many ways you can contribute! :heart:

### Bug Reports and Fixes :bug:
-  If you find a bug, please search for it in the [Issues](https://github.com/slackhq/slack-astra-app/issues), and if it isn't already tracked,
   [create a new issue](https://github.com/slackhq/slack-astra-app/issues/new). Fill out the "Bug Report" section of the issue template. Even if an Issue is closed, feel free to comment and add details, it will still
   be reviewed.
-  Issues that have already been identified as a bug (note: able to reproduce) will be labelled `bug`.
-  If you'd like to submit a fix for a bug, [send a Pull Request](#creating_a_pull_request) and mention the Issue number.
  -  Include tests that isolate the bug and verifies that it was fixed.

### New Features :bulb:
-  If you'd like to add new functionality to this project, describe the problem you want to solve in a [new Issue](https://github.com/slackhq/slack-astra-app/issues/new).
-  Issues that have been identified as a feature request will be labelled `enhancement`.
-  If you'd like to implement the new feature, please wait for feedback from the project
   maintainers before spending too much time writing the code. In some cases, `enhancement`s may
   not align well with the project objectives at the time.

### Tests :mag:, Documentation :books:, Miscellaneous :sparkles:
-  If you'd like to improve the tests, you want to make the documentation clearer, you have an
   alternative implementation of something that may have advantages over the way its currently
   done, or you have any other change, we would be happy to hear about it!
  -  If its a trivial change, go ahead and [send a Pull Request](#creating_a_pull_request) with the changes you have in mind.
  -  If not, [open an Issue](https://github.com/slackhq/slack-astra-app/issues/new) to discuss the idea first.

If you're new to our project and looking for some way to make your first contribution, look for
Issues labelled `good first contribution`.

## Requirements

For your contribution to be accepted:

- [x] You must have signed the [Contributor License Agreement (CLA)](https://cla-assistant.io/slackhq/slack-astra-app).
- [x] The test suite must be complete and pass.
- [x] The changes must be approved by code review.
- [x] Commits should be atomic and messages must be descriptive. Related issues should be mentioned by Issue number.

If the contribution doesn't meet the above criteria, you may fail our automated checks or a maintainer will discuss it with you. You can continue to improve a Pull Request by adding commits to the branch from which the PR was created.

[Interested in knowing more about about pull requests at Slack?](https://slack.engineering/on-empathy-pull-requests-979e4257d158#.awxtvmb2z)

## Creating a Pull Request

1.  :fork_and_knife: Fork the repository on GitHub.
2.  :runner: Clone/fetch your fork to your local development machine. It's a good idea to run the tests just
    to make sure everything is in order.
3.  :herb: Create a new branch and check it out.
4.  :crystal_ball: Make your changes and commit them locally. Magic happens here!
5.  :arrow_heading_up: Push your new branch to your fork. (e.g. `git push username fix-issue-16`).
6.  :inbox_tray: Open a Pull Request on github.com from your new branch on your fork to `master` in this
    repository.

## Maintainers

There are more details about processes and workflow in the [Maintainer's Guide](./maintainers_guide.md).

## Getting started with development

### Frontend

#### Starting the frontend

1. Install dependencies

   ```bash
   yarn install
   ```

2. Build plugin in development mode or run in watch mode

   ```bash
   yarn dev
   ```

   or

   ```bash
   yarn watch
   ```

3. Build plugin in production mode

   ```bash
   yarn build
   ```

#### Proxying
Depending on your setup, it may be advantageous for you to setup a proxy from your
local machine to a Astra query node running in a cloud environment. Below is
an example command to do that (NOTE: this may or may not work depending on 
your setup):
```
ssh -N -L $LOCALHOST_PORT:localhost:$REMOTE_PORT $NODE_NAME
```

You would then be able to use `host.docker.internal:$LOCALHOST_PORT` as the 
Astra datasource URL inside your Grafana instance.


### Backend

1. Update [Grafana plugin SDK for Go](https://grafana.com/docs/grafana/latest/developers/plugins/backend/grafana-plugin-sdk-for-go/) dependency to the latest minor version:

   ```bash
   go get -u github.com/grafana/grafana-plugin-sdk-go
   go mod tidy
   ```

2. Build backend plugin binaries for Linux, Windows and Darwin:

   ```bash
   mage -v
   ```

3. List all available Mage targets for additional commands:

   ```bash
   mage -l
   ```

### Releases

Releases are performed with Github actions, and automatically run when a tag matching the format of `v*.*.*` are
published. To successfully perform a new release you should:

* Update the `package.json` version to the new target version
* Document any new release notes in `CHANGELOG.md` along with the new version
* Push a new git tag matching the format `v*.*.*` - note that you should _not_ create a release at this point in Github
* Upon publishing a new git tag the `release` Github action will run, building and publishing a new _draft_ release
* Using the Github UI, go to the releases and publish the release to make the assets available for download

## Learn more

- [Build a data source backend plugin tutorial](https://grafana.com/tutorials/build-a-data-source-backend-plugin)
- [Grafana documentation](https://grafana.com/docs/)
- [Grafana Tutorials](https://grafana.com/tutorials/) - Grafana Tutorials are step-by-step guides that help you make the most of Grafana
- [Grafana UI Library](https://developers.grafana.com/ui) - UI components to help you build interfaces using Grafana Design System
- [Grafana plugin SDK for Go](https://grafana.com/docs/grafana/latest/developers/plugins/backend/grafana-plugin-sdk-for-go/)
