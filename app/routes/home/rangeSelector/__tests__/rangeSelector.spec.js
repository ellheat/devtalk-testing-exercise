import React from 'react';
import { expect } from 'chai';
import { Map } from 'immutable';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

import InputRange from 'react-input-range';
import { RangeSelector, MIN_VALUE, MAX_VALUE } from '../rangeSelector.component';


describe('RangeSelector: Component', () => {
  const defaultProps = {
    rangeValues: Map({
      min: 0,
      max: 10,
    }),
    setRangeValues: () => {},
    intl: {
      messages: {
        price: {
          id: 'test',
          defaultMessage: 'test',
        },
      },
    },
  };

  const component = (props) => (
    <RangeSelector {...defaultProps} {...props} />
  );

  it('should render RangeSelector root', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find('.range-selector')).to.have.length(1);
  });

  it('should render InputRange', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find(InputRange)).to.have.length(1);
  });

  it('should pass props to InputRange', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find(InputRange).prop('minValue')).to.be.equal(MIN_VALUE);
    expect(wrapper.find(InputRange).prop('maxValue')).to.be.equal(MAX_VALUE);
  });

  it('should called changeRangeValue', () => {
    const setRangeValues = spy();
    const wrapper = shallow(component({ setRangeValues }));
    wrapper.find(InputRange).prop('onChange')();

    expect(setRangeValues.calledOnce).to.be.equal(true);
  });

  it('should called changeRangeValue with arguments', () => {
    const simpleValue = 1;
    const setRangeValues = spy();
    const wrapper = shallow(component({ setRangeValues }));
    wrapper.find(InputRange).prop('onChange')(simpleValue);

    expect(setRangeValues.getCall(0).args[0]).to.be.equal(simpleValue);
  });
});
