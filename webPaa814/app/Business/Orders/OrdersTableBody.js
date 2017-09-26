import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class OrdersTableBody extends Component{

    render(){
    
        return(
        
            <tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.productname}</td>
                    <td>{this.props.quantity}</td>
                    <td>{this.props.price}</td>
                    <td>{this.props.discount}</td>
                    <td>{this.props.tax}</td>
                    <td>{this.props.requireddate}</td>
                    <td>{this.props.delivereddate}</td>                  
                    <td>
                        <Button bsStyle={"success"}><i className="fa fa-eye" aria-hidden="true"></i>&nbsp;</Button>
                        <Button bsStyle={"danger"} onClick={this.props.onDelete.bind(null,this.props.id)}><i className="fa fa-trash-o" aria-hidden="true"></i>&nbsp;</Button>
                    </td>                  
            </tr>
        );
    }
}

export default OrdersTableBody;