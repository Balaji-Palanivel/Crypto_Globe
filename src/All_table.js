/*eslint-disable*/
import { Component } from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './header';
import Sidebar from "./Sidebar";
import $ from 'jquery';



export default class All_table extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Lib: [],
            empty: '--',
            author_detail: [],
            check: 0,
            load: false,
            work_count: [],
            order: "Asc",
            searchInput: "",
            FilteredTable: []
        };

   
        this.searchByName = this.searchByName.bind(this);
    }

    componentWillMount() {
        this.setState({ load: true })
        $.ajax({
            url: "https://api.coincap.io/v2/assets/",
            contentType: "application/json"
        })                                                                                      //Ajax Call for main table
            .done(
                function (data) {
                    this.setState({ Lib: data.data, FilteredTable: [] });
                    $("#loading").hide();
                    console.log(data.data);
                }.bind(this)
            )
            .fail(
                function (datas) {
                    $("#loading").hide();
                }.bind(this)
            );


    }

    findvalid(Val) {

        const detail = (Val === null) ? "--" : parseInt(Val);                                        //findvalid() for data valid or not
        return detail;
    }

    sorting_table(event, sortKey) {
        const data = this.state.Lib;
        if (sortKey == "name") {
            if (this.state.order == "Asc") {
                data.sort((a, b) => a[sortKey].localeCompare(b[sortKey]))
                this.setState({ Lib: data, order: "Dec" })
            }
            if (this.state.order == "Dec") {
                data.sort((a, b) => b[sortKey].localeCompare(a[sortKey]))
                this.setState({ Lib: data, order: "Asc" });                                          //Sortong_table for sorting

            }

        }
        else if (sortKey == "priceUsd" || sortKey == "maxSupply") {

            if (this.state.order == "Asc") {
                data.sort((a, b) => a[sortKey] - b[sortKey])
                this.setState({ Lib: data, order: "Dec" })
            }
            if (this.state.order == "Dec") {
                data.sort((a, b) => b[sortKey] - a[sortKey])
                this.setState({ Lib: data, order: "Asc" });
            }

        }
    }

    searchByName(val) {
        this.setState(() => ({ searchInput: val.target.value }));
        let a = this.state.Lib.filter(value => value.name.toLowerCase().includes(val.target.value.toLowerCase()));
        console.log(a, 'aaa')
        this.setState(() => ({ FilteredTable: a }))
    }

    render() {
        return (

            <section>
        <Header />
        <div className="row">
            
        
            <div className="col-sm-2" ><Sidebar /></div>
            
                <div >
                    

                        {this.state.Lib.length > 0 ? <div ><br />
                            <input type="text" className='form-control mb-3' placeholder="Searh By Coin" onChange={(e) => this.searchByName(e)} />
                        </div>
                            : ""}
                                      
                </div>
                {this.state.load == true ? <div id="loading">
                    <div className="centerdiv">
                        <img src="https://acegif.com/wp-content/uploads/loading-25.gif" style={{ width: '50px', height: '50px' }} />
                        <span>   Loading...</span>
                    </div>
                </div> : " "}

                <div id="Table" className="col-md-10 table_style table100 ver5" >
                    {
                        this.state.Lib.length > 0 ? <table className="table">
                            <thead>
                                <tr>
                                    <td>S.No </td>
                                    <td >Symbol </td>
                                    <td>Name <i onClick={e => this.sorting_table(e, "name")} className="fa fa-fw fa-sort"></i></td>
                                    <td>Price <i onClick={e => this.sorting_table(e, "priceUsd")} className="fa fa-fw fa-sort"></i></td>
                                    <td >Max Supply <i onClick={e => this.sorting_table(e, "maxSupply")} className="fa fa-fw fa-sort"></i></td>
                                    <td>Change Persent /24Hr</td>
                                    <td>Explorer</td>
                                </tr>
                            </thead>
                            <tbody>{this.state.searchInput.length > 0 ? this.state.FilteredTable.map((author, index) =>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{author.symbol}  </td>
                                    <td>{author.name}</td>
                                    <td>{parseInt(author.priceUsd)}</td>
                                    <td >{this.findvalid(author.maxSupply)}</td>
                                    <td>{author.changePercent24Hr}</td>
                                    <td>{author.explorer}</td>
                                </tr>
                            ) : this.state.Lib ? this.state.Lib.map((author, index) =>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{author.symbol}</td>
                                    <td>{author.name}</td>
                                    <td>{parseInt(author.priceUsd)}</td>
                                    <td >{this.findvalid(author.maxSupply)}</td>
                                    <td>{author.changePercent24Hr}</td>
                                    <td>{author.explorer}</td>
                                </tr>
                            ) : " "}
                            </tbody>
                        </table> : " "}

                </div>


            </div>
            </section>
        );
    }
}

