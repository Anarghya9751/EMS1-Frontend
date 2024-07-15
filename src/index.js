import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React, { useState, useEffect } from 'react';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import CancelIcon from '@mui/icons-material/Cancel';
// import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Box, Grid, Typography, Paper, AppBar, Toolbar } from '@mui/material';
// import { Save, Cancel } from '@mui/icons-material';

// const EditOrganizationForm = ({ initialFormData }) => {
//   const [formData, setFormData] = useState(initialFormData);

//   useEffect(() => {
//     setFormData(initialFormData);
//   }, [initialFormData]);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleUpdate = () => {
//     // Handle update logic here (e.g., make an API call)
//     if(formData.organizationName){
//     window.alert('Updated Successfully.');
//     console.log('Form Data:', formData);
//   };
// };

//   const handleCancel = () => {
//     setFormData(initialFormData);
//   };

//   return (
//     <Box display="flex" maxWidth="md" sx={{ backgroundColor: '' }}>
//       {/* Your form JSX goes here */}
//     </Box>
//   );
// };

// export default EditOrganizationForm;
// {/* <EditOrganizationForm initialFormData={initialData} /> */}
