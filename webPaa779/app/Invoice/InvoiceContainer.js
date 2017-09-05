import React, { Component } from 'react';

import 'whatwg-fetch';

const API_URL = 'http://localhost:8081';
const API_HEADERS = {

    'Content-Type': 'application/json',
    Authorization: 'any-string-you-like'
};

import Invoice from './Invoice';

class InvoiceContainer extends Component{
    
    constructor(){

          super();
          this.state = {

              Invoices: [],
              filterText: '',
          }
    }
    
    handleUserInput(searchData){
      
          let nextState = searchData;

          this.setState({

              filterText: searchData
          });
    }
    
    render(){
        
        return(
            <Invoice   invoices={this.state.Invoices}                     
                       filterText={this.state.filterText}
                       invoiceCallbacks={{
                            userinput: this.handleUserInput.bind(this),                            
                       }}            
            />
        );
    }
}

export default InvoiceContainer;