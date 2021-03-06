import reducer from './reducer';

import * as actions from './actionTypes';

describe('ui reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {}))
          .toEqual({
            sideDrawerOpen: false,
            loading: false
          });
  });
  
  it('should open side drawer correctly', () => {
    expect(reducer({
      sideDrawerOpen: false,
      loading: false
    }, {
      type: actions.SIDE_DRAWER_TOGGLE
    })).toEqual({
      sideDrawerOpen: true,
      loading: true
    });
  });

});