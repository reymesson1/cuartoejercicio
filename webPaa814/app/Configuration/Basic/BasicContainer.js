import React, { Component } from 'react';

import Basic from './Basic'
    
const API_URL = 'http://localhost:8081';
const API_HEADERS = {

    'Content-Type': 'application/json',
    Authorization: 'any-string-you-like'
};    

class BasicContainer extends Component {
    
    constructor(){
  
          super();
          this.state = {

              Basics: [],
              
          }
    }
    
    componentDidMount(){

          fetch(API_URL+'/basic',{ headers: API_HEADERS})
          .then((response) => response.json())
          .then((responseData) => {

              this.setState({

                  Basics: responseData
              })          
          })      
          .catch((error)=>{

              console.log('Error fetching and parsing data', error);
          })          
    }
    
    insertBasic(event){
        
        event.preventDefault();
        let nextState = this.state.Basics;
        
        let basic = event.target.controlid.value;
        
        nextState.push({"id":"1","price":parseInt(basic),"status":"active"});
        
        this.setState({
        
            Basics: nextState
        })
        
        fetch(`${API_URL}/basic/${basic}`, {
        
            method: 'post',
            headers: API_HEADERS,
            body: JSON.stringify({basic:basic})
        })
            
        
                
    }

    render() {
        return (
          <Basic basics={this.state.Basics}
                 basicCallbacks={{
                    insert: this.insertBasic.bind(this),
                 }}  
          />
        );
    }
}

export default BasicContainer;