import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import Card from './Card';
import constants from './constants';

const listTargetSpec = {

    hover(props, monitor){
    
        const draggedId = monitor.getItem().id;
        props.cardCallbacks.updateStatus(draggedId, props.id)
    }
}

function collect(connect, monitor){
    
    return{
    
        connectDropTarget: connect.dropTarget()
    }
}

class List extends Component{

    render(){
        
        const { connectDropTarget } = this.props;
        
        var cards = this.props.cards.map((card) =>{
        
            return <Card key={card.id}
                         id={card.id}
                         title={card.title}
                         description={card.title}
                         color={card.color}
                         tasks={card.tasks}
                         taskCallbacks={this.props.taskCallbacks}
                         cardCallbacks={this.props.cardCallbacks}
            />
        })
    
        return connectDropTarget(
            <div className="list">
                <h1>{this.props.title}</h1>
                {cards}
            </div>
        );
    }
}

//export default List;
export default DropTarget(constants.CARD, listTargetSpec, collect)(List);