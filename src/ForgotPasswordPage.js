// import React, { useState } from 'react';
// import { TextField, Button, Typography, Box, Card, CardContent, Container } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const ForgotPasswordPage = () => {
//   const [email, setEmail] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const navigate = useNavigate();

//   const validateEmail = (email) => {
//     return email.includes('@');
//   };

//   const handleForgotPassword = (e) => {
//     e.preventDefault();

//     if (!email) {
//       setEmailError('Email is required.');
//       return;
//     } else if (!validateEmail(email)) {
//       setEmailError('Invalid email format.');
//       return;
//     } else {
//       setEmailError('');
//     }

   
//     setTimeout(() => {
//       setSuccessMessage('A password OTP has been sent to your email.');
//       setTimeout(() => {
//         navigate('/login');
//       }, 3000);
//     }, 1000);
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
//               <b> Forgot Password</b>
//             </Typography>
//             <Typography variant="body1" style={{ fontSize:"13px", textAlign: 'center' }}>
//               Enter your registered email to receive password reset instructions
//             </Typography>
//             <br />
//             {emailError && <Typography color="error">{emailError}</Typography>}
//             {successMessage && <Typography color="primary">{successMessage}</Typography>}
//             <form onSubmit={handleForgotPassword} style={{ width: '100%' }}>
//               <Typography fontSize={"80%"} style={{ marginBottom: '8px' }}><b>EMAIL</b></Typography>
//               <TextField
//                 placeholder='Enter your email'
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
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 error={!!emailError}
//                 helperText={emailError}
//               />
//               <Button
//                 variant="contained"
//                 fullWidth
//                 type="submit"
//                 style={{ marginTop: '16px', borderRadius: '12px', color:"white", backgroundColor:"#880e4f" }}
//               >
//                 Send OTP
//               </Button>
//             </form>
//           </CardContent>
//         </Card>
//       </Box>
//     </Container>
//   );
// };

// export default ForgotPasswordPage;


import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Card, CardContent, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    if (!email) {
      setEmailError('Email is required.');
      return;
    } else if (!validateEmail(email)) {
      setEmailError('Invalid email format.');
      return;
    } else {
      setEmailError('');
    }

    try {
      // Mock API call to send OTP
      await axios.post('/api/', { email });

      setSuccessMessage('A password OTP has been sent to your email.');
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (error) {
      setEmailError('Failed to send OTP. Please try again.');
    }
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
              <b> Forgot Password</b>
            </Typography>
            <Typography variant="body1" style={{ fontSize:"13px", textAlign: 'center' }}>
              Enter your registered email to receive password reset instructions
            </Typography>
            <br />
            {emailError && <Typography color="error">{emailError}</Typography>}
            {successMessage && <Typography color="primary">{successMessage}</Typography>}
            <form onSubmit={handleForgotPassword} style={{ width: '100%' }}>
              <Typography fontSize={"80%"} style={{ marginBottom: '8px' }}><b>EMAIL</b></Typography>
              <TextField
                placeholder='Enter your email'
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!emailError}
                helperText={emailError}
              />
              <Button
                variant="contained"
                fullWidth
                type="submit"
                style={{ marginTop: '16px', borderRadius: '12px', color:"white", backgroundColor:"#880e4f" }}
              >
                Send OTP
              </Button>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default ForgotPasswordPage;
