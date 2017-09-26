import React, { Component } from 'react';

class ShippingItem extends Component{
    
    onShippingSelected(event){
        
        console.log(event.target.innerHTML);
        
        var shippinglist = document.getElementById('shippinglist');
        
        shippinglist.style.display = 'none';
        
        var formControlsShippingTo = document.getElementById('formControlsShippingTo');
        
        formControlsShippingTo.value = event.target.innerHTML;
        
    }

    render(){
        
        
        var shippinglist = document.getElementById('shippinglist');
        
        if(shippinglist){
        
            shippinglist.style.display = 'block';
        }

    
        return(
            <div>
                <li onClick={this.onShippingSelected.bind(this)}>{this.props.providence}</li>
            </div>
        );
    }
}

export default ShippingItem;