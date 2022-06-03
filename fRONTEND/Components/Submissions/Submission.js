import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { useCallback } from 'react'
import { Box } from '@mui/material'
import { Button } from '@material-ui/core'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import axios from 'axios'

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

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
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

    // console.log(getInputProps(),getRootProps())
    return (
        <div>
            <Box sx={{
                width: "100%",
                height: 350,
                backgroundColor: 'primary.dark',

            }} {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? 'Drag Active' : 'You can drop your files here.'}
                {!file &&
                    <UploadFileIcon />
                }
                {file &&
                    <div>
                        <InsertDriveFileIcon />
                        {file.name}
                    </div>
                }

            </Box>
            <div>
                {file && <Button onClick={handleSubmit}>Submit</Button>}
            </div>
            <div>
                {!file && <Button disabled>Submit</Button>}
            </div>
            {console.log(submission)}
            <div>
                Your Submssion
            </div>
            <a href={submission.avatar}><img src="https://img.icons8.com/carbon-copy/100/undefined/file.png" /></a>

            {submission &&
                <div>
                    {submission.cloudinary_id}
                </div>
            }
            {submission &&
                <div>
                    {submission.time}
                </div>
            }
        </div>
    )
}

export default Submission