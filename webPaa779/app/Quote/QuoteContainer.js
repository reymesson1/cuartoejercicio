import React, { Component } from 'react';
import Quote from './Quote';

import 'whatwg-fetch';

const API_URL = 'http://localhost:8081';
const API_HEADERS = {

    'Content-Type': 'application/json',    
    Authorization: 'any-string-you-like'
    
};


class QuoteContainer extends Component{
    
    constructor(){
  
      super();
      this.state = {
      
          Quotes: [
              {"id":7589,"startdate":"08/11/2017","enddate":"11/08/2017","currency":"USD","status":"novel","shippingto":"Read the Book","total":"151.00","drivername":"I should read the **whole** book","username":"#BD8D31"},
                {"id":7590,"startdate":"08/11/2017","enddate":"11/08/2017","currency":"USD","status":"novel","shippingto":"Write some code","total":"151.00","drivername":"Code along with the samples in the book at [github](https://github.com/pro-react)","username":"#3A7E28"},
                {"id":7654,"startdate":"08/11/2017","enddate":"11/08/2017","currency":"USD","status":"novel","shippingto":"Learning chapter 7","total":"151.00","drivername":"Performance Tuning","username":"#c9c9c9"},
                {"id":7648,"startdate":"08/11/2017","enddate":"11/08/2017","currency":"USD","status":"novel","shippingto":"Learning chapter 7","total":"151.00","drivername":"Architecting React application with Flux","username":"#f6ff64"}
              
          ],
          Basic: [],
          Currency: [],
          Routes: [],
          filterText: '',
          Approved: [],
          Pagination: '',
          rowNumber: 4,
          changeOneTime: false,
          showModal: false
      }
  }
      
  componentDidMount(){
  
      fetch(API_URL+'/quotes',{ headers: API_HEADERS})
      .then((response) => response.json())
      .then((responseData) => {
      
          this.setState({
          
              Quotes: responseData
          })          
      })
      fetch(API_URL+'/basic',{ headers: API_HEADERS})
      .then((response) => response.json())
      .then((responseData) => {
      
          this.setState({
          
              Basic: responseData
          })          
      })
      fetch(API_URL+'/currency',{ headers: API_HEADERS})
      .then((response) => response.json())
      .then((responseData) => {
      
          this.setState({
          
              Currency: responseData
          })          
      })
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
    
    handleUserInput(searchData){
      
      
      let nextState = searchData;
      
      this.setState({
      
          filterText: searchData
      });
            
  }
    
  handleAddQuote(data,status){
             
      let nextState = this.state.Quotes;
      
      if(status=='novel'){
          
          let total;
          if(this.state.Basic&&this.state.Currency&&this.state.Routes){

              let Basic = this.state.Basic;          
              total = parseInt(Basic[0].price);          

                    
          }
          
          let cantidad;
          let newID;
          if(nextState.length==0){
              cantidad=0;
              newID=0;
          }else{
              cantidad = nextState.length-1;

              newID = nextState[cantidad].id+1;          
          }


          let variableInit = total/7.25; //20.83

          let variableFixed=14.02;//14.02

          let variableGrand=6045.00;//6045.00

          let variableRow=242.00 * variableInit;

          let variableRow2=242.00 * variableFixed;

          total=variableGrand+variableRow+variableRow2;

          total*=2;      

          total = total.toFixed(2);

          nextState.push({
              "id":newID,
              "startdate":data.target.startdate.value,  
              "enddate":data.target.enddate.value,  
              "currency":data.target.currency.value,  
              "shippingto":'novel',  
              "drivername":data.target.drivername.value,  
              "status":status,
              "total": total
          });

      
      }else if(status=='poem'){
          
          
          let total;
          if(this.state.Basic&&this.state.Currency&&this.state.Routes){

              let Basic = this.state.Basic;          
              total = parseInt(Basic[0].price);          

               
          }
          
          let cantidad = nextState.length-1;
      
          let newID = nextState[cantidad].id+1;
          
          let variableInit = total/4; //37.75
          
          let variableFixed=36.00;//36.00
          
          let variableFixed2=71.10;//71.10
          
          let variableGrand=4500.00;//4500.00
          
          let variableFixed3=65.00;//65.00
          
          let variableRow=45.00 * variableFixed;//45*36
          
          let variableRow2=45.00 * variableInit; //45*37.75
          
          total=variableGrand+variableRow+variableRow2;
          
          total*=2;      

          total = total.toFixed(2);
          
          nextState.push({
              "id":newID,
              "startdate":data.target.startdate.value,  
              "enddate":data.target.enddate.value,  
              "currency":data.target.currency.value,  
              "shippingto":'poem',  
              "drivername":data.target.drivername.value,  
              "status":status,
              "total": total
          });
      
          
      }else{
          
          let total;
          if(this.state.Basic&&this.state.Currency&&this.state.Routes){

              let Basic = this.state.Basic;          
              total = parseInt(Basic[0].price);          

                  
          }
          
          let nextStateRoutes = this.state.Routes;
                
          let routesPrice;
          
          for(var x=0;x<nextStateRoutes.length;x++){
              
              if(nextStateRoutes[x].shippingto==data.target.shippingto.value){
                    routesPrice = parseFloat(nextStateRoutes[x].price);
              }          
          }
          
          
          let cantidad = nextState.length-1;
      
          let newID = nextState[cantidad].id+1;
          
          let variableInit = total/4; //37.75
          
          let variableFixed=36.00;//36.00
          
          let variableFixed2=73.75;//73.75
          
          let variableGrand=4500.00;//4500.00
          
          let variableFixed3=85.00;//85.00
          
          let variableRow=routesPrice * variableFixed;//107*36  
          
          let variableRow2=routesPrice * variableInit; //107*37.75
          
          total=variableGrand+variableRow+variableRow2 + 17287.50;
          
          
          nextState.push({
              "id":newID,
              "startdate":data.target.startdate.value,  
              "enddate":data.target.enddate.value,  
              "currency":data.target.currency.value,  
              "shippingto":data.target.shippingto.value,  
              "drivername":data.target.drivername.value,
              "status":status,
              "total": total
          });
      }
      
      this.setState({
      
          Quotes: nextState
      });
      
      
  }
    
  onSelectedDelete(quoteId){
      
      let nextState = this.state.Quotes;
          
      for(var x=0;x<nextState.length;x++){
          if(nextState[x].id==quoteId){
          
            nextState.splice(x,1);
          }
      }
      
      this.setState({
      
          Quotes: nextState
      });
            
  }
    
  onSelectedToApproved(event){//button approved
      
      //require fetch
      let nextState = this.state.Approved;
      
            
      if(nextState.length==0){
      
          
          var alertApproved = document.getElementById('alertApproved');
          
          alertApproved.style.display = 'block'
          
            setInterval(function() {
              alertApproved.style.display = 'none'
            }, 3000);
                    
      
      }else{
          let quotes = this.state.Quotes;


          let temp;

          for(var x=0;x<nextState.length;x++){
              for(var y=0;y<quotes.length;y++){
                  if(nextState[x]==quotes[y].id){                  
                      quotes.splice(y,1);                      
                  }
              }
          }

          this.setState({

              Quotes: quotes
          });
          
          
          for(var x=0;x<nextState.length;x++){
              
                console.log(nextState[x]);
                fetch(`${API_URL}/approved/${nextState[x]}`, {

                    method: 'post',
                    headers: API_HEADERS,
                    body: JSON.stringify({items:nextState[x]})
                })
          }
          
          

          var checkbox = document.getElementById('checkbox');


          if(checkbox.checked){
              checkbox.checked=false;
          }      
      }
      
  }

  onSelectedQuote(event){//checkbox 
      
      //require fetch
      
      let nextState = this.state.Approved;
      
      let bool = true;
      
      
      
      if(event.target.checked){
        
        for(var x=0;x<nextState.length;x++){
            if(nextState[x]==event.target.value){
            
                bool=false;
            }
        }
        if(bool){
            nextState.push(parseInt(event.target.value));
            
            this.setState({
      
                  Approved: nextState
            })
        }
      }/*else{
      
          for(var x=0;x<nextState.length;x++){
                if(nextState[x]==event.target.value){

                    nextState.splice(x,1);
                }
            }
      }
      
      this.setState({
      
          Approved: nextState
      });*/
      
      
  }
    
  onSelectedPagination(data){
      this.setState({
      
          Pagination: data
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
        
        console.log(this.state.Quotes);
        
        return(
            <div>        
                <Quote quotes={this.state.Quotes}
                       filterText={this.state.filterText}
                       Pagination={this.state.Pagination}
                       rowNumber={this.state.rowNumber}
                       showModal={this.state.showModal}
                       quoteCallbacks={{
                            userinput: this.handleUserInput.bind(this),
                            handleaddquote: this.handleAddQuote.bind(this),
                            onselecteddelete: this.onSelectedDelete.bind(this),
                            onselectedtoapproved: this.onSelectedToApproved.bind(this),
                            onselectedquote: this.onSelectedQuote.bind(this),
                            onselectedpagination: this.onSelectedPagination.bind(this),
                            close: this.close.bind(this),
                            open: this.open.bind(this),

                       }}
                />
            </div>
        );
    }
}

export default QuoteContainer;