import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class InvoiceTableBody extends Component{
    
    
    render(){
    
        return(            
                  <tr>                    
                    <td><input type="checkbox" /></td>
                    <td>{this.props.id}</td>             
                    <td>{this.props.items}</td>                         
                    <td>{this.props.total.toFixed(2)}</td>    
                    <td>{this.props.username}</td>    
                    <td>
                        <Button bsStyle="success">View</Button>{ ' ' }
                        <Button bsStyle="danger">Delete</Button>
                    </td>
                  </tr>                          
        );
    }
}

export default InvoiceTableBody;