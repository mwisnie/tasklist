import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIcon from '@material-ui/icons/Assignment';
import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './SideDrawer.module.css';

const sideDrawer = props => {

  const navigate = path => {
    props.history.push(path);
  };

  const sideList = (
    <div className={classes.list}>
      <List>
        <ListItem button key={'logo'} onClick={null}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary={'Task List'} />
        </ListItem>

        {props.navItems.mainNavItems.map(item => (
          <ListItem
            button
            onClick={() => navigate(item.path)}
            key={item.text}>
            <span className={classes.itemText}>
              {item.text}
            </span>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {props.navItems.authNavItems.map(item => (
          <ListItem
            button
            onClick={() => navigate(item.path)}
            key={item.text}>
            <span className={classes.itemText}>
              {item.text}
            </span>
          </ListItem>
        ))}
      </List>

    </div>
  );

  return (
    <Drawer open={props.isOpen} onClose={props.sideDrawerToggle}>
      <div
        tabIndex={0}
        role="button"
        onClick={props.sideDrawerToggle}
        onKeyDown={props.sideDrawerToggle}>
        {sideList}
      </div>
    </Drawer>
  );

};

export default withRouter(sideDrawer);