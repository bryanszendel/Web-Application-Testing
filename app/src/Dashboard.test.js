import React from 'react';
import "@testing-library/react";

import Dashboard from './Dashboard';
import { strikeCounter, ballCounter } from './helpers'

// describe('<Dashboard />', () => {
//   it('should render several buttons', () => {

//   })
  
//   it('buttons should have working click listeners that fire functions', () => {

//   })

  describe('helpers.js', () => {
    it('strikeCounter()', () => {
      expect(strikeCounter(0)).toBe(1)
      expect(strikeCounter(1)).toBe(2)
      expect(strikeCounter(2)).toBe(0)
    })

    it('ballCounter', () => {
      expect(ballCounter(0)).toBe(1)
      expect(ballCounter(1)).toBe(2)
      expect(ballCounter(2)).toBe(3)
      expect(ballCounter(4)).toBe(0)
    })
  })
// })

// balls + strikes reset to 0 when a player reaches 3 strikes or 4 balls.


// balls and strikes reset to 0 when a `hit` is recorded.


// a `foul` increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.