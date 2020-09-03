import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Volume from '../../components/Volume/Volume';
import Power from '../../components/Power/Power';
import Display from '../../components/Display/Display';
import DrumPad from '../../components/DrumPad/DrumPad';

class Drum extends Component {
  state = {
    volume: '0.8',
    power: true,
    bank: false,
    display: '',
    value1: 'TRUE',
    value2: 'FALSE',
    play: null,
    active: false
  }

  changeHandler(e){
    if(this.state.power){
      this.setState({
        volume: e.target.value,
        display: 'Volume: ' + Math.floor(e.target.value * 100)
      });
      setTimeout(() => this.clearDisplay(), 1100);
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

  componentDidMount(){
    this.setState({
      play: new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3')
    });
    document.addEventListener('keydown', this.keyTriggers.bind(this));
  }

  clickQ(e){
    if(this.state.power){
      this.state.play.volume = this.state.volume;
      this.state.play.play();

      this.setState({
        active: !this.state.active
      });
    }
  }

  keyTriggers(e){
    if(e.keyCode == 81 && this.state.power){
      this.setState({
        active: !this.state.active
      });
      this.state.play.play();
    }
  }

  render(){
    const bank1 = [{
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    }, {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    }, {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    }, {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    }, {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    }, {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    }, {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    }, {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    }, {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }];
    let bank;
    bank = bank1.map(b => (
      <div style={{margin: '15px', float: 'left'}}>
        <DrumPad>{'Q'}</DrumPad>
      </div>
    ))
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

        {/*<DrumPad clickQ={this.clickQ.bind(this)} active={this.state.active}>
          {'Q'}
        </DrumPad>*/}
        <div style={{margin: '15px'}}>
          {bank}
        </div>
      </Aux>
    );
  }
}

export default Drum;
