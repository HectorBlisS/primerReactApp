import React, { Component } from 'react';
import {NavBarDisplay} from './components/nav/NavBarDisplay';
import {Routes} from './Routes';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
      	<NavBarDisplay />
      	<Routes/>
      </div>
    );
  }
}

export default App;
