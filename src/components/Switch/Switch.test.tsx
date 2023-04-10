import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Switch from './Switch';
import '@testing-library/jest-native/extend-expect';





describe('Switch', () => {
   
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




