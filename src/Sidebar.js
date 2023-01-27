/*eslint-disable*/
import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="menu" style={{position : "fixed", height: '100vh', top : 0 , left : 0}}>
      <CDBSidebar className="bg-dark text-light">
        <CDBSidebarHeader >
          <a href="/" className="navbar text-decoration-none text-light fs-6" >
            Dashboard
          </a>
          
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" >
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/all_table" >
              <CDBSidebarMenuItem icon="table">Table</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/chart_compare" >
              <CDBSidebarMenuItem icon="chart-line">Chart</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/about" >
              <CDBSidebarMenuItem icon="exclamation-circle"> About</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Crypto Globe
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;

