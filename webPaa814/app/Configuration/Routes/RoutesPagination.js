import React, { Component } from 'react';

import { Pagination, Row, Col }  from 'react-bootstrap';

class RoutesPagination extends Component{
    
    constructor(){
    
        super();
        this.state = {
        
            activePage: 1,
            items: 4,            
        }
    }
    
        
    handleSelect(eventKey) {
        
        
        let nextState = eventKey;
                
        this.setState({
          activePage: nextState
        });
        
        this.props.routesCallbacks.onselectedpagination(eventKey);

    }

    render(){    
    
        return(
            <Row>
                <Col md={4}>
                </Col>
                <Col mdOffset={8}>
                    <Pagination
                        prev
                        next
                        first
                        last
                        ellipsis
                        boundaryLinks
                        activePage={this.state.activePage}
                        items={this.state.items}
                        onSelect={this.handleSelect.bind(this)}
                    />
                </Col>
            </Row>
        );
    }
}

export default RoutesPagination;