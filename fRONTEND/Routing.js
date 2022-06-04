import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AdminDashboard from './Components/Admin/AdminDashboard';
import PanelDashboard from './Components/PanelMember/PanelDashboard';

import Login from './Components/user/Login'
import CreateAccount from './Components/user/CreateAccount'
import Profile from './Components/user/profile'

import ChanelContainer from './Components/Chat/ChatContainer'
import CreateChannel from './Components/Chat/CreateChannel'
import CreateStaff from './Components/user/CreateStaff'
import Creategroup from './Components/Group/Creategroup'
import Submission from './Components/Submissions/Submission';
import SupervisorDashboard from './DashBords/supervisorDashboard';

import SupervisorView from './Components/Supervisor/SupervisorView'
import Reqests from './Components/Supervisor/Requests'
import TopicReg from './Components/Topic/TopicReg';
import CreatePanel from './Components/Admin/CreatePanel';
const Routing = () => {

    return (
        <BrowserRouter>
            <Routes>
            
                <Route path='/' exact element={<Login />} />
                <Route path='/signin' exact element={<CreateAccount />} />
                <Route path='/admindashboard' exact element={<AdminDashboard/>}/>
                <Route path='/paneldashboard' exact element={<PanelDashboard/>}/>
                <Route path = '/topicAprovalReq' exact element = {<TopicReg/>} />
                <Route path='/supervisordashboard' exact element={<SupervisorDashboard/>}/>
                <Route path='/profile/:userRole' exact element={<Profile />} />
                <Route path='/chat' exact element={<ChanelContainer />} />
                <Route path='/CreateTeam' exact element={<CreateChannel />} />
                <Route path='/CreateStaff' exact element={<CreateStaff />} />
                <Route path='/CreateGroup' exact element={<Creategroup />} />
                <Route path='/submission' exact element={<Submission />} />
                <Route path='/supervisors' exact element={<SupervisorView />} />
                <Route path='/requests' exact element={<Reqests />} />
               
            </Routes>
        </BrowserRouter>
  );
}

export default Routing   