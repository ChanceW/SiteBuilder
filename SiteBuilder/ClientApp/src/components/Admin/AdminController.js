import React, { useState } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import SiteContent from './SiteContent';
import Login from '../Common/Login';
import Accounts from './Accounts';

import AuthClient from '../../clients/AuthClient';

export default function AdminController() {
    const [isAuthenticated, setAuthenticated] = useState(AuthClient.isAuthenticated);
    const [viewToRender, setViewToRender] = useState("sitecontent");

    const onLoginAttempted = (isSuccess) => {
        setAuthenticated(isSuccess);
    };

    const onTabClick = (view) => {
        if (viewToRender !== view)
            setViewToRender(view);
    }

    const getViewToRender = () => {         
        if(!isAuthenticated) {
            return <Login onLoginAttempted={onLoginAttempted} />;
        }

        let view = <div></div>;
        switch(viewToRender) {
            case "sitecontent":
                view = <SiteContent />
                break;
            case "accounts":
                view = <Accounts />
                break;
            default:
                view = <SiteContent />
                break;
        }

        return (
        <div>
            <Nav pills>
                <NavItem active={viewToRender === "sitecontent"} onClick={() => onTabClick("sitecontent")}>
                    <NavLink href="#">Site Content</NavLink>
                </NavItem>
                <NavItem active={viewToRender === "accounts"} onClick={() => onTabClick("accounts")}>
                    <NavLink href="#">Manage Accounts</NavLink>
                </NavItem>
            </Nav>
            {view}
        </div>
        );
    };


    return (getViewToRender());
}