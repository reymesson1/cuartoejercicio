import React, { Component } from 'react';

import Routes from './Routes';

import 'whatwg-fetch';
    
const API_URL = 'http://localhost:8081';
const API_HEADERS = {

    'Content-Type': 'application/json',
    Authorization: 'any-string-you-like'
};    

class RoutesContainer extends Component {
    
    constructor(){
  
          super();
          this.state = {

              Routes: [],
              Pagination: '',
              rowNumber: 10,
              items: 1,
              

              
          }
    }
    
    componentDidMount(){

          fetch(API_URL+'/routes',{ headers: API_HEADERS})
          .then((response) => response.json())
          .then((responseData) => {

              this.setState({

                  Routes: responseData
              })          
          })      
          .catch((error)=>{

              console.log('Error fetching and parsing data', error);
          })  
                    
    }
    
    insertRoutes(event){
        
        event.preventDefault();
        let nextState = this.state.Routes;
        
        let routes = event.target.controlid.value;
        let shippingto = event.target.shippingto.value;
        
        nextState.push({"id":"1","price":parseInt(routes),"shippingto":shippingto,"status":"active"});
        
        this.setState({
        
            Routes: nextState
        })
        
        fetch(`${API_URL}/routes/${routes}/${shippingto}`, {
        
            method: 'post',
            headers: API_HEADERS,
            body: JSON.stringify({routes:routes})
        })
            
        
                
    }
    
    onSelectedPagination(data){
        
      this.setState({
      
          Pagination: data
      }); 
        
        
    }
    
    
    render() {
            
        return (
          <Routes Routes={this.state.Routes}
                  Pagination={this.state.Pagination}
                  rowNumber={this.state.rowNumber}                  
                  routesCallbacks={{
                        insert: this.insertRoutes.bind(this),
                        onselectedpagination: this.onSelectedPagination.bind(this),                        
                    }}  
          />
        );
    }
}

export default RoutesContainer;