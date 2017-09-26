import React, { Component } from 'react';

import { Row,Col, Pagination } from 'react-bootstrap';

class QuotePagination extends Component{

    constructor(){

        super();
        this.state = {
        
            activePage : 1,
            items: 1
            
        }
        
    }
    
    componentWillReceiveProps(){
                        
        let nextState = this.props.quotes;
        
        nextState=(Math.ceil(nextState.length/this.props.rowNumber));
    
        this.setState({
        
            items: nextState
        });
    }
    
    
    
    handleSelect(eventKey) {
        
        
        let nextState = eventKey;
                
        this.setState({
          activePage: nextState
        });
        
        this.props.quoteCallbacks.onselectedpagination(eventKey);
        
    }
        
    render(){
        
        return(
        
            <Row>
                <Col md={8}></Col>                
                <Col md={4}>                
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

export default QuotePagination;