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
        
            timesheets: [],
            showModal: false,
            alert: false,
            Pagination: '',
            rowNumber: 4,
            activePage: 1
        }
    }
    
    onSelectedPagination(data){
          this.setState({

              activePage: data
          });
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
        
        let nextStateTimesheets = this.state.timesheets;
        
        let objTimesheets = {
            "id":Date.now(),            
            "maindocument":data.target.maindocument.value,
            "status":data.target.status.value,
            "revision":data.target.revision.value,
            "workerId":data.target.workerId.value,
            "startdate":data.target.startdate.value,
            "enddate":data.target.enddate.value,
            "total": ''
        }
                
        nextStateTimesheets.push(objTimesheets);
            
        this.close();
        
        this.setState({
        
            alert: true,
            timesheets: nextStateTimesheets
        });
        
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
                    <TimesheetTable timesheets={this.state.timesheets}
                    />                    
                </Row>
                <Row>
                    <div className="pull-right">
                        <TimesheetPagination    timesheets={this.state.timesheets}
                                                onSelectedPagination={this.onSelectedPagination.bind(this)}
                                                rowNumber={this.state.rowNumber}
                                                activePage={this.state.activePage}

                        />
                    </div>
                </Row>            
                    
            </Grid>
            
        );
    }
}

export default Timesheet;