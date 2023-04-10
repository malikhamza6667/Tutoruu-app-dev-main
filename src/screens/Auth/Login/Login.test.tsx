import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Login from './Login';

describe('Login', () => {
    // it('should update email input value when typed into', () => {
    //     const { getByTestId } = render(<Login />);
    //     const emailInput = getByTestId('email-input');
    //     const testEmail = 'test@example.com';
    //     fireEvent.changeText(emailInput, testEmail);
    //     expect(emailInput.props.value).toBe(testEmail);
    // });



    // it('updates the password input correctly when typed into', () => {
    //     const { getByTestId } = render(<Login />);
    //     const passwordInput = getByTestId('password-input');
      
    //     // Simulate typing into the password input
    //     fireEvent.changeText(passwordInput, 'testpassword');
      
    //     // Check that the password input value is updated correctly
    //     expect(passwordInput.props.value).toBe('testpassword');
    //   });


    it('displays an error message when authentication fails', async () => {
        const errorMessage = 'Authentication failed';
        const authenticateMock = jest.fn(() => {
          throw new Error(errorMessage);
        });
        const { getByTestId, findByText } = render(
          <Login authenticate={authenticateMock} />
        );
        const emailInput = getByTestId('email-input');
        const passwordInput = getByTestId('password-input');
        const loginButton = getByTestId('login-button');
      
        // Simulate typing into the email and password inputs
        fireEvent.changeText(emailInput, 'test@example.com');
        fireEvent.changeText(passwordInput, 'testpassword');
      
        // Simulate pressing the "Login" button
        fireEvent.press(loginButton);
      
        // Check that the error message is displayed
        const errorText = await findByText(errorMessage);
        expect(errorText).toBeDefined();
      });
      
      
      
      
      
      
      
      




});
