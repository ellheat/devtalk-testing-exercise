import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import AverageValue from '../averageValue.component';
import messages from '../averageValue.messages';


describe('AverageValue: Component', () => {
  const defaultProps = {
    arithmeticAverage: 1,
  };

  const component = (props) => (
    <AverageValue {...defaultProps} {...props} />
  );

  it('should render AverageValue root', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find('.average-value')).to.have.length(1);
  });

  it('should render FormattedMessage', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find(FormattedMessage)).to.have.length(1);
  });

  it('should pass correct id to FormattedMessage', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find(FormattedMessage).prop('id')).to.be.equal(messages.info.id);
  });

  it('should pass prop values to FormattedMessage', () => {
    const wrapper = shallow(component({}));
    expect(wrapper.find(FormattedMessage).prop('values')).to.deep.equal({ value: defaultProps.arithmeticAverage });
  });
});
