import React, { useContext, useEffect } from 'react'
import Router from 'next/router'
import { ContextData } from 'context/dataProviderContext'

const useAuthAdmin = WrappedComponent => {
  return props => {
    const { currentlyLoggedIn, setUpdate } = useContext(ContextData)
    const { role, } = currentlyLoggedIn || {}

   

    useEffect(() => {
      const userRole = localStorage.getItem('role')
      
      if (userRole !== 'admin') {
        Router.push('/unauthorized')
      }
    }, [])

    return <WrappedComponent {...props} />
  }
}

export default useAuthAdmin
