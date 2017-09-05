import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import ListBody from './ListBody'; 

class ListHeader extends Component{

    render(){
    
        return(
            <div>                
                <Table striped bordered condensed responsive>
                <thead>
                  <tr>
                    <th>&nbsp;</th>                                        
                  </tr>
                </thead>
                    <ListBody />
              </Table>
            </div>
        );
    }
}

export default ListHeader;