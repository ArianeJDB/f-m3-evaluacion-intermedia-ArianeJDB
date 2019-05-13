import React from 'react';

class Pokemon extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <img src={this.props.image} alt=""/>
        <h2>{this.props.types}</h2>
      </div>
    );
  }
}
export default Pokemon;
