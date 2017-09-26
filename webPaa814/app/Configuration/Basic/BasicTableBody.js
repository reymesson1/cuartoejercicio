import React, { Component } from 'react';

class BasicTableBody extends Component{

    render(){
    
        return(
        
              <tr>
                <td>{this.props.id}</td>
                <td>{this.props.price}</td>
                <td>{this.props.status}</td>                
              </tr>              
        );
    }
}

export default BasicTableBody;