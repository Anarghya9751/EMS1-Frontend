
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Pagination, Container } from '@mui/material';

const createData = (id, firstName, Department, Year, District) => {
    return { id, firstName, Department, Year, District };
};

const rows = [
    createData(1, 'Sumith', 'Mechanical', 2020, "Peddapally"),
    createData(2, 'Prasad', 'Computers', 2021, "Mancherial"),
    createData(3, 'Anil', 'Electrical', 2022, "Hyderabad"),
    createData(4, 'Sathya', 'Mining', 2020, "Siddipet"),
    createData(5, 'Naveen', 'Aeronatical', 2021, "Nirmal"),
    createData(6, 'Raju', 'Civil', 2022, "Kothagudem"),
    createData(7, 'Karthik', 'Geology', 2021, "Warangal"),
    createData(8, 'Suman', 'Mechanical', 2021, "Khammam"),
    createData(9, 'Srinivas', 'Civil', 2022, "Mancherial"),
    createData(10, 'Shanker', 'Mining', 2021, "Hyderabad"),
    createData(11, 'Srikanth', 'Computers', 2022, "Jagityal"),
    createData(12, 'Vamshi', 'Electrical', 2021, "Suryapet"),
    createData(13, 'Krishna', 'Civil', 2020, "Nalgonda"),
    createData(14, 'Kumar', 'Mining', 2021, "Karimnagar"),
    createData(15, 'Pavan', 'Mechanical', 2022, "Mancherial"),
];

const PaginatedTable = () => {
     const [page, setPage] = useState(1);
    const rowsPerPage = 5;

     const handleChangePage = (event, value) => {
        setPage(value);
    };                                                                                  

    const displayRows = rows.slice((page - 1) * rowsPerPage, page * rowsPerPage);

    return (
           <Container  sx={{marginTop:"70px"}}>
            <Paper >
                 <TableContainer sx={{position:'static'}}>
                 <Table>
                  <TableHead>
                 <TableRow sx={{ backgroundColor: 'sienna' }}>
                   <TableCell sx={{color: 'white'}} width="130px">ID</TableCell>
                    <TableCell sx={{color:'white'}} width="250px">First Name</TableCell>
                   <TableCell sx={{color:'white' }} width="350px">Department</TableCell>
                    <TableCell sx={{color: 'white' }} width="220px">Year</TableCell>
                   <TableCell sx={{color: 'white' }} width="200px">District</TableCell>
                  </TableRow>
                 </TableHead>
              <TableBody>
                  {displayRows.map((row) => (
                  <TableRow key={row.id}>
                   <TableCell>{row.id}</TableCell>
                   <TableCell>{row.firstName}</TableCell>
                  <TableCell>{row.Department}</TableCell>
                   <TableCell>{row.Year}</TableCell>
                  <TableCell>{row.District}</TableCell>
                 </TableRow>
                    ))}
                 </TableBody>
                  </Table>
                </TableContainer>
                <Pagination
                    count={Math.ceil(rows.length / rowsPerPage)}
                     page={page}
                      onChange={handleChangePage}
                     shape="circular"
                     variant="text"
                    color="primary"
                       showFirstButton
                      showLastButton
                    sx={{ display: 'flex', justifyContent: 'center', p: 4 }}
                />
            </Paper>
        </Container>
       );
    };

export default PaginatedTable;
