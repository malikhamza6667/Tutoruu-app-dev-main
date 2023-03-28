import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import Tag from './Tag';

describe('Tag component', () => {
  test('renders correctly', () => {
    const { getByText } = render(<Tag type="primary" shape="round" onPress={() => { }}>Click me</Tag>);
    const tagText = getByText('Click me');
    expect(tagText).toBeDefined();
  });
  test('renders icon when icon prop is passed', () => {
    const { getByTestId } = render(<Tag type="primary" shape="round" icon="arrow-right">Click me</Tag>);
    const tagIcon = getByTestId('tag-icon');
    expect(tagIcon).toBeDefined();
  });
  test('calls onPress callback when pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(<Tag type="primary" shape="round" onPress={onPressMock}>Click me</Tag>);
    const tagContainer = getByTestId('tag-container');
    fireEvent.press(tagContainer);
    expect(onPressMock).toHaveBeenCalled();
  });
});
