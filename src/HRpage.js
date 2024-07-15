


import React, { useState } from 'react';
import {
  Container,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Link,
  Pagination,
  Drawer,
  ButtonBase
} from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheck, FaTimes } from 'react-icons/fa';

const dummyData = [
  { HRId: 1, HRName: "John Doe", Department: "HR", Role: "Manager", Org: "ABC Corp", Status: "Active", Action: "Edit" },
  { HRId: 2, HRName: "Jane Smith", Department: "Finance", Role: "Analyst", Org: "XYZ Ltd", Status: "Inactive", Action: "Edit" },
  { HRId: 3, HRName: "Michael Brown", Department: "IT", Role: "Developer", Org: "Tech Solutions", Status: "Active", Action: "Edit" },
  { HRId: 4, HRName: "Emily Johnson", Department: "Marketing", Role: "Coordinator", Org: "Creative Inc", Status: "Active", Action: "Edit" },
];

const reportOptions = [
  { value: 10, label: "Monthly Report" },
  { value: 20, label: "Quarterly Report" },
  { value: 30, label: "Annual Report" },
];

const AddProfile = ({ closeDrawer }) => {
  const [candidateName, setCandidateName] = useState('');
  const [contact, setContact] = useState('');
  const [roleApplyingFor, setRoleApplyingFor] = useState('active');
  const [qualification, setQualification] = useState('');
  const [errors, setErrors] = useState({});

  const handleSave = () => {
    const newErrors = {};

    if (!candidateName) newErrors.candidateName = 'Please fill out this field';
    if (!contact) newErrors.contact = 'Please fill out this field';
    else if (!/^\d{10}$/.test(contact)) newErrors.contact = 'Please enter a valid phone number';
    if (!qualification) newErrors.qualification = 'Please fill out this field';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log('Saving:', { candidateName, contact, qualification, roleApplyingFor });

      setCandidateName('');
      setContact('');
      setQualification('');
      setRoleApplyingFor('active');
      setErrors({});
      closeDrawer();
    }
  };

  const handleCancel = () => {
    setCandidateName('');
    setContact('');
    setQualification('');
    setRoleApplyingFor('active');
    setErrors({});
    closeDrawer();
  };

  return (
    <div className="p-4" style={{ width: '15cm', marginTop: '38px' }}>
      <hr />
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0" style={{ marginLeft: '1rem' }}>Add Profile</h5>
        <select className="form-select" style={{ width: '30%' }} value={roleApplyingFor} onChange={(e) => setRoleApplyingFor(e.target.value)}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <hr />
      <div className="mb-3">
        <input
          type="text"
          className="form-control mb-3"
          id="candidateName"
          placeholder="Enter Candidate Name"
          value={candidateName}
          onChange={(e) => setCandidateName(e.target.value)}
        />
        {errors.candidateName && <div className="text-danger">{errors.candidateName}</div>}
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control mb-3"
          id="contact"
          placeholder="Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        {errors.contact && <div className="text-danger">{errors.contact}</div>}
      </div>
      <div className="mb-3">
        <textarea
          className="form-control mb-3"
          id="qualification"
          placeholder="Qualification"
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
        />
        {errors.qualification && <div className="text-danger">{errors.qualification}</div>}
      </div>
      <div className="d-flex justify-content-start mt-3">
        <button
          style={{ backgroundColor: 'lightgrey', display: 'flex', alignItems: 'center' }}
          className="btn me-2"
          onClick={handleSave}
        >
          <FaCheck style={{ color: 'green' }} /> Save
        </button>
        <button className="btn btn-outline-danger" onClick={handleCancel}>
          <FaTimes /> Cancel
        </button>
      </div>
    </div>
  );
};

const AnchorDrawer = () => {
  const [state, setState] = useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const closeDrawer = () => {
    setState({ right: false });
  };

  const list = (anchor) => (
    <Box>
      <AddProfile closeDrawer={closeDrawer} />
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button variant='contained' color='error' onClick={toggleDrawer(anchor, true)}>
           + AddProfile
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

function HRpage1() {
  return (
    <Container>
      <Box  display="flex" justifyContent="space-between" alignItems="center" py={5}>
        <Button variant="contained" color="error">Employee Records</Button>
        <FormControl
          variant="outlined"
          sx={{
            minWidth: 200,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            height: '3cm',
          }}
        >
          <Button>
          <InputLabel variant="filled">Reports</InputLabel>
          <Select label="Reports">
            {reportOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          </Button>
        </FormControl>
        <AnchorDrawer />
      </Box>

      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>HRId</TableCell>
              <TableCell>HRName</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Org</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyData.map((row) => (
              <TableRow key={row.HRId}>
                <TableCell>{row.HRId}</TableCell>
                <TableCell>{row.HRName}</TableCell>
                <TableCell>{row.Department}</TableCell>
                <TableCell>{row.Role}</TableCell>
                <TableCell>{row.Org}</TableCell>
                <TableCell>{row.Status}</TableCell>
                <TableCell>{row.Action}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box display="flex" justifyContent="space-between" marginTop={2}>
        <Pagination count={10} variant="outlined" color="primary" />
      </Box>
    </Container>
  );
}

export default HRpage1;
