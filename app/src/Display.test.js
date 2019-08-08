import React from 'react';
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";


import Display from './Display'

describe('<Display />', () => {
  it('should render a display of strikes and balls', () => {
    const display = render(<Display />)
    display.getByText(/^strikes:$/i) //searches for an exact match of the string and not a substring
    display.getByText(/^balls:$/i) //searches for an exact match of the string and not a substring
  })
})