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
import { forwardRef } from "react"
import Header from '../Header/Header'
import Footer from "../Footer";

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
  const [supID, setSupid] = useState();
  const [topic, setTopic] = useState();
  const [topicDes, setTopicDes] = useState();
  const [supervisors, setSupervisors] = useState([]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
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
    const getSupervisor = () => {
      axios
        .get("http://localhost:5001/staff")
        .then((res) => setSupervisors(res.data))
        .catch((err) => console.log(err));
    };
    getSupervisor();
  }, []);
console.log(userDet)
  const request = () => {
    const req = {
      groupid: userDet.groupId,
      supervisorID: supID,
      topic: topic,
      topicDes: topicDes,
      status: "pending",
    };
    axios.post("http://localhost:5001/supreq/add", req)
      .then((res) => { setSnackOpen(true); setMassage('Request Sent Sucessfully'); setSeverity('success') })
      .catch((err) => { setSnackOpen(true); setMassage('Request could not sent'); setSeverity('warning'); console.log(err)})
  };

  return (
    <>
      <Header/>
      <Snackbar open={Snackopen} autoHideDuration={6000} onClose={SnackhandleClose}>
        <Alert onClose={SnackhandleClose} severity={severity} sx={{ width: '100%' }}>
          {massage}
        </Alert>
      </Snackbar>
    
      <Grid justifyContent="center" container specing={2}>
        <Grid item xs={4} md={8}>
          {supervisors.map((supervisor) => (
            <Box sx={{ maxWidth: 500 }} key={supervisor.regNo}>
              <Card variant="outlined">
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.primary"
                    gutterBottom
                  >
                    Name: {supervisor.name}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 12 }}
                    color="text.primary"
                    gutterBottom
                  >
                    Email: {supervisor.email}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 12 }}
                    color="text.primary"
                    gutterBottom
                  >
                    Specilization: {supervisor.spec}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => {
                      handleOpen();
                      setSupid(supervisor.regNo);
                    }}
                  >
                    Request
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
                Request Supervisor
              </Typography>
              <TextField
                variant="standard"
                label="Topic title"
                value={topic}
                onChange={(e) => {
                  setTopic(e.target.value);
                }}
              />
              <TextareaAutosize
                aria-label="minimum height"
                minRows={6}
                placeholder="Brief Description about research"
                style={{ width: 500 }}
                value={topicDes}
                onChange={(e) =>setTopicDes (
                  e.target.value)}
              />
            </Stack>
            <Button onClick={request}>Request</Button>
          </Box>
        </Fade>
      </Modal>
      
    </>
  );
};

export default SupervisorView;
