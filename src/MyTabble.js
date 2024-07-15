


import React from 'react';
import { Card, CardContent, Typography, Grid, Box, Paper } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Hexagon } from '@mui/icons-material';

const data = [
  {
    total: 'Total Organisation',
    employees: '42%',
    interview: '64',
  },

  {
    total: 'Total Branch',
    employees: '82%',
    interview: '53',
  },

  {
    total: 'Total Department',
    employees: '55%',
    interview: '60',
  },

  {
    total: 'Total Designation',
    employees: '30%',
    interview: '15',
  },

  {
    total: 'Total Employees',
    employees: '72%',
    interview: '63',
  },

  {
    total: 'Total Interview',
    employees: '33%',
    interview: '15',
  },

  {
    total: 'Total Clients',
    employees: '48%',
    interview: '37',
  },

  {
    total: 'Total Projects',
    employees: '28%',
    interview: '10',
  },

  {
    total: 'All Tasks',
    employees: '90%',
    interview: '80',
  },

  {
    total: 'All Attendance',
    employees: '87%',
    interview: '47',
  },

  {
    total: 'All Leaves',
    employees: '88%',
    interview: '78',
  },

  {
    total: 'All Interviews',
    employees: '91%',
    interview: '84',
  },
];

const MyCards = () => {
  return (
    <Paper>
    <Paper sx={{marginLeft:"18%", marginTop:"-15cm", position:"fixed", backgroundColor:"#f9fbe7", marginRight:"12px"}}>
    <Grid container spacing={2}>
      {data.map((row, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card  marginLeft="2cm" sx={{width:"6cm", height:"4cm"}}>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Hexagon style={{ color: 'maroon' }} />
                <Typography variant="h6">{row.total}</Typography>
              </Box>
              <Box display="flex" alignItems="center" mt={1}>
                <ArrowUpwardIcon style={{ color: 'green', marginRight: 8 }} />
                <Typography variant="h5">{row.interview}</Typography>
              </Box>
              <Typography variant="body2" style={{ color: 'blue' }}>
                {row.employees}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </Paper>
    <Box sx={{ textAlign: 'center', padding: 2, marginTop: 2 }}>
        <Typography variant="body2">© 2024 EMS. All Rights Reserved</Typography>
      </Box>
    </Paper>
  );
};

export default MyCards;


