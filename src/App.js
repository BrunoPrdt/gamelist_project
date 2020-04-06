import React from 'react';
import logo from './logo.svg';
import './App.css';

import FilterableGamesTable from "./Components/Game/FilterableGamesTable";

class App extends React.Component {

    state = {
        testAppState: ''
    };
    //arow function to bind this!
    onInputChange = (val) => {
        this.setState({testAppState: val});
    };

  render() {
      const GAMES = [];
      GAMES.push({category: 'FPS', price: '10€', stoked: true, name: 'Counter Strike'});
      GAMES.push({category: 'FPS', price: '40€', stoked: false, name: 'BattleField'});
      GAMES.push({category: 'FPS', price: '20€', stoked: true, name: 'PUBG'});
      GAMES.push({category: 'Adventure', price: '10€', stoked: true, name: 'Uncharted'});
      GAMES.push({category: 'Adventure', price: '70€', stoked: false, name: 'The Last of US part 2'});
      GAMES.push({category: 'Adventure', price: '50€', stoked: true, name: 'God of War'});
      GAMES.push({category: 'Adventure', price: '70€', stoked: true, name: 'Death Stranding'});

      return (
          <div className="App">
              <header className="App-header">
                  <FilterableGamesTable games={GAMES} />
                  <img src={logo} className="App-logo" alt="logo" />
                  <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      Learn React
                  </a>
              </header>
          </div>
      );
  }
}

export default App;
