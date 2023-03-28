import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ActionLink from './ActionLink';

describe('ActionLink', () => {
  const onPressMock = jest.fn();

  it('should render correctly', () => {
    const { getByTestId } = render(
      <ActionLink text="Test" icon="FontAwesome5 test-icon" link='https://google.com' family="FontAwesome5" />,
    );

    expect(getByTestId('touchable-opacity')).toBeTruthy();
  });

  it('should call onPress when pressed', () => {
    const { getByTestId } = render(
      <ActionLink text="Test" icon="FontAwesome5 test-icon" link='https://google.com' family="FontAwesome5" onPress={onPressMock} />,
    );

    fireEvent.press(getByTestId('touchable-opacity'));

    expect(onPressMock).toHaveBeenCalled();
  });
 
});


