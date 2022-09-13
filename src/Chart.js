import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import moment from 'moment';
import Dropdown from 'react-bootstrap/Dropdown';
import Barchart from './Barchart';
import { BarChart, Bar, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import AreaChart from './Areachart';
import LineChart from './Linechart';
export default class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabindex: 0,
            chart_data: [],
            chart_type: "Line",
            topvalue: 0, BCH_top: 0, BTC_top: 0, ETH_top: 0,
            Bar: true, Area: false, Line: false,
            API_URL: "https://api.coincap.io/v2/assets/bitcoin/history?interval=d1"
        };
    }

    componentWillMount() {
        $.ajax({
            url: "https://api.coincap.io/v2/assets/bitcoin/history?interval=d1",
            contentType: "application/json"
        })
            .done(
                function (abcd) {
                    let temp = [];
                    for (let i = 0; i < 10; i++) { temp.push(abcd.data[i]); }
                    this.setState({ chart_data: temp, topvalue: abcd.data[9] });
                }.bind(this)
            )
            .fail(
                function (datas) {
                }
            );
        let Url_Array = ["https://api.coincap.io/v2/assets/bitcoin/history?interval=d1", "https://api.coincap.io/v2/assets/bitcoin-cash/history?interval=d1", " https://api.coincap.io/v2/assets/ethereum/history?interval=d1"]
        for (let x = 0; x < 3; x++) {
            $.ajax({
                url: Url_Array[x],
                contentType: "application/json"
            })
                .done(
                    function (abcd) {                        
                        if (Url_Array[x].includes("/bitcoin/")) { this.setState({ BTC_top: abcd.data[9].priceUsd }); console.log(abcd.data[9].priceUsd); }
                        else if (Url_Array[x].includes("/bitcoin-cash/")) { this.setState({ BCH_top: abcd.data[9].priceUsd }) }
                        else if (Url_Array[x].includes("/ethereum/")) { this.setState({ ETH_top: abcd.data[9].priceUsd }) }
                    }.bind(this)
                )
                .fail(
                    function (datas) {
                    }
                );
        }
    }
    apicall(API_URL) {
        $.ajax({
            url: API_URL,
            contentType: "application/json"
        })
            .done(
                function (abcd) {
                    let temp = [];
                    for (let i = 0; i < 10; i++) { temp.push(abcd.data[i]); }
                    this.setState({ chart_data: temp, topvalue: abcd.data[9] });

                }.bind(this)
            )
            .fail(
                function (datas) {
                }
            );
    }
    setBTC() { this.apicall("https://api.coincap.io/v2/assets/bitcoin/history?interval=d1") }
    setBCH() { this.apicall("https://api.coincap.io/v2/assets/bitcoin-cash/history?interval=d1") }
    setETH() { this.apicall(" https://api.coincap.io/v2/assets/ethereum/history?interval=d1") }
    setBar() { this.setState({ Bar: true, Area: false, Line: false }) }
    setLine() { this.setState({ Bar: false, Area: false, Line: true }) }
    setArea() { this.setState({ Bar: false, Area: true, Line: false }) }
    dateFormatter = (item) => { return moment(new Date(item)).format('MMM YY') }
    render() {
        return (
            <div>
                <div className='row'>
                    <Dropdown className='col 6' style={{ right: "-30px" }}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Currency
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={(e) => this.setBTC(e)}>BTC</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.setBCH(e)}>BCH</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.setETH(e)}>ETH</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='col 3' style={{ left: "496px" }}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Chart
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={(e) => this.setLine(e)}>Line Chart</Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.setBar(e)}> Barchart </Dropdown.Item>
                            <Dropdown.Item onClick={(e) => this.setArea(e)}>Area Chart</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='col 3 ' style={{ left: "195px" }}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Compare With
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item >BTC</Dropdown.Item>
                            <Dropdown.Item >BCH</Dropdown.Item>
                            <Dropdown.Item >ETH</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                {this.state.Bar == true ? <div><Barchart data={this.state.chart_data} /> </div> : " "}
                {this.state.Area == true ? <div><AreaChart data={this.state.chart_data} /></div> : " "}
                {this.state.Line == true ? <div><LineChart data={this.state.chart_data} /> </div> : " "}

                <div className="featured row">
                    <div className="featuredItem col 4 c">
                        <span className="featuredTitle">Latest Value</span>
                        <div className="featuredMoneyContainer">
                            <span className="featuredMoney">$ {parseInt(this.state.topvalue.priceUsd)}</span>
                        </div>
                    </div>
                    <div className="col 8">
                        <div className="featuredMoneyContainer">
                            <BarChart
                                width={600}
                                height={300}
                                data={[
                                    { name: "BTC", top_amt: parseInt(this.state.BTC_top) },
                                    { name: "BCH", top_amt: parseInt(this.state.BCH_top) },
                                    { name: "ETH", top_amt: parseInt(this.state.ETH_top) },
                                ]}
                                margin={{
                                    top: 50,
                                    right: 30,
                                    left: 50,
                                    bottom: 5,
                                }}
                            >
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="top_amt" fill="#8884d8" />
                            </BarChart>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}