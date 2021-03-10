import { render, screen } from '@testing-library/react';
import App from '../components/App';



test('renders react static link', () => {
  render(<App />);
  const linkElement = screen.getByText(/react static/i);
  expect(linkElement).toBeInTheDocument();
});
