import React, { useContext } from 'react'
import { ImCross } from 'react-icons/im'
import { ContextData } from 'context/dataProviderContext'

const ShippingAddressPopup = ({ setOpenPopup }) => {
  const { currentlyLoggedIn, toCurrency } = useContext(ContextData)


  return (
    <div className="popup_wrapper">
      <div className="popup_content relative">
        <ImCross
          onClick={() => setOpenPopup(false)}
          className="absolute right-0 top-0 mr-4 mt-4 h-4 w-4 cursor-pointer"
        />
        <div>
          <div className="w-1/2 mt-[-50px] mx-auto">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShippingAddressPopup
