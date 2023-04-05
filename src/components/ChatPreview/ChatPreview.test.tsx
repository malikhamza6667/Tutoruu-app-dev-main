import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import ChatPreview from './ChatPreview';
import Colors from '../../../assets/Colors';

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
  it('has orange background color when unread_count is greater than 0', () => {
    const { getByTestId } = render(<ChatPreview {...props} />);
    expect(getByTestId('chat-preview')).toHaveStyle({
      backgroundColor: Colors.lightorange,
    });
  })

  it('has white background color when unread_count is not passed or is a negative number', () => {
    const noUnreadCountProps = {
      ...props,
      unread_count: undefined,
    };
    const negativeUnreadCountProps = {
      ...props,
      unread_count: -1,
    };
    const { getByTestId } = render(<ChatPreview {...noUnreadCountProps} />);
    expect(getByTestId('chat-preview')).toHaveStyle({
      backgroundColor: '#FFFFFF',
    });
    const { getByTestId: getByTestIdNegative } = render(<ChatPreview {...negativeUnreadCountProps} />);
    expect(getByTestIdNegative('chat-preview')).toHaveStyle({
      backgroundColor: '#FFFFFF',
    });
  });


  it('renders correctly with an empty last message', () => {
    const emptyMessageProps = {
      ...props,
      last_message: '',
    };
    const { getByText } = render(<ChatPreview {...emptyMessageProps} />);
    expect(getByText(mockUser.name)).toBeDefined();
  });

  it('renders correctly with a long last message', () => {
    const longMessageProps = {
      ...props,
      last_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id ipsum vitae velit maximus feugiat.',
    };
    const { getByText } = render(<ChatPreview {...longMessageProps} />);
    expect(getByText(longMessageProps.last_message.split(' ').slice(0, 3).join(' ') + '...')).toBeDefined();
  });
  it('calls onPress when pressed', () => {
    const { getByTestId } = render(<ChatPreview {...props} />);
    fireEvent.press(getByTestId('chat-preview'));
    expect(props.onPress).toHaveBeenCalled();
  });

  // it('does not call onPress when not provided', () => {
  //   const noOnPressProps = {
  //     ...props,
  //     onPress: undefined,
  //   };
  //   const { getByTestId } = render(<ChatPreview {...noOnPressProps} />);
  //   fireEvent.press(getByTestId('chat-preview'));
  //   expect(props.onPress).not.toHaveBeenCalled();
  // });
  
});
