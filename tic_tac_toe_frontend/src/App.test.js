import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title, status, 9 squares, and Reset button', () => {
  render(<App />);

  // Title
  expect(screen.getByRole('heading', { name: /tic tac toe/i })).toBeInTheDocument();

  // Status live region
  expect(screen.getByText(/Next:/i) || screen.getByText(/Winner:/i) || screen.getByText(/Draw!/i)).toBeInTheDocument();

  // 9 squares (buttons)
  const squares = screen.getAllByRole('button', { name: /Place|Cell/i });
  expect(squares.length).toBeGreaterThanOrEqual(9);

  // Reset button
  expect(screen.getByRole('button', { name: /reset/i })).toBeInTheDocument();
});
