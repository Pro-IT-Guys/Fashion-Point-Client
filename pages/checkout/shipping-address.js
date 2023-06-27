import styled from "@emotion/styled";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Icon,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Scrollbar from "src/components/Scrollbar";
import ProductList from "src/components/checkout/CheckoutProductList";
import MainLayout from "src/layouts/main";

const ShippingAddress = () => {
  const RootStyle = styled("div")(({ theme }) => ({
    paddingTop: theme.spacing(15),
    [theme.breakpoints.up("md")]: {
      paddingBottom: theme.spacing(15),
    },
  }));
  return (
    <MainLayout>
      <RootStyle>
        <Container>
          <h1 className="font-bold text-2xl">Checkout</h1>
          <div className="flex gap-2 text-sm mt-3 text-[#636262]">
            <p>Home - </p>
            <p>Checkout - </p>
            <p>Shipping Address</p>
          </div>

          <Grid container spacing={3} mt={3}>
            <Grid item xs={12} md={8}>
              <Card sx={{ mb: 3 }}>
                <CardHeader title="Billing Address" />
                <CardContent>
                  <Typography variant="subtitle2" gutterBottom>
                    Billing address:
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: "text.secondary", ml: 1 }}
                    >
                      Sobahan Baper Bari
                    </Typography>
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    Azadi Bazar, Dharmapur, Fatikchhari, Chattogram.
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    01868032281
                  </Typography>

                  <Box
                    sx={{
                      mt: 3,
                      display: "flex",
                      position: { sm: "absolute" },
                      right: { sm: 24 },
                      bottom: { sm: 24 },
                    }}
                  >
                    <Button variant="outlined" size="small" color="inherit">
                      Delete
                    </Button>

                    <Box sx={{ mx: 0.5 }} />
                    <Button
                      variant="outlined"
                      size="small"
                      // onClick={handleCreateBilling}
                    >
                      Deliver to this Address
                    </Button>
                  </Box>
                </CardContent>
              </Card>

              <Button color="inherit">Continue Shopping</Button>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ mb: 3 }}>
                <CardHeader title="Order Summary" />
                <CardContent>
                  <Stack spacing={2}>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        Sub Total
                      </Typography>
                      <Typography variant="subtitle2">3424</Typography>
                    </Stack>

                    <Stack direction="row" justifyContent="space-between">
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        Discount
                      </Typography>
                      <Typography variant="subtitle2">34</Typography>
                    </Stack>

                    <Stack direction="row" justifyContent="space-between">
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        Shipping
                      </Typography>
                      <Typography variant="subtitle2">34</Typography>
                    </Stack>

                    <Divider />

                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="subtitle1">Total</Typography>
                      <Box sx={{ textAlign: "right" }}>
                        <Typography
                          variant="subtitle1"
                          sx={{ color: "error.main" }}
                        >
                          32113
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ fontStyle: "italic" }}
                        >
                          (VAT included if applicable)
                        </Typography>
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
    </MainLayout>
  );
};

export default ShippingAddress;
