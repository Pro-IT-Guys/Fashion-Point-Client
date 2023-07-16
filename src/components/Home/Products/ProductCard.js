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
import { AiFillStar } from 'react-icons/ai';

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
  const [hovering, setHovering] = useState(false)

  const handleMouseEnter = () => {
    setHovering(true)
  }

  const handleMouseLeave = () => {
    setHovering(false)
  }

  return (
    // <div className="shadow hover:shadow-md rounded overflow-hidden h-full">
    //   <div className="bg-white h-full">
    //     <div
    //       className="h-80 w-full relative overflow-hidden"
    //       onMouseEnter={handleMouseEnter}
    //       onMouseLeave={handleMouseLeave}
    //     >
    //       <div
    //         className={`absolute inset-0 transition-opacity duration-300 ${
    //           hovering ? 'opacity-0' : 'opacity-100'
    //         }`}
    //       >
    //         <Image
    //           src={frontImage}
    //           alt="Front Image"
    //           layout="fill"
    //           objectFit="cover"
    //         />
    //       </div>
    //       <div
    //         className={`absolute inset-0 transition-opacity duration-300 ${
    //           hovering ? 'opacity-100' : 'opacity-0'
    //         }`}
    //       >
    //         <Image
    //           src={backImage}
    //           alt="Back Image"
    //           layout="fill"
    //           objectFit="cover"
    //         />
    //       </div>
    //     </div>
    //     <div className="px-2 bg-white py-2">
    //       <div className="h-14">
    //         <h1
    //           onClick={() => router.push(`/products/${path}`)}
    //           className="font-semibold mt-2 h-full text-xs cursor-pointer hover:text-[#4d50ff]"
    //         >
    //           {name.slice(0, 80) + (name.length > 80 ? '...' : '')}
    //         </h1>
    //       </div>
    //       <p className="text-error mt-2 mb-0">
    //         {convertCurrency(fromCurrency, toCurrency, sellingPrice)}
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className='bg-white border  rounded'>
      <div
        // onClick={() => router.push('/product-details/1')}
        className='w-full h-60 p-2 cursor-pointer overflow-hidden'>
        <Image
          src={frontImage}
          width={300}
          height={400}
          alt='banner'
          className='w-full max-h-full object-cover rounded-t'
        />
      </div>
      <div className='mt-3 pb-2'>
        {/* <span className='text-sm px-3 py-1 bg-accent text-white  font-semibold' >Wholesale</span> */}

        <div className='mt-2 flex items-center gap-2 px-3'>
          <h1 className='text-primary font-bold'>$120.000</h1>
          <strike className='text-neutral text-xs'><h1>$150.000</h1></strike>
        </div>


        <h1
          // onClick={() => router.push('/product-details/1')}
          className='px-3 text-sm cursor-pointer hover:text-primary duration-200 '>Calvin Klein Women's Scuba Sleeveless Princess...</h1>

        {/* <div className='bg-secondary flex justify-between px-2 py-1 rounded mx-3 mt-2 mb-5'>
          <h1>Club Point:</h1>
          <h1 className='font-bold'>750</h1>
        </div> */}
      </div>
    </div>
  )
}
