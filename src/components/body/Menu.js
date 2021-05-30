import React,{Component} from 'react'
import DISHES from '../../data/dishes.js'
import MenuItem from './Menuitem.js'


//It return to body.js

class Menu extends Component{
    state={
        dishes:DISHES
    }

    render(){

        const menulist=this.state.dishes.map(item => {
            return (
                //pass the values of dises into Menuitem.js to show in view file
                //* eita re return e call korci

                <MenuItem dishes={item} key={item.id} /> 
              
            );
        })

        return(
            <div className="container">
                <div className="row">
                    <div className="col-6">
                           {menulist} 
                    </div>
                </div>
            </div>
        );
    }
        
}

export default Menu;