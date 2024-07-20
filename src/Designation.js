import React, { useState } from 'react';
import { styled, alpha, useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SchemaTwoToneIcon from '@mui/icons-material/SchemaTwoTone';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Drawer from '@mui/material/Drawer';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaTimesCircle } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegCircleXmark } from "react-icons/fa6";

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

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#04000c',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '20ch',
            '&:focus': {
                width: '30ch',
            },
        },
        '&::placeholder': {
            color: '#000080',
            fontWeight: 'bold',
        },
    },
}));

const StyledButton = styled(Button)(({ theme }) => ({
    paddingTop: theme.spacing(2),
    backgroundColor: theme.palette.error.main,
    '&:hover': {
        backgroundColor: theme.palette.error.dark,
    },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    color: '#000080',
    width: '10%',
}));

const StatusTableCell = styled(TableCell)(({ theme }) => ({
    color: 'red',
    width: '10%',
}));

const columns = [
    { id: 'designationId', label: 'Designation ID' },
    { id: 'designationName', label: 'Designation Name' },
    { id: 'parentBranch', label: 'Parent Branch' },
    { id: 'parentDepartment', label: 'Parent Department' }, // Added Parent Department column
    { id: 'parentOrganization', label: 'Parent Organization' },
    { id: 'status', label: 'Status' },
    { id: 'actions', label: 'Actions' },
    { id: 'icon', label: <ChevronRightIcon /> },
];

function createData(designationId, designationName, parentBranch, parentDepartment, parentOrganization, status, actions) {
    return { designationId, designationName, parentBranch, parentDepartment, parentOrganization, status, actions };
}

const rows = [
    createData('DESG5692', 'Manager', 'Bangalore', 'HR', 'Anarghya_BLR', 'Active', 'Edit'),
    createData('DESG5693', 'Assistant', 'Hyderabad', 'Finance', 'Anarghya_HYD', 'Active', 'Edit'),
];

const RedButton = styled(Button)({
    backgroundColor: 'red',
    '&:hover': {
        backgroundColor: 'darkred',
    },
});

function Designation() {
    const theme = useTheme();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [drawerContent, setDrawerContent] = useState('');

    const [status, setStatus] = useState('');
    const [parentBranch, setParentBranch] = useState('');
    const [parentDepartment, setParentDepartment] = useState('');
    const [parentOrganization, setParentOrganization] = useState('');
    const [designationName, setDesignationName] = useState('');
    
    const [designationNameError, setDesignationNameError] = useState('');
    const [statusError, setStatusError] = useState('');
    const [parentBranchError, setParentBranchError] = useState('');
    const [parentDepartmentError, setParentDepartmentError] = useState('');
    const [parentOrganizationError, setParentOrganizationError] = useState('');

    const handlePreviousButtonClick = () => {
        setPage((prevPage) => prevPage - 1);
    };

    const handleNextButtonClick = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const toggleDrawer = (content) => {
        setDrawerContent(content);
        setDrawerOpen(!drawerOpen);
    };

    const validateDesignationName = (name) => {
        const regex = /^[A-Za-z\s]+$/;
        return regex.test(name);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        if (!validateDesignationName(designationName)) {
            setDesignationNameError('Designation Name must contain only characters');
            valid = false;
        } else {
            setDesignationNameError('');
        }

        if (status === '') {
            setStatusError('Status is required');
            valid = false;
        } else {
            setStatusError('');
        }

        if (parentBranch === '') {
            setParentBranchError('Parent Branch is required');
            valid = false;
        } else {
            setParentBranchError('');
        }

        if (parentDepartment === '') {
            setParentDepartmentError('Parent Department is required');
            valid = false;
        } else {
            setParentDepartmentError('');
        }

        if (parentOrganization === '') {
            setParentOrganizationError('Parent Organization is required');
            valid = false;
        } else {
            setParentOrganizationError('');
        }

        if (valid) {
            // Submit form
            const data={
               designationName,
               parentBranch,
               status,
               parentOrganization,
               parentDepartment,

            }
            const response=axios.post('http://localhost:8080/addDesignation',data);
            if(response.status===200){
                alert("Updated Successfully");
            }else{
                console.log("error occured");
            }
            alert("Updated successfully");

        }
    };

    return (
        <Box sx={{position:"fixed", flexGrow: 1, p: 5 }}>
            <AppBar position="static" sx={{ p: 1, backgroundColor: 'white' }} style={{ width: "95%", marginLeft: "-1cm" }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: '#000080', fontWeight: 'bold' }}
                    >
                        All Designations
                    </Typography>
                    <Search style={{ marginLeft: "16cm" }}>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '35px' }}>
                <StyledButton variant="contained" startIcon={<AddCircleOutlineOutlinedIcon />} sx={{ paddingBottom: '10px', marginLeft: '-1cm' }} onClick={() => toggleDrawer('Add Designation')}>
                    Add Designation
                </StyledButton>
                <ToggleButtonGroup
                    exclusive
                    aria-label="view toggle"
                >
                    <ToggleButton
                        value="schema"
                        aria-label="schema view"
                        sx={{
                            backgroundColor: 'black',
                            '&:hover': {
                                backgroundColor: 'darkgray',
                            }
                        }}
                    >
                        <FormatListBulletedIcon sx={{ color: 'white' }} />
                    </ToggleButton>

                    <ToggleButton value="list" aria-label="list view">
                        <SchemaTwoToneIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>

            <Paper sx={{ width: '95%', overflow: 'hidden', marginTop: '35px', marginLeft: '-1cm' }}>
                <TableContainer sx={{ height: 250 }} >
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <StyledTableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ fontWeight: 'bold' }}
                                    >
                                        {column.label}
                                    </StyledTableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.designationId}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            if (column.id === 'status') {
                                                return (
                                                    <StatusTableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </StatusTableCell>
                                                );
                                            } else if (column.id === 'actions') {
                                                return (
                                                    <StyledTableCell key={column.id} align={column.align}>
                                                        <Link to="" variant="contained" onClick={() => toggleDrawer('Edit Designation')}>{value}</Link>
                                                    </StyledTableCell>
                                                );
                                            } else {
                                                return (
                                                    <StyledTableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </StyledTableCell>
                                                );
                                            }
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
                    <Button
                        onClick={handlePreviousButtonClick}
                        sx={{
                            color: '#000080',
                            fontWeight: 'bold',
                            backgroundColor: 'whitesmoke',
                            marginRight: '8px',
                        }}
                        className="customButton"
                    >
                        Previous
                    </Button>
                    <RedButton
                        onClick={handleNextButtonClick}
                        sx={{
                            color: '#000080',
                            fontWeight: 'bold',
                            marginRight: '8px',
                        }}
                        className="customButton"
                    >
                        {page + 1}
                    </RedButton>
                    <Button
                        onClick={handleNextButtonClick}
                        sx={{
                            color: '#000080',
                            fontWeight: 'bold',
                            backgroundColor: 'whitesmoke',
                            marginRight: '8px',
                        }}
                        className="customButton"
                    >
                        Next
                    </Button>
                </Box>
            </Paper>

            <Drawer
                anchor='right'
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            > <div className="popup-container" >
                <button className="close-button mt-10" onClick={() => setDrawerOpen(false)} style={{ borderTopLeftRadius: "30px", borderBottomLeftRadius: "30px", backgroundColor: "red", color: "white" }}>
                    <FaTimesCircle style={{ marginTop: "5px" }} />Close
                </button>
            </div>
                <Box
                    sx={{ width: 600, padding: 2, marginTop: "3cm" }}
                    role="presentation"
                >


                    <Typography variant="h6" gutterBottom style={{ fontWeight: "bold", marginLeft: "3cm", marginTop: "-1.5cm" }}>
                        {drawerContent}
                    </Typography>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <FormControl fullWidth margin="normal" style={{ width: "3cm", marginLeft: "12cm", marginTop: "-1cm", height: "0.2cm" }}>
                            <InputLabel>Status</InputLabel>
                            <Select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                <MenuItem value="Active">Active</MenuItem>
                                <MenuItem value="Inactive">Inactive</MenuItem>
                            </Select>
                            {statusError && <Typography variant="caption" color="error">{statusError}</Typography>}
                        </FormControl>
                        <TextField
                            label="Designation Name"
                            fullWidth
                            margin="normal"
                            value={designationName}
                            onChange={(e) => setDesignationName(e.target.value)}
                            error={Boolean(designationNameError)}
                            helperText={designationNameError}
                        />
                        <FormControl fullWidth margin="normal" style={{ width: "6cm" }}>
                            <InputLabel>Parent Branch</InputLabel>
                            <Select
                                value={parentBranch}
                                onChange={(e) => setParentBranch(e.target.value)}
                            >
                                <MenuItem value="Bangalore">Bangalore</MenuItem>
                                <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                            </Select>
                            {parentBranchError && <Typography variant="caption" color="error">{parentBranchError}</Typography>}
                        </FormControl>
                        <FormControl fullWidth margin="normal" style={{ width: "6cm", marginLeft: "8cm", marginTop: "-1.7cm" }} >
                            <InputLabel id="demo-simple-select-helper-label" >Parent Department</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={parentDepartment}
                                onChange={(e) => setParentDepartment(e.target.value)}
                            >
                                <MenuItem value="HR">HR</MenuItem>
                                <MenuItem value="Finance">Finance</MenuItem>
                            </Select>
                            {parentDepartmentError && <Typography variant="caption" color="error">{parentDepartmentError}</Typography>}
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Parent Organization</InputLabel>
                            <Select
                                value={parentOrganization}
                                onChange={(e) => setParentOrganization(e.target.value)}
                            >
                                <MenuItem value="Anarghya_BLR">Anarghya_BLR</MenuItem>
                                <MenuItem value="Anarghya_HYD">Anarghya_HYD</MenuItem>
                            </Select>
                            {parentOrganizationError && <Typography variant="caption" color="error">{parentOrganizationError}</Typography>}
                        </FormControl>
                        <div style={{ marginTop: "100px" }}>
                            <button type="submit" className="btn btn-outline bg-body-secondary"><FaRegCircleCheck style={{ backgroundColor: "green", borderRadius: "50%", color: "white" }} />Save</button>
                            <button type="button" className="btn btn-outline bg-body-secondary" style={{ marginLeft: "4cm" }} onClick={() => setDrawerOpen(false)}><FaRegCircleXmark style={{ backgroundColor: "red", borderRadius: "50%", color: "white" }} />Cancel</button>
                        </div>
                    </form>
                </Box>
            </Drawer>
        </Box>
    );
}

export default Designation;
