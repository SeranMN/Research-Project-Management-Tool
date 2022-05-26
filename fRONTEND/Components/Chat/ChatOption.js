import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
export default function ChatOption(open) {
    const navigate = useNavigate();
  const [state, setState] = React.useState({
    
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return ;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
          <List>
               <ListItem  disablePadding>
            <ListItemButton onClick ={()=> navigate('/chat') }>
              <ListItemIcon>
                <ChatBubbleIcon  /> 
              </ListItemIcon>
              <ListItemText primary={"Chat"} />
                  </ListItemButton>
                  
              </ListItem>
       
          <ListItem  disablePadding>
            <ListItemButton onClick ={()=> navigate('/CreateTeam') }>
              <ListItemIcon>
                <AddIcon  /> 
              </ListItemIcon>
              <ListItemText primary={"Create Team"} />
                  </ListItemButton>
                  
              </ListItem>
              <ListItem disablePadding>
                  
            <ListItemButton onClick ={()=> navigate('/CreateTeam') }>
              <ListItemIcon>
                <EditIcon  /> 
              </ListItemIcon>
              <ListItemText primary={"Edit Team"} />
            </ListItemButton>
          </ListItem>
        
      </List>
      <Divider />
     
    </Box>
  );

  return (
    <div>
     
        
          <SettingsIcon sx ={{position: 'sticky',right: 0,left: 5000}} onClick={toggleDrawer('right', true)}>Right</SettingsIcon>
          <SwipeableDrawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
          >
            {list('right')}
          </SwipeableDrawer>
       
     
    </div>
  );
}
