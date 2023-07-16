import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Inspiration from '../Inspiration/Inspiration'
import ShirtCollection from './ShirtCollection'
import PanjabiCollection from './PanjabiCollection'
import TShirtCollection from './TShirtCollection'
import MensAdvertise from './MensAdvertise'

export default function MensFashion() {
    return (
        <div className='py-10'>
            <Container maxWidth='lg'>
                <h1 className='text-2xl font-semibold mb-2'>Shirt Collection</h1>
            </Container>

            <ShirtCollection />
            {/* <Container maxWidth='lg'>
                <div className='grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 pb-10'>
                    {
                        shirts?.slice(0, 12)?.map(product => <ProductCard key={product.id} product={product} />)
                    }
                </div>
            </Container> */}
            <MensAdvertise />
            <PanjabiCollection />
            <TShirtCollection />
        </div>
    )
}
