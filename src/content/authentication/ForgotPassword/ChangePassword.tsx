import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router';

// import { AuthContext } from 'src/App';

interface PropsChangePassword {
  email: string;
}
function ChangePassword({ email }: PropsChangePassword) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange'
  });
  // const { handleOpenToast, handleChangeMessageToast } = useContext(AuthContext);

  // const nav = useNavigate();

  const password = useRef({});
  password.current = watch('password', '');
  const onSubmit = async (data) => {
    // const { temporary, password, confirm } = data;
  };
  return (
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

          width: { md: '70ch', xs: '100%' },
          mt: 10
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl variant="standard" sx={{ width: '100%' }}>
          <TextField
            id="outlined-password-input"
            label="Temporary Password"
            {...register('temporary', { required: true })}
            type="password"
            autoComplete="current-password"
          />
          {errors.temporary && (
            <Typography mb={2} variant="h5" color="error">
              {errors.temporary.message}
            </Typography>
          )}
        </FormControl>
        <FormControl variant="standard" sx={{ width: '100%' }}>
          <TextField
            id="outlined-password-input"
            label="Temporary Password"
            {...register('password', { required: true })}
            type="password"
            autoComplete="current-password"
          />
          {errors.password && (
            <Typography mb={2} variant="h5" color="error">
              {errors.password.message}
            </Typography>
          )}
        </FormControl>
        <FormControl variant="standard" sx={{ width: '100%' }}>
          <TextField
            id="outlined-password-input"
            label="Temporary Password"
            {...register('confirm', {
              required: 'The confirm password is require',
              minLength: 8,
              validate: (value) =>
                value === password.current || 'The passwords do not match'
            })}
            type="password"
            autoComplete="current-password"
          />

          {errors.confirm && (
            <Typography mb={2} variant="h5" color="error">
              {errors.confirm.message}
            </Typography>
          )}
        </FormControl>

        <Button size="large" variant="contained" type="submit" sx={{ mt: 5 }}>
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default ChangePassword;
