import React from 'react';
import { render } from '@testing-library/react-native';
import SessionCard from './SessionCard';

describe('SessionCard Component', () => {
  const props = {
    class_name: 'Math',
    time: '12:00 P.M',
    day: 'Monday',
    is_accepted: false,
    location: '123 Main St',
  };

  it('renders the correct props', () => {
    const { getByTestId } = render(<SessionCard {...props} />);
    expect(getByTestId('time').props.children).toEqual('12:00 P.M');
    expect(getByTestId('location').props.children).toEqual('123 Main St');
    expect(getByTestId('day').props.children).toEqual('Monday');
    expect(getByTestId('class_name').props.children).toEqual('Math');
    expect(getByTestId('is_accepted').props.children).toEqual('Awating Confirmation');
  });

  it('displays "Confirmed" if is_accepted prop is true', () => {
    const { getByTestId } = render(<SessionCard {...props} is_accepted={true} />);
    expect(getByTestId('is_accepted').props.children).toEqual('Confirmed');
  });

  
});
