import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { forwardRef } from "react";
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


  
const CreatePanel = () => {

    const [open, setOpen] = useState(false);
   const [massage, setMassage] = useState('');
 const [severity, setSeverity] = useState('');


 
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false)
   
};

    const [staffs, setStaff] = useState([]);
    const [count, setCount] = useState('');
    const year = new Date().getFullYear(); 

  useEffect(() => {
    axios
      .get("http://localhost:5001/staff")
      .then((res) => {
        setStaff(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

      axios.get('http://localhost:5001/panel/count')
          .then((res) => { setCount(res.data) })
          .catch((err) => { console.log(err) });
  }, []);

    
    const [panelName, setPanelName] = useState("");
    const [member1, setMember1] = useState("");
    const [member2, setMember2] = useState("");
    const [member3, setMember3] = useState("");
    const [member4, setMember4] = useState("");
    const members = [member1, member2, member3, member4];

    const submit = () => {
        const panel = {
            panelId: "panel_" + year+"_" + (parseInt(count.count) + 1),
            panelName: panelName,
            panelMembers: members
        };

        axios.post("http://localhost:5001/panel/add", panel)
            .then(() => {
                setOpen(true)
                setMassage('panel Created')
                setSeverity('success')
            })
        .catch((err) =>{setOpen(true)
        setMassage('panel not Created')
        setSeverity('warning')} )
        

    }
  return (
      <div>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {massage}
        </Alert>
      </Snackbar>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 5, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Stack spacing={2}>
          <TextField
            id="standard-basic"
            label="Panel Name"
                      variant="standard"
                      value={panelName}
                      onChange = {(e)=>setPanelName(e.target.value)}
                      
          />
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Member 1
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={member1}
              label="member 1"
              onChange={(e) => setMember1(e.target.value)}
            >
              {staffs.map((staff) => (
                <MenuItem value={staff.regNo} key = {staff._id} >
                  {staff.regNo} - {staff.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Member 2
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={member2}
              label="member 2"
              onChange={(e) => setMember2(e.target.value)}
            >
              {staffs.map((staff) => (
                <MenuItem value={staff.regNo} key = {staff._id} >
                  {staff.regNo} - {staff.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Member 3
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={member3}
              label="member 3"
              onChange={(e) => setMember3(e.target.value)}
            >
              {staffs.map((staff) => (
                <MenuItem value={staff.regNo} key = {staff._id} >
                  {staff.regNo} - {staff.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Member 4
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={member4}
              label="member 4"
              onChange={(e) => setMember4(e.target.value)}
            >
              {staffs.map((staff) => (
                <MenuItem value={staff.regNo} key = {staff._id} >
                  {staff.regNo} - {staff.name}
                </MenuItem>
              ))}
            </Select>
                  </FormControl>
                  <Button color="success" onClick={submit} > Create</Button>
              </Stack>
             
      </Box>
    </div>
  );
};

export default CreatePanel;
