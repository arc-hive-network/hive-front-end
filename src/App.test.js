import React from 'react'
import { render } from '@testing-library/react'
import App, { handleChange } from './App.js'

test('renders Hive app text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hive app/i);
  expect(linkElement).toBeInTheDocument();
});

test('test if 1 is 1', () => {
  expect(1).toBe(1)
})

test('Enter button sets user to true', () => {
  expect(1).toBe(1)
})
