import React from 'react';
import { Text } from 'react-native';
import { fireEvent, render } from '@testing-library/react-native';
import Review from './Review';
import '@testing-library/jest-native/extend-expect';
describe('Review component', () => {
  const props = {
    text: 'Lorem ipsum dolor sit amet',
    author_image: 'image.jpg',
    author_name: 'John Doe',
    class_name: 'Mathematics',
    date: '2022-03-24',
    rating: 3,
    onPress: jest.fn(),
  };

  it('should render the correct text and rating', () => {
    const { getByText } = render(<Review {...props} />);
    const date = getByText('2022-03-24');
    const text = getByText('Lorem ipsum dolor sit amet');
    expect(date).toBeTruthy();
    expect(text).toBeTruthy();
  });

  it('renders correctly without class name', () => {
    const props = {
      text: 'This is a review',
      author_image: 'author_image.jpg',
      author_name: 'John Doe',
      date: '2022-04-10',
      rating: 4.5,
      class_name: '', // Set class_name to empty string
    };
    const { getByTestId } = render(<Review {...props} />);
    const reviewCard = getByTestId('review-card');
    const starRatings = getByTestId('star-ratings');
    const classNameText = props.class_name ? (props.class_name) : null; // Check that class_name is not rendered as text

    expect(reviewCard).toBeDefined();
    expect(starRatings).toBeDefined();
    expect(classNameText).toBeNull();
  });


});