import { render, screen } from '@testing-library/react';
import Header from '~/comps/Header';

test('renders header', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Todo List/i);
  expect(linkElement).toBeInTheDocument();
});
