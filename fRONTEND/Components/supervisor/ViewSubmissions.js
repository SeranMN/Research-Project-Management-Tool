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
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

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
function createData(productName, availableStocks, section, stockstatus) {
    return { productName, availableStocks, section, stockstatus };
}

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

    return (
        <div>
            <TableContainer component={Paper}>
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
                        {submissions?.map((submission,index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell component="th" scope="row">
                                    {submission.name}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {submission.cloudinary_id}
                                </StyledTableCell>
                                <StyledTableCell align="center">{submission.time}</StyledTableCell>
                                <StyledTableCell align="center">{submission.time}</StyledTableCell>
                                <a href={submission.avatar}><StyledTableCell align="center">Download</StyledTableCell></a>
                            </StyledTableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default ViewSubmissions