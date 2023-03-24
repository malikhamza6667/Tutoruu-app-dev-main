import React from 'react';
import { render } from '@testing-library/react-native';
import SlotsCard from './SlotsCard';

describe('SlotsCard', () => {
  const slots = [{ date: '2022-01-01', available_times: [12, 13, 14] }];

  it('renders the correct number of slots and date', () => {
    const { getByText } = render(<SlotsCard slots={slots} />);
    expect(getByText('3 Slots')).not.toBeNull();
    expect(getByText('January 1, 2022')).not.toBeNull();
  });
});