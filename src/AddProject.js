import React, { useState } from 'react';
import axios from 'axios';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import {
  Box,
  CardContent,
  Grid,
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Snackbar,
  Checkbox,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ProjectDetails = ({ closeDrawer }) => {
  const [formData, setFormData] = useState({
    projectName: '',
    shortCode: '',
    department: '',
    currency: '',
    budget: '',
    client: '',
    clientLocation: '',
    autoSelectedDepartment: '',
    projectSummary: '',
    startDate: '',
    deadline: '',
    status: '',
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [addBudget, setAddBudget] = useState(false);
  const [currency, setCurrency] = useState('');
  const [budget, setBudget] = useState('');
  const [hoursEstimate, setHoursEstimate] = useState('');
  const [weeksEstimate, setWeeksEstimate] = useState('');
  const [monthsEstimate, setMonthsEstimate] = useState('');

  const handleCheckboxChange = (event) => {
    setAddBudget(event.target.checked);
  };

  const currencies = [
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' },
    { value: 'INR', label: 'INR' },
  ];

  const estimates = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClose = () => {
    closeDrawer();
    console.log('Close button clicked');
  };

  const handleSave = async () => {
    const saveData = {
      projectName: formData.projectName,
      shortCode: formData.shortCode,
      department: formData.department,
      currency: currency,
      projectBudget: parseFloat(budget),
      client: {
        clientId: parseInt(formData.client),
      },
      clientLocation: formData.clientLocation,
      autoSelectedDepartment: formData.autoSelectedDepartment,
      projectSummary: formData.projectSummary,
      startDate: formData.startDate,
      deadlineDate: formData.deadline,
      status: formData.status === 'Active' ? true : false,
      hoursEstimate: parseInt(hoursEstimate),
      weeksEstimate: parseInt(weeksEstimate),
      monthsEstimate: parseInt(monthsEstimate),
    };

    try {
      const response = await axios.post('http://localhost:9191/saveproject', saveData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log('Response:', response.data);
      setSnackbarMessage('Project details saved successfully!');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    } catch (error) {
      console.error('There was an error saving the project details!', error);
      setSnackbarMessage('Error saving project details.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const handleCancel = () => {
    setFormData({
      projectName: '',
      shortCode: '',
      department: '',
      currency: '',
      budget: '',
      client: '',
      clientLocation: '',
      autoSelectedDepartment: '',
      projectSummary: '',
      startDate: '',
      deadline: '',
      status: '',
    });
    setSnackbarMessage('Form reset successfully!');
    setSnackbarSeverity('info');
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
    closeDrawer();
  };

  return (
    <Box marginTop="110px">
      <Box position="fixed" right={744} top={0} p={1}>
        <IconButton>
          <Button
            sx={{ height: '80px', marginTop: '95px', width: '120px', borderTopLeftRadius: '40%', borderBottomLeftRadius: '40%' }}
            variant="contained"
            color="error"
            onClick={handleClose}
          >
            Close
          </Button>
        </IconButton>
      </Box>
      <Box width="100vh">
        <AppBar sx={{ height: "80px", position: "sticky" }} color="inherit" position="sticky">
          <Toolbar >
            <Typography variant="h6" sx={{ flexGrow: 3 }}>
              Add Project
            </Typography>
            <FormControl variant="outlined" size="small">
              <Select name="status" value={formData.status} onChange={handleChange}>
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
          </Toolbar>
        </AppBar>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Project Name"
                placeholder="Enter Project Name"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="short-code-select">Short Code</InputLabel>
                <Select
                  labelId="short-code-select"
                  id="short-code-select"
                  name="shortCode"
                  value={formData.shortCode}
                  onChange={handleChange}
                >
                  <MenuItem value="SC001">SC001</MenuItem>
                  <MenuItem value="SC002">SC002</MenuItem>
                </Select>
                <FormHelperText>Select a short code</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="department-select">Department</InputLabel>
                <Select
                  labelId="department-select"
                  id="department-select"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                >
                  <MenuItem value="IT">IT</MenuItem>
                  <MenuItem value="HR">HR</MenuItem>
                  <MenuItem value="Finance">Finance</MenuItem>
                </Select>
                <FormHelperText>Select a department</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="client-select">Select Client</InputLabel>
                <Select
                  labelId="client-select"
                  id="client-select"
                  name="client"
                  value={formData.client}
                  onChange={handleChange}
                >
                  <MenuItem value="1">Client1</MenuItem>
                  <MenuItem value="2">Client2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Client Location"
                placeholder="Enter Client Location"
                name="clientLocation"
                value={formData.clientLocation}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="auto-selected-department">Auto Selected Department</InputLabel>
                <Select
                  labelId="auto-selected-department"
                  id="auto-selected-department"
                  name="autoSelectedDepartment"
                  value={formData.autoSelectedDepartment}
                  onChange={handleChange}
                >
                  <MenuItem value="AutoDept1">AutoDept1</MenuItem>
                  <MenuItem value="AutoDept2">AutoDept2</MenuItem>
                </Select>
                <FormHelperText>This department is auto-selected</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Project Summary"
                placeholder="Enter Project Summary"
                multiline
                rows={4}
                name="projectSummary"
                value={formData.projectSummary}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Project Start Date</Typography>
              <TextField
                fullWidth
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Project Deadline Date</Typography>
              <TextField
                fullWidth
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <Checkbox
                  checked={addBudget}
                  onChange={handleCheckboxChange}
                  inputProps={{ 'aria-label': 'Add Project Budget' }}
                />
                <Typography variant="body1">Add Project Budget</Typography>
              </FormControl>
              {addBudget && (
                <Grid container spacing={2} style={{ marginTop: 10 }}>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel>Currency</InputLabel>
                      <Select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                      >
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Project Budget"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      disabled={!addBudget}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel>Hours Estimate</InputLabel>
                      <Select
                        value={hoursEstimate}
                        onChange={(e) => setHoursEstimate(e.target.value)}
                        disabled={!addBudget}
                      >
                        {estimates.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel>Weeks Estimate</InputLabel>
                      <Select
                        value={weeksEstimate}
                        onChange={(e) => setWeeksEstimate(e.target.value)}
                        disabled={!addBudget}
                      >
                        {estimates.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={10}>
                    <FormControl fullWidth>
                      <InputLabel>Months Estimate</InputLabel>
                      <Select
                        value={monthsEstimate}
                        onChange={(e) => setMonthsEstimate(e.target.value)}
                        disabled={!addBudget}
                      >
                        {estimates.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              )}
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center" sx={{ marginTop: '20px' }}>
              <Button
                onClick={handleSave}
                color="inherit"
                variant="contained"
                startIcon={<CheckCircleIcon color="success" />}
                sx={{ margin: '10px' }}
              >
                Save
              </Button>
              <Button
                onClick={handleCancel}
                color="inherit"
                variant="contained"
                startIcon={<CancelIcon color="error" />}
                sx={{ margin: '10px' }}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </CardContent>
        <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
          <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default ProjectDetails;




// import React, { useState } from 'react';
// import axios from 'axios';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import CancelIcon from '@mui/icons-material/Cancel';
// import {
//   Box,
//   CardContent,
//   Grid,
//   Typography,
//   TextField,
//   FormControl,
//   Select,
//   MenuItem,
//   InputLabel,
//   FormHelperText,
//   Button,
//   AppBar,
//   Toolbar,
//   IconButton,
//   Snackbar,
//   Checkbox,
// } from '@mui/material';
// import MuiAlert from '@mui/material/Alert';

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

// const ProjectDetails = ({ closeDrawer }) => {
//   const [formData, setFormData] = useState({
//     projectName: '',
//     shortCode: '',
//     department: '',
//     currency: '',
//     budget: '',
//     client: '',
//     clientLocation: '',
//     autoSelectedDepartment: '',
//     projectSummary: '',
//     startDate: '',
//     deadline: '',
//     status: '',
//   });
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState('');
//   const [snackbarSeverity, setSnackbarSeverity] = useState('success');
//   const [addBudget, setAddBudget] = useState(false);
//   const [currency, setCurrency] = useState('');
//   const [budget, setBudget] = useState('');
//   const [hoursEstimate, setHoursEstimate] = useState('');
//   const [weeksEstimate, setWeeksEstimate] = useState('');
//   const [monthsEstimate, setMonthsEstimate] = useState('');

//   const handleCheckboxChange = (event) => {
//     setAddBudget(event.target.checked);
//   };

//   const currencies = [
//     { value: 'USD', label: 'USD' },
//     { value: 'EUR', label: 'EUR' },
//   ];

//   const estimates = [
//     { value: '1', label: '1' },
//     { value: '2', label: '2' },
//     { value: '3', label: '3' },
//   ];

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleClose = () => {
//     closeDrawer();
//     console.log('Close button clicked');
//   };

//   const handleSave = async () => {
//     console.log('Form data:', formData); 
//     try {
//       const response = await fetch('http://localhost:9191/saveproject', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',

          
//         },
//         body: JSON.stringify(formData),
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
  
//       const data = await response.json();
//       console.log('Response:', data);
//       setSnackbarMessage('Project details saved successfully!');
//       setSnackbarSeverity('success');
//       setSnackbarOpen(true);
//     } catch (error) {
//       console.error('There was an error saving the project details!', error);
//       setSnackbarMessage('Error saving project details.');
//       setSnackbarSeverity('error');
//       setSnackbarOpen(true);
//     }
//   };
  

//   const handleCancel = () => {
//     setFormData({
//       projectName: '',
//       shortCode: '',
//       department: '',
//       currency: '',
//       budget: '',
//       client: '',
//       clientLocation: '',
//       autoSelectedDepartment: '',
//       projectSummary: '',
//       startDate: '',
//       deadline: '',
//       status: '',
//     });
//     setSnackbarMessage('Form reset successfully!');
//     setSnackbarSeverity('info');
//     setSnackbarOpen(true);
//   };

//   const handleSnackbarClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }
//     setSnackbarOpen(false);
//     closeDrawer();
//   };

//   return (
//     <Box marginTop="110px">
//       <Box position="fixed" right={745} top={0} p={1}>
//         <IconButton>
//           <Button
//             sx={{ height: '80px', marginTop: '95px', width: '120px', borderTopLeftRadius: '40%', borderBottomLeftRadius: '40%' }}
//             variant="contained"
//             color="error"
//             onClick={handleClose}
//           >
//             Close
//           </Button>
//         </IconButton>
//       </Box>
//       <Box width="100vh">
//         <AppBar sx={{height:"80px", position:"sticky"}} color="inherit" position="sticky">
//           <Toolbar >
//             <Typography variant="h6" sx={{ flexGrow: 3 }}>
//               Add Project
//             </Typography>
//             <FormControl variant="outlined" size="small">
//               <Select name="status" value={formData.status} onChange={handleChange}>
//                 <MenuItem value="Active">Active</MenuItem>
//                 <MenuItem value="Inactive">Inactive</MenuItem>
//               </Select>
//             </FormControl>
//           </Toolbar>
//         </AppBar>
//         <CardContent>
//           <Grid container spacing={3}>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Project Name"
//                 placeholder="Enter Project Name"
//                 name="projectName"
//                 value={formData.projectName}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <FormControl fullWidth>
//                 <InputLabel htmlFor="short-code-select">Short Code</InputLabel>
//                 <Select
//                   labelId="short-code-select"
//                   id="short-code-select"
//                   name="shortCode"
//                   value={formData.shortCode}
//                   onChange={handleChange}
//                 >
//                   <MenuItem value="SC001">SC001</MenuItem>
//                   <MenuItem value="SC002">SC002</MenuItem>
//                 </Select>
//                 <FormHelperText>Select a short code</FormHelperText>
//               </FormControl>
//             </Grid>
//             <Grid item xs={6}>
//               <FormControl fullWidth>
//                 <InputLabel htmlFor="department-select">Department</InputLabel>
//                 <Select
//                   labelId="department-select"
//                   id="department-select"
//                   name="department"
//                   value={formData.department}
//                   onChange={handleChange}
//                 >
//                   <MenuItem value="IT">IT</MenuItem>
//                   <MenuItem value="HR">HR</MenuItem>
//                   <MenuItem value="Finance">Finance</MenuItem>
//                 </Select>
//                 <FormHelperText>Select a department</FormHelperText>
//               </FormControl>
//             </Grid>
//             <Grid item xs={6}>
//               <FormControl fullWidth>
//                 <InputLabel htmlFor="client-select">Select Client</InputLabel>
//                 <Select
//                   labelId="client-select"
//                   id="client-select"
//                   name="client"
//                   value={formData.client}
//                   onChange={handleChange}
//                 >
//                   <MenuItem value="Client1">Client1</MenuItem>
//                   <MenuItem value="Client2">Client2</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 fullWidth
//                 label="Client Location"
//                 placeholder="Enter Client Location"
//                 name="clientLocation"
//                 value={formData.clientLocation}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <FormControl fullWidth>
//                 <InputLabel htmlFor="auto-selected-department">Auto Selected Department</InputLabel>
//                 <Select
//                   labelId="auto-selected-department"
//                   id="auto-selected-department"
//                   name="autoSelectedDepartment"
//                   value={formData.autoSelectedDepartment}
//                   onChange={handleChange}
//                 >
//                   <MenuItem value="AutoDept1">AutoDept1</MenuItem>
//                   <MenuItem value="AutoDept2">AutoDept2</MenuItem>
//                 </Select>
//                 <FormHelperText>This department is auto-selected</FormHelperText>
//               </FormControl>
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Project Summary"
//                 placeholder="Enter Project Summary"
//                 multiline
//                 rows={4}
//                 name="projectSummary"
//                 value={formData.projectSummary}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <Typography variant="h6">Project Start Date</Typography>
//               <TextField
//                 fullWidth
//                 type="date"
//                 name="startDate"
//                 value={formData.startDate}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <Typography variant="h6">Project Deadline Date</Typography>
//               <TextField
//                 fullWidth
//                 type="date"
//                 name="deadline"
//                 value={formData.deadline}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <FormControl fullWidth>
//                 <Checkbox
//                   checked={addBudget}
//                   onChange={handleCheckboxChange}
//                   inputProps={{ 'aria-label': 'Add Project Budget' }}
//                 />
//                 <Typography variant="body1">Add Project Budget</Typography>
//               </FormControl>
//               {addBudget && (
//                 <Grid container spacing={2} style={{ marginTop: 10 }}>
//                   <Grid item xs={12} sm={6}>
//                     <FormControl fullWidth>
//                       <InputLabel>Currency</InputLabel>
//                       <Select
//                         value={currency}
//                         onChange={(e) => setCurrency(e.target.value)}
//                       >
//                         {currencies.map((option) => (
//                           <MenuItem key={option.value} value={option.value}>
//                             {option.label}
//                           </MenuItem>
//                         ))}
//                       </Select>
//                     </FormControl>
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <TextField
//                       fullWidth
//                       label="Project Budget"
//                       value={budget}
//                       onChange={(e) => setBudget(e.target.value)}
//                       disabled={!addBudget}
//                     />
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <FormControl fullWidth>
//                       <InputLabel>Hours Estimate</InputLabel>
//                       <Select
//                         value={hoursEstimate}
//                         onChange={(e) => setHoursEstimate(e.target.value)}
//                         disabled={!addBudget}
//                       >
//                         {estimates.map((option) => (
//                           <MenuItem key={option.value} value={option.value}>
//                             {option.label}
//                           </MenuItem>
//                         ))}
//                       </Select>
//                     </FormControl>
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     <FormControl fullWidth>
//                       <InputLabel>Weeks Estimate</InputLabel>
//                       <Select
//                         value={weeksEstimate}
//                         onChange={(e) => setWeeksEstimate(e.target.value)}
//                         disabled={!addBudget}
//                       >
//                         {estimates.map((option) => (
//                           <MenuItem key={option.value} value={option.value}>
//                             {option.label}
//                           </MenuItem>
//                         ))}
//                       </Select>
//                     </FormControl>
//                   </Grid>
//                   <Grid item xs={12} sm={10}>
//                     <FormControl fullWidth>
//                       <InputLabel>Months Estimate</InputLabel>
//                       <Select
//                         value={monthsEstimate}
//                         onChange={(e) => setMonthsEstimate(e.target.value)}
//                         disabled={!addBudget}
//                       >
//                         {estimates.map((option) => (
//                           <MenuItem key={option.value} value={option.value}>
//                             {option.label}
//                           </MenuItem>
//                         ))}
//                       </Select>
//                     </FormControl>
//                   </Grid>
//                 </Grid>
//               )}
//             </Grid>
//             <Grid item xs={12} display="flex" justifyContent="center" sx={{ marginTop: '20px' }}>
//               <Button
//                 onClick={handleSave}
//                 color="inherit"
//                 variant="contained"
//                 startIcon={<CheckCircleIcon color="success" />}
//                 sx={{ margin: '10px' }}
//               >
//                 Save
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
//             </Grid>
//           </Grid>
//         </CardContent>
//         <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}
//          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
//           <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
//             {snackbarMessage}
//           </Alert>
//         </Snackbar>
//       </Box>
//     </Box>
//   );
// };

// export default ProjectDetails;



