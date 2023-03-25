import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Signup from './Signup';

describe('Signup component', () => {
  it('renders correctly', () => {
    render(<Signup />);
  });

});
