import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
  render() {
    return (
      <ul className="list" key="1">
      {this.props.pokemon.map(item => {
        return (
          <li className="list-card" key={item.id}>
            <Pokemon 
              name={item.name}
              imgURL={item.url}
              alt={item.name}
              types={item.types}
              id={item.id}
              fav={this.props.fav}
              handleFav={this.props.handleFav}
            />
          </li>
        );
      })}      
      </ul>
    );
  }
}

PokeList.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.object),
  // fav: PropTypes.array,
  handleFav: PropTypes.func,
  id: PropTypes.number,
  key: PropTypes.number
}
export default PokeList;