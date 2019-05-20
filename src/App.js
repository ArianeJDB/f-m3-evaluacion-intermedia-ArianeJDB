import React from 'react';

import './App.css';
import PokeList from './PokeList';
import pokemon from './PokeData'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: pokemon,
    }
  }
  render() {
     return (
     <PokeList
     pokemon={this.state.pokemon}
      />

    );
  }};


export default App;
