import { React } from 'react';
import { ReactDOM } from 'react-dom'
import { ApiCall } from '../API/ApiCall';

import { shallow } from 'enzyme';

describe('ApiCall', () => {
    describe('when the API gets called', () => {
        it ('gets called once and returns', () => {
            const onApiCallMock = jest.fn();
            const wrapper = shallow(
                <ApiCall
                    onApiCall={onApiCallMock}
                    />
            );
            const teamCard = wrapper.find('.team-card');
                    teamCard.simulate('click');

                    expect(onApiCallMock).toHaveBeenCalledTimes(1);
                    expect(onApiCallMock).toHaveBeenCalledWith(true);
        });
    });
}) ;