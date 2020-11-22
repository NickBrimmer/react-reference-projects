import React from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';
import { ColorPickerProvider } from '../../hooks/ColorPickerProvider';

export default function App() {
  return (
    <ColorPickerProvider>
      <ColorPicker />
    </ColorPickerProvider>
  );
}
  
