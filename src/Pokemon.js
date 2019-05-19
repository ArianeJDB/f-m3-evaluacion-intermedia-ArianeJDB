import React from 'react';

class Pokemon extends React.Component{
  render() {
    return (
      <div key={this.props.id}>
          <li>
            <h2>{this.props.name}</h2>
            <img src={this.props.imgURL} alt={this.props.name} />
             <ul className="types__list"> 
               {this.props.types.map(type => {
                 return (
                   <h3 key={type}>
                     {type}
                   </h3>
                 )
               })}
             </ul>
          </li>
        </div>
    );
  }
}

export default Pokemon;