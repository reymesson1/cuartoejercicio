import React, { Component } from 'react';

import Currency from './Currency'
    
const API_URL = 'http://localhost:8081';
const API_HEADERS = {

    'Content-Type': 'application/json',
    Authorization: 'any-string-you-like'
};    

class CurrencyContainer extends Component {
    
    constructor(){
  
          super();
          this.state = {

              Currency: [],              
              
          }
    }
    
    componentDidMount(){

          fetch(API_URL+'/currency',{ headers: API_HEADERS})
          .then((response) => response.json())
          .then((responseData) => {

              this.setState({

                  Currency: responseData
              })          
          })      
          .catch((error)=>{

              console.log('Error fetching and parsing data', error);
          })          
    }
    
    insertCurrency(event){
        
        event.preventDefault();
        let nextState = this.state.Currency;
        
        let currency = event.target.controlid.value;
        
        nextState.push({"id":"1","price":parseInt(currency),"status":"active"});
        
        this.setState({
        
            Currency: nextState
        })
        
        fetch(`${API_URL}/currency/${currency}`, {
        
            method: 'post',
            headers: API_HEADERS,
            body: JSON.stringify({currency:currency})
        })
            
        
                
    }

    render() {
        return (
          <Currency Currency={this.state.Currency}
                    currencyCallbacks={{
                        insert: this.insertCurrency.bind(this),
                    }}   
          />
        );
    }
}

export default CurrencyContainer;