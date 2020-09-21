//Unused class currently. Will be deleted at a later date.

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

//Currently unused code. Causes errors in travisCI

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
