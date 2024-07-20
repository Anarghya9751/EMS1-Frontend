
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Icon from '@mui/material/Icon';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import Drawer from '@mui/material/Drawer';

const columns = [
  { id: 'departmentId', label: 'Department ID', minWidth: 170 },
  { id: 'name', label: 'Department Name', minWidth: 100 },
  { id: 'branchId', label: 'Parent Branch', minWidth: 170, align: 'right' },
  { id: 'organizationId', label: 'Parent Org', minWidth: 170, align: 'right' },
  { id: 'status', label: 'Status', minWidth: 170, align: 'right' },
  { id: 'actions', label: 'Actions', minWidth: 170, align: 'right' }
];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  border: `1px solid ${alpha(theme.palette.common.black, 0.25)}`,
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '25%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#04000c',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const RedButton = styled(Button)({
  backgroundColor: 'red',
  '&:hover': {
    backgroundColor: 'darkred',
  },
});

const Department = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:9192/getAllDepartments');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handlePreviousButtonClick = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextButtonClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Box sx={{ backgroundColor: '#faf9f5', backgroundSize: 'hover', height: '100vh', width: '100vw' }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{ backgroundColor: 'white', width: '70%', marginLeft: '1%', marginTop: '30px' }}>
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
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: 'black' }}
              >
                All Departments
              </Typography>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </Toolbar>
          </AppBar>
        </Box>
        <Box sx={{ paddingTop: '30px', marginLeft: '1%', width: '90%' }}>
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              sx={{ backgroundColor: 'red', marginTop: '-20px' }}
              onClick={() => setDrawerOpen(true)}
            >
              <Icon sx={{ paddingBottom: '50px' }}>+</Icon>
              Add Department
            </Button>
            <ToggleButtonGroup
              exclusive
              aria-label="text alignment"
            >
              <ToggleButton value="left" aria-label="left aligned" sx={{ marginLeft: '550px' }}>
                <FormatAlignLeftIcon />
              </ToggleButton>
              <ToggleButton value="left" aria-label="left aligned" sx={{ marginLeft: '650px' }}>
                <AccountTreeIcon sx={{ paddingBottom: '2px', marginRight: '8px' }} />
              </ToggleButton>
            </ToggleButtonGroup>
          </Stack>
        </Box>
        <Box sx={{ paddingTop: '60px', marginLeft: "1%" }}>
          <Paper sx={{ width: '70%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ fontWeight: 'bold' }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.departmentId}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={column.id === 'actions' ? { color: 'red' } : {}}
                          >
                            {column.id === 'actions' ? (
                              <Button
                                variant="contained"
                                sx={{ backgroundColor: 'black', color: 'white' }}
                                onClick={() => console.log('Edit button clicked for', row.departmentId)}
                              >
                                Edit
                              </Button>
                            ) : (
                              column.format && typeof value === 'number'
                                ? column.format(value)
                                : value
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
              <Button
                onClick={handlePreviousButtonClick}
                disabled={page === 0}
                sx={{
                  color: '#000080',
                  fontWeight: 'bold',
                  backgroundColor: 'whitesmoke',
                }}
                className="customButton"
              >
                Previous
              </Button>
              <RedButton
                onClick={handleNextButtonClick}
                disabled={(page + 1) * rowsPerPage >= data.length}
                sx={{
                  color: '#000080',
                  fontWeight: 'bold',
                }}
                className="customButton"
              >
                {page + 1}
              </RedButton>
              <Button
                onClick={handleNextButtonClick}
                disabled={(page + 1) * rowsPerPage >= data.length}
                sx={{
                  color: '#000080',
                  fontWeight: 'bold',
                  backgroundColor: 'whitesmoke',
                }}
                className="customButton"
              >
                Next
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: '40%',
          }
        }}
      >
      </Drawer>
    </>
  );
};

export default Department;

