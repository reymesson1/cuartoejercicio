import React, { Component } from 'react';

import { FormGroup, Col, FormControl, ControlLabel  } from 'react-bootstrap';  

class QuoteSearch extends Component{
            
    handleChange(event){
            
        this.props.quoteCallbacks.userinput(event.target.value);
    }

    render(){
    
        return(
            <div>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Search: 
                  </Col>
                  <Col sm={10}>
                    <FormControl type="text" name="search" placeholder="Search" onChange={this.handleChange.bind(this)}
                    />
                  </Col>
                </FormGroup>
            
            </div>
        );
    }
}

export default QuoteSearch;