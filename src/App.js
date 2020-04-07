/**
 * @author Bruno Prédot
 * Licence
 * App component
 */
import React from 'react';
import logo from './logo.svg';
import './App.css';

import FilterableGamesTable from "./Components/Game/FilterableGamesTable";

class App extends React.Component {

  render() {
      const GAMES = [];
      GAMES.push({category: 'RPG', price: '70€', stocked: true, name: 'Zelda Breath of the Wild'});
      GAMES.push({category: 'RPG', price: '30', stocked: false, name: 'The Witcher 3'});
      GAMES.push({category: 'Course auto', price: '30', stocked: false, name: 'Dirt 3'});
      GAMES.push({category: 'FPS', price: '10€', stocked: true, name: 'Counter Strike'});
      GAMES.push({category: 'FPS', price: '40€', stocked: false, name: 'BattleField'});
      GAMES.push({category: 'Course auto', price: '40€', stocked: true, name: 'Forza Horizon'});
      GAMES.push({category: 'FPS', price: '20€', stocked: true, name: 'Tomb Raider'});
      GAMES.push({category: 'Adventure', price: '10€', stocked: true, name: 'Uncharted'});
      GAMES.push({category: 'Adventure', price: '70€', stocked: false, name: 'The Last of US part 2'});
      GAMES.push({category: 'Adventure', price: '50€', stocked: true, name: 'God of War'});
      GAMES.push({category: 'Plateforme', price: '60€', stocked: true, name: 'Mario'});
      GAMES.push({category: 'MMORPG', price: '10€', stocked: true, name: 'Aion'});
      GAMES.push({category: 'MMORPG', price: '20€', stocked: true, name: 'World of Warcraft'});

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
