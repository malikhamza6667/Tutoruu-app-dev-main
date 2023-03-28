import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import MyPost from './MyPost';

describe('MyPost', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<MyPost />);
    const myPost = getByTestId('my-post');
    expect(myPost).toBeDefined();
  });
});
