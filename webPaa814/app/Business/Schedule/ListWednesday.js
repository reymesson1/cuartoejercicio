import React,{ Component } from 'react';
import { Table } from 'react-bootstrap';
import ListBodyEmpty from './ListBodyEmpty'; 


class ListWednesday extends Component{

    render(){
    
        return(
        
            <Table striped bordered condensed responsive>
                <thead>
                  <tr>
                    <th>Wednesday</th>                                        
                  </tr>
                </thead>
                    <ListBodyEmpty />
              </Table>
        
        );
    }
}

export default ListWednesday;