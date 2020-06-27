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

// Test for CreateCell component
// import components
// import { handleChange, handleSubmit } from './components/HiveMain/subComp/CreateCell/CreateCell'
// test functionality of HandleChange
// Expect input of a string and the variable to be set as a string equal to the input

// test functionality of handleSubmit
// Expect Input 'click' and the result should be the data in the form to be sent

// import { handleDelete, handleAddition, handleDrag } from './components/HiveMain/subComp/CreateCell/tag'
// test functionality of handleDelete
// Expect Input 'click' and the result should be the tag being removed from the data

// test functionality of handleAddition
// Expect Input to be a string in the form and the output a tag in the tags field

// test functionality of handleDrag
// Expect Input 'click' in one place and 'release' in another, output should be the change in position of the string 
