import { render, screen } from '@testing-library/react';
import App from './App';

test('renders successfully', () => {
  render(<App />);
  const navbarElement = screen.getByRole('navigation');
  expect(navbarElement).toBeInTheDocument();
});
