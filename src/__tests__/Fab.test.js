import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Fab from '../Components/Buttons/Fab';

describe('Fab', () => {

    it('should be defined', () => {
        expect(Fab).toBeDefined();
    });

    it('Should render correctly', () => {
        const component = shallow(
            <Fab fabText="Fab Test" />
        );
        expect(component).toMatchSnapshot();
    });

    it('Should be a button', () => {
        const string = 'test string';
        const component = shallow(
            <Fab fabText={string} />
        );
        expect(component.type()).to.equal('button');
                 
    });
});