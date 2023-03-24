import React from 'react';
import { render } from '@testing-library/react-native';
import { Separator } from './Separator';

describe('Separator component', () => {
  test('renders line separator correctly', () => {
    const { getByTestId } = render(<Separator type="line" />);
    const separator = getByTestId('separator');
    expect(separator).toHaveStyle({ borderBottomWidth: 2, borderBottomColor: '#D1D5DB' });
  });

  test('renders dot separator correctly', () => {
    const { getByTestId } = render(<Separator type="dot" />);
    const separator = getByTestId('separator');
    expect(separator).toHaveStyle({ width: 1, height: 1, borderRadius: 1, backgroundColor: '#D1D5DB' });
  });
});
