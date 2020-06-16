import React from 'react';
import { render } from '@testing-library/react';
import App, { handleChange } from './App.js'

test('renders Hive app text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hive app/i);
  expect(linkElement).toBeInTheDocument();
});

test('test if 1 is 1', () => {
  expect(handleChange).toBe(handleChange)
})
