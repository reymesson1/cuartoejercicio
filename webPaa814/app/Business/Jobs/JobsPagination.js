import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';

class JobsPagination extends Component{
    
    
    render(){
    
        return(
            <Pagination
                prev
                next
                first
                last
                ellipsis
                boundaryLinks
                items={this.props.rowNumber}
                maxButtons={5}
                activePage={this.props.activePage}
                onSelect={this.props.onSelectedPagination} />
        );
    }
} 

export default JobsPagination;