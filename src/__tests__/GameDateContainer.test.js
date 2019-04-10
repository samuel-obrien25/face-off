import React from 'react';
import { shallow, mount, render } from 'enzyme';

import GameDateContainer from '../Components/Cards/ScheduleCard/GameDateContainer';

describe('GameDateContainer', () => {

    it('should be defined', () => {
        expect(GameDateContainer).toBeDefined();
    });

    it('Should render correctly', () => {
        const mockDate = "Test Date";
        const component = shallow(<GameDateContainer>{mockDate}</GameDateContainer>);
        expect(component).toMatchSnapshot();
    });


});