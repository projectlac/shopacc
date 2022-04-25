import { Box, Container } from '@mui/material';
// import { useForm } from 'react-hook-form';

function ForgotPassword() {
  // const [checkFillEmail, setCheckFillEmail] = useState<Boolean>(false);
  // const [fillEmail, setFillEmail] = useState<string>('');
  // const { register, handleSubmit } = useForm();
  // const { handleOpenToast, handleChangeMessageToast } = useContext(AuthContext);

  // const onSubmit = async (data) => {
  //   const { email } = data;
  // };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',

        backgroundSize: 'cover'
      }}
    >
      <Container maxWidth="lg" sx={{ height: '100vh', pt: 15 }}>
        {/* <Card sx={{ p: { md: 10, xs: 3 } }}>
          <Typography variant="h1" component="h1" align="center" sx={{ mb: 2 }}>
            {checkFillEmail ? 'Change Password' : 'Forgot Password'}
          </Typography>
          <Typography variant="h3" component="h3" align="center">
            Content Management System
          </Typography>
          {!checkFillEmail ? (
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
                    label="Email"
                    {...register('email', { required: 'Email is require' })}
                    type="password"
                    autoComplete="current-password"
                  />
                </FormControl>

                <Button
                  size="large"
                  variant="contained"
                  type="submit"
                  sx={{ mt: 5 }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          ) : (
            <ChangePassword email={fillEmail} />
          )}
        </Card> */}
      </Container>
    </Box>
  );
}
export default ForgotPassword;
