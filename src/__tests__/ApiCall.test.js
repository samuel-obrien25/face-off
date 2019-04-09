import React from 'react';
import { shallow, mount, render } from 'enzyme';

import ApiCall from '../API/ApiCall';
import CardContainer from '../Components/Containers/CardContainer';
import LoadingCircle from '../Components/Loading/LoadingCircle';

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
    })
    it('should return <Loading /> if state isLoaded = false', () => {
        const wrapper = shallow(<ApiCall ApiLink="gameScheduleQuery" />);
        wrapper.setState({ isLoaded: false });
        
        expect(wrapper.find(LoadingCircle));
    });
});