import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Notification } from './Notification';

describe('Notification', () => {
  it('calls onClick prop when clicked', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(
      <Notification
        text="Test notification"
        image="https://example.com/image.png"
        link="https://example.com"
        is_read={false}
        onClick={onClickMock}
      />
    );
    const notification = getByTestId('notification');

    fireEvent.press(notification);

    expect(onClickMock).toHaveBeenCalled();
  });
});
