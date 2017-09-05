import React, { Component } from 'react';

import { Table } from 'react-bootstrap';

import InvoiceTableBody from './InvoiceTableBody';

class InvoiceTable extends Component{

    render(){        
        
        let filteredInvoices = this.props.invoices.filter(
            (invoice) => invoice.username.indexOf(this.props.filterText) !== -1
        );
                
        return(
            <Table striped bordered condensed hover>
                <thead>
                  <tr>                    
                    <th>{' '}</th>                    
                    <th>ID</th>
                    <th>Items</th>
                    <th>Total</th>
                    <th>Username</th>                    
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredInvoices.map(
                    (invoice, invoiceIndex) => <InvoiceTableBody id={invoice.id}                                               
                                               items={invoice.items} 
                                               username={invoice.username}                                               
                                               total={invoice.total}
                                               quoteCallbacks={this.props.quoteCallbacks}                                
                               />
                  )}
                  
                </tbody>
              </Table>
            
        );
    }    
}

export default InvoiceTable;