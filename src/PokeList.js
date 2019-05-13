import React from 'react';

class PokeList extends React.Component {
  render() {
    return (
      <ul className="list">
      {this.props.pokemon.map(item => {

        return (
        <div>
          <li>
            <h2>{item.name}</h2>
            <img src={item.url} />
             <ul className="types__list"> 
               {item.types.map(type => {
                 return (
                   <h3>
                     {type}
                   </h3>
                 )
               })}
             </ul>
          </li>
        </div>
        );
      })}      
      </ul>
    );
  }
}
export default PokeList;