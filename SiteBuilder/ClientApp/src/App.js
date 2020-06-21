import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import SiteContent from './components/SiteContent';
import { Login } from './components/Login'

import './custom.css'
import PrivateRoute from './components/PrivateRoute';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/site-content' component={SiteContent} />
        <PrivateRoute authenticated={false} path='/fetch-data' component={FetchData} />
        <Route path='/login' component={Login} />
      </Layout>
    );
  }
}
