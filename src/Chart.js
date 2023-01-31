/*eslint-disable*/
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import moment from 'moment';
import Dropdown from 'react-bootstrap/Dropdown';
import Barchart from './Barchart';
import AreaChart from './Areachart';
import LineChart from './Linechart';
import Header from './header';

export default class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chart_data: [],
            topvalue: 0,
            Bar: true, Area: false, Line: false,
            drop_item: "Barchart"

        };

    }

    setBar(e) { this.setState({ Bar: true, Area: false, Line: false, drop_item: e }) }
    setLine(e) { this.setState({ Bar: false, Area: false, Line: true, drop_item: e }) }
    setArea(e) { this.setState({ Bar: false, Area: true, Line: false, drop_item: e }) }
    dateFormatter = (item) => { return moment(new Date(item)).format('MMM YY') }
    findvalid(Val) {

        const detail = (Val === null || Val === undefined) ? "Null" : parseInt(Val);
        //findvalid() for data valid or not
        return detail;
    }
    render() {
        return (
            <div className='container'>


                <div className='row justify-content-between '>
                    <div className="col-sm-6 " style={{ fontSize: "44px" }}> {this.props.Coin_Name + " - " + this.props.Coin_Symbol}</div>
                    <div className="col-sm-1 me-4" style={{ fontSize: "40px" }}>
                        <Dropdown >
                            <Dropdown.Toggle variant="info" id="dropdown-basic">
                                {this.state.drop_item}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={(e) => this.setLine("Linechart")}>Linechart</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => this.setBar("Barchart")}> Barchart </Dropdown.Item>
                                <Dropdown.Item onClick={(e) => this.setArea("Areachart")}>Areachart</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                {this.state.Bar == true ? <div className='card p-2 mt-2 bg-light'><Barchart data={this.props.Chart_Data} /> </div> : " "}
                {this.state.Area == true ? <div className='card p-2 bg-light'><AreaChart data={this.props.Chart_Data} /></div> : " "}
                {this.state.Line == true ? <div className='card p-2 bg-light'><LineChart data={this.props.Chart_Data} /> </div> : " "}


                <div className="row mt-2 mb-2 cen">
                    <div className="col-md-4 mx-2 mb-2 card" style={{ height: "200px", width: "400px", backgroundColor: "#00c0ef " }}>

                        <div className="col-md-6 featuredMoneyContainer">
                            <span className="featuredMoney" style={{ fontSize: "25px", left: "70px" }}>{parseInt(this.props.Topvalue)}</span>
                        </div>
                        <span style={{ fontSize: "20px", textAlign: "center", color: "white", position: "absolute", top: "101px", left: "70px", fontWeight: "700" }}>Today's {this.props.Coin_Symbol}</span>

                        <div className="icon_doller">
                            <i className="fa fa-dollar" aria-hidden="true"></i>
                        </div>

                    </div>

                    <div className="col-md-4 card mx-2 card-left-sm " style={{ height: "200px", width: "400px", backgroundColor: "#00c0ef " }}>

                        <div className="col-md-6 featuredMoneyContainer">
                            <span style={{ fontSize: "30px", textAlign: "center", position: "absolute", top: "25px", left: "50px", fontWeight: "700" }}>{this.props.Coin_Data.name}</span>
                            <span style={{ fontSize: "18px", textAlign: "center", color: "white", position: "absolute", top: "67px", left: "70px", fontWeight: "700" }}>Name</span>
                            <span style={{ fontSize: "30px", textAlign: "center", position: "absolute", top: "25px", left: "270px", fontWeight: "700" }}>{this.props.Coin_Data.symbol}</span>
                            <span style={{ fontSize: "18px", textAlign: "center", color: "white", position: "absolute", top: "67px", left: "270px", fontWeight: "700" }}>Symbol</span>
                            <span style={{ fontSize: "30px", textAlign: "center", position: "absolute", top: "115px", left: "30px", fontWeight: "700" }}>{this.findvalid(this.props.Coin_Data.maxSupply)}</span>
                            <span style={{ fontSize: "18px", textAlign: "center", color: "white", position: "absolute", top: "155px", left: "50px", fontWeight: "700" }}>Max Supply</span>
                            <span style={{ fontSize: "30px", textAlign: "center", position: "absolute", top: "115px", left: "290px", fontWeight: "700" }}>{this.props.Coin_Data.rank}</span>
                            <span style={{ fontSize: "18px", textAlign: "center", color: "white", position: "absolute", top: "155px", left: "280px", fontWeight: "700" }}>Rank</span>
                        </div>


                        <div className="icon_i">
                            <i className="fa fa-info-circle" aria-hidden="true"></i>
                        </div>

                    </div>

                </div>


            </div>

        );
    }
}