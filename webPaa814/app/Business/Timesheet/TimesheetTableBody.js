import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class TimesheetTableBody extends Component{
    
    render(){
    
        return(
        
            <tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.maindocument}</td>
                    <td>{this.props.status}</td>
                    <td>{this.props.revision}</td>
                    <td>{this.props.workerId}</td>
                    <td>{this.props.startdate}</td>
                    <td>{this.props.enddate}</td>
                    <td>{this.props.total}</td>
                                     
            </tr>
        );
    }
}

export default TimesheetTableBody;