import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Box } from '@mui/system';
import { Grid, Stack } from '@mui/material';

import Backdrop from '@mui/material/Backdrop';

import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Topic } from '@mui/icons-material';

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

const ViewgroupSup = () => {
  const userdet = JSON.parse(sessionStorage.getItem('userdet'))
  const [groups, setGroups] = useState([]);
  //const [groupId, setGroupId] = useState('');
  const [topic, setTopic] = useState('');

  const [open, setOpen] = React.useState(false);
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
    axios.get(`http://localhost:5001/group/getBySupervisor/${userdet.regNo}`)
      .then((res) => { setGroups(res.data) })
      .catch((err) => { console.log(err) })
  }, [])
  
  const getTopicRequest = async (groupId) => {
   await axios.get(`http://localhost:5001/topic/getTopic/${groupId}`)
      .then((res) => setTopic(res.data))
      .catch((err) => console.log(err));
    
    handleOpen()
    
    console.log(topic);
  }

  const setStatus = () => {
    const respone = {
      topic: topic.topic,
      releatedArea : topic.reletedArea

    }
    axios.put(`http://localhost:5001/group/setsupervisor/${topic.groupId}`, respone)
      .then(()=>{setSnackOpen(true); setMassage('Request status changed'); setSeverity('success') })
      .catch((err) => {setSnackOpen(true); setMassage('Request status could not changed'); setSeverity('warning'); console.log(err)});
    handleClose()
  }
  return (
    <>
      <Snackbar open={Snackopen} autoHideDuration={6000} onClose={SnackhandleClose}>
        <Alert onClose={SnackhandleClose} severity={severity} sx={{ width: '100%' }}>
          {massage}
        </Alert>
      </Snackbar>
       
      <Stack spacing={2}>

        {groups.map((group) => (
          <Box sx={{ minWidth: 500 }} key = {group._id}>
        <Card variant="outlined">
          <CardContent>
      <Typography variant="h3"  gutterBottom>
       {group.GroupId}
                </Typography>
                <Grid>
                 <Typography variant="h4"  gutterBottom>
      Topic : {group.topic}
                  </Typography>
                   <Typography variant="h4"  gutterBottom>
      Releated Area : {group.releatedArea}
                  </Typography>
                  </Grid>
                <Typography variant="h4"  gutterBottom>
       Members
      </Typography>
      <Typography variant="h5" component="div">
        
      </Typography>
                {group.Members.map((member) =>(
                <Typography variant="body2">
       {member}
                  </Typography>
                ))}
      <Typography variant="body2">
       
      </Typography>
    </CardContent>
              <CardActions>
                {group.topic == null && <Button size="small" onClick={() => {  getTopicRequest(group.GroupId);}}>View Topic Request</Button> }
      
    </CardActions>
      </Card>
        </Box>
        ))}

      </Stack>
      <div>
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
                Topic : {topic.topic}
              </Typography>
               <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
              releted Area:  {topic.reletedArea}
              </Typography>
              
            </Stack>
                       <Button color='success'  onClick={setStatus}>yes</Button>  
                       <Button color = 'error' onClick={handleClose} >No</Button> 
          </Box>
        </Fade>
        </Modal>
        </div>
    </>
  )
}

export default ViewgroupSup