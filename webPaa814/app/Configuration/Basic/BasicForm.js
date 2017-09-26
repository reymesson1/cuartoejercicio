import React, {Component} from 'react';

import { Grid, Col, Row, Panel, Form, FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Button }  from 'react-bootstrap';

class BasicForm extends Component{
    
    onReset(){
    
        var basicForm = document.getElementById('basicform');
        
        basicForm.reset();
    }
    
    render(){
    
        return(
        
            <Form id="basicform" onSubmit={this.props.basicCallbacks.insert.bind(this)} horizontal>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Control Id
                  </Col>
                  <Col sm={6}>
                    <FormControl type="text" name="controlid" placeholder="Control ID" />
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

export default BasicForm;