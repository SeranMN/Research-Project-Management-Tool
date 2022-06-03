import { Grid, Stack } from "@mui/material";
import React, { useState } from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MenuItem } from "@mui/material";
import { InputLabel } from "@mui/material";
import Select from '@mui/material/Select';
const CreateStaff = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [reg, setRegNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [rePwd, setRePwd] = useState("");
    const [spec, setSpec] = useState('Specilization Area');
    var date = new Date();
  const onSubmit = () => {
    const user = {
      regNo: reg,
      name: name,
      email: email,
      userrole: "Staff",
      spec:spec,
      createdBy: reg,
      createdOn:date,
      EditedBy: "",
      EditedOn: "",
      };
      const login = {
          regNo: reg,
          password: password,
          userRole:"staff"
      }
    axios
      .post("http://localhost:5001/staff/add",user)
      .then(alert("Sucessfully"))
          .catch((err) => console.log(err));
      axios
          .post('http://localhost:5001/login/add', login)
          .then(console.log("data added"))
      .catch((err) => console.log(err))
    navigate('/')
   

  };
  return (
    <>
      <Grid container justifyContent="center">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { width: "90ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Stack spacing={2}>
            <TextField
              id="outlined-password-input"
              label="Name"
              type="Text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              id="outlined-password-input"
              label="Reg No."
              type="Text"
              value={reg}
              onChange={(e) => {
                setRegNo(e.target.value);
              }}
            />
            <InputLabel id="demo-simple-select-label">Select Your Specilization Area</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={spec}
          label="Age"
          onChange={(e)=>{setSpec(e.target.value)}}
        >
          <MenuItem value={'ML'}>Machine Learning</MenuItem>
          <MenuItem value={'IOT'}>Internet Of Thing</MenuItem>
          <MenuItem value={'robot'}>Robortics</MenuItem>
        </Select>
            <TextField
              id="outlined-password-input"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <TextField
              id="outlined-password-input"
              label="Re-enter Password"
              type="password"
              value={rePwd}
              onChange={(e) => {
                setRePwd(e.target.value);
              }}
            />
            <Button variant="contained" onClick={onSubmit} >SUBMIT</Button>   
          </Stack>
        </Box>
      </Grid>
    </>
  );
};

export default CreateStaff