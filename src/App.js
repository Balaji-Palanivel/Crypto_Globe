import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import Sidebar from './Sidebar';
import Chart from './Chart';
import Header from './header';
import Table from './table';

import { Component } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { Table: [] };
  }
 

  render() {

    return (
      <Router>
        <div> <Header /></div>
        <div className="row">
          <div className="col-md-2" > <Sidebar /></div>
          <div className="col-md-4 c" > <Chart /></div>
          <div className="col-md-2" > <Table /></div>
        </div>
      </Router>
    );
  }
}