import React, {Component} from 'react';
import classes from './Power.module.css';
import Aux from '../../hoc/Aux/Aux';

const Power = (props) => {
  let show;
  if(props.powStatus){
    show = '100'
  } else {
    show = '0'
  }

  let styles = null;

  if(props.powStatus || props.bankStatus){
    styles = classes.style1;
  } else {
    styles = [classes.style1, classes.style2].join(' ');
  }

  return(
    <Aux>
      <div className={classes.buttoncontainer}>
          <button className={classes.button} onClick={props.changes || props.changed}>
            <div className={styles} />
          </button>
      </div>
    </Aux>
  );
}

export default Power;
