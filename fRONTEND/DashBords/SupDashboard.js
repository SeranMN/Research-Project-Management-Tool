import React from "react";
import { Grid, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
const SupDashboard = () => {
  const navigate = useNavigate();
  return (
    <Grid sx={{ flexGrow: 1 }}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <Paper
              sx={{
                height: 150,
                width: 150,
                backgroundColor: "#fff",
              }}
              onClick={() => {
                navigate("/supViewGroup");
              }}
            >
              <img
                height={100}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-SRsEyJEb80O0oFKxphavjLuwfRTe4lw-EVEubFhEc3vUTPdS04aK8vz936NBxMLD7Mk&usqp=CAU"
              />
              <Typography variant="h6">View Groups</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper
              sx={{
                height: 150,
                width: 150,
                backgroundColor: "#fff",

              }}
              onClick = {()=>navigate('/requests')}
            >
              <img
                height={100}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-SRsEyJEb80O0oFKxphavjLuwfRTe4lw-EVEubFhEc3vUTPdS04aK8vz936NBxMLD7Mk&usqp=CAU"
              />
              <Typography variant="h6">Create Group</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper
              sx={{
                height: 150,
                width: 150,
                backgroundColor: "#fff",
              }}
              onClick={() => {
                navigate("/chat");
              }}
            >
              <img
                height={100}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAABycnJvb2/39/fy8vLS0tLPz8+amppGRkaTk5OWlpY9PT37+/shISG0tLQnJyfc3Nzi4uLq6uosLCx8fHyMjIy2trbGxsZYWFhPT08NDQ2hoaFKSkqnp6dqamq/v79hYWE2NjaDg4MWFhYcHBxUzOQTAAAEhElEQVR4nO2d62KiMBBGpVXUrnjBeu9W0Pb9X3FLLggKgiST1Nnv/JVOcgoZMQlDrwcAAAAAAAAAAAAAAAAAAAAAAAAAAIBl4tAii6VvnWs2u8Ay03XsW6pAMrXtJzgOfItpjiR+GVvfapIxmWAQzHzLZVgfgSV+wVkcqa6shsu+PeLZRMX1PhaXsh97+x3ZyMgv1gM/yFl0I6UIHUpFz9+M0SHrxHdEEnwmDEcksVsTkma8Uxb8RBS8JR/CkDZ6nyp8K8Qw/EsVXV4hfu/eXrIuvFJFj4Xhgip8K2BoBgxdAEMzYOgCGJrxvxg+zz1NP1mn+/EjyF/Bk4f+RrNPz4mNH63tDbdp/VQFGfvEmeFi0tQZIuZDN4ZrT34ZhtMg7Qz3HgV/xrHRD8xWhvmE6vfu/OdRRh1Zp3Pd7NxkkqWNYaoaSkODhrqweFEtjw2CtDD8lK1MXftlxCrBrbuHaDbUE6rd2zBCncbu90XNhkevglqx+1RSo6G88fryOF8mpiSDzmOk0VB+EyZd41tgEbTJ97U0Gr5nB/id1BW5/ND1G6PJUOaZz47R7ZAY5Zomw62I7nlxxei/3GRIO+vfEpFr3jr+cZPhW/b5e8fgthADcdXxj1sZTjoGt8Vr1omuPzFgCEMnwPAuMIShE2B4FxjC0AkwvAsMYegEGN4FhkwMj/WfP7+hmNK+M+H7/IZy6ax+z8PzG8pFgfrN5s9v2JNLybWT2gwM5aT2tO46ZWAYfQnFQ1L9MQNDtbLzk1BHyTajvAuNg+HNbqDSAgELw97qSrG4z+rMwlDvJ9EUnhGSz589v2FvmVYbqgfsGBj+OI52hxtDJcjDMCOK+vOioRbkY9hTdzjKcBYwNIwKhvkZ5GpYEORpqAVTroZaMB4xNdSCIZO7tgvScJPkgkwNdxdBpoYFQdaGcssqY0O12ZGvod50zNYw31XN1fCybZybodzVXdwXz85wfSXIz7A3Ou1KW8b5GV4DQyfA0AgYOgGGRsDQCTA0AoZOgKERMHQCDI0Q6xZfRMHbIkqrnImCy2VSouBtEX2gKvQqd/aZ1vkxQ5Z1SIii90X0rk8Z2+GP6APZE/OpCO+zZHUU0GY7udJGVtGtBXJXGmFZBzmF6q96vKzqQFmMWK0H+6oer4qCk5bMVoW+/FT/UMvRtFUdBrKRYO++wmO+3464aXWhBMH4I1wObFE7sNTny8VnXiYuoRXMB7tlql9WsKk40kGaCw8V7RrzXqEYVxznJMkNSF7UUqE4uzlo56r8z5CiduL8ZjBeG05cfkvFbyd6xZLhfO0+fS/CoR3CVbWiMPwWRyxoXrrhDq1YHovCcOqpS7ZRiuV0Iw2f/expqhR5GeaKhbHIzLB3m264GerqpBdFdoY3Z5Gf4XW6YWh4pcjRsJxRWRqWxiJPw2JGZWpYUORqmF+o0YaroVacfLA1LD1uzdOwqMjUsKDI1VBnVMaG+Vnka6gVGRsqRaJX2/4OhCLZe1F/BZmi3xe1kROHnK9RAAAAAAAAAAAAAAAAAAAAAAAAAADgn38oq0G+m6TKgQAAAABJRU5ErkJggg=="
              />
              <Typography variant="h6">Chat</Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper
              sx={{
                height: 150,
                width: 150,
                backgroundColor: "#fff",
              }}
              onClick={() => {
                navigate("/addmarks");
              }}
            >
              <img
                height={100}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAABycnJvb2/39/fy8vLS0tLPz8+amppGRkaTk5OWlpY9PT37+/shISG0tLQnJyfc3Nzi4uLq6uosLCx8fHyMjIy2trbGxsZYWFhPT08NDQ2hoaFKSkqnp6dqamq/v79hYWE2NjaDg4MWFhYcHBxUzOQTAAAEhElEQVR4nO2d62KiMBBGpVXUrnjBeu9W0Pb9X3FLLggKgiST1Nnv/JVOcgoZMQlDrwcAAAAAAAAAAAAAAAAAAAAAAAAAAIBl4tAii6VvnWs2u8Ay03XsW6pAMrXtJzgOfItpjiR+GVvfapIxmWAQzHzLZVgfgSV+wVkcqa6shsu+PeLZRMX1PhaXsh97+x3ZyMgv1gM/yFl0I6UIHUpFz9+M0SHrxHdEEnwmDEcksVsTkma8Uxb8RBS8JR/CkDZ6nyp8K8Qw/EsVXV4hfu/eXrIuvFJFj4Xhgip8K2BoBgxdAEMzYOgCGJrxvxg+zz1NP1mn+/EjyF/Bk4f+RrNPz4mNH63tDbdp/VQFGfvEmeFi0tQZIuZDN4ZrT34ZhtMg7Qz3HgV/xrHRD8xWhvmE6vfu/OdRRh1Zp3Pd7NxkkqWNYaoaSkODhrqweFEtjw2CtDD8lK1MXftlxCrBrbuHaDbUE6rd2zBCncbu90XNhkevglqx+1RSo6G88fryOF8mpiSDzmOk0VB+EyZd41tgEbTJ97U0Gr5nB/id1BW5/ND1G6PJUOaZz47R7ZAY5Zomw62I7nlxxei/3GRIO+vfEpFr3jr+cZPhW/b5e8fgthADcdXxj1sZTjoGt8Vr1omuPzFgCEMnwPAuMIShE2B4FxjC0AkwvAsMYegEGN4FhkwMj/WfP7+hmNK+M+H7/IZy6ax+z8PzG8pFgfrN5s9v2JNLybWT2gwM5aT2tO46ZWAYfQnFQ1L9MQNDtbLzk1BHyTajvAuNg+HNbqDSAgELw97qSrG4z+rMwlDvJ9EUnhGSz589v2FvmVYbqgfsGBj+OI52hxtDJcjDMCOK+vOioRbkY9hTdzjKcBYwNIwKhvkZ5GpYEORpqAVTroZaMB4xNdSCIZO7tgvScJPkgkwNdxdBpoYFQdaGcssqY0O12ZGvod50zNYw31XN1fCybZybodzVXdwXz85wfSXIz7A3Ou1KW8b5GV4DQyfA0AgYOgGGRsDQCTA0AoZOgKERMHQCDI0Q6xZfRMHbIkqrnImCy2VSouBtEX2gKvQqd/aZ1vkxQ5Z1SIii90X0rk8Z2+GP6APZE/OpCO+zZHUU0GY7udJGVtGtBXJXGmFZBzmF6q96vKzqQFmMWK0H+6oer4qCk5bMVoW+/FT/UMvRtFUdBrKRYO++wmO+3464aXWhBMH4I1wObFE7sNTny8VnXiYuoRXMB7tlql9WsKk40kGaCw8V7RrzXqEYVxznJMkNSF7UUqE4uzlo56r8z5CiduL8ZjBeG05cfkvFbyd6xZLhfO0+fS/CoR3CVbWiMPwWRyxoXrrhDq1YHovCcOqpS7ZRiuV0Iw2f/expqhR5GeaKhbHIzLB3m264GerqpBdFdoY3Z5Gf4XW6YWh4pcjRsJxRWRqWxiJPw2JGZWpYUORqmF+o0YaroVacfLA1LD1uzdOwqMjUsKDI1VBnVMaG+Vnka6gVGRsqRaJX2/4OhCLZe1F/BZmi3xe1kROHnK9RAAAAAAAAAAAAAAAAAAAAAAAAAADgn38oq0G+m6TKgQAAAABJRU5ErkJggg=="
              />
              <Typography variant="h6">Add Marks</Typography>
            </Paper>
          </Grid>

           <Grid item>
            <Paper
              sx={{
                height: 150,
                width: 150,
                backgroundColor: "#fff",
              }}
              onClick={() => {
                navigate("/updatemarks");
              }}
            >
              <img
                height={100}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAABycnJvb2/39/fy8vLS0tLPz8+amppGRkaTk5OWlpY9PT37+/shISG0tLQnJyfc3Nzi4uLq6uosLCx8fHyMjIy2trbGxsZYWFhPT08NDQ2hoaFKSkqnp6dqamq/v79hYWE2NjaDg4MWFhYcHBxUzOQTAAAEhElEQVR4nO2d62KiMBBGpVXUrnjBeu9W0Pb9X3FLLggKgiST1Nnv/JVOcgoZMQlDrwcAAAAAAAAAAAAAAAAAAAAAAAAAAIBl4tAii6VvnWs2u8Ay03XsW6pAMrXtJzgOfItpjiR+GVvfapIxmWAQzHzLZVgfgSV+wVkcqa6shsu+PeLZRMX1PhaXsh97+x3ZyMgv1gM/yFl0I6UIHUpFz9+M0SHrxHdEEnwmDEcksVsTkma8Uxb8RBS8JR/CkDZ6nyp8K8Qw/EsVXV4hfu/eXrIuvFJFj4Xhgip8K2BoBgxdAEMzYOgCGJrxvxg+zz1NP1mn+/EjyF/Bk4f+RrNPz4mNH63tDbdp/VQFGfvEmeFi0tQZIuZDN4ZrT34ZhtMg7Qz3HgV/xrHRD8xWhvmE6vfu/OdRRh1Zp3Pd7NxkkqWNYaoaSkODhrqweFEtjw2CtDD8lK1MXftlxCrBrbuHaDbUE6rd2zBCncbu90XNhkevglqx+1RSo6G88fryOF8mpiSDzmOk0VB+EyZd41tgEbTJ97U0Gr5nB/id1BW5/ND1G6PJUOaZz47R7ZAY5Zomw62I7nlxxei/3GRIO+vfEpFr3jr+cZPhW/b5e8fgthADcdXxj1sZTjoGt8Vr1omuPzFgCEMnwPAuMIShE2B4FxjC0AkwvAsMYegEGN4FhkwMj/WfP7+hmNK+M+H7/IZy6ax+z8PzG8pFgfrN5s9v2JNLybWT2gwM5aT2tO46ZWAYfQnFQ1L9MQNDtbLzk1BHyTajvAuNg+HNbqDSAgELw97qSrG4z+rMwlDvJ9EUnhGSz589v2FvmVYbqgfsGBj+OI52hxtDJcjDMCOK+vOioRbkY9hTdzjKcBYwNIwKhvkZ5GpYEORpqAVTroZaMB4xNdSCIZO7tgvScJPkgkwNdxdBpoYFQdaGcssqY0O12ZGvod50zNYw31XN1fCybZybodzVXdwXz85wfSXIz7A3Ou1KW8b5GV4DQyfA0AgYOgGGRsDQCTA0AoZOgKERMHQCDI0Q6xZfRMHbIkqrnImCy2VSouBtEX2gKvQqd/aZ1vkxQ5Z1SIii90X0rk8Z2+GP6APZE/OpCO+zZHUU0GY7udJGVtGtBXJXGmFZBzmF6q96vKzqQFmMWK0H+6oer4qCk5bMVoW+/FT/UMvRtFUdBrKRYO++wmO+3464aXWhBMH4I1wObFE7sNTny8VnXiYuoRXMB7tlql9WsKk40kGaCw8V7RrzXqEYVxznJMkNSF7UUqE4uzlo56r8z5CiduL8ZjBeG05cfkvFbyd6xZLhfO0+fS/CoR3CVbWiMPwWRyxoXrrhDq1YHovCcOqpS7ZRiuV0Iw2f/expqhR5GeaKhbHIzLB3m264GerqpBdFdoY3Z5Gf4XW6YWh4pcjRsJxRWRqWxiJPw2JGZWpYUORqmF+o0YaroVacfLA1LD1uzdOwqMjUsKDI1VBnVMaG+Vnka6gVGRsqRaJX2/4OhCLZe1F/BZmi3xe1kROHnK9RAAAAAAAAAAAAAAAAAAAAAAAAAADgn38oq0G+m6TKgQAAAABJRU5ErkJggg=="
              />
              <Typography variant="h6">Update Marks</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SupDashboard;
