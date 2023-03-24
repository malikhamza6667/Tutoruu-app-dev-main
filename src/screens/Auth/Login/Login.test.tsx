import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Login from './Login';

describe('Login', () => {
    it('should update email input value when typed into', () => {
        const { getByTestId } = render(<Login />);
        const emailInput = getByTestId('email-input');
        const testEmail = 'test@example.com';
        fireEvent.changeText(emailInput, testEmail);
        expect(emailInput.props.value).toBe(testEmail);
    });
});
