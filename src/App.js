import React from 'react';
import './App.css';
import PokeList from './PokeList';
import pokemon from './PokeData'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: pokemon,
      fav: false
    }

    this.fav = this.fav.bind(this);
  }
  fav(e) {
    const trigger = e.currentTarget;
    this.setState(prevState => ({
      fav: prevState.fav ? trigger.className = '' : trigger.className = 'favourite'
    }))
  }
  render() {
     return (
     <PokeList
     pokemon={this.state.pokemon}
     fav={this.fav}
      />

    );
  }};


export default App;
