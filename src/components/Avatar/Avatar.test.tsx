import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Avatar  from './Avatar';

describe('Avatar', () => {
  const defaultProps = {
    showCap: false,
    image: "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?cs=srgb&dl=pexels-pixabay-39866.jpg&fm=jpg"
  };

  it('renders an image with correct size and style when showCap is false', () => {
    const { getByTestId } = render(<Avatar size='medium' {...defaultProps} />);
    const avatarImage = getByTestId('avatarImage');

    expect(avatarImage.props.style).toEqual({
      width: 96, // default size for medium
      height: 96, // default size for medium
      borderRadius: 9999 // half of default width and height
    });
  });

  it('renders an image and a cap with correct size and style when showCap is true', () => {
    const { getByTestId } = render(<Avatar size='medium' {...defaultProps} showCap />);
    const avatarImage = getByTestId('avatarImage');
    const capImage = getByTestId('capImage');

    expect(avatarImage.props.style).toEqual({
      width: 96, // default size for medium
      height: 96, // default size for medium
      borderRadius: 9999 // half of default width and height
    });

    expect(capImage.props.style).toEqual({
      width: 162, // default size for medium cap
      height: 17, // default size for medium cap
      right: 0,
      top: 0
    });
  });

  it('adjusts the style of image and cap based on size prop', () => {
    const smallProps = { ...defaultProps };
    const { getByTestId: getByTestIdSmall } = render(<Avatar size='small' {...smallProps} showCap />);
    const smallAvatarImage = getByTestIdSmall('avatarImage');
    const smallCapImage = getByTestIdSmall('capImage');

    expect(smallAvatarImage.props.style).toEqual([
      {
        width: 32, // size for small
        height: 32, // size for small
        borderRadius: 9999, // half of width and height
        marginRight: -3.5, // adjusted margin
        marginBottom: -3, // adjusted margin
      },
    ]);
    
    expect(smallCapImage.props.style).toEqual([
      {
        width: 11, // size for small cap
        height: 11, // size for small cap
        right: 0,
        top: 0,
      },
    ]);

    const largeProps = { ...defaultProps };
    const { getByTestId: getByTestIdLarge } = render(<Avatar size='large' {...largeProps} showCap />);
    const largeAvatarImage = getByTestIdLarge('avatarImage');
    const largeCapImage = getByTestIdLarge('capImage');

    expect(largeAvatarImage.props.style).toEqual([
      {
        width: 256, // size for large
        height: 256, // size for large
        borderRadius: 9999, // half of width and height
        marginRight: -5.5, // adjusted margin
        marginBottom: -5, // adjusted margin
      },
    ]);
    
    expect(largeCapImage.props.style).toEqual([
      {
        width: 225, // size for large cap
        height: 22.5, // size for large cap
        right: 10,
        top: -13, // adjusted position
      },
    ]);
   
