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
import React, { useEffect, useState } from "react";
import ColorManyPicker from "../common/ColorManyPicker";
import ShopProductSort from "../shop/ShopProductSort";
import ProductCard from "./ProductCard";

const Products = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/product")
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);

  console.log(products);

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
    <div className="bg-[#f7f7ff9c]">
      <Container maxWidth="lg" className="pb-20">
        <Grid container>
          <div className="flex w-full mb-5">
            <div className="w-[20%]">
              <h2 className="font-semibold text-xl pb-2 ">Filter Product</h2>
            </div>
            <div className="flex justify-between items-center w-[80%]">
              <div className="input-group relative flex  items-stretch w-[80%]">
                <input
                  // onChange={(e) => {
                  //   setSrcValue(e.target.value);
                  // }}
                  type="search"
                  className="form-control  relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none rounded-r-0"
                  placeholder="Search Products"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />

                <button
                  className="btn px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out flex items-center rounded-l-0"
                  type="button"
                  id="button-addon2"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="search"
                    className="w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                    ></path>
                  </svg>
                </button>
              </div>
              <ShopProductSort />
            </div>
          </div>
          <div className=" flex w-full mt-3 gap-5">
            <div className="w-[20%]">
              <div className="pt-5 space-y-5 shadow py-5 pl-5 pr-3 bg-white ">
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
              </div>
            </div>
            <div className=" w-[80%]">
              <div className="grid grid-cols-4 gap-5">
                {products?.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
