import React, { Component } from 'react';
import List from './List';
import 'whatwg-fetch';

class TaskbanBoard extends Component{

    render(){
    
        return(
            <div className="app">
              <List id="todo" title="To Do"
                    cards={this.props.cards.filter((card) => card.status == "todo")}
                    taskCallbacks={this.props.taskCallbacks}
                    cardCallbacks={this.props.cardCallbacks}
              />                    
              <List id="in-progress" title="In Progress"
                    cards={this.props.cards.filter((card) => card.status == "in-progress")}
                    taskCallbacks={this.props.taskCallbacks}
                    cardCallbacks={this.props.cardCallbacks}
              />
              <List id="done" title="Done"
                    cards={this.props.cards.filter((card) => card.status == "done")}
                    taskCallbacks={this.props.taskCallbacks}
                    cardCallbacks={this.props.cardCallbacks}
              />
            </div>
        );
    }
}

export default TaskbanBoard;