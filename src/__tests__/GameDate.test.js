import React from 'react';
import { shallow, mount, render } from 'enzyme';

import GameDate from '../Components/Cards/ScheduleCard/GameDate';

describe('GameDate', () => {
//It's defined
    it('should be defined', () => {
        expect(GameDate).toBeDefined();
    });

//It renders correctly
    it('Should render correctly', () => {
        const component = shallow(
            mockDate = 
            <GameDate fabText="Fab Test" />
        );
        expect(component).toMatchSnapshot();
    });
//It has an h2 child
    it('Should contain an h3', () => {
        const component = shallow(
            <Fab fabText = "Fab Test" />
        );
        expect(component.contains([
            <h2>Fab Test</h2>
        ])).toBe(true);
    });

});