import { Container } from '@mui/material'
import { BASE_URL } from 'apis/url'
import React, { useEffect, useState } from 'react'
import ProductCard from '../Products/ProductCard'
import Inspiration from '../Inspiration/Inspiration'
import ShirtCollection from './ShirtCollection'
import PanjabiCollection from './PanjabiCollection'
import TShirtCollection from './TShirtCollection'

export default function MensFashion() {
    const [shirts, setShirts] = useState([])
    const [panjabis, setPanjabis] = useState([])
    const [tShirts, setTShirts] = useState([])

    useEffect(() => {
        fetch(`${BASE_URL}/Product?category=Shirt`)
            .then(res => res.json())
            .then(data => {
                setShirts(data.data)
            })
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        fetch(`${BASE_URL}/Product?category=Panjabi`)
            .then(res => res.json())
            .then(data => {
                setPanjabis(data.data)
            })
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        fetch(`${BASE_URL}/Product?category=T-Shirt`)
            .then(res => res.json())
            .then(data => {
                setTShirts(data.data)
            })
            .catch(err => console.log(err))
    }, [])



    return (
        <div className='py-16'>
            <Container maxWidth='lg'>
                <h1 className='text-2xl font-semibold mb-2'>Men's Fashion</h1>
            </Container>

            <ShirtCollection />
            {/* <Container maxWidth='lg'>
                <div className='grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 pb-10'>
                    {
                        shirts?.slice(0, 12)?.map(product => <ProductCard key={product.id} product={product} />)
                    }
                </div>
            </Container> */}
            <Inspiration />
            <PanjabiCollection/>
            <TShirtCollection/>

            
        </div>
    )
}
