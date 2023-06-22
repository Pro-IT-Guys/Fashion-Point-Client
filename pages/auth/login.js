import styled from "@emotion/styled";
import { Container, Grid } from "@mui/material";
import React from "react";
import Login from "src/components/Auth/Login";
import Page from "src/components/Page";
import MainLayout from "src/layouts/main";

const login = () => {
  const RootStyle = styled(Page)({
    height: "100%",
  });

  const ContentStyle = styled("div")(({ theme }) => ({
    overflow: "hidden",
    position: "relative",
    backgroundColor: theme.palette.background.default,
  }));

  return (
    // <MainLayout>
      <RootStyle
        title="The starting point for your next project | Minimal-UI"
        id="move_top"
      >
        <ContentStyle>
          <Login/>
        </ContentStyle>
      </RootStyle>
    // </MainLayout>
  );
};

export default login;
