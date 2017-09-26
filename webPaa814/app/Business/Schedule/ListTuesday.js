import React,{ Component } from 'react';
import { Table } from 'react-bootstrap';
import ListBodyEmpty from './ListBodyEmpty'; 


class ListTuesday extends Component{

    render(){
    
        return(
        
            <Table striped bordered condensed responsive >
                <thead>
                  <tr>
                    <th>Tuesday</th>                                        
                  </tr>
                </thead>
                    <ListBodyEmpty />
              </Table>
        
        );
    }
}

export default ListTuesday;