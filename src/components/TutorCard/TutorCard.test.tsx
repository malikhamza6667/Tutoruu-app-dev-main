import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TutorCard from './TutorCard';

describe('TutorCard', () => {
  const mockProps = {
    text: 'Lorem ipsum dolor sit amet',
    user: {
      id: 1,
      name: 'John Doe',
      image: 'https://example.com/image.jpg',
    },
    num_sessions: 5,
    classes: [
      { name: 'Math', id: 1 },
      { name: 'Science', id: 2 },
      { name: 'History', id: 3 },
    ],
    rating: 4,
    rate: '$20/hour',
  };

  it('should render tutor name', () => {
    const { getByText } = render(<TutorCard onPress={function (): void {
        throw new Error('Function not implemented.');
    } } {...mockProps} />);
    expect(getByText(mockProps.user.name)).not.toBeNull();
  });

  it('should render tutor bio', () => {
    const { getByText } = render(<TutorCard onPress={function (): void {
        throw new Error('Function not implemented.');
    } } {...mockProps} />);
    expect(getByText('Bio')).not.toBeNull();
    expect(getByText(mockProps.text)).not.toBeNull();
  });

  it('should render tutor classes', () => {
    const { getByText } = render(<TutorCard onPress={function (): void {
        throw new Error('Function not implemented.');
    } } {...mockProps} />);
    expect(getByText(mockProps.classes[0].name)).not.toBeNull();
    expect(getByText(mockProps.classes[1].name)).not.toBeNull();
    expect(getByText(`+${mockProps.classes.length - 2}`)).not.toBeNull();
  });

//   it('should show all tutor classes when "more" button is pressed', () => {
//     const { getByText, queryByText } = render(<TutorCard onPress={function (): void {
//         throw new Error('Function not implemented.');
//     } } {...mockProps} />);
//      expect(queryByText(mockProps.classes[2].name)).toBeNull();
//     fireEvent.press(getByText(`+${mockProps.classes.length - 2}`));
//     mockProps.classes.forEach((classItem) => {
//       expect(getByText(classItem.name)).not.toBeNull();
//     });
//   });
 

  it('should call onPress function when "View Profile" button is pressed', () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <TutorCard {...mockProps} onPress={onPress} />
    );
    fireEvent.press(getByText('View Profile'));
    expect(onPress).toHaveBeenCalled();
  });
});
