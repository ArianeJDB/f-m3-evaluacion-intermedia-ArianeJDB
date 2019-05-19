import React from 'react';

class Pokemon extends React.Component{
  render() {
    return (
      <div className="card">
          <li className="list-card">
            <h2 className="title-card">{this.props.name}</h2>
            <img src={this.props.imgURL} alt={this.props.name} />
             <ul className="types"> 
               {this.props.types.map(type => {
                 return (
                  <li className="list-types" key={type}>
                    <h3 className="types">
                      {type}
                    </h3>
                  </li>
                 )
               })}
             </ul>
          </li>
        </div>
    );
  }
}

export default Pokemon;