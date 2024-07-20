// import React, { useEffect, useState } from 'react';
// import { styled, alpha, useTheme } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import Button from '@mui/material/Button';
// import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
// import ToggleButton from '@mui/material/ToggleButton';
// import SchemaTwoToneIcon from '@mui/icons-material/SchemaTwoTone';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// import { Link } from 'react-router-dom'; 
// import axios from 'axios';
// import AncherDrawer from './Projectpopup';


// import Drawer from './Projectpopup';


// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   border: `1px solid ${alpha(theme.palette.common.black, 0.15)}`,
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: '60%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: '20%',
//   },
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: '#04000c',
//   width: '60%',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: theme.spacing(1),
//     transition: theme.transitions.create('width'),
//     [theme.breakpoints.up('sm')]: {
//       width: '20ch',
//       '&:focus': {
//         width: '30ch',
//       },
//     },
//     '&::placeholder': {
//       color: '#000080',
//       fontWeight: 'bold',
//       textAlign: 'left',
//     },
//   },
// }));

// const StyledButton = styled(Button)(({ theme }) => ({
//   paddingTop: theme.spacing(2),
//   backgroundColor: theme.palette.error.main,
//   '&:hover': {
//     backgroundColor: theme.palette.error.dark,
//   },
// }));

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   color: '#000080',
//   width: '10%',
//   padding: theme.spacing(1), 
//   whiteSpace: 'nowrap', 
// }));

// const columns = [
//   { id: 'Project Code', label: 'Project Code', width: '13%' },
//   { id: 'Project Name', label: 'Project Name', width: '13%' },
//   { id: 'Departmnet', label: 'Department', width: '13%' },
//   { id: 'Project Start Date', label: 'Project Start Date', width: '10%' },
//   { id: 'Project Deadline Date', label: 'Project Deadline Date', width: '20%' },
//   { id:'Team', label:'Team', width:'10%'},
//   { id: 'status', label: 'Status', width: '20%' },
//   { id: 'actions', label: 'Actions', width: '20%' },
//   { id: 'icon', label: <ChevronRightIcon />, width: '10%' },
// ];

// const RedButton = styled(Button)({
//   backgroundColor: 'red',
//   '&:hover': {
//     backgroundColor: 'darkred',
//   },
// });

// const ProjectPage = () => {
//   const theme = useTheme();
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [organizations, setOrganizations] = useState([]);

//   useEffect(() => {
//     fetchOrganizations(page, rowsPerPage);
//   }, [page, rowsPerPage]);

//   const fetchOrganizations = (page, rowsPerPage) => {
//     axios.get(`http://localhost:9999/allorganizations?page=${page}&limit=${rowsPerPage}`)
//       .then(response => {
//         setOrganizations(response.data);
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   };

//   const handlePreviousButtonClick = () => {
//     setPage(prevPage => Math.max(prevPage - 1, 0));
//   };

//   const handleNextButtonClick = () => {
//     setPage(prevPage => prevPage + 1);
//   };

//   return (
//     <Box   sx={{ flexGrow: 1, p: 5 }}>
//       <AppBar  position="static" sx={{ widthleft:'100vh',p: 1, backgroundColor: 'white'  }}>
//         <Toolbar sx={{ justifyContent: 'space-between' }}>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: '#000080', fontWeight: 'bold' }}
//           >
//             All Projects
//           </Typography>
//           <Search>
//             <StyledInputBase
//               placeholder="Search"
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </Search>
//         </Toolbar>
//       </AppBar>
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '35px' }}>
//         <StyledButton variant="contained" startIcon={<AddCircleOutlineOutlinedIcon />} sx={{ paddingBottom: '10px' }}>
//         {/* <AnchorTemporaryDrawer/> */}
//         <AncherDrawer/>
//         </StyledButton>
//         <ToggleButtonGroup exclusive aria-label="view toggle">
//           <ToggleButton value="schema" aria-label="schema view" sx={{ backgroundColor: 'black', '&:hover': { backgroundColor: 'darkgray' } }}>
//             <FormatListBulletedIcon sx={{ color: 'white' }} />
//           </ToggleButton>
//           <ToggleButton value="list" aria-label="list view">
//             <SchemaTwoToneIcon />
//           </ToggleButton>
//         </ToggleButtonGroup>
//       </Box>
//       <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '35px' }}>
//         <TableContainer sx={{ height: 340 }}>
//           <Table stickyHeader aria-label="sticky table">
//             <TableHead>
//               <TableRow>
//                 {columns.map(column => (
//                   <StyledTableCell key={column.id} align={column.align} style={{ width: column.width, fontWeight: 'bold' }}>
//                     {column.label}
//                   </StyledTableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {organizations.map(row => (
//                 <TableRow hover role="checkbox" tabIndex={-1} key={row.organizationId}>
//                   <StyledTableCell>{row.organizationId}</StyledTableCell>
//                   <StyledTableCell>{row.name}</StyledTableCell>
//                   <StyledTableCell>{row.status}</StyledTableCell>
//                   <StyledTableCell>
//                     <Link style={{ textDecoration: 'none', color: 'blue' }}> 
                  
//                     <Drawer/>
            
//                     </Link>
//                   </StyledTableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
//           <Button
//             onClick={handlePreviousButtonClick}
//             sx={{ color: '#000080', fontWeight: 'bold', backgroundColor: 'whitesmoke', marginRight: '8px' }}
//             className="customButton"
//             disabled={page === 0}
//           >
//             Previous
//           </Button>
//           <RedButton
//             onClick={handleNextButtonClick}
//             sx={{
//               color: '#000080',
//               fontWeight: 'bold',
//               marginRight: '8px',
//             }}
//             className="customButton"
//           >
//             {page + 1}
//           </RedButton>
//           <Button
//             onClick={handleNextButtonClick}
//             sx={{ color: '#000080', fontWeight: 'bold', backgroundColor: 'whitesmoke', marginRight: '8px' }}
//             className="customButton"
//           >
//             Next
//           </Button>
//         </Box>
//       </Paper>
//     </Box>
//   );
// }

// export default ProjectPage;



import React, { useEffect, useState } from 'react';
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
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ToggleButton from '@mui/material/ToggleButton';
import SchemaTwoToneIcon from '@mui/icons-material/SchemaTwoTone';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import Drawer from './Projectpopup';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  border: `1px solid ${alpha(theme.palette.common.black, 0.15)}`,
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '60%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '20%',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#04000c',
  width: '60%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: theme.spacing(1),
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
      textAlign: 'left',
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
  padding: theme.spacing(1), 
  whiteSpace: 'nowrap', 
}));

const columns = [
  { id: 'projectCode', label: 'Project Code', width: '13%' },
  { id: 'projectName', label: 'Project Name', width: '13%' },
  { id: 'department', label: 'Department', width: '13%' },
  { id: 'projectStartDate', label: 'Project Start Date', width: '13%' },
  { id: 'projectDeadlineDate', label: 'Project Deadline Date', width: '20%' },
  { id: 'team', label: 'Team', width: '10%' },
  { id: 'status', label: 'Status', width: '10%' },
  { id: 'actions', label: 'Actions', width: '10%' },
  { id: 'icon', label: <ChevronRightIcon />, width: '1%' },
];

const RedButton = styled(Button)({
  backgroundColor: 'red',
  '&:hover': {
    backgroundColor: 'darkred',
  },
});

const ProjectPage = () => {
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects(page, rowsPerPage);
  }, [page, rowsPerPage]);

  const fetchProjects = (page, rowsPerPage) => {
    axios.get(`http://localhost:9191/allprojects?page=${page}&limit=${rowsPerPage}`)
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  const handlePreviousButtonClick = () => {
    setPage(prevPage => Math.max(prevPage - 1, 0));
  };

  const handleNextButtonClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 5 }}>
      <AppBar position="static" sx={{ p: 1, backgroundColor: 'white' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: '#000080', fontWeight: 'bold' }}
          >
            All Projects
          </Typography>
          <Search>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '35px' }}>
        <StyledButton variant="contained" startIcon={<AddCircleOutlineOutlinedIcon />} sx={{ paddingBottom: '10px' }}>
          <Drawer/>
        </StyledButton>
        <ToggleButtonGroup exclusive aria-label="view toggle">
          <ToggleButton value="schema" aria-label="schema view" sx={{ backgroundColor: 'black', '&:hover': { backgroundColor: 'darkgray' } }}>
            <FormatListBulletedIcon sx={{ color: 'white' }} />
          </ToggleButton>
          <ToggleButton value="list" aria-label="list view">
            <SchemaTwoToneIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '35px' }}>
        <TableContainer sx={{ height: 340 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <StyledTableCell key={column.id} align={column.align} style={{ width: column.width, fontWeight: 'bold' }}>
                    {column.label}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.map(row => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.projectCode}>
                  <StyledTableCell>{row.projectCode}</StyledTableCell>
                  <StyledTableCell>{row.projectName}</StyledTableCell>
                  <StyledTableCell>{row.department}</StyledTableCell>
                  <StyledTableCell>{row.projectStartDate}</StyledTableCell>
                  <StyledTableCell>{row.projectDeadlineDate}</StyledTableCell>
                  <StyledTableCell>{row.team}</StyledTableCell>
                  <StyledTableCell>{row.status}</StyledTableCell>
                  <StyledTableCell>
                    <Link style={{ textDecoration: 'none', color: 'blue' }}>
                      <Drawer />
                    </Link>
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
          <Button
            onClick={handlePreviousButtonClick}
            sx={{ color: '#000080', fontWeight: 'bold', backgroundColor: 'whitesmoke', marginRight: '8px' }}
            className="customButton"
            disabled={page === 0}
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
            sx={{ color: '#000080', fontWeight: 'bold', backgroundColor: 'whitesmoke', marginRight: '8px' }}
            className="customButton"
          >
            Next
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default ProjectPage;
