import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders rooms header', () => {
  render(<App />);
  const el = screen.getByText('Rooms');
  expect(el).toBeInTheDocument();
});
