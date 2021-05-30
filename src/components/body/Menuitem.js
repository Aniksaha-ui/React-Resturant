import React from 'react';
import {Card, CardImgOverlay, CardImg, CardBody, CardTitle} from 'reactstrap';

const MenuItem = (props)=>{    // * ei menu item tay amar Menu.js takhe call hosse...eitar naam change korle oikhane o change korte hobe
       
    return(
        <div>
            <Card>
                <CardBody>
                    <CardImg width="100%" alt={props.dishes.name} src={props.dishes.image} />
                    <CardImgOverlay>
                        <CardTitle style={{color:"blue"}}>{props.dishes.name}</CardTitle>
                    </CardImgOverlay>    
                </CardBody>    
            </Card>
        </div>    
    );
}

export default MenuItem;