import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import List from './List';
import ListHeader from './ListHeader';
import ListMonday from './ListMonday';
import ListTuesday from './ListTuesday';
import ListWednesday from './ListWednesday';
import ListThursday from './ListThursday';
import ListFriday from './ListFriday';
import ListSaturday from './ListSaturday';

class SchedulebanBoard extends Component{
    


    render(){    
        return(
            <div>
            <Row>
                <h1><i className="fa fa-calendar" aria-hidden="true"></i>&nbsp;Schedule</h1>
                <br/>
            </Row>
            <Row style={{"border":"1px solid #dddddd"}}>            
                <Col md={1} style={{"padding":"0px"}}>
                    <List />   
                </Col>
                <Col md={2} style={{"padding":"0px"}}>
                    <ListMonday id='todo'
                                title='To Do'
                                cards={this.props.cards.filter((card)=>card.status==='todo')}
                                cardCallbacks={this.props.cardCallbacks}
                />
                </Col>
                <Col md={2} style={{"padding":"0px"}}>
                    <ListTuesday />
                </Col>
                <Col md={2} style={{"padding":"0px"}}>
                    <ListWednesday />
                </Col>
                <Col md={2} style={{"padding":"0px"}}>
                    <ListThursday />
                </Col>
                <Col md={2} style={{"padding":"0px"}}>
                    <ListFriday />
                </Col>
                <Col md={1} style={{"padding":"0px"}}>
                    <ListSaturday />
                </Col>
                
            </Row>
            </div>
        );
    }
    
}

export default SchedulebanBoard