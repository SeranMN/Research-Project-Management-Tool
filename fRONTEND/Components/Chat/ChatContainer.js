import React from 'react'
import { StreamChat } from 'stream-chat'
import {
    Chat,
    Channel,
    Window,
    ChannelHeader,
    MessageList,
    MessageInput,
    Thread,
    LoadingIndicator,
    ChannelList,
    ChatContext
} from 'stream-chat-react'
import { useEffect, useState } from 'react';
import '@stream-io/stream-chat-css';   
import { Button } from '@mui/material';
import CreateChannel from './CreateChannel'
import ChatOption from './ChatOption';
const ChanelContainer = () => {
    const log = sessionStorage.getItem('user')
    const filters = { members: { $in: [log] } }
const sort = { last_message_at: -1 };
const options = { limit: 10 }
    
    const apiKey = 'by42n655zxvn';
    const user = {
        id: log,
        name: log
    }
    console.log(log)
    const [client, setClient] = useState(null)
   const [option,setoption] = useState(false)
    useEffect(() => {
        async function init() {
            const chatClient = StreamChat.getInstance(apiKey)
            
            await chatClient.connectUser(user, chatClient.devToken(user.id))
           
            //await channel.watch()
           
            setClient(chatClient)
        }
        init()
        
        //if (client) return () => client.disconnectUser()
       
    }, [])
    if (!client) return <LoadingIndicator />
    return (
        <>
            <ChatOption />
      <Chat client={client} theme='messaging light' >
          <ChannelList
              filters={filters} sort={sort} options={options}
                /> 
                
      <Channel >
              
                  <Window>
                      <ChannelHeader />
                      <MessageList />
                      <MessageInput />
                  </Window>
                  <Thread />
              </Channel>
            </Chat>
           
            </>
  )
}

export default ChanelContainer