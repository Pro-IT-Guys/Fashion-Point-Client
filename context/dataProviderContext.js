import { loggedInUser } from 'apis/auth.api'
import { getCartByUserId } from 'apis/cart.api'
import { getStorage, setStorage } from 'apis/loadStorage'
import React, { createContext, useEffect, useState } from 'react'

export const ContextData = createContext()

export const ContextProvider = ({ children }) => {
  const [currentlyLoggedIn, setcurrentlyLoggedIn] = useState(null)
  const [token, setToken] = useState(null)
  const [usersCart, setUsersCart] = useState(null)

  useEffect(() => {
    const retriveUser = async () => {
      const token = await getStorage('token')
      setToken(token)

      if (token) {
        const user = await loggedInUser(token)
        setcurrentlyLoggedIn(user?.data)

        // Get the users cart
        const cart = await getCartByUserId({ token, userId: user?.data?._id })
        if (cart?.statusCode === 200) {
          setUsersCart(cart?.data)
          setStorage('cart', cart?.data.product)
        }
      }
    }
    retriveUser()
  }, [])

  const contextValues = {
    token,
    currentlyLoggedIn,
    setToken,
    usersCart,
  }

  return (
    <ContextData.Provider value={contextValues}>
      {children}
    </ContextData.Provider>
  )
}
