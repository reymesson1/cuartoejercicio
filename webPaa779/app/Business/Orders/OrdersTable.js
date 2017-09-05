import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class OrdersTable extends Component{

    render(){
    
        return(
        
            <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>ID</th>
                    <th>Revision</th>
                    <th>Main Document</th>
                    <th>Worker ID</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Approved</td>
                    <td>0</td>
                    <td>S003</td>
                    <td>K003</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>40.00</td>
                  </tr>
                  <tr>
                    <td>Approved</td>
                    <td>0</td>
                    <td>S003</td>
                    <td>K003</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>40.00</td>
                  </tr>
                  <tr>
                    <td>Pending</td>
                    <td>0</td>
                    <td>S003</td>
                    <td>K003</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>40.00</td>
                  </tr>
                </tbody>
              </Table>
        );
    }
}

export default OrdersTable;