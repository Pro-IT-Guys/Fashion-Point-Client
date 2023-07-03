import { Label } from '@mui/icons-material'
import { Box, Card, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import Image from 'next/image'
import img1 from '../../../assets/product/Borka-2-Part-07-fc-01.jpg'
import { useRouter } from 'next/router'
import { ContextData } from 'context/dataProviderContext'
import { convertCurrency } from 'helpers/currencyHandler'

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
  const { name, sellingPrice, frontImage, backImage, path } = product || {}
  const router = useRouter()

  return (
    <div className="shadow hover:shadow-md rounded overflow-hidden  h-full">
      <div className="bg-white h-full">
        <div className="h-80 w-full overflow-hidden">
          <Image
            // src={`http://localhost:8000/images/product/${frontImage} `}
            src={frontImage}
            alt="Picture of the borka"
            height={800}
            width={500}
            className="object-cover max-h-full w-full"
          />
        </div>
        <div className="px-2 bg-white py-2">
          <div className="h-14">
            <h1
              onClick={() => router.push(`/product/${path}`)}
              className="font-semibold mt-2 h-full text-xs cursor-pointer hover:text-[#4d50ff]"
            >
              {' '}
              {name.slice(0, 80) + (name.length > 80 ? '...' : '')}
            </h1>
          </div>
          <p className="text-error  mt-2 mb-0">
            {convertCurrency(fromCurrency, toCurrency, sellingPrice)}
          </p>
          {/* <strike className="text-[#7a7a7a] text-xs">৳ {sellingPrice}</strike> */}
        </div>
      </div>
    </div>
  )
}
