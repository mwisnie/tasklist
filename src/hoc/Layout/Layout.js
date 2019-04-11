import React from 'react';
import { connect } from 'react-redux';
import AppToolbar from './../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from './../../components/Navigation/SideDrawer/SideDrawer';
import * as actionCreators from './../../store/UI/actions';
import navItems from './../../components/Navigation/navigation-items';

const layout = props => {
  const sideDrawerToggle = () => {
    props.sideDrawerToggle();
  };

  return (
    <React.Fragment>
      <AppToolbar sideDrawerToggle={sideDrawerToggle} navItems={navItems} />
      <SideDrawer navItems={navItems} />
      <main>
        {props.children}
      </main>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    sideDrawerOpen: state.sideDrawerOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sideDrawerToggle: () => dispatch(actionCreators.sideDrawerToggle())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(layout);