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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { getCartByCartId, getCartByUserId } from 'apis/cart.api'
import { getAllCountriesWithFees, getFeeOfLocation } from 'apis/fee.api'
import { getProductBySku } from 'apis/product.api'
import { ContextData } from 'context/dataProviderContext'
import { convertCurrencyForCalculation } from 'helpers/currencyHandler'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
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

const ThumbImgStyle = styled('img')(({ theme }) => ({
  width: 64,
  height: 64,
  objectFit: 'cover',
  marginRight: theme.spacing(2),
  borderRadius: theme.shape.borderRadiusSm,
}))

export default function Checkout() {
  const { token, userId, toCurrency, currentlyLoggedIn, fromCurrency } =
    useContext(ContextData)
  const [addressPopup, setAddressPopup] = useState(false)
  const router = useRouter()
  const query = router.query.productQuery
  const [product, setProduct] = useState([])
  const [loader, setLoader] = useState(false)
  const [muiLoader, setMuiLoader] = useState(false)

  const [totalPrice, setTotalPrice] = useState(0)
  const [feeOfLocation, setFeeOfLocation] = useState(0)
  const [totalDeliveryFee, setTotalDeliveryFee] = useState(0)

  const [country, setCountry] = useState(null)
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [selectedState, setSelectedState] = useState(null)
  const [selectedCity, setSelectedCity] = useState(null)
  const [state, setState] = useState(null)
  const [city, setCity] = useState(null)
  const [shippingAddress, setShippingAddress] = useState({
    zipCode: '',
    phoneNumber: '',
    address_line: '',
  })

  const handleAdditionalInfo = e => {
    const { name, value } = e.target
    setShippingAddress(prev => ({ ...prev, [name]: value }))
  }

  useEffect(() => {
    setLoader(true)
    const _retriveCountry = async () => {
      // Retrive all countries with states and cities
      const result = await getAllCountriesWithFees()
      setCountry(result?.data)
      setLoader(false)
    }
    _retriveCountry()
  }, [])

  useEffect(() => {
    const _retriveProduct = async () => {
      setLoader(true)
      // Retrive product based on query
      if (query?.split('&')[0].split('=')[0] === 'sku') {
        const sku = query?.split('&')[0].split('=')[1]
        const res = await getProductBySku(sku)

        let singleProduct = {}
        let productId = res?.data
        singleProduct.quantity = query?.split('&')[1].split('=')[1]
        singleProduct.size = query?.split('&')[2].split('=')[1]
        singleProduct.color = query?.split('&')[3].split('=')[1]

        singleProduct.productId = productId

        setProduct([singleProduct])
        setLoader(false)
      } else if (query?.split('&')[0].split('=')[0] === 'cart' && token) {
        const cartId = query?.split('=')[1]
        const res = await getCartByCartId({ token, cartId })
        setProduct(res?.data?.product)
        setLoader(false)
      }
    }
    _retriveProduct()
  }, [query, token])

  useEffect(() => {
    if (product && product.length > 0) {
      let totalPrice = 0
      let calculatedDeliveryFee = 0
      product.forEach(item => {
        totalPrice +=
          parseInt(item.quantity) * parseInt(item.productId.sellingPrice)
        calculatedDeliveryFee +=
          parseInt(item.quantity) * parseInt(feeOfLocation)
      })
      setTotalPrice(totalPrice)
      setTotalDeliveryFee(calculatedDeliveryFee)
    }
  }, [product, feeOfLocation])

  const handleCountryChange = e => {
    const countryId = e.target.value
    setSelectedCountry(countryId)
  }

  const handleStateChange = e => {
    if (!selectedCountry) return

    const stateId = e.target.value
    setSelectedState(stateId)
  }

  const handleConfirmAddress = async () => {
    const shippingFee = await getFeeOfLocation({
      countryId: selectedCountry,
      stateCode: selectedState,
      city_name: selectedCity,
    })
    setFeeOfLocation(shippingFee?.data?.delivery_fee)

    let calculatedDeliveryFee = 0
    product.forEach(item => {
      calculatedDeliveryFee +=
        parseInt(item.quantity) * parseInt(shippingFee?.data?.delivery_fee)
    })

    const orderData = {
      userId,
      orderItems: product,
      phoneNumber: shippingAddress.phoneNumber,
      email: currentlyLoggedIn?.email,
      shippingAddress: {
        country: selectedCountry,
        state: selectedState,
        city: selectedCity,
        zipCode: shippingAddress.zipCode,
        address_line: shippingAddress.address_line,
      },
      currency: toCurrency,
      subTotal: convertCurrencyForCalculation(
        fromCurrency,
        toCurrency,
        totalPrice
      ),
      deliveryFee: convertCurrencyForCalculation(
        fromCurrency,
        toCurrency,
        calculatedDeliveryFee
      ),
    }

    console.log(orderData)
  }

  if (loader) return <h1>Loading...</h1>

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
                    Cart{' '}
                    <span className="text-[#4e4e4e] font-medium text-sm">
                      {product?.length} items
                    </span>
                  </h1>

                  <Scrollbar>
                    <TableContainer sx={{ minWidth: 720 }}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell align="left">Price</TableCell>
                            <TableCell align="left">Quantity</TableCell>
                            <TableCell align="right">Total Price</TableCell>
                            <TableCell align="right" />
                          </TableRow>
                        </TableHead>

                        <TableBody>
                          {product?.map((item, index) => {
                            return (
                              <ProductList
                                setProduct={setProduct}
                                product={product}
                                key={index}
                                item={item}
                              />
                            )
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
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
                        <Typography variant="subtitle2">
                          {convertCurrencyForCalculation(
                            fromCurrency,
                            toCurrency,
                            totalPrice
                          )}
                        </Typography>
                      </Stack>

                      <Stack direction="row" justifyContent="space-between">
                        <Typography
                          variant="body2"
                          sx={{ color: 'text.secondary' }}
                        >
                          Discount
                        </Typography>
                        <Typography variant="subtitle2">0</Typography>
                      </Stack>

                      <Stack direction="row" justifyContent="space-between">
                        <Typography
                          variant="body2"
                          sx={{ color: 'text.secondary' }}
                        >
                          Shipping
                        </Typography>
                        <Typography variant="subtitle2">
                          {convertCurrencyForCalculation(
                            fromCurrency,
                            toCurrency,
                            totalDeliveryFee
                          )}
                        </Typography>
                      </Stack>

                      <Divider />

                      <Stack direction="row" justifyContent="space-between">
                        <Typography variant="subtitle1">Total</Typography>
                        <Box sx={{ textAlign: 'right' }}>
                          <Typography
                            variant="subtitle1"
                            sx={{ color: 'error.main' }}
                          >
                            {convertCurrencyForCalculation(
                              fromCurrency,
                              toCurrency,
                              (totalPrice + totalDeliveryFee)
                            )}
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
      {addressPopup && (
        <ShippingAddressPopup
          handleCountryChange={handleCountryChange}
          selectedCountry={selectedCountry}
          country={country}
          setState={setState}
          handleStateChange={handleStateChange}
          selectedState={selectedState}
          state={state}
          setCity={setCity}
          selectedCity={selectedCity}
          city={city}
          setSelectedCity={setSelectedCity}
          handleAdditionalInfo={handleAdditionalInfo}
          handleConfirmAddress={handleConfirmAddress}
          setOpenPopup={setAddressPopup}
        />
      )}
    </>
  )
}
