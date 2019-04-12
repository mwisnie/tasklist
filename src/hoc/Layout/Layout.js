import React from 'react';
import { connect } from 'react-redux';
import AppToolbar from './../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from './../../components/Navigation/SideDrawer/SideDrawer';
import * as actionCreators from './../../store/UI/actionCreators';
import navItems from './../../components/Navigation/navigation-items';
import Spinner from './../../components/UI/Spinner/Spinner';

const layout = props => {
  const condNavItems = {
    mainNavItems: navItems.mainNavItems,
    authNavItems: props.isAuthenticated ? navItems.authenticatedNavItems : navItems.unauthenticatedNavItems
  };

  return (
    <React.Fragment>
      <AppToolbar sideDrawerToggle={props.sideDrawerToggle} navItems={condNavItems} />
      <SideDrawer 
        sideDrawerToggle={props.sideDrawerToggle} 
        isOpen={props.sideDrawerOpen}
        navItems={condNavItems} />
      <main>
        {props.isLoading ? <Spinner /> : props.children}
      </main>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    sideDrawerOpen: state.ui.sideDrawerOpen,
    isLoading: state.ui.isLoading,
    isAuthenticated: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sideDrawerToggle: () => dispatch(actionCreators.sideDrawerToggle())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(layout);