import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import App from './App';

describe("App Component", function () {
  it("should have hello world message", function () {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Hello World/i);
    expect(linkElement).toBeInTheDocument();
  });
});