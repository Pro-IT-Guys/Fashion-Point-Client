import styled from '@emotion/styled';
import { Container, Grid } from '@mui/material';
import React from 'react';

const SignUp = () => {
    const RootStyle = styled("div")(({ theme }) => ({
      paddingTop: theme.spacing(15),
      [theme.breakpoints.up("md")]: {
        paddingBottom: theme.spacing(15),
      },
    }));
  
    return (
      <RootStyle>
        <Container maxWidth="lg">
          <Grid container spacing={5} justifyContent="center">
            <h1>This is SignUp page</h1>
          </Grid>
        </Container>
      </RootStyle>
    );
  };

export default SignUp;