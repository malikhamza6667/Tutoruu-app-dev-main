import React from 'react';
import { render } from '@testing-library/react-native';
import { Separator } from './Separator';
import '@testing-library/jest-native/extend-expect';

describe('Separator', () => {
  it('renders a line separator when type is "line"', () => {
    const { getByTestId } = render(<Separator type="line" />);
    const separator = getByTestId('separator');
    expect(separator.props.style).toEqual({ borderBottomWidth: 2, borderColor: "#f3f4f6",});
  });

  it('renders a dot separator when type is "dot"', () => {
    const { getByTestId } = render(<Separator type="dot" />);
    const separator = getByTestId('separator');
    expect(separator.props.style).toEqual({ backgroundColor: "#f3f4f6", borderRadius: 9999, height: 4, width: 4 });
  });

  it('renders correctly if no type is provided', () => {
    const { getByTestId } = render(<Separator />);
    const separator = getByTestId('separator');
  });



});
