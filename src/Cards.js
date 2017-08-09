import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Card from './Card';

class Cards extends Component {
    
    render(){
         let card_list = this.props.data.map((child,i)=>{
             return (
                <Col xs={6} md={3} key={i}>
                    <Card num = { child } />
                </Col>
            );
        });
        
        return (
            <div className = {this.props.class}>
                <Grid>
                    <Row>
                        { card_list }
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Cards;












