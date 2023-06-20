import styled from "@emotion/styled";
import { Checkbox, Container, FormControlLabel, Grid, Icon, IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import eyeFill from '@iconify/icons-eva/eye-fill';
import closeFill from '@iconify/icons-eva/close-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import LoadingButton from "src/theme/overrides/LoadingButton";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
  const RootStyle = styled("div")(({ theme }) => ({
    paddingTop: theme.spacing(15),
    [theme.breakpoints.up("md")]: {
      paddingBottom: theme.spacing(15),
    },
  }));

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };


  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Grid container spacing={5} justifyContent="center">
          {/* <form autoComplete="off" noValidate >
            <Stack spacing={3}>
              <TextField
                fullWidth
                autoComplete="username"
                type="email"
                label="Email address"
              />

              <TextField
                fullWidth
                autoComplete="current-password"
                type={showPassword ? "text" : "password"}
                label="Password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleShowPassword} edge="end">
                        <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ my: 2 }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked
                  />
                }
                label="Remember me"
              />

              <Link
              >
                Forgot password?
              </Link>
            </Stack>

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              Login
            </LoadingButton>
          </form> */}
          <h1>Login Page</h1>
        </Grid>
      </Container>
    </RootStyle>
  );
};

export default Login;
