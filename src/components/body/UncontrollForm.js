import React, { Component } from 'react';

class Uncontroll extends Component {
    constructor(props) {
        super(props);
        this.name = React.createRef();
        this.email = React.createRef();
        this.address = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = event => {
        console.log(this.name.current.value);
        console.log(this.email.current.value);
        console.log(this.address.current.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>New Book Entry</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Book Name: </label>
                    <br />
                    <input type="text" name="name" ref={this.name} />
                    <br />
                    <label>Writer: </label>
                    <br />
                    <input type="text" name="email" ref={this.email} />
                    <br />
                    <label>Description: </label>
                    <br />
                    <textarea name="address" ref={this.address} />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div >
        );
    }
}

export default Uncontroll;