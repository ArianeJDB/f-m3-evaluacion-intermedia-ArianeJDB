import React from 'react';
// import PropTypes from 'prop-types';
import './App.css';
import PokeList from './PokeList';
import pokemon from './PokeData'


class App extends React.Component {
  render() {
     return (
     <PokeList
     pokemon={pokemon}
      />

    );
  }};

  App.propTypes = {
    // PokeList: PropTypes.string,
  }

export default App;
