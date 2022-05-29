import React, { useEffect, useState } from 'react'
import { CardContent, TextField } from '@mui/material'
import { Button } from '@mui/material'
import { StreamChat } from 'stream-chat'
import { Box } from '@mui/material'
import { useChatContext } from 'stream-chat-react'
import { Card } from '@mui/material'
import { Typography } from '@mui/material'
import ChatOption from './ChatOption'
const createChenel = () => {
  const log = sessionStorage.getItem('user')
  const [users, setUsers] = useState([]);
 
  
  const apiKey = 'by42n655zxvn'
  const Chatuser = {
        id: log,
        name: log
  }
   const cMembers = [Chatuser.id]
  const chatClient = StreamChat.getInstance(apiKey)
  chatClient.connectUser(Chatuser, chatClient.devToken(Chatuser.id))
    const [chanelName, setChanenelName] = useState('');
    const  createChanel = async () => {  
        
      const channel = chatClient.channel('team', chanelName, {
          name:chanelName,
                members:cMembers
            }) 
await channel.create();
    }

  useEffect(() => {

    const getUsers = async () => {
      try {
        const response = await chatClient.queryUsers(
          { id: { $ne: Chatuser.id } },
          {id:1}
          
        );
        if (response.users.length) {
          setUsers(response.users);
        }
      } catch (err) {
        console.log(err)
      }
      
    }
    getUsers();
    
  }, [])
  console.log(users)
  return (
    <div>
      <ChatOption/>
       <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { width: "90ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
                id="filled-basic"
                label="Chanel Name"
                variant="filled"
                type="text"
                value={chanelName}
                onChange={(e) => setChanenelName(e.target.value)}
        />
         <Typography svariant="h5">
                Select Members
      </Typography>
        {users.map((user) => (
          <>
            <Card variant="outlined" onClick={() => { cMembers.push(user.id); alert('Added' + user.id); console.log(cMembers)}}>
          <CardContent>
             <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {user.id}
                {console.log(user)}
      </Typography>
          </CardContent>
            </Card>
            </>
        ))}
        

        <Button variant="contained" color="success" onClick={createChanel}>Create Channel</Button>
  

        </Box>
      </div>
  )
}

export default createChenel