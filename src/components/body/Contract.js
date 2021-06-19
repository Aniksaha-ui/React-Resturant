import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class Contract extends Component{

    constructor(props){
        super(props);
        this.state ={
            name:"",
            email:"",
            phone:""
        }
    }

    handlerOnSubmit=(event)=>{
      console.log(this.state);
      event.preventDefault();
    }


    handlerInputChange=(event)=>{
        const name=event.target.name; //kon field er value seita show korbe
        const value=event.target.value; //value print korbe
        this.setState({
            [name]:value //protita field er modde seitar data add kortece
        })
    }
 
    
    render() {
        return(
            <div>
                <h1>New User</h1>
     <Form onSubmit={(event)=>this.handlerOnSubmit(event)}>
        <FormGroup row>
        <Label for="exampleEmail" sm={2}>Name</Label>
        <Col sm={10}>
          <Input type="text" name="name" id="exampleEmail" onChange={(event)=>this.handlerInputChange(event)} value={this.state.name} placeholder="Enter Name" />
        </Col>
      </FormGroup>


      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Email</Label>
        <Col sm={10}>
          <Input type="email" name="email" value={this.state.email} id="exampleEmail" placeholder="Enter Email" onChange={(event)=>this.handlerInputChange(event)} />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="examplePassword" sm={2}>Phone</Label>
        <Col sm={10}>
          <Input type="text" name="phone" onChange={(event)=>this.handlerInputChange(event)} value={this.state.phone} id="examplePassword" placeholder="Enter Phone Number" />
        </Col>
      </FormGroup>

      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button>Submit</Button>
        </Col>
      </FormGroup>

    </Form>

            </div>
        );
    }
}

export default Contract;
