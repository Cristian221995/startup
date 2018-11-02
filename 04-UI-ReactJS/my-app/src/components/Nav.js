import React, { Component } from 'react';

import './Nav.css';

class Nav extends Component {
  
    render(){
        return(
            <nav className="nav"> 
            {this.props.titulo }
            </nav>
        );
    }

}

export default Nav;