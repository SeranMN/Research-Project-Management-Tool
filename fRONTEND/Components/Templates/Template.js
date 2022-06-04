import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';

const Template = () => {
    const [templates, setTemplates] = useState([])

    useEffect(() => {
        function getSubmission() {
            axios.get("http://localhost:5001/documenttemplate/").then((res) => {
                setTemplates(res.data);
            }).catch((err) => {
                alert(err.message);
                console.log(err.message);
            })
        }
        getSubmission()
    }, [])

    return (
        <div>
            {console.log(templates, "sefvsfse")}
            <Grid container spacing={6}>
            {templates.map((template, index) => (
               
                <Grid item key={index} xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 500, marginTop: 5, mx: 8, backgroundColor: '#607d8b' }}>
                        <CardMedia
                            component="img"
                            image='https://img.icons8.com/nolan/64/template.png'
                            alt="random"
                        />
                        <CardActionArea>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {template.topic}
                                </Typography>
                                <a href={template.avatar}>
                                    <Button variant='contained'>
                                        Download Template
                                    </Button>
                                </a>

                            </CardContent>
                        </CardActionArea>
                    </Card>

                </Grid>
            ))}
            </Grid>
        </div>
    )
}

export default Template