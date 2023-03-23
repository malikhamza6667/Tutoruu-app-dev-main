import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ChatPreview from './ChatPreview';

const mockUser = {
  name: 'John Doe',
  image: 'https://example.com/avatar.png',
  username: 'johndoe',
};

describe('ChatPreview', () => {
  const props = {
    user: mockUser,
    last_message: 'Hello',
    last_message_date: '2022-01-01 10:00:00',
    unread_count: 3,
    onPress: jest.fn(),
  };

  it('renders correctly', () => {
    const { getByText, getByTestId } = render(<ChatPreview {...props} />);
    expect(getByText(props.user.name)).toBeDefined();
    expect(getByText(props.last_message)).toBeDefined();
    expect(getByText(props.last_message_date)).toBeDefined();
    expect(getByTestId('unread-count').props.children).toBe(props.unread_count.toString());
  });

  it('calls onPress when pressed', () => {
    const { getByTestId } = render(<ChatPreview {...props} />);
    fireEvent.press(getByTestId('chat-preview'));
    expect(props.onPress).toHaveBeenCalled();
  });
});
