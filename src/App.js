import { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import Sidebar from './Sidebar';
import Chart from './Chart';
import $ from 'jquery';
import Table_1 from './Table';
import Chart_Compare from './Chart_Compare';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all_assests: [],
      symbol: "",
      coin_name: "",
      topvalue: 0
    };
    this.set_Coin = this.set_Coin.bind(this);
  }
  componentWillMount() {
    $.ajax({
      url: "https://api.coincap.io/v2/assets/bitcoin/history?interval=d1",
      contentType: "application/json"
    })
      .done(
        function (abcd) {
          console.log(abcd.data);
          this.setState({ chart_data: abcd.data, topvalue: abcd.data[abcd.data.length - 1].priceUsd, coin_name: "Bitcoin", coin_symbol: "BTC" });
        }.bind(this)
      )
      .fail(
        function (datas) {
        }
      );
    this.apicall();
  }

  apicall() {
    $.ajax({
      url: "https://api.coincap.io/v2/assets",
      contentType: "application/json"
    })
      .done(
        function (abcd) {
          console.log(abcd.data);
          this.setState({ all_assests: abcd.data });
        }.bind(this)
      )
      .fail(
        function (datas) {
        }
      );
  }
  set_Coin(id, name, symbol) {
    $.ajax({
      url: "https://api.coincap.io/v2/assets/" + id + "/history?interval=d1",
      contentType: "application/json"
    })
      .done(
        function (abcd) {
          console.log(abcd.data);
          this.setState({
            chart_data: abcd.data,
            topvalue: abcd.data[abcd.data.length - 1].priceUsd,
            coin_name: name,
            coin_symbol: symbol
          });

        }.bind(this)
      )
      .fail(
        function (datas) {
        }
      );
  }
  render() {
    console.log(this.state.topvalue);

    return (
      <div>
        
          <div className="row">
            <div className="col-md-2" > <Sidebar /></div>
            <div className="col-md-4 c" > <Chart Chart_Data={this.state.chart_data}
              Topvalue={this.state.topvalue}
              Coin_Name={this.state.coin_name}
              Coin_Symbol={this.state.coin_symbol} /></div>

            <div className="col-md-2" > <Table_1 All_assests={this.state.all_assests}
              SetCoin={this.set_Coin} /></div>
          </div>
          <Routes>
        <Route path="/" element={ <App/> } />
        <Route path="home" element={ <Chart_Compare/> } />
        <Route path="Chart" element={ <Table_1/> } />
      </Routes>      
      </div>
    );
  }
}