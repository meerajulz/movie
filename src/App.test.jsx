import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: /Medical Report Auto-Complete/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Medical Report Auto-Complete/i)
    ).toBeInTheDocument();
  });


});
