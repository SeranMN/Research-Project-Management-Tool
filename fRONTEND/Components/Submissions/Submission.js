import React, { useEffect, useState, useMemo } from 'react'
import { useDropzone } from 'react-dropzone'
import { useCallback } from 'react'
import { Box, Typography } from '@mui/material'
import { Button } from '@mui/material'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import axios from 'axios'
import SubmissionStatus from './SubmissionStatus'
import { Stack } from '@mui/material'

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
    marginTop:30
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

const Submission = () => {
    const [file, setFile] = useState()
    const [submission, setSubmission] = useState()

    const onDrop = useCallback((acceptedFiles, rejectFiles) => {
        setFile(acceptedFiles[0])
        console.log(acceptedFiles, "acce")
        console.log(rejectFiles, "rej")

    }, [])

    const handleSubmit = () => {
        let formData = new FormData();
        formData.append('file', file)
        formData.append('name', "Navod")
        formData.append('fileName', file.name)
        formData.append('folder', "presentation")

        axios.post("http://localhost:5001/submission/create", formData).then((res) => {
            alert('submiited sucessfully')
        }).catch((err) => {
            console.log(err)
        })
    }

    const handleEdit = () => {
        let formData2 = new FormData();
        formData2.append('file', file)
        formData2.append('name', "Navod")
        formData2.append('fileName', file.name)
        formData2.append('folder', "presentation")

        axios.put(`http://localhost:5001/submission/update/6298bdaddd8b19373e0445d9`, formData2).then((res) => {
            alert('Edited sucessfully')
            window.location.reload()
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        function getSubmission() {
            axios.get("http://localhost:5001/submission/6298bdaddd8b19373e0445d9").then((res) => {
                setSubmission(res.data);
            }).catch((err) => {
                alert(err.message);
                console.log(err.message);
            })
        }
        getSubmission()

    }, [])

    useEffect(() => {
        if (file) {
            console.log("My file", file)
        }
    }, [file])

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

    // console.log(getInputProps(),getRootProps())
    return (

        <div>
            <Typography variant='h4' style={{ textAlign: "center" }}>Answer to assignemnt 1</Typography>
            <Typography variant='h5' style={{ textAlign: "center", paddingBottom: 8 }}>This is the special message</Typography>
            <div>
                <SubmissionStatus submission={submission} />
            </div>
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
            {!submission &&
                <div style={{ textAlign: "center", marginTop: 15 }}>
                    <div>
                        {file && <Button variant='contained' onClick={handleSubmit}>Submit</Button>}
                    </div>
                    <div>
                        {!file && <Button disabled>Submit</Button>}
                    </div>
                </div>
            }
            {submission &&
                <div style={{ textAlign: "center", marginTop: 15 }}>
                    <div>
                        {file && <Button variant='contained' onClick={handleEdit}>Edit Submit</Button>}
                    </div>
                    <div>
                        {!file && <Button variant='contained' disabled>Edit Submit</Button>}
                    </div>
                </div>
            }


        </div>
    )
}

export default Submission