import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ClassCard from './ClassCard';

describe('ClassCard', () => {
  const defaultProps = {
    // name: 'Test class',
    name:'Test Name',
    desc: 'Test description',
    onPress: jest.fn(),
  };

  it('renders correctly', () => {
    const { getByText } = render(<ClassCard {...defaultProps} />);
    expect(getByText('Test Name')).toBeDefined();
    expect(getByText('Test description')).toBeDefined();
  });
  it('should render the correct name and description', () => {
    const name = 'Test Class';
    const desc = 'Test description';

    const { getByText } = render(<ClassCard name={name} desc={desc} />);

    expect(getByText(name)).toBeDefined();
    expect(getByText(desc)).toBeDefined();
  });

  it('calls onPress when the "View" button is pressed', () => {
    const { getByText } = render(<ClassCard {...defaultProps} />);
    const button = getByText('View');
    fireEvent.press(button);
    expect(defaultProps.onPress).toHaveBeenCalled();
  });

  it('renders name and description correctly', () => {
    const { getByText } = render(<ClassCard {...defaultProps} />);
    expect(getByText('Test Name')).toBeTruthy();
    expect(getByText('Test description')).toBeTruthy();
  });
 
});
