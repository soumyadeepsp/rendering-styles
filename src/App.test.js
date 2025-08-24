import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App3';

test('renders learn react link', () => {
  render(<App />);
  
});

test('renders learn react link', () => {
  render(<App />);
  // check if a button with data-stid "counter1-button" is present or not
  const counter1Button = screen.getByTestId('counter1-button');
  expect(counter1Button).toBeInTheDocument();
  // check if a button with data-stid "counter2-button" is present or not
  const counter2Button = screen.getByTestId('counter2-button');
  expect(counter2Button).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<App />);
  // click the button with data-stid "counter1-button"
  const counter1Button = screen.getByTestId('counter1-button');
  counter1Button.click();

});

test('renders learn react link', () => {
  render(<App />);
  // click the button with data-stid "counter2-button"
  const counter2Button = screen.getByTestId('counter2-button');
  counter2Button.click();
  
});