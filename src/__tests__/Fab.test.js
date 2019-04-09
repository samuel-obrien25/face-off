import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Fab from '../Components/Buttons/Fab';

describe('Fab', () => {
//It's defined
    it('should be defined', () => {
        expect(Fab).toBeDefined();
    });
//It renders correctly
    it('Should render correctly', () => {
        const component = shallow(
            <Fab />
        );
        expect(component).toMatchSnapshot();
    });
//It has an h2 child
    it('Should contain an h2', () => {
        const component = shallow(
            <Fab>Fab Test</Fab>
        );
        expect(component.contains(
            <h2>Fab Test</h2>
        )).toBe(true);
    });

});