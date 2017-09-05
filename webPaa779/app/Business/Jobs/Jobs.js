import React, { Component } from 'react';
import { Grid, Row, Panel, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router';
import JobsTable from './JobsTable';
import JobsPagination from './JobsPagination';
import JobsModal from './JobsModal';

class Jobs extends Component{
    
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
     
        clearInterval();
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
                        <h1><i className="fa fa-tasks" aria-hidden="true"></i>&nbsp;Jobs</h1>
                    </Panel>
                </Row>
                <Row>
                    <div className="pull-right">
                        <Button onClick={this.open.bind(this)}><i className="fa fa-plus" aria-hidden="true"></i>&nbsp;Add New Worker</Button>                                    
                        <JobsModal showModal={this.state.showModal}
                                        close={this.close.bind(this)}
                                        onSave={this.onSave.bind(this)}
                        />
                    </div>
                </Row> 
                <br/>
                <Row>
                    <JobsTable />
                </Row>
                <Row>
                    <div className="pull-right">
                        <JobsPagination />
                    </div>
                </Row>                    
            </Grid>
        );
    }
}

export default Jobs;