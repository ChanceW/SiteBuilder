import React, { useState } from 'react';
import SiteContent from './SiteContent';
import Login from '../Common/Login';

import AuthClient from '../../clients/AuthClient';

export default function Admin() {
    const [isAuthenticated, setAuthenticated] = useState(AuthClient.isAuthenticated)

    const onLoginAttempted = (isSuccess) => {
        setAuthenticated(isSuccess);
    }

    return isAuthenticated ? <SiteContent /> : <Login onLoginAttempted={onLoginAttempted} />
}