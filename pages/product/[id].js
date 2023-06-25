import styled from "@emotion/styled";
import { Card,Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Banner from "src/components/Home/Banner/Banner";
import Page from "src/components/Page";
import ProductDetailsCarousel from "src/components/Products/ProductDetailsCarousel";
import MainLayout from "src/layouts/main";
import { useRouter } from "next/router";

export default function ProductDetails() {
  const [productDetails, setProductDetails] = useState({});
  const router = useRouter();
  const params = router.query.id;
  const RootStyle = styled(Page)({
    height: "100%",
  });

  const ContentStyle = styled("div")(({ theme }) => ({
    overflow: "hidden",
    position: "relative",
    backgroundColor: theme.palette.background.default,
  }));

  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/product/path/${params}`)
      .then((res) => res.json())
      .then((data) => setProductDetails(data.data));
  }, [params]);

  return (
    <MainLayout>
      <Container maxWidth='lg'>
          <Card className="mt-24 mb-20 pb-10">
            <Grid container>
              <Grid item xs={12} md={6} lg={7}>
                <ProductDetailsCarousel  product={productDetails}  />
              </Grid>
              <Grid item xs={12} md={6} lg={5}>
              <h1>Product details</h1>
              </Grid>
            </Grid>
          </Card>
          {/* <div className="">
            <div>
              <ProductDetailsCarousel product={productDetails} />
            </div>
          </div> */}
       </Container>
    </MainLayout>
  );
};

