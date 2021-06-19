import React,{Component} from 'react'
import DISHES from '../../data/dishes.js'
import MenuItem from './Menuitem.js'
import DishDetail from './DishDetail'
import {CardColumns, Modal, ModalBody, ModalFooter, Button} from 'reactstrap';





//It return to body.js

class Menu extends Component{
    state={
        dishes:DISHES,
        selected:null,
        modalOpen:false
    }

    onDishSelect=(dish)=>{
        //console.log(dish);
        this.setState({selected:dish,
        modalOpen: !this.state.modalOpen
        }); //click korle selected er value null takhe click korar pore oi dish er sob information eikhane rakhe dilam
                                        //select Menuitem.js takhe korci
        
        
    }


    //Model Khkon open hobe seitar jonno

    toggleModal =()=>{
        this.setState({
            modalOpen:!this.state.modalOpen
        })
    }



    render(){

        const menulist=this.state.dishes.map(item => {
            return (
                //pass the values of dises into Menuitem.js to show in view file
                //* eita re return e call korci

                <MenuItem dishes={item} key={item.id} DishSelect={()=>this.onDishSelect(item)} /> //Binding->protitar id jeivabe dei
              
            );
        })

        let dishDetail=null;
        if(this.state.selected!=null){
            dishDetail =<DishDetail dish={this.state.selected} />
        }

        return(
            <div className="container">
                <div className="row">
                    <CardColumns>
                        {menulist}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
                        <ModalBody>
                            {dishDetail}
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={this.toggleModal}  color="secondary">Close</Button>
                        </ModalFooter>
                    </Modal>

                </div>
            </div>
        );
    }
        
}

export default Menu;