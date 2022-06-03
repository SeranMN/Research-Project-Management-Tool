
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AdminDashboard from './Components/Admin/AdminDashboard';
import PanelDashboard from './Components/PanelMember/PanelDashboard';
// import Login from './Components/user/Login'
// import CreateAccount from './Components/user/CreateAccount'
// import Profile from './Components/user/profile'

import Login from './Components/user/Login'
import CreateAccount from './Components/user/CreateAccount'
import Profile from './Components/user/profile'

import ChanelContainer from './Components/Chat/ChatContainer'
import CreateChannel from './Components/Chat/CreateChannel'
import CreateStaff from './Components/user/CreateStaff'
import Creategroup from './Components/Group/Creategroup'


const Routing = () => {

    return (
        <BrowserRouter>
            <Routes>
            
                <Route path='/' exact element={<Login />} />
                <Route path='/signin' exact element={<CreateAccount />} />
                <Route path='/admindashboard' exact element={<AdminDashboard/>}/>
                <Route path='/paneldashboard' exact element={<PanelDashboard/>}/>
                
                <Route path='/profile/:userRole' exact element={<Profile />} />
                <Route path='/chat' exact element={<ChanelContainer />} />
                <Route path='/CreateTeam' exact element={<CreateChannel />} />
                <Route path='/CreateStaff' exact element={<CreateStaff />} />
                <Route path='/CreateGroup' exact element={<Creategroup />} />
            </Routes>
        </BrowserRouter>
  );
}

export default Routing   