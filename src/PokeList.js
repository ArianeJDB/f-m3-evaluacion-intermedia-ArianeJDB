import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
  render() {
    return (
      <ul className="list" key="1">
      {this.props.pokemon.map(item => {
        return (
          <Pokemon 
            key={item.id}
            name={item.name}
            imgURL={item.url}
            alt={item.name}
            types={item.types}
          />
        );
      })}      
      </ul>
    );
  }
}

PokeList.propTypes = {
  pokemon: PropTypes.array,

}
export default PokeList;