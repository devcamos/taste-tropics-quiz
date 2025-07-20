import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Taste Tropics heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Taste Tropics/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders start journey button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Start Your Flavor Journey/i);
  expect(buttonElement).toBeInTheDocument();
});

test('renders flavor personality text', () => {
  render(<App />);
  const flavorText = screen.getByText(/Discover Your Caribbean Flavor Personality/i);
  expect(flavorText).toBeInTheDocument();
});
