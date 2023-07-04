import styled from '@emotion/styled'
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
} from '@mui/material'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Scrollbar from 'src/components/Scrollbar'
import ProductList from 'src/components/checkout/CheckoutProductList'
import ShippingAddressPopup from 'src/components/checkout/ShippingAddressPopup'
import MainLayout from 'src/layouts/main'

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15),
  },
}))

const Checkout = () => {
  const [addressPopup, setAddressPopup] = useState(false)
  const router = useRouter()

  return (
    <>
      <MainLayout>
        <RootStyle>
          <Container>
            <h1 className="font-bold text-2xl">Checkout</h1>
            <div className="flex gap-2 text-sm mt-3 text-[#636262]">
              <p>Home - </p>
              <p>Cart - </p>
              <p>Checkout</p>
            </div>

            <Grid container spacing={3} mt={3}>
              <Grid item xs={12} md={8}>
                <Card className="p-2">
                  <h1 className="p-5 text-xl font-bold">
                    Card{' '}
                    <span className="text-[#4e4e4e] font-medium text-sm">
                      (23 items)
                    </span>
                  </h1>

                  <Scrollbar>
                    <ProductList />
                  </Scrollbar>
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
                          sx={{ color: 'text.secondary' }}
                        >
                          Sub Total
                        </Typography>
                        <Typography variant="subtitle2">3424</Typography>
                      </Stack>

                      <Stack direction="row" justifyContent="space-between">
                        <Typography
                          variant="body2"
                          sx={{ color: 'text.secondary' }}
                        >
                          Discount
                        </Typography>
                        <Typography variant="subtitle2">34</Typography>
                      </Stack>

                      <Stack direction="row" justifyContent="space-between">
                        <Typography
                          variant="body2"
                          sx={{ color: 'text.secondary' }}
                        >
                          Shipping
                        </Typography>
                        <Typography variant="subtitle2">34</Typography>
                      </Stack>

                      <Divider />

                      <Stack direction="row" justifyContent="space-between">
                        <Typography variant="subtitle1">Total</Typography>
                        <Box sx={{ textAlign: 'right' }}>
                          <Typography
                            variant="subtitle1"
                            sx={{ color: 'error.main' }}
                          >
                            32113
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{ fontStyle: 'italic' }}
                          >
                            (VAT included if applicable)
                          </Typography>
                        </Box>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
                <Button
                  onClick={() => setAddressPopup(true)}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Check Out
                </Button>
              </Grid>
            </Grid>
          </Container>
        </RootStyle>
      </MainLayout>
      {addressPopup && <ShippingAddressPopup setOpenPopup={setAddressPopup} />}
    </>
  )
}

export default Checkout
