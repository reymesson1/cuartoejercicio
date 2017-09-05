import React, { Component } from 'react';
import { Grid, Row, Panel, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router';
import AccountsTable from './AccountsTable';
import AccountsPagination from './AccountsPagination';
import AccountsModal from './AccountsModal';

class Accounts extends Component{
    
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
                        <h1><i className="fa fa-university" aria-hidden="true"></i>&nbsp;Accounts</h1>
                    </Panel>
                </Row>
                <Row>
                    <div className="pull-right">
                        <Button onClick={this.open.bind(this)}><i className="fa fa-plus" aria-hidden="true"></i>&nbsp;Add New Worker</Button>            
                        <AccountsModal showModal={this.state.showModal}
                                        close={this.close.bind(this)}
                                        onSave={this.onSave.bind(this)}
                        />
                    </div>                        
                </Row>
                <br/>
                <Row>
                    <AccountsTable />             
                </Row>
                <Row>
                    <div className="pull-right">
                        <AccountsPagination />
                    </div>
                </Row>
            </Grid>
        );
    }
}

export default Accounts;