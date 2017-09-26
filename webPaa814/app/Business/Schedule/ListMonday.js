import React,{ Component } from 'react';
import { DropTarget } from 'react-dnd';
import { Table } from 'react-bootstrap';
import ListBodyEmpty from './ListBodyEmpty'; 
import ListBodyData from './ListBodyData'; 
import Card from './Card';
import constants from './constants';


class ListMonday extends Component{

    render(){
                        
        return (
        <div>
            <Table striped bordered condensed responsive>
                <thead>
                  <tr>
                    <th>Monday</th>                                        
                  </tr>
                </thead>
                    <ListBodyData cards={this.props.cards}
                                  cardCallbacks={this.props.cardCallbacks}
                    />
              </Table>
        
        </div>
            
        );
    }
}

export default ListMonday;