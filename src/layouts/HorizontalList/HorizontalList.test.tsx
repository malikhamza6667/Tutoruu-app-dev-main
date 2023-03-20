import React from 'react';
import { render } from '@testing-library/react-native';
import HorizontalList from './HorizontalList';
import {View,Text} from 'react-native'
const data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

describe('HorizontalList', () => {
  it('renders a horizontal list of items', () => {
    const renderItem = ({ item }: { item: { id: number, name: string } }) => (
      <View>
        <Text>{item.name}</Text>
      </View>
    );

    const { getByText } = render(
      <HorizontalList data={data} renderItem={renderItem} />
    );

    expect(getByText('Item 1')).toBeTruthy();
    expect(getByText('Item 2')).toBeTruthy();
    expect(getByText('Item 3')).toBeTruthy();
  });
});