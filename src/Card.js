import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {src:  "http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg"};
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    
    handleOnClick(){
        this.setState({src : "https://images.freecreatives.com/wp-content/uploads/2016/04/Creative-Plain-Smoke-Background.jpg"})
    }
    
    render(){
        return (
            <div>
           <Thumbnail className = "thumbnail" href="#" alt="171x180" src={this.state.src} onClick={this.handleOnClick} />
            <span>Printing {this.props.num}</span>
            </div>           
        )
    }
}

export default Card;