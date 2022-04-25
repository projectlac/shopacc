import { Box, Grid } from '@mui/material';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

function Add() {
  const { handleSubmit, watch, setValue } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange'
  });

  const onSubmit = async (data) => {
    const { password, email, confirmPassword } = data;
  };

  const submitFromNav = () => {
    handleSubmit(onSubmit);
  };

  const password = useRef({});
  password.current = watch('password', '');
  return (
    <Grid container>
      <Grid item md={12}>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}></Box>
      </Grid>
    </Grid>
  );
}

export default Add;
