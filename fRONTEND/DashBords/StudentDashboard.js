import React from "react";
import { Grid, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Container from '@mui/material/Container';

const StudentDashboard = () => {
  const userdet = JSON.parse(sessionStorage.getItem("userdet"))
  const navigate = useNavigate();

  
  return (
    <>
   <Container sx={{ py: 8,justifyContent:'center' }} maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item>
            <Paper
              sx={{
                height: 200,
                width: 180,
                backgroundColor: "#fff",
              }}
              onClick={() => {
                if (userdet.groupId == null) {
                  navigate("/CreateGroup");
                } else {
                  navigate('/topicAprovalReq');
                }
                
              }}
            >
              <div style={{textAlign:'center'}}>
              <img
                height={100}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-SRsEyJEb80O0oFKxphavjLuwfRTe4lw-EVEubFhEc3vUTPdS04aK8vz936NBxMLD7Mk&usqp=CAU"
              />
              </div>
              <Typography variant="h6">
                {userdet.groupId == null ? "Create Group":"Request Aproval to Topic"}
                
                </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper
              sx={{
                height: 200,
                width: 180,
                backgroundColor: "#fff",
                
              }}
              onClick={() => {
                navigate('/supervisors')
              }}
            >
              <div style={{textAlign:'center'}}>
              <img
                height={100}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-SRsEyJEb80O0oFKxphavjLuwfRTe4lw-EVEubFhEc3vUTPdS04aK8vz936NBxMLD7Mk&usqp=CAU"
              />
              <Typography variant="h6">Supervisors</Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item>
            <Paper
              sx={{
                height: 200,
                width: 180,
                backgroundColor: "#fff",
              }}
              onClick={() => {
                navigate("/chat");
              }}
            >
              <div style={{textAlign:'center'}}>
              <img
                height={100}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAABycnJvb2/39/fy8vLS0tLPz8+amppGRkaTk5OWlpY9PT37+/shISG0tLQnJyfc3Nzi4uLq6uosLCx8fHyMjIy2trbGxsZYWFhPT08NDQ2hoaFKSkqnp6dqamq/v79hYWE2NjaDg4MWFhYcHBxUzOQTAAAEhElEQVR4nO2d62KiMBBGpVXUrnjBeu9W0Pb9X3FLLggKgiST1Nnv/JVOcgoZMQlDrwcAAAAAAAAAAAAAAAAAAAAAAAAAAIBl4tAii6VvnWs2u8Ay03XsW6pAMrXtJzgOfItpjiR+GVvfapIxmWAQzHzLZVgfgSV+wVkcqa6shsu+PeLZRMX1PhaXsh97+x3ZyMgv1gM/yFl0I6UIHUpFz9+M0SHrxHdEEnwmDEcksVsTkma8Uxb8RBS8JR/CkDZ6nyp8K8Qw/EsVXV4hfu/eXrIuvFJFj4Xhgip8K2BoBgxdAEMzYOgCGJrxvxg+zz1NP1mn+/EjyF/Bk4f+RrNPz4mNH63tDbdp/VQFGfvEmeFi0tQZIuZDN4ZrT34ZhtMg7Qz3HgV/xrHRD8xWhvmE6vfu/OdRRh1Zp3Pd7NxkkqWNYaoaSkODhrqweFEtjw2CtDD8lK1MXftlxCrBrbuHaDbUE6rd2zBCncbu90XNhkevglqx+1RSo6G88fryOF8mpiSDzmOk0VB+EyZd41tgEbTJ97U0Gr5nB/id1BW5/ND1G6PJUOaZz47R7ZAY5Zomw62I7nlxxei/3GRIO+vfEpFr3jr+cZPhW/b5e8fgthADcdXxj1sZTjoGt8Vr1omuPzFgCEMnwPAuMIShE2B4FxjC0AkwvAsMYegEGN4FhkwMj/WfP7+hmNK+M+H7/IZy6ax+z8PzG8pFgfrN5s9v2JNLybWT2gwM5aT2tO46ZWAYfQnFQ1L9MQNDtbLzk1BHyTajvAuNg+HNbqDSAgELw97qSrG4z+rMwlDvJ9EUnhGSz589v2FvmVYbqgfsGBj+OI52hxtDJcjDMCOK+vOioRbkY9hTdzjKcBYwNIwKhvkZ5GpYEORpqAVTroZaMB4xNdSCIZO7tgvScJPkgkwNdxdBpoYFQdaGcssqY0O12ZGvod50zNYw31XN1fCybZybodzVXdwXz85wfSXIz7A3Ou1KW8b5GV4DQyfA0AgYOgGGRsDQCTA0AoZOgKERMHQCDI0Q6xZfRMHbIkqrnImCy2VSouBtEX2gKvQqd/aZ1vkxQ5Z1SIii90X0rk8Z2+GP6APZE/OpCO+zZHUU0GY7udJGVtGtBXJXGmFZBzmF6q96vKzqQFmMWK0H+6oer4qCk5bMVoW+/FT/UMvRtFUdBrKRYO++wmO+3464aXWhBMH4I1wObFE7sNTny8VnXiYuoRXMB7tlql9WsKk40kGaCw8V7RrzXqEYVxznJMkNSF7UUqE4uzlo56r8z5CiduL8ZjBeG05cfkvFbyd6xZLhfO0+fS/CoR3CVbWiMPwWRyxoXrrhDq1YHovCcOqpS7ZRiuV0Iw2f/expqhR5GeaKhbHIzLB3m264GerqpBdFdoY3Z5Gf4XW6YWh4pcjRsJxRWRqWxiJPw2JGZWpYUORqmF+o0YaroVacfLA1LD1uzdOwqMjUsKDI1VBnVMaG+Vnka6gVGRsqRaJX2/4OhCLZe1F/BZmi3xe1kROHnK9RAAAAAAAAAAAAAAAAAAAAAAAAAADgn38oq0G+m6TKgQAAAABJRU5ErkJggg=="
              />
              <Typography variant="h6">Chat</Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item>
            <Paper
              sx={{
                height: 200,
                width: 180,
                backgroundColor: "#fff",
              }}
              onClick={() => {
                navigate("/submissiondashboard");
              }}
            >
              <div style={{textAlign:'center'}}>
              <img
                height={100}
                src="https://www.computerhope.com/issues/pictures/duplicate_document.jpg"
              />
              <Typography variant="h6">Submissions</Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item>
            <Paper
              sx={{
                height: 200,
                width: 180,
                backgroundColor: "#fff",
              }}
              onClick={() => {
                navigate("/templates");
              }}
            >
               <div style={{textAlign:'center'}}>
              <img
                height={100}
                src="https://cdn0.iconfinder.com/data/icons/line-design-word-processing-set-3/21/document-template-512.png"
              />
              <Typography variant="h6">Templates</Typography>
              </div>
            </Paper>
          </Grid>

           <Grid item>
            <Paper
              sx={{
                height: 200,
                width: 180,
                backgroundColor: "#fff",
              }}
              onClick={() => {
                navigate("/viewmarks");
              }}
            >
              <img
                height={100}
                src="data:image/png;base64,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"
              />
              <Typography variant="h6">View Marks</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper
              sx={{
                height: 200,
                width: 180,
                backgroundColor: "#fff",
              }}
              onClick={() => {
                navigate("/viewpresentmarks");
              }}
            >
              <img
                height={100}
                src="https://cdn4.vectorstock.com/i/1000x1000/44/03/presentation-icon-design-template-isolated-vector-23934403.jpg"
              />
              <Typography variant="h6">View presentation Marks</Typography>
            </Paper>
          </Grid>

          
          
        </Grid>
      </Container>
    
    
    </>
  );
};

export default StudentDashboard;
