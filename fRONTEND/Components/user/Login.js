import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Card, TextField, ThemeProvider, Typography,createTheme,Box,Paper } from "@mui/material";
import Stack from "@mui/material/Stack";
import Masonry from "@mui/lab/Masonry";
import Button from "@mui/material/Button";
import { color, maxWidth } from "@mui/system";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Snackbar from '@mui/material/Snackbar'
import { forwardRef } from "react";
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = () => {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const theme = createTheme();
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
          
          sessionStorage.setItem("user", det.regNo)
          console.log(det.regNo)
          navigate(`/profile/${res.data}`)
          
        } else {
         setOpen(true)
      }
    })
  }

  

   const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <ThemeProvider theme={theme}>
    <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={6}
                    md={9}
                    sx={{
                        backgroundImage: `url(https://www.intotheminds.com/blog/app/uploads/desk-research-group-tn.jpg)`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
      
     
          <Grid item xs={12} sm={8} md={3} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 20,
                            mx: 6,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
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
              <Link to="/signin" variant="body2" >
               
                <Typography>Create Account</Typography>
              </Link>
            </Stack>
          </Box>
          </Grid>
        
        
      </Grid>
       <Snackbar
        anchorOrigin={{vertical: 'top',horizontal:'center' }}
        open={open}
        onClose={handleClose}
        autoHideDuration={1000}
        key={'top' + 'center'}
      >

        <Alert severity="error"  onClose={handleClose} >Wrong credintials !</Alert>
      </Snackbar>
      </ThemeProvider>
  );
};

export default Login;
