import {  Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Snackbar from '../Snackbar'
import axios from "axios";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { forwardRef } from "react";
import Header from "../Header/Header";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Creategroup = () => {

  const navigate = useNavigate();

  const [name1, setName1] = useState('');
  const [reg1, setReg1] = useState('');

  const [name2, setName2] = useState('');
  const [reg2, setReg2] = useState('');

  const [name3, setName3] = useState('');
  const [reg3, setReg3] = useState('');

  const [name4, setName4] = useState('');
  const [reg4, setReg4] = useState('');
  
  const d = new Date();
  const year = d.getFullYear();
  const [count, setCount] = useState()

  const [open, setOpen] = useState(false);
  const [massage, setMassage] = useState('');
  const [severity, setSeverity] = useState('');


  const regs = [reg1,reg2,reg3,reg4];
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false)
   
  };

   
  
  useEffect(async() => {
  await  axios.get(`http://localhost:5001/group/count/${year}`)
      .then((res) => setCount(res.data.count))
      .catch((err) => console.log(err));   
  }, [])
 
  const SUBMIT = async () => {
    const Icount = parseInt(count)+1
    const groupId = "RG_"+year+"_"+Icount
    const group = {
      GroupId:groupId,
      Members: [name1, name2, name3, name4],
      RegNo: [reg1, reg2, reg3, reg4],
      year:year
    }
    setOpen(true)

    axios.post('http://localhost:5001/group/add', group)
      .then(() => {
        setOpen(true)
        setMassage('Group Created')
        setSeverity('success')

        for (i = 0; i < 4; i++){
           axios.put(`http://localhost:5001/user/groupAdd/${regs[i]}`,({groupId:groupId}))
            .then((res)=>(console.log(res.data)))
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => {
       setOpen(true)
        setMassage('Error in Group Creating')
        setSeverity('warning')
        console.log(err);
      })
    
    navigate('/topicAprovalReq');
   }

  return (
    <>
      
      <Header/>
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
            <Grid Grid spacing={2}>
              <Grid item>
                <Typography>
                  Member 1 (Leader)
                </Typography>
                <TextField
                  id="outlined-password-input"
                  label="Name"
                  type="Text"
                     value={name1}
                    onChange={(e) => {
                     setName1(e.target.value);
                    }}
                />
              </Grid>
              <Grid  item >
                <TextField
                  id="outlined-password-input"
                  label="Reg No."
                  type="Text"
                    value={reg1}
                    onChange={(e) => {
                      setReg1(e.target.value);
                    }}
                />
                </Grid>
              
            </Grid>
             <Grid Grid spacing={2}>
              <Grid item>
                <Typography>
                  Member 2
                </Typography>
                <TextField
                  id="outlined-password-input"
                  label="Name"
                  type="Text"
                  value={name2}
                    onChange={(e) => {
                      setName2(e.target.value);
                    }}
                />
              </Grid>
              <Grid spacing={2} item >

                
                <TextField
                  id="outlined-password-input"
                  label="Reg No."
                  type="Text"
                    value={reg2}
                    onChange={(e) => {
                      setReg2(e.target.value);
                    }}
                />
                </Grid>
              
            </Grid>
             <Grid  spacing={2}>
              <Grid item spacing={2}>
                <Typography>
                  Member 3
                </Typography>
                <TextField
                  id="outlined-password-input"
                  label="Name"
                  type="Text"
                  value={name3}
                    onChange={(e) => {
                      setName3(e.target.value);
                    }}
                />
              </Grid>
              <Grid spacing={2} item >
                <TextField
                  id="outlined-password-input"
                  label="Reg No."
                  type="Text"
                   value={reg3}
                    onChange={(e) => {
                      setReg3(e.target.value);
                    }}
                />
                </Grid>
              
            </Grid>
            <Grid Grid spacing={2}>
              <Grid item>
                <Typography>
                  Member 4
                </Typography>
                <TextField
                  id="outlined-password-input"
                  label="Name"
                  type="Text"
                   value={name4}
                    onChange={(e) => {
                      setName4(e.target.value);
                    }}
                />
              </Grid>
              <Grid spacing={2} item >
                <TextField
                  id="outlined-password-input"
                  label="Reg No."
                  type="Text"
                    value={reg4}
                    onChange={(e) => {
                      setReg4(e.target.value);
                    }}
                />
                </Grid>
              
            </Grid>

            <Button variant="contained" onClick ={SUBMIT}>SUBMIT</Button>
            
          </Stack>
        </Box>
        </Grid>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {massage}
        </Alert>
      </Snackbar>
       
    </>
  );
};

export default Creategroup;
