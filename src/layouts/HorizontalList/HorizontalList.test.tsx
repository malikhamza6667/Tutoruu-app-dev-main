import React from 'react';
import { render } from '@testing-library/react-native';
import HorizontalList from './HorizontalList';
import { View, Text } from 'react-native'
const data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];
const mockData = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
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


  it('renders items with correct keys', () => {
    const renderItem = ({ item }: { item: { id: string; title: string } }) => (
      <Text>{item.title}</Text>
    );

    const { getByText } = render(
      <HorizontalList
        data={mockData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    );

    expect(getByText('Item 1')).toBeTruthy();
    expect(getByText('Item 2')).toBeTruthy();
    expect(getByText('Item 3')).toBeTruthy();
  });



  it('renders horizontally with correct content container style', () => {
    const renderItem = ({ item }: { item: { id: string; title: string } }) => (
      <Text>{item.title}</Text>
    );

    const { getByTestId } = render(
      <HorizontalList
        data={mockData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingVertical: 10,
          paddingHorizontal: 20,
        }}
      />
    );

    const flatList = getByTestId('horizontal-list');
    expect(flatList.props.horizontal).toBe(true);
    expect(flatList.props.contentContainerStyle).toEqual({
      paddingVertical: 10,
      paddingHorizontal: 20,
    });
  });








  it('renders the ListEmptyComponent when the data prop is empty', () => {
    const emptyComponent = () => <Text testID="empty-component">No items to display</Text>;

    const { getByTestId } = render(
      <HorizontalList
        data={[]}
        renderItem={({ item }: { item: { id: string; title: string } }) => <Text testID={`item-${item.id}`}>{item.title}</Text>}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={emptyComponent}
      />
    );

    const emptyComponentElement = getByTestId('empty-component');
    expect(emptyComponentElement).toBeDefined();
  });

  it('does not render the ListEmptyComponent when the data prop is not empty', () => {
    const mockData = [
      { id: '1', title: 'Item 1' },
      { id: '2', title: 'Item 2' },
      { id: '3', title: 'Item 3' },
    ];

    const emptyComponent = () => <Text testID="empty-component">No items to display</Text>;

    const { queryByTestId } = render(
      <HorizontalList
        data={mockData}
        renderItem={({ item }: { item: { id: string; title: string } }) => <Text testID={`item-${item.id}`}>{item.title}</Text>}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={emptyComponent}
      />
    );

    const emptyComponentElement = queryByTestId('empty-component');
    expect(emptyComponentElement).toBeNull();
  });




});