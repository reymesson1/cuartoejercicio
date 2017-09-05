import React, { Component } from 'react';
import constants from './constants';

class Card extends Component{
    
    
    
    render(){
        
        const { connectDragSource } = this.props;
        
        
        let sideColor = {
        
            background: this.props.color
        }
    
        return (
        
            <div className="card" >
                <div className="card__title" >{this.props.title}</div>                
            </div>
        );
    }
}

export default Card;