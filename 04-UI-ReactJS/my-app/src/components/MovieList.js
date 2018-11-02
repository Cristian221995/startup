import React, { Component } from 'react';

import {movies} from './movies.json';
import MovieForm from './MovieForm';

class MovieList extends Component {
    constructor(){
        super();
        this.state={
          mymovies:movies
        }
        this.addMovie=this.addMovie.bind(this);
      }

      addMovie(movie){
          this.setState({
            mymovies: [...this.state.mymovies,movie]
          })
        
      }
      render() {
        const movies=this.state.mymovies.map((movie,i) => {
          return(
            <div className="card column box">  
                <div>
                  <h3>{movie.title}</h3>
                </div>
                <div>
                  <p>Year: {movie.year}</p>
                  <p>Duration: {movie.duration}</p>
                </div>
    
            </div>
    
          )
        })
        const App = () =>
        <div>
         <MovieForm onAddMovie={this.addMovie}/>
         {movies}
        </div>;
      return(
          
       
      <App/>
      

      )
  
    }

}
export default MovieList;