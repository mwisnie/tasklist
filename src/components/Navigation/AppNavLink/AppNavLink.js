import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './AppNavLink.module.css';

const appNavLink = props => {
  return (
    <NavLink
        className={classes.AppNavLink}
        activeClassName={classes.active}
        to={props.to}
        exact={props.exact}>
      {props.children}
    </NavLink>
  );
};

export default appNavLink;