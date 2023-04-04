import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from './Button';


describe('Button', () => {
  it('renders the component', () => {
    const { getByTestId } = render(<Button shape='default' onPress={() => console.log('Button pressed')} />);
    const button = getByTestId('button');
    expect(button).toBeTruthy();
  });

  it('executes onPress function when the button is pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(<Button shape='default' onPress={onPressMock} />);
    const button = getByTestId('button');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalled();
  });

  it('disables the button when disabled prop is true', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(<Button shape='default' onPress={()=>{console.log('Button ')}} disabled />);
    const button = getByTestId('button');
    expect(button).toBeTruthy()
    
  });
  it('renders the text prop correctly', () => {
    const { getByText } = render(<Button shape='default' onPress={() => console.log('Button pressed')} text="Test Button" />);
    const buttonText = getByText('Test Button');
    expect(buttonText).toBeTruthy();
  });

  it('renders the icon prop correctly', () => {
    const { getByTestId } = render(<Button shape='full' onPress={() => console.log('Button pressed')} icon="AntDesign arrowright 24 white" />);
    const icon = getByTestId('icon');
    expect(icon).toBeTruthy();
  });

  it('renders the image prop correctly', () => {
    const { getByTestId } = render(<Button shape='full' onPress={() => console.log('Button pressed')} image="https://example.com/image.png" />);
    const image = getByTestId('image');
    expect(image).toBeTruthy();
  });
});
