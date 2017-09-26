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
              showModal: false
          }
    }
    
    componentDidMount(){

          fetch(API_URL+'/approved', {headers: API_HEADERS})
          .then((response) => response.json())
          .then((responseData) => {

              this.setState({

                  Invoices: responseData
              })          
          })
          .catch((error)=>{

              console.log('Error fetching and parsing data', error);
          })
          
          
    }
    
    handleUserInput(searchData){
      
          let nextState = searchData;

          this.setState({

              filterText: searchData
          });
    }
    
    open(){

          this.setState({

              showModal: true
          });

    }

      close(){

          this.setState({

              showModal: false
          });  
    }
    
    render(){
        
        return(
            <Invoice   invoices={this.state.Invoices}                     
                       filterText={this.state.filterText}
                       invoiceCallbacks={{
                            userinput: this.handleUserInput.bind(this),                            
                            open: this.open.bind(this),                            
                            close: this.close.bind(this),                            
                       }}
                       showModal={this.state.showModal}
            />
        );
    }
}

export default InvoiceContainer;