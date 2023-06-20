import {
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  Radio,
  RadioGroup,
  Rating,
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

  const SORT_BY_OPTIONS = [
    { value: "featured", label: "Featured" },
    { value: "newest", label: "Newest" },
    { value: "priceDesc", label: "Price: High-Low" },
    { value: "priceAsc", label: "Price: Low-High" },
  ];
  const FILTER_GENDER_OPTIONS = ["Men", "Women", "Kids"];
  const FILTER_CATEGORY_OPTIONS = ["All", "Shose", "Apparel", "Accessories"];
  const FILTER_RATING_OPTIONS = ["up4Star", "up3Star", "up2Star", "up1Star"];
  const FILTER_PRICE_OPTIONS = [
    { value: "below", label: "Below $25" },
    { value: "between", label: "Between $25 - $75" },
    { value: "above", label: "Above $75" },
  ];
  const FILTER_COLOR_OPTIONS = [
    "#00AB55",
    "#000000",
    "#FFFFFF",
    "#FFC0CB",
    "#FF4842",
    "#1890FF",
    "#94D82D",
    "#FFC107",
  ];

  return (
    <Container maxWidth="lg">
      <Grid container spacing={5} justifyContent="center">
        <Grid xs={12} md={3}>
          <h2>Filter Product</h2>
          <Stack spacing={3} sx={{ p: 3 }}>
            <div>
              <Typography variant="subtitle1" gutterBottom>
                Gender
              </Typography>
              <FormGroup>
                {FILTER_GENDER_OPTIONS?.map((item) => (
                  <FormControlLabel
                    key={item}
                    control={<Checkbox value={item} checked={item} />}
                    label={item}
                  />
                ))}
              </FormGroup>
            </div>

            <div>
              <Typography variant="subtitle1" gutterBottom>
                Category
              </Typography>
              <RadioGroup>
                {FILTER_CATEGORY_OPTIONS.map((item) => (
                  <FormControlLabel
                    key={item}
                    value={item}
                    control={<Radio />}
                    label={item}
                  />
                ))}
              </RadioGroup>
            </div>

            <div>
              <Typography variant="subtitle1" gutterBottom>
                Colour
              </Typography>
              <ColorManyPicker
                name="colors"
                colors={FILTER_COLOR_OPTIONS}
                // onChange={handleChange}
                // onChecked={(color) => values.colors.includes(color)}
                onChecked={(color) => color}
                sx={{ maxWidth: 36 * 4 }}
              />
            </div>

            <div>
              <Typography variant="subtitle1" gutterBottom>
                Price
              </Typography>
              <RadioGroup>
                {FILTER_PRICE_OPTIONS.map((item) => (
                  <FormControlLabel
                    key={item.value}
                    value={item.value}
                    control={<Radio />}
                    label={item.label}
                  />
                ))}
              </RadioGroup>
            </div>

            <div>
              <Typography variant="subtitle1" gutterBottom>
                Rating
              </Typography>
              <RadioGroup>
                {FILTER_RATING_OPTIONS.map((item, index) => (
                  <FormControlLabel
                    key={item}
                    value={item}
                    control={
                      <Radio
                        disableRipple
                        color="default"
                        icon={<Rating readOnly value={4 - index} />}
                        checkedIcon={<Rating readOnly value={4 - index} />}
                        sx={{
                          "&:hover": { bgcolor: "transparent" },
                        }}
                      />
                    }
                    label="& Up"
                    // sx={{
                    //   my: 0.5,
                    //   borderRadius: 1,
                    //   '&:hover': { opacity: 0.48 },
                    //   ...(values.rating.includes(item) && {
                    //     bgcolor: 'action.selected'
                    //   })
                    // }}
                  />
                ))}
              </RadioGroup>
            </div>
          </Stack>
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
