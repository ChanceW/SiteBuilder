import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import './Settings.css';

export default function Settings() {
    const [menuOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!menuOpen); 

    return (
        <div className="Settings">
            <ButtonDropdown  isOpen={menuOpen} toggle={toggle}>
                <DropdownToggle caret>
                    <span className="glyphicon glyphicon-cog" />
                    <div>Settings</div>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Admin Stuff</DropdownItem>
                    <DropdownItem tag={Link} to="/accounts">Manage Accounts</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        </div>
    );
}