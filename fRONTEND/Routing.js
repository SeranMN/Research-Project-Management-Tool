
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/user/Login'
import CreateAccount from './Components/user/CreateAccount'
import Profile from './Components/user/profile'
const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Login />} />
                <Route path='/signin' exact element={<CreateAccount />} />
                <Route path = '/profile' exact element = {<Profile/>}/>
            </Routes>
        </BrowserRouter>
  );
}

export default Routing