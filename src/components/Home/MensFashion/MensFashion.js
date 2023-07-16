import { Container } from '@mui/material'
import { BASE_URL } from 'apis/url'
import React, { useEffect, useState } from 'react'
import ProductCard from '../Products/ProductCard'

export default function MensFashion() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`${BASE_URL}/Product`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.data)
            })
            .catch(err => console.log(err))
    }, [])


     
    return (
        <Container maxWidth='xl'>
            <div className='py-16'>
                <h1 className='text-2xl font-semibold mb-2'>Men's Fashion</h1>

                <div className='grid xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4'>
                    {
                        products.map(product => <ProductCard key={product.id} product={product} />)
                    }
                </div>
            </div>
        </Container>
    )
}
