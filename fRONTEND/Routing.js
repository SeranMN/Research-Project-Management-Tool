
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/user/Login'
import CreateAccount from './Components/user/CreateAccount'
import Profile from './Components/user/profile'
import Chat from './Components/Chat/chat'
import ChanelContainer from './Components/Chat/ChatContainer'
import CreateChannel from './Components/Chat/CreateChannel'
import CreateStaff from './Components/user/CreateStaff'
const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Login />} />
                <Route path='/signin' exact element={<CreateAccount />} />
                <Route path='/profile/:userRole' exact element={<Profile />} />
                <Route path='/chat' exact element={<ChanelContainer />} />
                <Route path='/CreateTeam' exact element={<CreateChannel />} />
                <Route path='/CreateStaff' exact element={<CreateStaff />} />
                
            </Routes>
        </BrowserRouter>
  );
}

export default Routing   