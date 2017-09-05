import React, { Component } from 'react';

class RoutesTableBody extends Component{

    render(){
    
        return(
        
              <tr>
                <td>{this.props.id}</td>
                <td>{this.props.price}</td>
                <td>{this.props.shippingto}</td>
                <td>{this.props.status}</td>                
              </tr>              
        );
    }
}

export default RoutesTableBody;