import React, { Component } from "react"

import AboutMe from './components/AboutMe'
import MyTown from './components/MyTown'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMenu: 'a'
    }
  }
  render() {
    return (
      <div className="App">


        <div className="menu">
          <h2>
            <span className="menu-item" onClick={() => this.setState({ selectedMenu: 'a' })}>About Me</span>&nbsp;&nbsp;&nbsp;
            <span className="menu-item" onClick={() => this.setState({ selectedMenu: 't' })}>My Town</span>
          </h2>

        </div>

        {this.state.selectedMenu === 'a' ?
          <AboutMe />
        :
          <MyTown />  
        }
      </div>
  );
}
}

export default App;
