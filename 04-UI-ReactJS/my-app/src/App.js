import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav';
import MovieList from './components/MovieList';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Nav titulo="Movies" />
        <header className="App-header">
        
        
          <div className="clearfix">
            <MovieList/>
          </div>
        
        </header>

      </div>
    );
  }
}

export default App;