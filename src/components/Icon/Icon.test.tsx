import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Icon } from './Icon';

describe('Icon', () => {
  it('calls onPress prop when clicked', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Icon onPress={onPressMock} name="arrow-right" family="FontAwesome" size="medium" color='orange' />
    );
    const icon = getByTestId('icon');
    fireEvent.press(icon);
    expect(onPressMock).toHaveBeenCalled();
  });

  test('renders the correct icon size', () => {
    const { getByTestId } = render(<Icon family="FontAwesome" name="star" color="red" size="medium" />);
    const icon = getByTestId('icon');
    expect(icon.children[0].props.size).toBe(30);
  });
  test('renders the correct icon color', () => {
    const { getByTestId } = render(<Icon family="FontAwesome" name="star" color="red" size="medium" />);
    const icon = getByTestId('icon');
    expect(icon.children[0].props.color).toBe('red');
  });
  test('renders the correct icon name', () => {
    const { getByTestId } = render(<Icon family="FontAwesome" name="star" color="red" size="medium" />);
    const icon = getByTestId('icon');
    expect(icon.children[0].props.name).toBe('star');
  });
});