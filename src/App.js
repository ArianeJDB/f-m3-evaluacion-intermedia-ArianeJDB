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
  fav(e) {
    const trigger = e.currentTarget;
    console.log(trigger);
    // this.setState((prevState) => {
    //   const Favs = { ...prevState.pokemon };
    //   return (
    //     newFavs = pokemon: Favs
    //   );
      
    // })
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
