import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      val : "Hello",
    }
  }

  changeText(t) {
    this.setState({val : t})
  }

  render() {
    return (
      <div class="App">
        <Header text={this.state.val}/>
        <Body func={this.changeText.bind(this)} />
      </div>
    );
  }
}

export default App;
