import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './Cards';
import axios from 'axios';

class App extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            data: [1,2,3,4,5,6,7,8],
            status:'',
            cards: "card-list-hidden"
        };
        
        this.handleStartGame = this.handleStartGame.bind(this);
        
    }
    
    handleStartGame(){
        this.setState({cards: "card-list-show" });
    }
    
    componentDidMount(){
        axios.get(this.props.url)
            .then(res => {
            console.log("printing response ",res);
        })
    }
    
    render() {
    return (
        <div className="App">
            <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to My Memory Game</h2>
        </div>
            <p className="App-intro">
          To get started, click below ...
        </p>
            <button className = "start-game btn btn-primary" onClick = { this.handleStartGame } > START </button>
            <Cards class = {this.state.cards} data = { this.state.data } />
      </div>
    );
  }
}

export default App;
