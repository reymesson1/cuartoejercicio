import React, { Component } from 'react';
import { Grid, Row, Panel, Col, Modal, Alert } from 'react-bootstrap';
import { Form, FormGroup, Button, ControlLabel, FormControl, Checkbox    } from 'react-bootstrap';
import { Link, Redirect } from 'react-router';

class OrdersModal extends Component{
    
        
    render(){
        
        let modal;
        //Order Id Product Name Quantity Price Amount Discount Tax Delived Date
        if(this.props.showModal){
            modal = (
                <Modal show={this.props.showModal} onHide={this.props.close}>
                    <Grid>
                        <Row>                        
                            <div style={{"margin":"2%"}}>
                                <h1><i className="fa fa-user" aria-hidden="true"></i>&nbsp;Add Orders</h1>                        
                            </div>
                        </Row>
                        <Row>
                        <Col md={6}>
                            <Form horizontal onSubmit={this.props.onSave.bind(this)}>
                                <FormGroup controlId="formHorizontalProductName">
                                  <Col componentClass={ControlLabel} sm={2}>
                                    Product Name
                                  </Col>
                                  <Col sm={10}>
                                    <FormControl type="text" placeholder="Product Name" name="productname" />
                                  </Col>
                                </FormGroup>
                                <FormGroup controlId="formHorizontalQuantity">
                                  <Col componentClass={ControlLabel} sm={2}>
                                    Quantity
                                  </Col>
                                  <Col sm={10}>
                                    <FormControl type="text" placeholder="Quantity" name="quantity" />
                                  </Col>
                                </FormGroup>
                                <FormGroup controlId="formHorizontalPrice">
                                  <Col componentClass={ControlLabel} sm={2}>
                                    Price
                                  </Col>
                                  <Col sm={10}>
                                    <FormControl type="text" placeholder="Price" name="price" />
                                  </Col>
                                </FormGroup>

                                <FormGroup controlId="formHorizontalDiscount">
                                  <Col componentClass={ControlLabel} sm={2}>
                                    Discount
                                  </Col>
                                  <Col sm={10}>
                                    <FormControl type="text" placeholder="Discount" name="discount" />
                                  </Col>
                                </FormGroup>
                                <FormGroup controlId="formHorizontalTax">
                                  <Col componentClass={ControlLabel} sm={2}>
                                    Tax
                                  </Col>
                                  <Col sm={10}>
                                    <FormControl type="text" placeholder="Tax" name="tax" />
                                  </Col>
                                </FormGroup>
                                <FormGroup controlId="formHorizontalRequired Date">
                                  <Col componentClass={ControlLabel} sm={2}>
                                    Required Date
                                  </Col>
                                  <Col sm={10}>
                                    <FormControl type="date" placeholder="Required Date" name="requireddate" />
                                  </Col>
                                </FormGroup>

                                <FormGroup controlId="formHorizontalDelivered Date">
                                  <Col componentClass={ControlLabel} sm={2}>
                                    Delivered Date                                  </Col>
                                  <Col sm={10}>
                                    <FormControl type="date" placeholder="Delivered Date" name="delivereddate" />
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

export default OrdersModal;