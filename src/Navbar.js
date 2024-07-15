

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import { Avatar } from '@mui/material';


 

export default function MenuAppBar() {
  
  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return ( 
    <Box sx={{ position:"-moz-initial" }}>
      
      <AppBar position="static" color="inherit">
        <Toolbar>
        <Avatar   
            src ="data:image/jpeg;base64,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"
            sx={{  width: 70, height: 70 }}
          />
          <Typography  align="left" fontFamily="monospace" fontWeight="bold" variant="h6" component="div" sx={{flexGrow:1,color:"navy"}} gutterBottom> 
          EMS  
          <Typography variant="body1" >
          Employee Management System
            </Typography>
          </Typography>  
          {(<div>

          <IconButton
            size="large"
            aria-label="show new notifications"
            color="inherit"
          >
            <Badge color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
              <IconButton 
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit" >
              <AccountCircle />
              </IconButton>  
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                 open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
              
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
