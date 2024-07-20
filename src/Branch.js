


import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import TextField from '@mui/material/TextField';
import Drawer from '@mui/material/Drawer';

function createData(name, branchName, location, parentOrg, status, action) {
  return { name, branchName, location, parentOrg, status, action };
}

const initialRows = [
  createData('AC456', 'hitech-city branch', 'Hitech-city', 'Madhapur', 'Active', 'Edit'),
  createData('AC457', 'finance branch', 'Financial District', 'Madhapur', 'Active', 'Edit'),
  createData('AC458', 'tech park branch', 'Tech Park', 'Gachibowli', 'Active', 'Edit'),
];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'whitesmoke',
  '&:hover': {
    backgroundColor: 'whitesmoke',
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

export default function Branch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [rows, setRows] = useState(initialRows);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentBranch, setCurrentBranch] = useState(null);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    filterRows(event.target.value);
  };

  const filterRows = (query) => {
    const filteredRows = initialRows.filter((row) =>
      row.branchName.toLowerCase().includes(query.toLowerCase())
    );
    setRows(filteredRows);
  };

  const toggleDrawer = (open, branch = null) => () => {
    setCurrentBranch(branch);
    setDrawerOpen(open);
  };

  return (
    <Box sx={{marginLeft:"30%", flexGrow: 1,marginTop:-70, width: 880}}>
      <AppBar position="static" sx={{ bgcolor: 'white', color: 'black' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            All Branch
          </Typography>
          <Search>
            <TextField
              label="Search"
              variant="outlined"
              size="small"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Box>
        <Button 
          sx={{ margin: 3, marginLeft: 0, backgroundColor: 'red' }} 
          variant="contained" 
          startIcon={<AddCircleOutlineIcon />} 
          onClick={toggleDrawer(true)} 
        >
          Add Branch
        </Button>
      </Box>
      <Box sx={{ float: 'right', marginTop: -5 }}>
        <FormatListBulletedIcon />
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>Branch ID</TableCell>
              <TableCell align="right">Branch Name</TableCell>
              <TableCell align="right">Branch Location</TableCell>
              <TableCell align="right">Parent Org</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.branchName}</TableCell>
                <TableCell align="right">{row.location}</TableCell>
                <TableCell align="right">{row.parentOrg}</TableCell>
                <TableCell align="right">
                  <span style={{ color: row.status === 'Active' ? 'red' : 'inherit' }}>{row.status}</span>
                </TableCell>
                <TableCell align="right">
                  <Button onClick={toggleDrawer(true, row)}>Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <caption>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              <Button variant="contained" sx={{ marginRight: 1, backgroundColor: 'whitesmoke', color: 'black' }}>Previous</Button>
              <Pagination count={1} shape="rounded" hidePrevButton hideNextButton sx={{ backgroundColor: 'red', color: 'black', borderRadius: '5px' }} />
              <Button variant="contained" sx={{ marginLeft: 1, backgroundColor: 'whitesmoke', color: 'black' }}>Next</Button>
            </Box>
          </caption>
        </Table>
      </TableContainer>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: '40%', 
          }
        }}
      >
        {/* <AddBranch branch={currentBranch} /> */}
      </Drawer>
    </Box>
  );
}

