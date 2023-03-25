import React from 'react';
import { render } from '@testing-library/react-native';
import UpdatePassword from './UpdatePassword';
describe('UpdatePassword', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(<UpdatePassword />);
        expect(getByTestId('update-password-screen')).toBeDefined();
    });
    it('contains two Input components', () => {
        const { getAllByTestId } = render(<UpdatePassword />);
        const inputComponents = getAllByTestId('update-password-input');
        expect(inputComponents.length).toBe(2);
    });
    it('contains a Button component', () => {
        const { getByTestId } = render(<UpdatePassword />);
        const buttonComponent = getByTestId('update-password-button');
        expect(buttonComponent).toBeDefined();
    });
    it('renders the correct title and caption', () => {
        const { getByText } = render(<UpdatePassword />);
        expect(getByText('Update your password')).toBeDefined();
        expect(getByText('Update your password and log into your account')).toBeDefined();
    });
});