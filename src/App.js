import React from 'react';
import './App.css';
import PokeList from './PokeList';
import pokemon from './PokeData'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: pokemon,
      fav: []
    }

    this.handleFav = this.handleFav.bind(this);
  }
  handleFav(e, obj) {
    const id = parseInt(e.currentTarget.id);
    const newFav = [...this.state.fav];
    let index = newFav.indexOf(obj);
    if(this.state.fav.includes(id) === true) {
      newFav.splice(index, 1);
    } else {
      newFav.push(id);
    }
    this.setState({
      fav: newFav
    })
  }
    render() {
     return (
       <React.Fragment>
         <h1>Mi lista de pokemons</h1>
       <PokeList
       pokemon={this.state.pokemon}
       fav={this.state.fav}
       handleFav={this.handleFav}
        />
       </React.Fragment>

    );
  }}


export default App;
