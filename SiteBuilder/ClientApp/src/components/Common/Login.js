import React, { useState } from 'react';
import './Login.css';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button
  } from 'reactstrap';
import AuthClient from '../../clients/AuthClient';

export default function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const success = await AuthClient.Login(email, password);
        props.onLoginAttempted(success);
    }

    return (
        <Container className="LoginContainer">
            <h2>Sign In</h2>
            <Form className="form" onSubmit={handleSubmit}>
            <Col>
                <FormGroup>
                <Label>Email</Label>
                <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="myemail@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
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
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                </FormGroup>
            </Col>
            <Button>Submit</Button>
            </Form>
        </Container>
    );
}
