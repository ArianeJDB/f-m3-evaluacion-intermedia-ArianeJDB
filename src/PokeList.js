import React from 'react';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
  render() {
    return (
      <ul className="list">
      {this.props.pokemon.map(item => {
        return (
          <Pokemon 
            key={item.id}
            name={item.name}
            imgURL={item.url}
            alt={item.name}
            types={item.types}
          />
        // <div key={item.id}>
        //   <li>
        //     <h2>{item.name}</h2>
        //     <img src={item.url} alt={item.name} />
        //      <ul className="types__list"> 
        //        {item.types.map(type => {
        //          return (
        //            <h3 key={type}>
        //              {type}
        //            </h3>
        //          )
        //        })}
        //      </ul>
        //   </li>
        // </div>
        );
      })}      
      </ul>
    );
  }
}
export default PokeList;