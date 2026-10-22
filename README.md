# Taste Tropics Quiz

An interactive taste-profile quiz built with React 18 and Tailwind CSS. Players answer a short series of questions and get a result at the end. Small front-end practice project.

The app lives in [`taste-tropics-quiz/`](taste-tropics-quiz/). See its [README](taste-tropics-quiz/README.md) for full details.

## Stack

- React 18 (Create React App / `react-scripts`)
- Tailwind CSS, lucide-react icons
- Jest + React Testing Library (unit/component)
- Playwright (end-to-end)

## Run locally

```sh
cd taste-tropics-quiz
npm install
npm start          # http://localhost:3000
```

## Tests

```sh
cd taste-tropics-quiz
npm test                 # Jest / RTL
npx playwright test      # E2E (start the app first)
```
