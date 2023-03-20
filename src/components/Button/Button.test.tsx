import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from './Button';



describe('Button', () => {
    it('calls onPress prop when clicked', () => {
      const onPressMock = jest.fn();
      const { getByTestId } = render(<Button onPress={onPressMock} text="Click me" shape='round' icon='AntDesign arrowright 20 white'/>);
      const button = getByTestId('button');
  
      fireEvent.press(button);
  
      expect(onPressMock).toHaveBeenCalled();
    });
  });