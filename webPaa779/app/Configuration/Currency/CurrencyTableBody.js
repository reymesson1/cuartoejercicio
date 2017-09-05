import React, { Component } from 'react';

class CurrencyTableBody extends Component{

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

export default CurrencyTableBody;