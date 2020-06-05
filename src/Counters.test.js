import React from 'react';
import { render } from '@testing-library/react';
import Counters from './components/counters';

test('render Counters has halo dunia', () => {
  const { getByText } = render(<Counters />);
  const linkElement = getByText(/halo dunia/);
  expect(linkElement).toBeInTheDocument();
});
