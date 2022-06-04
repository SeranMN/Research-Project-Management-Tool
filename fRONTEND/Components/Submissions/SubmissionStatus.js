import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    gridWrapper: {
        border: "1px solid grey",
        display: "grid",
        backgroundColor: "grey",
        gridRowGap: 1,
        gridColumnGap: 1,
        gridTemplateAreas: `
      "title title title"
      "a1 a2 a3"
      "b1 b2 b3"
      "c1 c2 c3"
      `,
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        "& > *": {
            backgroundColor: "white"
        }
    },
    paper: {
        padding: theme.spacing(2),
        margin: "auto",
        maxWidth: 600,
        
    },
    bottomRight: {
        justifyContent: "flex-end"
    },
    outerColumn: {
        borderRight: "1px solid grey",
        borderBottom: "1px solid grey",
        borderLeft: "1px solid grey"
    },
    outerColumn2: {
        borderRight: "1px solid grey",
        borderBottom: "1px solid grey",
        borderLeft: "1px solid grey",
        height:"70px"
    },
    centerColumn: {
        borderBottom: "1px solid grey"
    }
}));

const SubmissionStatus = ({ submission,count,subType,toggle }) => {
    const classes = useStyles();

    return (
        <div className="App">
            <div style={{ maxWidth: "100%", paddingTop: "12px" }}>
                <div className={classes.root}>
                    <Paper className={classes.paper}>
                        <Grid container>
                            <Grid
                                item
                                xs={12}
                                align="center"
                                style={{ border: "1px solid grey" }}
                            >
                                <Typography variant="h5" >Submissiion Status</Typography>
                            </Grid>
                            <Grid container direction="column" item xs align="left">
                                <Grid item className={classes.outerColumn}>
                                    <Typography>Status</Typography>
                                </Grid>
                                <Grid item className={classes.outerColumn}>
                                    <Typography>Due Date</Typography>
                                </Grid>
                                <Grid item className={classes.outerColumn}>
                                    <Typography>Dates Remaining</Typography>
                                </Grid>
                                <Grid item className={classes.outerColumn}>
                                    <Typography>Last Modified</Typography>
                                </Grid>
                                {toggle &&
                                     <Grid item className={classes.outerColumn2}>
                                     <Typography>File submissions</Typography>
                                 </Grid>
                                }
                            </Grid>
                            <Grid container direction="column" item xs align="center">
                                {toggle ?
                                    <div>
                                        <Grid item className={classes.outerColumn}>
                                            <Typography>Submitted for grading</Typography>
                                        </Grid>
                                        {subType &&
                                        <Grid item className={classes.outerColumn}>
                                            <Typography>{subType.date} {subType.time}</Typography>
                                        </Grid>
                                        }
                                        <Grid item className={classes.outerColumn}>
                                            <Typography>{count} Days Remaining</Typography>
                                        </Grid>
                                        <Grid item className={classes.outerColumn}>
                                            <Typography>{submission.time}</Typography>
                                        </Grid>
                                        <Grid item className={classes.outerColumn2}>
                                            <Typography> 
                                                <a href={submission.avatar}>
                                                    {submission.cloudinary_id}
                                                </a>
                                            </Typography>
                                        </Grid>
                                    </div>
                                    :
                                    <div>
                                         <Grid item className={classes.outerColumn}>
                                            <Typography>Not Attempted</Typography>
                                        </Grid>

                                        <Grid item className={classes.outerColumn}>
                                        {subType &&
                                            <Typography>{subType.date} {subType.time}</Typography>
                                        }
                                        </Grid>                                         
                                        <Grid item className={classes.outerColumn}>
                                            <Typography>{count} Days Remaining</Typography>
                                        </Grid>
                                        <Grid item className={classes.outerColumn}>
                                            <Typography>-</Typography>
                                        </Grid>
                                    </div>
                                }
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </div>
        </div>
    )
}

export default SubmissionStatus