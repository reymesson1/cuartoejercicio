import React, { Component } from 'react';
import { Link } from 'react-router';

class SidebarContainer extends Component{

    render(){
    
        return(
            <div className="sidebar" style={{display:'none'}}>
                <h1>&nbsp;</h1>
                <ul>
                    <li><Link to="/dashboard"><i className="fa fa-tachometer" aria-hidden="true"></i>&nbsp;Dashboard</Link></li>
                    <li><Link to="/orders"><i className="fa fa-plus" aria-hidden="true"></i>&nbsp;Orders</Link></li>
                    <li><Link to="/accounts"><i className="fa fa-university" aria-hidden="true"></i>&nbsp;Accounts</Link></li>
                    <li><Link to="/tasks"><i className="fa fa-tasks" aria-hidden="true"></i>&nbsp;Tasks</Link></li>
                    <li><Link to="/schedule"><i className="fa fa-calendar" aria-hidden="true"></i>&nbsp;Schedule</Link></li>
                    <li><Link to="/jobs"><i className="fa fa-tasks" aria-hidden="true"></i>&nbsp;Jobs</Link></li>
                    <li><Link to="/timesheet"><i className="fa fa-user" aria-hidden="true"></i>&nbsp;TimeSheet</Link></li>
                </ul>
            </div>
        );
    }
}

export default SidebarContainer;