/* eslint-disable no-unused-vars */
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'; 
import Sidebar from './components/Sidebar'; 
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Profile/Profile';
import All from './pages/Asset/All';
import ReadyToDeploy from './pages/Asset/ReadyToDeploy';
import Deployed from './pages/Asset/Deployed';
import Crash from './pages/Asset/Crash';
import AssetRegistration from './pages/Registration/AssetRegistration';
import RegisterManagement from './pages/Registration/RegisterManagement';
import StatisticsReports from './pages/StatisticsReports/StatisticsReports';
import AssetCategories from './pages/SystemManagement/AssetCategories';
import User from './pages/SystemManagement/User';
import Department from './pages/SystemManagement/Department';
import Notifications from './pages/Notifications/Notifications';
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path = "/Dashboard" element = {<Dashboard/>} />
          <Route path = "/Profile" element = {<Profile/>} />
          <Route path = "/list/assets/all" element = {<All/>} /> 
          <Route path = "/list/assets/readytodeploy" element = {<ReadyToDeploy/>} /> 
          <Route path = "/list/assets/deployed" element = {<Deployed/>} /> 
          <Route path = "/list/assets/crash" element = {<Crash/>} /> 
          <Route path = "/Registration/AssetRegistration" element = {<AssetRegistration/>} /> 
          <Route path = "/Registration/RegisterManagement" element = {<RegisterManagement/>} /> 
          <Route path = "/Statistics/Reports" element = {<StatisticsReports/>} /> 
          <Route path = "/SystemManagement/AssetCategories" element = {<AssetCategories/>} /> 
          <Route path = "/SystemManagement/Department" element = {<Department/>} /> 
          <Route path = "/SystemManagement/User" element = {<User/>} /> 
          <Route path = "/Notifications" element = {<Notifications/>} /> 
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App; 