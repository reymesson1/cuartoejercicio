import React, { Component } from 'react';

import { Table } from 'react-bootstrap';

import BasicTableBody from './BasicTableBody';

class BasicTable extends Component{

    render(){
    
        return(
            <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Price</th>                    
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.basics.map(
                    (basic) => <BasicTableBody 
                                    id={basic.id}
                                    price={basic.price}
                                    status={basic.status}
                               />        
                  )}                  
                </tbody>
              </Table>
        );
    }
}

export default BasicTable;