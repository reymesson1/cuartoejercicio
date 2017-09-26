import React,{ Component } from 'react';
import { Table } from 'react-bootstrap';
import ListBodyEmpty from './ListBodyEmpty'; 


class ListThursday extends Component{

    render(){
    
        return(
        
            <Table striped bordered condensed responsive>
                <thead>
                  <tr>
                    <th>Thursday</th>                                        
                  </tr>
                </thead>
                    <ListBodyEmpty />
              </Table>
        
        );
    }
}

export default ListThursday;