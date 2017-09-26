import React, { Component } from 'react';

import { Table } from 'react-bootstrap';

import CurrencyTableBody from './CurrencyTableBody';


class CurrencyTable extends Component{

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
                  {this.props.Currency.map(
                    (currencies) => <CurrencyTableBody 
                                    id={currencies.id}
                                    price={currencies.price}
                                    status={currencies.status}
                               />        
                  )}  
                </tbody>
              </Table>
        );
    }
}

export default CurrencyTable;