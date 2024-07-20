

import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Link as Router } from 'react-router-dom';
import MenuAppBar from "./Navbar";
import  Organisation  from "./Organisation";
import SideBar from "./SideBar";
import Branch from "./Branch";
import Dashboard from "./Dashboard";
import Designation from "./Designation";
import Department from "./Department";
import EmployeeTable from "./Employee";


export default function App() {
  return (

  <>
    <BrowserRouter>
     <div>
   <MenuAppBar/> 
   <SideBar/> 
    </div>
    
    <Router>
      <Routes>
      <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Organisation" element={<Organisation/>} /> 
          <Route path="/Branch" element={<Branch/>} /> 
           <Route path="/Department" element={<Department/>} /> 
           <Route path="/Designation" element={<Designation/>}/>
           <Route path="/Employee" element={<EmployeeTable/>}/>
      </Routes> 
      </Router>
    </BrowserRouter>
    </>
  );
}



