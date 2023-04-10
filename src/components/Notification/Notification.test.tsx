import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Notification } from './Notification';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Linking } from 'react-native';
import tw from 'twrnc';
import '@testing-library/jest-native/extend-expect';
describe('Notification Component', () => {
  const props = {
    text: 'Lorem ipsum',
    image: 'https://example.com/image.png',
    is_read: false,
    link: 'https://example.com',
    onClick: jest.fn(),
  };


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

  it('renders the image with the correct source and dimensions', () => {
    const { getByTestId } = render(<Notification {...props} />);
    const image = getByTestId('notification-image');
    expect(image.props.source.uri).toBe(props.image);
    expect(image.props.style.width).toBe(48); // replace with your expected image width
    expect(image.props.style.height).toBe(48); // replace with your expected image height
  });

  test('renders notification text with correct style', () => {
    const notificationText = 'This is a notification';
    const { getByText } = render(<Notification text={notificationText} image={'https://example.com/image.jpg'} is_read={false} link={'https://example.com'} />);
    const textElement = getByText(notificationText);
    expect(textElement).toHaveStyle({
      color: '#f97316', 
      fontSize: 18,
    });
  });
  
  it('opens the notification link in a browser when clicked', () => {
    const mockOpenURL = jest.spyOn(Linking, 'openURL');
    const notificationText = 'New notification';
    const notificationImage = 'https://example.com/image.jpg';
    const notificationLink = 'https://example.com/notification';
    const { getByTestId } = render(
      <Notification
        text={notificationText}
        image={notificationImage}
        is_read={false}
        link={notificationLink}
      />
    );
    const notification = getByTestId('notification');
    fireEvent.press(notification);
    expect(mockOpenURL).toHaveBeenCalledWith(notificationLink);
    mockOpenURL.mockRestore();
  });
  
});
