import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './components/Common/Layout';
import Home  from './components/Admin/Home';
import AdminController from './components/Admin/AdminController';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/admin' component={AdminController} />
      </Layout>
    );
  }
}
