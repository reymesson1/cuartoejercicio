import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { Panel, Grid ,Row, Form, FormGroup, Col, 
         ControlLabel, FormControl, HelpBlock, 
         Checkbox, Button, Modal } from 'react-bootstrap';

import ShippingList from './ShippingList';

import 'whatwg-fetch';

const API_URL = 'http://localhost:8081';
const API_HEADERS = {

    'Content-Type': 'application/json',
    Authorization: 'any-string-you-like'
};

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id} >      
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} required/>        
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}
                     
let filteredQuoteLocation;
                     
class QuoteControl extends Component{
                     
                     
                     
    constructor(){
                    
        super();
        this.state = {
        
            QuoteField: [
                {"id":"formControlsStartDate","category":"novel","name":"startdate", "type":"date","label":"Start Date", "placeholder":"Start Date"},
            {"id":"formControlsEndDate","category":"novel","name":"enddate", "type":"date","label":"End Date", "placeholder":"End Date"},        
            {"id":"formControlsCurrency","category":"novel","name":"currency", "type":"text","label":"Currency", "placeholder":"Currency"},                
            {"id":"formControlsDriverName","category":"novel","name":"drivername", "type":"text","label":"Driver Name", "placeholder":"Driver Name"},        



            {"id":"formControlsStartDate","category":"poem","name":"startdate", "type":"date","label":"Start Date", "placeholder":"Start Date"},
            {"id":"formControlsEndDate","category":"poem","name":"enddate", "type":"date","label":"End Date", "placeholder":"End Date"},        
            {"id":"formControlsCurrency","category":"poem","name":"currency", "type":"text","label":"Currency", "placeholder":"Currency"},            
            {"id":"formControlsShippingTo","category":"poem","name":"shippingto", "type":"select","label":"Shipping To", "placeholder":"Shipping To"},
            {"id":"formControlsDriverName","category":"poem","name":"drivername", "type":"text","label":"Driver Name", "placeholder":"Driver Name"},        

            {"id":"formControlsStartDate","category":"fabel","name":"startdate", "type":"date","label":"Start Date", "placeholder":"Start Date"},
            {"id":"formControlsEndDate","category":"fabel","name":"enddate", "type":"date","label":"End Date", "placeholder":"End Date"},        
            {"id":"formControlsCurrency","category":"fabel","name":"currency", "type":"text","label":"Currency", "placeholder":"Currency"},
            {"id":"formControlsShippingTo","category":"fabel","name":"shippingto", "type":"select","label":"Shipping To", "placeholder":"Shipping To", "componentClass":"select"},
            {"id":"formControlsDriverName","category":"fabel","name":"drivername", "type":"text","label":"Driver Name", "placeholder":"Driver Name"},        

            {"id":"formControlsStartDate","category":"biography","name":"startdate", "type":"date","label":"Start Date", "placeholder":"Start Date"},
            {"id":"formControlsEndDate","category":"biography","name":"enddate", "type":"date","label":"End Date", "placeholder":"End Date"},        
            {"id":"formControlsCurrency","category":"biography","name":"currency", "type":"text","label":"Currency", "placeholder":"Currency"},
            {"id":"formControlsShippingTo","category":"biography","name":"shippingto", "type":"select","label":"Shipping To", "placeholder":"Shipping To", "componentClass":"select"},
            {"id":"formControlsDriverName","category":"biography","name":"drivername", "type":"text","label":"Driver Name", "placeholder":"Driver Name"},        

            {"id":"formControlsStartDate","category":"story","name":"startdate", "type":"date","label":"Start Date", "placeholder":"Start Date"},
            {"id":"formControlsEndDate","category":"story","name":"enddate", "type":"date","label":"End Date", "placeholder":"End Date"},        
            {"id":"formControlsCurrency","category":"story","name":"currency", "type":"text","label":"Currency", "placeholder":"Currency"},
            {"id":"formControlsShippingTo","category":"story","name":"shippingto", "type":"select","label":"Shipping To", "placeholder":"Shipping To", "componentClass":"select"},
            {"id":"formControlsDriverName","category":"story","name":"drivername", "type":"text","label":"Driver Name", "placeholder":"Driver Name"}, 
                
            ],
            filterText: 'novel',
            QuoteLocation: [
                {"id":"1","country":"1", "providence":"Distrito Nacional"},
            {"id":"2","country":"1", "providence":"Azua"},
            {"id":"3","country":"1", "providence":"Bahoruco"},
            {"id":"4","country":"1", "providence":"Barahona"},
            {"id":"5","country":"1", "providence":"Dajabón"},
            {"id":"6","country":"1", "providence":"Duarte"},
            {"id":"7","country":"1", "providence":"Elías Piña"},
            {"id":"8","country":"1", "providence":"El Seibo"},
            {"id":"9","country":"1", "providence":"Espaillat"},
            {"id":"10","country":"1", "providence":"Independencia"},
            {"id":"11","country":"1", "providence":"La Altagracia"},
            {"id":"12","country":"1", "providence":"La Romana"},
            {"id":"13","country":"1", "providence":"La Vega"},
            {"id":"14","country":"1", "providence":"María Trinidad Sánchez"},
            {"id":"15","country":"1", "providence":"Monte Cristi"},
            {"id":"16","country":"1", "providence":"Pedernales"},
            {"id":"17","country":"1", "providence":"Peravia"},
            {"id":"18","country":"1", "providence":"Puerto Plata"},
            {"id":"19","country":"1", "providence":"Hermanas Mirabal"},
            {"id":"20","country":"1", "providence":"Samaná"},
            {"id":"21","country":"1", "providence":"San Cristóbal"},
            {"id":"22","country":"1", "providence":"San Juan"},
            {"id":"23","country":"1", "providence":"San Pedro de Macorís"},
            {"id":"24","country":"1", "providence":"Sánchez Ramírez"},
            {"id":"25","country":"1", "providence":"Santiago"},
            {"id":"26","country":"1", "providence":"Santiago Rodríguez"},
            {"id":"27","country":"1", "providence":"Valverde"},
            {"id":"28","country":"1", "providence":"Monseñor Nouel"},
            {"id":"29","country":"1", "providence":"Monte Plata"},
            {"id":"30","country":"1", "providence":"Hato Mayor"},
            {"id":"31","country":"1", "providence":"San José de Ocoa"},
            {"id":"32","country":"1", "providence":"Santo Domingo"},
                
            ],
            QuoteChange : false,
            filteredLocation: [],
        }      
    
        
    }  
    
    componentDidMount(){
    
        fetch(API_URL+'/quotefield',{headers: API_HEADERS})
        .then((response) => response.json())
        .then((responseData) => {
        
            this.setState({
            
                QuoteField: responseData
            })
        })
        fetch(API_URL+'/quoteLocation',{headers: API_HEADERS})
        .then((response) => response.json())
        .then((responseData) => {
        
            this.setState({
            
                QuoteLocation: responseData
            })
        })
        .catch((error)=>{
        
            console.log('Error fetching and parsing data', error);
        })
        
               
    }
                     
    onSave(event){
        
        event.preventDefault();
        
        
        var formQuote = document.getElementById('quoteForm');
                
        this.props.quoteCallbacks.handleaddquote(event,this.state.filterText);

        formQuote.reset();
        
        this.props.quoteCallbacks.close();
                    
    }

    onReset(){
    
        var formQuote = document.getElementById('quoteForm');
        formQuote.reset();
    }

    onSelected(event){
        
        let nextState = this.state.filterText;
        
        this.setState({
        
            filterText: event.target.value
        })
        
    }

    onChangeShippingTo(data){
      
        
        
        var shippingto = data.target.name;        
        
        let nextState = this.state.QuoteLocation;
        
        if(shippingto=='shippingto'){
            
            console.log(data.target.value);        
            
            var value = data.target.value;
            
            
            filteredQuoteLocation = this.state.QuoteLocation.filter(
                (location) => location.providence.indexOf(value) !== -1
            );
            
            
            let nextStateLoc = this.state.QuoteLocation;
            
            this.setState({
            
                filteredLocation: filteredQuoteLocation
            });
            
            
            
            
        }
    }

    shippingtoValue(data){
        
        console.log(data);
    
        
    }

    render(){
        
        
        let filteredQuoteFields = this.state.QuoteField.filter(
            (quote) => quote.category.indexOf(this.state.filterText) !== -1
        );
        
        
                            
        return(
            <div>
            <Modal show={this.props.showModal} onHide={this.props.quoteCallbacks.close}>
                <Modal.Header>  
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Row>                                    
                        <form id="quoteForm" onSubmit={this.onSave.bind(this)} >
                            <Col md={6}>
                                <FormGroup controlId="formControlsSelect">
                                  <ControlLabel>Select Category</ControlLabel>
                                  <FormControl name="comboboxdata" onChange={this.onSelected.bind(this)} componentClass="select" placeholder="select">
                                    <option value="novel">Novel</option>
                                    <option value="poem">Poem</option>
                                    <option value="fabel">Fabel</option>
                                    <option value="story">Story</option>
                                    <option value="biography">Biography</option>
                                  </FormControl>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup >                            
                                {filteredQuoteFields.map(
                                 (field) => 
                                    <FieldGroup onChange={this.onChangeShippingTo.bind(this)}

                                      id={field.id}
                                      type={field.type}
                                      label={field.label}
                                      name={field.name}
                                      placeholder={field.placeholder}
                                      componentClass={field.componentClass}                                  

                                    />
                                )}
                                <ShippingList location={this.state.filteredLocation}
                                            filterText={this.state.filterText}                                                
                                            onChangeShippingTo={this.props.onChangeShippingTo}
                                            showModal={this.props.showModal}
                                />
                                  <Col mdOffset={8}>
                                    <Button bsStyle="primary" type="submit">
                                      Save
                                    </Button>
                                  </Col>
                                </FormGroup>
                             </Col>                         
                        </form>                
                </Row>             
                </Modal.Body>
            </Modal>
            </div>
        );
    }
}

export default QuoteControl;