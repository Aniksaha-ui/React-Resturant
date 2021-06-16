import React from 'react'
import {Card, CardImgOverlay, CardImg, CardBody, CardTitle,CardText} from 'reactstrap';
import LoadComment from './LoadComment.js'

const DishDetail=(props)=>{
    console.log(props);
    return(
        <div>
            <Card style={{marginTop:"10px"}}>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody style={{textAlign:"left"}}>
                <CardText style={{textAlign:"center"}}>Category: {props.dish.category}</CardText>
                    <CardTitle style={{textAlign:"center"}}>Item Name:{props.dish.name}</CardTitle>
                    <CardText style={{textAlign:"center"}}>{props.dish.price}</CardText>
                    <CardText>{props.dish.description}</CardText>
                    
                        <hr />
                             <LoadComment comments={props.dish.comments} />              
                </CardBody>    

            </Card>
        </div>
    );
}

export default DishDetail;