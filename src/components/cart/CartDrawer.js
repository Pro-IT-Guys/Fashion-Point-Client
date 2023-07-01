import { useState } from 'react'
import Button from '@mui/material/Button'
import { Badge, Box, Drawer, Typography } from '@mui/material'
import Scrollbar from '../Scrollbar'
import { CustomIcons } from 'public/static/mui-icons'

export default function CartDrawer() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 10,
      quantity: 2,
      image: '/static/4f8fa1c4d7e6ad38f03483a6cca7f012.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 15,
      quantity: 1,
      image: '/static/4f8fa1c4d7e6ad38f03483a6cca7f012.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 20,
      quantity: 3,
      image: '/static/4f8fa1c4d7e6ad38f03483a6cca7f012.jpg',
    },
  ]

  const handleDrawerOpen = () => {
    setDrawerOpen(true)
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
  }

  const handleIncreaseQuantity = productId => {
    console.log(`Increase quantity for product ${productId}`)
  }

  const handleDecreaseQuantity = productId => {
    console.log(`Decrease quantity for product ${productId}`)
  }

  const handleViewCart = () => {
    console.log('View Cart')
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
            {products.map(product => (
              <div
                key={product.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '10px',
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '50px', height: '50px', marginRight: '10px' }}
                />
                <div>
                  <h4>{product.name}</h4>
                  <p>Price: ${product.price}</p>
                  <div>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => handleDecreaseQuantity(product.id)}
                    >
                      <CustomIcons.RemoveIcon />
                    </Button>
                    <span style={{ margin: '0 10px' }}>{product.quantity}</span>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => handleIncreaseQuantity(product.id)}
                    >
                      <CustomIcons.AddIcon />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </Box>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px',
            }}
          >
            <Button variant="contained" onClick={handleViewCart}>
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
