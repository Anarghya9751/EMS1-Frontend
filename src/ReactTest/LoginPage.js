

import React, { useState } from 'react';
import { TextField, Button, Typography, Link, Box, Card, CardContent, Container, IconButton, InputAdornment, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const LoginPage = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const navigate = useNavigate();


  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    let isValid = true;

    if (!userName) {
      setEmailError('Email must include @');
      isValid = false;
    } else if (!validateEmail(userName)) {
      setEmailError('Invalid email format.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required.');
      isValid = false;
    } else if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (!isValid) {
      setError('Please fix the errors above.');
      return;
    }

    // Assuming your backend endpoint for login is '/api/login'
    try {
      const response = await fetch('http://localhost:5252/api/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed.');
      }

      setSnackbarMessage('Login successful');
      setSnackbarOpen(true);
      setError('');
      navigate('/dashboard');
    } catch (error) {
      setSnackbarMessage('Login failed. Please try again.');
      setSnackbarOpen(true);
      setError('Login failed. Please try again.');
      console.error('Login error:', error);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <Container style={{ display: 'flex', minHeight: '100vh', padding: 0 }}>
      <Box 
        style={{ 
          flex: 1, 
          backgroundImage: 'url(https://th.bing.com/th/id/OIP.Yzn1G2J7cykJwNE671WmkgAAAA?pid=ImgDet&w=208&h=208&c=7&dpr=1.5)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <Box style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card style={{ width: '90%', height: '100%', backgroundColor: 'whitesmoke', marginLeft:"20%" }}>
          <CardContent style={{ display: 'flex', padding:"20px", width:"90%", flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
              <b> Welcome back!</b>
            </Typography>
            <Typography variant="body1" style={{ fontSize:"13px", textAlign: 'center' }}>
              Please login using your registered account
            </Typography>
            <br />
            {error && <Typography color="error">{error}</Typography>}
            <form onSubmit={handleLogin} style={{ width: '100%' }}>
              <Typography fontSize={"80%"} style={{ marginBottom: '8px' }}><b>USERNAME</b></Typography>
              <TextField
                placeholder='Register Email ID'
                variant="outlined"
                margin="none"
                fullWidth
                sx={{ mb: 2 }}
                InputProps={{
                  style: {
                    borderRadius: '12px',
                    height: '35px',
                    backgroundColor: 'white'
                  }
                }}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                error={!!emailError}
                helperText={emailError}
              />
              <Typography fontSize={"80%"} style={{ marginBottom: '8px' }}><b>PASSWORD</b></Typography>
              <TextField
                placeholder='Enter Password'
                type={showPassword ? 'text' : 'password'}
                margin="none"
                fullWidth
                sx={{ mb: 2 }}
                InputProps={{
                  style: {
                    borderRadius: '12px',
                    height: '35px',
                    backgroundColor: 'white'
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!passwordError}
                helperText={passwordError}
              />
              <Button
                variant="contained"
                fullWidth
                type="submit"
                style={{ marginTop: '16px', borderRadius: '12px', color:"white", backgroundColor:"#880e4f" }}
              >
                Login
              </Button>
            </form>
            <Box display="flex" justifyContent="space-between" width="100%" marginTop="8px">
              <Link href="#" sx={{ color: 'black', fontSize:"13px" }}>
                Forgot Password?
              </Link>
              <Link component={RouterLink} to="/reset-password" sx={{ color: 'red', fontSize:"13px" }}>
                Reset Here
              </Link>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </Container>
  );
};

export default LoginPage;



// import React, { useState } from 'react';
// import { TextField, Button, Typography, Link, Box, Card, CardContent, Container, IconButton, InputAdornment } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { Link as RouterLink } from 'react-router-dom';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

// const LoginPage = () => {
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const navigate = useNavigate();

//   const validateEmail = (email) => {
//     return email.includes('@');
//   };

//   const validatePassword = (password) => {
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
//     return passwordRegex.test(password);
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     let isValid = true;

//     if (!userName) {
//       setEmailError('Email is required.');
//       isValid = false;
//     } else if (!validateEmail(userName)) {
//       setEmailError('Invalid email format.');
//       isValid = false;
//     } else {
//       setEmailError('');
//     }

//     if (!password) {
//       setPasswordError('Password is required.');
//       isValid = false;
//     } else if (!validatePassword(password)) {
//       setPasswordError('Password must be at least 6 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.');
//       isValid = false;
//     } else {
//       setPasswordError('');
//     }

//     if (!isValid) {
//       setError('Please fix the errors above.');
//       return;
//     }

//     console.log('Login attempted with:', { userName, password });
//     setError('');
//     navigate('/dashboard');
//   };

//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <Container style={{ display: 'flex', minHeight: '100vh', padding: 0 }}>
//       <Box 
//         style={{ 
//           flex: 1, 
//           backgroundImage: 'url(https://th.bing.com/th/id/OIP.Yzn1G2J7cykJwNE671WmkgAAAA?pid=ImgDet&w=208&h=208&c=7&dpr=1.5)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }}
//       />
//       <Box style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         <Card style={{ width: '90%', height: '100%', backgroundColor: 'whitesmoke', marginLeft:"20%" }}>
//           <CardContent style={{ display: 'flex', padding:"20px", width:"90%", flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
//             <Typography variant="h4" gutterBottom style={{ textAlign: 'center' }}>
//               <b> Welcome back!</b>
//             </Typography>
//             <Typography variant="body1" style={{ fontSize:"13px", textAlign: 'center' }}>
//               Please login using your registered account
//             </Typography>
//             <br />
//             {error && <Typography color="error">{error}</Typography>}
//             <form onSubmit={handleLogin} style={{ width: '100%' }}>
//               <Typography fontSize={"80%"} style={{ marginBottom: '8px' }}><b>USERNAME</b></Typography>
//               <TextField
//                 placeholder='Register Email ID'
//                 variant="outlined"
//                 margin="none"
//                 fullWidth
//                 sx={{ mb: 2 }}
//                 InputProps={{
//                   style: {
//                     borderRadius: '12px',
//                     height: '35px',
//                     backgroundColor: 'white'
//                   }
//                 }}
//                 value={userName}
//                 onChange={(e) => setUserName(e.target.value)}
//                 error={!!emailError}
//                 helperText={emailError}
//               />
//               <Typography fontSize={"80%"} style={{ marginBottom: '8px' }}><b>PASSWORD</b></Typography>
//               <TextField
//                 placeholder='Enter Password'
//                 type={showPassword ? 'text' : 'password'}
//                 margin="none"
//                 fullWidth
//                 sx={{ mb: 2 }}
//                 InputProps={{
//                   style: {
//                     borderRadius: '12px',
//                     height: '35px',
//                     backgroundColor: 'white'
//                   },
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton
//                         aria-label="toggle password visibility"
//                         onClick={handleClickShowPassword}
//                         edge="end"
//                       >
//                         {showPassword ? <Visibility /> : <VisibilityOff />}
//                       </IconButton>
//                     </InputAdornment>
//                   )
//                 }}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 error={!!passwordError}
//                 helperText={passwordError}
//               />
//               <Button
//                 variant="contained"
//                 fullWidth
//                 type="submit"
//                 style={{ marginTop: '16px', borderRadius: '12px', color:"white", backgroundColor:"#880e4f" }}
//               >
//                 Login
//               </Button>
//             </form>
//             <Box display="flex" justifyContent="space-between" width="100%" marginTop="8px">
//               <Link component={RouterLink} to="/forgot-password" sx={{ color: 'black', fontSize:"13px" }}>
//                 Forgot Password?
//               </Link>
//               <Link component={RouterLink} to="/reset-password" sx={{ color: 'red', fontSize:"13px" }}>
//                 Reset Here
//               </Link>
//             </Box>
//           </CardContent>
//         </Card>
//       </Box>
//     </Container>
//   );
// };

// export default LoginPage;
