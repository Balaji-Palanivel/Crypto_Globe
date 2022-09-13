import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import Sidebar from './Sidebar';
import Chart from './Chart';
import Header from './header';

import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div> <Header /></div>
    <div className="row">
      <div className="col-3"><Sidebar /></div>
      <div className="col-9 a"><Chart /></div>
    </div>    
  </Router>
  );
}

export default App;