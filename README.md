# Cart demo

A tiny cart page used to test Fei's PR CI loop (failing CI and merge conflicts on Fei's pull requests).

- `npm run dev` starts the page on port 3000 (no dependencies).
- `npm test` runs the unit tests.
- `npm run lint` fails on `console.log` or `TODO` in `src/`.

CI runs `test` and `lint` as two separate checks on every pull request.
