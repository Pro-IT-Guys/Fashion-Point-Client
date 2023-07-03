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
  TextField,
  Typography,
} from '@mui/material'
import { ContextData } from 'context/dataProviderContext'
import React, { useContext, useState } from 'react'
import MainLayout from 'src/layouts/main'

import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import StripeForm from 'src/components/checkout/StripeForm'
import { paypalPaymentApi } from 'apis/payment.api'

// Replace 'YOUR_STRIPE_PUBLIC_KEY' with your actual Stripe public key
const stripePromise = loadStripe(
  'pk_test_51L3PqJCnJiLLpGIeL4Uixr7K4bJ183L3tSUyFg2ENBX5ovRQKSQhaYTR8kG7WbcfvkvyuLa5RfB9eZlBJfohfpYd00PM7gqopw'
)

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15),
  },
}))

const ShippingAddress = () => {
  const { currentlyLoggedIn, toCurrency } = useContext(ContextData)
  const [email, setEmail] = useState('')
  const [paypalPayment, setPaypalPayment] = useState(false)
  const [paypalLink, setPaypalLink] = useState(null)

  const handleStripePayment = async paymentMethodId => {
    const response = await fetch(
      'http://localhost:8000/api/v1/payment/stripe',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderId: '649af82b3a3da1ac2861fa79',
          paymentMethodId,
          currency: toCurrency,
        }),
      }
    )

    if (response.ok) {
      console.log(response)
    } else {
      console.error('Payment failed')
    }
  }

  const handlePaypalPayment = async () => {
    const response = await paypalPaymentApi({
      orderId: '649af82b3a3da1ac2861fa79',
      email: email,
      currency: 'USD',
    })

    if (response?.statusCode === 200) {
      setPaypalLink(response?.data?.redirectUrl)
    }
  }

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
                      sx={{ color: 'text.secondary', ml: 1 }}
                    >
                      Sobahan Baper Bari
                    </Typography>
                  </Typography>

                  <Typography variant="body2" gutterBottom>
                    Azadi Bazar, Dharmapur, Fatikchhari, Chattogram.
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    01868032281
                  </Typography>

                  <Box
                    sx={{
                      mt: 3,
                      display: 'flex',
                      position: { sm: 'absolute' },
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

            {!paypalPayment && (
              <Grid item xs={12} md={4}>
                <Card sx={{ mb: 3 }}>
                  <CardHeader title="Pay with card" />
                  <CardContent>
                    <Stack spacing={2}>
                      <Stack>
                        <Elements stripe={stripePromise}>
                          <StripeForm handleSubmit={handleStripePayment} />
                        </Elements>

                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            marginTop: 2,
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{ fontSize: 16, fontWeight: 'bold' }}
                          >
                            Or pay with
                          </Typography>
                          <img
                            onClick={() => setPaypalPayment(true)}
                            className="w-[100px] cursor-pointer"
                            src="https://i.ibb.co/WgWs4FC/paypal.png"
                            alt=""
                          />
                        </Box>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            )}
            {paypalPayment && (
              <Grid item xs={12} md={4}>
                <Card sx={{ mb: 3 }}>
                  <CardHeader title="Pay with PayPal" />
                  <CardContent>
                    <Stack spacing={2}>
                      <Stack>
                        <TextField
                          onChange={e => setEmail(e.target.value)}
                          fullWidth
                          label="Your PayPal Email"
                        />
                        {paypalLink ? (
                          <Button
                            variant="contained"
                            color="primary"
                            sx={{ mt: 2, width: '170px' }}
                            onClick={() => window.open(paypalLink, '_blank')}
                          >
                            Proceed to PayPal
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            color="primary"
                            sx={{ mt: 2, width: '90px' }}
                            onClick={handlePaypalPayment}
                          >
                            Confirm
                          </Button>
                        )}

                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            marginTop: 2,
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{ fontSize: 16, fontWeight: 'bold' }}
                          >
                            Or pay with
                          </Typography>
                          <img
                            onClick={() => setPaypalPayment(false)}
                            className="w-[50px] cursor-pointer ml-2"
                            src="https://i.ibb.co/mHLhz9h/stripe-logo-2.png"
                            alt=""
                          />
                        </Box>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            )}
          </Grid>
        </Container>
      </RootStyle>
    </MainLayout>
  )
}

export default ShippingAddress
