import React from 'react';
import { render } from '@testing-library/react-native';
import { Card } from './Card';
import {View,Text} from 'react-native'
describe('Card', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Card>
      <View>
        <Text>Hey</Text>
      </View>
    </Card>);
    const card = getByTestId('card');

    expect(card).toBeDefined();
    expect(card.props.style.backgroundColor).toEqual('#fff'); // Check background color
    expect(card.props.style.width).toEqual(expect.any(Number)); // Check width
    expect(card.props.style.borderRadius).toEqual(20); // Check border radius
    expect(card.props.style.shadowColor).toEqual('black'); // Check shadow color
    expect(card.props.style.shadowOpacity).toEqual(0.2); // Check shadow opacity
    expect(card.props.style.shadowOffset).toEqual({ width: 0, height: 2 }); // Check shadow offset
    expect(card.props.style.shadowRadius).toEqual(5); // Check shadow radius
    expect(card.props.style.elevation).toEqual(7); // Check elevation
    expect(card.props.style.justifyContent).toEqual('center'); // Check justifyContent
   
  });
});
