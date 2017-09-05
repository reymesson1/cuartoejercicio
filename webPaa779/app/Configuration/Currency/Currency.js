import React, { Component } from 'react';

import { Grid, Col, Row, Panel, Form, FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Button }  from 'react-bootstrap';

import CurrencyForm from './CurrencyForm';
import CurrencyTable from './CurrencyTable';

class Currency extends Component {
  render() {
    return (
        <Grid>
            <Row>                
                <Panel header="Add Currency Configuration">
                    <CurrencyForm currencyCallbacks={this.props.currencyCallbacks} />
                </Panel>                
            </Row>                
            <Row>                
                <Panel header="Currency Configuration List">        
                    <CurrencyTable Currency={this.props.Currency}/>
                </Panel>                
            </Row>
        </Grid>      
    );
  }
}

export default Currency;