import React from 'react';
import { Text } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import Details from './Details';

describe('Details', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Details headerTitle="Test Header Title">
        <Text>Test children content</Text>
      </Details>
    );
    expect(getByText('Test Header Title')).toBeTruthy();
    expect(getByText('Test children content')).toBeTruthy();
  });

  it('navigates back on icon press', () => {
    const mockNavigation = { goBack: jest.fn() };
    const { getByTestId } = render(
      <Details headerTitle="Test Header Title" navigation={mockNavigation}>
        <Text>Test children content</Text>
      </Details>
    );
    fireEvent.press(getByTestId('back-icon'));
    expect(mockNavigation.goBack).toHaveBeenCalled();
  });

  it('shows chat icon when ChatIcon prop is true', () => {
    const { getByTestId } = render(
      <Details headerTitle="Test Header Title" ChatIcon>
        <Text>Test children content</Text>
      </Details>
    );
    expect(getByTestId('chat-icon')).toBeTruthy();
  });

  it('does not show chat icon when ChatIcon prop is false', () => {
    const { queryByTestId } = render(
      <Details headerTitle="Test Header Title" ChatIcon={false}>
        <Text>Test children content</Text>
      </Details>
    );
    expect(queryByTestId('chat-icon')).toBeNull();
  });
});
