import React, { Component } from 'react';

import { Button } from 'react-bootstrap';


    
class QuoteControlFooter extends Component{
    
    render(){
    
        return(
            <div>
                <Button onClick={this.props.quoteCallbacks.onselectedtoapproved.bind(this)} bsStyle="success" className="col-md-offset-10">Approved</Button>                
            </div>
             
        );
    }
}

export default QuoteControlFooter;