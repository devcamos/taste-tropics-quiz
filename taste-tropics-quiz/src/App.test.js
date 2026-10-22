import { render, screen } from '@testing-library/react';
import App from './App';

test('renders taste tropics quiz', () => {
  render(<App />);
  const titleElement = screen.getByText(/Taste Tropics/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders start quiz button', () => {
  render(<App />);
  const startButton = screen.getByText(/Start Your Flavor Journey/i);
  expect(startButton).toBeInTheDocument();
});
