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
      removeMovie(index){
        this.setState({
            mymovies:this.state.mymovies.filter((e,i)=>{
                return i !== index
            })
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
                <div>
                    <button onClick={this.removeMovie.bind(this,i)}>Delete</button>
                </div>
            </div>
    
          )
        })
        const App = () =>
        <div>
         <MovieForm function="Add movie:" onAddMovie={this.addMovie}/>
         {movies}
        </div>;
      return(
          
       
      <App/>
      

      )
  
    }

}
export default MovieList;