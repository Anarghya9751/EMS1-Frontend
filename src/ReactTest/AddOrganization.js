
import React, { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  Box,
  Grid,
  Typography,
  Paper,
  AppBar,
  Toolbar,
  Snackbar,
  Alert
} from '@mui/material';

const AddOrganization = ({ closeDrawer }) => {
  const [formData, setFormData] = useState({
    name: '',
  });

  const [isUpdate, setIsUpdate] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    if (!formData.name) {
      setSnackbarMessage('Please fill in all required fields.');
      setSnackbarSeverity('warning');
      setSnackbarOpen(true);
      return;
    }

    console.log(formData);

    fetch('http://localhost:9999/addorganization', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to save data');
        }
        console.log('Data saved successfully');
        setSnackbarMessage('Saved successfully.');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
      })
      .catch(error => {
        console.error('Error saving data:', error);
        setSnackbarMessage('Failed to save data. Please try again later.');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
      });
  };

  const handleCancel = () => {
    setFormData({
      name: ''
    });
    closeDrawer();
  };

  const handleClose = () => {
    closeDrawer();
  };

  const handleClick = () => {
    setIsUpdate(!isUpdate);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
    closeDrawer();
  };

  return (
    <Box display="flex" maxWidth="md">
      <Button
        sx={{ height: "80px", marginTop: "110px", width: "100px", borderTopLeftRadius: "40%", borderBottomLeftRadius: "40%" }}
        variant="contained"
        color="error"
        onClick={handleClose}
      >
        Close
      </Button>

      <Paper sx={{ width: "600px" }} elevation={3}>
        <AppBar color="inherit" position="sticky" sx={{ height: "80px", marginTop: "110px" }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Add Organization
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <FormControl variant="outlined" size="small" >
              <Select 
               name='status'
               value={formData.status}  
               onChange={handleChange}
                  >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
          </Toolbar>
        </AppBar>
        <Box sx={{ width: "900px" }} my={4} p={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Enter name"
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Box>
        <AppBar width="100px" position="sticky" color="inherit" sx={{ marginTop: "20px", height: "350px" }}>
          <Grid item xs={12} display="flex" justifyContent="center" sx={{ marginTop: "250px", marginBottom: "40px" }}>
            <Button
              onClick={handleSave}
              color="inherit"
              variant="contained"
              startIcon={<CheckCircleIcon color="success" />}
              sx={{ margin: '10px' }}
            >
              Save
            </Button>
            <Button onClick={handleCancel} color="inherit" variant="contained" startIcon={<CancelIcon color="error" />} sx={{ margin: '10px' }}>
              Cancel
            </Button>
          </Grid>
        </AppBar>
      </Paper>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        
      >
        <Alert onClose={handleSnackbarClose} variant='filled' severity={ snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default AddOrganization;




