import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class AccountsTableBody extends Component{

    render(){
    
        return(
                  <tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.bankname}</td>
                    <td>{this.props.accountid}</td>
                    <td>{this.props.deposit}</td>
                    <td>{this.props.credit}</td>                    
                    <td>{this.props.balance}</td>                    
                  </tr>                  
        );
    }
}

export default AccountsTableBody;