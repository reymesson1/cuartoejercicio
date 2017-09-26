import React, { Component } from 'react';
import Card from './Card';
import constants from './constants';

class ListBodyData extends Component{

    render(){
    
    var cards = this.props.cards.map((card) =>{

                return <Card id={card.id} 
                             title={card.title}         
                             description={card.description}         
                             color={card.color}
                             tasks={card.tasks}
                             cardCallbacks={this.props.cardCallbacks}
                       />
            })
        return (
        
                <tbody>   
                    {cards}                                    
                </tbody>
        );
    }
}

export default ListBodyData;