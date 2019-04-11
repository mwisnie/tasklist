import reducer from './reducer';

import * as actions from './actions';

describe('ui reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {}))
          .toEqual({
            sideDrawerOpen: false
          });
  });
  
  it('should open side drawer correctly', () => {
    expect(reducer({
      sideDrawerOpen: false
    }, {
      type: actions.SIDE_DRAWER_TOGGLE
    })).toEqual({
      sideDrawerOpen: true
    });
  });

});