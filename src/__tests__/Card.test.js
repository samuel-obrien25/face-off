import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Card from '../Components/Cards/Card';
import TeamCard from '../Components/Cards/TeamCard/TeamCard';
import ScheduleCard from '../Components/Cards/ScheduleCard/ScheduleCard';

describe('Card', () => {
    //It's defined
    it('should be defined', () => {
        expect(Card).toBeDefined();
    });

    //It renders correctly
    it('Should render correctly', () => {
        const component = shallow(
            <Card />
        );
        expect(component).toMatchSnapshot();
    });

    //It returns the correct cardType
    it('Should return ScheduleCard if given scheduleCard prop', () => {
        const component = shallow(
            <Card cardType="scheduleCard" />
        );
        expect(component.find(ScheduleCard));
    });

    it('Should return TeamCard if given cardType prop', () => {
        const component = shallow(
            <Card cardType="teamCard" />
        );
        expect(component.find(TeamCard));
    });

});