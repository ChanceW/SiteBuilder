import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './components/Common/Layout';
import Home  from './components/Admin/Home';
import SiteContent from './components/Admin/SiteContent';
import Login from './components/Common/Login'

import './custom.css'
import PrivateRoute from './components/Common/PrivateRoute';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/site-content' component={SiteContent} />
        <Route path='/login' component={Login} />
      </Layout>
    );
  }
}
