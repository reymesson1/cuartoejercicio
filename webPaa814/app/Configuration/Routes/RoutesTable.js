import React, { Component } from 'react';

import { Panel, Table, Pagination } from 'react-bootstrap';

import RoutesTableBody from './RoutesTableBody';

class RoutesTable extends Component{

    render(){
        
        
        var x=0;
        let Pagination;
        if(this.props.Pagination==1){            
            x=10

            Pagination = this.props.Routes.filter(function(number,index){

                    return index<x;
            });
        }else if(this.props.Pagination==2){
            Pagination = this.props.Routes.filter(function(number,index){

                    return index>=10&&index<20;
            });
        }else if(this.props.Pagination==3){
            Pagination = this.props.Routes.filter(function(number,index){

                    return index>=20&&index<30;
            });
        }else if(this.props.Pagination==4){
            Pagination = this.props.Routes.filter(function(number,index){

                    return index>=30&&index<40;
            });
        }else{  
            Pagination = this.props.Routes.filter(function(number,index){

                    return index<10;
            });                                
        }
        
        
        
        
    
        return(
                <Table striped bordered condensed hover>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Price</th>                    
                        <th>Shipping To</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Pagination.map(
                        (route) => <RoutesTableBody 
                                        id={route.id}
                                        price={route.price}
                                        shippingto={route.shippingto}
                                        status={route.status}
                                        routesCallbacks={this.props.routesCallbacks}                                
                                   />        
                      )}
                    </tbody>
                  </Table>
        );
    }
}

export default RoutesTable;