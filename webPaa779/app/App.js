import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link } from 'react-router';

import Toolbar from './Toolbar';
import Dashboard from './Dashboard/DashboardContainer';
import SidebarContainer from './SidebarContainer';
import InvoiceContainer from './Invoice/InvoiceContainer';
import QuoteContainer from './Quote/QuoteContainer';
import BasicContainer from './Configuration/Basic/BasicContainer';
import CurrencyContainer from './Configuration/Currency/CurrencyContainer';
import RoutesContainer from './Configuration/Routes/RoutesContainer';
import Orders from './Business/Orders/Orders';
import Accounts from './Business/Account/Accounts';
import TaskbanBoardContainer from './Business/Tasks/TaskbanBoardContainer';
import Schedule from './Business/Schedule/Schedule';
import Jobs from './Business/Jobs/Jobs';
import Timesheet from './Business/Timesheet/Timesheet';


import { Panel, Button } from 'react-bootstrap';

class App extends Component{
    
    render(){
        
        return(
            <div>
                <Toolbar/>
                <SidebarContainer />
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

ReactDOM.render(
                <Router >
                    <Route path="/" component={App}>
                    <IndexRoute component={Dashboard}/>
                    <Route path="invoice" component={InvoiceContainer}/>
                    <Route path="quote" component={QuoteContainer}/>
                    <Route path="dashboard" component={Dashboard}/>
                    <Route path="basic" component={BasicContainer}/>
                    <Route path="current" component={CurrencyContainer}/>
                    <Route path="routes" component={RoutesContainer}/>
                    <Route path="orders" component={Orders}/>
                    <Route path="accounts" component={Accounts}/>
                    <Route path="tasks" component={TaskbanBoardContainer}/>
                    <Route path="schedule" component={Schedule} />
                    <Route path="/jobs" component={Jobs} />
                    <Route path="/timesheet" component={Timesheet} />                      
                    </Route>
                </Router>                            
                , document.getElementById('root'));
