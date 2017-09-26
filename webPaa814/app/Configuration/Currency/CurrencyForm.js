import React, {Component} from 'react';

import { Grid, Col, Row, Panel, Form, FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Button }  from 'react-bootstrap';

class CurrencyForm extends Component{
    
    onReset(){
    
        var currencyForm = document.getElementById('currencyform');
        
        currencyForm.reset();
    }

    render(){
    
        return(
        
            <Form  id="currencyform" onSubmit={this.props.currencyCallbacks.insert.bind(this)}  horizontal>
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

export default CurrencyForm;