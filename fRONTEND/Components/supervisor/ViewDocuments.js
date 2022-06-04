import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        marginBottom: 20,

    },
}));


const ViewDocuments = ({setViewDoc,setViewSubmission,setSubType}) => {
    const classes = useStyles();
    const [submissionType, setSubmissionType] = useState([]);

    useEffect(() => {
        function getSubmission() {
            axios.get("http://localhost:5001/submissiontype/").then((res) => {
                setSubmissionType(res.data);
            }).catch((err) => {
                alert(err.message);
                console.log(err.message);
            })
        }
        getSubmission()

    }, [])

    const view = (sub) => {
        setViewDoc(false)
        setViewSubmission(true)
        setSubType(sub.submissionType)
    }

    return (
        <Container sx={{ py: 8 }} maxWidth="lg">
            {/* End hero unit */}
            <Grid container spacing={6}>
                {submissionType.map((submission, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardMedia
                                component="img"
                                image='https://img.icons8.com/plasticine/100/undefined/submit-progress.png'
                                alt="random"
                                height='240px'
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography textAlign={'center'} gutterBottom variant="h5" component="h2">
                                    {submission.submissionType}
                                </Typography>
                            </CardContent>
                            <CardActions style={{ display: "flex", justifyContent: "space-around" }}>
                                <Button onClick={() => view(submission)} variant='contained' >View Submissions</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default ViewDocuments