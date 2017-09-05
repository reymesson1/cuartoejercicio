import React,{ Component } from 'react';
import TaskbanBoard from './TaskbanBoard';
import 'whatwg-fetch';
import { throttle } from './utils';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const API_URL = 'http://localhost:8081';
const API_HEADERS = {

    'Content-Type': 'application-json',
    Authorization: 'any-string-you-like'
};

class TaskbanBoardContainer extends Component{
    
    constructor(){
    
        super(...arguments);
        this.state = {
        
            cards: []
        };
        
        this.updateCardStatus = throttle(this.updateCardStatus.bind(this));
        this.updateCardPosition = throttle(this.updateCardPosition.bind(this));
    }
    
    componentDidMount(){
    
        fetch(API_URL+'/cards', {headers: API_HEADERS})
        .then((response)=>response.json())
        .then((responseData)=>{
        
            this.setState({cards: responseData});
        })
        .catch((error) =>{
        
            console.log('Error fetching and parsing data',error);
        })
    }
    
    addTask(cardId, taskName){
            
        let nextState = this.state.cards;
        
        for(var x=0;x<nextState.length;x++){
            
            if(nextState[x].id==cardId){
                                
                nextState[x].tasks.push({"id":Date.now(), "name":taskName,"done":false});
            }        
        }
        
        this.setState({
        
            cards: nextState
        });
    
    }
    deleteTask(cardId, taskId, taskIndex){
            
        let nextState = this.state.cards;
                
        for(var x=0;x<nextState.length;x++){
            if(nextState[x].id==cardId){                
                nextState[x].tasks.splice(taskIndex,1);
            }
        }
        
        this.setState({
        
            cards: nextState
        });
                
    }
    toggleTask(cardId, taskId, taskIndex){}
    
    updateCardStatus(cardId, listId){
        
        let nextState = this.state.cards;
        
        let cardIndex = this.state.cards.findIndex((card)=>card.id==cardId);
        
        let statusAct = nextState[cardIndex].status;

                        
        for(var x=0;x<nextState.length;x++){
            if(nextState[x].id==cardId){                
                nextState[x].status=listId
                
            }            
        }
        
        this.setState({

            cards: nextState
        });
    
    }
    updateCardPosition(cardId, afterId){
        
    
        let cardIndex = this.state.cards.findIndex((card)=>card.id==cardId);
                
        let card = this.state.cards[cardIndex];
                
        let nextState = this.state.cards;
        
        let statusAct = nextState[cardIndex].status;
        
        
        let afterCardIndex = this.state.cards.findIndex((card)=>card.id==afterId); 
        
        nextState.splice(cardIndex,1);
        nextState.splice(afterCardIndex,0,card);
        
        this.setState({
        
            cards: nextState
        });
    }

    render(){
    
        return(
        
            <TaskbanBoard cards={this.state.cards} 
                          taskCallbacks={{
                                toggle: this.toggleTask.bind(this),
                                delete: this.deleteTask.bind(this),
                                add: this.addTask.bind(this),
                          }}
                          cardCallbacks={{
                                updateStatus: this.updateCardStatus.bind(this),
                                updatePosition: this.updateCardPosition.bind(this)
                          }}
            /> 
        );
    }

}

//export default TaskbanBoardContainer;
export default DragDropContext(HTML5Backend)(TaskbanBoardContainer);