import React from 'react';
import classes from './Display.module.css';

const Display = (props) => {

  return(
    <div className={classes.display}>
      {props.children}
    </div>
  );
}

export default Display;
