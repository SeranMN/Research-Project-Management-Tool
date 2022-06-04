import React, { useState, useEffect, useMemo } from 'react'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@mui/material/FormControl';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@mui/material/Paper';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { useDropzone } from 'react-dropzone'
import { useCallback } from 'react'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '40px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
  width: '50%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: 30
};

const focusedStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

const useStyles = makeStyles((theme) => ({
  field2: {
    marginTop: 10,
    marginBottom: 20,
    display: 'block'
  },

}))



const AddDocuments = () => {
  const classes = useStyles()
  const [file, setFile] = useState()
  const [topic, setTopic] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData();
    formData.append('file', file)
    formData.append('topic', topic)
    formData.append('fileName', file.name)

    axios.post("http://localhost:5001/Documenttemplate/create", formData).then((res) => {
      alert('submiited sucessfully')

    }).catch((err) => {
      console.log(err)
    })
  }

  const onDrop = useCallback((acceptedFiles, rejectFiles) => {
    setFile(acceptedFiles[0])
    console.log(acceptedFiles, "acce")
    console.log(rejectFiles, "rej")

  }, [])

  const { getRootProps, getInputProps, isDragActive, isFocused, isDragReject, isDragAccept } = useDropzone({
    onDrop,
    accept: {
      'application/msword': ['.doc'],
      'application/pdf': ['.pdf'],
      'application/vnd.ms-powerpoint': ['.ppt'],
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    multiple: false
  })

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);

  return (
    <Container style={{ marginTop: "10px" }} size="sm">
      <Paper elevation={8} sx={{ p: 2, margin: 'auto', maxWidth: 800, flexGrow: 1 }}>
        <Typography
          variant="h5"
          color="textPrimary"
          component="h2"
          gutterBottom
          align='center'
        >
          Add Documents/presentation Templates
        </Typography>

        <form onSubmit={handleSubmit} >
          <TextField className={classes.field2}
            onChange={(e) => setTopic(e.target.value)}
            label="Topic"
            variant="outlined"
            color="secondary"
            multiline
            minRows={4}
            required
            fullWidth
          />

          <div{...getRootProps({ style })}>
            <input {...getInputProps()} />
            {isDragReject &&
              <div style={{ color: "red" }}>
                Not Supported your file format
              </div>
            }
            <p>Drag 'n' drop your file, or click to select your file</p>
            {!file &&

              <UploadFileIcon fontSize='large' />
            }
            {file &&
              <div>
                <div style={{ textAlign: "center" }}>
                  <InsertDriveFileIcon fontSize='large' />
                </div>
                <div>
                  {file.name}
                </div>
              </div>
            }

          </div >
          <div style={{ textAlign: 'center', marginTop: "50px" }}>
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              size="large"
            >
              Add Template
            </Button>
          </div>

        </form>
      </Paper>
    </Container>
  )
}

export default AddDocuments