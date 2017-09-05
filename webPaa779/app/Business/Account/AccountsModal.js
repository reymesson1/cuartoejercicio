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
                                <h1><i className="fa fa-user" aria-hidden="true"></i>&nbsp;Add Accounts</h1>                        
                            </div>
                        </Row>
                        <Row>
                        <Col md={6}>
                            <Form horizontal onSubmit={this.props.onSave.bind(this)}>
                                <FormGroup controlId="formHorizontalMainDocument">
                                  <Col componentClass={ControlLabel} sm={2}>
                                    Doc No.
                                  </Col>
                                  <Col sm={10}>
                                    <FormControl type="text" placeholder="MainDocument" name="maindocument" />
                                  </Col>
                                </FormGroup>

                                <FormGroup controlId="formHorizontalStartDate">
                                  <Col componentClass={ControlLabel} sm={2}>
                                    Start
                                  </Col>
                                  <Col sm={10}>
                                    <FormControl type="date" placeholder="Start Date" name="startdate" />
                                  </Col>
                                </FormGroup>

                                <FormGroup controlId="formHorizontalEndDate">
                                  <Col componentClass={ControlLabel} sm={2}>
                                    End
                                  </Col>
                                  <Col sm={10}>
                                    <FormControl type="date" placeholder="Start Date" name="enddate" />
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