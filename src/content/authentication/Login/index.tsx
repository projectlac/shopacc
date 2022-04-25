import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  TextField,
  Typography
} from '@mui/material';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from 'src/App';
import logo from 'src/assets/images/logo/Image 9.png';

import BpCheckbox from 'src/components/Common/BpCheckbox';

function Login() {
  const { handleLoginIn, handleOpenToast, handleChangeMessageToast } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,

    formState: { errors }
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange'
  });
  const nav = useNavigate();

  const onSubmit = async (data) => {
    const { username, password } = data;
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',

        backgroundSize: 'cover'
      }}
    >
      <Container maxWidth="lg" sx={{ height: '100vh', pt: 10 }}>
        <Box sx={{ p: { md: 8, xs: 3 } }}>
          <Box textAlign={'center'}>
            <img src={logo} alt="" />
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': {
                  width: { md: '70ch', xs: '100%' },
                  mb: 4
                },
                '& button': {
                  width: '100%',
                  height: '53px'
                },

                width: { md: '70ch', xs: '100%' }
              }}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormControl variant="standard" sx={{ width: '100%' }}>
                <TextField
                  id="outlined-password-input"
                  label="Username"
                  {...register('username', { required: 'Username is require' })}
                  type="password"
                  autoComplete="current-password"
                />
                {errors.username && <span>{errors.username.message}</span>}
              </FormControl>
              <FormControl variant="standard" sx={{ width: '100%' }}>
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  {...register('password', {
                    required: '* This field is require'
                  })}
                  type="password"
                  autoComplete="current-password"
                />
                {errors.username && <span>{errors.username.message}</span>}
              </FormControl>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <FormControlLabel
                  label="Remember me"
                  sx={{
                    color: '#044b7e',
                    '& .MuiTypography-root': { fontSize: '15px' }
                  }}
                  control={<BpCheckbox />}
                />

                <Typography textAlign={'right'}>
                  <Link
                    to={`${process.env.REACT_APP_BASE_NAME}/forgot-password`}
                    style={{
                      textDecoration: 'none',
                      color: '#044b7e',
                      fontSize: '15px'
                    }}
                  >
                    Forgot Password?
                  </Link>
                </Typography>
              </Box>

              <Button
                size="large"
                variant="contained"
                type="submit"
                sx={{ mt: 5 }}
              >
                LOGIN
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
export default Login;
