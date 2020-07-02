import React, { useState } from 'react';
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';

import AuthClient from '../../clients/AuthClient';

import './AccountEdit.css'

export default function AccountEdit(props) {
    const accountId = props.id;
    const [email, setEmail] = useState(props.email);
    const [password, setPassword] = useState(props.password);

    const onEditFormSave = async (event) => {
        event.preventDefault();

        await AuthClient.Save(accountId, email, password);
        props.onEditFormExit();
    }

    const onEditFormCancel = (event) => {
        event.preventDefault();
        props.onEditFormExit();
    }

    return (
    <Form className="AccountEdit" onSubmit={onEditFormSave}>
        <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input 
                type="email" 
                name="email" 
                id="exampleEmail" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input 
                type="password" 
                name="password" 
                id="examplePassword" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </FormGroup>
        <Button type="submit">Save Changes</Button>
        <Button type="button" onClick={(e) => onEditFormCancel(e)}>Cancel</Button>
    </Form>
    );
}