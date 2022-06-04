import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Grid, Stack, TextField } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextareaAutosize } from "@mui/material";
import { Snackbar } from "@mui/material";
import MuiAlert from '@mui/material/Alert';
import { forwardRef } from "react";
import { setGroupId } from "../../../BACKEND/src/controller/user.controll";
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const SupervisorView = () => {
  const userDet = JSON.parse(sessionStorage.getItem('userdet'))
 const [reqId,setReqID] = useState('')
  const [requests, setRequests] = useState([]);
    const [Question, setQuestion] = useState('');
    const [response, setResponse] =useState('')
    const [open, setOpen] = React.useState(false);
    const [group,setGroup] = useState('')
    const handleOpen = () =>
    {
        setOpen(true);
        
    }
  const handleClose = () => setOpen(false);

  const [Snackopen, setSnackOpen] = useState(false);
 
  const SnackhandleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackOpen(false)
   
  };
  const [massage, setMassage] = useState();
  const [severity, setSeverity] = useState();

  useEffect(() => {
    const getRequests = () => {
      axios
        .get(`http://localhost:5001/supreq/findsup/${userDet.regNo}`)
        .then((res) => setRequests(res.data))
        .catch((err) => console.log(err));
    };
    getRequests();
  }, []);

  const setStatus = () => {
      const req = {
          status: response
        }
      
    
    axios.put(`http://localhost:5001/supreq/status/${reqId}`, req)
      .then((res) => { setSnackOpen(true); setMassage('Request status changed'); setSeverity('success') })
      .catch((err) => { setSnackOpen(true); setMassage('Request status could not changed'); setSeverity('warning'); console.log(err) });
    
    
    axios.put(`http://localhost:5001/group/setsupervisor/${group}`, { supervisorId: userDet.regNo })
      .then((res)=>console.log(res.data))
      .catch((err) => console.log(err));
    
    handleClose();
  };

  return (
    <>
      <Snackbar open={Snackopen} autoHideDuration={6000} onClose={SnackhandleClose}>
        <Alert onClose={SnackhandleClose} severity={severity} sx={{ width: '100%' }}>
          {massage}
        </Alert>
      </Snackbar>


      <Grid justifyContent="center" container specing={2}>
        <Grid item xs={4} md={8}>
          {requests.map((request) => (
            <Box sx={{ maxWidth: 500 }} key={request._id}>
              <Card variant="outlined">
                <CardContent>
                 
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.primary"
                    gutterBottom
                  >
                    Group ID: {request.groupid}
                  </Typography>
                 
                </CardContent>
                <CardActions>
                          <Button
                          color="success"    
                    onClick={() => {
                      handleOpen();
                        setReqID(request._id);
                        setQuestion("Accept the request")
                      setResponse("Accept")
                      setGroup(request.groupid)
                    }}
                  >
                    Accept
                          </Button>
                           <Button
                          color="error"    
                    onClick={() => {
                      handleOpen();
                        setReqID(request._id);
                        setQuestion("Decline the request")
                        setResponse("Decline")
                    }}
                  >
                    Decline
                  </Button>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Grid>
      </Grid>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Stack spacing={2}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                {Question}
              </Typography>
              
            </Stack>
                      <Button color='success'  onClick={setStatus}>yes</Button> 
                       <Button color = 'error' onClick={handleClose} >No</Button> 
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default SupervisorView;
