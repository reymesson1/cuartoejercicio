import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import TimesheetTableBody from './TimesheetTableBody';

class TimesheetTable extends Component{

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
                  {this.props.timesheets.map(
                    (timesheet) => <TimesheetTableBody      key={timesheet.id}
                                                            id={timesheet.id}
                                                            maindocument={timesheet.maindocument}
                                                            status={timesheet.status}
                                                            revision={timesheet.revision}
                                                            workerId={timesheet.workerId}
                                                            startdate={timesheet.startdate}
                                                            enddate={timesheet.enddate}                                                           
                                                            total={timesheet.total}                                                           
                                   />
                )}
                </tbody>
              </Table>
        );
    }
}

export default TimesheetTable;