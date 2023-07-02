import { loggedInUser } from 'apis/auth.api'
import { getCartByUserId } from 'apis/cart.api'
import { getStorage, setStorage } from 'apis/loadStorage'
import { getCurrentLocation } from 'apis/location'
import React, { createContext, useEffect, useState } from 'react'

export const ContextData = createContext()

export const ContextProvider = ({ children }) => {
  const [currentlyLoggedIn, setcurrentlyLoggedIn] = useState(null)
  const [token, setToken] = useState(null)
  const [location, setLocation] = useState(null)
  const [fromCurrency, setFromCurrency] = useState(null)
  const [toCurrency, setToCurrency] = useState(null)
  const [usersCart, setUsersCart] = useState(null)
  const [cartSimplified, setCartSimplified] = useState(null) // Simplified cart for the drawer

  console.log(fromCurrency, toCurrency, 'fromCurrency')
  useEffect(() => {
    const retriveUser = async () => {
      const location = await getCurrentLocation()
      setLocation(location?.data)
      if (location?.data?.country === 'United Arab Emirates') {
        setFromCurrency('AED')
        setToCurrency('AED')
      } else {
        setFromCurrency('AED')
        setToCurrency('USD')
      }

      const token = await getStorage('token')
      setToken(token)

      if (token) {
        const user = await loggedInUser(token)
        setcurrentlyLoggedIn(user?.data)
        // Get the users cart
        const cart = await getCartByUserId({ token, userId: user?.data?._id })
        if (cart?.statusCode === 200) {
          setUsersCart(cart?.data)
          setCartSimplified(cart?.data?.product)
        }
      }
    }
    retriveUser()
  }, [])

  console.log(location, 'location')

  const contextValues = {
    token,
    currentlyLoggedIn,
    setToken,
    usersCart,
    cartSimplified,
    setCartSimplified,
    location,
    fromCurrency,
    toCurrency,
  }

  return (
    <ContextData.Provider value={contextValues}>
      {children}
    </ContextData.Provider>
  )
}
