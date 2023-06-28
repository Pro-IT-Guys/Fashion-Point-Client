import styled from '@emotion/styled'
import {
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Fab,
  Icon,
  Rating,
  Stack,
  Typography,
  alpha,
  Box,
} from '@mui/material'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import React, { useEffect, useRef, useState } from 'react'
import Banner from 'src/components/Home/Banner/Banner'
import Page from 'src/components/Page'
import ProductDetailsCarousel from 'src/components/Products/ProductDetailsCarousel'
import MainLayout from 'src/layouts/main'
import { useRouter } from 'next/router'
import Label from 'src/components/Label'
import { useField } from 'formik'
import roundAddShoppingCart from '@iconify/icons-ic/round-add-shopping-cart'
import ChatPopup from 'src/components/chat/ChatPopup'
import { MIconButton } from 'src/components/@material-extend'
import MenuPopover from 'src/components/MenuPopover'
import {
  createChat,
  getChatOfSenderAndReceiver,
  getMessageOfChatId,
} from 'apis/chat.api'
import { adminId } from 'constant/constant'

const ChatButton = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  zIndex: 999,
}))

export default function ProductDetails() {
  const [openChat, setOpenChat] = useState(false)
  const anchorRef = useRef(null)
  const [chatData, setChatData] = useState(null)
  const [message, setMessage] = useState([])

  const [productDetails, setProductDetails] = useState({})
  const [productQuantity, setProductQuantity] = useState(1)
  const router = useRouter()
  const params = router.query.id
  const RootStyle = styled(Page)({
    height: '100%',
  })

  const ContentStyle = styled('div')(({ theme }) => ({
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: theme.palette.background.default,
  }))

  // Create chat with admin / get chat if already exist
  const handleChatClick = async () => {
    setOpenChat(true)
    let data

    data = await createChat({
      senderId: '649bf518b7b20cef451e2249',
      receiverId: adminId,
    })

    if (!data) {
      data = await getChatOfSenderAndReceiver({
        senderId: '649bf518b7b20cef451e2249',
        receiverId: adminId,
      })
    }
    setChatData(data.data)
    const messagesOfChat = await getMessageOfChatId(data.data._id)
    setMessage(messagesOfChat.data)
  }

  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/product/path/${params}`)
      .then(res => res.json())
      .then(data => setProductDetails(data.data))
  }, [params])

  const { name, sellingPrice, quantity, rating, description, images } =
    productDetails || {}

  return (
    <>
      <MainLayout>
        <div className="bg-[#f7f7ff9c] pb-20  pt-5">
          <Container maxWidth="lg">
            <Card className="mt-20  pb-10">
              <Grid container>
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={7}
                  p={3}
                  className="overflow-hidden"
                >
                  <ProductDetailsCarousel product={productDetails} />
                </Grid>
                <Grid item xs={12} md={6} lg={5} p={5}>
                  <Label
                    // variant={theme.palette.mode === "light" ? "ghost" : "filled"}
                    color={quantity > 0 ? 'success' : 'error'}
                    sx={{ textTransform: 'uppercase' }}
                  >
                    {quantity > 0 ? 'In-Stock' : 'Stock-Out'}
                  </Label>

                  <h1 className="text-xl font-semibold mt-3">{name}</h1>

                  <Stack
                    spacing={0.5}
                    direction="row"
                    alignItems="center"
                    sx={{ mb: 2, mt: 1 }}
                  >
                    <Rating value={`${rating}.5`} precision={0.1} readOnly />
                    <Typography variant="body2" sx={{ color: 'text.primary' }}>
                      {rating} Ratings
                    </Typography>
                  </Stack>
                  <p className="text-sm">
                    Brand: {productDetails?.brand?.name}
                  </p>
                  <p className="text-xl font-semibold mt-3 text-secondary">
                    ৳ {sellingPrice}
                  </p>
                  <strike className="text-[#7a7a7a] text-xs">
                    ৳ {sellingPrice}
                  </strike>

                  <div className="mt-4">
                    <div className="flex items-center gap-5">
                      <p className="text-sm">Size</p>
                      <div className="flex items-center ">
                        {productDetails?.size?.map(size => (
                          <div className="border border-[#7a7a7a] px-3 py-1 mx-1 cursor-pointer text-xs rounded">
                            {size}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 pb-20 gap-4 relative items-center flex">
                    <p className="text-sm">Quantity :</p>

                    <div className="flex  gap-2">
                      <div
                        className="cursor-pointer select-none rounded text-center flex items-center justify-center bg-[#ecebff] h-8 w-8"
                        onClick={() =>
                          setProductQuantity(
                            productQuantity > 1 ? productQuantity - 1 : 1
                          )
                        }
                      >
                        -
                      </div>
                      <p className="w-8 h-8 flex items-center justify-center">
                        {productQuantity}
                      </p>
                      <div
                        className="cursor-pointer select-none rounded text-center flex items-center justify-center bg-[#ecebff] h-8 w-8"
                        onClick={() =>
                          setProductQuantity(
                            productQuantity < quantity
                              ? productQuantity + 1
                              : quantity
                          )
                        }
                      >
                        +
                      </div>
                    </div>
                  </div>
                  <Divider sx={{ borderStyle: 'dashed' }} />

                  <Stack
                    spacing={2}
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{ mt: 5 }}
                  >
                    <Button
                      fullWidth
                      // disabled={isMaxQuantity}
                      size="large"
                      type="button"
                      color="warning"
                      variant="contained"
                      startIcon={<Icon icon={roundAddShoppingCart} />}
                      // onClick={handleAddCart}
                      sx={{ whiteSpace: 'nowrap' }}
                    >
                      Add to Cart
                    </Button>
                    <Button
                      onClick={() => router.push(`/checkout`)}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      Buy Now
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Card>
          </Container>
        </div>
      </MainLayout>

      <ChatButton
        ref={anchorRef}
        onClick={handleChatClick}
        color="primary"
        aria-label="Chat with Us"
      >
        <ChatBubbleIcon />
      </ChatButton>

      <ChatPopup
        chat={chatData}
        message={message}
        openChat={openChat}
        setOpenChat={setOpenChat}
        anchorRef={anchorRef.current}
      />
    </>
  )
}
