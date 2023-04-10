import React from 'react';
import { render } from '@testing-library/react-native';
import SessionCard from './SessionCard';
import '@testing-library/jest-native/extend-expect';
describe('SessionCard Component', () => {
  const props = {
    class_name: 'Math',
    time: '12:00 P.M',
    day: 'Monday',
    is_accepted: false,
    location: '123 Main St',
  };



  // const props = {
  //   time: '10:00 AM',
  //   location: 'New York',
  //   class_name: 'Mathematics',
  //   day: 'Monday',
  //   is_accepted: true,
  //   is_completed: false,
  //   payment_amount: 50,
  //   payment_fulfilled: true,
  //   created_date: '2022-04-09T23:13:00',
  //   onPress: jest.fn(),
  // };




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



  // it('should render the "Confirmed" text in uppercase with orange color when is_accepted is true', () => {
  //   const { getByTestId } = render(<SessionCard {...props} />);
  //   const confirmedText = getByTestId('is_accepted');
  //   // expect(confirmedText).toHaveTextContent('Confirmed');
  //   expect(confirmedText).toHaveStyle({
  //     color: '#FFA500',
  //     fontFamily: 'PoppinsMedium',
  //     padding: 0.5,
  //     paddingHorizontal: 2,
  //     textTransform: 'uppercase', 
  //   });
  // });

  // test('renders "Confirmed" text with expected styles when is_accepted is true', () => {
  //   const { getByTestId } = render(<SessionCard is_accepted={true} />);
  //   const confirmedText = getByTestId('is_accepted');
  //   // expect(confirmedText.props.children).toEqual('Confirmed');
  //   expect(confirmedText.props.style).toEqual([
  //     { fontFamily: 'PoppinsMedium', color: 'orange', textTransform: 'uppercase', padding: 0.5, paddingHorizontal: 2 },
  //   ]);
  // });





});
