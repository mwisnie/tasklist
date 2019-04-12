import React from 'react';
import classes from './ErrorMsg.module.css';

const errorMsg = props => {
  let errorMsg = null;

  if (props.error && props.error.length > 0) {
    errorMsg = props.error;
  }
  
  return (
    <div className={classes.ErrorMsg}>
      {errorMsg}
    </div>
  );
};

export default errorMsg; 