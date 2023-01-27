/*eslint-disable*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import All_table from './All_table';
import Chart_Compare from './Chart_Compare';
import About from './About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="all_table" element={<All_table />} />
      <Route path="chart_compare" element={<Chart_Compare />} />
      <Route path="about" element={<About />} />
    </Routes>
  </BrowserRouter >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
