import React, { Component } from 'react';

import { Table, Pagination, Alert } from 'react-bootstrap';

import QuoteTableBody from './QuoteTableBody';

class QuoteTable extends Component{

    render(){
            
        var x=0;
        let Pagination;
        if(this.props.Pagination==1){            
            x=4

            Pagination = this.props.quotes.filter(function(number,index){

                    return index<x;
            });
        }else if(this.props.Pagination==2){
            Pagination = this.props.quotes.filter(function(number,index){

                    return index>=4&&index<8;
            });
        }else if(this.props.Pagination==3){
            Pagination = this.props.quotes.filter(function(number,index){

                    return index>=8&&index<11;
            });
        }else{  
            Pagination = this.props.quotes.filter(function(number,index){

                    return index<4;
            });                                
        }
            
        
        
        let filteredQuotes = Pagination.filter(
            (quote) => quote.shippingto.indexOf(this.props.filterText) !== -1
        );
        
            
        return(
            <div>
             <Alert bsStyle="danger" id="alertApproved" style={{"position":"absolute","left":"70%","top":"65%","display":"none"}}>
                 <strong>Wrong input submitted!</strong> please check select any, quote items.
             </Alert>
             <Table striped bordered condensed responsive hover>
                <thead>
                  <tr>                    
                    <th>{' '}</th>
                    <th>#</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Currency</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Total</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredQuotes.map(
                    (quote, quoteIndex) => <QuoteTableBody id={quote.id}
                                               startdate={quote.startdate}
                                               enddate={quote.enddate}
                                               currency={quote.currency}
                                               shippingto={quote.shippingto}
                                               drivername={quote.drivername}
                                               username={quote.username}
                                               category={quote.status}
                                               total={quote.total}                                               
                                               quoteCallbacks={this.props.quoteCallbacks}                                
                               />
                  )}                  
                </tbody>                              
              </Table>
            </div>
                
        );
    }
}

export default QuoteTable;