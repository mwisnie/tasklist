import { Button } from '@material-ui/core';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppNavLink from './../AppNavLink/AppNavLink';
import Toolbar from './Toolbar';

configure({adapter: new Adapter()});

const testMainNavItems = [
  {
    text: 'About',
    path: '/about',
    exact: true
  },
  {
    text: 'Tasks',
    path: '/tasks',
    exact: true
  },
  {
    text: 'AddTask',
    path: '/addTask',
    exact: true
  },
];

const testAuthNavItems = [
 {
   text: 'Login',
   path: '/login',
   exact: true
 },
 {
   text: 'Sign Up',
   path: '/signup',
   exact: true
 }
];

const testNavItems = {
  mainNavItems: testMainNavItems,
  authNavItems: testAuthNavItems
};


describe('<Toolbar />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount((
      <BrowserRouter>
        <Toolbar sideDrawerToggle={() => null} navItems={testNavItems} />
      </BrowserRouter>
    ));
  })

  it('should render main navigation items correctly while fully mounted for normal width', () => {
    expect(wrapper.find(AppNavLink)).toHaveLength(3);
  });

  it('should render auth navigation items correctly while fully mounted for normal width', () => {
    expect(wrapper.find(Button)).toHaveLength(2);
  });
  
  // todo: check if reacts well to resizing

});