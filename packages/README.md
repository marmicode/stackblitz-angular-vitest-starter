These packages are either forks or nightly builds of the original packages. `@angular/build` and `@vitest/browser` are patched.

Adding a github commit as a package does not seem to work on Stackblitz.
Applying pnpm patches does not seem to work on Stackblitz either.

Issues:

- https://github.com/vitest-dev/vitest/pull/8977
- https://github.com/angular/angular-cli/issues/31732
- https://github.com/angular/angular-cli/issues/31733
