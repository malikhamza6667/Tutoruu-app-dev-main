import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Icon } from './Icon';
import Colors from '../../../assets/Colors';

describe('Icon', () => {
  it('calls onPressIcon when icon is pressed', () => {
    const onPressIconMock = jest.fn();
    const { getByTestId } = render(
      <Icon name="bookmark" size="medium" color={Colors.orange} family="Entypo" onPressIcon={onPressIconMock} />
    );

    fireEvent.press(getByTestId('icon'));
    expect(onPressIconMock).toHaveBeenCalled();
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