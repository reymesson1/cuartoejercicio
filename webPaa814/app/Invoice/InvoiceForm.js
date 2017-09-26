import React, { Component } from 'react';

import { Col, Row, Form, FormControl, ControlLabel, FormGroup, Checkbox , Button  } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

class InvoiceForm extends Component{
    
    constructor(){
                    
        super();
        this.state = {

        }
    }

    onSave(event){
        
        event.preventDefault();
        
        
        var formQuote = document.getElementById('quoteForm');
                
        formQuote.reset();
        
        this.props.invoiceCallbacks.close();
                    
    }
    
    render(){
        
        return(
            <Modal show={this.props.showModal} onHide={this.props.invoiceCallbacks.close}>
                <Modal.Header>  
                        <Modal.Title>New Invoice</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Row>                                    
                        <Form horizontal>
                            <FormGroup controlId="formHorizontalCustomer">
                              <Col componentClass={ControlLabel} sm={2}>
                                Customer
                              </Col>
                              <Col sm={6} md={10}>
                                <FormControl type="text" placeholder="Customer" />
                              </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalPassword">
                              <Col componentClass={ControlLabel} sm={2}>
                                Password
                              </Col>
                              <Col sm={6} md={10}>
                                <FormControl type="password" placeholder="Password" />
                              </Col>
                            </FormGroup>

                            <FormGroup>
                              <Col smOffset={2} sm={10}>
                                <Checkbox>Remember me</Checkbox>
                              </Col>
                            </FormGroup>

                            <FormGroup>
                              <Col smOffset={2} sm={10}>
                                <Button type="submit">
                                  Sign in
                                </Button>
                              </Col>
                            </FormGroup>
                            
                        </Form>
                </Row>
                </Modal.Body>
            </Modal>
        );    
    }
}

export default InvoiceForm;