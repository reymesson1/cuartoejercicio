import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class JobsTableBody extends Component{

    
    
    render(){
    
        return(
        
            <tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.status}</td>
                    <td>{this.props.employeeid}</td>
                    <td>{this.props.jobtitle}</td>
                    <td>{this.props.comment}</td>
                    <td>{this.props.salary}</td>
                    <td>{this.props.total}</td>
                                     
            </tr>
        );
    }
}

export default JobsTableBody;