import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import OrdersTableBody from './OrdersTableBody';

class OrdersTable extends Component{

    render(){
    
        return(
        
            <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Tax</th>
                    <th>Required Date</th>
                    <th>Delivered Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
            
                {this.props.orders.map(
                    (order) => <OrdersTableBody key={order.id}
                                                id={order.id}
                                                productname={order.productname}
                                                quantity={order.quantity}
                                                price={order.price}
                                                discount={order.discount}
                                                tax={order.tax}
                                                requireddate={order.requireddate}
                                                delivereddate={order.delivereddate}
                                                onDelete={this.props.onDelete}                                                
                               />
                )}                  
                </tbody>
              </Table>
        );
    }
}

export default OrdersTable;