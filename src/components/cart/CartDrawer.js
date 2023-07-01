import { useContext, useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import { Badge, Box, Drawer, Typography } from '@mui/material'
import Scrollbar from '../Scrollbar'
import { CustomIcons } from 'public/static/mui-icons'
import { ContextData } from 'context/dataProviderContext'
import { getCart, getStorage, setStorage } from 'apis/loadStorage'

export default function CartDrawer() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [cart, setCart] = useState(null)
  const [cartId, setCartId] = useState(null)

  useEffect(() => {
    const retriveCart = async () => {
      const cartData = await getCart()
      const cartId = await getStorage('cartId')
      setCart(cartData)
      setCartId(cartId)
    }
    retriveCart()
  }, [])

  const handleDrawerOpen = () => {
    setDrawerOpen(true)
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
  }

  const handleIncreaseQuantity = productId => {
    const updatedCart = [...cart]
    const productIndex = updatedCart.findIndex(item => item._id === productId)

    if (productIndex !== -1) {
      updatedCart[productIndex].quantity += 1
      setStorage('cart', updatedCart)

      setCart(updatedCart)
    }
  }

  const handleDecreaseQuantity = productId => {
    const updatedCart = [...cart]
    const productIndex = updatedCart.findIndex(item => item._id === productId)

    if (productIndex !== -1) {
      if (updatedCart[productIndex].quantity > 1) {
        updatedCart[productIndex].quantity -= 1
        setStorage('cart', updatedCart)

        setCart(updatedCart)
      }
    }
  }

  const handleViewCart = id => {
    console.log('View Cart', id)
  }

  const handleCheckout = () => {
    console.log('Checkout')
  }

  return (
    <>
      <Badge
        onClick={handleDrawerOpen}
        sx={{ cursor: 'pointer' }}
        badgeContent={3}
        color="primary"
      >
        <CustomIcons.ShoppingCartIcon color="action" />
      </Badge>

      <Drawer
        open={drawerOpen}
        onClose={handleDrawerClose}
        anchor="right"
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { pb: 5, width: 260 } }}
      >
        <Scrollbar>
          <Typography
            variant="h5"
            sx={{
              pt: 2,
              textAlign: 'center',
              marginRight: 'auto',
              marginLeft: 'auto',
              width: 'fit-content',
              borderBottom: 2,
            }}
          >
            Cart
          </Typography>

          <Box sx={{ marginTop: 2 }}>
            {cart ? (
              cart.map((product, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px',
                  }}
                >
                  <img
                    src={product.productId.frontImage}
                    alt={product.productId.metaDescription}
                    style={{
                      width: '50px',
                      height: '50px',
                      marginRight: '10px',
                    }}
                  />
                  <div>
                    <Typography sx={{ fontSize: 13 }}>
                      {product.productId.name.length > 20
                        ? product.productId.name.slice(0, 20) + '...'
                        : product.productId.name}
                    </Typography>
                    <Typography sx={{ fontSize: 13 }}>
                      Price: ${product.productId.sellingPrice}
                    </Typography>
                    <div className="mt-2">
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => handleDecreaseQuantity(product._id)}
                        style={{
                          fontSize: '10px',
                          padding: '0px',
                          paddingRight: '10px',
                          paddingLeft: '10px',
                          minWidth: 0,
                          minHeight: 0,
                        }}
                      >
                        <CustomIcons.RemoveIcon />
                      </Button>
                      <span style={{ margin: '0 10px' }}>
                        {product.quantity}
                      </span>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => handleIncreaseQuantity(product._id)}
                        style={{
                          fontSize: '10px',
                          padding: '0px',
                          paddingRight: '10px',
                          paddingLeft: '10px',
                          minWidth: 0,
                          minHeight: 0,
                        }}
                      >
                        <CustomIcons.AddIcon />
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <Typography sx={{ fontSize: 13, textAlign: 'center' }}>
                No items in cart
              </Typography>
            )}
          </Box>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px',
            }}
          >
            <Button variant="contained" onClick={() => handleViewCart(cartId)}>
              View Cart
            </Button>
            <Button variant="contained" onClick={handleCheckout}>
              Checkout
            </Button>
          </div>
        </Scrollbar>
      </Drawer>
    </>
  )
}
