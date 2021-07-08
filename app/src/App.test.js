import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should fire the strike buttons', () => {
  const { getByText } = render(<App />)
  const strike = getByText(/^Add Strike$/i);

  fireEvent.click(strike)
  fireEvent.click(strike)
  getByText(/Strikes: 2/)
})

// describe('<App />', () => {
//   it('strikeCounter()', () => {
//     expect(strikeCounter(0)).toBe(1)
//     expect(strikeCounter(1)).toBe(2)
//     expect(strikeCounter(2)).toBe(0)
//   })

//   it('ballCounter', () => {
//     expect(ballCounter(0)).toBe(1)
//     expect(ballCounter(1)).toBe(2)
//     expect(ballCounter(2)).toBe(3)
//     expect(ballCounter(4)).toBe(0)
//   })
// })
