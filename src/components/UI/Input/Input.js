import TextField from '@material-ui/core/TextField';
import React from 'react';

import classes from './Input.module.css';

const input = props => {

  return (
    <TextField
      className={classes.Input}
      value={props.value}
      label={props.label}
      type={props.type}
      name={props.name}
      autoComplete={props.type === 'email' ? "email" : null}
      error={props.error}
      multiline={props.multiline}
      rowsMax={props.rowsMax}
      margin="normal"
      variant="outlined"
      onChange={props.onChange}
    />
  );
};

export default input;