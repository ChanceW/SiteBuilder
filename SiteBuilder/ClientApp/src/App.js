import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './components/Common/Layout';
import Home  from './components/Admin/Home';
import SiteContent from './components/Admin/SiteContent';
import Login from './components/Common/Login'

import './custom.css'
import PrivateRoute from './components/Common/PrivateRoute';
import AuthClient from './clients/AuthClient';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <PrivateRoute authenticated={AuthClient.isAuthenticated} exact path='/' component={Home} />
        <PrivateRoute authenticated={AuthClient.isAuthenticated} path='/site-content' component={SiteContent} />
        <Route path='/login' component={Login} />
      </Layout>
    );
  }
}
