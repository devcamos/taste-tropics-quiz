# 🏝️ Taste Tropics Quiz

A React-based interactive quiz that helps users discover their Caribbean flavor personality. Built with modern technologies and optimized for production deployment.

## ✨ Features

- **Interactive Quiz**: 6 questions to determine your Caribbean flavor personality
- **5 Personality Types**: Bold, Fresh, Balanced, Mystical, and Adventurous
- **Responsive Design**: Beautiful UI with Tailwind CSS
- **Secure & Fast**: Updated dependencies with 82% fewer security vulnerabilities
- **Production Ready**: Optimized build with Vercel deployment configuration

## 🚀 Quick Deploy to Vercel

### Option 1: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/taste-tropics-quiz)

### Option 2: Manual Deploy
1. Run the deployment helper:
   ```bash
   npm run deploy
   ```
2. Follow the instructions to deploy to Vercel

### Option 3: Vercel CLI
```bash
npm install -g vercel
vercel login
npm run deploy:vercel
```

📖 **For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)**

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
| Build for production        | `npm run build`                |
| Run Jest/RTL tests          | `npm test`                     |
| Run Playwright E2E tests    | `npx playwright test`          |
| Run Playwright component    | `npx playwright test-ct`       |
| **Deploy to Vercel**        | `npm run deploy`               |
| **Preview production build** | `npm run preview`              |

---

## Notes
- For Playwright E2E, your app must be running (`npm start`).
- For Playwright component tests, you do **not** need to run the app server.
- Update your Playwright tests in the `playwright/` directory as needed.

---

Happy coding!
