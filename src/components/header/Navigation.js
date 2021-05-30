import React from 'react'
import {Nav, Navbar,NavbarBrand} from 'reactstrap'

const Navigation = ()=>{
    return (
        <div>
            <Navbar dark color="dark">
                <div className="container">
                    <NavbarBrand href="/">Bohubirihi Resturant</NavbarBrand>
                </div>
            </Navbar>

        </div>
    );
}


export default Navigation;