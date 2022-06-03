import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';;
import axios from "axios";
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles((theme) => ({

    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    },
    field2: {
        marginTop: 10,
        marginBottom: 20,
        display: 'block'
    },
    multi: {
        marginTop: 10,
        paddingTop: 10,
        marginBottom: 20
    },
}))

const AddSubmissionTypes = () => {
    const classes = useStyles()
    const [subtype, setSubType] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [message, setMessage] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()

        const newRecipe = {
            "submissionFormat": subtype,
            "deadline": ingredients,
            "description": description
        }

        axios.post("http://localhost:5000/recipe/add", newRecipe).then((res) => {

        }).catch((err) => {
            console.log(err)

        })
    
}

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
                Add Submission Type
            </Typography>

            <form onSubmit={handleSubmit} >
                <TextField className={classes.field2}
                    onChange={(e) => setSubType(e.target.value)}
                    label="Submission Type"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required

                />
                <label style={{ fontSize: '1.1rem', color: 'grey', marginLeft: 5 }}>
                    Deadline Date
                </label>
                <TextField className={classes.field2}
                    onChange={(e) => setDate(e.target.value)}
                    type='date'
                    variant="outlined"
                    color="secondary"
                    fullWidth
                />
                <label style={{ fontSize: '1.1rem', color: 'grey', marginLeft: 5 }}>
                    Deadline Time
                </label>
                <TextField className={classes.field2}
                    onChange={(e) => setTime(e.target.value)}
                    type='time'
                    variant="outlined"
                    color="secondary"
                    fullWidth
                />
                <TextField className={classes.field}
                    onChange={(e) => setMessage(e.target.value)}
                    label="Special Message"
                    variant="outlined"
                    color="secondary"
                    multiline
                    minRows={4}
                    fullWidth
                />
                <div style={{ textAlign: 'center', marginTop: "50px" }}>
                    <Button
                        type="submit"
                        color="secondary"
                        variant="contained"
                        size="large"
                    >
                        Add Submission Type
                    </Button>
                </div>

            </form>
        </Paper>
    </Container>
)
}

export default AddSubmissionTypes