import React from 'react';
import { shallow, mount, render } from 'enzyme';

import GetTeamStats from '../API/GetTeamStats';
import LoadingCircle from '../Components/Loading/LoadingCircle';
import Error from '../Utilities/Error';

describe('GetTeamStats', () => {
//It's defined
    it('should be defined', () => {
        expect(GetTeamStats).toBeDefined();
    });
    
    it('should render correctly', () => {
        const component = shallow(
            <GetTeamStats />
        );
        expect(component).toMatchSnapshot();
    });

    it('should return <Loading /> if state.isLoaded = false', () => {
        const wrapper = shallow(<GetTeamStats/>);
        wrapper.setState({ isLoaded: false });
        
        expect(wrapper.find(LoadingCircle));
    });

    it('should return <H3> if state.isLoaded = true and provided proper API url', () => {
        const mockURL = 'https://api.mysportsfeeds.com/v2.0/pull/nhl/2018-2019-regular/team_stats_totals.json?team=7';
        const wrapper = shallow(<GetTeamStats url={mockURL}/>);
        wrapper.setState({ isLoaded: true });
        
        expect(wrapper.find('H3'));
    });
});