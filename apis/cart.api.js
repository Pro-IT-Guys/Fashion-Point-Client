import axios from 'axios'
import { CART_URL } from './url'

export const addToCart = async data => {
  const { token, userId, productId, quantity } = data
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  try {
    const res = await axios.post(
      `${CART_URL}`,
      { userId, product: [{ productId, quantity }] },
      config
    )
    return res?.data
  } catch (error) {
    console.log(error)
  }
}

export const getCartByUserId = async data => {
  const { token, userId } = data
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  try {
    const res = await axios.get(`${CART_URL}/user/${userId}`, config)
    return res?.data
  } catch (error) {
    console.log(error)
  }
}

export const updateCart = async data => {
  const { token, userId, productId, quantity, cartId } = data
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  try {
    const res = await axios.patch(
      `${CART_URL}/${cartId}`,
      { userId, product: [{ productId, quantity }] },
      config
    )
    return res?.data
  } catch (error) {
    console.log(error)
  }
}

export const bulkUpdateCart = async data => {
  const { token, cartId, product } = data
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  try {
    const res = await axios.patch(
      `${CART_URL}/bulk/${cartId}`,
      { product },
      config
    )
    return res?.data
  } catch (error) {
    console.log(error)
  }
}
