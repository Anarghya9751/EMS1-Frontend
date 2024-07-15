// // // import * as React from 'react';
// // // import { useState } from 'react';
// // // import {
// // //   TextField,
// // //   Button,
// // //   FormControl,
// // //   InputLabel,
// // //   Select,
// // //   MenuItem,
// // //   Box,
// // //   Typography,
// // //   Chip,
// // // } from '@mui/material';

// // // const AddProject = () => {
// // //   const [projectName, setProjectName] = useState('');
// // //   const [shortcode, setShortcode] = useState('');
// // //   const [department, setDepartment] = useState('');
// // //   const [client, setClient] = useState('');
// // //   const [projectSummary, setProjectSummary] = useState('');
// // //   const [startDate, setStartDate] = useState('');
// // //   const [deadlineDate, setDeadlineDate] = useState('');
// // //   const [teamMembers, setTeamMembers] = useState([]);
// // //   const [budget, setBudget] = useState('');
// // //   const [currency, setCurrency] = useState('');
// // //   const [hoursEstimate, setHoursEstimate] = useState('');
// // //   const [weeksEstimate, setWeeksEstimate] = useState('');
// // //   const [monthsEstimate, setMonthsEstimate] = useState('');

// // //   const handleChange = (event) => {
// // //     const { name, value } = event.target;
// // //     if (name === 'projectName') {
// // //       setProjectName(value);
// // //     } else if (name === 'shortcode') {
// // //       setShortcode(value);
// // //     } else if (name === 'department') {
// // //       setDepartment(value);
// // //     } else if (name === 'client') {
// // //       setClient(value);
// // //     } else if (name === 'projectSummary') {
// // //       setProjectSummary(value);
// // //     } else if (name === 'startDate') {
// // //       setStartDate(value);
// // //     } else if (name === 'deadlineDate') {
// // //       setDeadlineDate(value);
// // //     } else if (name === 'budget') {
// // //       setBudget(value);
// // //     } else if (name === 'currency') {
// // //       setCurrency(value);
// // //     } else if (name === 'hoursEstimate') {
// // //       setHoursEstimate(value);
// // //     } else if (name === 'weeksEstimate') {
// // //       setWeeksEstimate(value);
// // //     } else if (name === 'monthsEstimate') {
// // //       setMonthsEstimate(value);
// // //     }
// // //   };

// // //   const handleAddTeamMember = (event) => {
// // //     const newTeamMember = event.target.value.trim();
// // //     if (newTeamMember) {
// // //       setTeamMembers([...teamMembers, newTeamMember]);
// // //       event.target.value = '';
// // //     }
// // //   };

// // //   const handleDeleteTeamMember = (chipToDelete) => {
// // //     setTeamMembers((chips) => chips.filter((chip) => chip !== chipToDelete));
// // //   };

// // //   return (
// // //     <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
// // //       <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
// // //         <Typography variant="h2">Add Project</Typography>
// // //         <Typography variant="h3">Active</Typography>
// // //       </Box>
// // //       <Box sx={{ width: '100%', mt: 3 }}>
// // //         <Typography variant="h3">Project Details</Typography>
// // //         <TextField
// // //           label="Project Name"
// // //           name="projectName"
// // //           value={projectName}
// // //           onChange={handleChange}
// // //           margin="normal"
// // //           fullWidth
// // //           required
// // //         />
// // //         <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
// // //           <TextField
// // //             label="Short Code (add a short name)"
// // //             name="shortcode"
// // //             value={shortcode}
// // //             onChange={handleChange}
// // //             margin="normal"
// // //             sx={{ flex: 1, mr: 2 }}
// // //             required
// // //           />
// // //           <FormControl fullWidth sx={{ flex: 1 }}>
// // //             <InputLabel id="department-select-label">Department</InputLabel>
// // //             <Select
// // //               labelId="department-select-label"
// // //               id="department-select"
// // //               value={department}
// // //               label="Department"
// // //               onChange={handleChange}
// // //               name="department"
// // //               required
// // //             >
// // //               <MenuItem value={'department1'}>Department 1</MenuItem>
// // //               <MenuItem value={'department2'}>Department 2</MenuItem>
// // //             </Select>
// // //           </FormControl>
// // //         </Box>
// // //         <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
// // //           <TextField
// // //             label="Project Unique Short Code"
// // //             name="projectUniqueShortCode"
// // //             value="auto generated"  
// // //             onChange={handleChange}
// // //             margin="normal"
// // //             sx={{ flex: 1, mr: 2 }}
// // //             disabled
// // //           />
// // //           <FormControl fullWidth sx={{ flex: 1 }}>
// // //             <InputLabel id="client-select-label">Select Client</InputLabel>
// // //             <Select
// // //               labelId="client-select-label"
// // //               id="client-select"
// // //               value={client}
// // //               label="Select Client"
// // //               onChange={handleChange}
// // //               name="client"
// // //               required
// // //             >
// // //               <MenuItem value={'client1'}>Client 1</MenuItem>
// // //               <MenuItem value={'client2'}>Client 2</MenuItem>
// // //             </Select>
// // //           </FormControl>
// // //         </Box>
// // //         <TextField
// // //           label="Project Summary"
// // //           name="projectSummary"
// // //           value={projectSummary}
// // //           onChange={handleChange}
// // //           margin="normal"
// // //           fullWidth
// // //           multiline
// // //           minRows={4}
// // //           required
// // //         />
// // //         <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
// // //           <TextField
// // //             label="Project Start Date"
// // //             name="startDate"
// // //             value={startDate}
// // //             onChange={handleChange}
// // //             margin="normal"
// // //             sx={{ flex: 1, mr: 2 }}
// // //             required
// // //             type="date"
// // //             InputLabelProps={{ shrink: true }}
// // //           />
// // //           <TextField
// // //             label="Project Deadline Date"
// // //             name="deadlineDate"
// // //             value={deadlineDate}
// // //             onChange={handleChange}
// // //             margin="normal"
// // //             sx={{ flex: 1 }}
// // //             required
// // //             type="date"
// // //             InputLabelProps={{ shrink: true }}
// // //           />
// // //         </Box>
// // //         <Typography variant="h5" mt={3}>
// // //           Team Details
// // //         </Typography>
// // //         <FormControl fullWidth>
// // //           <TextField
// // //             label="Add Team Members"
// // //             name="teamMembers"

// // //             value=""
// // //             onChange={handleAddTeamMember}
// // //             margin="normal"
// // //             placeholder="Type name to search"
// // //           />
// // //         </FormControl>
// // //         <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap' }}>
// // //           {teamMembers.map((chip) => (
// // //             <Chip
// // //               key={chip}
// // //               label={chip}
// // //               onDelete={() => handleDeleteTeamMember(chip)}
// // //               sx={{ mr: 1, mb: 1 }}
// // //             />
// // //           ))}
// // //         </Box>
// // //         <Typography variant="h5" mt={3}>
// // //           Budget Details
// // //         </Typography>
// // //         <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
// // //           <FormControl fullWidth sx={{ flex: 1, mr: 2 }}>
// // //             <InputLabel id="currency-select-label">Currency</InputLabel>
// // //             <Select
// // //               labelId="currency-select-label"
// // //               id="currency-select"
// // //               value={currency}
// // //               label="Currency"
// // //               onChange={handleChange}
// // //               name="currency"
// // //               required
// // //             >
// // //               <MenuItem value={'USD'}>USD</MenuItem>
// // //               <MenuItem value={'EUR'}>EUR</MenuItem>
// // //               <MenuItem value={'INR'}>INR</MenuItem>
// // //             </Select>
// // //           </FormControl>
// // //           <TextField
// // //             label="Project Budget"
// // //             name="budget"
// // //             value={budget}
// // //             onChange={handleChange}
// // //             margin="normal"
// // //             sx={{ flex: 1 }}
// // //             required
// // //           />
// // //         </Box>
// // //         <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
// // //           <TextField
// // //             label="Hours Estimate"
// // //             name="hoursEstimate"
// // //             value={hoursEstimate}
// // //             onChange={handleChange}
// // //             margin="normal"
// // //             sx={{ flex: 1, mr: 2 }}
// // //             required
// // //           />
// // //           <TextField
// // //             label="Weeks Estimate"
// // //             name="weeksEstimate"
// // //             value={weeksEstimate}
// // //             onChange={handleChange}
// // //             margin="normal"
// // //             sx={{ flex: 1 }}
// // //             required
// // //           />
// // //         </Box>
// // //         <TextField
// // //           label="Months Estimate"
// // //           name="monthsEstimate"
// // //           value={monthsEstimate}
// // //           onChange={handleChange}
// // //           margin="normal"
// // //           fullWidth
// // //           required
// // //         />
// // //         <Button variant="contained" sx={{ mt: 3 }} disabled={
// // //           !projectName || !shortcode || !department || !client || !projectSummary ||
// // //           !startDate || !deadlineDate || !teamMembers.length || !currency ||
// // //           !budget || !hoursEstimate || !weeksEstimate || !monthsEstimate
// // //         }>
// // //           Create Project
// // //         </Button>
// // //       </Box>
// // //     </Box>
// // //   );
// // // };

// // // export default AddProject;

// import * as React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import HexagonOutlinedIcon from '@mui/icons-material/HexagonOutlined';
// import HexagonIcon from '@mui/icons-material/Hexagon';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import Box from '@mui/material/Box';
// import { BarChart } from '@mui/x-charts';
// import Divider from '@mui/material/Divider';
// // import { PieChart, Pie, Cell, Tooltip } from 'recharts';

// function Dashboard() {
//   const [timeFrame, setTimeFrame] = React.useState('Monthly');
//   // const [pieTimeFrame, setPieTimeFrame] = React.useState('Yearly 2024');

//   const cardContent = [
//     { title: 'Total Organisation', description: '1525', path: '/organizations', percentage: '22%', showIcon: true },
//     { title: 'Total Branch', description: '1132', path: '/branches', percentage: '10%' },
//     { title: 'Total Department', description: '865', path: '/departments', percentage: '15%' },
//     { title: 'Total Designation', description: '745', path: '/designations', percentage: '8%' },
//     { title: 'Total Employees', description: '245', path: '/employees', percentage: '5%' },
//     { title: 'Total Interview', description: '24', path: '/interviews', percentage: '2%' },
//     { title: 'Total Clients', description: '1525', path: '/clients', percentage: '22%', showIcon: true },
//     { title: 'Total Projects', description: '1132', path: '/projects', percentage: '10%' },
//     { title: 'All Tasks', description: '865', path: '/tasks', percentage: '15%' },
//     { title: 'All Attendance', description: '745', path: '/attendance', percentage: '8%' },
//     { title: 'All Leaves', description: '245', path: '/leaves', percentage: '5%' },
//     { title: 'All Interviews', description: '24', path: '/interviews', percentage: '2%' },
//   ];

//   const navigate = useNavigate();

//   const cards = cardContent.map((content, index) => (
//     <Grid item xs={12} sm={6} md={4} lg={2} key={index} sx={{ marginBottom: '60px' }}>
//       <Card
//         sx={{
//           height: '100%',
//           aspectRatio: 1,
//           cursor: 'pointer',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'space-between',
//           position: 'relative',
//         }}
//         onClick={() => navigate(content.path)}
//       >
//         <CardContent>
//           {content.showIcon &&
//             (index === 0 || index === 6 ? (
//               <HexagonIcon
//                 style={{
//                   fontSize: 30,
//                   position: 'absolute',
//                   top: 10,
//                   left: 10,
//                   color: '#880e4f',
//                 }}
//               />
//             ) : (
//               <HexagonOutlinedIcon
//                 style={{
//                   fontSize: 30,
//                   position: 'absolute',
//                   top: 10,
//                   left: 10,
//                 }}
//               />
//             ))}
//           <Typography variant="h6" component="div" sx={{ textAlign: 'right', color: '#7986cb', fontSize: '1rem' }}>
//             {content.title.split(' ').map((word, i) => (
//               <div key={i}>{word}</div>
//             ))}
//           </Typography>
//         </CardContent>
//         <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
//           <Typography variant="subtitle1" component="div" sx={{ color: '#7986cb' }}>
//             <span style={{ color: '#76ff03' }}>↑</span> {content.percentage}
//           </Typography>
//           <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: '#1a237e', mt: '-10px' }}>
//             {content.description}
//           </Typography>
//         </CardContent>
//       </Card>
//     </Grid>
//   ));

//   const rows = [];
//   for (let i = 0; i < cards.length; i += 6) {
//     rows.push(
//       <Grid container spacing={3} key={i}>
//         {cards.slice(i, i + 6)}
//       </Grid>
//     );
//   }

//   const currentYear = new Date().getFullYear();
//   const years = [];
//   for (let year = 2015; year <= currentYear; year++) {
//     years.push(`Yearly ${year}`);
//   }

//   const pieData = [
//     { value: 40, color: '#880e4f' },
//     { value: 35, color: '#01579b' },
//     { value: 20, color: '#ffc107' },
//     { value: 10, color: '#76ff03' },
//     { value: 20, color: '#ff9800' },
//   ];

//   const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
//     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//     const x = cx + radius * Math.cos(-midAngle (Math.PI / 180));
//     const y = cy + radius * Math.sin(-midAngle  (Math.PI / 180));

//     return (
//       <text
//         x={x}
//         y={y}
//         fill="white"
//         textAnchor={x > cx ? 'start' : 'end'}
//         dominantBaseline="central"
//       >
//         {`${(percent * 100).toFixed(0)}%`}
//       </text>
//     );
//   };

//   return (
//     <React.Fragment>
//       {rows.map((row, index) => (
//         <div key={index} style={{ padding: '20px', backgroundColor: '#f9fbe7' }}>
//           {row}
//         </div>
//       ))}
//       <div style={{ padding: '20px', backgroundColor: '#f9fbe7' }}>
//         <Grid container spacing={5}>
//           <Grid item xs={12} sm={12} md={6}>
//             <Card>
//               <CardContent>
//                 <Grid container spacing={1} alignItems="center" justifyContent="space-between">
//                   <Grid item>
//                     <Typography variant="h6">Status</Typography>
//                   </Grid>
//                   <Grid item>
//                     <Select
//                       // value={timeFrame}
//                       // onChange={(e) => setTimeFrame(e.target.valu
//                       variant="outlined"
//                       sx={{ minWidth: 120 }}
//                     >
//                       <MenuItem value="Monthly">Monthly</MenuItem>
//                       <MenuItem value="Weekly">Weekly</MenuItem>
//                       <MenuItem value="Daily">Daily</MenuItem>
//                     </Select>
//                   </Grid>
//                 </Grid>
//                 <Divider sx={{ my: 2 }} />
//                 <div style={{ padding: '20px', height: '220px', width: '100%' }}>
//                   <BarChart
//                     series={[
//                       { data: [2500, 3000, 2000, 2560, 4565, 3270], color: '#880e4f', description: 'Other' },
//                       { data: [4444, 2448, 4554, 3200, 2255, 2660], color: '#01579b', description: 'Other' },
//                       { data: [2224, 3230, 2535, 4640, 2500, 4500], color: '#ffc107', description: 'Other' },
//                       { data: [2440, 4400, 4450, 3650, 2455, 4260], color: '#76ff03', description: 'Other' },
//                       { data: [4020, 2545, 4350, 2255, 2560, 2665], color: '#ff9800', description: 'Other' },
//                     ]}
//                     height={200}
//                     xAxis={[{ data: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'], scaleType: 'band' }]}
//                     margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
//                   />
//                 </div>
//                 <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
//                   <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
//                     <Box
//                       sx={{
//                         width: 12,
//                         height: 12,
//                         backgroundColor: '#880e4f',
//                         borderRadius: '50%',
//                         display: 'inline-block',
//                         mr: 1,
//                       }}
//                     />
//                     <Typography variant="body2">Other</Typography>
//                   </Box>
//                   <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
//                     <Box
//                       sx={{
//                         width: 12,
//                         height: 12,
//                         backgroundColor: '#01579b',
//                         borderRadius: '50%',
//                         display: 'inline-block',
//                         mr: 1,
//                       }}
//                     />
//                     <Typography variant="body2">Other</Typography>
//                   </Box>
//                   <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
//                     <Box
//                       sx={{
//                         width: 12,
//                         height: 12,
//                         backgroundColor: '#ffc107',
//                         borderRadius: '50%',
//                         display: 'inline-block',
//                         mr: 1,
//                       }}
//                     />
//                     <Typography variant="body2">Other</Typography>
//                   </Box>
//                   <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
//                     <Box
//                       sx={{
//                         width: 12,
//                         height: 12,
//                         backgroundColor: '#76ff03',
//                         borderRadius: '50%',
//                         display: 'inline-block',
//                         mr: 1,
//                       }}
//                     />
//                     <Typography variant="body2">Other</Typography>
//                   </Box>
//                   <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
//                     <Box
//                       sx={{
//                         width: 12,
//                         height: 12,
//                         backgroundColor: '#ff9800',
//                         borderRadius: '50%',
//                         display: 'inline-block',
//                         mr: 1,
//                       }}
//                     />
//                     <Typography variant="body2">Other</Typography>
//                   </Box>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={12} md={6} style={{ marginLeft: '-1px' }}>
//             <Card sx={{ height: '100%' }}>
//               <CardContent>
//                 <Grid container spacing={1} alignItems="center" justifyContent="space-between">
//                   <Grid item>
//                     <Typography variant="h6">Status</Typography>
//                   </Grid>
//                   <Grid item>
//                     <Select
//                       value={pieTimeFrame}
//                       onChange={(e) => setPieTimeFrame(e.target.value)}
//                       variant="outlined"
//                       sx={{ minWidth: 120 }}
//                     >
//                       {years.map((year, index) => (
//                         <MenuItem key={index} value={year}>
//                           {year}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                   </Grid>
//                 </Grid>
//                 <Divider sx={{ my: 2 }} />
//                 <Typography variant="h6" style={{ paddingLeft: '-10px', textAlign: 'left', color: '#1a237e', fontSize: '20px' }}>
//                   {pieTimeFrame}
//                 </Typography>
//                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '5px' }}>
//                   <div style={{ textAlign: 'right', marginTop: '-70px' }}>
//                     <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'baseline' }}>
//                       <Typography variant="subtitle1" style={{ fontFamily: 'verdana' }}>
//                         ↑35%
//                       </Typography>
//                       <Typography variant="subtitle1" style={{ marginLeft: '5px', marginTop: '-35px',marginBottom:'215', fontFamily: 'verdana', color: '#1a237e' }}>
//                         <h1>1525</h1>
//                       </Typography>
//                     </div>
//                     <div style={{ textAlign: 'left', marginTop: '10px' }}>
//                       <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//                         <Box
//                           sx={{
//                             width: 12,
//                             height: 12,
//                             backgroundColor: '#880e4f',
//                             borderRadius: '50%',
//                             display: 'inline-block',
//                             mr: 1,
//                           }}
//                         />
//                         <Typography variant="body2">Other</Typography>
//                         <Box
//                           sx={{
//                             width: 12,
//                             height: 12,
//                             backgroundColor: '#01579b',
//                             borderRadius: '50%',
//                             display: 'inline-block',
//                             ml: 2,
//                             mr: 1,
//                           }}
//                         />
//                         <Typography variant="body2">Other</Typography>
//                         <Box
//                           sx={{
//                             width: 12,
//                             height: 12,
//                             backgroundColor: '#ffc107',
//                             borderRadius: '50%',
//                             display: 'inline-block',
//                             ml: 2,
//                             mr: 1,
//                           }}
//                         />
//                         <Typography variant="body2">Other</Typography>
//                       </Box>
//                       <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//                         <Box
//                           sx={{
//                             width: 12,
//                             height: 12,
//                             backgroundColor: '#76ff03',
//                             borderRadius: '50%',
//                             display: 'inline-block',
//                             mr: 1,
//                           }}
//                         />
//                         <Typography variant="body2">Other</Typography>
//                         <Box
//                           sx={{
//                             width: 12,
//                             height: 12,
//                             backgroundColor: '#ff9800',
//                             borderRadius: '50%',
//                             display: 'inline-block',
//                             ml: 2,
//                             mr: 1,
//                           }}
//                         />
//                         <Typography variant="body2">Other</Typography>
//                       </Box>
//                     </div>
//                   </div>
//                   <div style={{ padding: '-20px', height: '240px', width: '100%' }}>
//                     <PieChart width={400} height={300}>
//                       <Pie
//                         data={pieData}
//                         cx="60%"
//                         cy="50%"
//                         labelLine={false}
//                         label={renderCustomizedLabel}
//                         outerRadius={100}
//                         fill="#8884d8"
//                         dataKey="value"
//                         stroke="none"
//                       >
//                         {pieData.map((entry, index) => (
//                           <Cell key={`cell-${index}`} fill={entry.color} />
//                         ))}
//                       </Pie>
//                       <Tooltip />
//                     </PieChart>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </div>
//     </React.Fragment>
//   );
// }


// export default Dashboard;
