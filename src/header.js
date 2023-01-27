/*eslint-disable*/
import { Component } from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

export default class header extends Component {
    render() {
        return (
            <div style={{ position: "relative" }}>



                <div className='row bg-dark text-light py-2 '>

                    <div className="col">
                        <table className="bg-dark">
                            <tr>
                                <td><div className="text-center fs-1 pb-2 ">Crypto  <i data-test="fa" className="sc-gSAPjG vdkON fa fa-globe"></i>  Globe </div></td>
                                <td><div className="menu_1 col-sm-2"><i data-test="fa" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" className="sc-gSAPjG vdkON fa fa-bars fs-4"></i></div></td>
                            </tr>
                        </table>
                    </div>
                    <div class="xyz offcanvas offcanvas-top bg-dark" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                        <div class="offcanvas-header p-0">
                            <CDBSidebarHeader className=" text-center ">
                                <a href="/" className="text-decoration-none text-light fs-6" >
                               Dashboard
                                </a>

                            </CDBSidebarHeader>
                            <button type="button" class="btn-close text-reset bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body m-0 p-0">
                            <CDBSidebarContent className="sidebar-content">
                                <CDBSidebarMenu>
                                    <table className="bg-dark text-light">
                                     <tr>
                                            <td><NavLink exact to="/" >
                                                <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
                                            </NavLink></td>
                                            <td> <NavLink exact to="/all_table" >
                                                <CDBSidebarMenuItem icon="table">Table</CDBSidebarMenuItem>
                                            </NavLink></td>
                                    </tr>
                                    <tr>
                                            <td>
                                                <NavLink exact to="/chart_compare" >
                                                    <CDBSidebarMenuItem icon="chart-line">Chart</CDBSidebarMenuItem>
                                                </NavLink>
                                            </td>
                                            <td><NavLink exact to="/about" >
                                                <CDBSidebarMenuItem icon="exclamation-circle"> About</CDBSidebarMenuItem>
                                            </NavLink></td>
                                    </tr>  



                                    </table>
                                </CDBSidebarMenu>
                            </CDBSidebarContent>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}