import React, {Component} from 'react';
import './Nav.css';
import './movie.css';

class MovieForm extends Component{
    constructor(){
        super();
        this.state={
            title:'',
            year:'',
            duration:''
        };
        this.handleInput=this.handleInput.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleInput(e){
        const{value, name}=e.target
        this.setState({
            [name]: value
        })

    }
    handleSubmit(e){
        e.preventDefault();
        this.props.onAddMovie(this.state);
        console.log(this.state);
    }

    render(){
        return(
            <div className="card column box">
                <form onSubmit={this.handleSubmit}>
                    <p>{this.props.function}</p>
                    <div>
                        <input onChange={this.handleInput} type="text" name="title" placeholder="Titulo"></input>
                    </div>
                    <div>
                        <input onChange={this.handleInput} type="text" name="year" placeholder="Year"></input>
                    </div>
                    <div>
                        <input onChange={this.handleInput} type="text" name="duration" placeholder="Duration"></input>
                    </div>
                    <button>Save</button>
                </form>
            </div>
        )
    }
}
export default MovieForm;