import React from 'react';
import Search from "./Search.js"
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
} from 'cdbreact';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="green" backgroundColor="rgb(45,178,70, 0.1)" >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Ingredients
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
    
          <Search />
    
        </CDBSidebarContent>

      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
