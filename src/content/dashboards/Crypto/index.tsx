import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from 'src/components/Header/PageHeader';
// import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

function DashboardCrypto() {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader title={'Dashboard'} />
      </PageTitleWrapper>
      <Container maxWidth="xl">
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="stretch"
        >
          <Grid item xl={12} md={12} sm={12} xs={12}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h2" sx={{ fontWeight: '500' }}>
                Recent Activity
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default DashboardCrypto;
