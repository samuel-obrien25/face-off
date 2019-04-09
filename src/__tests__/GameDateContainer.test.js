import React from 'react';
import { shallow, mount, render } from 'enzyme';

import GameDateContainer from '../Components/Cards/ScheduleCard/GameDateContainer';

describe('GameDateContainer', () => {
//It's defined
    it('should be defined', () => {
        expect(GameDateContainer).toBeDefined();
    });

//It renders correctly
    it('Should render correctly', () => {
        const mockDate = "Test Date";
        const component = shallow(
            <GameDateContainer>{mockDate}</GameDateContainer>
        );
        expect(component).toMatchSnapshot();
    });
});