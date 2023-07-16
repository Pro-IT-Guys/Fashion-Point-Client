import { Label } from '@mui/icons-material'
import { Box, Card, Stack, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import Image from 'next/image'
import img1 from '../../../assets/product/Borka-2-Part-07-fc-01.jpg'
import { useRouter } from 'next/router'
import { ContextData } from 'context/dataProviderContext'
import { convertCurrency } from 'helpers/currencyHandler'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
})

// ----------------------------------------------------------------------

ProductCard.propTypes = {
  product: PropTypes.object,
}

export default function ProductCard({ product }) {
  const { fromCurrency, toCurrency } = useContext(ContextData)
  const { name, buyingPrice, sellingPrice, frontImage, backImage, path } = product || {}
  const router = useRouter()
  const [hovering, setHovering] = useState(false)

  const handleMouseEnter = () => {
    setHovering(true)
  }

  const handleMouseLeave = () => {
    setHovering(false)
  }

  return (

    <div className='bg-white shadow  rounded'
    >
      <div onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} className='w-full sm:h-[220px] h-64 px-1 pt-1 cursor-pointer overflow-hidden relative'>
        <div
          className={` absolute inset-0 transition-opacity duration-300 ${hovering ? 'opacity-0' : 'opacity-100'}`}>
          <Image
            src={frontImage}
            width={400}
            height={600}
            alt='banner'
            className='w-full h-full object-cover rounded-t'
          />
        </div>
        <div
          className={` absolute inset-0 transition-opacity duration-300 ${hovering ? 'opacity-100' : 'opacity-0'}`}>
          <Image
            src={backImage}
            width={400}
            height={600}
            alt='banner'
            className='w-full h-full object-cover rounded-t'
          />
        </div>
      </div>

      <div className='py-3'>
        {/* <span className='text-sm px-3 py-1 bg-accent text-white  font-semibold' >Wholesale</span> */}

        <div className='flex items-center gap-2 px-3'>
          <h1 className='text-primary font-bold'>৳ {sellingPrice}</h1>
          <strike className='text-neutral text-xs'><h1>৳ {sellingPrice}</h1></strike>
        </div>


        <h1
          onClick={() => router.push(`/products/${path}`)}
          className='px-3 text-xs cursor-pointer hover:text-primary duration-200 '>Calvin Klein Women's Scuba Sleeveless Princess...</h1>

        <div className='bg-secondary cursor-pointer hover:bg-[#fdcec4] duration-300 flex items-center justify-center text-sm gap-2 font-semibold px-2 py-1 rounded mx-3 mt-3'>
          <h1>Add To Cart</h1> <AddShoppingCartIcon fontSize='small' />
        </div>
      </div>
    </div>
  )
}
