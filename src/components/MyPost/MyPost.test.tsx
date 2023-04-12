import React, { useState } from 'react'
import { render, fireEvent } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import MyPost from './MyPost';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


describe('MyPost', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<MyPost />);
    const myPost = getByTestId('my-post');
    expect(myPost).toBeDefined();
  });
 


  it('renders Input component with correct props', () => {
    const { getByTestId } = render(<MyPost />)
    const input = getByTestId('my-post-input')
    expect(input.props.value).toBe('')
    expect(input.props.placeholder).toBe('Doe')
  })


  it('updates email state when Input component is changed', () => {
    const { getByTestId } = render(<MyPost />)
    const input = getByTestId('my-post-input')
    fireEvent.changeText(input, 'example@test.com')
    expect(input.props.value).toBe('example@test.com')
  })





 

});
