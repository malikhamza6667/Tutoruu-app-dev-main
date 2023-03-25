import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import About from './About';
import tw from 'twrnc';
describe('About component', () => {
    it('should render the logo and mission statement', () => {
        const { getByText, getByTestId } = render(<About />);
        const logo = getByTestId('logo');
        const missionStatement = getByText('Our mission is to ensure that students are academically, mentally and financially empowered throughout their university experience.');
        expect(logo).toBeDefined();
        expect(missionStatement).toBeDefined();
    });
    it('renders the logo image with the correct source and style', () => {
        const { getByTestId } = render(<About />);
        const logo = getByTestId('image');

        expect(logo.props.source).toEqual(require('../../../assets/logo.jpg'));
        expect(logo.props.resizeMode).toEqual('contain');
        expect(logo.props.style).toEqual([tw`py-10`]);
    });
    it('renders the mission statement with the correct text and style', () => {
        const { getByTestId } = render(<About />);
        const missionStatement = getByTestId('mission-statement');
        expect(missionStatement.props.children).toEqual('Our mission is to ensure that students are academically, mentally and financially empowered throughout their university experience.');
        expect(missionStatement.props.style).toEqual([{ paddingLeft: 60, paddingRight: 60, textAlign: 'center' }, { fontFamily: 'PoppinsRegular' }]);
    });

});
