import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Pagination,
  Box,
  AppBar,
  EditButton,
  
  Grid,
} from '@mui/material';
import Edittable from './Edittable';

const createData = (orgId, orgName, orgLocation, stateRegion, status) => {
  return { orgId, orgName, orgLocation, stateRegion, status };
};



const rows = [
  createData('ORG5692', 'Anarghya_BLR', 'Bangalore', 'Karnataka', 'Active'),
  createData('ORG5692', 'Anarghya_HYD', 'Hyderabad', 'Telangana', 'Active'),
];

const OrgTable = () => {
  return (
    <Box sx={{ width: '80%', overflow: 'hidden', marginLeft:"260px"}}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
       
          <TableHead>
            <TableRow>
              <TableCell>Org ID</TableCell>
              <TableCell>Org Name</TableCell>
              <TableCell>Org Location</TableCell>
              <TableCell>State/Region</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.orgId}>
                <TableCell>{row.orgId}</TableCell>
                <TableCell>{row.orgName}</TableCell>
                <TableCell>{row.orgLocation}</TableCell>
                <TableCell>{row.stateRegion}</TableCell>
                <TableCell sx={{ color: 'red' }}>{row.status}</TableCell>
                <TableCell>
                  <Button  variant="text">
                    <Edittable/>
                    </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <AppBar position="sticky" color="inherit" sx={{ top: "40px", bottom: 0, height:"100px", marginTop:"400px"}}>
      <Box sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center', mt: 2 }}>
        <Button variant="outlined">Previous</Button>
        <Pagination count={1} page={1} color="error" />
        <Button variant="outlined">Next</Button>
      </Box>
      </AppBar>
      
    </Box>
  );
};


export default OrgTable;
