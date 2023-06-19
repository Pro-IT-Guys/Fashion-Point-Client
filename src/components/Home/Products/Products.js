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
import React, { useState } from "react";
import img from "../../../assets/banner/banner1.jpg";
import { Image } from "next/image";
import ShopFilterSidebar, {
  FILTER_COLOR_OPTIONS,
  FILTER_GENDER_OPTIONS,
} from "../shop/ShopFilterSidebar";
import { CheckBox } from "@mui/icons-material";
import { Form, FormikProvider } from "formik";
import ColorManyPicker from "../common/ColorManyPicker";
import ShopProductSort from "../shop/ShopProductSort";

const Products = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const RootStyle = styled("div")(({ theme }) => ({
    paddingTop: theme.spacing(15),
    [theme.breakpoints.up("md")]: {
      paddingBottom: theme.spacing(15),
    },
  }));

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };



  return (
    <Container maxWidth="lg">
      <Grid container spacing={5} justifyContent="center">
        <Grid xs={12} md={3}>
          <h2>Filter Product</h2>
          this is banner section
        </Grid>
        <Grid xs={12} md={9}>
          {/* <img
              className="img-fluid w-full"
              height={400}
              width={1200}
              src={
                "https://img.freepik.com/free-vector/black-friday-sale-shopping-cart-banner-with-text-space_1017-28049.jpg?size=626&ext=jpg"
              }
            /> */}

          <Stack
            direction="row"
            flexWrap="wrap-reverse"
            alignItems="center"
            justifyContent="flex-end"
            sx={{ mb: 5 }}
          >
            {/* <ShopTagFiltered
              filters={filters}
              formik={formik}
              isShowReset={openFilter}
              onResetFilter={handleResetFilter}
              isDefault={isDefault}
            /> */}

            <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
              {/* <ShopFilterSidebar /> */}
              <ShopProductSort />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Products;
