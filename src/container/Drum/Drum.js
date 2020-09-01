import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Volume from '../../components/Volume/Volume';
import Power from '../../components/Power/Power';
import Display from '../../components/Display/Display';

class Drum extends Component {
  state = {
    volume: '50',
    power: true,
    bank: false,
    display: '',
    value1: 'TRUE',
    value2: 'FALSE'
  }

  changeHandler(e){
    if(this.state.power){
      this.setState({
        volume: e.target.value,
        display: 'Volume: ' + e.target.value
      });
      setTimeout(() => this.clearDisplay(), 1000);
    }
  }

  clearDisplay() {
    this.setState({
      display: ''
    });
  }

  clickHandler(){
    this.setState({
      power: !this.state.power
    });
  }

  clickedHandler(){
    if(this.state.power){
      this.setState({
        bank: !this.state.bank,
        display: this.state.value1
      });

      if(this.state.bank){
        this.setState({
          display: this.state.value2
        })
      }
    }
  }

  render(){

    return(
      <Aux>
        <Volume currVol={this.state.volume} change={this.changeHandler.bind(this)} />
        {'Power'}
        <Power powStatus={this.state.power} changes={this.clickHandler.bind(this)} />
        {'Bank'}
        <Power bankStatus={this.state.bank} changed={this.clickedHandler.bind(this)} />
        <Display>
          {this.state.display}
        </Display>
      </Aux>
    );
  }
}

export default Drum;
