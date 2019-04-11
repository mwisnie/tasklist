import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { withRouter } from 'react-router-dom';

import AppNavLink from '../AppNavLink/AppNavLink';
import classes from './Toolbar.module.css';

const toolbar = props => {

  const navigate = path => {
    props.history.push(path);
  };

  return (
    <AppBar position="static">
      <Toolbar>

        <div className={classes.menuButton}>
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={props.sideDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </div>

        <div className={classes.grow}>
          <div className={classes.margin}>
            <Typography variant="h5" color="inherit">
              Task List
            </Typography>
          </div>

          <div className={classes.navItems}>
            {props.navItems.mainNavItems.map(item => (
              <div className={classes.margin} key={item.text}>
                <AppNavLink to={item.path} exact={item.exact}>
                  {item.text}
                </AppNavLink>
              </div>
            ))}
          </div>
        </div>

        <div className={classes.navItems}>
          {props.navItems.authNavItems.map(item => (
            <Button color="inherit" key={item.text} onClick={() => navigate(item.path)}>
              {item.text}
            </Button>
          ))}
        </div>

      </Toolbar>
    </AppBar>
  );
};

export default withRouter(toolbar);