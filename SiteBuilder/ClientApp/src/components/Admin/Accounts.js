import React, { useEffect, useState } from 'react';
import {Container, Row, Col, Table, Button } from 'reactstrap';
import AccountEdit from './AccountEdit';

import './Accounts.css';

export default function Accounts() {
    const [accounts, setAccounts] = useState([]);
    const [editModeState, setEditMode] = useState({
        editModeEnabled: false,
        selectedId: 0,
        selectedEmail: "",
        selectedPassword: ""
    });

    useEffect(() => {

        function getAccounts() {
            const getAcctsRequest = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            };
            fetch('api/auth', getAcctsRequest)
                    .then(response => response.json())
                    .then(result => setAccounts(result));
        }

        getAccounts();

    }, [accounts, editModeState]);

    const renderTableData = () => {
        return accounts.map((account, index) => {
            const {id, email} = account;
            return (
                <tr key={id}>
                    <th scope="row">{id}</th>
                    <td>{email}</td>
                    <td><Button active={!editModeState.editModeEnabled} color="primary" size="sm" onClick={() => openAccountEditMode(index)}>Edit</Button></td>
                </tr>
            )
        });
    };

    const openAccountEditMode = (idx) => {
        const {id, email, password} = accounts[idx];
        setEditMode({
            editModeEnabled: true,
            selectedId: id,
            selectedEmail: email,
            selectedPassword: password
        })
    }

    const closeAccountEditMode = () => {
        setEditMode({
            editModeEnabled: false,
            selectedId: 0,
            selectedEmail: "",
            selectedPassword: ""
        });
    }

    return (
        <Container className="Accounts" fluid>
            <Row>
                <Col md="8">
                    <Table hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderTableData()}
                        </tbody>
                    </Table>
                </Col>
                <Col md="4">
                    {editModeState.editModeEnabled 
                    ? <AccountEdit 
                        id={editModeState.selectedId} 
                        email={editModeState.selectedEmail} 
                        password={editModeState.selectedPassword}
                        onEditFormExit={() => closeAccountEditMode()}
                    /> 
                    : null}
                </Col>
            </Row>
        </Container>
    );
}