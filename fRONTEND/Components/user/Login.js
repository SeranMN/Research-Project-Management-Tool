import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Card, TextField, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Masonry from "@mui/lab/Masonry";
import Button from "@mui/material/Button";
import { color, maxWidth } from "@mui/system";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [regNo, setRegNo] = useState('')
  const [pwd, setpwd] = useState('')
  const login = () => {
    const det = {
      regNo: regNo,
      password :pwd
    }
    axios.post('http://localhost:5001/login/login', det)
      .then((res) => {
        if (res.data != "") {
          alert('sucessfully loged in')
          sessionStorage.setItem("user", det.regNo)
          console.log(det.regNo)
          navigate(`/profile/${res.data}`)
          
        } else {
          alert('At least one credintial is wrong')
      }
    })
  }
  return (
    
    <div style={{
      backgroundImage: `url("https://www.intotheminds.com/blog/app/uploads/desk-research-group-tn.jpg")`,
    }}
   >
      
     
          <div
            style={{ position: "fixed", bottom: "45%", right: 5, width: "33%" }}>
            <Stack spacing={2}>
              <TextField id="filled-basic" label="User Name" variant="filled" value={regNo} onChange={(e)=>setRegNo(e.target.value) }/>
              <TextField
                id="filled-basic"
                label="Password"
                variant="filled"
                type="password"
                value={pwd}
                onChange={(e) => setpwd(e.target.value)}
              />
              <Button variant="contained" color="success" onClick={login}>
                Login
              </Button>
              <Link to="/signin" >
                {" "}
                <Typography>Create Account</Typography>
              </Link>
            </Stack>
          </div>
        
        
    </div>
  );
};

export default Login;
