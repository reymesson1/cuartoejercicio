import React, { Component } from 'react';
import { Grid, Row, Panel, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router';
import  OrdersTable from './OrdersTable';
import  OrdersPagination from './OrdersPagination';
import  OrdersModal from './OrdersModal';

class Orders extends Component{
    
    constructor(){
    
        super();
        this.state = {
        
            orders: [],
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
    
    onDelete(orderId){
        
        let nextState = this.state.orders;
        
        for(var x=0;x<nextState.length;x++){
            if(nextState[x].id==orderId){
                nextState.splice(x,1);               
            }
        }
        
        this.setState({
            
            orders: nextState
        });
    }
    
    
    onSave(data){
                
        data.preventDefault();
        
        let nextStateOrders = this.state.orders;
        
        let objOrders = {
            "id":Date.now(),
            "productname": data.target.productname.value,
            "quantity": data.target.quantity.value,
            "price": data.target.price.value,
            "discount": data.target.discount.value,
            "tax": data.target.tax.value,
            "requireddate": data.target.requireddate.value,
            "delivereddate": data.target.delivereddate.value
        }
                
        nextStateOrders.push(objOrders);
            
        this.close();
        
        this.setState({
        
            alert: true,
            orders: nextStateOrders
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
                        <h1><i className="fa fa-plus" aria-hidden="true"></i>&nbsp;Orders</h1>
                    </Panel>
                </Row>
                <Row>
                    <div className="pull-right">
                        <Button onClick={this.open.bind(this)}><i className="fa fa-plus" aria-hidden="true"></i>&nbsp;Add New Worker</Button>            
                        <OrdersModal showModal={this.state.showModal}
                                        close={this.close.bind(this)}
                                        onSave={this.onSave.bind(this)}
                        />
                    </div>
                </Row>
                <br/>
                <Row>
                    <OrdersTable orders={this.state.orders}
                                 onDelete={this.onDelete.bind(this)}
                    />
                </Row>
                <Row>
                    <div className="pull-right">
                        <OrdersPagination orders={this.state.orders}
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

export default Orders;