import React,{ Component } from 'react';
import { Table } from 'react-bootstrap';
import ListBodyEmpty from './ListBodyEmpty'; 


class ListSaturday extends Component{

    render(){
    
        return(
        
            <Table striped bordered condensed responsive>
                <thead>
                  <tr>
                    <th>Saturday</th>                                        
                  </tr>
                </thead>
                    <ListBodyEmpty />
              </Table>
        
        );
    }
}

export default ListSaturday;