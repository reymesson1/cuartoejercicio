import React, { Component } from 'react';
import SchedulebanBoard from './SchedulebanBoard';
    
let cardsList = [
     {
         id: 1,
         title: "Read the Book",
         description: "I should read the whole book",
         color: '#BD8D31',
         status: "in-progress",
         tasks: []
     },{
         id: 4,
         title: "Read the Book",
         description: "I should read the whole book",
         color: '#4dacdb',
         status: "todo",
         tasks: []
     },
     {
         id: 2,
         title: "Write some code",
         description: "Code along with the samples in the book",
         color: '#0088cc',
         status: "todo",
         tasks: [
                 {
                     id: 1,
                     name: "ContactList Example",
                     done: true
                 },
                 {
                     id: 2,
                     name: "Kanban Example",
                     done: false
                 },
                 {
                     id: 3,
                     name: "My own experiments",
                     done: false
                 }
        ]
    },
    
];


class Schedule extends Component{

    render(){
    
        return(
            <SchedulebanBoard cards={cardsList} 
                              cardCallbacks={{            
                                  updateStatus: this.updateCardStatus,
                                  updatePosition: this.updateCardPosition,
                              }}
            />
        );
    }
}


export default Schedule;