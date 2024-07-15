

import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Link as Router } from 'react-router-dom';
import MenuAppBar from "./Navbar";
import  Organization  from "./Organization";
import SideBar from "./SideBar";
import OrganizationPage from "./OrganizationPage";
import AnchorTemporaryDrawer from "./AddOrganization";
import ProjectDetails from "./AddProject";
import ProjectPage from "./ProjectPage";
import Project from "./Projectpopup";
import PaginatedTable from "./TableData";
import UserForm from "./UserForm"
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import HRpage1 from "./HRpage";
import AddProfile from "./Addprofile";
import MyTable from "./MyTabble";
import MyChart from "./MyTabble";
import MyCards from "./MyTabble";
import ForgotPasswordPage from "./ForgotPasswordPage";

export default function App() {
  return (

  <>
    <BrowserRouter>
     <div>
   <MenuAppBar/> 
   <SideBar/> 
   <MyCards/>

  {/* <HRpage1/> */}
   
  {/* <PaginatedTable/> */}
  {/* <LoginPage/> */}
  {/* <Dashboard/> */}

    </div>
    
    <Router>
      <Routes>
      {/* <Route path="/" element={<LoginPage />} /> */}
          {/* <Route path="/forgot-password" element={<ForgotPasswordPage/>} />  */}
          {/* <Route path="/" element={<OrganizationPage/>} />  */}
           {/* <Route path="/" element={<ProjectPage/>} />  */}
      </Routes> 
      </Router>
    </BrowserRouter>
    </>
  );
}



