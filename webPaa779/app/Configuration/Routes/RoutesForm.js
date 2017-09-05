import React, {Component} from 'react';

import { Grid, Col, Row, Panel, Form, FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Button }  from 'react-bootstrap';

class RoutesForm extends Component{
    
    onReset(){
    
        var routesForm = document.getElementById('routesform');
        
        routesForm.reset();
    }

    render(){
    
        return(
        
            <Form id="routesform" onSubmit={this.props.routesCallbacks.insert.bind(this)} horizontal>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Control Id
                  </Col>
                  <Col sm={6}>
                    <FormControl type="text" name="controlid" placeholder="Control ID" />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalShippingTo">
                  <Col componentClass={ControlLabel} sm={2}>
                    Shipping To
                  </Col>
                  <Col sm={6}>
                    <FormControl type="text" name="shippingto" placeholder="Shipping To" />
                  </Col>
                </FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Button bsStyle="primary" type="submit">
                      Save
                    </Button>{' '}
                    <Button onClick={this.onReset}>
                      Cancel
                    </Button>
                  </Col>
            </Form>
        );
    }
}

export default RoutesForm;