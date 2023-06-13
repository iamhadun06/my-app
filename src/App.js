/* eslint-disable no-unused-vars */
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'; 
import Sidebar from './components/Sidebar'; 
import Dashboard from './components/pages/Dashboard';
import Profile from './components/pages/Profile';
import All from './components/pages/Asset/All';
import ReadyToDeploy from './components/pages/Asset/ReadyToDeploy';
import Deployed from './components/pages/Asset/Deployed';
import Crash from './components/pages/Asset/Crash';
import AssetRegistration from './components/pages/Registration/AssetRegistration';
import RegisterManagement from './components/pages/Registration/RegisterManagement';
import StatisticsReports from './components/pages/StatisticsReports';
import AssetCategories from './components/pages/SystemManagement/AssetCategories';
import User from './components/pages/SystemManagement/User';
import Department from './components/pages/SystemManagement/Department';
import Notifications from './components/pages/Notifications';
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          
          <Route path = "/main" element = {<Dashboard/>} />
          <Route path = "/profile" element = {<Profile/>} />
          <Route path = "/list/assets/all" element = {<All/>} /> 
          <Route path = "/list/assets/readytodeploy" element = {<ReadyToDeploy/>} /> 
          <Route path = "/list/assets/deployed" element = {<Deployed/>} /> 
          <Route path = "/list/assets/crash" element = {<Crash/>} /> 
          <Route path = "/registration/AssetRegistration" element = {<AssetRegistration/>} /> 
          <Route path = "/registration/RegisterManagement" element = {<RegisterManagement/>} /> 
          <Route path = "/statistics/reports" element = {<StatisticsReports/>} /> 
          <Route path = "/system/management/AssetCategories" element = {<AssetCategories/>} /> 
          <Route path = "/system/management/department" element = {<Department/>} /> 
          <Route path = "/system/management/user" element = {<User/>} /> 
          <Route path = "/notifications" element = {<Notifications/>} /> 
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App; 