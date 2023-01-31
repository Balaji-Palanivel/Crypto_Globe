/*eslint-disable*/
import { Component } from "react";
import "./App.css";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import moment from "moment";
import Header from "./header";
import Sidebar from "./Sidebar";
import Dropdown from "react-bootstrap/Dropdown";
import {
  ComposedChart,
  Bar,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default class Chart_compare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all_assests: [],
      drop_item: "Bitcoin",
      drop_item_1: "Ethereum",
      bit_coin: [],
      eth_coin: [],
      new_arr: [],
      tab_data1: [],
      tab_data2: [],
    };
    this.arr_put = this.arr_put.bind(this);
    this.api_Call = this.api_Call.bind(this);
  }
  dateFormatter_1 = (item) => {
    return moment(new Date(item)).format("DD MMM YY");
  };
  dateFormatter = (item) => {
    return moment(new Date(item)).format("MMM YY");
  };
  componentWillMount() {
    this.fun_2();
    this.api_Call();
    this.arr_put();
  }
  fun_2() {
    $.ajax({
      url: "https://api.coincap.io/v2/assets",
      contentType: "application/json",
    })
      .done(
        function (abcd) {
          this.setState({
            all_assests: abcd.data,
            tab_data1: abcd.data[0],
            tab_data2: abcd.data[1],
          });
        }.bind(this)
      )
      .fail(function (datas) {});
    this.api_Call();
  }
  api_Call() {
    $.ajax({
      url: "https://api.coincap.io/v2/assets/bitcoin/history?interval=d1",
      contentType: "application/json",
    })
      .done(
        function (abc) {
          this.setState({
            bit_coin: abc.data,
          });
        }.bind(this)
      )
      .fail(function (datas) {});
    $.ajax({
      url: "https://api.coincap.io/v2/assets/ethereum/history?interval=d1",
      contentType: "application/json",
    })
      .done(
        function (abc1) {
          this.setState({ eth_coin: abc1.data });
        }.bind(this)
      )
      .fail(function (datas) {});
  }
  onclick_1(name, id, inx) {
    this.setState({ drop_item: name });
    $.ajax({
      url: "https://api.coincap.io/v2/assets/" + id + "/history?interval=d1",
      contentType: "application/json",
    })
      .done(
        function (abc) {
          this.setState({
            bit_coin: abc.data,
            tab_data1: this.state.all_assests[inx],
          });
        }.bind(this)
      )
      .fail(function (datas) {});
  }
  onclick_2(name, id, inx) {
    this.setState({ drop_item_1: name });
    $.ajax({
      url: "https://api.coincap.io/v2/assets/" + id + "/history?interval=d1",
      contentType: "application/json",
    })
      .done(
        function (abc1) {
          this.setState({
            eth_coin: abc1.data,
            tab_data2: this.state.all_assests[inx],
          });
        }.bind(this)
      )
      .fail(function (datas) {});
  }
  arr_put() {
    console.log("Work ahuthu...");
    let arr_1 = this.state.bit_coin.map((obj) => {
      return obj.date;
    });
    let arr_2 = this.state.bit_coin.map((obj) => {
      return obj.priceUsd;
    });
    let arr_3 = this.state.eth_coin.map((obj) => {
      return obj.priceUsd;
    });
    let final_arr = [];
    arr_1.forEach(
      (v, i) =>
        (final_arr = [
          ...final_arr,
          { date: arr_1[i], priceUsd_1: arr_2[i], priceUsd_2: arr_3[i] },
        ])
    );
    this.setState({ new_arr: final_arr });
  }
  findvalid(Val) {
    const detail =
      Val === null || Val === undefined
        ? "--"
        : typeof Val == "number"
        ? parseInt(Val)
        : Val;
    //findvalid() for data valid or not
    return detail;
  }
  render() {
    return (
      <section>
        <Header />
        <div className="row">
          <div className="col">
            <Sidebar />
          </div>
          <div className="col-md-10 ">
            <div className="row p-3 justify-content-center ">
              <div className="col-sm-9">
                <div className="row gy-3 justify-content-center flex_1">
                  <div className="col-3">
                    <Dropdown className="mr-small">
                      <Dropdown.Toggle variant="info">
                        {this.state.drop_item}
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        style={{ height: "150px", overflow: "auto" }}
                      >
                        {this.state.all_assests
                          ? this.state.all_assests.map((coin, index) => (
                              <Dropdown.Item
                                key={index}
                                onClick={(e) =>
                                  this.onclick_1(coin.name, coin.id, index)
                                }
                              >
                                {coin.symbol + " - " + coin.name}
                              </Dropdown.Item>
                            ))
                          : "No data"}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div
                    className="col-sm-3 btn btn-danger cc"
                    onClick={this.arr_put}
                  >
                    <i
                      data-test="fa"
                      className="sc-gSAPjG vdkON fa fa-chart-line"
                    ></i>
                    Compare
                  </div>
                  <div className="col-3 ">
                    <Dropdown>
                      <Dropdown.Toggle variant="info">
                        {this.state.drop_item_1}
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        style={{ height: "150px", overflow: "auto" }}
                      >
                        {this.state.all_assests
                          ? this.state.all_assests.map((coin, index) => (
                              <Dropdown.Item
                                key={index}
                                onClick={(e) =>
                                  this.onclick_2(coin.name, coin.id, index)
                                }
                              >
                                {coin.symbol + " - " + coin.name}
                              </Dropdown.Item>
                            ))
                          : "No data"}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
            <div className="row px-3 justify-content-center">
              <div className="col-md-10 card  bg-light">
                <ResponsiveContainer width="100%" height={550}>
                  <ComposedChart
                    data={this.state.new_arr}
                    margin={{
                      top: 50,
                      right: 0,
                      left: 0,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="date" tickFormatter={this.dateFormatter} />
                    <YAxis />
                    <Tooltip
                      labelFormatter={this.dateFormatter_1}
                      formatter={(value, name) =>
                        name === "priceUsd_1" || name === "priceUsd_2"
                          ? parseInt(value)
                          : value.toLocaleString()
                      }
                    />
                    <Legend />
                    <Area dataKey="priceUsd_1" barSize={20} fill="#31E1F7" />
                    <Area dataKey="priceUsd_2" barSize={20} fill="#413ea0" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="row py-4 justify-content-center">
              <div className="col-md-10">
                <table className="table table_style_1">
                  <tbody>
                    <tr>
                      <thead>Name</thead>
                      <td>{this.findvalid(this.state.tab_data1.name)}</td>
                      <td>{this.findvalid(this.state.tab_data2.name)}</td>
                    </tr>
                    <tr>
                      <thead>Symbol</thead>
                      <td>{this.findvalid(this.state.tab_data1.symbol)} </td>
                      <td>{this.findvalid(this.state.tab_data2.symbol)} </td>
                    </tr>
                    <tr>
                      <thead>Today's Price</thead>
                      <td>
                        $
                        {this.findvalid(
                          parseInt(this.state.tab_data1.priceUsd)
                        )}
                      </td>
                      <td>
                        $
                        {this.findvalid(
                          parseInt(this.state.tab_data2.priceUsd)
                        )}
                      </td>
                    </tr>
                    <tr>
                      <thead>Maximum Supply</thead>
                      <td>
                        {this.findvalid(
                          parseInt(this.state.tab_data1.maxSupply)
                        )}
                      </td>
                      <td>
                        {this.findvalid(
                          parseInt(this.state.tab_data2.maxSupply)
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
