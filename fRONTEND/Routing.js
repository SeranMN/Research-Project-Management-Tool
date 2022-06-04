
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//import Login from './Components/user/Login'
//import CreateAccount from './Components/user/CreateAccount'
//import Profile from './Components/user/profile'
import Addmarks from './Components/Marks/Addmarks'
import Updatemarks from './Components/Marks/Updatemarks'
import Viewmarks from './Components/Marks/Viewmarks'
import Addpresentmarks from './Components/Marks/Addpresentmarks'
import Viewpresentmarks from './Components/Marks/Viewpresentmarks'
import Updatepresentmarks from './Components/Marks/Updatepresentmarks'

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = '/addmarks' exact element = {<Addmarks/>}/>
                <Route path = '/updatemarks' exact element = {<Updatemarks/>}/>
                <Route path = '/viewmarks' exact element = {<Viewmarks/>}/>
                <Route path = '/addpresentmarks' exact element = {<Addpresentmarks/>}/>
                <Route path = '/viewpresentmarks' exact element = {<Viewpresentmarks/>}/>
                <Route path = '/updatepresentmarks' exact element = {<Updatepresentmarks/>}/>
            </Routes>
        </BrowserRouter>
  );
}

export default Routing