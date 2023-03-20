import React from 'react';
import { render } from '@testing-library/react-native';
import { Avatar}  from './Avatar';

describe('Avatar', () => {
  it('renders the correct size and image', () => {
    const imageMock = { uri: 'https://example.com/avatar.png' };
    const { getByTestId } = render(<Avatar size="medium" showCap={true} image={imageMock} />);
    const capImage = getByTestId('capImage');
    const avatarImage = getByTestId('avatarImage');

    expect(capImage.props.source).toEqual(require('../../../assets/dpframe.png'));
    expect(capImage.props.style).toEqual([{ 
      width: 22, 
      height: 22, 
      top: -15, 
      left: -6,
      zIndex: 60 ,
      position: "absolute" 
    }]);
    expect(avatarImage.props.source).toEqual(imageMock);
    expect(avatarImage.props.style).toEqual([{ 
      borderRadius: '100%', 
      width: 16, 
      height: 16, 
      position: 'relative', 
      zIndex: 30 ,
      
    }]);
  });
});
