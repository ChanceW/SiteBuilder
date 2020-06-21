import React, { Component } from 'react';
import './Login.css';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, Modal
  } from 'reactstrap';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'email': '',
            'password': ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(`Login with email: ${this.state.email } and password: ${this.state.password}`);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value});
    }

    render() {
        return (
            <Container className="Login-container">
                <h2>Sign In</h2>
                <Form className="form" onSubmit={this.handleSubmit}>
                <Col>
                    <FormGroup>
                    <Label>Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="myemail@email.com"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="********"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    </FormGroup>
                </Col>
                <Button>Submit</Button>
                </Form>
            </Container>
        );
    }
}