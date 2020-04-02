import React from 'react';
import logo from './logo.svg';
import './App.css';
import {PureComponent} from './Components/PureComponent';
import {FunctionalPropsComponent} from './Components/PureComponent';
import ClassComponent from "./Components/ClassComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <PureComponent />
      <FunctionalPropsComponent test1={'la première props'}/>
      <ClassComponent test2={'voici la props test2'}/>
      </header>
    </div>
  );
}

export default App;
