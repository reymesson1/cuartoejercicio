import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import JobsTableBody from './JobsTableBody';

class JobsTable extends Component{
    
    status
employeeid
jobtitle
comment
salary

    render(){
    
        return(
        
            <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Status</th>
                    <th>Employee Id</th>
                    <th>Job Title</th>
                    <th>Comment</th>
                    <th>Salary</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.jobs.map(
                    (job) => <JobsTableBody     key={job.id}
                                                id={job.id}
                                                status={job.status}
                                                employeeid={job.employeeid}
                                                jobtitle={job.jobtitle}
                                                comment={job.comment}
                                                salary={job.salary}
                                                requireddate={job.requireddate}
                                                delivereddate={job.delivereddate}
                               />
                )} 
                </tbody>
              </Table>
        );
    }
}

export default JobsTable;