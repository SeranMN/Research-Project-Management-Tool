import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    bx: {
        marginLeft: 300,
        marginTop: 50,
        maxWidth: 1150,
        textAlign: 'left',
    },
    typ: {
        color: 'black',
    }
});

const ViewSubmissions = ({ subType }) => {
    const classes = useStyles();
    const [submissions, setSubmissions] = useState();
    const [marking, setMarking] = useState([]);

    useEffect(() => {
        function getSubmission() {
            axios.get(`http://localhost:5001/submission/sub/${subType}`).then((res) => {
                setSubmissions(res.data);
            }).catch((err) => {
                alert(err.message);
                console.log(err.message);
            })
        }
        getSubmission()

    }, [])

    useEffect(() => {
        function getMarking() {
            axios.get(`http://localhost:5001/markingschemes/submissionType/${subType}`).then((res) => {
                setMarking(res.data);
            }).catch((err) => {
                alert(err.message);
                console.log(err.message);
            })
        }
        getMarking()

    }, [])

    return (
        <div>
            {marking.length > 0 &&
                <div style={{textAlign:'center'}}>
                    <a style={{textDecoration:'none'}} href={marking[0].avatar}><Button variant='contained'>View Marking Scheme</Button></a>
                </div>
            }
            <TableContainer style={{marginTop:"10px"}} component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>

                            <StyledTableCell>Group Name</StyledTableCell>
                            <StyledTableCell>File Name</StyledTableCell>
                            <StyledTableCell align="center">Submitted at</StyledTableCell>
                            <StyledTableCell align="center">Status</StyledTableCell>
                            <StyledTableCell >Download</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {submissions?.map((submission, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell component="th" scope="row">
                                    {submission.groupID}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {submission.cloudinary_id}
                                </StyledTableCell>
                                <StyledTableCell align="center">{submission.time}</StyledTableCell>
                                <StyledTableCell align="center">{submission.time}</StyledTableCell>
                                <StyledTableCell align="center"> <a href={submission.avatar}>Download</a></StyledTableCell>
                            </StyledTableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default ViewSubmissions