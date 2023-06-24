import styled from "@emotion/styled";
import { Container, Grid } from "@mui/material";
import React from "react";
import SignUp from "src/components/Auth/SignUp";
import Page from "src/components/Page";
import MainLayout from "src/layouts/main";

const signUp = () => {
  const RootStyle = styled(Page)({
    height: "100%",
  });

  const ContentStyle = styled("div")(({ theme }) => ({
    overflow: "hidden",
    position: "relative",
    backgroundColor: theme.palette.background.default,
  }));

  return (
    <RootStyle
      title="The starting point for your next project | Minimal-UI"
      id="move_top"
    >
      <ContentStyle>
        <SignUp />
      </ContentStyle>
    </RootStyle>
  );
};

export default signUp;
