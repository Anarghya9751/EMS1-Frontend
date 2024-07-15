


import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useNavigate } from 'react-router-dom';


const SideBar = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const navigate = useNavigate();

  const handleListItemClick = (index, text) => {
    setSelectedIndex(index);
    if (text === 'Dashboard') {
      navigate('/dashboard');
    } else if (text === 'Organisation') {
      navigate('/organ');
    }
    else if (text === 'Branch') {
      navigate('/branch');
    }
    else if (text === 'Department') {
      navigate('/department');
    }
    else if (text === 'Designation') {
      navigate('/designation');
    }
    
  };

  const menuItems = ['Dashboard', 'Organisation', 'Branch', 'Department', 'Designation'];
  const logoutItem = 'Logout';

  return (
    <Box
      sx={{
        paddingTop: '60px', 
        width: 250,
        flexShrink: 0,
        backgroundColor: 'rgb(118,23,66)', 
        color: 'white',
        height: '80vh', 
        position: 'sticky', 
        top: '64px'
      }}
    >
      <img
        src='https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg'
        style={{
          borderRadius: '50%',
          height: '90px',
          width: '90px',
          marginLeft: '65px',
          border: '3px solid white',
          marginBottom: '13px'
        }}
        alt='Profile'
      />
      <h4 style={{ marginLeft: '75px' }}>MITTU</h4>
      <p style={{ marginLeft: '75px', fontFamily: 'sans-serif', fontSize: '14px' }}>SUPER ADMIN</p>

      <List sx={{ textAlign: 'center', paddingLeft: 0, fontFamily: 'sans-serif' }}>
        {menuItems.map((text, index) => (
          <ListItemButton
            key={index}
            onClick={() => handleListItemClick(index, text)}
            sx={{
              '&:hover': {
                width: '98%',
                backgroundColor: 'white',
                '& .MuiListItemText-root': {
                  color: 'maroon',
                },
              },
              justifyContent: 'flex-start',
              paddingLeft: index < 5 ? 8:9, 
            }}
          >
            <ListItemText primary={text} sx={{ color: 'white' }} />
            {selectedIndex === index && text !== logoutItem && <ArrowRightIcon sx={{ color: 'maroon', ml: 1 }} />}
          </ListItemButton>
        ))}
      </List>
      <List sx={{ position: 'absolute', bottom: 20, width: '100%' }}>
        <ListItemButton
          onClick={() => handleListItemClick(menuItems.length, logoutItem)}
          sx={{
            '&:hover': {
              width: '92%',
              backgroundColor: 'white',
              '& .MuiListItemText-root': {
                color: 'maroon',
              },
              '& .MuiSvgIcon-root': {
                color: 'maroon', 
              }
            },
            justifyContent: 'flex-start',
            paddingLeft: 9, 
            borderRadius: '12px', 
            margin: '0 10px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)', 
          }}
        >
          <ArrowLeftIcon sx={{ color: 'white', mr: 1 }} />
          <ListItemText primary={logoutItem} sx={{ color: 'white' }} />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default SideBar;
