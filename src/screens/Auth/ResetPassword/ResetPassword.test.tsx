import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ResetPassword from './ResetPassword';

describe('ResetPassword', () => {
  test('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<ResetPassword />);
    expect(getByText('Forgot your password?')).toBeTruthy();
    expect(getByText('Leave your email and we’ll send you  a link to update your password and log into your account')).toBeTruthy();
    expect(getByPlaceholderText('Doe')).toBeTruthy();
    expect(getByText('Send password reset link')).toBeTruthy();
  });
  test('displays correct title, subtitle, and caption', () => {
    const { getByText } = render(<ResetPassword />);
    expect(getByText('Forgot your password?')).toBeTruthy();
    expect(getByText('Leave your email and we’ll send you  a link to update your password and log into your account')).toBeTruthy();
    expect(getByText('Send password reset link')).toBeTruthy();
  });
  test('updates email field value correctly', () => {
    const { getByPlaceholderText } = render(<ResetPassword />);
    const emailInput = getByPlaceholderText('Doe');
  
    fireEvent.changeText(emailInput, 'john@example.com');
  
    expect(emailInput.props.value).toEqual('john@example.com');
  });
});
