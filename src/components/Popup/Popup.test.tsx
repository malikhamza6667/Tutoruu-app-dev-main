import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Popup } from './Popup';

describe('Popup', () => {
    it('calls closeModal prop when close button is pressed', () => {
        const closeModalMock = jest.fn();
        const { getByTestId } = render(
            <Popup opened={true} closeModal={closeModalMock}>
                <></>
            </Popup>
        );

        const closeButton = getByTestId('close-button');
        fireEvent.press(closeButton);

        expect(closeModalMock).toHaveBeenCalled();
    });
});
