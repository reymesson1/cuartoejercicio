import React,{ Component } from 'react';
import { Table } from 'react-bootstrap';
import Card from './Card';
import ListHeader from './ListHeader';

class List extends Component{

    render(){
        
        return(
        
            <div>                
                <ListHeader />                
            </div>
        );
    }
}

export default List;