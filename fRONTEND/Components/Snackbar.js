import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useState } from 'react'; 
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars(props) {
    
    const [open, setOpen] = useState(false);
    
  
    

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

   
  };

  return (
    
      
      <Snackbar open={props.open} autoHideDuration={props.autoHideDuration} onClose={handleClose}>
        <Alert onClose={handleClose} severity={props.severity} sx={{ width: '100%' }}>
          {props.massage}
        </Alert>
      </Snackbar>
     
     
  );
}
