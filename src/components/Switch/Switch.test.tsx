import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Switch from './Switch';

describe('Switch', () => {
    it('calls onToggle with the opposite of isOpen when the switch is pressed', () => {
        const onToggleMock = jest.fn();
        const { getByTestId } = render(
            <Switch opened={false} onToggle={onToggleMock}>
                Toggle me!
            </Switch>
        );
        const switchButton = getByTestId('switch-button');
        fireEvent.press(switchButton);
        expect(onToggleMock).toHaveBeenCalledWith(true);
        fireEvent.press(switchButton);
        expect(onToggleMock).toHaveBeenCalledWith(false);
    });

    it('displays the "toggle-on" icon when isOpen is true', () => {
        const { getByTestId } = render(
            <Switch opened={true} onToggle={() => { }}>
                Toggle me!
            </Switch>
        );
        const switchButton = getByTestId('switch-button');
        expect(switchButton.children[0].props.name).toBe('toggle-on');
    });

    it('displays the "toggle-off" icon when isOpen is false', () => {
        const { getByTestId } = render(
            <Switch opened={false} onToggle={() => { }}>
                Toggle me!
            </Switch>
        );
        const switchButton = getByTestId('switch-button');
        expect(switchButton.children[0].props.name).toBe('toggle-off');
    });
});
