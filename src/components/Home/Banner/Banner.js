import {
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  RadioGroup,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import img from "../../../assets/banner/banner1.jpg";
import { Image } from "next/image";
import {
  FILTER_COLOR_OPTIONS,
  FILTER_GENDER_OPTIONS,
} from "../shop/ShopFilterSidebar";
import { CheckBox } from "@mui/icons-material";
import { Form, FormikProvider } from "formik";
import ColorManyPicker from "../common/ColorManyPicker";

const Banner = () => {
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
          <img
            className="img-fluid w-full"
            height={400}
            width={1200}
            src={
              "https://img.freepik.com/free-vector/black-friday-sale-shopping-cart-banner-with-text-space_1017-28049.jpg?size=626&ext=jpg"
            }
          />
        </Grid>
      </Container>
    </RootStyle>
  );
};

export default Banner;
