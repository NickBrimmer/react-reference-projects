import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import ThisDay from './ThisDay';

jest.mock('../../services/thisDay.js', () => ({
  getThisDay: () => {
    return Promise.resolve({
      events: [{ year: '1145', text: 'This Happened' }],
      births: [{ year: '1566', text: 'This Birth Happened' }],
      deaths: [{ year: '1345', text: 'This Death Happened' }]
    });
  }
}));

describe('ThisDay container', () => {
  beforeEach(() => {
  });
  
  it('updates the display with inputs', () => {
    render(<ThisDay />);
    
    return waitFor(() => {
      expect(screen.getByText('Events')).toBeInTheDocument();
      expect(screen.getByText('1145 - This Happened')).toBeInTheDocument();
      expect(screen.getByText('1566 - This Birth Happened')).toBeInTheDocument();
      expect(screen.getByText('1345 - This Death Happened')).toBeInTheDocument();
    });
  });
});
