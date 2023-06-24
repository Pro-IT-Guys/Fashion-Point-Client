import styled from "@emotion/styled";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Icon,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import eyeFill from "@iconify/icons-eva/eye-fill";
import closeFill from "@iconify/icons-eva/close-fill";
import eyeOffFill from "@iconify/icons-eva/eye-off-fill";
import { MHidden } from "../@material-extend";
import { capitalCase } from "change-case";
import LoginForm from "./LoginForm";
import Page from "../Page";
import SignUpForm from "./SignUpForm";

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 464,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(12, 0),
}));

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <RootStyle title="Login | Minimal-UI">
      <MHidden width="mdDown">
        <SectionStyle>
          <Typography variant="h3" sx={{ px: 5, mt: 0, mb: 5 }}>
            Hi, Welcome Back
          </Typography>
          {/* <img src="/static/illustrations/illustration_login.png" alt="login" /> */}
          <img
            src="https://www.allen.ac.in/apps2223/assets/images/login.jpg"
            alt="signup"
          />
        </SectionStyle>
      </MHidden>

      <Container maxWidth="sm">
        <ContentStyle>
          <Stack direction="row" alignItems="center" sx={{ mb: 5 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h4" gutterBottom>
                Get started absolutely free.
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Free forever. No credit card needed.
              </Typography>
            </Box>
          </Stack>

          <SignUpForm />
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
