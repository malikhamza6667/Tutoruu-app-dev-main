import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { PostPopup } from './PostPopup';

describe('PostPopup', () => {
    const onClose = jest.fn();
    const onSubmit = jest.fn();

    beforeEach(() => {
        onClose.mockClear();
        onSubmit.mockClear();
    });

    it('renders correctly with default props', () => {
        const { getByText } = render(<PostPopup opened={true} post={{ text: '', tags: [], attachment: '' }} onClose={onClose} onSubmit={onSubmit} />);
        expect(getByText('Post!')).toBeTruthy();
    });


    it('updates the state when the input fields are changed', () => {
        const { getByPlaceholderText } = render(<PostPopup opened={true} post={{ text: '', tags: [], attachment: '' }} onClose={onClose} onSubmit={onSubmit} />);
        fireEvent.changeText(getByPlaceholderText('Doe'), 'John');
        expect(getByPlaceholderText('Doe').props.value).toBe('John');
    });

});
