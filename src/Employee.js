// import React, { useState, useEffect } from 'react';
// import {
//   Table, TableBody, TableCell, TableContainer,
//   TableHead, TableRow, Paper, Button, TextField,Typography,
//   Box
// } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const EmployeeTable = () => {
//   const [employees, setEmployees] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     // Fetch the employee data from the backend
//     axios.get('/api/employees') // Update with your API endpoint
//       .then(response => {
//         setEmployees(response.data);
//       })
//       .catch(error => {
//         console.error("There was an error fetching the employees!", error);
//       });
//   }, []);

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredEmployees = employees.filter(employee =>
//     employee.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <Box position="absolute" marginLeft="9cm" marginTop='-16cm'>
//         <Box 
//       sx={{ 
//         display: 'flex', 
//         alignItems: 'center', 
//         padding: '16px', 
//         borderRadius: '8px', 
//         boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', 
//         backgroundColor: '#fff' 
//       }}
//     >
//       <Typography 
//         variant="h6" 
//         component="div" 
//         sx={{ 
//           flexGrow: 1, 
//           fontWeight: 'bold', 
//           color: 'darkblue' 
//         }}
//       >
//         All Employees
//       </Typography>
//       <TextField
//         variant="outlined"
//         placeholder="Search by Employee Name"
//         size="small"
//         sx={{ 
//           marginLeft: '16px', 
//           backgroundColor: '#fff' 
//         }}
//       />
//     </Box>
//     <div  style={{ padding: '20px' }}>
//       <Button
//         variant="contained"
//         color="error"
//         startIcon={<AddIcon />}
//         component={Link} to="/add-employee"
//       >
//         Add Employee
//       </Button>
//       {/* <TextField
//         label="Search by Employee Name"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         value={searchTerm}
//         onChange={handleSearch}
//       /> */}
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Employee ID</TableCell>
//               <TableCell>Employee Name</TableCell>
//               <TableCell>Parent Designation</TableCell>
//               <TableCell>Parent Department</TableCell>
//               <TableCell>Parent Branch</TableCell>
//               <TableCell>Parent Org</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredEmployees.map((employee) => (
//               <TableRow key={employee.id}>
//                 <TableCell>{employee.id}</TableCell>
//                 <TableCell>{employee.name}</TableCell>
//                 <TableCell>{employee.designation}</TableCell>
//                 <TableCell>{employee.department}</TableCell>
//                 <TableCell>{employee.branch}</TableCell>
//                 <TableCell>{employee.org}</TableCell>
//                 <TableCell style={{ color: employee.status === 'Active' ? 'green' : 'red' }}>
//                   {employee.status}
//                 </TableCell>
//                 <TableCell>
//                   <Button component={Link} to={`/edit-employee/${employee.id}`} color="primary">EDIT</Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//     </Box>
//   );
// };

// export default EmployeeTable;


import React, { useState, useEffect } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button, TextField, Typography,
  Box
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Pagination from '@mui/material/Pagination';
import { Link } from 'react-router-dom';
import axios from 'axios';

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Simulate fetching employee data from the backend with dummy data
    const dummyData = [
      { id: 1, name: 'Prasad', designation: 'Manager', department: 'HR', branch: 'Bengalore', org: 'Anarghya', status: 'Active' },
      { id: 2, name: 'Vamshi', designation: 'Developer', department: 'IT', branch: 'Hyderabad', org: 'Anarghya', status: 'Inactive' },
      { id: 3, name: 'Krishna', designation: 'Designer', department: 'Marketing', branch: 'Bengalore', org: 'Anarghya', status: 'Active' },
      { id: 4, name: 'Sudeer', designation: 'Analyst', department: 'Finance', branch: 'Hyderabad', org: 'Anarghya', status: 'Active' },
      // Add more dummy data as needed
    ];
    setEmployees(dummyData);

    // Uncomment this section if you want to fetch real data from an API
    // axios.get('/api/employees') // Update with your API endpoint
    //   .then(response => {
    //     setEmployees(response.data);
    //   })
    //   .catch(error => {
    //     console.error("There was an error fetching the employees!", error);
    //   });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box position="absolute" marginLeft="9cm" marginTop='-16cm'>
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          padding: '16px', 
          borderRadius: '8px', 
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', 
          backgroundColor: '#fff' 
        }}
      >
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1, 
            fontWeight: 'bold', 
            color: 'darkblue' 
          }}
        >
          All Employees
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Search by Employee Name"
          size="small"
          value={searchTerm}
          onChange={handleSearch}
          sx={{ 
            marginLeft: '16px', 
            backgroundColor: '#fff' 
          }}
        />
      </Box>
      <div style={{ padding: '20px' }}>
        <Button
          variant="contained"
          color="error"
          startIcon={<AddIcon />}
          component={Link} to="/add-employee"
        >
          Add Employee
        </Button>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Employee ID</TableCell>
                <TableCell>Employee Name</TableCell>
                <TableCell>Parent Designation</TableCell>
                <TableCell>Parent Department</TableCell>
                <TableCell>Parent Branch</TableCell>
                <TableCell>Parent Org</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredEmployees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>{employee.id}</TableCell>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.designation}</TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>{employee.branch}</TableCell>
                  <TableCell>{employee.org}</TableCell>
                  <TableCell style={{ color: employee.status === 'Active' ? 'green' : 'red' }}>
                    {employee.status}
                  </TableCell>
                  <TableCell>
                    <Button component={Link} to={`/edit-employee/${employee.id}`} color="primary">EDIT</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <caption>
            <Box  marginLeft='18cm' marginTop='1cm' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              <Button variant="contained" sx={{ marginRight: 1, backgroundColor: 'whitesmoke', color: 'black' }}>Previous</Button>
              <Pagination count={1} shape="rounded" hidePrevButton hideNextButton sx={{ backgroundColor: 'red', color: 'black', borderRadius: '5px' }} />
              <Button variant="contained" sx={{ marginLeft: 1, backgroundColor: 'whitesmoke', color: 'black' }}>Next</Button>
            </Box>
          </caption>
        </TableContainer>
      </div>
    </Box>
  );
};

export default EmployeeTable;
