import React, { Component } from 'react';
import TimesheetTable from './TimesheetTable';
import TimesheetPagination from './TimesheetPagination';
import { Grid, Row, Panel, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router';
import TimesheetModal from './TimesheetModal';

let item;

class Timesheet extends Component{
    
    constructor(){
    
        super();
        this.state = {
        
            showModal: false,
            alert: false
        }
    }
    
    close(){
    
        this.setState({
        
            showModal: false
        })        
    }
    
    open(){
    
        this.setState({
        
            showModal: true
        })        
    }
    
    
    onSave(data){
                
        data.preventDefault();
        
        console.log(data.target.maindocument.value);
        console.log(data.target.startdate.value);
        console.log(data.target.enddate.value);
        
        this.close();
        
        this.setState({
        
            alert: true
        });
        
        const self = this;
        
        setInterval(() => {
            setTimeout(() => this.setState({ alert: false }), 1000)
        }, 4000)
        
    }
    
    render(){
        
        let alert;
        
        if(this.state.alert){                
                alert = (
                    <Alert bsStyle="success">
                        <strong>Record Inserted Successfully!</strong>
                    </Alert>
                );
        }
    
        return(
            <Grid>
                <div className="pull-right">
                    {alert}
                </div>
                <Row>
                    <Panel>
                        <h1><i className="fa fa-user" aria-hidden="true"></i>&nbsp;Timesheet</h1>
                    </Panel>
                </Row>
                <Row>
                    <div className="pull-right">
                        <Button onClick={this.open.bind(this)}><i className="fa fa-plus" aria-hidden="true"></i>&nbsp;Add New Worker</Button>
                        <TimesheetModal showModal={this.state.showModal}
                                        close={this.close.bind(this)}
                                        onSave={this.onSave.bind(this)}
                        />
                    </div>
                </Row>
                <br/>
                <Row>                    
                    <TimesheetTable />                    
                </Row>
                <Row>
                    <div className="pull-right">
                        <TimesheetPagination />
                    </div>
                </Row>            
                    
            </Grid>
            
        );
    }
}

export default Timesheet;