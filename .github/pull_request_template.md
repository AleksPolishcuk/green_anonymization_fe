## Describe your changes

- I did an awesome feature.

## Issue ticket code (and/or) and link

- [Link to JIRA ticket](https://ticket-url)

## Git rules

1. Each PR should be independent, created from `develop` branch, and only from `develop`.
2. `master` or `main` is only for init commit and production. Development is only in `develop`.
3. Delete remote branches if they are not in use.
4. Follow PR rules: [🧶 PR rules](#).
5. Follow commit rules: [🎏 Commit naming rules](#).
6. At least once a day send a PR link to your project chat, tag your team members and Liudmyla.

Stick to these rules if you want three PRs to pass the test and not have to redo the work.

### General

- [ ] Assigned myself to the PR
- [ ] Assigned the appropriate labels to the PR
- [ ] Assigned the appropriate reviewers to the PR
- [ ] Updated the documentation
- [ ] Performed a self-review of my code
- [ ] Types for input and output parameters
- [ ] Don't have `any` in my code
- [ ] Used try/catch for async error handling
- [ ] Don't have magic numbers
- [ ] Compare only with constants, not raw strings
- [ ] No ternary operator inside another ternary
- [ ] Don't have commented code
- [ ] No links in code; env links should be in env file, constant links should be in constants
- [ ] Used camelCase for variables and functions
- [ ] Date and time formats are in constants
- [ ] Functions are public only if used outside the class
- [ ] No hardcoded values
- [ ] Covered by tests
- [ ] Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [ ] Imports order is node modules, absolute paths, then relative paths
- [ ] No `console.log` in PR
- [ ] `.env` is in `.gitignore`
- [ ] Strings are moved to constants where appropriate

### Frontend

- [ ] Components and business logic are separated
- [ ] Colors, font size, and font family are in theme or constants
- [ ] No text in components, use i18n
- [ ] No inline styles
- [ ] Imports are absolute
- [ ] Attach a screenshot if PR has visual changes

### Backend

- [ ] Swagger documentation updated
- [ ] Database requests are optimized and not redundant
- [ ] Unit tests written
- [ ] Use ConfigService instead of process.env
- [ ] Use transactions for multi-table mutation chains
- [ ] Use `@index` decorator for frequently requested data
- [ ] Use REST API naming conventions
- [ ] Use UUIDs for primary keys
