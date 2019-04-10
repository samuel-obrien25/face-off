import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Fab from '../Components/Buttons/Fab';

describe('Fab', () => {

    it('should be defined', () => {
        expect(Fab).toBeDefined();
    });

    it('Should render correctly', () => {
        const component = shallow(
            <Fab />
        );
        expect(component).toMatchSnapshot();
    });

    it('Should contain one div if not active', () => {
        const component = shallow(
            <Fab/>
        );
        expect(component.contains('div'));
    });

    it('Should contain an h2 if active', () => {
        const component = shallow(<Fab />);

        component.setState({ isActive: true });
        expect(component.contains('h2'));
    });

    it('Should return three <Fab/> if isActive = true', () => {
        const component = shallow( <Fab /> );

        component.setState({ isActive: true });
        expect(component.children()).toHaveLength(3);
    });

    it('Should return one <Fab/> if isActive = false', () => {
        const component = shallow( <Fab /> );

        component.setState({ isActive: false });
        expect(component.state().isActive).toEqual(false);
        expect(component.children()).toHaveLength(1);
    });

    it('Test onClick Function', () => {
        const handleClick = jest.fn();
        const component = shallow( <Fab onClick={handleClick()}/> );

        component.simulate('click');
        expect(handleClick.mock.calls.length).toEqual(1);
    })

});