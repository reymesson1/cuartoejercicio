import React, { Component } from 'react';

import { Grid, Row, Col, Panel, Button, Table } from 'react-bootstrap';

class Dashboard extends Component {
  render() {
    return (
        <Grid>
            <Row>
                <Col md={3}>
                    <div className="panel panel-warning">
                        <div className="panel-heading">
                            <Row>
                                <Col xs={6}>
                                    <i className="fa fa-usd fa-5x"></i>
                                </Col>
                                <Col xs={6} className="text-right">
                                    <p className="announcement-heading">R$ 950 mil</p>
                                    <p className="announcement-text">Revenue</p>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <Row>
                                <Col xs={6}>
                                    <i className="fa fa-list-ol fa-5x"></i>
                                </Col>
                                <Col xs={6} className="text-right">
                                    <p className="announcement-heading">4</p>
                                    <p className="announcement-text">Customers</p>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="panel panel-danger">
                        <div className="panel-heading">
                            <Row>
                                <Col xs={6}>
                                    <i className="fa fa-area-chart fa-5x"></i>
                                </Col>
                                <Col xs={6} className="text-right">
                                    <p className="announcement-heading">2,3 Months</p>
                                    <p className="announcement-text">Average time</p>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="panel panel-success">
                        <div className="panel-heading">
                            <Row>
                                <Col xs={6}>
                                    <i className="fa fa-money fa-5x"></i>
                                </Col>
                                <Col xs={6} className="text-right">
                                    <p className="announcement-heading">$ 250 k</p>
                                    <p className="announcement-text">Recovered</p>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col md={3}>
                    <div className="tile-progress tile-primary" style={{"padding":"12px"}}> 
                        <div class="tile-header">
                            <h3>Visitors</h3>
    				        <span>so far in our blog, and our website.</span>
                        </div>
                        <div className="tile-progressbar">
                            <span data-fill="65.5%" style={{"width": "65.5%"}}></span>
                        </div>
                        <div className="tile-footer">
                            <h4>
                                <span className="pct-counter">65.5</span>% increase
                            </h4>
                            <span>so far in our blog and our website</span>
                        </div>
        
                    </div>
                </Col>
        
                <Col md={3}>
                    <div className="tile-progress tile-red" style={{"padding":"12px"}}> 
                        <div class="tile-header">
                            <h3>Visitors</h3>
    				        <span>so far in our blog, and our website.</span>
                        </div>
                        <div className="tile-progressbar">
                            <span data-fill="65.5%" style={{"width": "65.5%"}}></span>
                        </div>
                        <div className="tile-footer">
                            <h4>
                                <span className="pct-counter">65.5</span>% increase
                            </h4>
                            <span>so far in our blog and our website</span>
                        </div>
        
                    </div>
                </Col>
        
                <Col md={3}>
                    <div className="tile-progress tile-blue" style={{"padding":"12px"}}> 
                        <div class="tile-header">
                            <h3>Visitors</h3>
    				        <span>so far in our blog, and our website.</span>
                        </div>
                        <div className="tile-progressbar">
                            <span data-fill="65.5%" style={{"width": "65.5%"}}></span>
                        </div>
                        <div className="tile-footer">
                            <h4>
                                <span className="pct-counter">65.5</span>% increase
                            </h4>
                            <span>so far in our blog and our website</span>
                        </div>
        
                    </div>
                </Col>
        
                <Col md={3}>
                    <div className="tile-progress tile-aqua" style={{"padding":"12px"}}> 
                        <div class="tile-header">
                            <h3>Visitors</h3>
    				        <span>so far in our blog, and our website.</span>
                        </div>
                        <div className="tile-progressbar">
                            <span data-fill="65.5%" style={{"width": "65.5%"}}></span>
                        </div>
                        <div className="tile-footer">
                            <h4>
                                <span className="pct-counter">65.5</span>% increase
                            </h4>
                            <span>so far in our blog and our website</span>
                        </div>
        
                    </div>
                </Col>
                
                
            </Row>
            <br/>
             <Row>
                <Col md={4}>
                    <div className="panel-group" id="accordion">
						  <div className="panel panel-default">
							<div className="panel-heading">
							  <h4 className="panel-title">
								<a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
								Files</a>
							  </h4>
							</div>
							<div id="collapse1" className="panel-collapse collapse in">
								<ul className="list-group">
									<li className="list-group-item"><span className="badge">253</span> New</li>
									<li className="list-group-item"><span className="badge">17</span> Deleted</li>
									<li className="list-group-item"><span className="badge">3</span> Reported</li>
								</ul>
							</div>
						  </div>
						  <div className="panel panel-default">
							<div className="panel-heading">
							  <h4 className="panel-title">
								<a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
								Blog</a>
							  </h4>
							</div>
							<div id="collapse2" className="panel-collapse collapse">
								<ul className="list-group">
									<li className="list-group-item"><span className="badge">12</span> New</li>
									<li className="list-group-item"><span className="badge">5</span> Deleted</li>
								</ul>
							</div>
						  </div>
							<div className="panel panel-default">
							<div className="panel-heading">
							  <h4 className="panel-title">
								<a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
								Settings</a>
							  </h4>
							</div>
							<div id="collapse3" className="panel-collapse collapse">
								<ul className="list-group">
									<li className="list-group-item"><span className="badge">1</span> Users Reported</li>
									<li className="list-group-item"><span className="badge">5</span> User Waiting Activation</li>
								</ul>
							</div>
						  </div>
						</div>
                </Col>
                <Col md={4}>
                    
                        <h4>Today Stats</h4>                         
                            <Row>
                                <Col xs={6}>
                                    <span >Visit</span>
                                </Col>
                                <Col xs={6}>
                                    <span className="pull-right strong">- 15%</span>
                                </Col>
                            </Row>
                            <Row className="progress">
                                <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{"width":"15%"}}>15%</div>
                            </Row>

                            <Row>
                                <Col xs={6}>
                                    <span >20 New Users</span>
                                </Col>
                                <Col xs={6}>
                                    <span className="pull-right strong">+ 8%</span>
                                </Col>
                            </Row>        
                            <Row className="progress">
                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{"width":"8%"}}>8%</div>
                            </Row>

                            <Row>
                                <Col xs={6}>
                                    <span >359 Downloads</span>
                                </Col>
                                <Col xs={6}>
                                    <span className="pull-right strong">- 15%</span>
                                </Col>
                            </Row>
                            <Row className="progress">
                                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{"width":"15%"}}>15%</div>
                            </Row>
                        
                    
                </Col>
                <Col md={4}>
                    <h4>Today Stats</h4>                         
                            <Row>
                                <Col xs={6}>
                                    <span >Visit</span>
                                </Col>
                                <Col xs={6}>
                                    <span className="pull-right strong">- 15%</span>
                                </Col>
                            </Row>
                            <Row className="progress">
                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{"width":"45%"}}>15%</div>
                            </Row>

                            <Row>
                                <Col xs={6}>
                                    <span >20 New Users</span>
                                </Col>
                                <Col xs={6}>
                                    <span className="pull-right strong">+ 8%</span>
                                </Col>
                            </Row>        
                            <Row className="progress">
                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{"width":"58%"}}>8%</div>
                            </Row>

                            <Row>
                                <Col xs={6}>
                                    <span >359 Downloads</span>
                                </Col>
                                <Col xs={6}>
                                    <span className="pull-right strong">- 15%</span>
                                </Col>
                            </Row>
                            <Row className="progress">
                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={{"width":"88%"}}>15%</div>
                            </Row>
                        
                </Col>                
            </Row>
            <br/>
            <Row>
                <div className="progress">
                    <div className="one primary-color"></div>
                    <div className="two primary-color"></div>
                    <div className="three no-color"></div>
                    <div className="progress-bar" style={{"width":"70%"}}></div>
                </div>                
            </Row>
            <br/>
            <Row>
                <div className="progress">
                    <div className="one success-color"></div>
                    <div className="two success-color"></div>
                    <div className="three success-color"></div>
                    <div className="progress-bar progress-bar-success" style={{"width":"100%"}}></div>
                </div>                
            </Row>
            <br/>
            <Row>
                <div className="progress">
                    <div className="one danger-color"></div>
                    <div className="two no-color"></div>
                    <div className="three no-color"></div>
                    <div className="progress-bar progress-bar-danger" style={{"width":"30%"}}></div>
                </div>                
            </Row>
            <br/>
            <Row>
                <div className="progress">
                    <div className="one warning-color"></div>
                    <div className="two warning-color"></div>
                    <div className="three no-color"></div>
                    <div className="progress-bar progress-bar-warning" style={{"width":"60%"}}></div>
                </div>                
            </Row>
            <br/>
            <Row>
                <div className="progress">
                    <div className="one info-color"></div>
                    <div className="two no-color"></div>
                    <div className="three no-color"></div>
                    <div className="progress-bar progress-bar-info" style={{"width":"35%"}}></div>
                </div>                
            </Row>
        
             
        </Grid>
    );
  }
}

export default Dashboard;