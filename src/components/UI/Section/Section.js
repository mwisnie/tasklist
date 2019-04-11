import React from 'react';
import classes from './Section.module.css';

const section = props => {
  return (
    <section className={classes.Section}>
      {props.children}
    </section>
  );
};

export default section;