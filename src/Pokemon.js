import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component{
  render() {
    return (
      <div className={`card ${this.props.fav.includes(this.props.id) ? 'favourite' : ''}`} onClick={this.props.handleFav} id={this.props.id}>
            <h2 className="title-card">{this.props.name}</h2>
            <img src={this.props.imgURL} alt={this.props.name} />
             <ul className="types"> 
               {this.props.types.map(type => {
                 return (
                  <li className="list-types" key={type}>
                    <span className="types">
                      {type}
                    </span>
                  </li>
                 )
               })}
             </ul>
        </div>
    );
  }
}
Pokemon.propTypes = {
name: PropTypes.string,
imgURL: PropTypes.string,
types: PropTypes.arrayOf(PropTypes.string),
fav: PropTypes.arrayOf(PropTypes.number),
id: PropTypes.number,
}
export default Pokemon;