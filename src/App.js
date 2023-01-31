/*eslint-disable*/
import { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import Sidebar from "./Sidebar";
import Chart from "./Chart";
import $ from "jquery";
import Table_1 from "./Table";
import Chart_compare from "./Chart_Compare";
import Header from "./header";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all_assests: [],
      chart_data: [],
      coin_name: "",
      coin_symbol: "",
      topvalue: 0,
      coin_data: [],
    };
    this.set_Coin = this.set_Coin.bind(this);
  }
  componentWillMount() {
    $.ajax({
      url: "https://api.coincap.io/v2/assets/bitcoin/history?interval=d1",
      contentType: "application/json",
    })
      .done(
        function (abcd) {
          this.setState({
            chart_data: abcd.data,
            topvalue: abcd.data[abcd.data.length - 1].priceUsd,
            coin_name: "Bitcoin",
            coin_symbol: "BTC",
          });
        }.bind(this)
      )
      .fail(function (datas) {});

    this.apicall();
  }

  apicall() {
    $.ajax({
      url: "https://api.coincap.io/v2/assets",
      contentType: "application/json",
    })
      .done(
        function (abcd) {
          this.setState({
            all_assests: abcd.data,
            coin_data: abcd.data[0],
          });
        }.bind(this)
      )
      .fail(function (datas) {});
  }
  set_Coin(id, name, symbol, inx) {
    $.ajax({
      url: "https://api.coincap.io/v2/assets/" + id + "/history?interval=d1",
      contentType: "application/json",
    })
      .done(
        function (abcd) {
          console.log(abcd.data);
          this.setState({
            chart_data: abcd.data,
            topvalue: abcd.data[abcd.data.length - 1].priceUsd,
            coin_name: name,
            coin_symbol: symbol,
            coin_data: this.state.all_assests[inx],
          });
        }.bind(this)
      )
      .fail(function (datas) {});
  }
  render() {
    console.log(this.state.coin_data);
    return (
      <section>
        <Header />
        <div className="row">
          <div className="col-sm-2">
            <Sidebar />
          </div>
          <div className="col-md-8 ">
            <Chart
              Chart_Data={this.state.chart_data}
              Topvalue={this.state.topvalue}
              Coin_Name={this.state.coin_name}
              Coin_Symbol={this.state.coin_symbol}
              Coin_Data={this.state.coin_data}
            />
          </div>
          <div className="col-sm-2">
            <Table_1
              All_assests={this.state.all_assests}
              SetCoin={this.set_Coin}
            />
          </div>
        </div>
      </section>
    );
  }
}
