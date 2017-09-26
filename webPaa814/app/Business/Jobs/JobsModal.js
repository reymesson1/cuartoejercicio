import React, { Component } from 'react';
import { Grid, Row, Panel, Col, Modal, Alert } from 'react-bootstrap';
import { Form, FormGroup, Button, ControlLabel, FormControl, Checkbox    } from 'react-bootstrap';
import { Link, Redirect } from 'react-router';

class JobsModal extends Component{
    
        
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
                                <FormGroup controlId="formHorizontalStatus">
                                  <Col componentClass={ControlLabel} sm={2}>
                                    Status
                                  </Col>
                                  <Col sm={10}>
                                    <FormControl type="text" placeholder="Status" name="status" />
                                  </Col>
                                </FormGroup>
                                <FormGroup controlId="formHorizontalEmployeeId">
                                  <Col componentClass={ControlLabel} sm={2}>
                                    EmployeeId
                                  </Col>
                                  <Col sm={10}>
                                    <FormControl type="text" placeholder="EmployeeId" name="employeeid" />
                                  </Col>
                                </FormGroup>
                                <FormGroup controlId="formHorizontalJobTitle">
                                  <Col componentClass={ControlLabel} sm={2}>
                                    JobTitle
                                  </Col>
                                  <Col sm={10}>
                                    <FormControl type="text" placeholder="JobTitle" name="jobtitle" />
                                  </Col>
                                </FormGroup>
                                <FormGroup controlId="formHorizontalComment">
                                  <Col componentClass={ControlLabel} sm={2}>
                                    Comment
                                  </Col>
                                  <Col sm={10}>
                                    <FormControl type="text" placeholder="Comment" name="comment" />
                                  </Col>
                                </FormGroup>
                                <FormGroup controlId="formHorizontalSalary">
                                  <Col componentClass={ControlLabel} sm={2}>
                                    Salary
                                  </Col>
                                  <Col sm={10}>
                                    <FormControl type="text" placeholder="Salary" name="salary" />
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

export default JobsModal;