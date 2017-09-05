import React, { Component } from 'react';

import { Grid, Col, Row, Panel, Form, FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Button }  from 'react-bootstrap';

import RoutesForm from './RoutesForm';
import RoutesTable from './RoutesTable';
import RoutesPagination from './RoutesPagination';

class Routes extends Component {
  render() {
    return (
        <Grid>
            <Row>                
                <Panel header="Add Routes Configuration">
                    <RoutesForm routesCallbacks={this.props.routesCallbacks} />
                </Panel>                
            </Row>                
            <Row>                
                <Panel header="Routes Configuration List">       
                    <RoutesTable Routes={this.props.Routes} 
                                 routesCallbacks={this.props.routesCallbacks} 
                                 Pagination={this.props.Pagination}                    
                    />
                    <RoutesPagination Routes={this.props.Routes}
                                      routesCallbacks={this.props.routesCallbacks}                                                                             
                                      rowNumber={this.props.rowNumber}
                    />
                </Panel>                
            </Row>
        </Grid>      
    );
  }
}


export default Routes;