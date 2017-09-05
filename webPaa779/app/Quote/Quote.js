import React, { Component } from 'react';
import { Grid, Col, Row, Panel, Button }  from 'react-bootstrap';

import QuoteSearch from './QuoteSearch';
import QuoteControl from './QuoteControl';
import QuoteControlFooter from './QuoteControlFooter';
import QuoteTable from './QuoteTable';
import QuotePagination from './QuotePagination';

class Quote extends Component{
    
    render(){
        
        return(
                <Grid>          
                    <Row>
                        <Panel header="Search Book Quote">
                            <QuoteSearch filterText={this.props.filterText}
                                         quoteCallbacks={this.props.quoteCallbacks}
                            />
                        </Panel>
                    </Row>
                    <Row>
                        <Button className="pull-right" onClick={this.props.quoteCallbacks.open.bind(this)}><i className="fa fa-plus" aria-hidden="true"></i>&nbsp;Add New Quote</Button>
                    </Row>
                    <br/>
                    <Row>                
                            <QuoteControl quoteCallbacks={this.props.quoteCallbacks}
                                          showModal={this.props.showModal}
                            />
                    </Row>
                    <Row>
                        <Panel header="Book Quote List">
                            <QuoteTable quotes={this.props.quotes} 
                                        filterText={this.props.filterText}
                                        quoteCallbacks={this.props.quoteCallbacks} 
                                        Pagination={this.props.Pagination}                                

                            />
                            <QuotePagination quotes={this.props.quotes} 
                                             filterText={this.props.filterText}
                                             quoteCallbacks={this.props.quoteCallbacks}
                                             rowNumber={this.props.rowNumber}
                            />

                        </Panel>
                    </Row>
                    <Row>
                        <Panel >
                            <QuoteControlFooter quoteCallbacks={this.props.quoteCallbacks} />
                        </Panel>
                    </Row>
                </Grid>
        );
    }
}

export default Quote;