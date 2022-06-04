import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button, Stack, TextareaAutosize } from "@mui/material";

import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { forwardRef } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const TopicReg = () => {
  const userDet = JSON.parse(sessionStorage.getItem("userdet"));

  const [Snackopen, setSnackOpen] = useState(false);

  const SnackhandleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackOpen(false);
  };
  const [massage, setMassage] = useState();
  const [severity, setSeverity] = useState();

  const [topic, setTopic] = useState("");
  const [topicDes, setTopicDes] = useState("");
  const [reletedArea, setReleatedArea] = useState("");

  const submit = () => {
    const topicReg = {
      groupId: userDet.groupId,
      topic: topic,
      topicDes: topicDes,
      reletedArea: reletedArea,
      status: "pending",
    };

      axios.post('http://localhost:5001/topic/add', topicReg)
          .then(() => { setSnackOpen(true); setMassage('Request sent successfully'); setSeverity('success') })
          .catch(() => { setSnackOpen(true); setMassage('Request  could not send'); setSeverity('warning'); console.log(err) });
  };
  return (
    <>
      <Snackbar
        open={Snackopen}
        autoHideDuration={6000}
        onClose={SnackhandleClose}
      >
        <Alert
          onClose={SnackhandleClose}
          severity={severity}
          sx={{ width: "100%" }}
        >
          {massage}
        </Alert>
      </Snackbar>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { mx: 50, my: 25, mz: 25, width: "70ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Stack spacing={2}>
          <TextField
            label="Topic"
            variant="outlined"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />

          <TextareaAutosize
            aria-label="Breif Description About Topic"
            minRows={6}
            placeholder="Breif Description About Topic"
            style={{ width: 550 }}
            value={topicDes}
            onChange={(e) => setTopicDes(e.target.value)}
          />

          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Releated Area
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={reletedArea}
              label="Releated Area"
              onChange={(e) => setReleatedArea(e.target.value)}
            >
              <MenuItem value={"Machine Learning"}>Machine Learning</MenuItem>
              <MenuItem value={"IOT"}>Internet Of Thing</MenuItem>
              <MenuItem value={"Robotics"}>Robotics</MenuItem>
            </Select>
          </FormControl>

          <Button onClick={submit}>Request Aproval</Button>
        </Stack>
      </Box>
    </>
  );
};

export default TopicReg;
