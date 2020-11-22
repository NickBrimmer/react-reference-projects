import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import ColorPickerHooks from './ColorPickerHooks';

describe('ColorPickerHooks container', () => {
  beforeEach(() => {
    render(<ColorPickerHooks />);
  });

  it('updates the display with inputs', () => {
    fireEvent.change(screen.getByLabelText('Text'), {
      target: {
        value: 'Hello'
      }
    });

    fireEvent.change(screen.getByLabelText('Background Color'), {
      target: {
        value: '#000000'
      }
    });

    fireEvent.change(screen.getByLabelText('Text Color'), {
      target: {
        value: '#FFFFFF'
      }
    });

    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByText('Hello')).toHaveStyle({
      color: '#FFFFFF'
    });

    expect(screen.getByTestId('color-display')).toHaveStyle({
      backgroundColor: '#000000',
      width: '500px',
      height: '500px'
    });
  });
});
