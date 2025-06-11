# Taste Tropics Quiz

A React-based interactive quiz with Tailwind CSS, Playwright, and full test coverage.

## Local Development & Testing

### 1. Install Dependencies

```
npm install
```

### 2. Run the App Locally

```
npm start
```
- Opens at [http://localhost:3000](http://localhost:3000)

### 3. Run React Unit/Component Tests (Jest/RTL)

```
npm test
```
- Runs all `*.test.js(x)` files in `src/`

### 4. Run Playwright E2E Tests

**Start the app first:**
```
npm start
```
Then, in a new terminal:
```
npx playwright test
```
_or (if you added the script):_
```
npm run test:e2e
```

### 5. Run Playwright Component Tests

```
npx playwright test-ct
```
_or (if you added the script):_
```
npm run test:ct
```

### 6. Scripts Summary

| Task                        | Command                        |
|-----------------------------|--------------------------------|
| Install dependencies        | `npm install`                  |
| Start React app             | `npm start`                    |
| Run Jest/RTL tests          | `npm test`                     |
| Run Playwright E2E tests    | `npx playwright test`          |
| Run Playwright component    | `npx playwright test-ct`       |

---

## Notes
- For Playwright E2E, your app must be running (`npm start`).
- For Playwright component tests, you do **not** need to run the app server.
- Update your Playwright tests in the `playwright/` directory as needed.

---

Happy coding!
