import React from 'react';
import logo from './logo.svg';
import './App.css';
import {PureComponent} from './Components/PureComponent';
import {FunctionalPropsComponent} from './Components/PureComponent';
import ClassComponent from "./Components/ClassComponent";

class App extends React.Component {

    state = {
        testAppState: ''
    };
    //arow function to bind this!
    onInputChange = (val) => {
        this.setState({testAppState: val});
    };

  render() {
      let myLabels = [];
      myLabels.push('bruno');
      myLabels.push('énora');
      myLabels.push('nila');
      myLabels.push('papy');
      myLabels.push('mamie');

      return (
          <div className="App">
              <header className="App-header">
                  <div>
                      <p>Voici les utilisateurs de cette session:</p>
                      <ul>
                          {myLabels.map( (label) =>  <li>{label}</li>  ) }
                      </ul>
                  </div>
                  <img src={logo} className="App-logo" alt="logo" />
                  {this.state.testAppState? <div></div> :
                      <p>
                          Edit <code>src/App.js</code> and save to reload.
                      </p>}
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
                  <ClassComponent test2={'voici la props test2'} onInputChange={this.onInputChange} nomApp={this.state.testAppState}/>
              </header>
          </div>
      );
  }
}

export default App;
