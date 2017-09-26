import React, { Component } from 'react';
import ShippingItem from './ShippingItem';
import { Panel } from 'react-bootstrap';

class ShippingList extends Component{
    
    

    render(){
        
        if(document.getElementById('shippinglist')){
            console.log(document.getElementById('shippinglist').style);            
        }
    
        if(this.props.filterText=='novel'){
        
            return(
                <h1>{''}</h1>
            );
        }else{
            
            return(
                <Panel id="shippinglist" style={{"display":"none","position":"absolute","top":"69%"}}>                    
                    <ul style={{"position":"relative", "list-style-type":"none","text-align":"left","padding-left":"1px"}}>
                        {this.props.location.map(
                            (loc) => <ShippingItem  providence={loc.providence}
                                     />
                        )}
                    </ul>
                </Panel>
            );        
        }
    }
}

export default ShippingList;