import React, {Component} from 'react';
import classes from './Volume.module.css';
import Aux from '../../hoc/Aux/Aux';

const Volume = (props) => {
  
  return(
    <Aux>
      <div className={classes.slidecontainer}>
        <input className={classes.slider}
          type='range' min='0' max='100'
          value={props.currVol} onChange={props.change} />
      </div>
    </Aux>
  );
}

export default Volume;
