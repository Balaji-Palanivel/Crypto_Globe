import { Component } from "react";
import $ from 'jquery';
import Chart from './Chart';
import { Button } from "bootstrap";

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { Table1: [] , setBTC: this.props.ab};
    }

    componentWillMount() {

        $.ajax({
            url: "https://api.coincap.io/v2/assets",
            contentType: "application/json"
        })
            .done(
                function (arr) {
                    this.setState({ Table1: arr.data });
                    console.log(arr.data);
                }.bind(this)
            )
            .fail(
                function (datas) {
                }.bind(this)
            );
    }
    render() {
        return (

            <div className="currency" >
                <table className="table table-hover table-light">
                    <thead>
                        <tr><td>Currency</td></tr>
                    </thead>
                    <tbody style={{height: "80px",overflow: "scroll"}}>{this.state.Table1.map((author, index) =>
                        <tr key={index}>
                            <td onClick={(e) => this.setBTC(author.id)}>{author.symbol}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}