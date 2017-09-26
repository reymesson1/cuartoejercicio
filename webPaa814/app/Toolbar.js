import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';

class Toolbar extends Component{

    render(){
    
        return(
            <Navbar collapseOnSelect className="navbar-fixed-top" id="toolbar">
                <Navbar.Header>
                  <Navbar.Brand>
                    <Link to={'/dashboard'}>React-Bootstrap</Link>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav>                                        
                    <NavItem eventKey={1}><Link style={{color: 'gray','text-decoration': 'none'}} to={'/invoice'}>Invoice</Link></NavItem>
                    <NavItem eventKey={2}><Link style={{color: 'gray','text-decoration': 'none'}} to={'/quote'}>Quote</Link></NavItem>                    
                    <NavDropdown eventKey={3} title="Configuration" id="basic-nav-dropdown">
                      <MenuItem eventKey={3.1}><Link style={{color: 'gray','text-decoration': 'none'}} to={'/basic'}>Basic Setting</Link></MenuItem>
                      <MenuItem eventKey={3.2}><Link style={{color: 'gray','text-decoration': 'none'}} to={'/current'}>Current Setup</Link></MenuItem>
                      <MenuItem eventKey={3.3}><Link style={{color: 'gray','text-decoration': 'none'}} to={'/routes'}>Routes Setup</Link></MenuItem>                      
                      <MenuItem divider />
                      <MenuItem eventKey={3.4}><Link style={{color: 'gray','text-decoration': 'none'}} to={'/language'}>Language Setting</Link></MenuItem>                                            
                    </NavDropdown>
                  </Nav>
                  <Nav pullRight>
                    <NavDropdown eventKey={4} title="Sign..." id="basic-nav-dropdown">
                      <MenuItem eventKey={4.1}><Link style={{color: 'gray','text-decoration': 'none'}} to={'/signin'}>Sign In</Link></MenuItem>
                      <MenuItem eventKey={4.2}><Link style={{color: 'gray','text-decoration': 'none'}} to={'/signup'}>Sign Up</Link></MenuItem>
                      <MenuItem eventKey={4.3}><Link style={{color: 'gray','text-decoration': 'none'}} to={'/logout'}>Log Out</Link></MenuItem>                      
                      <MenuItem divider />
                      <MenuItem eventKey={4.4}><Link style={{color: 'gray','text-decoration': 'none'}} to={'/language'}>Language Setting</Link></MenuItem>                                            
                    </NavDropdown>                                                    
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
        );
    }
}

export default Toolbar;