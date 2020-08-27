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
  return(
    <Aux>
      <div className={classes.slidecontainer}>
        <input className={classes.slider}
          type='range' min='0' max='100'
          value={show} onChange={props.changes} />
      </div>
    </Aux>
  );
}

export default Power;
