import React from 'react'
import Menu from './Menu.js'
import Home from './Home'
import About from './About'
import Contract from './Contract.js'
import Uncontroll from './UncontrollForm'
import { Route , Redirect,Switch } from 'react-router-dom';

const Body = ()=>{
    return (
        <div>

        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/menu" exact component={Menu} /> 
            <Route path="/about" exact component={About} />  
            <Route path="/Contract" exact component={Contract} /> 
            <Route path="/uncontrollform" exact component={Uncontroll} /> 
            <Redirect from="/" to="/home" />
        </Switch>
            

            

        </div>
    );
}

export default Body;
