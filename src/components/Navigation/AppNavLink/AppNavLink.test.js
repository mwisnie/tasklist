import React from 'react';

import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import AppNavLink from './AppNavLink';

configure({adapter: new Adapter()});

describe('<AppNavLink />', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow((
      <AppNavLink to=".">
        <div className="unique" />
      </AppNavLink>
    ));
    expect(wrapper.contains(<div className="unique" />)).toEqual(true);
  }); 
});