import React from 'react';
import Button from '@material-ui/core/Button';
import classes from './Button.module.css';

const button = props => {

  return (
    <div className={classes.Button} >
    <Button
      type={props.type}
      color={props.color} 
      size={props.size}
      variant="contained" 
      disabled={props.disabled}>
        {props.children}
    </Button>
      </div>
  );
};

export default button;