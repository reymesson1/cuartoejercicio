import React,{ Component } from 'react';
import { Table } from 'react-bootstrap';
import ListBodyEmpty from './ListBodyEmpty'; 


class ListFriday extends Component{

    render(){
    
        return(
        
            <Table striped bordered condensed responsive>
                <thead>
                  <tr>
                    <th>Friday</th>                                        
                  </tr>
                </thead>
                    <ListBodyEmpty />
              </Table>
        
        );
    }
}

export default ListFriday;