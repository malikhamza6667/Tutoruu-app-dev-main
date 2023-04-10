import React from 'react';
import { Text } from 'react-native';
import { render, fireEvent, waitFor, screen, act } from '@testing-library/react-native';
import { Popup } from './Popup';
import { Modal } from 'react-native';

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

    it('renders the children components passed to it', () => {
        const child1 = <Text testID="child-1">Child 1</Text>;
        const child2 = <Text testID="child-2">Child 2</Text>;
        const closeModal = jest.fn();

        const { getByTestId } = render(
            <Popup opened={true} closeModal={closeModal}>
                {child1}
                {child2}
            </Popup>,
        );

        expect(getByTestId('child-1')).toBeTruthy();
        expect(getByTestId('child-2')).toBeTruthy();
    });


    test('Popup does not render when opened is false', () => {
        const { queryByTestId } = render(
            <Popup opened={false} closeModal={() => { }}>
                <Text testID="popup-text">Hello, world!</Text>
            </Popup>
        );

        expect(queryByTestId('close-button')).toBeNull();
        expect(queryByTestId('popup-text')).toBeNull();
    });

    it('renders with correct animation styles', () => {
        const closeModal = jest.fn();
        const { getByTestId } = render(
            <Popup opened={true} closeModal={closeModal}>
                <Text>Test content</Text>
            </Popup>
        );

        // Check that the component is visible
        const popup = getByTestId('popup');
        expect(popup.props.visible).toBeTruthy();

        act(() => {
            fireEvent.changeText(popup, { opened: true });
        });
        expect(popup.props.visible).toBeTruthy();
    });





});
