import React from 'react';
import {render} from '@testing-library/react-native';
import ChatMessage from './ChatMessage';

describe('ChatMessage', () => {
  const messageProps = {
    mine: true,
    date: '2022-03-23',
    sender_image: 'https://i.pravatar.cc/300',
    text: 'Hello world!',
  };

  it('renders correctly when the message is mine', () => {
    const {getByText, getByTestId} = render(<ChatMessage {...messageProps} />);
    const messageText = getByText(messageProps.text);
    const avatar = getByTestId('avatar');

    expect(messageText).toBeDefined();
    expect(avatar).toBeDefined();
  });

  it('renders correctly when the message is not mine', () => {
    const notMineProps = {...messageProps, mine: false};
    const {getByText, getByTestId} = render(<ChatMessage {...notMineProps} />);
    const messageText = getByText(notMineProps.text);
    const avatar = getByTestId('avatar');

    expect(messageText).toBeDefined();
    expect(avatar).toBeDefined();
  });
});
