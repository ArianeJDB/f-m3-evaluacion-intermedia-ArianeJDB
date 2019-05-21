import React from 'react';
import './App.css';
import PokeList from './PokeList';
import pokemon from './PokeData'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: pokemon,
      fav: ''
    }

    this.handleFav = this.handleFav.bind(this);
  }
  handleFav(e) {
    const trigger = e.currentTarget;
    this.setState(prevState => ({
      fav: prevState.fav ? trigger.className = '' : trigger.className = 'favourite'
    }))
  }
  render() {
     return (
     <PokeList
     pokemon={this.state.pokemon}
     fav={this.handleFav}
      />

    );
  }};


export default App;
