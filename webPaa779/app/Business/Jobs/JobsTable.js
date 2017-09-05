import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class JobsTable extends Component{

    render(){
    
        return(
        
            <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>ID</th>
                    <th>Job Title</th>
                    <th>Salary</th>
                    <th>Job Status</th>
                    <th>Open</th>
                    <th>Date</th>
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

export default JobsTable;