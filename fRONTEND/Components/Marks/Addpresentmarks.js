import React, { useState } from 'react'
import {Grid, Paper, TextField, Typography, Button, Card, CardContent } from '@mui/material';
import axios from "axios";
import "../Mstyles/addmarks.css"

function Addpresentmarks() {

    const [groupID, setGroupID] = useState("");
    const [Marks, setMarks] = useState("");
    const [Comments, setComments] = useState("");



    function sendData(e){

        e.preventDefault();
   
        const newPremark = {
   
        groupID,
        Marks,
        Comments
        }
   
    
    axios.post("http://localhost:5001/Presentationmarks/create", newPremark).then(() =>{
        alert("Mark Added")
     }).catch((err) =>{
        alert(err)
     })

    }



  return (
    <div className="addmarks">
         <Card style={{maxWidth:600, margin:"0 auto", padding:"20px 0px"}}>
             <CardContent>
              <Typography gutterBottom variant='h4' marginLeft={20} marginBottom={5}>Marking Form</Typography>
              

                 <form>
                 <Grid container spacing={1}>

                     <Grid xs={12}  item>
                         <TextField label="Group ID" placeholder='Enter Group ID' variant='outlined' fullWidth required onChange={(e)=>{
                       
                       setGroupID(e.target.value);

                    }}/>
                     </Grid>
                     <Grid xs={12} item>
                         <TextField type="number" label="Marks" InputProps={{ inputProps: { min: 0, max: 100 } }} placeholder='Enter Overall Group Mark' variant='outlined' fullWidth required onChange={(e)=>{
                       
                       setMarks(e.target.value);

                    }}/>
                     </Grid>
                     <Grid xs={12} item>
                     <TextField label="Comments" multiline rows={4} placeholder='Enter Feedback' variant='outlined' fullWidth required onChange={(e)=>{
                       
                       setComments(e.target.value);

                    }}/>
                     </Grid>
                     <Grid xs={12} item>
                     <Button type="submit" variant='contained' sx={{mt: 3}} color='primary' fullWidth onClick={sendData}>Submit</Button>
                     </Grid>

                 </Grid>
                 </form>

             </CardContent>
              
         </Card>
        
    </div>
  )
}

export default Addpresentmarks;