import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Volume from '../../components/Volume/Volume';
import Power from '../../components/Power/Power';

class Drum extends Component {
  state = {
    volume: '50',
    power: true,
    bank: false,
  }

  changeHandler(e){
    this.setState({
      volume: e.target.value
    });
  }

  clickHandler(){
    this.setState({
      power: !this.state.power
    });
  }

  clickedHandler(){
    this.setState({
      bank: !this.state.bank
    });
  }

  render(){

    return(
      <Aux>
        <Volume currVol={this.state.volume} change={this.changeHandler.bind(this)}/>
        {'Volume: ' + this.state.volume} <br />
        {'Power'}
        <Power powStatus={this.state.power} changes={this.clickHandler.bind(this)} />
        {'Bank'}
        <Power bankStatus={this.state.bank} changed={this.clickedHandler.bind(this)} />
      </Aux>
    );
  }
}

export default Drum;
