import React, { Component } from 'react';
import { Grid, Col, Row, Panel } from 'react-bootstrap';

import { Button } from 'react-bootstrap';

import InvoiceSearch from './InvoiceSearch';
import InvoiceTable from './InvoiceTable';

import InvoiceForm from './InvoiceForm';

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
                        <Button className="pull-right" onClick={this.props.invoiceCallbacks.open.bind(this)}><i className="fa fa-plus" aria-hidden="true"></i>&nbsp;Add New Invoice</Button>
                        <InvoiceForm    invoiceCallbacks={this.props.invoiceCallbacks}
                                        showModal={this.props.showModal}
                        />
                </Row>
                <br/>
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