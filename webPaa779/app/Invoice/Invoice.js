import React, { Component } from 'react';
import { Grid, Col, Row, Panel } from 'react-bootstrap';

import InvoiceSearch from './InvoiceSearch';
import InvoiceTable from './InvoiceTable';

class Invoice extends Component {
    
      render() {
          
        

        return (
            <Grid>
                <Row>   
                    <Panel header="Search Book Invoice">
                        <InvoiceSearch  filterText={this.props.filterText}
                                        invoiceCallbacks={this.props.invoiceCallbacks} 
                        />
                    </Panel>
                </Row>
                <Row>   
                    <Panel header="New Book Invoice">
                        <InvoiceTable invoices={this.props.invoices} 
                                      filterText={this.props.filterText}
                                      invoiceCallbacks={this.props.invoiceCallbacks}
                        />
                    </Panel>
                </Row>
            </Grid>
        );
      }
}

export default Invoice;