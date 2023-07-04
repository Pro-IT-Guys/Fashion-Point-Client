import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import React from "react";
import Banner from "src/components/Home/Banner/Banner";
import Page from "src/components/Page";
import MainLayout from "src/layouts/main";
import Container from "src/theme/overrides/Container";

const ProductDetails = () => {
  const RootStyle = styled(Page)({
    height: "100%",
  });

  const ContentStyle = styled("div")(({ theme }) => ({
    overflow: "hidden",
    position: "relative",
    backgroundColor: theme.palette.background.default,
  }));

  return (
    <MainLayout>
      <RootStyle
        title="The starting point for your next project | Minimal-UI"
        id="move_top"
      >
        <ContentStyle>

          <Banner/>
   
        </ContentStyle>
      </RootStyle>
    </MainLayout>
  );
};

export default ProductDetails;