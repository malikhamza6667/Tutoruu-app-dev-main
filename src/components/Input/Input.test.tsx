import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Input from './Input';

describe('Input', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText, getByDisplayValue } = render(<Input placeholder="Enter text" value="Initial value" onChangeText={() => {}} />);
    const input = getByPlaceholderText('Enter text');
    const displayValue = getByDisplayValue('Initial value');
    expect(input).toBeTruthy();
    expect(displayValue).toBeTruthy();
  });

  it('calls onChangeText when input text changes', () => {
    const onChangeText = jest.fn();
    const { getByPlaceholderText } = render(<Input placeholder="Enter text" value="" onChangeText={onChangeText} />);
    const input = getByPlaceholderText('Enter text');
    fireEvent.changeText(input, 'New text');
    expect(onChangeText).toHaveBeenCalledWith('New text');
  });

  it('renders an icon if one is provided', () => {
    const { getByTestId } = render(<Input placeholder="Enter text" value="" onChangeText={() => {}} icon="FontAwesome search 20 red" iconPosition='right' />);
    const icon = getByTestId('input-icon');
    expect(icon).toBeTruthy();
  });
});