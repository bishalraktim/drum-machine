import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Volume from '../../components/Volume/Volume';
import Power from '../../components/Power/Power';

class Drum extends Component {
  state = {
    volume: '50',
    power: true
  }

  changeHandler(e){
    this.setState({
      volume: e.target.value
    });
  }

  changesHandler(){
    this.setState({
      power: !this.state.power
    });
  }

  render(){

    return(
      <Aux>
        <Volume currVol={this.state.volume} change={this.changeHandler.bind(this)}/>
        {'Volume: ' + this.state.volume}
        <Power powStatus={this.state.power} changes={this.changesHandler.bind(this)} />
      </Aux>
    );
  }
}

export default Drum;
