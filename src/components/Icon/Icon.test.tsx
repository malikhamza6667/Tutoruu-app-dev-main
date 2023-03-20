import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Icon } from './Icon';

describe('Icon', () => {
  it('calls onPress prop when clicked', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Icon onPress={onPressMock} name="arrow-right" family="FontAwesome" size="medium" />
    );
    const icon = getByTestId('icon');

    fireEvent.press(icon);

    expect(onPressMock).toHaveBeenCalled();
  });
});