import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import AccountsTableBody from './AccountsTableBody';

class AccountsTable extends Component{

    render(){
    
        return(
        
            <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>Transaction Id</th>
                    <th>Bank Name</th>
                    <th>Account Id</th>
                    <th>Deposit</th>
                    <th>Credit</th>
                    <th>Balance</th>                    
                  </tr>
                </thead>
                <tbody>
                  {this.props.accounts.map(
                    (account) => <AccountsTableBody key={account.id}
                                                    id={account.id}
                                                    accountid={account.accountid}
                                                    bankname={account.bankname}
                                                    deposit={account.deposit}
                                                    credit={account.credit}
                                                    balance={account.balance}
                                  />                    
                  )}
                </tbody>
              </Table>
        );
    }
}

export default AccountsTable;