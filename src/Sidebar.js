import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { Link } from 'react-router-dom';
import App from './App';
import Chart from './Chart';

const Sidebar = () => {
  return (
    <div className="menu" style={{ display: 'flex', position : "fixed", height: '100vh', overflow: 'scroll initial'}}>
      <CDBSidebar textColor="#fff" backgroundColor="#181818">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                     Dashboard        
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <Link to="/home" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </Link>
            <Link to="/Table" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
            </Link>
            <Link to="/Chart" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Charts</CDBSidebarMenuItem>
            </Link>
            <Link to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle"> About</CDBSidebarMenuItem>
            </Link>
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