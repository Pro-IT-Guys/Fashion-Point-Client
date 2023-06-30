import { loggedInUser } from 'apis/auth.api'
import { getStorage } from 'apis/loadStorage'
import React, { createContext, useEffect, useState } from 'react'

export const ContextData = createContext()

export const ContextProvider = ({ children }) => {
  const [currentlyLoggedIn, setcurrentlyLoggedIn] = useState(null)
  const [token, setToken] = useState(null)

  useEffect(() => {
    const retriveUser = async () => {
      const token = await getStorage('token')
      setToken(token)

      if (token) {
        const user = await loggedInUser(token)
        setcurrentlyLoggedIn(user.data)
      }
    }
    retriveUser()
  }, [])

  const contextValues = {
    token,
    currentlyLoggedIn,
    setToken,
  }

  return (
    <ContextData.Provider value={contextValues}>
      {children}
    </ContextData.Provider>
  )
}
