import React from 'react';
import { Text } from 'react-native';
import { fireEvent, render } from '@testing-library/react-native';
import Review from './Review';

describe('Review component', () => {
  const props = {
    text: 'Lorem ipsum dolor sit amet',
    author_image: 'image.jpg',
    author_name: 'John Doe',
    class_name: 'Mathematics',
    date: '2022-03-24',
    rating: 3,
  };

  it('should render the correct text and rating', () => {
    const { getByText } = render(<Review {...props} />);
    const date = getByText('2022-03-24');
    const text = getByText('Lorem ipsum dolor sit amet');
    expect(date).toBeTruthy();
    expect(text).toBeTruthy();
  });

});