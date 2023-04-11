import React from 'react';
import { render } from '@testing-library/react-native';
import SlotsCard from './SlotsCard';
import '@testing-library/jest-native/extend-expect';
describe('SlotsCard', () => {


  it('displays the number of available slots correctly for multiple dates with different numbers of slots', () => {
    const slots = [
      { date: '2022-01-01', available_times: [12, 13, 14] },
    ];
    const { getAllByText } = render(<SlotsCard slots={slots} />);
    const slotsElements = getAllByText(/Slots/);
    expect(slotsElements).toHaveLength(slots.length);
    slotsElements.forEach((element, index) => {
      expect(element).toHaveTextContent(`${slots[index].available_times.length} Slots`);
    });
  });

  it('displays the number of available slots correctly for multiple dates with different numbers of slots', () => {
    const slots = [
      { date: '2022-01-01', available_times: [12, 13] },
    ];
    const { getAllByText } = render(<SlotsCard slots={slots} />);
    const slotsElements = getAllByText(/Slots/);
    expect(slotsElements).toHaveLength(slots.length);
    slotsElements.forEach((element, index) => {
      expect(element).toHaveTextContent(`${slots[index].available_times.length} Slots`);
    });
  });

  it('displays the number of available slots correctly for multiple dates with different numbers of slots', () => {
    const slots = [
      { date: '2022-01-01', available_times: [12] },
    ];
    const { getAllByText } = render(<SlotsCard slots={slots} />);
    const slotsElements = getAllByText(/Slots/);
    expect(slotsElements).toHaveLength(slots.length);
    slotsElements.forEach((element, index) => {
      expect(element).toHaveTextContent(`${slots[index].available_times.length} Slots`);
    });
  });

  it('renders correctly', () => {
    const slots = [
      { date: '2022-10-10', available_times: [12, 13, 14] },
    ];
    const { getByText } = render(<SlotsCard slots={slots} />);
    expect(getByText('3 Slots')).toBeTruthy();
    expect(getByText('2022-10-10')).toBeTruthy();
  });










});