import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import { Header } from '.';

describe("Header Component", function () {
  it("should have upload button", function () {
    const { getByText } = render(<Header />);
    const linkElement = getByText(/Upload/i);
    expect(linkElement).toBeInTheDocument();
  });
});