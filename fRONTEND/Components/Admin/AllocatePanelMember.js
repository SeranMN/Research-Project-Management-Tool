import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Box } from "@mui/system";
import { Grid, Stack } from "@mui/material";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
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

const AllocatePanelMember = () => {
  const userdet = JSON.parse(sessionStorage.getItem("userdet"));

  const [open, setOpen] = useState(false);
  const [massage, setMassage] = useState('');
  const [severity, setSeverity] = useState('');

  const [groups, setGroups] = useState([]);
  //const [groupId, setGroupId] = useState('');
  const [topic, setTopic] = useState("");
const [Gpanel,setGpanel] = useState('')
    const [panels, setPanels] = useState([]);
 
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/group/`)
      .then((res) => {
        setGroups(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

      axios
      .get('http://localhost:5001/panel/')
      .then((res) => {
        setPanels(res.data);
      })
      .catch((err) => {
        console.log(err);
      });


  }, []);

 

  const setStatus = (groupID) => {
    const respone = {
      panel: Gpanel
    }
    axios
      .put(
        `http://localhost:5001/group/setsupervisor/${groupID}`,
        respone
      )
      .then(() => {
        setOpen(true)
        setMassage('Pannel Added Successfully')
        setSeverity('success')
      })
      .catch((err) => {
        setOpen(true)
        setMassage('Error in Group Creating')
        setSeverity('warning')
        console.log(err);
      });
    handleClose();
  };
  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {massage}
        </Alert>
      </Snackbar>

      <Stack spacing={2}>
        {groups.map((group) => (
          <Box sx={{ minWidth: 500 }} key={group._id}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h3" gutterBottom>
                  {group.GroupId}
                </Typography>
                <Grid spacing={2}>
                  <Grid item>
                    <Typography variant="h4" gutterBottom>
                      Topic : {group.topic}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h4" gutterBottom>
                      Releated Area : {group.releatedArea}
                    </Typography>
                  </Grid>
                </Grid>
                <Typography variant="h4" gutterBottom>
                  Members
                </Typography>
                <Typography variant="h5" component="div"></Typography>
                {group.Members.map((member) => (
                  <Typography variant="body2">{member}</Typography>
                ))}
                  <br/>      
                        
        <FormControl sx={{ minWidth: 200 }}>
        <InputLabel id="demo-simple-select-helper-label">Panel</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={Gpanel}
          label="Panel"
          onChange={(e)=>{setGpanel(e.target.value)}}
        >
          {panels.map((panel) => (
              <MenuItem value={panel.panelName}>{panel.panelName}</MenuItem>
               ))}
        </Select>
        
      </FormControl>
                       
               
              </CardContent>
              <CardActions>
                <Button onClick={() => setStatus(group.GroupId)}>Done</Button>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Stack>
    </>
  );
};

export default AllocatePanelMember;
