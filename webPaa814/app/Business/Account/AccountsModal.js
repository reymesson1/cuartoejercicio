import React, { Component } from 'react';
import { Grid, Row, Panel, Col, Modal, Alert } from 'react-bootstrap';
import { Form, FormGroup, Button, ControlLabel, FormControl, Checkbox    } from 'react-bootstrap';
import { Link, Redirect } from 'react-router';

class AccountsModal extends Component{
    
        
    render(){
        
        let modal;
        
        if(this.props.showModal){
            modal = (
                <Modal show={this.props.showModal} onHide={this.props.close}>
                    <Grid>
                        <Row>                        
                            <div style={{"margin":"2%"}}>
                                <h1><i className="fa fa-user" aria-hidden="true"></i>&nbsp;Add Transaction</h1>                        
                            </div>
                        </Row>
                        <Row>
                        <Col md={6}>
                            <Form horizontal onSubmit={this.props.onSave.bind(this)}>
                                <FormGroup controlId="formHorizontalAccountId">
                                  <Col componentClass={ControlLabel} sm={2}>
                                    Account Id
                                  </Col>
                                  <Col sm={10}>
                                    <FormControl type="text" placeholder="Account Id" name="accountid" />
                                  </Col>
                                </FormGroup>
                                <FormGroup controlId="formHorizontalBankName">
                                  <Col componentClass={ControlLabel} sm={2}>
                                    Bank Name
                                  </Col>
                                  <Col sm={10}>
                                    <FormControl type="text" placeholder="Bank Name" name="bankname" />
                                  </Col>
                                </FormGroup>                                
                                <FormGroup controlId="formHorizontalDeposit">
                                  <Col componentClass={ControlLabel} sm={2}>
                                    Deposit
                                  </Col>
                                  <Col sm={10}>
                                    <FormControl type="text" placeholder="Deposit" name="deposit" />
                                  </Col>
                                </FormGroup>
                                <FormGroup controlId="formHorizontalCredit">
                                  <Col componentClass={ControlLabel} sm={2}>
                                    Credit
                                  </Col>
                                  <Col sm={10}>
                                    <FormControl type="text" placeholder="Credit" name="credit" />
                                  </Col>
                                </FormGroup>

                                <FormGroup>
                                  <Col smOffset={2} sm={10}>
                                    <Button type="submit">
                                      Save
                                    </Button>
                                  </Col>
                                </FormGroup>
                              </Form>
                        </Col>
                    </Row>                    
                    </Grid>                                    
                </Modal>
            );
        }
    
        return(
        
            <div>
                {modal}
            </div>
        );
    }
}

export default AccountsModal;