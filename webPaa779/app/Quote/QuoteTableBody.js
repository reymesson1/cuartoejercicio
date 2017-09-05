import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class QuoteTableBody extends Component{
    
    onSelectedView(){
        
        var data = '<h1>test</h1>'
            
        data.print();
        
        console.log('view');
    }
    
    
    render(){
        
                    
        return(            
                  <tr>                    
                    <td><input id="checkbox" type="checkbox" value={this.props.id} onChange={this.props.quoteCallbacks.onselectedquote.bind(this)} /></td>
                    <td>{this.props.id}</td>
                    <td>{this.props.startdate}</td>                    
                    <td>{this.props.enddate}</td>                    
                    <td>{this.props.currency}</td>                    
                    <td>{this.props.shippingto}</td>                    
                    <td style={{'width':'30%'}}>{this.props.drivername}</td>                    
                    <td>{this.props.category}</td>                    
                    <td>{this.props.total}</td>                                        
                    <td>
                        <Button bsStyle="info" onClick={this.onSelectedView.bind(this)}>View</Button>{' '}
                        <Button bsStyle="danger" onClick={this.props.quoteCallbacks.onselecteddelete.bind(null,this.props.id)}>Delete</Button>
                    </td>
                  </tr>                          
        );
    }
}

export default QuoteTableBody;