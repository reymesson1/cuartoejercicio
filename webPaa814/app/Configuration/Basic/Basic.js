import React, { Component } from 'react';

import { Grid, Col, Row, Panel, Form, FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Button }  from 'react-bootstrap';

import BasicForm from './BasicForm';
import BasicTable from './BasicTable';

class Basic extends Component {
  render() {
    return (
        <Grid>
            <Row>                
                <Panel header="Add Basic Configuration">
                    <BasicForm basicCallbacks={this.props.basicCallbacks} />
                </Panel>                
            </Row>                
            <Row>                
                <Panel header="Basic Configuration List">        
                    <BasicTable basics={this.props.basics}/>
                </Panel>                
            </Row>
        </Grid>      
    );
  }
}

export default Basic;