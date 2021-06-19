import React, { Component } from 'react'
import {Nav, Navbar,NavbarBrand,NavItem,NavbarToggler,Collapse} from 'reactstrap'
import {Link} from 'react-router-dom';

class Navigation extends Component{

    constructor(props){
        super(props);
        this.state={
            isNavOpen: false
        }
    }

    navtoggler=()=>{
        this.setState({
            isNavOpen:!this.state.isNavOpen
        })
    }

    render(){
        return (
            <div>
                <Navbar dark color="dark" expand="sm">
                    <div className="container">
                        <NavbarToggler onClick={this.navtoggler} />
                        <NavbarBrand href="/">Bohubirihi Resturant</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="mr-auto" navbar>

                        <NavItem>
                                <Link to="/menu" className="nav-link active">Dishes</Link>
                             
                            </NavItem>

                            <NavItem>
                                <Link to="/about" className="nav-link active">About</Link>
                             
                            </NavItem>
    
                            <NavItem>
                                <Link to="/Contract" className="nav-link active">Contract</Link>
                             
                            </NavItem>


                            <NavItem>
                                <Link to="/uncontrollform" className="nav-link active">Uncontrollform</Link>
                             
                            </NavItem>
                            
                        
                           
                        </Nav>
                        </Collapse>
                    </div>
                </Navbar>
    
            </div>
        );
    }

}




export default Navigation;