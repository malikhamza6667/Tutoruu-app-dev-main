import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import {Notification} from './Notification';

import { Linking } from 'react-native';

describe('Notification Component', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <Notification
        text="Test Notification"
        image="https://via.placeholder.com/150"
        is_read={false}
        link="https://example.com"
      />,
    );
    const notification = getByTestId('notification');
    expect(notification).toBeDefined();
  });

  

  it('should handle Linking event', () => {
    const openUrlMock = jest.fn();
    jest.spyOn(Linking, 'openURL').mockImplementationOnce(openUrlMock);
    const { getByTestId } = render(
      <Notification
        text="Test Notification"
        image="https://via.placeholder.com/150"
        is_read={false}
        link="https://example.com"
      />,
    );
    const notification = getByTestId('notification');
    fireEvent.press(notification);
    expect(openUrlMock).toHaveBeenCalledWith('https://example.com');
  });
});
