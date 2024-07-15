
// import React, { useState, useEffect } from 'react';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import CancelIcon from '@mui/icons-material/Cancel';
// import { Box, Button, TextField, Select, MenuItem, FormControl, Grid, Typography, Paper, AppBar, Toolbar, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar, Alert } from '@mui/material';
// import { Link } from 'react-router-dom';

// const EditOrganization = ({ closeDrawer, organizationId,organization }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     status: 'Active',
//   });
//   const [confirmationOpen, setConfirmationOpen] = useState(false);
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState('');
//   const [snackbarSeverity, setSnackbarSeverity] = useState('success');

//   useEffect(() => {
//     const fetchOrganization = async () => {
//       try {
//         const response = await fetch(`http://localhost:9999/getorganization/${organization.organizationId}${formData.updated_by}`);
//         if (response.ok) {
//           const data = await response.json();
//           setFormData(data);
//         } else {
//           console.error('Error fetching organization data:', response.statusText);
//           setSnackbarMessage('Error fetching organization data.');
//           setSnackbarSeverity('error');
//           setSnackbarOpen(true);
//         }
//       } catch (error) {
//         console.error('Error fetching organization data:', error);
//         setSnackbarMessage('Error fetching organization data.');
//         setSnackbarSeverity('error');
//         setSnackbarOpen(true);
//       }
//     };

//     fetchOrganization();
//   }, [organizationId]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     if (!formData.name) {
//       setSnackbarMessage('Please fill in all required fields.');
//       setSnackbarSeverity('warning');
//       setSnackbarOpen(true);
//       closeDrawer();
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:9999/updateorganization/`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       if (response.ok) {
//         setSnackbarMessage('Updated successfully.');
//         setSnackbarSeverity('success');
//         setSnackbarOpen(true);
//       } else {
//         setSnackbarMessage('Failed to update data.');
//         setSnackbarSeverity('error');
//         setSnackbarOpen(true);
//       }
//     } catch (error) {
//       console.error('Error updating data:', error);
//       setSnackbarMessage('Failed to update data. Please try again later.');
//       setSnackbarSeverity('error');
//       setSnackbarOpen(true);
//     }
//   };

//   const handleClose = () => {
//     if (formData.name || formData.status !== 'Active') {
//       setConfirmationOpen(true);
//     } else {
//       closeDrawer();
//     }
//   };

//   const handleConfirmClose = () => {
//     setConfirmationOpen(false);
//     closeDrawer();
//   };

//   const handleCancel = () => {
//     setFormData({
//       name: '',
//       status: 'Active',
//     });
//     closeDrawer();
//   };

//   const handleSnackbarClose = () => {
//     setSnackbarOpen(false);
//     closeDrawer();
//   };

//   return (
//     <Box display="flex" maxWidth="md">
//       <Button
//         sx={{ height: "80px", marginTop: "110px", width: "100px", borderTopLeftRadius: "40%", borderBottomLeftRadius: "40%" }}
//         variant="contained"
//         color="error"
//         onClick={handleClose}
//       >
//         Close
//       </Button>

//       <Paper sx={{ width: "600px" }} elevation={3}>
//         <AppBar color="inherit" position="sticky" sx={{ height: "80px", marginTop: "110px" }}>
//           <Toolbar>
//             <Typography variant="h6" sx={{ flexGrow: 1 }}>
//               Edit Organization
//             </Typography>
//             <FormControl variant="outlined" size="small">
//               <Select
//                 name="status"
//                 value={formData.status}
//                 onChange={handleChange}
//               >
//                 <MenuItem value="Active">Active</MenuItem>
//                 <MenuItem value="Inactive">Inactive</MenuItem>
//               </Select>
//             </FormControl>
//           </Toolbar>
//         </AppBar>
//         <Box my={4} p={3}>
//           <form onSubmit={handleUpdate}>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Enter name"
//                   variant="outlined"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//               </Grid>
//             </Grid>
//             <Box display="flex" justifyContent="center" mb={2} sx={{ marginTop: "350px" }}>
//               <Button
//                 type="submit"
//                 color="inherit"
//                 variant="contained"
//                 onClick={handleUpdate}
//                 startIcon={<CheckCircleIcon color="success" />}
//                 sx={{ margin: '10px' }}
//               >
//                 Update
//               </Button>
//               <Button
//                 onClick={handleCancel}
//                 color="inherit"
//                 variant="contained"
//                 startIcon={<CancelIcon color="error" />}
//                 sx={{ margin: '10px' }}
//               >
//                 Cancel
//               </Button>
//             </Box>
//           </form>
//         </Box>
//       </Paper>

//       <Dialog
//         open={confirmationOpen}
//         onClose={() => setConfirmationOpen(false)}
//       >
//         <DialogTitle>{"Close"}</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Are you sure you want to close without saving changes?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setConfirmationOpen(false)} color="primary">
//             No
//           </Button>
//           <Button onClick={handleConfirmClose} color="primary" autoFocus>
//             Yes
//           </Button>
//         </DialogActions>
//       </Dialog>

//       <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose}>
//         <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// };

// export default EditOrganization;





import React, { useState } from 'react';
import {
  Box,
  Drawer,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Grid,
  Typography,
  Paper,
  AppBar,
  Toolbar,
  Snackbar,
  Alert,
  Link,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios';

const EditOrganization = ({ organization }) => {
  const [formData, setFormData] = useState({
    name: organization ? organization.name : '',
    status: organization ? organization.status : 'Active',
    updated_by: 'sathish',
  });
  const [confirmationClose, setConfirmationClose] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });
  const [drawerOpen, setDrawerOpen] = useState(true); 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEdit = () => {
    if (!formData.name) {
      setSnackbar({
        open: true,
        message: 'Please fill in all required fields.',
        severity: 'error',
      });
      return;
    }

    // Convert status to boolean
    const updatedStatus = formData.status === 'Active' ? true : false;

    // Create updated data object
    const updatedData = {
      ...formData,
      status: updatedStatus,
    };

    axios.put(`http://localhost:9999/updateorganization/${organization.organizationId}/${formData.updated_by}`, updatedData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        setSnackbar({
          open: true,
          message: 'Updated successfully.',
          severity: 'success',
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch(error => {
        console.error('Error updating data:', error);
        setSnackbar({
          open: true,
          message: 'Failed to update data. Please try again later.',
          severity: 'error',
        });
      });
  };

  const handleClose = () => {
    setConfirmationClose(true);
  };

  const handleCancel = () => {
    setFormData({
      name: organization ? organization.name : '',
      status: organization ? organization.status : 'Active',
      updated_by: 'sathish',
    });
  };

  const handleConfirmClose = () => {
    setConfirmationClose(false);
    setDrawerOpen(false); // Close the drawer when confirmed
    window.location.reload();
  };

  const handleConfirmCancel = () => {
    setConfirmationClose(false);
  };

  const handleSnackbarClose = () => {
    setSnackbar({
      ...snackbar,
      open: false,
    });
  };

  return (
    <Box display="flex" maxWidth="md">
      <Drawer anchor="right" open={drawerOpen} onClose={() => {
        setDrawerOpen(false);
        window.location.reload();
      }}>
        <Box sx={{ width: 500 }}>
          <Button
            sx={{
              height: '80px',
              marginTop: '41px',
              width: '100px',
              borderTopLeftRadius: '40%',
              borderBottomLeftRadius: '40%',
            }}
            variant="contained"
            color="error"
            onClick={() => {
              handleClose();
              window.location.reload();
            }}
          >
            Close
          </Button>
          <Paper elevation={6} sx={{ width: '500px', padding: '16px' }}>
            <AppBar color="inherit" position="static">
              <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  Edit Organization
                </Typography>
                <FormControl variant="outlined" size="small">
                  <Select name ="status"
                    value={formData.status}
                    onChange={handleChange}>    
                    <MenuItem value="Active">Active</MenuItem>
                    <MenuItem value="Inactive">Inactive</MenuItem>
                  </Select>
                </FormControl>
              </Toolbar>
            </AppBar>
            <form>
              <Box my={4} p={3}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Organization Name"
                      value={formData.name}
                      margin="normal"
                      onChange={(event) => handleChange({ ...event, target: { name: 'name', value: event.target.value } })}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box display="flex" justifyContent="center" mb={2}>
                <Button
                  onClick={handleEdit}
                  color="inherit"
                  variant="contained"
                  startIcon={<CheckCircleIcon color="success" />}
                  sx={{ margin: '10px' }}
                >
                  Update
                </Button>
                <Button
                onClick={() => {
                  handleClose();
                  window.location.reload();
}}                  color="inherit"
                  variant="contained"
                  startIcon={<CancelIcon color="error" />}
                  sx={{ margin: '10px' }}
                >
                  Cancel
                </Button>
              </Box>
            </form>
          </Paper>
          <Snackbar
            open={snackbar.open}
            autoHideDuration={5000}
            onClose={handleSnackbarClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <Alert
              onClose={handleSnackbarClose}
              severity={snackbar.severity}
              variant='filled'
              sx={{ width: '100%' }} >
              {snackbar.message}
            </Alert>
          </Snackbar>
        </Box>
      </Drawer>
    </Box>
  );
}
export default EditOrganization;




