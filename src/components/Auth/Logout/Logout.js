import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actionCreators from './../../../store/Auth/actionCreators';

const logout = props => {
  useEffect(() => {
    console.log('runs once on mount');
    props.logout();
  }, []);

  return (
    <Redirect to="/" />
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actionCreators.logout())
  }
};

export default connect(null, mapDispatchToProps)(logout);