

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import EditOrganizationForm from './EditOrganizationForm';
// import { Link } from 'react-router-dom';
// import AddProfile from './Addprofile';
// import { Button } from '@mui/material';

// export default function AnchorDrawer() {
//   const [state, setState] = React.useState({
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const closeDrawer = () => {
//     setState({ right: false });
//   };

//   const list = (anchor) => (
//     <Box>
//       <AddProfile closeDrawer={closeDrawer} />
//     </Box>
//   );

//   return (
//     <div>
//       {['right'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button variant='contained' color='error'>
//           <Link color='white' onClick={toggleDrawer(anchor, true)}>AddProfile</Link>
//           </Button>
//           <Drawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}>
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }








