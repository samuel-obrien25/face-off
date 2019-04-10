import React from 'react';
import { shallow, mount, render } from 'enzyme';

import ApiCall from '../API/ApiCall';
import CardContainer from '../Components/Containers/CardContainer';
import LoadingCircle from '../Components/Loading/LoadingCircle';
import Error from '../Utilities/Error';

describe('API Call', () => {
//It's defined
    it('should be defined', () => {
        expect(ApiCall).toBeDefined();
    });
    
    it('should render correctly', () => {
        const component = shallow(
            <ApiCall />
        );
        expect(component).toMatchSnapshot();
    });

    it('should return <Loading /> if state.isLoaded = false', () => {
        const wrapper = shallow(<ApiCall/>);
        wrapper.setState({ isLoaded: false });
        
        expect(wrapper.find(LoadingCircle));
    });

    it('should return <Error /> if state.error = true', () => {
        const wrapper = shallow(<ApiCall />);
        wrapper.setState({ error: true });

        expect(wrapper.find(Error));
    });

    it('should return <CardContainer> if state.isLoaded = true, state.error = false, and provided proper API url', () => {
        const mockURL = 'https://api.mysportsfeeds.com/v2.0/pull/nhl/2018-2019-regular/games.json?team=7';
        const wrapper = shallow(<ApiCall url={mockURL}/>);
        wrapper.setState({ isLoaded: true });
        
        expect(wrapper.find(CardContainer));
    });
});